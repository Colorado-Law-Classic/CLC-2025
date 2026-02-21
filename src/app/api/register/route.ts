import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { firstName, lastName, email, phone, registrationType, teamName, notes } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !registrationType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the registration (future: save to database, send email, etc.)
    console.log('New registration:', {
      firstName,
      lastName,
      email,
      phone,
      registrationType,
      teamName,
      notes,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: 'Registration received' });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}
