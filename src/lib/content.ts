import { defaultContent, SiteContent } from '@/data/content';
import fs from 'fs';
import path from 'path';

const CONTENT_FILE = path.join(process.cwd(), 'content.json');

/**
 * Get site content, merging defaults with any saved overrides.
 * In production, this reads from a content.json file at the project root.
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
 */
export function saveContent(content: Partial<SiteContent>): void {
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
