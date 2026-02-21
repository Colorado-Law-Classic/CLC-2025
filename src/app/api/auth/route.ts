import { NextRequest, NextResponse } from 'next/server';

/**
 * Simple password-based authentication for the admin panel.
 * Requires ADMIN_PASSWORD environment variable to be set.
 * In development, set it in .env.local. In production, set it in Vercel dashboard.
 */
export async function POST(request: NextRequest) {
  try {
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) {
      console.error('ADMIN_PASSWORD environment variable is not set');
      return NextResponse.json(
        { success: false, error: 'Admin authentication is not configured' },
        { status: 503 }
      );
    }

    const { password } = await request.json();

    if (password === adminPassword) {
      const response = NextResponse.json({ success: true });
      // Set a session cookie (httpOnly for security)
      response.cookies.set('clc-admin-session', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });
      return response;
    }

    return NextResponse.json({ success: false, error: 'Invalid password' }, { status: 401 });
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('clc-admin-session');
  return response;
}
