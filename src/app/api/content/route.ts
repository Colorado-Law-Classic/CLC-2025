import { NextRequest, NextResponse } from 'next/server';
import { getContent, saveContent, saveContentToGitHub } from '@/lib/content';

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
 * When GITHUB_TOKEN is set, commits the updated content.ts to the repo
 * via the GitHub Contents API, triggering a Vercel redeployment.
 * Otherwise falls back to local filesystem (development only).
 */
export async function PUT(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const updates = await request.json();

    if (process.env.GITHUB_TOKEN) {
      await saveContentToGitHub(updates);
      return NextResponse.json({ success: true, content: updates, deployPending: true });
    }

    // Fall back to local filesystem for development
    saveContent(updates);
    const content = getContent();
    return NextResponse.json({ success: true, content });
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Invalid content data';
    const status = message.includes('not available') ? 501 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
