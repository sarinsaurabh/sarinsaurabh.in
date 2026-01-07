# Specification: Problem Notes Stream

## Goal

Build the Problem Notes section that displays short, structured explorations of problems with clear visual treatment for thinking-in-progress status, enabling visitors to browse and read thinking-first content.

## User Stories

- As a thoughtful visitor, I want to browse Problem Notes in a clean list view so that I can find topics that interest me
- As a reader, I want to see the status of each note (exploring, evolving, stable) so that I understand the maturity of the thinking

## Specific Requirements

**List Page at /problem-notes**
- Create index page displaying all non-draft Problem Notes
- Sort notes in reverse chronological order (newest first)
- Each list item shows: title (primary), description (1-2 lines max), status indicator, and date (secondary)
- Information hierarchy: Title -> Description -> Status + Date
- No pagination needed for initial implementation

**Page Intro Section**
- Display intro copy at top of list page before the notes
- Title: "Problem Notes"
- Subtitle: "Short explorations of problems - why they matter, why common solutions fail, and how they might be reframed."
- Additional line: "Unfinished thinking is welcome."
- Keep to 2-3 lines total, calm and declarative tone

**Individual Note Pages at /problem-notes/[slug]**
- Use Astro dynamic routes with getStaticPaths for static generation
- Display title, status indicator, and date at top of page
- Render MDX content using global typography styles
- Tags displayed at very end of page (if present), visually understated, no links
- Include simple "Back to Problem Notes" link at bottom
- Each note feels self-contained, not part of a feed

**Typography-Based Status Indicators**
- Use font-weight and font-style variations only (no badges, colors, or icons)
- "exploring" status: italic style or lighter weight (font-weight: 400, font-style: italic)
- "evolving" status: regular weight (font-weight: 400)
- "stable" status: slightly stronger weight (font-weight: 600)
- Status text displays as lowercase label alongside date
- Status should feel informational, not like a progress badge

**Draft Handling**
- Use existing filterDrafts helper from src/lib/content.ts
- Drafts excluded in production builds (import.meta.env.PROD)
- Drafts visible in development for local preview
- Apply filter before sorting notes by date

**Visual Design Approach**
- Follow homepage visual language: text-first, calm, generous whitespace
- Maintain 680px max-width content column (established in global.css)
- Use Source Serif 4 typography throughout
- No cards, grids, or blog-style layouts
- Understated link styling consistent with global.css patterns

**Tags Display on Individual Notes**
- Tags appear only on individual note pages, not on list view
- Position at very end of page content, after MDX body
- Visually understated styling (smaller font, muted color)
- Tags are informational only - no links, no filtering functionality
- Format as comma-separated list or simple inline display

## Visual Design

No visual assets provided. Follow homepage visual language - text-first, calm, generous whitespace. Avoid cards, grids, or blog-style layouts.

## Existing Code to Leverage

**src/layouts/BaseLayout.astro**
- Site-wide layout wrapper with header navigation and footer
- Already includes Problem Notes in navigation array
- Provides consistent page structure via slot pattern
- Use for both list page and individual note pages

**src/styles/global.css**
- Typography foundation with Source Serif 4 font
- Content column pattern (max-width: 680px, padding: 4rem 1.5rem)
- Link styling (underline, 1px thickness, hover state)
- Heading hierarchy (h1: 1.75rem/600, h2: 1.35rem/600)

**src/lib/content.ts - filterDrafts helper**
- Generic function that filters entries based on draft field
- Returns all entries in development, filters out drafts in production
- Works with any content collection entry type

**src/content.config.ts - Problem Notes schema**
- Collection already defined with required fields: title, description, date, status
- Status is enum: 'exploring' | 'evolving' | 'stable'
- Tags field is optional array of strings
- Draft field defaults to false

**src/pages/index.astro - Visual patterns**
- Section-based layout with generous margin-bottom (3rem)
- Typography sizing: lead text at 1.5rem, body at 1.125rem
- Color usage: #111 for primary text, #333 for secondary
- Understated link styling matching global patterns

## Out of Scope

- Tag filtering or tag pages
- Search functionality
- RSS feeds for Problem Notes
- Social sharing buttons
- Reading time estimates
- Related notes or recommendations
- Commenting or reactions
- Previous/next note navigation
- Breadcrumbs
- Pagination controls
