import { defaultContent, SiteContent } from '@/data/content';
import fs from 'fs';
import path from 'path';

const CONTENT_FILE = path.join(process.cwd(), 'content.json');

/**
 * Whether we're running on a platform with a persistent filesystem.
 * Vercel serverless functions have an ephemeral filesystem, so writes
 * won't persist across deployments or cold starts. Content editing via
 * the admin panel only works reliably in development or self-hosted mode.
 */
const isPersistentFs = process.env.NODE_ENV === 'development' || process.env.PERSISTENT_FS === 'true';

/**
 * Get site content, merging defaults with any saved overrides.
 * In development, reads from content.json at the project root.
 * In production on Vercel, always returns defaults (filesystem is ephemeral).
 */
export function getContent(): SiteContent {
  try {
    if (fs.existsSync(CONTENT_FILE)) {
      const raw = fs.readFileSync(CONTENT_FILE, 'utf-8');
      const overrides = JSON.parse(raw);
      return deepMerge(defaultContent, overrides) as SiteContent;
    }
  } catch (e) {
    console.error('Error reading content overrides:', e);
  }
  return defaultContent;
}

/**
 * Save content overrides to the content.json file.
 * Only works when the filesystem is persistent (development or self-hosted).
 * Throws an error on Vercel production where the filesystem is ephemeral.
 */
export function saveContent(content: Partial<SiteContent>): void {
  if (!isPersistentFs) {
    throw new Error(
      'Content saving is not available on this platform. ' +
      'On Vercel, edit content in src/data/content.ts and redeploy. ' +
      'Set PERSISTENT_FS=true if running on a platform with a persistent filesystem.'
    );
  }
  fs.writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2), 'utf-8');
}

/**
 * Deep merge utility for merging content overrides with defaults.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepMerge(target: any, source: any): any {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key]) &&
      target[key] &&
      typeof target[key] === 'object' &&
      !Array.isArray(target[key])
    ) {
      result[key] = deepMerge(target[key], source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}
