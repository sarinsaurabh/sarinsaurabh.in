/**
 * Homepage Content Tests
 * Task Group 3: Tests for homepage content sections
 */

import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Homepage Content', () => {
  let homepageContent: string;

  beforeEach(() => {
    const pagePath = path.join(process.cwd(), 'src/pages/index.astro');
    homepageContent = fs.readFileSync(pagePath, 'utf-8');
  });

  it('should render opening statement section with correct copy', () => {
    // Check for the exact opening statement copy
    expect(homepageContent).toContain('Problem-first thinking.');
    expect(homepageContent).toContain('In a world full of solutions, the real problem often remains unsolved.');
    expect(homepageContent).toContain('This is a public workspace for thinking through complex, ambiguous problems.');
  });

  it('should render "What you\'ll find here" section as semantic ul/li list with 4 bullet points', () => {
    // Check for semantic list markup
    expect(homepageContent).toContain('<ul');
    expect(homepageContent).toContain('<li');

    // Check for all 4 bullet points
    expect(homepageContent).toContain('Problems explored before solutions are proposed');
    expect(homepageContent).toContain('Unfinished thinking and evolving ideas');
    expect(homepageContent).toContain('Real constraints, trade-offs, and judgment calls');
    expect(homepageContent).toContain('Writing meant to be read slowly, not skimmed');

    // Count the number of list items (should be 4)
    const liMatches = homepageContent.match(/<li[^>]*>/g);
    expect(liMatches).toBeTruthy();
    expect(liMatches?.length).toBe(4);
  });

  it('should render entry point link with correct text and placeholder URL', () => {
    // Check for the entry point link text
    expect(homepageContent).toContain('Start with a problem I\'m thinking about');

    // Check for link element pointing to placeholder URL
    expect(homepageContent).toMatch(/href=["'][^"']*problem-notes[^"']*["']/);
  });

  it('should use BaseLayout wrapper', () => {
    // Check that BaseLayout is imported
    expect(homepageContent).toContain("import BaseLayout from '../layouts/BaseLayout.astro'");

    // Check that content is wrapped in BaseLayout
    expect(homepageContent).toContain('<BaseLayout');
    expect(homepageContent).toContain('</BaseLayout>');
  });
});
