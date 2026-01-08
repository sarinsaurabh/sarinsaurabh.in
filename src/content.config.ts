/**
 * Astro Content Collections Configuration
 * Defines schemas for Problem Notes, Case Studies, and the "Now page collections
 */

import { defineCollection, z } from 'astro:content';

/**
 * Problem Notes Collection
 * For exploring ideas and thinking-in-progress content
 */
const problemNotes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    status: z.enum(['exploring', 'evolving', 'stable']),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

/**
 * Case Studies Collection
 * For detailed explorations of specific problems and their outcomes
 */
const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    context: z.string(),
    outcome: z.string(),
    draft: z.boolean().default(false),
  }),
});

/**
 * Now Collection
 * Single-entry collection for the living "Now" page
 * Captures current focus and orientation, not progress updates
 */
const now = defineCollection({
  type: 'content',
  schema: z.object({
    lastUpdated: z.coerce.date(),
    description: z.string(),
  }),
});

export const collections = {
  'problem-notes': problemNotes,
  'case-studies': caseStudies,
  'now': now,
};
