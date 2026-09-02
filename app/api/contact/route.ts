import { NextResponse } from 'next/server';
import { z } from 'zod';
import clientPromise from '@/lib/mongodb';
import { Resend } from 'resend';
import { promises as fs } from 'fs';
import os from 'os';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactPayload {
  name: string;
  email: string;
  organization?: string;
  subject?: string;
  message: string;
}

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  organization: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
});

function escapeCsv(value: string) {
  const stringValue = String(value ?? '');
  return /[",\n]/.test(stringValue) ? `"${stringValue.replace(/"/g, '""')}"` : stringValue;
}

async function saveToSharedSheet(body: ContactPayload) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL || process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) return false;

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: body.name,
        email: body.email,
        organization: body.organization || '',
        subject: body.subject || 'General Inquiry',
        message: body.message,
      }),
    });
    if (!response.ok) {
      console.error('Shared sheet endpoint error:', response.status);
      return false;
    }
    return true;
  } catch (error) {
    console.error('Shared sheet network error:', error);
    return false;
  }
}

async function saveToCsv(body: ContactPayload) {
  const dataDir = process.env.NODE_ENV === 'production' ? os.tmpdir() : path.join(process.cwd(), 'data');
  const filePath = path.join(dataDir, 'contact-submissions.csv');

  await fs.mkdir(dataDir, { recursive: true });
  const exists = await fs.access(filePath).then(() => true).catch(() => false);

  const row = [
    new Date().toISOString(),
    escapeCsv(body.name),
    escapeCsv(body.email),
    escapeCsv(body.organization || ''),
    escapeCsv(body.subject || 'General Inquiry'),
    escapeCsv(body.message),
  ].join(',');

  const content = exists
    ? `${row}\n`
    : `timestamp,name,email,organization,subject,message\n${row}\n`;

  await fs.appendFile(filePath, content, 'utf8');
  return filePath;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // 1. Server-side validation
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { message: 'Invalid form data provided.' },
        { status: 400 }
      );
    }
    const payload = validationResult.data;

    // 2. MongoDB Atlas
    try {
      const client = await clientPromise;
      const db = client.db(); // uses default db from URI
      const inquiriesCollection = db.collection('inquiries');
      
      await inquiriesCollection.insertOne({
        name: payload.name,
        email: payload.email,
        organization: payload.organization || '',
        subject: payload.subject || 'General Inquiry',
        message: payload.message,
        createdAt: new Date(),
      });
    } catch (mongoError) {
      console.error('MongoDB insertion error:', mongoError);
      return NextResponse.json(
        { message: 'Unable to save your message at this time. Please try again later.' },
        { status: 500 }
      );
    }

    // 3. Existing Google Sheet/webhook & 4. Existing CSV fallback
    const savedToSharedSheet = await saveToSharedSheet(payload);
    if (!savedToSharedSheet) {
      try {
        await saveToCsv(payload);
      } catch (csvError) {
        console.error('CSV fallback error:', csvError);
        // Continue even if CSV fails, since we already saved to MongoDB
      }
    }

    // 5. Resend notification
    try {
      if (process.env.RESEND_API_KEY && process.env.INQUIRY_RECEIVER_EMAIL) {
        // We use a verified domain or onboarding@resend.dev if that's all that's available
        // Usually, the sender email should be configured as an env variable or default to a safe one
        const senderEmail = process.env.RESEND_SENDER_EMAIL || 'onboarding@resend.dev';
        
        // Escape HTML to prevent injection
        const safeMessage = payload.message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const htmlContent = `
          <h2>New Inquiry Received</h2>
          <p><strong>Name:</strong> ${payload.name}</p>
          <p><strong>Email:</strong> ${payload.email}</p>
          <p><strong>Organization:</strong> ${payload.organization || 'N/A'}</p>
          <p><strong>Subject:</strong> ${payload.subject || 'General Inquiry'}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${safeMessage.replace(/\n/g, '<br/>')}</p>
        `;

        await resend.emails.send({
          from: senderEmail,
          to: process.env.INQUIRY_RECEIVER_EMAIL,
          subject: `New Inquiry from ${payload.name} - ${payload.subject || 'General Inquiry'}`,
          html: htmlContent,
        });
      }
    } catch (resendError) {
      console.error('Resend notification error:', resendError);
      // Do NOT lose the inquiry, continue to success response
    }

    // 6. Success response
    return NextResponse.json({ message: 'Your message was saved successfully.' });

  } catch (error) {
    console.error('Contact API unexpected error:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

