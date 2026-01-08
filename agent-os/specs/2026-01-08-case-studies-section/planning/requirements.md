# Spec Requirements: Case Studies Section

## Initial Description

Create the deep-dive case study section with pages that support longer-form content, constraint/trade-off documentation, and outcome reflection. Design for few entries with high signal density.

## Requirements Discussion

### First Round Questions

**Q1:** The existing case study schema includes `context` and `outcome` as single strings. For "deep-dive" case studies with constraint/trade-off documentation, I'm assuming we need a richer structure. Should individual case study pages include distinct sections like Problem/Context, Constraints faced, Trade-offs considered, Decision rationale, Outcome and reflection? Or do you prefer keeping the frontmatter simple and letting the MDX body handle all structure?

**Answer:** Keep frontmatter simple. Deep-dive structure lives in MDX body, not frontmatter. Frontmatter includes: title, description, date, context (short), outcome (short), draft. MDX body sections are editorial guidance (not schema-enforced): Problem/Context, Constraints, Trade-offs, Decision rationale, Outcome & reflection. Written as natural narrative, not templated checklists.

**Q2:** Problem Notes use a "status" field (exploring/evolving/stable) to signal thinking maturity. I'm assuming case studies don't need this since they describe completed work with outcomes. Is that correct, or should case studies also have a status indicator?

**Answer:** Do NOT add status field. Case studies describe completed work. Reflection belongs in content, not metadata.

**Q3:** For the list page, Problem Notes show title, description, status, and date. For case studies with "high signal density," I'm assuming the list should also surface the `context` and `outcome` summaries so visitors can quickly assess relevance. Should these appear on the list view, or just title and description?

**Answer:** Surface high-signal summaries per item: Title, Description, Context (1 short line), Outcome (1 short line). Do NOT show: full excerpts, section previews, extra metadata.

**Q4:** The current schema has `context` and `outcome` as frontmatter fields. For longer-form content, should these become section headers within the MDX body instead, with the frontmatter containing only metadata?

**Answer:** Frontmatter = orientation (summaries). Body = depth (expanded sections with headers). Mirrors Problem Notes pattern.

**Q5:** Since this is "few entries with high signal density," I'm assuming we won't need pagination or filtering. The list will display all case studies in reverse chronological order, similar to Problem Notes. Correct?

**Answer:** Reverse chronological, no pagination, no filtering, no sorting controls. Curated collection, not a feed.

**Q6:** Should case studies support tags (like Problem Notes optionally does) for thematic grouping, or is the collection small enough that tags would add unnecessary complexity?

**Answer:** Do NOT add tags. Small collection, meant for individual deep reading.

**Q7:** Is there anything specific you want to exclude from this spec?

**Answer:** Explicit exclusions:
- Related case study links
- "You may also like" sections
- Reading time estimates
- Table of contents
- Interactive elements
- Sharing buttons
- Metrics/impact numbers/dashboards
- Focus is judgment and reasoning, not "outcomes theater"

### Existing Code to Reference

**Similar Features Identified:**
- Feature: Problem Notes List Page - Path: `src/pages/problem-notes/index.astro`
- Feature: Problem Notes Individual Page - Path: `src/pages/problem-notes/[slug].astro`
- Feature: Content Schema - Path: `src/content.config.ts` (existing case studies schema, may need updates)
- Feature: Draft Filtering Utility - Path: `src/lib/content.ts`
- Components to potentially reuse: BaseLayout, global typography patterns, status-less meta display
- Backend logic to reference: filterDrafts utility, getCollection pattern, getStaticPaths for dynamic routes

**Additional Guidance:**
- No new layout abstractions needed
- Same typographic language as Problem Notes
- Slightly more vertical rhythm for longer reading
- No cards/callouts/diagrams unless content demands it

### Follow-up Questions

None required. User provided comprehensive answers covering all aspects.

## Visual Assets

### Files Provided:
No visual assets provided.

### Visual Insights:
User confirmed visual approach through verbal guidance:
- Same typographic language as Problem Notes
- Slightly more vertical rhythm for longer reading
- No cards, callouts, or diagrams unless content demands it
- Calm, honest, reflective aesthetic

## Requirements Summary

### Functional Requirements
- Case studies list page at `/case-studies` displaying all non-draft entries
- Individual case study pages at `/case-studies/[slug]`
- List view shows: title, description, context (1 line), outcome (1 line)
- Individual pages render full MDX content with title and date metadata
- Reverse chronological ordering on list page
- Draft filtering (excluded in production, visible in development)

### Content Schema
**Frontmatter fields (orientation/metadata):**
- `title` (string, required)
- `description` (string, required)
- `date` (date, required)
- `context` (string, required) - short summary for list view
- `outcome` (string, required) - short summary for list view
- `draft` (boolean, default false)

**MDX body sections (editorial guidance, not enforced):**
- Problem/Context (expanded)
- Constraints
- Trade-offs
- Decision rationale
- Outcome & reflection

### Design Principles
- Calm, honest, reflective tone
- Storytelling over scannability
- Depth over completeness
- Judgment over polish
- Natural narrative, not templated checklists

### Reusability Opportunities
- Reuse Problem Notes page patterns directly
- Reuse filterDrafts utility from `src/lib/content.ts`
- Reuse BaseLayout for consistent site structure
- Reuse global typography and link styles
- Adapt existing content.config.ts schema (already has case-studies collection)

### Scope Boundaries

**In Scope:**
- Case studies list page (`/case-studies/index.astro`)
- Individual case study pages (`/case-studies/[slug].astro`)
- Update existing case study schema if needed (currently has context/outcome)
- List view with title, description, context, outcome display
- Back navigation to list from individual pages
- Draft filtering based on environment
- Typography-based styling matching Problem Notes

**Out of Scope:**
- Status indicators (no exploring/evolving/stable)
- Tags or categorization
- Pagination, filtering, or sorting controls
- Related content links or "You may also like"
- Reading time estimates
- Table of contents
- Interactive elements
- Sharing buttons
- Metrics, impact numbers, or dashboards
- New layout components or abstractions

### Technical Considerations
- Follow Astro content collections pattern established by Problem Notes
- Use getStaticPaths for dynamic route generation
- Maintain consistent URL pattern: `/case-studies/[slug]`
- Existing schema in content.config.ts already defines case-studies collection
- Existing example-case-study.mdx can serve as template reference
- Current placeholder page at `/case-studies.astro` will be replaced with proper implementation
