# Specification: Now Page

## Goal
Create a living "now" page that displays current explorations and focus areas, designed for low-friction updates that signal the site is actively maintained without formal publishing pressure. The Now page captures my current focus and orientation, not progress updates or completed work.

## User Stories
- As a site visitor, I want to see what the author is currently focused on so that I understand their present context and interests
- As the site owner, I want to update my current focus areas quickly without editing template files so that I can maintain freshness with minimal effort

## Specific Requirements

**Markdown/MDX Content File**
- Store Now page content as a standalone MDX file at `/src/content/now/index.mdx`
- Create a new `now` content collection in `content.config.ts` with minimal schema
- Frontmatter should include only: `lastUpdated` (date) and `description` (string)
- Content body supports full Markdown/MDX syntax for flexible formatting
- The primary goal is to minimize friction so updates can be made in minutes, not hours

**Last Updated Display**
- Display the `lastUpdated` date prominently near the top of the page, below the h1 title
- This date signals intentional presence, not frequency or recency guarantees.
- Use manual frontmatter field, not git-derived date (intentional signal of presence)
- Format date as "Month Day, Year" (e.g., "January 7, 2026") matching existing site patterns
- Style as subdued metadata text (0.9rem, #666 color) consistent with Problem Notes meta styling

**Page Route and Template**
- Replace placeholder at `/src/pages/now.astro` with functional page
- Page fetches and renders content from the `now` collection
- Use existing BaseLayout component for consistent site structure
- Page title: "Now - Saurabh Sarin", description pulled from frontmatter

**Light Section Structure Guidance**
- Provide recommended section headings in initial content as guidance (not enforced in code)
- Suggested sections: What I'm working on, What I'm thinking about, What I'm learning / reading
- Optional section: Availability / openness to conversations
- Content is freeform Markdown under headings, not a rigid schema
- The page should typically contain 3–5 sections.
- Sections should be short and scannable; no section should exceed ~150–200 words.

**Visual Tone and Typography**
- Use same typographic language as rest of site (Source Serif 4, 680px max-width)
- Slightly softer rhythm than Problem Notes - shorter paragraphs and bullets acceptable
- Clear section separation with h2 headings using existing global h2 styling
- Generous whitespace maintained through global.css patterns

**No Back Navigation**
- Unlike Problem Notes individual pages, Now page does not need back navigation link
- Page is a standalone destination, not part of a collection

## Visual Design
No visual mockups were provided. Visual guidance from requirements:
- Same typographic language as the rest of the site
- Slightly softer rhythm than Problem Notes
- No illustrations, icons, or decorative elements
- Text-first and calm aesthetic
- Clear section separation with generous whitespace

## Existing Code to Leverage

**BaseLayout (`/src/layouts/BaseLayout.astro`)**
- Use as page wrapper for consistent header, navigation, and footer
- Pass title and description as props
- Now page already exists in navItems array (line 27)

**Global CSS (`/src/styles/global.css`)**
- Reuse all typography styles (h1, h2, p, lists, links)
- Leverage .content-column pattern for 680px max-width
- Main element already styled with consistent padding (4rem 1.5rem)

**Problem Note Individual Page (`/src/pages/problem-notes/[slug].astro`)**
- Reference date formatting function (formatDate) for consistent date display
- Mirror .note-meta styling pattern for lastUpdated display (flex, 0.9rem, #666)
- Reference MDX content rendering pattern using entry.render()

**Content Config (`/src/content.config.ts`)**
- Follow existing defineCollection and z.object schema patterns
- Use z.coerce.date() for lastUpdated field matching existing date handling
- Export new collection in collections object

**Existing Now Page Placeholder (`/src/pages/now.astro`)**
- Replace entirely with functional implementation
- Already imports BaseLayout correctly

## Out of Scope
- Collection/archive of past "now" states - page represents current state only
- Automatic date tracking from git commits - uses manual frontmatter date
- Rigid schema enforcement in code - structure is guidance only
- Detailed project updates, roadmaps, or progress reporting
- Long personal life narratives
- Social media links or embeds
- Calls to action or "follow me" language
- Metrics, achievements, or accomplishments
- New layout components or visual patterns beyond existing site patterns
- Illustrations, icons, or decorative elements
