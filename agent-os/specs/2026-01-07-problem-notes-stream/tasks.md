# Task Breakdown: Problem Notes Stream

## Overview
Total Tasks: 14 (across 3 task groups)

This feature creates the Problem Notes section with a list page at `/problem-notes` and individual note pages at `/problem-notes/[slug]`. The implementation leverages existing infrastructure: BaseLayout, global.css typography, filterDrafts helper, and the already-defined Problem Notes content collection schema.

## Task List

### Frontend Pages

#### Task Group 1: List Page Implementation
**Dependencies:** None (content schema and utilities already exist)

- [x] 1.0 Complete Problem Notes list page
  - [x] 1.1 Write 3-4 focused tests for list page functionality
    - Test that list page renders with intro section (title, subtitle, additional line)
    - Test that notes display in reverse chronological order
    - Test that each note item shows title, description, status, and date
    - Test that draft notes are excluded in production mode
  - [x] 1.2 Create `/src/pages/problem-notes/index.astro`
    - Import BaseLayout from `../layouts/BaseLayout.astro`
    - Import filterDrafts from `../../lib/content.ts`
    - Use `getCollection('problem-notes')` from `astro:content`
    - Filter drafts using existing filterDrafts helper
    - Sort entries by date descending (newest first)
  - [x] 1.3 Implement page intro section
    - Title: "Problem Notes" (using h1 styling from global.css)
    - Subtitle: "Short explorations of problems - why they matter, why common solutions fail, and how they might be reframed."
    - Additional line: "Unfinished thinking is welcome."
    - Follow homepage section pattern with margin-bottom: 3rem
  - [x] 1.4 Build notes list rendering
    - Map over filtered/sorted notes array
    - Each item displays: title (primary), description (1-2 lines), status indicator, date
    - Link each title to `/problem-notes/{slug}`
    - Information hierarchy: Title -> Description -> Status + Date
  - [x] 1.5 Implement typography-based status indicators
    - "exploring": font-weight: 400, font-style: italic
    - "evolving": font-weight: 400, font-style: normal
    - "stable": font-weight: 600, font-style: normal
    - Status displays as lowercase text alongside date
    - Status should feel informational, not badge-like
  - [x] 1.6 Apply list page styles
    - Follow global.css patterns (max-width: 680px via main element)
    - Source Serif 4 typography throughout
    - Generous whitespace between list items
    - Title: #111 primary color, description: #333 secondary color
    - Understated link styling matching global.css
    - No cards, grids, or blog-style layouts
  - [x] 1.7 Ensure list page tests pass
    - Run ONLY the 3-4 tests written in 1.1
    - Verify page renders correctly with intro and notes
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 3-4 tests written in 1.1 pass
- List page accessible at /problem-notes
- Intro section displays with specified copy
- Notes display in reverse chronological order
- Status indicators use typography-only styling
- Drafts filtered correctly based on environment

---

#### Task Group 2: Individual Note Pages
**Dependencies:** Task Group 1

- [x] 2.0 Complete individual Problem Note pages
  - [x] 2.1 Write 3-4 focused tests for note pages
    - Test that note page renders title, status indicator, and date at top
    - Test that MDX content renders with global typography styles
    - Test that tags display at end of page when present
    - Test that "Back to Problem Notes" link is present and functional
  - [x] 2.2 Create `/src/pages/problem-notes/[slug].astro`
    - Use Astro dynamic routes with getStaticPaths
    - Import BaseLayout from `../../layouts/BaseLayout.astro`
    - Use `getCollection('problem-notes')` from `astro:content`
    - Apply filterDrafts before generating paths
    - Return slug as param for each entry
  - [x] 2.3 Implement getStaticPaths function
    - Fetch all problem-notes entries
    - Filter drafts using filterDrafts helper
    - Map entries to { params: { slug }, props: { entry } }
    - Enable static generation for all non-draft notes
  - [x] 2.4 Build note header section
    - Display title using h1 styling from global.css
    - Show status indicator with typography-based styling (same as list page)
    - Display date in secondary styling
    - Status and date on same line, visually secondary to title
  - [x] 2.5 Render MDX content
    - Use `entry.render()` to get Content component
    - Render Content component in main content area
    - MDX inherits global typography styles from global.css
    - Content feels self-contained, not part of a feed
  - [x] 2.6 Implement tags display
    - Only render if entry.data.tags exists and has items
    - Position at very end of page, after MDX content
    - Style: smaller font size, muted color (#666 or similar)
    - Format as comma-separated inline list
    - Tags are informational only - no links, no filtering
  - [x] 2.7 Add back navigation
    - Simple "Back to Problem Notes" text link
    - Position at bottom of page after tags (if present)
    - Use understated link styling from global.css
    - No previous/next navigation, no breadcrumbs
  - [x] 2.8 Apply note page styles
    - Follow global.css patterns (max-width: 680px via main element)
    - Consistent spacing with homepage visual patterns
    - Tags section: font-size: 0.85rem, color: #666
    - Generous whitespace (margin-bottom: 2rem between sections)
  - [x] 2.9 Ensure note page tests pass
    - Run ONLY the 3-4 tests written in 2.1
    - Verify individual note pages render correctly
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 3-4 tests written in 2.1 pass
- Individual note pages accessible at /problem-notes/[slug]
- Note displays title, status, date, and MDX content
- Tags render at end of page (when present)
- Back link returns to list page
- Drafts excluded from static generation in production

---

### Testing & Verification

#### Task Group 3: Integration Testing & Gap Analysis
**Dependencies:** Task Groups 1-2

- [x] 3.0 Review and verify complete feature implementation
  - [x] 3.1 Review tests from Task Groups 1-2
    - Review the 3-4 tests written for list page (Task 1.1)
    - Review the 3-4 tests written for note pages (Task 2.1)
    - Total existing tests: approximately 6-8 tests
  - [x] 3.2 Analyze test coverage gaps for this feature only
    - Verify draft filtering works correctly in both environments
    - Verify status indicator typography across all three states
    - Verify responsive behavior at mobile breakpoints
    - Focus ONLY on gaps related to Problem Notes feature
  - [x] 3.3 Write up to 4 additional integration tests if needed
    - Test navigation flow: list page -> note page -> back to list
    - Test status indicator styling for each status type (exploring, evolving, stable)
    - Test empty state handling (no notes scenario)
    - Maximum 4 new tests to fill critical gaps
  - [x] 3.4 Create sample content for manual verification
    - Add 2-3 non-draft problem notes with varying statuses
    - Include notes with and without tags
    - Verify visual appearance matches design intent
  - [x] 3.5 Run feature-specific tests only
    - Run ONLY tests related to Problem Notes feature (tests from 1.1, 2.1, and 3.3)
    - Expected total: approximately 10-12 tests maximum
    - Do NOT run the entire application test suite
    - Verify all critical workflows pass

**Acceptance Criteria:**
- All feature-specific tests pass (approximately 10-12 tests total)
- Navigation between list and individual notes works correctly
- Status indicators display correctly for all three states
- Tags display properly when present, hidden when absent
- Draft filtering works in both development and production modes
- Visual appearance matches calm, text-first design principles

---

## Execution Order

Recommended implementation sequence:

1. **Task Group 1: List Page Implementation**
   - Foundation for the feature
   - Establishes content fetching, filtering, and sorting patterns
   - Creates status indicator styling that will be reused

2. **Task Group 2: Individual Note Pages**
   - Depends on patterns established in Task Group 1
   - Reuses status indicator styling from list page
   - Completes the core feature functionality

3. **Task Group 3: Integration Testing & Gap Analysis**
   - Depends on both Task Groups 1 and 2
   - Verifies complete user workflows
   - Ensures feature works as an integrated whole

---

## Technical Notes

### Files to Create
- `/src/pages/problem-notes/index.astro` - List page
- `/src/pages/problem-notes/[slug].astro` - Individual note pages

### Existing Files to Leverage (No Modifications Needed)
- `/src/layouts/BaseLayout.astro` - Site-wide layout wrapper
- `/src/styles/global.css` - Typography and layout patterns
- `/src/lib/content.ts` - filterDrafts helper function
- `/src/content.config.ts` - Problem Notes collection schema

### Key Patterns to Follow
- Homepage section pattern (margin-bottom: 3rem between sections)
- Global link styling (underline, 1px thickness, hover state)
- Color usage: #111 primary, #333 secondary, #666 muted
- Typography: Source Serif 4, h1 at 1.75rem/600, body at 1rem

### Out of Scope (Per Spec)
- Tag filtering or tag pages
- Search functionality
- RSS feeds
- Social sharing buttons
- Reading time estimates
- Related notes or recommendations
- Commenting or reactions
- Previous/next note navigation
- Breadcrumbs
- Pagination controls
