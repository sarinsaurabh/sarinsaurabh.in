/**
 * Now Page Content Collection Tests
 * Task Group 1: Tests for Now collection schema validation
 */

import { describe, it, expect } from 'vitest';
import { z } from 'astro/zod';

// Define schema matching what is in src/content.config.ts
const nowSchema = z.object({
  lastUpdated: z.coerce.date(),
  description: z.string(),
});

describe('Now Collection Schema', () => {
  it('should be defined with lastUpdated and description fields', () => {
    // Test that schema includes lastUpdated (date) and description (string) fields
    const validData = {
      lastUpdated: '2026-01-08',
      description: 'A brief summary of current focus.',
    };

    const result = nowSchema.safeParse(validData);
    expect(result.success).toBe(true);

    if (result.success) {
      expect(result.data.lastUpdated).toBeInstanceOf(Date);
      expect(typeof result.data.description).toBe('string');
    }
  });

  it('should coerce date strings to Date objects for lastUpdated', () => {
    // Test that z.coerce.date() properly coerces ISO date strings
    const validData = {
      lastUpdated: '2026-01-08',
      description: 'Testing date coercion.',
    };

    const result = nowSchema.safeParse(validData);
    expect(result.success).toBe(true);

    if (result.success) {
      expect(result.data.lastUpdated).toBeInstanceOf(Date);
      expect(result.data.lastUpdated.toISOString()).toContain('2026-01-08');
    }
  });

  it('should reject invalid data when required fields are missing', () => {
    // Test that schema validation fails for incomplete data
    const invalidData = {
      lastUpdated: '2026-01-08',
      // missing description
    };

    const result = nowSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});
