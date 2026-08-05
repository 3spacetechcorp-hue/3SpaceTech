import { promises as fs } from 'fs';
import os from 'os';
import path from 'path';
import { NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  organization?: string;
  subject?: string;
  message: string;
}

function validatePayload(payload: ContactPayload) {
  if (!payload.name?.trim() || !payload.email?.trim() || !payload.message?.trim()) {
    return 'Name, email, and message are required.';
  }
  return null;
}

function escapeCsv(value: string) {
  const stringValue = String(value ?? '');
  return /[",\n]/.test(stringValue) ? `"${stringValue.replace(/"/g, '""')}"` : stringValue;
}

async function saveToSharedSheet(body: ContactPayload) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL || process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

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
    const errorText = await response.text();
    console.error('Shared sheet endpoint error:', response.status, errorText);
    return false;
  }

  return true;
}

async function saveToCsv(body: ContactPayload) {
  const dataDir = process.env.NODE_ENV === 'production' ? os.tmpdir() : path.join(process.cwd(), 'data');
  const filePath = path.join(dataDir, 'contact-submissions.csv');

  await fs.mkdir(dataDir, { recursive: true });

  const exists = await fs
    .access(filePath)
    .then(() => true)
    .catch(() => false);

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
    const body = (await req.json()) as ContactPayload;
    const error = validatePayload(body);
    if (error) {
      return NextResponse.json({ message: error }, { status: 400 });
    }

    const savedToSharedSheet = await saveToSharedSheet(body);
    if (savedToSharedSheet) {
      return NextResponse.json({ message: 'Your message was saved successfully to the shared sheet.' });
    }

    const filePath = await saveToCsv(body);
    return NextResponse.json({ message: `Your message was saved successfully to ${filePath}.` });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { message: 'Unable to save your message at this time. Please try again later.' },
      { status: 500 }
    );
  }
}
