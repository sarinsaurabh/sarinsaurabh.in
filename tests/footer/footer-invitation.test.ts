/**
 * Footer Invitation Tests
 * Task Group 1: Tests for footer invitation link functionality
 */

import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Footer Invitation', () => {
  let baseLayoutContent: string;

  beforeEach(() => {
    const layoutPath = path.join(process.cwd(), 'src/layouts/BaseLayout.astro');
    baseLayoutContent = fs.readFileSync(layoutPath, 'utf-8');
  });

  it('should contain invitation text in footer', () => {
    // Check that the footer contains the invitation copy
    expect(baseLayoutContent).toContain('If something here resonates and you want to think through a problem together');
  });

  it('should have mailto link with correct email address', () => {
    // Check that the mailto link points to the correct email
    expect(baseLayoutContent).toContain('mailto:sarin.saurabh@gmail.com');
  });

  it('should have accessible link text (not generic "click here")', () => {
    // Check that the link text is descriptive ("reach out") not generic
    expect(baseLayoutContent).toContain('>reach out</a>');
    // Ensure no generic link text is used
    expect(baseLayoutContent).not.toContain('>click here</a>');
    expect(baseLayoutContent).not.toContain('>here</a>');
  });
});
