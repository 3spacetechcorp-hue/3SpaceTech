import { promises as fs } from 'fs';
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

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const error = validatePayload(body);
    if (error) {
      return NextResponse.json({ message: error }, { status: 400 });
    }

    const dataDir = path.join(process.cwd(), 'data');
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

    return NextResponse.json({ message: 'Your message was saved successfully.' });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { message: 'Unable to save your message at this time. Please try again later.' },
      { status: 500 }
    );
  }
}
