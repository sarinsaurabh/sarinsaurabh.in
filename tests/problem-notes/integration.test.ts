/**
 * Problem Notes Integration Tests
 * Task Group 3: Additional tests to fill coverage gaps
 * Maximum 4 tests to cover critical integration scenarios
 */

import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();

describe('Problem Notes Integration', () => {
  it('should support complete navigation flow: list page to note page and back', () => {
    const listPagePath = path.join(projectRoot, 'src/pages/problem-notes/index.astro');
    const notePagePath = path.join(projectRoot, 'src/pages/problem-notes/[slug].astro');

    const listPageContent = fs.readFileSync(listPagePath, 'utf-8');
    const notePageContent = fs.readFileSync(notePagePath, 'utf-8');

    // List page links to individual notes via /problem-notes/{slug}
    expect(listPageContent).toMatch(/href=.*\/problem-notes\/.*\.slug/);

    // Note page has back link to list page
    expect(notePageContent).toContain('Back to Problem Notes');
    expect(notePageContent).toMatch(/href=["']\/problem-notes["']/);
  });

  it('should implement typography-based status styling for all three states', () => {
    const listPagePath = path.join(projectRoot, 'src/pages/problem-notes/index.astro');
    const content = fs.readFileSync(listPagePath, 'utf-8');

    // Check all three status CSS classes exist
    expect(content).toContain('status-exploring');
    expect(content).toContain('status-evolving');
    expect(content).toContain('status-stable');

    // Exploring: italic, weight 400
    expect(content).toMatch(/\.status-exploring[\s\S]*?font-style:\s*italic/);
    expect(content).toMatch(/\.status-exploring[\s\S]*?font-weight:\s*400/);

    // Evolving: normal, weight 400
    expect(content).toMatch(/\.status-evolving[\s\S]*?font-style:\s*normal/);
    expect(content).toMatch(/\.status-evolving[\s\S]*?font-weight:\s*400/);

    // Stable: weight 600
    expect(content).toMatch(/\.status-stable[\s\S]*?font-weight:\s*600/);
  });

  it('should handle empty state when no notes exist', () => {
    const listPagePath = path.join(projectRoot, 'src/pages/problem-notes/index.astro');
    const content = fs.readFileSync(listPagePath, 'utf-8');

    // Check for conditional rendering based on notes array length
    expect(content).toMatch(/sortedNotes\.length\s*>\s*0/);

    // Check for empty state message
    expect(content).toContain('No problem notes yet');
  });
});
