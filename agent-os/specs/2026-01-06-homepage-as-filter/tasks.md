# Task Breakdown: Homepage as Filter

## Overview
Total Tasks: 17 (across 4 task groups)

This is a greenfield Astro project establishing foundational patterns for typography, layout, and component structure. The homepage serves as a filter to attract thoughtful visitors who value depth over polish.

## Task List

### Project Foundation

#### Task Group 1: Astro Project Setup & Typography Foundation
**Dependencies:** None

- [x] 1.0 Complete project foundation and typography setup
  - [x] 1.1 Write 3-4 focused tests for typography and layout foundation
    - Test that Google Fonts (Source Serif 4) loads correctly
    - Test that body text renders with correct font-size (18px) and line-height (1.65)
    - Test that content column respects max-width constraint (680px)
    - Test that text color is #111 on white background
  - [x] 1.2 Initialize Astro project structure
    - Create standard Astro directory structure (src/pages, src/layouts, src/components, src/styles)
    - Configure astro.config.mjs for static site generation
    - Set up package.json with necessary scripts (dev, build, preview)
  - [x] 1.3 Create global typography styles
    - Load Source Serif 4 via Google Fonts in the document head
    - Set Georgia as fallback serif font
    - Configure body font-size: 18px, line-height: 1.65, color: #111
    - Establish heading hierarchy (h1, h2) with conservative weight variations
    - Create src/styles/global.css with typography foundation
  - [x] 1.4 Establish content layout patterns
    - Single centered content column with max-width: 680px
    - Horizontal padding: 1.5rem (24px) for mobile edge spacing
    - Vertical padding: 4rem (64px) top and bottom
    - Configure margin: 0 auto for centering
  - [x] 1.5 Ensure foundation tests pass
    - Run ONLY the 3-4 tests written in 1.1
    - Verify typography renders correctly in browser
    - Do NOT run entire test suite at this stage

**Acceptance Criteria:**
- Astro project initializes and runs with `npm run dev`
- Source Serif 4 font loads from Google Fonts
- Typography displays with specified sizes, line-height, and color
- Content column is centered with correct max-width and padding

### Layout Components

#### Task Group 2: BaseLayout Component & Navigation
**Dependencies:** Task Group 1

- [x] 2.0 Complete BaseLayout component with navigation
  - [x] 2.1 Write 3-4 focused tests for BaseLayout and navigation
    - Test that BaseLayout renders semantic HTML structure (header, nav, main, footer)
    - Test that navigation contains all required links (Home, Problem Notes, Case Studies, Now, About)
    - Test that navigation links are simple text without icons or dropdowns
    - Test that main content slot renders child content correctly
  - [x] 2.2 Create BaseLayout component
    - Create src/layouts/BaseLayout.astro
    - Use semantic HTML: header, nav, main, footer elements
    - Include document head with meta tags and font loading
    - Establish consistent page structure and spacing patterns
    - Wrap all page content in centered container with established max-width
  - [x] 2.3 Implement site navigation in header
    - Create horizontal header navigation
    - Navigation items: Home, Problem Notes, Case Studies, Now, About
    - Style as simple text links without icons, dropdowns, or complex interactions
    - Use placeholder routes for pages not yet implemented (/problem-notes, /case-studies, /now, /about)
    - Highlight current page in navigation (active state)
  - [x] 2.4 Add minimal footer placeholder
    - Create basic footer element within BaseLayout
    - Keep minimal per spec (details deferred to future specs)
    - Maintain semantic HTML structure
  - [x] 2.5 Ensure BaseLayout tests pass
    - Run ONLY the 3-4 tests written in 2.1
    - Verify navigation renders correctly
    - Do NOT run entire test suite at this stage

**Acceptance Criteria:**
- BaseLayout wraps pages with consistent structure
- Navigation displays horizontally with all 5 links
- Semantic HTML elements used throughout (header, nav, main, footer)
- Layout can be reused across all future pages

### Homepage Content

#### Task Group 3: Homepage Content Implementation
**Dependencies:** Task Group 2

- [x] 3.0 Complete homepage content and styling
  - [x] 3.1 Write 3-4 focused tests for homepage content
    - Test that opening statement section renders with correct copy
    - Test that "What you'll find here" section renders as semantic ul/li list with 4 bullet points
    - Test that entry point link renders with correct text and links to placeholder URL
    - Test that homepage uses BaseLayout wrapper
  - [x] 3.2 Create homepage opening statement section
    - Display 2-3 sentence philosophy statement at top of page
    - Copy: "Problem-first thinking. In a world full of solutions, the real problem often remains unsolved. This is a public workspace for thinking through complex, ambiguous problems."
    - Style with calm, confident tone - no promotional language
    - No hero image, illustration, or decorative elements
  - [x] 3.3 Implement "What You'll Find Here" section
    - Display 4 bullet points describing content philosophy
    - Bullets:
      - Problems explored before solutions are proposed
      - Unfinished thinking and evolving ideas
      - Real constraints, trade-offs, and judgment calls
      - Writing meant to be read slowly, not skimmed
    - Use semantic list markup (ul/li) for accessibility
    - Position below opening statement with appropriate vertical spacing
  - [x] 3.4 Add entry point link
    - Link text: "Start with a problem I'm thinking about"
    - Link to placeholder URL (e.g., /problem-notes/placeholder) until Problem Notes spec is implemented
    - Style as understated inline link, not prominent CTA button
    - Position after "What you'll find here" section
    - Ensure link can be easily swapped without layout changes
  - [x] 3.5 Apply homepage-specific styling
    - Generous whitespace creating calm, reading-first experience
    - No cards, blocks, or complex UI patterns
    - Typography as the primary design element
    - Consistent with established vertical rhythm
  - [x] 3.6 Ensure homepage tests pass
    - Run ONLY the 3-4 tests written in 3.1
    - Verify all content sections render correctly
    - Do NOT run entire test suite at this stage

**Acceptance Criteria:**
- Opening statement displays prominently with exact copy
- Four bullet points render in semantic list
- Entry point link is subtle and functional
- Page matches reading-first, text-focused aesthetic

### Responsive & Accessibility

#### Task Group 4: Responsive Design & Accessibility Verification
**Dependencies:** Task Group 3

- [x] 4.0 Complete responsive design and accessibility
  - [x] 4.1 Write 2-3 focused tests for responsive and accessibility
    - Test that content remains readable on mobile viewport (320px width)
    - Test that navigation remains usable on tablet and mobile
    - Test that proper heading hierarchy is maintained (h1 before h2)
  - [x] 4.2 Verify mobile-first responsive behavior
    - Content column naturally responsive due to max-width constraint
    - Maintain readable line length (680px max) on desktop
    - Ensure comfortable reading on mobile with 1.5rem horizontal padding
    - Test at breakpoints: 320px (mobile), 768px (tablet), 1024px+ (desktop)
  - [x] 4.3 Ensure accessibility compliance
    - Verify semantic HTML structure passes accessibility audit
    - Confirm proper heading hierarchy (single h1, logical h2s)
    - Test keyboard navigation through all links
    - Verify color contrast ratio meets 4.5:1 for #111 on white
    - Ensure all links have meaningful, descriptive text
  - [x] 4.4 Create placeholder pages for navigation targets
    - Create minimal placeholder pages for: /problem-notes, /case-studies, /now, /about
    - Each placeholder uses BaseLayout component
    - Include simple "Coming soon" or similar placeholder text
    - Ensures navigation links don't 404
  - [x] 4.5 Run all feature tests and verify completion
    - Run all tests from Task Groups 1-4 (approximately 12-15 tests total)
    - Verify homepage renders correctly across viewports
    - Confirm all navigation links function
    - Do NOT run tests unrelated to this feature

**Acceptance Criteria:**
- Homepage displays correctly on mobile, tablet, and desktop
- All accessibility checks pass
- Navigation links work without 404 errors
- Approximately 12-15 feature-specific tests pass

## Execution Order

Recommended implementation sequence:

1. **Project Foundation (Task Group 1)** - Establish Astro project, typography, and layout patterns that all subsequent work depends on
2. **BaseLayout Component (Task Group 2)** - Create reusable layout wrapper before implementing page content
3. **Homepage Content (Task Group 3)** - Build homepage using established foundation and layout
4. **Responsive & Accessibility (Task Group 4)** - Verify responsive behavior and accessibility after content is complete

## Technical Notes

### Stack Reference
- **Framework:** Astro (static site generation)
- **Styling:** Custom CSS (no utility frameworks)
- **Typography:** Source Serif 4 via Google Fonts, Georgia fallback
- **JavaScript:** None required for this spec

### Files to Create
```
src/
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    problem-notes/
      index.astro (placeholder)
      placeholder.astro (placeholder for entry point link)
    case-studies.astro (placeholder)
    now.astro (placeholder)
    about.astro (placeholder)
  styles/
    global.css
public/
  (no assets for this spec)
astro.config.mjs
package.json
```

### Patterns Established for Future Specs
- BaseLayout component for consistent page structure
- Typography system (Source Serif 4, heading hierarchy, line-height)
- Content column layout (680px max-width, centered)
- Spacing patterns (4rem vertical, 1.5rem horizontal padding)
- Navigation structure and styling
