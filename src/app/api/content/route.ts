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
  } catch {
    return NextResponse.json({ error: 'Invalid content data' }, { status: 400 });
  }
}
