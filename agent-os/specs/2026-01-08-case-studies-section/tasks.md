# Task Breakdown: Case Studies Section

## Overview
Total Tasks: 16 (across 4 task groups)

This feature implements a deep-dive case study section with list and individual pages, following the established Problem Notes pattern. The implementation focuses on typography-first design, showcasing judgment and reasoning over metrics.

## Task List

### Frontend: List Page

#### Task Group 1: Case Studies List Page
**Dependencies:** None

- [x] 1.0 Complete Case Studies list page
  - [x] 1.1 Write 4 focused tests for list page functionality
    - Test that list page renders without errors
    - Test that case studies display in reverse chronological order
    - Test that draft entries are filtered in production mode
    - Test that list items display title, description, context, and outcome
  - [x] 1.2 Create `/src/pages/case-studies/index.astro`
    - Import `BaseLayout` from `../../layouts/BaseLayout.astro`
    - Import `filterDrafts` from `../../lib/content`
    - Import `getCollection` from `astro:content`
    - Fetch case studies collection: `await getCollection('case-studies')`
    - Apply `filterDrafts()` to exclude drafts in production
    - Sort by date descending (newest first): `b.data.date.getTime() - a.data.date.getTime()`
    - Reuse `formatDate` function pattern from `/src/pages/problem-notes/index.astro`
  - [x] 1.3 Implement intro section
    - Add `<h1>Case Studies</h1>` heading
    - Add subtitle describing the section: deep-dive explorations of constraints, trade-offs, and decision rationale
    - Match intro styling from Problem Notes (`margin-bottom: 3rem`, `font-size: 1.125rem` for subtitle)
  - [x] 1.4 Implement case studies list rendering
    - Map through sorted case studies to render list items
    - Display title as linked heading (`<a href="/case-studies/${entry.slug}">`)
    - Display description paragraph
    - Display context with "Context:" label (1 short line)
    - Display outcome with "Outcome:" label (1 short line)
    - Display formatted date
    - Handle empty state: "No case studies yet."
  - [x] 1.5 Apply scoped component styles
    - Use same color palette: `#111` primary, `#333` secondary, `#666` meta, `#eee` borders
    - Title link: `font-size: 1.25rem`, `font-weight: 600`, underline styling
    - Description: `font-size: 1rem`, `line-height: 1.6`, `color: #333`
    - Context/outcome: `font-size: 0.9rem`, `color: #666`
    - Item separator: `border-bottom: 1px solid #eee`, `margin-bottom: 2.5rem`, `padding-bottom: 2rem`
  - [x] 1.6 Remove status indicator styling (not used in Case Studies)
    - Do NOT include status classes (`status-exploring`, `status-evolving`, `status-stable`)
    - Meta section shows only date (no status)
  - [x] 1.7 Ensure list page tests pass
    - Run ONLY the 4 tests written in 1.1
    - Verify page renders correctly with sample content
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- Page renders at `/case-studies/` route
- Case studies display in reverse chronological order
- Each list item shows: title (linked), description, context, outcome, date
- Draft entries hidden in production, visible in development
- Styling matches Problem Notes aesthetic (typography-first, calm)

---

### Frontend: Individual Pages

#### Task Group 2: Individual Case Study Pages
**Dependencies:** Task Group 1

- [x] 2.0 Complete individual Case Study pages
  - [x] 2.1 Write 4 focused tests for individual page functionality
    - Test that individual page renders with correct title in header
    - Test that MDX content renders successfully
    - Test that back navigation link is present and correct
    - Test that date displays in "Month Day, Year" format
  - [x] 2.2 Create `/src/pages/case-studies/[slug].astro`
    - Import `BaseLayout` from `../../layouts/BaseLayout.astro`
    - Import `filterDrafts` from `../../lib/content`
    - Import `getCollection` from `astro:content`
    - Implement `getStaticPaths()` function following Problem Notes pattern:
      ```
      const allStudies = await getCollection('case-studies');
      const filteredStudies = filterDrafts(allStudies);
      return filteredStudies.map((entry) => ({
        params: { slug: entry.slug },
        props: { entry },
      }));
      ```
    - Extract `entry` from `Astro.props`
    - Render MDX: `const { Content } = await entry.render();`
    - Reuse `formatDate` function pattern from Problem Notes
  - [x] 2.3 Implement page header
    - Display title in `<h1>` element
    - Display formatted date in meta section
    - Do NOT include status indicator (case studies are completed work)
    - Meta section: `font-size: 0.9rem`, `color: #666`
  - [x] 2.4 Implement content section
    - Render MDX content with `<Content />` component
    - Apply slightly increased vertical rhythm for longer reading comfort
    - Content wrapper margin: `margin-bottom: 2.5rem` (vs 2rem in Problem Notes)
  - [x] 2.5 Implement back navigation
    - Add navigation section at bottom of page
    - Link text: "Back to Case Studies"
    - Link href: `/case-studies`
    - Style: `font-size: 0.9rem`, `color: #666`, hover `color: #111`
    - Top border separator: `border-top: 1px solid #eee`, `padding-top: 2rem`, `margin-top: 2.5rem`
  - [x] 2.6 Apply scoped component styles
    - Header margin: `margin-bottom: 2.5rem` (slightly increased from Problem Notes)
    - No tags section (not applicable to case studies)
    - No status indicator styling
  - [x] 2.7 Set appropriate page metadata
    - Title format: `${entry.data.title} - Case Studies - Saurabh Sarin`
    - Description: use `entry.data.description` from frontmatter
  - [x] 2.8 Ensure individual page tests pass
    - Run ONLY the 4 tests written in 2.1
    - Verify page renders correctly with MDX content
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- Pages render at `/case-studies/[slug]` routes
- Title and date display correctly in header
- MDX content renders with appropriate typography
- Back navigation returns to list page
- Slightly increased vertical rhythm compared to Problem Notes

---

### Cleanup: Remove Placeholder

#### Task Group 3: Placeholder Cleanup and Content Validation
**Dependencies:** Task Groups 1, 2

- [x] 3.0 Complete cleanup and content setup
  - [x] 3.1 Write 2 focused verification tests
    - Test that `/case-studies` route serves the new list page (not placeholder)
    - Test that navigation to `/case-studies` from other pages works correctly
  - [x] 3.2 Delete placeholder file `/src/pages/case-studies.astro`
    - Verify new `/src/pages/case-studies/index.astro` handles the route
    - Confirm no 404 or routing conflicts
  - [x] 3.3 Update example case study for proper demonstration
    - Edit `/src/content/case-studies/example-case-study.mdx`
    - Update frontmatter with realistic context and outcome (1-2 sentences each)
    - Add recommended narrative structure sections in body:
      - Problem / Context
      - Constraints
      - Trade-offs considered
      - Decision rationale
      - Outcome & reflection
    - Keep `draft: true` to prevent display in production
  - [x] 3.4 Verify navigation integration
    - Confirm BaseLayout nav link `/case-studies` points to correct page
    - Verify active state works correctly when on case studies pages
    - Test navigation from list to individual pages and back
  - [x] 3.5 Ensure cleanup tests pass
    - Run ONLY the 2 tests written in 3.1
    - Verify routing works correctly after placeholder removal

**Acceptance Criteria:**
- Placeholder file removed without breaking routes
- Example content demonstrates recommended structure
- Navigation integration verified
- Active state shows correctly in site header

---

### Testing: Final Verification

#### Task Group 4: Test Review and Integration Verification
**Dependencies:** Task Groups 1-3

- [x] 4.0 Review tests and verify feature completeness
  - [x] 4.1 Review tests from Task Groups 1-3
    - Review 4 tests from list page (Task 1.1)
    - Review 4 tests from individual pages (Task 2.1)
    - Review 2 tests from cleanup (Task 3.1)
    - Total existing tests: 11 tests (including getStaticPaths test)
  - [x] 4.2 Analyze test coverage gaps for Case Studies feature only
    - Identify critical user workflows that lack test coverage
    - Focus ONLY on gaps related to this spec's requirements
    - Check: list page filtering, individual page rendering, navigation flow
  - [x] 4.3 Write up to 6 additional strategic tests if needed
    - Added 5 new tests in `integration-verification.test.ts`:
      - Empty state rendering when no case studies exist
      - Context and Outcome labels display with proper styling
      - Intro section structure with heading and subtitle
      - Page metadata for individual pages (SEO title/description)
      - Typography and color palette verification
  - [x] 4.4 Run feature-specific tests only
    - Run ONLY tests related to Case Studies feature
    - Total tests: 16 tests (11 existing + 5 new)
    - All 16 tests PASSING
    - Do NOT run the entire application test suite
    - Verify critical user workflows pass
  - [x] 4.5 Manual verification checklist
    - [x] Visit `/case-studies` and verify list renders
    - [x] Click through to an individual case study
    - [x] Verify back navigation works
    - [x] Check typography matches Problem Notes aesthetic
    - [x] Verify draft filtering (draft: true entries visible in dev mode)
    - [x] Test navigation active state on case studies pages
    - [x] Verify responsive layout on mobile viewport

**Acceptance Criteria:**
- All feature-specific tests pass (10-16 tests total)
- Critical user workflows verified: browse list, read individual study, navigate back
- No more than 6 additional tests added when filling gaps
- Manual verification confirms visual and functional requirements met

---

## Execution Order

Recommended implementation sequence:

1. **Task Group 1: List Page** - Foundation page that displays all case studies
2. **Task Group 2: Individual Pages** - Detail pages with full MDX content
3. **Task Group 3: Cleanup** - Remove placeholder, update example content
4. **Task Group 4: Testing** - Verify complete feature works correctly

## Code Patterns to Reuse

| Pattern | Source File | Usage |
|---------|-------------|-------|
| Page structure with intro + list | `/src/pages/problem-notes/index.astro` | List page layout |
| `getStaticPaths()` implementation | `/src/pages/problem-notes/[slug].astro` | Dynamic routing |
| `filterDrafts()` utility | `/src/lib/content.ts` | Draft filtering |
| `formatDate()` function | `/src/pages/problem-notes/index.astro` | Date display |
| List item styling | `/src/pages/problem-notes/index.astro` | Typography and spacing |
| Back navigation pattern | `/src/pages/problem-notes/[slug].astro` | Return link styling |
| BaseLayout usage | `/src/layouts/BaseLayout.astro` | Consistent site wrapper |

## Key Differences from Problem Notes

| Aspect | Problem Notes | Case Studies |
|--------|---------------|--------------|
| Status indicator | Yes (exploring/evolving/stable) | No |
| Tags | Optional | No |
| List item content | Title, description, status, date | Title, description, context, outcome, date |
| Vertical rhythm | Standard | Slightly increased for longer reading |
| Content type | Short explorations | Deep-dive narratives |

## File Changes Summary

| Action | File Path |
|--------|-----------|
| Create | `/src/pages/case-studies/index.astro` |
| Create | `/src/pages/case-studies/[slug].astro` |
| Delete | `/src/pages/case-studies.astro` |
| Update | `/src/content/case-studies/example-case-study.mdx` |
| Create | `/tests/case-studies/integration-verification.test.ts` |
