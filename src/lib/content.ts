/**
 * Content utility functions for managing Astro content collections
 */

interface ContentEntry {
  data: {
    draft?: boolean;
  };
}

/**
 * Filters draft content entries based on environment
 * Drafts are excluded in production, visible in development
 */
export function filterDrafts<T extends ContentEntry>(entries: T[]): T[] {
  if (import.meta.env.PROD) {
    return entries.filter((entry) => !entry.data.draft);
  }
  return entries;
}
