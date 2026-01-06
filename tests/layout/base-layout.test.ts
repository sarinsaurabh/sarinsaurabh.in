/**
 * BaseLayout and Navigation Tests
 * Task Group 2: Tests for BaseLayout component and site navigation
 */

import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('BaseLayout Component', () => {
  let baseLayoutContent: string;

  beforeEach(() => {
    const layoutPath = path.join(process.cwd(), 'src/layouts/BaseLayout.astro');
    baseLayoutContent = fs.readFileSync(layoutPath, 'utf-8');
  });

  it('should render semantic HTML structure with header, nav, main, and footer', () => {
    // Check for semantic HTML elements
    expect(baseLayoutContent).toContain('<header');
    expect(baseLayoutContent).toContain('<nav');
    expect(baseLayoutContent).toContain('<main');
    expect(baseLayoutContent).toContain('<footer');
  });

  it('should contain all required navigation links (Home, Problem Notes, Case Studies, Now, About)', () => {
    // The navigation is defined in the navItems array in Astro frontmatter
    // Check that all required routes are defined
    expect(baseLayoutContent).toContain("{ href: '/', label: 'Home' }");
    expect(baseLayoutContent).toContain("{ href: '/problem-notes', label: 'Problem Notes' }");
    expect(baseLayoutContent).toContain("{ href: '/case-studies', label: 'Case Studies' }");
    expect(baseLayoutContent).toContain("{ href: '/now', label: 'Now' }");
    expect(baseLayoutContent).toContain("{ href: '/about', label: 'About' }");

    // Verify the navItems array maps to anchor elements with href and label
    expect(baseLayoutContent).toContain('href={item.href}');
    expect(baseLayoutContent).toContain('{item.label}');
  });

  it('should have navigation links as simple text without icons or dropdowns', () => {
    // Check the entire file for absence of icons and dropdowns
    // Navigation should not contain SVG icons
    expect(baseLayoutContent).not.toContain('<svg');
    // Should not contain dropdown indicators
    expect(baseLayoutContent).not.toContain('dropdown');
    expect(baseLayoutContent).not.toContain('chevron');
    expect(baseLayoutContent).not.toContain('caret');
    // Should not have button elements in navigation
    const navSection = baseLayoutContent.match(/<nav[^>]*>([\s\S]*?)<\/nav>/);
    expect(navSection).toBeTruthy();
    if (navSection) {
      expect(navSection[1]).not.toContain('<button');
    }
  });

  it('should render main content slot for child content', () => {
    // Check that the layout uses a slot for content
    expect(baseLayoutContent).toContain('<slot');
    // The slot should be inside the main element
    expect(baseLayoutContent).toMatch(/<main>[\s\S]*<slot[\s\S]*<\/main>/);
  });
});
