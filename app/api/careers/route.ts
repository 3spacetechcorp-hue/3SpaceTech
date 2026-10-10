import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://threespacebackend.onrender.com/api/careers/all', {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 60 } // Optional: Cache the response for 60 seconds
    });

    if (!response.ok) {
      throw new Error(`Backend responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to proxy careers API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch careers from backend' },
      { status: 500 }
    );
  }
}
