/**
 * Problem Notes List Page Tests
 * Task Group 1: Tests for list page functionality
 */

import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectRoot = process.cwd();

describe('Problem Notes List Page', () => {
  it('should have list page file with intro section content', () => {
    const listPagePath = path.join(projectRoot, 'src/pages/problem-notes/index.astro');
    const content = fs.readFileSync(listPagePath, 'utf-8');

    // Check for title
    expect(content).toContain('Problem Notes');

    // Check for subtitle
    expect(content).toContain(
      'Short explorations of problems'
    );

    // Check for additional line
    expect(content).toContain('Unfinished thinking is welcome');
  });

  it('should sort notes in reverse chronological order', () => {
    const listPagePath = path.join(projectRoot, 'src/pages/problem-notes/index.astro');
    const content = fs.readFileSync(listPagePath, 'utf-8');

    // Verify sorting logic exists - should sort by date descending
    expect(content).toContain('.sort(');
    expect(content).toMatch(/\.getTime\(\)/);
    // Check for descending order (b - a pattern for newest first)
    expect(content).toMatch(/b\.data\.date.*a\.data\.date|getTime\(\)\s*-/);
  });

  it('should display title, description, status, and date for each note', () => {
    const listPagePath = path.join(projectRoot, 'src/pages/problem-notes/index.astro');
    const content = fs.readFileSync(listPagePath, 'utf-8');

    // Check that page references essential note data fields
    expect(content).toContain('.data.title');
    expect(content).toContain('.data.description');
    expect(content).toContain('.data.status');
    expect(content).toContain('.data.date');

    // Check for link to individual note pages
    expect(content).toContain('/problem-notes/');
    expect(content).toContain('.slug');
  });

  it('should use filterDrafts helper for draft exclusion', () => {
    const listPagePath = path.join(projectRoot, 'src/pages/problem-notes/index.astro');
    const content = fs.readFileSync(listPagePath, 'utf-8');

    // Check that filterDrafts is imported and used
    expect(content).toContain("import { filterDrafts }");
    expect(content).toContain('filterDrafts');

    // Verify it's applied to notes collection
    expect(content).toMatch(/filterDrafts\s*\(/);
  });
});

describe('Problem Notes Status Indicators', () => {
  it('should implement typography-based status styling', () => {
    const listPagePath = path.join(projectRoot, 'src/pages/problem-notes/index.astro');
    const content = fs.readFileSync(listPagePath, 'utf-8');

    // Check for status-specific styling in style block or inline
    // exploring: italic
    expect(content).toMatch(/exploring.*italic|font-style:\s*italic/i);

    // stable: font-weight 600
    expect(content).toMatch(/stable.*600|font-weight:\s*600/i);
  });
});
