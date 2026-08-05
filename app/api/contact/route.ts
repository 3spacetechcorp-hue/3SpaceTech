import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  organization?: string;
  subject?: string;
  message: string;
}

const senderEmail = process.env.SMTP_FROM || process.env.SMTP_USER;
const recipientEmail = process.env.CONTACT_EMAIL || 'contactus@a3spacetech.com';
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

function validatePayload(payload: ContactPayload) {
  if (!payload.name?.trim() || !payload.email?.trim() || !payload.message?.trim()) {
    return 'Name, email, and message are required.';
  }
  return null;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const error = validatePayload(body);
    if (error) {
      return NextResponse.json({ message: error }, { status: 400 });
    }

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !senderEmail) {
      return NextResponse.json(
        {
          message:
            'Email settings are not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS and optionally SMTP_FROM in your environment.',
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const htmlMessage = `
      <h2>New contact request</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Organization:</strong> ${body.organization || 'N/A'}</p>
      <p><strong>Subject:</strong> ${body.subject || 'General Inquiry'}</p>
      <p><strong>Message:</strong></p>
      <p>${body.message.replace(/\n/g, '<br/>')}</p>
    `;

    await transporter.sendMail({
      from: senderEmail,
      to: recipientEmail,
      replyTo: body.email,
      subject: `Contact form: ${body.subject || 'General Inquiry'}`,
      text: [
        `Name: ${body.name}`,
        `Email: ${body.email}`,
        `Organization: ${body.organization || 'N/A'}`,
        `Subject: ${body.subject || 'General Inquiry'}`,
        'Message:',
        body.message,
      ].join('\n'),
      html: htmlMessage,
    });

    return NextResponse.json({ message: 'Your message was sent successfully.' });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { message: 'Unable to send your message at this time. Please try again later.' },
      { status: 500 }
    );
  }
}
