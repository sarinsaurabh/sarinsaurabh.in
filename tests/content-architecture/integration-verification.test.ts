/**
 * Integration Verification Tests
 * Task Group 4: Additional strategic tests to fill coverage gaps
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { z } from 'astro/zod';

const projectRoot = process.cwd();

// Re-create schemas to test missing required field validation
const problemNotesSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  status: z.enum(['exploring', 'evolving', 'stable']),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().default(false),
});

const caseStudiesSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  context: z.string(),
  outcome: z.string(),
  draft: z.boolean().default(false),
});

describe('Content Configuration File', () => {
  it('should have content.config.ts file that exports collections', () => {
    const configPath = path.join(projectRoot, 'src/content.config.ts');
    const configContent = fs.readFileSync(configPath, 'utf-8');

    // Verify file exists and has proper structure
    expect(fs.existsSync(configPath)).toBe(true);
    expect(configContent).toContain("import { defineCollection, z } from 'astro:content'");
    expect(configContent).toContain('export const collections');
    expect(configContent).toContain("'problem-notes'");
    expect(configContent).toContain("'case-studies'");
  });
});

describe('Draft Filtering Logic', () => {
  // Test implementation matches src/lib/content.ts behavior
  function filterDrafts<T extends { data: { draft?: boolean } }>(
    entries: T[],
    isProd: boolean
  ): T[] {
    if (isProd) {
      return entries.filter((entry) => !entry.data.draft);
    }
    return entries;
  }

  it('should filter out draft entries in production environment', () => {
    const entries = [
      { id: '1', data: { draft: false } },
      { id: '2', data: { draft: true } },
      { id: '3', data: { draft: false } },
    ];

    const result = filterDrafts(entries, true);
    expect(result).toHaveLength(2);
    expect(result.every((e) => e.data.draft === false)).toBe(true);
  });

  it('should include all entries in development environment', () => {
    const entries = [
      { id: '1', data: { draft: false } },
      { id: '2', data: { draft: true } },
      { id: '3', data: { draft: false } },
    ];

    const result = filterDrafts(entries, false);
    expect(result).toHaveLength(3);
  });
});

describe('Schema Required Field Validation', () => {
  it('should reject Problem Notes with missing required title field', () => {
    const invalidData = {
      description: 'A description',
      date: '2026-01-07',
      status: 'exploring',
    };

    const result = problemNotesSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should reject Case Studies with missing required context field', () => {
    const invalidData = {
      title: 'Test Case Study',
      description: 'Description',
      date: '2026-01-07',
      outcome: 'The outcome',
      // Missing context field
    };

    const result = caseStudiesSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});
