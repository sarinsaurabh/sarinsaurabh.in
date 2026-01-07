/**
 * Content Structure Tests
 * Task Group 3: Tests for content directory structure and placeholder files
 */

import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectRoot = process.cwd();

describe('Content Structure', () => {
  it('should recognize placeholder Problem Note file in collection directory', () => {
    const problemNotesDir = path.join(projectRoot, 'src/content/problem-notes');
    const placeholderFile = path.join(problemNotesDir, 'example-problem-note.mdx');

    expect(fs.existsSync(problemNotesDir)).toBe(true);
    expect(fs.existsSync(placeholderFile)).toBe(true);
  });

  it('should recognize placeholder Case Study file in collection directory', () => {
    const caseStudiesDir = path.join(projectRoot, 'src/content/case-studies');
    const placeholderFile = path.join(caseStudiesDir, 'example-case-study.mdx');

    expect(fs.existsSync(caseStudiesDir)).toBe(true);
    expect(fs.existsSync(placeholderFile)).toBe(true);
  });

  it('should parse frontmatter correctly from Problem Note placeholder', () => {
    const placeholderFile = path.join(
      projectRoot,
      'src/content/problem-notes/example-problem-note.mdx'
    );
    const fileContent = fs.readFileSync(placeholderFile, 'utf-8');
    const { data } = matter(fileContent);

    expect(data.title).toBe('Example Problem Note');
    expect(data.description).toBeDefined();
    expect(data.date).toBeDefined();
    expect(data.status).toBe('exploring');
    expect(data.draft).toBe(true);
  });

  it('should parse frontmatter correctly from Case Study placeholder', () => {
    const placeholderFile = path.join(
      projectRoot,
      'src/content/case-studies/example-case-study.mdx'
    );
    const fileContent = fs.readFileSync(placeholderFile, 'utf-8');
    const { data } = matter(fileContent);

    expect(data.title).toBe('Example Case Study');
    expect(data.description).toBeDefined();
    expect(data.date).toBeDefined();
    expect(data.context).toBeDefined();
    expect(data.outcome).toBeDefined();
    expect(data.draft).toBe(true);
  });
});
