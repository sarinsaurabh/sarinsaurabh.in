/**
 * Now Page Tests
 * Task Group 2: Tests for Now page functionality
 */

import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();

describe('Now Page', () => {
  it('should use BaseLayout with correct title prop', () => {
    const pageFilePath = path.join(projectRoot, 'src/pages/now.astro');

    // Verify file exists
    expect(fs.existsSync(pageFilePath)).toBe(true);

    const content = fs.readFileSync(pageFilePath, 'utf-8');

    // Check for BaseLayout import
    expect(content).toContain("import BaseLayout from '../layouts/BaseLayout.astro'");

    // Check for BaseLayout usage with correct title
    expect(content).toContain('<BaseLayout');
    expect(content).toContain('Now - Saurabh Sarin');
  });

  it('should fetch from now collection and render MDX content', () => {
    const pageFilePath = path.join(projectRoot, 'src/pages/now.astro');
    const content = fs.readFileSync(pageFilePath, 'utf-8');

    // Check for getCollection import
    expect(content).toContain("import { getCollection } from 'astro:content'");

    // Check that collection is fetched (now collection)
    expect(content).toMatch(/getCollection\s*\(\s*['"]now['"]\s*\)/);

    // Check that entry.render() is used
    expect(content).toContain('.render()');

    // Check that Content component is rendered
    expect(content).toMatch(/<Content\s*\/>/);
  });

  it('should display lastUpdated date with subdued meta styling', () => {
    const pageFilePath = path.join(projectRoot, 'src/pages/now.astro');
    const content = fs.readFileSync(pageFilePath, 'utf-8');

    // Check for lastUpdated data access
    expect(content).toContain('lastUpdated');

    // Check for subdued meta styling (0.9rem font-size, #666 color)
    expect(content).toMatch(/font-size:\s*0\.9rem|0\.9rem/);
    expect(content).toMatch(/#666|color:\s*#666/);
  });

  it('should format date as "Month Day, Year" using toLocaleDateString', () => {
    const pageFilePath = path.join(projectRoot, 'src/pages/now.astro');
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
