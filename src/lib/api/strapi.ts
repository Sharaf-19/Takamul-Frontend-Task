// src/lib/api/strapi.ts

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337';

/**
 * Base fetch wrapper for all Strapi API calls.
 * - Prepends /api to the path
 * - Appends all params as query strings
 * - Revalidates every 60 seconds
 * - Throws on non-OK responses
 */
export async function strapiGet<T>(path: string, params: Record<string, string> = {}): Promise<T> {
  const url = new URL(`/api${path}`, STRAPI_URL);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const res = await fetch(url.toString(), {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Strapi error ${res.status} on ${url.toString()}`);
  }

  return res.json() as Promise<T>;
}

/**
 * Build a full media URL from a Strapi image path.
 * Strapi returns relative paths like /uploads/image.jpg
 */
export function getStrapiMediaUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}
