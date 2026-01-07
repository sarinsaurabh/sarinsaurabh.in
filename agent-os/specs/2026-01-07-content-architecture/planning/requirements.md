# Spec Requirements: Content Architecture

## Initial Description

Define and implement the content structure for Problem Notes and Case Studies, including frontmatter schema, URL patterns, and file organization for Markdown/MDX content.

From the product roadmap: This is the foundational content architecture that enables the Problem Notes Stream and Case Studies Section features. The site uses Astro with static output, typography-focused styling, and content stored as local Markdown/MDX files.

## Requirements Discussion

### First Round Questions

**Q1:** For Problem Notes, I assume the frontmatter should include: `title`, `description`, `date`, `status` (with values like "exploring", "evolving", "stable"), and `tags`. Is that correct, or would you prefer different fields or status terminology?
**Answer:** Yes, with refinements. Fields: `title` (string, required), `description` (string, required - 1-2 sentence framing), `date` (ISO date, required), `status` (enum, required - allowed values: "exploring", "evolving", "stable"), `tags` (array of strings, optional), `draft` (boolean, optional, default: false). Status is important and should be visible in UI later. Avoid author, reading time, or hero metadata. Keep frontmatter minimal and thinking-focused.

**Q2:** For Case Studies, I'm thinking the frontmatter should include: `title`, `description`, `date`, `context` (brief situational context), `outcome` (including imperfect ones as noted in the mission), and perhaps `constraints` as a list. Should these be separate fields, or would you prefer constraints/trade-offs to live in the content body rather than frontmatter?
**Answer:** Keep lighter than Problem Notes. Most richness in body. Fields: `title` (string, required), `description` (string, required - what problem this case is about), `date` (ISO date, required), `context` (short string, required - one-paragraph situational framing), `outcome` (short string, required - including imperfect or partial outcomes), `draft` (boolean, optional, default: false). Do NOT put constraints or trade-offs in frontmatter - those belong in content body where nuance matters.

**Q3:** I assume both content types should support an optional `draft: true` field to hide work-in-progress from the published site. Is that correct?
**Answer:** Yes. Both types support `draft: true` which excludes content from all public routes and lists. Drafts can still be rendered locally for preview.

**Q4:** I'm thinking the URL patterns should be `/problem-notes/[slug]` and `/case-studies/[slug]`. Is that correct, or would you prefer date-based URLs?
**Answer:** Proposed structure is correct. Non-date-based URLs: Problem Notes at `/problem-notes/[slug]`, Case Studies at `/case-studies/[slug]`. No dates in URLs. URLs should be durable and content-focused, not time-indexed.

**Q5:** I assume slugs should be derived from filenames. Is that correct, or should slugs be explicitly defined in frontmatter?
**Answer:** Derive slugs from filenames. Example: `reframing-complexity.mdx` becomes `/problem-notes/reframing-complexity`. Do not require explicit slugs in frontmatter. Simplicity wins.

**Q6:** For file organization, I'm thinking `src/content/problem-notes/` and `src/content/case-studies/` using Astro content collections. Is this structure acceptable?
**Answer:** Yes, correct. Use Astro content collections. No folders-per-piece for now. Structure: `src/content/problem-notes/*.mdx` and `src/content/case-studies/*.mdx`.

**Q7:** Should we configure MDX support now, or is plain Markdown sufficient for initial content needs?
**Answer:** Configure MDX now. Want option for callouts, asides, or lightweight components later. Don't have to use MDX features immediately, but enabling now avoids churn. Content can still be written as plain Markdown initially.

**Q8:** Is there anything you explicitly want to exclude from this content architecture spec?
**Answer:** Explicit exclusions: RSS feeds, search functionality, related content or "recommended reading", reading time estimates, pagination logic beyond simple lists, tag-based navigation or tag pages, SEO metadata beyond basics. This spec is about structure, not discovery or growth.

### Existing Code to Reference

No similar existing features identified for reference. This is a greenfield setup. Architecture should be opinionated, minimal, and purpose-built. Do not reference patterns from previous projects.

### Follow-up Questions

No follow-up questions were needed. User provided comprehensive, specific answers.

## Visual Assets

### Files Provided:
No visual assets provided.

### Visual Guidance:
User specified: content-first, text-heavy, calm, reading-oriented. No cards, grids, or blog-like UI patterns. Layout decisions should fall out of content, not precede it.

## Requirements Summary

### Functional Requirements

**Problem Notes Content Collection:**
- Astro content collection at `src/content/problem-notes/`
- MDX file format supported
- Frontmatter schema with Zod validation:
  - `title` (string, required)
  - `description` (string, required) - 1-2 sentence framing
  - `date` (ISO date, required)
  - `status` (enum, required) - values: "exploring", "evolving", "stable"
  - `tags` (array of strings, optional)
  - `draft` (boolean, optional, default: false)
- Slugs derived from filenames
- URL pattern: `/problem-notes/[slug]`

**Case Studies Content Collection:**
- Astro content collection at `src/content/case-studies/`
- MDX file format supported
- Frontmatter schema with Zod validation:
  - `title` (string, required)
  - `description` (string, required) - what problem this case is about
  - `date` (ISO date, required)
  - `context` (string, required) - one-paragraph situational framing
  - `outcome` (string, required) - including imperfect or partial outcomes
  - `draft` (boolean, optional, default: false)
- Slugs derived from filenames
- URL pattern: `/case-studies/[slug]`

**Draft Handling:**
- Content with `draft: true` excluded from all public routes and lists
- Drafts can be rendered locally for preview during development

**MDX Configuration:**
- Enable MDX integration in Astro config
- Support for future callouts, asides, or lightweight components
- Content can be written as plain Markdown syntax within .mdx files

### Reusability Opportunities

No existing code to reuse. Greenfield implementation using Astro's built-in content collections feature.

### Scope Boundaries

**In Scope:**
- Content collection configuration for Problem Notes and Case Studies
- Frontmatter schemas with Zod validation
- MDX integration setup
- File organization structure under `src/content/`
- URL routing configuration for both content types
- Draft filtering logic

**Out of Scope:**
- RSS feeds
- Search functionality
- Related content or "recommended reading" suggestions
- Reading time estimates
- Pagination logic beyond simple lists
- Tag-based navigation or tag pages
- SEO metadata beyond basic title/description
- UI components or page templates (covered in separate specs)
- Actual content creation

### Technical Considerations

- Uses Astro v5.x content collections with type-safe schemas
- Zod for frontmatter validation (built into Astro content collections)
- MDX integration via `@astrojs/mdx` package
- Static output mode (already configured in `astro.config.mjs`)
- Slugs derived from filenames, not frontmatter
- No date-based URL segments - URLs are durable and content-focused

### Design Principles (from user)

- Prefer fewer fields
- Prefer durability over flexibility
- Prefer clarity over cleverness
- Content-first, text-heavy, calm, reading-oriented
- No cards, grids, or blog-like UI patterns
- Layout decisions should fall out of content, not precede it
