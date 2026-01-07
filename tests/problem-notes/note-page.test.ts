/**
 * Problem Notes Individual Page Tests
 * Task Group 2: Tests for individual note page functionality
 */

import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();

describe('Problem Notes Individual Page', () => {
  it('should render title, status indicator, and date at top', () => {
    const notePagePath = path.join(projectRoot, 'src/pages/problem-notes/[slug].astro');
    const content = fs.readFileSync(notePagePath, 'utf-8');

    // Check for title rendering with entry.data.title
    expect(content).toContain('entry.data.title');

    // Check for status indicator with typography-based styling
    expect(content).toContain('entry.data.status');

    // Check for date display
    expect(content).toContain('entry.data.date');

    // Check for h1 element for title
    expect(content).toMatch(/<h1/);
  });

  it('should render MDX content with global typography styles', () => {
    const notePagePath = path.join(projectRoot, 'src/pages/problem-notes/[slug].astro');
    const content = fs.readFileSync(notePagePath, 'utf-8');

    // Check that entry.render() is used to get Content component
    expect(content).toContain('entry.render()');

    // Check that Content component is rendered
    expect(content).toMatch(/<Content\s*\/>/);
  });

  it('should display tags at end of page when present', () => {
    const notePagePath = path.join(projectRoot, 'src/pages/problem-notes/[slug].astro');
    const content = fs.readFileSync(notePagePath, 'utf-8');

    // Check for conditional tags rendering
    expect(content).toContain('entry.data.tags');

    // Check for tags section with appropriate styling (smaller font, muted color)
    expect(content).toMatch(/\.tags|tags-section|note-tags/);

    // Verify styling includes smaller font size and muted color
    expect(content).toMatch(/font-size:\s*0\.85rem|0\.85rem/);
    expect(content).toMatch(/#666|color:\s*#666/);
  });

  it('should have Back to Problem Notes link', () => {
    const notePagePath = path.join(projectRoot, 'src/pages/problem-notes/[slug].astro');
    const content = fs.readFileSync(notePagePath, 'utf-8');

    // Check for back navigation link
    expect(content).toContain('Back to Problem Notes');

    // Check for link to /problem-notes
    expect(content).toMatch(/href=["']\/problem-notes["']/);
  });
});

describe('Problem Notes Page Static Generation', () => {
  it('should use getStaticPaths with filterDrafts', () => {
    const notePagePath = path.join(projectRoot, 'src/pages/problem-notes/[slug].astro');
    const content = fs.readFileSync(notePagePath, 'utf-8');

    // Check for getStaticPaths export
    expect(content).toContain('getStaticPaths');

    // Check that filterDrafts is imported and used
    expect(content).toContain("import { filterDrafts }");
    expect(content).toMatch(/filterDrafts\s*\(/);

    // Check that entries are mapped to params and props
    expect(content).toContain('params');
    expect(content).toContain('props');
    expect(content).toContain('slug');
  });
});
