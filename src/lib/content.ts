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
 * Save content by committing an updated content.ts to the GitHub repo
 * via the Contents API. This triggers a Vercel redeployment so changes
 * appear on the live site after ~1 minute.
 * Requires GITHUB_TOKEN environment variable.
 */
export async function saveContentToGitHub(content: SiteContent): Promise<void> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error('GITHUB_TOKEN environment variable is required for saving content.');
  }

  const owner = process.env.GITHUB_REPO_OWNER || 'Colorado-Law-Classic';
  const repo = process.env.GITHUB_REPO_NAME || 'CLC-2025';
  const branch = process.env.GITHUB_REPO_BRANCH || 'main';
  const filePath = 'src/data/content.ts';
  const apiBase = 'https://api.github.com';

  // 1. Get current file to obtain SHA and preserve the interface definition
  const getRes = await fetch(
    `${apiBase}/repos/${owner}/${repo}/contents/${filePath}?ref=${branch}`,
    {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    }
  );

  if (!getRes.ok) {
    throw new Error(`Failed to read content.ts from GitHub: ${getRes.statusText}`);
  }

  const fileData = await getRes.json();
  const currentSource = Buffer.from(fileData.content, 'base64').toString('utf-8');

  // 2. Extract the interface/type section (everything before the defaultContent export)
  const exportMarker = 'export const defaultContent: SiteContent = ';
  const markerIndex = currentSource.indexOf(exportMarker);
  if (markerIndex === -1) {
    throw new Error('Could not find defaultContent export in content.ts');
  }
  const interfaceSection = currentSource.substring(0, markerIndex);

  // 3. Generate new file content with updated values
  const contentJson = JSON.stringify(content, null, 2);
  const newSource = interfaceSection + exportMarker + contentJson + ';\n';

  // 4. Commit the updated file via GitHub Contents API
  const putRes = await fetch(
    `${apiBase}/repos/${owner}/${repo}/contents/${filePath}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Update site content via admin panel',
        content: Buffer.from(newSource).toString('base64'),
        sha: fileData.sha,
        branch,
      }),
    }
  );

  if (!putRes.ok) {
    const errorData = await putRes.json().catch(() => ({}));
    throw new Error(
      `Failed to commit content to GitHub: ${errorData.message || putRes.statusText}`
    );
  }
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
