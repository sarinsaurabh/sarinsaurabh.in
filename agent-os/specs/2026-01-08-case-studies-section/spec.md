# Specification: Case Studies Section

## Goal

Create a deep-dive case study section with pages that support longer-form content, constraint/trade-off documentation, and outcome reflection. Design for few entries with high signal density, emphasizing judgment and reasoning over metrics or "outcomes theater." Case Studies document applied judgment in real contexts, while Problem Notes explore questions and reframings without the pressure of outcomes.

## User Stories

- As a visitor, I want to browse a curated list of case studies with high-signal summaries so that I can quickly assess which ones are relevant to my interests.
- As a reader, I want to read detailed case study narratives that explain the constraints, trade-offs, and decision rationale so that I can understand the judgment behind the work.

## Specific Requirements

**Case Studies List Page**
- Create `/case-studies/index.astro` to replace the existing placeholder at `/case-studies.astro`
- Display all non-draft case studies in reverse chronological order
- Each list item shows: title (linked), description, context (1 short line), outcome (1 short line)
- Use same typographic styling patterns as Problem Notes list page
- Include intro section with heading and brief description of the section
- List order is reverse chronological, but curated order may override date later

**Individual Case Study Pages**
- Create `/case-studies/[slug].astro` using Astro dynamic routes with getStaticPaths
- Render full MDX content with title and date in the header
- Display context and outcome summaries are in frontmatter only; body contains expanded narrative
- context and outcome are summaries (1–2 sentences max), not substitutes for body sections
- Include back navigation link to return to the case studies list
- Increase vertical rhythm slightly compared to Problem Notes for longer reading comfort

**Recommended Narrative Structure**
Case studies should generally follow a narrative arc. The following sections are recommended but not mandatory:
- Problem / Context
- Constraints
- Trade-offs considered
- Decision rationale
- Outcome & reflection

**Content Schema Validation**
- Existing schema in `src/content.config.ts` already defines required fields correctly
- Schema fields: title (string), description (string), date (date), context (string), outcome (string), draft (boolean, default false)
- No schema changes required; existing configuration is sufficient

**Draft Filtering**
- Use existing `filterDrafts` utility from `src/lib/content.ts`
- Drafts excluded in production, visible in development environment
- Consistent with Problem Notes behavior

**Styling Approach**
- Typography-based styling using Source Serif 4 font established in `global.css`
- Same color palette: #111 for primary text, #333 for secondary, #666 for meta, #eee for borders
- Scoped component styles within each Astro file (no new global CSS)
- Calm, honest, reflective aesthetic matching site personality

**Navigation and Layout**
- Use existing `BaseLayout.astro` for consistent site structure
- BaseLayout already includes "Case Studies" in navigation and handles active state detection
- Remove placeholder `/case-studies.astro` file after list page is implemented

**Meta Information Display**
- List page: title, description, context, outcome, date for each entry
- Individual page: title, date in header; no status indicator (unlike Problem Notes)
- Format dates using same pattern as Problem Notes: "Month Day, Year"

## Visual Design

No visual mockups provided. User confirmed visual approach through verbal guidance:

**Typography-First Design**
- Same typographic language as Problem Notes section
- Slightly more vertical rhythm for longer reading sessions
- No cards, callouts, or diagrams unless content specifically demands it
- Use font-weight and font-style for visual hierarchy, not color or icons
- No charts or dashboards
- No metrics-first layouts
- No collapsible sections
- No interactive elements
- No callout components unless content absolutely requires it

## Existing Code to Leverage

**Problem Notes List Page (`/src/pages/problem-notes/index.astro`)**
- Reuse overall page structure: intro section followed by notes list
- Replicate getCollection and filterDrafts pattern for fetching content
- Adapt list item styling: remove status indicator, add context/outcome display
- Reuse formatDate function for consistent date formatting

**Problem Notes Individual Page (`/src/pages/problem-notes/[slug].astro`)**
- Replicate getStaticPaths pattern for dynamic route generation
- Reuse header structure with title and date meta
- Copy back-navigation pattern with understated link styling
- Remove status indicator and tags section (not applicable to case studies)

**Content Utilities (`/src/lib/content.ts`)**
- Import and use filterDrafts function directly without modification
- Consistent draft filtering behavior across content types

**Content Schema (`/src/content.config.ts`)**
- Case studies collection already defined with correct schema
- No modifications needed; schema includes title, description, date, context, outcome, draft

**BaseLayout (`/src/layouts/BaseLayout.astro`)**
- Use as-is for page wrapper with consistent header, navigation, and footer
- Navigation already includes "Case Studies" link with proper active state handling

## Out of Scope

- Status indicators (exploring/evolving/stable) - case studies describe completed work
- Tags or categorization - small collection meant for individual deep reading
- Pagination, filtering, or sorting controls - curated collection, not a feed
- Related content links or "You may also like" sections
- Reading time estimates
- Table of contents navigation
- Interactive elements (expandable sections, accordions, etc.)
- Sharing buttons or social media integration
- Metrics, impact numbers, or dashboard-style visualizations
- New layout components or abstractions beyond page-specific styling
