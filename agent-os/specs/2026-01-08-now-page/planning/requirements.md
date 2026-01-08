# Spec Requirements: Now Page

## Initial Description
A living "now" page for current explorations and focus areas.

## Requirements Discussion

### First Round Questions

**Q1:** Page model - static page vs collection?
**Answer:** Single static page, not a collection. Goal is low-friction updates, not archival history. Page represents current state, not a timeline. Older "now" states don't need to be preserved or browsed. Treat it like the About page, not like Problem Notes.

**Q2:** Content structure - rigid schema vs freeform?
**Answer:** Define light structure, but keep it flexible. Clear section headings, but no rigid schema enforced in code. Recommended sections (guidance, not mandatory):
- What I'm working on
- What I'm thinking about
- What I'm learning / reading
- Availability / openness to conversations (optional)

Content should be freeform Markdown under these headings. Avoid turning this into a checklist or status report.

**Q3:** Freshness indicator - show "Last updated" date?
**Answer:** Yes - show a "Last updated" date prominently near the top. Manually set in frontmatter (e.g., lastUpdated: 2026-01-07). Reason: Intentional updates, not automatic noise. Git-derived dates can change due to non-content edits. This is a signal of presence, not precision.

**Q4:** Content storage - inline vs separate file?
**Answer:** Store content as Markdown (or MDX) file, not inline in Astro page. Should be able to update in seconds. No template edits required. Same editing workflow as other content. Page should feel easy to maintain.

**Q5:** Visual tone - formal vs casual?
**Answer:** Slightly more casual and lighter than Problem Notes. Short paragraphs or bullets are fine. Less formal prose. Still text-first and calm. Clear section separation, generous whitespace. Should reduce publishing pressure, not increase it.

**Q6:** Explicit exclusions?
**Answer:** Explicitly exclude:
- Detailed project updates or roadmaps
- Long personal life narratives
- Social media links or embeds
- Calls to action or "follow me" language
- Metrics, achievements, or accomplishments
- Any sense of performance reporting
- This is a "state of mind" page, not a progress report

### Existing Code to Reference

**Similar Features Identified:**
- Feature: BaseLayout - use existing base layout component
- Feature: About page - same page model (single static page)
- Components to potentially reuse: Global typography and spacing, same content column width as other pages
- Backend logic to reference: None required - static content

**Note:** Do not introduce new layout components or visual patterns.

### Follow-up Questions
None required - user provided comprehensive, well-considered answers.

## Visual Assets

### Files Provided:
No visual assets provided.

### Visual Guidance from User:
- Same typographic language as the rest of the site
- Slightly softer rhythm than Problem Notes
- No illustrations, icons, or decorative elements

## Requirements Summary

### Functional Requirements
- Single static page at /now route
- Content stored as Markdown/MDX file in content directory
- Manually-set "Last updated" date in frontmatter, displayed prominently near top
- Light structural guidance with recommended section headings
- Freeform Markdown content under headings
- Same editing workflow as other site content

### Content Structure (Guidance, Not Mandatory)
Recommended sections:
1. What I'm working on
2. What I'm thinking about
3. What I'm learning / reading
4. Availability / openness to conversations (optional)

### Reusability Opportunities
- BaseLayout component
- Existing global typography and spacing
- Same content column width as other pages
- About page as reference for single static page pattern

### Scope Boundaries

**In Scope:**
- Single /now page route
- Markdown/MDX content file
- lastUpdated frontmatter field with display
- Light section structure guidance
- Consistent typography with rest of site

**Out of Scope:**
- Collection/archive of past "now" states
- Automatic date tracking from git
- Rigid schema enforcement
- Detailed project updates or roadmaps
- Personal life narratives
- Social media links or embeds
- Calls to action or "follow me" language
- Metrics, achievements, or accomplishments
- Performance reporting tone
- New layout components or visual patterns
- Illustrations, icons, or decorative elements

### Technical Considerations
- Static page model (like About page, not like Problem Notes collection)
- Markdown/MDX file storage for easy editing
- Manual frontmatter date field (lastUpdated)
- Use existing BaseLayout
- No new layout components needed
- Same content column width as other pages

### Design Principles
When implementation choices arise:
- Structured vs. flexible: choose **flexible**
- Formal vs. human: choose **human**
- Precise vs. present: choose **present**

### Tone and Feel
- Slightly more casual than Problem Notes
- Text-first and calm
- Clear section separation
- Generous whitespace
- Short paragraphs or bullets acceptable
- Should reduce publishing pressure, not increase it
- "State of mind" page, not a progress report
