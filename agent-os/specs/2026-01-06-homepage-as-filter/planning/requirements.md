# Spec Requirements: Homepage as Filter

## Initial Description

This is for a personal website (sarinsaurabh.in) that showcases problem-first thinking. The homepage should:
- Clearly articulate the problem-first lens
- Signal that this is a thinking space, not a pitch
- Set expectations for depth
- Act as a filter for the right kind of visitors

## Requirements Discussion

### First Round Questions

**Q1:** I assume the homepage should lead with a brief, punchy statement of philosophy (2-3 sentences max) that signals "this is a thinking space, not a pitch" - something direct like "I explore problems worth understanding. This is where I think in public." Is that the right tone, or should it be more personal/warm, or more formal/professional?

**Answer:** Lead with brief, punchy statement. 2-3 sentences max. Calm, confident, non-promotional. Recommended copy: "Problem-first thinking. In a world full of solutions, the real problem often remains unsolved. This is a public workspace for thinking through complex, ambiguous problems."

**Q2:** For the "problem-first lens" articulation, I'm thinking a short section (3-5 bullet points or a brief paragraph) that explains what visitors will find here and what they won't. Should this explicitly name the anti-goals (not a resume, not SEO-optimized, not a portfolio), or should it focus only on what this site IS?

**Answer:** Focus on what this site IS, not what it is not. Anti-goals implicit through tone. Short paragraph or 3-4 bullets:
- Problems explored before solutions are proposed
- Unfinished thinking and evolving ideas
- Real constraints, trade-offs, and judgment calls
- Writing meant to be read slowly, not skimmed

Keep explicit exclusions off homepage. Should feel inviting, not defensive.

**Q3:** The mission mentions three visitor types: Evaluators (hiring managers), Collaborators, and Curious Peers. Should the homepage speak to all three equally, or should it prioritize one? My assumption is it should be agnostic - focusing on the content philosophy rather than audience segmentation.

**Answer:** Audience-agnostic and philosophy-led. Do NOT segment by audience or name "hiring managers", "collaborators". Depth-first content naturally self-selects.

**Q4:** I assume the homepage should be minimal - a statement of purpose plus clear navigation to the three core content areas (Problem Notes, Case Studies, Now). No featured posts, no "latest updates" section, no social proof. Is that correct, or should there be a preview/teaser of recent content?

**Answer:** Default to minimal for V1:
- Statement of purpose
- Short articulation of what this space is
- Clear navigation to: Problem Notes, Case Studies, Now
- No featured posts, no recency, no "latest"
- Add one element: A subtle link like "Start with a problem I'm thinking about" as an entry point

**Q5:** For navigation, I'm thinking a simple horizontal nav in the header with: Home | Problem Notes | Case Studies | Now. Should there be a separate "About" page, or should the homepage itself serve as the "about"?

**Answer:** Yes, have separate About page. Homepage = philosophy + filter. About = human context (short, non-resume). Navigation: Home | Problem Notes | Case Studies | Now | About

**Q6:** Given the typography-focused, minimal styling approach, I assume the homepage should be predominantly text with generous whitespace - no hero images, no illustrations, no background patterns. Is that correct, or do you envision any visual elements?

**Answer:** Text-first, whitespace-rich, calm. No hero images, no illustrations, no background textures or patterns, no cards or "blocks" UI. Think: good essay, well-set book page, reading-first experience. Typography is the design.

**Q7:** Is there anything you explicitly do NOT want on the homepage? (e.g., email capture, social links, photo of yourself, timeline/bio, etc.)

**Answer:** Exclude from homepage:
- Email capture / newsletter
- Social media links
- Photo of yourself
- Resume / timeline / career summary
- Logos, testimonials, social proof
- CTAs like "Hire me" or "Let's talk"

Contact can exist quietly in footer or About page.

### Existing Code to Reference

**Similar Features Identified:**
- This is a greenfield project with no existing code to reference

**Guidance Provided:**
- Extend from a single BaseLayout component
- Avoid premature component abstraction
- One layout, one content column, consistent spacing
- Patterns to establish: content width, line length, vertical rhythm, heading hierarchy

### Follow-up Questions

No follow-up questions were needed. User provided comprehensive answers.

## Visual Assets

### Files Provided:
No visual assets provided (confirmed via directory check).

### Reference Sites (Tone/Style Guidance):
User provided reference sites for tone and approach (not layout):
- **gwern.net** - text-first, uncompromising depth
- **Julian Lehr's personal site** - quiet, thoughtful, minimal
- **Maggie Appleton's writing pages** - clarity of thought

### Typography Specifications:
User provided specific typography guidance:
- Font: Source Serif 4 for body and headings
- Conservative weights
- Generous line-height

```css
body {
  font-family: "Source Serif 4", Georgia, serif;
  line-height: 1.65;
  font-size: 18px;
  color: #111;
}
main {
  max-width: 680px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}
```

### Visual Design Direction:
- Site should feel like opening a long-form essay, not landing on a personal brand site
- Calm, serious, durable aesthetic
- Reading-first experience where typography IS the design

## Requirements Summary

### Functional Requirements

**Homepage Content Structure:**
1. Opening statement (2-3 sentences): "Problem-first thinking. In a world full of solutions, the real problem often remains unsolved. This is a public workspace for thinking through complex, ambiguous problems."
2. "What you'll find here" section (4 bullets):
   - Problems explored before solutions are proposed
   - Unfinished thinking and evolving ideas
   - Real constraints, trade-offs, and judgment calls
   - Writing meant to be read slowly, not skimmed
3. Subtle entry point link: "Start with a problem I'm thinking about" (links to a Problem Note)
4. Navigation to content areas

**Site Navigation:**
- Header navigation with: Home | Problem Notes | Case Studies | Now | About
- Simple horizontal layout
- No complex navigation patterns

**Page Layout:**
- Single BaseLayout component for the site
- Content column centered, max-width 680px
- Generous padding (4rem vertical, 1.5rem horizontal)
- Text-first, whitespace-rich presentation

### Reusability Opportunities

- BaseLayout component will be reused across all pages
- Typography styles established here will define site-wide conventions
- Spacing and rhythm patterns will inform Problem Notes, Case Studies, and other pages

### Scope Boundaries

**In Scope:**
- Homepage content and layout
- Site-wide navigation structure
- BaseLayout component
- Typography foundation (Source Serif 4 integration)
- Core CSS patterns (content width, line height, vertical rhythm)
- Responsive behavior for the homepage

**Out of Scope:**
- Problem Notes pages (separate spec)
- Case Studies pages (separate spec)
- Now page (separate spec)
- About page (separate spec)
- Footer design details
- Contact mechanisms
- Any interactive elements
- Dark mode or theme variations

### Technical Considerations

**Framework:**
- Astro with static-first architecture
- No JavaScript required for homepage functionality

**Styling:**
- Custom CSS, no utility frameworks
- Source Serif 4 font (will need to be loaded, likely via Google Fonts or self-hosted)
- Georgia as fallback serif

**Layout Patterns:**
- Single content column
- Consistent vertical rhythm
- Heading hierarchy to be established
- No cards, blocks, or complex UI patterns

**Content:**
- Homepage content can be hardcoded in the Astro component (not MDX)
- No dynamic content or data fetching needed

**Navigation:**
- Links to pages that may not exist yet (Problem Notes, Case Studies, Now, About)
- Consider placeholder pages or graceful handling of missing routes
