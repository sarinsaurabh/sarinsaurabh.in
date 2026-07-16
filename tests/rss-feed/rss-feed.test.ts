/**
 * RSS Feed Tests
 * Verifies the combined RSS feed source file exists, references both
 * content collections, filters drafts, and emits directory-format links.
 * Follows the repo's file-assertion testing style (fs + string assertions).
 */

import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('RSS Feed', () => {
  let feedSource: string;
  let feedPath: string;

  beforeAll(() => {
    // The feed can be authored as either .js or .ts
    const jsPath = path.join(process.cwd(), 'src/pages/rss.xml.js');
    const tsPath = path.join(process.cwd(), 'src/pages/rss.xml.ts');
    feedPath = fs.existsSync(jsPath) ? jsPath : tsPath;
    feedSource = fs.readFileSync(feedPath, 'utf-8');
  });

  it('should exist as a page route that emits /rss.xml', () => {
    expect(fs.existsSync(feedPath)).toBe(true);
  });

  it('should import rss from @astrojs/rss', () => {
    expect(feedSource).toContain('@astrojs/rss');
    expect(feedSource).toMatch(/import\s+rss\s+from\s+['"]@astrojs\/rss['"]/);
  });

  it('should reference both content collections', () => {
    expect(feedSource).toContain('problem-notes');
    expect(feedSource).toContain('case-studies');
    expect(feedSource).toContain('getCollection');
  });

  it('should filter drafts using filterDrafts semantics', () => {
    expect(feedSource).toContain('filterDrafts');
  });

  it('should sort entries newest first by date', () => {
    expect(feedSource).toContain('getTime()');
  });

  it('should build directory-format links (trailing slash) from the slug', () => {
    // Directory-format URLs end with a trailing slash after the slug.
    expect(feedSource).toContain('.slug}/');
    // Both collection prefixes are referenced when constructing links.
    expect(feedSource).toContain('problem-notes');
    expect(feedSource).toContain('case-studies');
  });

  it('should map required item fields (title, description, pubDate, link)', () => {
    expect(feedSource).toContain('title');
    expect(feedSource).toContain('description');
    expect(feedSource).toContain('pubDate');
    expect(feedSource).toContain('link');
  });

  it('should set feed metadata title to Saurabh Sarin and site from context', () => {
    expect(feedSource).toContain('Saurabh Sarin');
    expect(feedSource).toContain('context.site');
  });
});

describe('RSS Autodiscovery', () => {
  let baseLayoutContent: string;

  beforeAll(() => {
    const layoutPath = path.join(process.cwd(), 'src/layouts/BaseLayout.astro');
    baseLayoutContent = fs.readFileSync(layoutPath, 'utf-8');
  });

  it('should include an RSS autodiscovery link in the head', () => {
    expect(baseLayoutContent).toContain('type="application/rss+xml"');
    expect(baseLayoutContent).toContain('href="/rss.xml"');
    expect(baseLayoutContent).toContain('rel="alternate"');
  });
});
