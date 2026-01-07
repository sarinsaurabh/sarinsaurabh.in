# Spec Requirements: Problem Notes Stream

## Initial Description

Build the thinking stream section displaying short, structured pieces on problems. Include list view with titles and brief descriptions, individual note pages, and clear visual treatment for "unfinished" or "evolving" status.

From the mission document: "Short, structured pieces focused on problems, why common solutions fail, how problems are reframed. Explicitly welcomes unfinished thinking."

The feature needs:
1. List view (/problem-notes) with titles and brief descriptions
2. Individual note pages (/problem-notes/[slug])
3. Visual treatment for status (exploring, evolving, stable)

## Requirements Discussion

### First Round Questions

**Q1:** I assume the list view should display notes in reverse chronological order (newest first), with each item showing title, description, status indicator, and date. Is that correct, or would you prefer a different ordering or information hierarchy?

**Answer:** Yes. Use reverse chronological order (newest first). Each list item shows: Title (primary), Description (secondary, 1-2 lines max), Status indicator, Date. Information hierarchy: Title -> Description -> Status + date (visually secondary). Do not add excerpts beyond the description field.

**Q2:** For the status visual treatment, I'm thinking of a subtle, typography-based approach consistent with the site's calm aesthetic - perhaps small text labels ("exploring", "evolving", "stable") styled differently (e.g., italicized for exploring, regular for evolving, slightly bolder for stable) rather than colored badges or icons. Does that align with your vision?

**Answer:** Yes, typography-based status indicators, NOT badges, colors, or icons. Exploring -> italic or lighter weight. Evolving -> regular weight. Stable -> slightly stronger weight. Status should feel informational, not like a progress badge.

**Q3:** I assume we should NOT show drafts on the list page in production (using the existing filterDrafts helper), but show them in development. Is that correct?

**Answer:** Correct. Drafts should not appear in production builds. Drafts should appear in development for local preview. Continue using the existing filterDrafts helper.

**Q4:** For individual note pages, I assume we need: the title, status indicator, date, and the MDX content rendered with existing typography styles. Should we also display tags if present, and if so, where?

**Answer:** Display: Title, Status indicator, Date, MDX content rendered with global typography styles, Tags (if present) at the very end of the page, visually understated. Tags are informational only (no links, no filtering). Do NOT place tags near the title.

**Q5:** I assume we should include minimal navigation at the bottom of individual notes - perhaps just a link back to the list view ("/problem-notes"). Or would you prefer previous/next note navigation as well?

**Answer:** Keep navigation minimal. Required: A simple link back to /problem-notes. Do NOT add: Previous/next navigation, breadcrumbs, pagination controls. Each note should feel like a self-contained piece, not part of a feed.

**Q6:** The list page will need a brief intro explaining what Problem Notes are. Should I draft page copy, or do you have specific language in mind?

**Answer:** Include a short intro at the top. User-provided copy:
```
Problem Notes
Short explorations of problems — why they matter, why common solutions fail, and how they might be reframed.
Unfinished thinking is welcome.
```
Keep it to 2-3 lines. Calm, declarative, no explanation beyond this.

**Q7:** Is there anything specific you want to explicitly EXCLUDE from this feature?

**Answer:** Explicit exclusions:
- Tag filtering or tag pages
- Search
- RSS feeds
- Social sharing buttons
- Reading time estimates
- "Related notes" or recommendations
- Commenting or reactions

This is a thinking archive, not a content platform.

### Existing Code to Reference

**Similar Features Identified:**
- Layout: `src/layouts/BaseLayout.astro` - site-wide layout wrapper with header navigation and footer
- Typography: `src/styles/global.css` - typography foundation, content column patterns, link styling
- Content utilities: `src/lib/content.ts` - filterDrafts helper for draft handling
- Homepage: `src/pages/index.astro` - visual language reference (text-first, calm, generous whitespace)
- Content schema: `src/content.config.ts` - Problem Notes collection schema already defined
- Placeholder content: `src/content/problem-notes/example-problem-note.mdx` - frontmatter structure example

No new layout components or visual systems should be introduced.

### Follow-up Questions

No follow-up questions were needed. User provided comprehensive answers to all initial questions.

## Visual Assets

### Files Provided:
No visual assets provided.

### Visual Guidance:
User explicitly stated: Follow homepage's visual language - text-first, calm, generous whitespace. Avoid cards, grids, or blog-style layouts.

## Requirements Summary

### Functional Requirements

**List View (/problem-notes):**
- Display all non-draft Problem Notes in reverse chronological order (newest first)
- Each list item displays:
  - Title (primary emphasis)
  - Description (secondary, 1-2 lines max)
  - Status indicator (typography-based)
  - Date (visually secondary)
- Page intro at top with specified copy
- Use filterDrafts helper to exclude drafts in production
- No pagination required

**Individual Note Pages (/problem-notes/[slug]):**
- Display title, status indicator, date at top
- Render MDX content using global typography styles
- Display tags at very end of page (if present), visually understated, no links
- Include simple "Back to Problem Notes" link
- Each note feels self-contained, not part of a feed

**Status Visual Treatment:**
- Typography-based only (no badges, colors, or icons)
- "exploring" - italic or lighter weight
- "evolving" - regular weight
- "stable" - slightly stronger weight
- Status feels informational, not like a progress badge

**Draft Handling:**
- Drafts hidden in production builds
- Drafts visible in development for local preview
- Use existing filterDrafts helper from src/lib/content.ts

### Reusability Opportunities

- BaseLayout for consistent page structure
- Global typography styles from global.css
- filterDrafts helper from src/lib/content.ts
- Homepage visual patterns for styling reference
- Existing Problem Notes collection schema (no changes needed)

### Scope Boundaries

**In Scope:**
- List view page at /problem-notes
- Individual note pages at /problem-notes/[slug]
- Typography-based status indicators
- Tags display (informational only, no links)
- Simple back navigation to list view
- Page intro copy for list view
- Draft filtering using existing helper

**Out of Scope:**
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
- Cards, grids, or blog-style layouts
- New layout components or visual systems

### Technical Considerations

- Use Astro content collections (already configured in src/content.config.ts)
- Problem Notes schema already defined: title, description, date, status, tags (optional), draft
- URL pattern: /problem-notes/[slug] (already planned in content architecture)
- MDX rendering with Astro's built-in support
- Static generation (Astro default)
- Follow existing CSS patterns from global.css
- Maintain 680px max-width content column
- Source Serif 4 typography throughout

### Design Principles

From user: "If there's a choice between more features vs. fewer, more navigation vs. less, more metadata vs. less - default to less."

- Text-first, typography as primary design element
- Calm, generous whitespace
- Reading-first experience
- Minimal, understated UI
- Self-contained notes (not feed-like)
- Thinking archive aesthetic, not content platform
