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

  it('should self-host Source Serif 4 via @fontsource instead of Google Fonts', () => {
    const layoutPath = path.join(process.cwd(), 'src/layouts/BaseLayout.astro');
    const layoutContent = fs.readFileSync(layoutPath, 'utf-8');

    // No runtime dependency on Google Fonts
    expect(layoutContent).not.toContain('fonts.googleapis.com');
    expect(layoutContent).not.toContain('fonts.gstatic.com');

    // Font is imported from the self-hosted @fontsource package (via global.css)
    expect(globalCss).toContain('@fontsource-variable/source-serif-4');
  });

  it('should configure body text with font-size 18px and line-height 1.65', () => {
    // Check html font-size is 18px
    expect(globalCss).toMatch(/html\s*\{[^}]*font-size:\s*18px/);

    // Check body line-height is 1.65
    expect(globalCss).toMatch(/body\s*\{[^}]*line-height:\s*1\.65/);

    // Check body uses the self-hosted Source Serif 4 family with Georgia fallback
    expect(globalCss).toMatch(/body\s*\{[^}]*font-family:\s*["']Source Serif 4 Variable["'],\s*Georgia,\s*serif/);
  });

  it('should set content column max-width to 680px', () => {
    // Check main element has max-width constraint
    expect(globalCss).toMatch(/main\s*\{[^}]*max-width:\s*680px/);

    // Check main element is centered
    expect(globalCss).toMatch(/main\s*\{[^}]*margin:\s*0\s+auto/);
  });

  it('should set text and background colors from the palette tokens', () => {
    // Check body text color uses the primary text token
    expect(globalCss).toMatch(/body\s*\{[^}]*color:\s*var\(--color-text\)/);

    // Check body background uses the background token
    expect(globalCss).toMatch(/body\s*\{[^}]*background-color:\s*var\(--color-bg\)/);
  });
});
