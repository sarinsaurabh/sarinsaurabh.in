# Task Breakdown: Now Page

## Overview
Total Tasks: 12

This is a lightweight feature implementation that creates a single static "Now" page using Astro's content collections. The feature reuses existing patterns from Problem Notes and requires no new components or visual patterns.

## Task List

### Content Layer

#### Task Group 1: Content Collection Setup
**Dependencies:** None

- [x] 1.0 Complete content collection layer
  - [x] 1.1 Write 3 focused tests for Now collection functionality
    - Test that `now` collection is defined in content.config.ts
    - Test that schema includes `lastUpdated` (date) and `description` (string) fields
    - Test that collection is exported in collections object
  - [x] 1.2 Add `now` collection to `/src/content.config.ts`
    - Define collection with `type: 'content'`
    - Schema fields: `lastUpdated` using `z.coerce.date()`, `description` using `z.string()`
    - Follow existing `problemNotes` and `caseStudies` patterns
    - Export in `collections` object
  - [x] 1.3 Create content directory at `/src/content/now/`
    - Directory must exist for Astro content collection to work
  - [x] 1.4 Create initial content file at `/src/content/now/index.mdx`
    - Frontmatter: `lastUpdated` (current date), `description` (brief summary)
    - Include recommended section headings as guidance:
      - `## What I'm working on`
      - `## What I'm thinking about`
      - `## What I'm learning`
      - `## Availability` (optional)
    - Keep sections short and scannable (under 150 words each)
    - Use casual, text-first tone
  - [x] 1.5 Ensure content collection tests pass
    - Run ONLY the 3 tests written in 1.1
    - Verify collection schema is valid
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 3 tests written in 1.1 pass
- `now` collection is properly defined with correct schema
- Content file validates against schema
- Astro can recognize the new collection

### Page Layer

#### Task Group 2: Now Page Implementation
**Dependencies:** Task Group 1

- [ ] 2.0 Complete Now page implementation
  - [ ] 2.1 Write 4 focused tests for Now page functionality
    - Test that page uses BaseLayout with correct title prop (`Now - Saurabh Sarin`)
    - Test that page fetches from `now` collection and renders MDX content
    - Test that `lastUpdated` date is displayed with subdued meta styling
    - Test that date is formatted as "Month Day, Year" using `toLocaleDateString`
  - [ ] 2.2 Replace placeholder at `/src/pages/now.astro`
    - Import BaseLayout from `../layouts/BaseLayout.astro`
    - Import `getCollection` from `astro:content`
    - Fetch single entry from `now` collection
    - Render MDX content using `entry.render()` pattern from Problem Notes
  - [ ] 2.3 Implement page structure and layout
    - Page title: "Now - Saurabh Sarin"
    - Description: pulled from frontmatter
    - Single `<article>` wrapper (no extra layout components)
    - h1 heading: "Now"
    - Display `lastUpdated` prominently below h1
  - [ ] 2.4 Add date formatting and styling
    - Copy `formatDate` function from Problem Notes `[slug].astro`
    - Format as "Month Day, Year" (e.g., "January 8, 2026")
    - Style as subdued metadata: 0.9rem font-size, #666 color
    - Reference `.note-meta` pattern from Problem Notes
  - [ ] 2.5 Render MDX content
    - Use `<Content />` component from `entry.render()`
    - Wrap in content div for styling isolation
    - MDX content inherits global typography from global.css
  - [ ] 2.6 Ensure Now page tests pass
    - Run ONLY the 4 tests written in 2.1
    - Verify page renders with correct structure
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 4 tests written in 2.1 pass
- Page displays at /now route
- BaseLayout wraps page with correct meta tags
- lastUpdated date displays correctly formatted
- MDX content renders with proper typography

### Verification

#### Task Group 3: Integration Verification
**Dependencies:** Task Groups 1-2

- [ ] 3.0 Verify complete feature integration
  - [ ] 3.1 Run all Now page tests (from 1.1 and 2.1)
    - Expected total: 7 tests
    - All tests should pass
  - [ ] 3.2 Manual verification checklist
    - Start dev server (`npm run dev`)
    - Navigate to /now
    - Verify page loads without errors
    - Verify h1 "Now" heading displays
    - Verify lastUpdated date shows below h1 in subdued style
    - Verify MDX content sections render correctly
    - Verify typography matches rest of site (Source Serif 4, 680px max-width)
    - Verify navigation shows "Now" as active state
    - Verify no console errors
  - [ ] 3.3 Build verification
    - Run `npm run build`
    - Verify build completes without errors
    - Verify /now is included in static output

**Acceptance Criteria:**
- All 7 feature-specific tests pass
- Page renders correctly at /now route
- Build completes successfully
- Visual design matches existing site patterns

## Execution Order

Recommended implementation sequence:
1. Content Layer (Task Group 1) - Set up collection and initial content
2. Page Layer (Task Group 2) - Implement the Now page
3. Verification (Task Group 3) - Confirm complete integration

## Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `/src/content.config.ts` | Modify | Add `now` collection definition |
| `/src/content/now/index.mdx` | Create | Initial Now page content |
| `/src/pages/now.astro` | Modify | Replace placeholder with functional page |
| `/tests/now-page/content-collection.test.ts` | Create | Tests for content collection |
| `/tests/now-page/now-page.test.ts` | Create | Tests for page functionality |

## Reference Files

These existing files contain patterns to reuse:

- **`/src/pages/problem-notes/[slug].astro`**: `formatDate` function, `.note-meta` styling, MDX rendering pattern
- **`/src/content.config.ts`**: Collection definition patterns
- **`/src/layouts/BaseLayout.astro`**: Page wrapper usage
- **`/src/styles/global.css`**: Typography and `.content-column` pattern

## Notes

- This is a single static page, not a collection of pages (like About page, not like Problem Notes)
- No back navigation needed - page is a standalone destination
- No archive/history of past states - page represents current state only
- Content is freeform Markdown under section headings - no rigid schema enforcement
- The goal is low-friction updates: content can be changed in minutes, not hours
