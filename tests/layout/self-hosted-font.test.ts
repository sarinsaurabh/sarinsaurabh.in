/**
 * Self-hosted font tests (Issue #4)
 * Source Serif 4 must be served from the site's own origin via @fontsource,
 * not fetched from Google Fonts at runtime.
 */

import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Self-hosted Source Serif 4', () => {
  let baseLayoutContent: string;
  let globalCssContent: string;

  beforeEach(() => {
    baseLayoutContent = fs.readFileSync(
      path.join(process.cwd(), 'src/layouts/BaseLayout.astro'),
      'utf-8'
    );
    globalCssContent = fs.readFileSync(
      path.join(process.cwd(), 'src/styles/global.css'),
      'utf-8'
    );
  });

  it('BaseLayout no longer references Google Fonts (googleapis/gstatic)', () => {
    expect(baseLayoutContent).not.toContain('googleapis');
    expect(baseLayoutContent).not.toContain('gstatic');
    expect(baseLayoutContent).not.toContain('preconnect');
  });

  it('imports the self-hosted @fontsource font CSS (normal + italic)', () => {
    const combined = baseLayoutContent + globalCssContent;
    expect(combined).toContain('@fontsource-variable/source-serif-4');
    // italic variant must be imported (used for status indicators / emphasis)
    expect(combined).toMatch(/@fontsource-variable\/source-serif-4\/[^'";\s]*italic/);
  });

  it('global.css font-family matches the registered fontsource family name', () => {
    // The variable package registers "Source Serif 4 Variable"
    expect(globalCssContent).toContain('"Source Serif 4 Variable"');
    // and must not still point at the bare Google Fonts family name for body/headings
    expect(globalCssContent).not.toMatch(/font-family:\s*"Source Serif 4"/);
  });

  it('declares the fontsource package as a dependency', () => {
    const pkg = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf-8')
    );
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };
    expect(deps['@fontsource-variable/source-serif-4']).toBeTruthy();
  });
});
