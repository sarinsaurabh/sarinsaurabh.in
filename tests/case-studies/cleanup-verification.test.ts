/**
 * Case Studies Cleanup Verification Tests
 * Task Group 3: Tests for placeholder cleanup and routing verification
 */

import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();

describe('Case Studies Route Verification', () => {
  it('should serve the new list page at /case-studies route (not placeholder)', () => {
    const newListPagePath = path.join(projectRoot, 'src/pages/case-studies/index.astro');
    const oldPlaceholderPath = path.join(projectRoot, 'src/pages/case-studies.astro');

    // Verify the new list page exists and handles the route
    expect(fs.existsSync(newListPagePath)).toBe(true);

    // Verify the old placeholder file has been removed
    expect(fs.existsSync(oldPlaceholderPath)).toBe(false);

    // Verify the new page is the actual implementation (not a placeholder)
    const content = fs.readFileSync(newListPagePath, 'utf-8');
    expect(content).not.toContain('Coming soon');
    expect(content).not.toContain('placeholder');
    expect(content).toContain('getCollection');
    expect(content).toContain('.map(');
  });

  it('should support navigation to /case-studies from other pages', () => {
    const baseLayoutPath = path.join(projectRoot, 'src/layouts/BaseLayout.astro');
    const newListPagePath = path.join(projectRoot, 'src/pages/case-studies/index.astro');

    // Verify BaseLayout has navigation link to /case-studies
    const baseLayoutContent = fs.readFileSync(baseLayoutPath, 'utf-8');
    expect(baseLayoutContent).toContain("'/case-studies'");
    expect(baseLayoutContent).toContain('Case Studies');

    // Verify the navigation links work with the new page structure
    // The new index.astro in case-studies directory handles /case-studies route
    expect(fs.existsSync(newListPagePath)).toBe(true);

    // Verify active state detection works for case studies pages
    expect(baseLayoutContent).toContain('currentPath.startsWith(href)');
  });
});
