/**
 * Typography and Layout Foundation Tests
 * Task Group 1: Tests for typography, font loading, and content layout
 */

import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Typography Foundation', () => {
  let globalCss: string;

  beforeEach(() => {
    const cssPath = path.join(process.cwd(), 'src/styles/global.css');
    globalCss = fs.readFileSync(cssPath, 'utf-8');
  });

  it('should load Source Serif 4 font via Google Fonts link in index page', () => {
    const indexPath = path.join(process.cwd(), 'src/pages/index.astro');
    const indexContent = fs.readFileSync(indexPath, 'utf-8');

    // Check for Google Fonts preconnect
    expect(indexContent).toContain('fonts.googleapis.com');
    expect(indexContent).toContain('fonts.gstatic.com');

    // Check for Source Serif 4 font loading
    expect(indexContent).toContain('Source+Serif+4');
  });

  it('should configure body text with font-size 18px and line-height 1.65', () => {
    // Check html font-size is 18px
    expect(globalCss).toMatch(/html\s*\{[^}]*font-size:\s*18px/);

    // Check body line-height is 1.65
    expect(globalCss).toMatch(/body\s*\{[^}]*line-height:\s*1\.65/);

    // Check body uses Source Serif 4 with Georgia fallback
    expect(globalCss).toMatch(/body\s*\{[^}]*font-family:\s*["']Source Serif 4["'],\s*Georgia,\s*serif/);
  });

  it('should set content column max-width to 680px', () => {
    // Check main element has max-width constraint
    expect(globalCss).toMatch(/main\s*\{[^}]*max-width:\s*680px/);

    // Check main element is centered
    expect(globalCss).toMatch(/main\s*\{[^}]*margin:\s*0\s+auto/);
  });

  it('should set text color to #111 on white background', () => {
    // Check body color is #111
    expect(globalCss).toMatch(/body\s*\{[^}]*color:\s*#111/);

    // Check body background is white
    expect(globalCss).toMatch(/body\s*\{[^}]*background-color:\s*#fff/);
  });
});
