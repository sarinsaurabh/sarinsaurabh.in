# Specification: Homepage as Filter

## Goal

Create the landing page for sarinsaurabh.in that clearly articulates a problem-first thinking philosophy, acting as a filter to attract thoughtful visitors who value depth over polish while signaling this is a thinking space, not a portfolio or pitch.

## Non-goal
The homepage is not expected to convert or capture leads.

## User Stories

- As a visitor, I want to immediately understand what this site is about so that I can decide if the content here is worth my time
- As a thoughtful reader, I want clear navigation to core content areas so that I can explore problems and thinking that interest me

## Specific Requirements

**Opening Statement Section**
- Display 2-3 sentence statement at the top of the page as the primary content
- Copy: "Problem-first thinking. In a world full of solutions, the real problem often remains unsolved. This is a public workspace for thinking through complex, ambiguous problems."
- Calm, confident tone without promotional language
- No hero image, illustration, or decorative elements around it

**What You'll Find Here Section**
- Display 4 bullet points describing the site's content philosophy
- Bullets: Problems explored before solutions are proposed; Unfinished thinking and evolving ideas; Real constraints, trade-offs, and judgment calls; Writing meant to be read slowly, not skimmed
- Position below the opening statement with appropriate vertical spacing
- Use semantic list markup (ul/li) for accessibility

**Entry Point Link**
- Include subtle link text: "Start with a problem I'm thinking about"
- Links to a Problem Note (placeholder URL until Problem Notes spec is implemented)
- Position after the "What you'll find here" section
- Style as understated inline link, not a prominent CTA button
- Allow this link to be easily swapped without layout changes

**Site Navigation**
- Horizontal header navigation with items: Home, Problem Notes, Case Studies, Now, About
- Simple text links without icons, dropdowns, or complex interactions
- Navigation persists across all pages via BaseLayout component
- Links to pages that may not yet exist should use placeholder routes

**BaseLayout Component**
- Create single layout component to wrap all pages site-wide
- Contains header with navigation, main content area, and minimal footer placeholder
- Establishes consistent page structure and spacing patterns
- Use semantic HTML: header, nav, main, footer elements

**Typography Foundation**
- Primary font: Source Serif 4 (load via Google Fonts)
- Fallback: Georgia, serif
- Body font-size: 18px with line-height: 1.65
- Color: #111 on white background
- Establish heading hierarchy (h1, h2) with conservative weight variations

**Content Layout**
- Single centered content column with max-width: 680px
- Horizontal padding: 1.5rem (24px) for mobile edge spacing
- Vertical padding: 4rem (64px) top and bottom
- Generous whitespace creating a calm, reading-first experience

**Responsive Behavior**
- Mobile-first approach with single column layout that works across all screen sizes
- Content column naturally responsive due to max-width constraint
- Maintain readable line length (680px max) on desktop
- Ensure comfortable reading on mobile with 1.5rem horizontal padding

## Existing Code to Leverage

**Greenfield Project**
- No existing codebase to reference or extend
- This spec establishes foundational patterns for typography, layout, and component structure
- Patterns defined here (BaseLayout, spacing, typography) will be reused in future specs
- Navigation structure defined here informs future page implementations

## Out of Scope

- Problem Notes list page and individual note pages (separate spec)
- Case Studies section and pages (separate spec)
- Now page content and design (separate spec)
- About page content and design (separate spec)
- Footer design details beyond basic placeholder
- Contact forms or email capture mechanisms
- Social media links or sharing features
- Dark mode or theme switching
- Any JavaScript interactivity
- Analytics or tracking implementation
- Featured content / recency indicators on homepage