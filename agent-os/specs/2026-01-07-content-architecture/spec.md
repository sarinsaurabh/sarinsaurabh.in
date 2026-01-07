# Specification: Content Architecture

## Goal

Define and implement the foundational content structure for Problem Notes and Case Studies using Astro content collections, enabling type-safe Markdown/MDX content with validated frontmatter schemas and durable URL patterns.

## User Stories

- As a content author, I want a clear file structure and schema so that I can create Problem Notes and Case Studies with consistent metadata
- As a developer, I want type-safe content collections so that frontmatter errors are caught at build time rather than runtime

## Specific Requirements

**Astro Content Collections Configuration**
- Create content configuration file at `src/content.config.ts` (Astro v5 convention)
- Define two collections: `problem-notes` and `case-studies`
- Use Zod schemas for frontmatter validation (built into Astro)
- Configure collections to use MDX file format
- Export collections via `defineCollection` and register with `collections` object

**Problem Notes Frontmatter Schema**
- `title` (string, required) - the note title
- `description` (string, required) - 1-2 sentence framing of the problem
- `date` (date, required) - ISO date format, coerced to Date object
- `status` (enum, required) - allowed values: "exploring", "evolving", "stable"
- `tags` (array of strings, optional) - for future categorization, Tags are descriptive only and do not imply tag-based navigation or pages.
- `draft` (boolean, optional, default: false) - excludes from public routes when true

**Case Studies Frontmatter Schema**
- `title` (string, required) - the case study title
- `description` (string, required) - what problem this case is about
- `date` (date, required) - ISO date format, coerced to Date object
- `context` (string, required) - one-paragraph situational framing
- `outcome` (string, required) - including imperfect or partial outcomes
- `draft` (boolean, optional, default: false) - excludes from public routes when true

**Content Directory Structure**
- Create `src/content/problem-notes/` directory for Problem Notes MDX files
- Create `src/content/case-studies/` directory for Case Studies MDX files
- Flat file structure (no nested folders per piece)
- Filename becomes the URL slug (e.g., `reframing-complexity.mdx` becomes `/problem-notes/reframing-complexity`)

**MDX Integration**
- Install and configure `@astrojs/mdx` package
- Add MDX integration to `astro.config.mjs`
- Enable MDX to support future callouts, asides, or custom components
- Content can use plain Markdown syntax within `.mdx` files initially

**URL Routing Pattern**
- Problem Notes: `/problem-notes/[slug]`
- Case Studies: `/case-studies/[slug]`
- Slugs derived from filenames, not frontmatter
- No date segments in URLs - content-focused, durable paths

**Draft Handling Logic**
- Content with `draft: true` excluded from all public routes and lists
- Create helper function to filter drafts from collection queries
- Drafts remain accessible during local development for preview
- Use `import.meta.env.PROD` to conditionally filter in production only

**Placeholder Content Files**
- Create one example Problem Note MDX file with valid frontmatter
- Create one example Case Study MDX file with valid frontmatter
- Include minimal body content to verify rendering works
- Mark examples as `draft: true` so they do not appear publicly

## Existing Code to Leverage

**astro.config.mjs**
- Existing configuration with `output: 'static'` and `site` URL defined
- Add MDX integration to existing config without restructuring
- Preserve `build.format: 'directory'` setting for clean URLs

**BaseLayout Component (src/layouts/BaseLayout.astro)**
- Navigation already includes `/problem-notes` and `/case-studies` routes
- Future page templates will use this layout for consistent structure
- No changes needed to BaseLayout for this content architecture spec

**Global CSS (src/styles/global.css)**
- Typography and spacing patterns established for content rendering
- Content will inherit these styles when rendered through MDX
- Heading hierarchy (h1, h2) and paragraph spacing already defined

## Out of Scope

- Individual Problem Note page template and layout
- Individual Case Study page template and layout
- List pages for Problem Notes or Case Studies
- RSS feeds or syndication
- Search functionality
- Related content or "recommended reading" suggestions
- Reading time estimates
- Pagination logic
- Tag-based navigation or tag pages
- SEO metadata beyond basic title/description already in BaseLayout
