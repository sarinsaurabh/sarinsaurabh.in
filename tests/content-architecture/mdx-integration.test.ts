/**
 * MDX Integration Tests
 * Task Group 1: Tests for MDX integration setup
 */

import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('MDX Integration', () => {
  it('should have @astrojs/mdx package installed', () => {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

    expect(packageJson.dependencies['@astrojs/mdx']).toBeDefined();
  });

  it('should have MDX integration configured in astro.config.mjs', () => {
    const configPath = path.join(process.cwd(), 'astro.config.mjs');
    const configContent = fs.readFileSync(configPath, 'utf-8');

    // Check that mdx is imported
    expect(configContent).toContain("import mdx from '@astrojs/mdx'");

    // Check that mdx() is added to integrations
    expect(configContent).toContain('integrations:');
    expect(configContent).toContain('mdx()');
  });

  it('should preserve existing Astro config settings', () => {
    const configPath = path.join(process.cwd(), 'astro.config.mjs');
    const configContent = fs.readFileSync(configPath, 'utf-8');

    // Preserve output: 'static'
    expect(configContent).toContain("output: 'static'");

    // Preserve build.format: 'directory'
    expect(configContent).toContain("format: 'directory'");

    // Preserve site URL
    expect(configContent).toContain("site: 'https://sarinsaurabh.in'");
  });
});
