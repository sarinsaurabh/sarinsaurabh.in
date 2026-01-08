/**
 * Case Studies Individual Page Tests
 * Task Group 2: Tests for individual case study page functionality
 */

import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();

describe('Case Studies Individual Page', () => {
  it('should render correct title in header', () => {
    const pageFilePath = path.join(projectRoot, 'src/pages/case-studies/[slug].astro');

    // Verify file exists
    expect(fs.existsSync(pageFilePath)).toBe(true);

    const content = fs.readFileSync(pageFilePath, 'utf-8');

    // Check for title rendering with entry.data.title
    expect(content).toContain('entry.data.title');

    // Check for h1 element for title
    expect(content).toMatch(/<h1/);
  });

  it('should render MDX content successfully', () => {
    const pageFilePath = path.join(projectRoot, 'src/pages/case-studies/[slug].astro');
    const content = fs.readFileSync(pageFilePath, 'utf-8');

    // Check that entry.render() is used to get Content component
    expect(content).toContain('entry.render()');

    // Check that Content component is rendered
    expect(content).toMatch(/<Content\s*\/>/);
  });

  it('should have back navigation link present and correct', () => {
    const pageFilePath = path.join(projectRoot, 'src/pages/case-studies/[slug].astro');
    const content = fs.readFileSync(pageFilePath, 'utf-8');

    // Check for back navigation link text
    expect(content).toContain('Back to Case Studies');

    // Check for link to /case-studies
    expect(content).toMatch(/href=["']\/case-studies["']/);
  });

  it('should display date in "Month Day, Year" format', () => {
    const pageFilePath = path.join(projectRoot, 'src/pages/case-studies/[slug].astro');
    const content = fs.readFileSync(pageFilePath, 'utf-8');

    // Check for formatDate function with toLocaleDateString
    expect(content).toContain('formatDate');
    expect(content).toContain('toLocaleDateString');

    // Check for en-US locale formatting options
    expect(content).toContain("'en-US'");
    expect(content).toMatch(/year:\s*['"]numeric['"]/);
    expect(content).toMatch(/month:\s*['"]long['"]/);
    expect(content).toMatch(/day:\s*['"]numeric['"]/);
  });
});

describe('Case Studies Page Static Generation', () => {
  it('should use getStaticPaths with filterDrafts', () => {
    const pageFilePath = path.join(projectRoot, 'src/pages/case-studies/[slug].astro');
    const content = fs.readFileSync(pageFilePath, 'utf-8');

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
