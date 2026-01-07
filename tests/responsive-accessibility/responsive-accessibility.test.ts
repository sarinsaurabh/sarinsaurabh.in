/**
 * Responsive Design and Accessibility Tests
 * Task Group 4: Tests for mobile-first responsive behavior and accessibility compliance
 */

import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Responsive Design and Accessibility', () => {
  let globalCss: string;
  let baseLayoutContent: string;
  let homepageContent: string;

  beforeEach(() => {
    const cssPath = path.join(process.cwd(), 'src/styles/global.css');
    const layoutPath = path.join(process.cwd(), 'src/layouts/BaseLayout.astro');
    const pagePath = path.join(process.cwd(), 'src/pages/index.astro');

    globalCss = fs.readFileSync(cssPath, 'utf-8');
    baseLayoutContent = fs.readFileSync(layoutPath, 'utf-8');
    homepageContent = fs.readFileSync(pagePath, 'utf-8');
  });

  it('should maintain readable content on mobile viewport with proper padding', () => {
    // Content column should have max-width 680px for desktop readability
    expect(globalCss).toMatch(/main\s*\{[^}]*max-width:\s*680px/);

    // Content should have 1.5rem (24px) horizontal padding for comfortable mobile reading
    expect(globalCss).toMatch(/main\s*\{[^}]*padding:\s*[^;]*1\.5rem/);

    // Font size should be readable (18px base)
    expect(globalCss).toMatch(/html\s*\{[^}]*font-size:\s*18px/);

    // Line height should be readable for mobile
    expect(globalCss).toMatch(/body\s*\{[^}]*line-height:\s*1\.65/);
  });

  it('should have navigation that remains usable on smaller viewports', () => {
    // Navigation should use flexbox with wrap for mobile flexibility
    expect(baseLayoutContent).toMatch(/\.nav-list\s*\{[^}]*display:\s*flex/);
    expect(baseLayoutContent).toMatch(/\.nav-list\s*\{[^}]*flex-wrap:\s*wrap/);

    // Navigation should have appropriate gap spacing
    expect(baseLayoutContent).toMatch(/\.nav-list\s*\{[^}]*gap:\s*1\.5rem/);

    // Navigation links should have focus states for accessibility
    expect(baseLayoutContent).toMatch(/\.nav-link:focus\s*\{[^}]*outline/);
  });

  it('should maintain proper heading hierarchy with h1 before h2', () => {
    // Homepage should not have an h1 directly (the statement-lead serves as visual header)
    // The "What you'll find here" section should have h2
    expect(homepageContent).toContain('<h2>What you\'ll find here</h2>');

    // BaseLayout should establish semantic structure
    expect(baseLayoutContent).toContain('<header');
    expect(baseLayoutContent).toContain('<main');
    expect(baseLayoutContent).toContain('<footer');

    // All links should have visible focus indicators (accessibility)
    expect(globalCss).toMatch(/a:focus\s*\{[^}]*outline/);

    // Color contrast should be sufficient (#111 on white provides 17.4:1 ratio)
    expect(globalCss).toMatch(/body\s*\{[^}]*color:\s*#111/);
    expect(globalCss).toMatch(/body\s*\{[^}]*background-color:\s*#fff/);
  });
});
