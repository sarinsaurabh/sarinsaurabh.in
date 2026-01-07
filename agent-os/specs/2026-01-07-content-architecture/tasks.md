# Task Breakdown: Content Architecture

## Overview
Total Tasks: 19 sub-tasks across 4 task groups

This spec establishes the foundational content structure for Problem Notes and Case Studies using Astro content collections with type-safe Zod schemas, MDX integration, and durable URL patterns.

## Task List

### Configuration Layer

#### Task Group 1: MDX Integration Setup
**Dependencies:** None

- [x] 1.0 Complete MDX integration
  - [x] 1.1 Write 2-4 focused tests for MDX integration
    - Test that MDX files can be parsed without errors
    - Test that plain Markdown syntax renders correctly within MDX files
    - Skip testing advanced MDX component features (out of scope)
  - [x] 1.2 Install @astrojs/mdx package
    - Run `npm install @astrojs/mdx`
    - Verify package is added to package.json dependencies
  - [x] 1.3 Configure MDX integration in astro.config.mjs
    - Import mdx from '@astrojs/mdx'
    - Add mdx() to integrations array
    - Preserve existing config: output: 'static', build.format: 'directory'
  - [x] 1.4 Ensure MDX integration tests pass
    - Run ONLY the tests written in 1.1
    - Verify Astro dev server starts without errors
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- @astrojs/mdx package installed and listed in package.json
- astro.config.mjs includes MDX integration
- Astro dev server starts successfully with MDX enabled
- The 2-4 tests written in 1.1 pass

### Schema Layer

#### Task Group 2: Content Collections Configuration
**Dependencies:** Task Group 1

- [x] 2.0 Complete content collections setup
  - [x] 2.1 Write 3-6 focused tests for content collection schemas
    - Test Problem Notes schema validates required fields correctly
    - Test Case Studies schema validates required fields correctly
    - Test status enum rejects invalid values for Problem Notes
    - Test date coercion works for ISO date strings
    - Test draft field defaults to false when omitted
    - Skip exhaustive testing of all validation edge cases
  - [x] 2.2 Create content configuration file at src/content.config.ts
    - Use Astro v5 convention for config file location
    - Import defineCollection, z from 'astro:content'
    - Export collections object with both collection definitions
  - [x] 2.3 Define Problem Notes collection schema
    - title: z.string() - required
    - description: z.string() - required, 1-2 sentence framing
    - date: z.coerce.date() - required, ISO format coerced to Date
    - status: z.enum(["exploring", "evolving", "stable"]) - required
    - tags: z.array(z.string()).optional() - for future categorization
    - draft: z.boolean().default(false) - excludes from public when true
  - [x] 2.4 Define Case Studies collection schema
    - title: z.string() - required
    - description: z.string() - required, what problem this case is about
    - date: z.coerce.date() - required, ISO format coerced to Date
    - context: z.string() - required, one-paragraph situational framing
    - outcome: z.string() - required, including imperfect or partial outcomes
    - draft: z.boolean().default(false) - excludes from public when true
  - [x] 2.5 Ensure content collection tests pass
    - Run ONLY the tests written in 2.1
    - Verify schema validation catches invalid frontmatter
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- src/content.config.ts exists with both collection definitions
- Problem Notes schema enforces all required fields and status enum
- Case Studies schema enforces all required fields
- Date fields coerce ISO strings to Date objects
- Draft field defaults to false
- The 3-6 tests written in 2.1 pass

### Content Layer

#### Task Group 3: Directory Structure and Placeholder Content
**Dependencies:** Task Group 2

- [x] 3.0 Complete content directory structure and placeholders
  - [x] 3.1 Write 2-4 focused tests for content structure
    - Test that placeholder Problem Note file is recognized by collection
    - Test that placeholder Case Study file is recognized by collection
    - Test that frontmatter is parsed correctly from placeholder files
    - Skip testing content body rendering (covered by MDX tests)
  - [x] 3.2 Create src/content/problem-notes/ directory
    - Flat file structure, no nested folders per piece
    - Files use .mdx extension
  - [x] 3.3 Create src/content/case-studies/ directory
    - Flat file structure, no nested folders per piece
    - Files use .mdx extension
  - [x] 3.4 Create placeholder Problem Note MDX file
    - Filename: example-problem-note.mdx (becomes slug)
    - Include all required frontmatter fields with valid values
    - Set draft: true so it does not appear publicly
    - Include minimal body content to verify rendering works
  - [x] 3.5 Create placeholder Case Study MDX file
    - Filename: example-case-study.mdx (becomes slug)
    - Include all required frontmatter fields with valid values
    - Set draft: true so it does not appear publicly
    - Include minimal body content to verify rendering works
  - [x] 3.6 Create draft filtering helper function
    - Create src/lib/content.ts for content utility functions
    - Implement filterDrafts() function that uses import.meta.env.PROD
    - Drafts excluded in production, visible in development
    - Function accepts collection entries array, returns filtered array
  - [x] 3.7 Ensure content structure tests pass
    - Run ONLY the tests written in 3.1
    - Verify placeholder files are recognized by collections
    - Verify Astro build succeeds with placeholder content
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- src/content/problem-notes/ directory exists
- src/content/case-studies/ directory exists
- Placeholder Problem Note has valid frontmatter and draft: true
- Placeholder Case Study has valid frontmatter and draft: true
- Draft filtering helper function conditionally filters by environment
- Astro build completes without content collection errors
- The 2-4 tests written in 3.1 pass

### Validation Layer

#### Task Group 4: Test Review and Integration Verification
**Dependencies:** Task Groups 1-3

- [x] 4.0 Review tests and verify end-to-end integration
  - [x] 4.1 Review tests from Task Groups 1-3
    - Review the 2-4 MDX integration tests (Task 1.1)
    - Review the 3-6 content collection tests (Task 2.1)
    - Review the 2-4 content structure tests (Task 3.1)
    - Total existing tests: approximately 7-14 tests
  - [x] 4.2 Analyze test coverage gaps for content architecture
    - Identify if any critical schema validation is untested
    - Check if draft filtering logic has adequate coverage
    - Focus ONLY on gaps related to this spec's requirements
    - Prioritize build-time validation over runtime behavior
  - [x] 4.3 Write up to 5 additional strategic tests if needed
    - Add maximum of 5 new tests to fill identified critical gaps
    - Focus on integration between collections and build process
    - Test that invalid frontmatter causes build-time errors
    - Test that draft filtering works correctly per environment
    - Skip edge cases and error handling unless critical
  - [x] 4.4 Run feature-specific tests and build verification
    - Run ONLY tests related to content architecture
    - Execute `npm run build` to verify static output generation
    - Verify no TypeScript errors in content.config.ts
    - Expected total: approximately 12-19 tests maximum

**Acceptance Criteria:**
- All feature-specific tests pass (approximately 12-19 tests total)
- `npm run build` completes successfully
- Content collections are type-safe with proper TypeScript inference
- Placeholder content files pass schema validation
- Draft filtering logic verified for both environments
- No more than 5 additional tests added when filling gaps

## Execution Order

Recommended implementation sequence:

1. **MDX Integration Setup (Task Group 1)** - Must be completed first as content collections depend on MDX
2. **Content Collections Configuration (Task Group 2)** - Schemas must exist before creating content
3. **Directory Structure and Placeholder Content (Task Group 3)** - Creates directories and validates schemas work
4. **Test Review and Integration Verification (Task Group 4)** - Final validation that everything works together

## Technical Notes

- **Astro Version**: Project uses Astro 5.x with content.config.ts convention
- **Testing Framework**: Vitest (already configured in package.json)
- **URL Patterns**: Slugs derived from filenames, no date segments
- **File Format**: All content files use .mdx extension
- **Build Output**: Static generation with directory format for clean URLs

## Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| package.json | Modify | Add @astrojs/mdx dependency |
| astro.config.mjs | Modify | Add MDX integration |
| src/content.config.ts | Create | Define collections with Zod schemas |
| src/content/problem-notes/ | Create | Directory for Problem Notes |
| src/content/case-studies/ | Create | Directory for Case Studies |
| src/content/problem-notes/example-problem-note.mdx | Create | Placeholder Problem Note |
| src/content/case-studies/example-case-study.mdx | Create | Placeholder Case Study |
| src/lib/content.ts | Create | Draft filtering helper function |
