/**
 * 404 Page Tests
 * File-assertion tests per repo convention: the page exists, uses BaseLayout,
 * carries the correct title, and links back to home and problem-notes.
 */

import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('404 Page', () => {
  const pagePath = path.join(process.cwd(), 'src/pages/404.astro');
  let pageContent: string;

  beforeEach(() => {
    pageContent = fs.readFileSync(pagePath, 'utf-8');
  });

  it('should exist at src/pages/404.astro', () => {
    expect(fs.existsSync(pagePath)).toBe(true);
  });

  it('should use BaseLayout', () => {
    expect(pageContent).toContain("import BaseLayout from '../layouts/BaseLayout.astro'");
    expect(pageContent).toContain('<BaseLayout');
  });

  it('should set the "Page not found" title', () => {
    expect(pageContent).toContain('title="Page not found - Saurabh Sarin"');
  });

  it('should link to the home page', () => {
    expect(pageContent).toContain('href="/"');
  });

  it('should link to the problem-notes index', () => {
    expect(pageContent).toContain('href="/problem-notes/"');
  });

  it('should follow the .intro section + h1 pattern', () => {
    expect(pageContent).toContain('class="intro"');
    expect(pageContent).toContain('<h1>');
  });

  it('should keep the dry voice: no exclamation marks or jokey "oops"', () => {
    expect(pageContent).not.toContain('!');
    expect(pageContent.toLowerCase()).not.toContain('oops');
  });
});
