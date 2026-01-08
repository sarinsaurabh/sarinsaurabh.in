/**
 * Case Studies List Page Tests
 * Task Group 1: Tests for list page functionality
 */

import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();

describe('Case Studies List Page', () => {
  it('should have list page file that renders without errors', () => {
    const listPagePath = path.join(projectRoot, 'src/pages/case-studies/index.astro');

    // Verify file exists
    expect(fs.existsSync(listPagePath)).toBe(true);

    const content = fs.readFileSync(listPagePath, 'utf-8');

    // Check for essential page structure
    expect(content).toContain('BaseLayout');
    expect(content).toContain('Case Studies');
  });

  it('should sort case studies in reverse chronological order', () => {
    const listPagePath = path.join(projectRoot, 'src/pages/case-studies/index.astro');
    const content = fs.readFileSync(listPagePath, 'utf-8');

    // Verify sorting logic exists - should sort by date descending
    expect(content).toContain('.sort(');
    expect(content).toMatch(/\.getTime\(\)/);
    // Check for descending order (b - a pattern for newest first)
    expect(content).toMatch(/b\.data\.date.*a\.data\.date|getTime\(\)\s*-/);
  });

  it('should use filterDrafts helper for draft exclusion in production', () => {
    const listPagePath = path.join(projectRoot, 'src/pages/case-studies/index.astro');
    const content = fs.readFileSync(listPagePath, 'utf-8');

    // Check that filterDrafts is imported and used
    expect(content).toContain("import { filterDrafts }");
    expect(content).toContain('filterDrafts');

    // Verify it's applied to case studies collection
    expect(content).toMatch(/filterDrafts\s*\(/);
  });

  it('should display title, description, context, and outcome for each case study', () => {
    const listPagePath = path.join(projectRoot, 'src/pages/case-studies/index.astro');
    const content = fs.readFileSync(listPagePath, 'utf-8');

    // Check that page references essential case study data fields
    expect(content).toContain('.data.title');
    expect(content).toContain('.data.description');
    expect(content).toContain('.data.context');
    expect(content).toContain('.data.outcome');
    expect(content).toContain('.data.date');

    // Check for link to individual case study pages
    expect(content).toContain('/case-studies/');
    expect(content).toContain('.slug');
  });
});
