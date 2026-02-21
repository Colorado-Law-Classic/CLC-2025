import { NextRequest, NextResponse } from 'next/server';
import { getContent, saveContent } from '@/lib/content';

/**
 * Check if the request has a valid admin session cookie.
 */
function isAuthenticated(request: NextRequest): boolean {
  const session = request.cookies.get('clc-admin-session');
  return session?.value === 'authenticated';
}

/**
 * GET /api/content - Retrieve current site content
 */
export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const content = getContent();
  return NextResponse.json(content);
}

/**
 * PUT /api/content - Update site content
 * Accepts a partial content object and merges with defaults.
 * Note: On Vercel, saving is not supported due to the ephemeral filesystem.
 */
export async function PUT(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const updates = await request.json();
    saveContent(updates);
    const content = getContent();
    return NextResponse.json({ success: true, content });
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Invalid content data';
    const status = message.includes('not available') ? 501 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
