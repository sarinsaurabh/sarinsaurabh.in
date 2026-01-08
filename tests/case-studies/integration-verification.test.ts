/**
 * Case Studies Integration Verification Tests
 * Task Group 4: Additional strategic tests to fill coverage gaps
 *
 * These tests focus on critical user workflows and spec requirements
 * that were not fully covered by Task Groups 1-3.
 */

import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();

describe('Case Studies Empty State', () => {
  it('should render empty state message when no case studies exist', () => {
    const listPagePath = path.join(projectRoot, 'src/pages/case-studies/index.astro');
    const content = fs.readFileSync(listPagePath, 'utf-8');

    // Check for conditional rendering with empty state
    expect(content).toContain('.length > 0');
    expect(content).toContain('No case studies yet.');

    // Verify the empty state has appropriate styling class
    expect(content).toContain('no-studies');
  });
});

describe('Case Studies List Labels', () => {
  it('should display Context and Outcome with proper labels', () => {
    const listPagePath = path.join(projectRoot, 'src/pages/case-studies/index.astro');
    const content = fs.readFileSync(listPagePath, 'utf-8');

    // Verify Context label is displayed
    expect(content).toMatch(/<span[^>]*class="label"[^>]*>Context:<\/span>/);

    // Verify Outcome label is displayed
    expect(content).toMatch(/<span[^>]*class="label"[^>]*>Outcome:<\/span>/);

    // Check CSS styling for labels
    expect(content).toContain('.study-context .label');
    expect(content).toContain('.study-outcome .label');
  });
});

describe('Case Studies Intro Section', () => {
  it('should have intro section with heading and subtitle', () => {
    const listPagePath = path.join(projectRoot, 'src/pages/case-studies/index.astro');
    const content = fs.readFileSync(listPagePath, 'utf-8');

    // Check for intro section structure
    expect(content).toContain('class="intro"');
    expect(content).toMatch(/<h1>Case Studies<\/h1>/);
    expect(content).toContain('class="subtitle"');

    // Verify subtitle contains meaningful description
    expect(content).toMatch(/Deep-dive.*explorations|constraints.*trade-offs/i);
  });
});

describe('Case Studies Page Metadata', () => {
  it('should set correct page title and description for individual pages', () => {
    const pageFilePath = path.join(projectRoot, 'src/pages/case-studies/[slug].astro');
    const content = fs.readFileSync(pageFilePath, 'utf-8');

    // Check title format includes entry title and site branding
    expect(content).toContain('entry.data.title');
    expect(content).toContain('Case Studies');
    expect(content).toContain('Saurabh Sarin');

    // Verify title is passed to BaseLayout
    expect(content).toMatch(/title=\{[`'"].*entry\.data\.title.*[`'"]\}/);

    // Verify description uses entry description
    expect(content).toMatch(/description=\{entry\.data\.description\}/);
  });
});

describe('Case Studies Typography and Styling', () => {
  it('should use correct color palette matching Problem Notes', () => {
    const listPagePath = path.join(projectRoot, 'src/pages/case-studies/index.astro');
    const content = fs.readFileSync(listPagePath, 'utf-8');

    // Check for correct color values from spec
    expect(content).toContain('#111'); // primary text
    expect(content).toContain('#333'); // secondary text
    expect(content).toContain('#666'); // meta text
    expect(content).toContain('#eee'); // borders

    // Check for proper font sizes
    expect(content).toContain('1.25rem'); // title size
    expect(content).toContain('1rem');    // description size
    expect(content).toContain('0.9rem');  // meta size
  });
});
