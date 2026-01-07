/**
 * Content Collections Schema Tests
 * Task Group 2: Tests for content collection schema validation
 */

import { describe, it, expect } from 'vitest';
import { z } from 'astro/zod';

// Define schemas matching what will be in src/content.config.ts
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

describe('Problem Notes Schema', () => {
  it('should validate required fields correctly', () => {
    const validData = {
      title: 'Test Problem Note',
      description: 'A brief description of the problem.',
      date: '2026-01-07',
      status: 'exploring',
    };

    const result = problemNotesSchema.safeParse(validData);
    expect(result.success).toBe(true);

    if (result.success) {
      expect(result.data.title).toBe('Test Problem Note');
      expect(result.data.description).toBe('A brief description of the problem.');
      expect(result.data.status).toBe('exploring');
    }
  });

  it('should reject invalid status enum values', () => {
    const invalidData = {
      title: 'Test Problem Note',
      description: 'A brief description.',
      date: '2026-01-07',
      status: 'invalid-status',
    };

    const result = problemNotesSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});

describe('Case Studies Schema', () => {
  it('should validate required fields correctly', () => {
    const validData = {
      title: 'Test Case Study',
      description: 'What problem this case is about.',
      date: '2026-01-07',
      context: 'One-paragraph situational framing of the case.',
      outcome: 'The outcome including imperfect results.',
    };

    const result = caseStudiesSchema.safeParse(validData);
    expect(result.success).toBe(true);

    if (result.success) {
      expect(result.data.title).toBe('Test Case Study');
      expect(result.data.context).toBe('One-paragraph situational framing of the case.');
      expect(result.data.outcome).toBe('The outcome including imperfect results.');
    }
  });
});

describe('Schema Common Behaviors', () => {
  it('should coerce ISO date strings to Date objects', () => {
    const validData = {
      title: 'Test Note',
      description: 'Description.',
      date: '2026-01-07',
      status: 'stable',
    };

    const result = problemNotesSchema.safeParse(validData);
    expect(result.success).toBe(true);

    if (result.success) {
      expect(result.data.date).toBeInstanceOf(Date);
      expect(result.data.date.toISOString()).toContain('2026-01-07');
    }
  });

  it('should default draft field to false when omitted', () => {
    const dataWithoutDraft = {
      title: 'Test Note',
      description: 'Description.',
      date: '2026-01-07',
      status: 'evolving',
    };

    const result = problemNotesSchema.safeParse(dataWithoutDraft);
    expect(result.success).toBe(true);

    if (result.success) {
      expect(result.data.draft).toBe(false);
    }
  });
});
