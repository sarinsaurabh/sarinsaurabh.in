# Specification: Invitation to Engage

## Goal
Add a simple, understated email contact link in the site footer that invites thoughtful engagement without feeling transactional or promotional.

## User Stories
- As a visitor who resonates with the content, I want a clear way to reach out so that I can explore ideas with the author.
- As a site owner, I want contact to feel like an invitation rather than a call-to-action so that it attracts intentional, quality engagement.

## Specific Requirements

**Footer Copy and Structure**
- Add one sentence of invitation text followed by an inline email link
- Preferred copy: "If something here resonates and you want to think through a problem together, reach out."
- The word "reach out" should be the mailto link pointing to sarin.saurabh@gmail.com
- Text should feel like a natural continuation of the reading experience

**Visual Treatment**
- Use existing global link styles from `global.css` (1px underline, 2px underline offset, thickens on hover)
- No buttons, icons, badges, or visual embellishment
- Footer text should use a slightly smaller or muted treatment to remain unobtrusive
- Maintain the existing `border-top: 1px solid #ddd` separator

**Layout and Spacing**
- Content remains within the existing `.footer-content` container
- Preserve existing footer padding (`2rem` top, `4rem` bottom, `1.5rem` horizontal)
- Text should be left-aligned, consistent with the reading column

**Accessibility**
- Email link must have descriptive link text (avoid generic "click here")
- Ensure visible focus state using existing pattern (`outline: 2px solid #111; outline-offset: 2px`)
- No ARIA attributes needed; semantic `<a href="mailto:...">` is sufficient

**Consistency Across Pages**
- Footer lives in `BaseLayout.astro` so changes automatically apply to all pages
- No page-specific variations or conditional logic needed

## Visual Design
No visual assets were provided. Implementation should match the minimal, typography-focused aesthetic established throughout the site.

## Existing Code to Leverage

**`/Users/saurabhsarin/Documents/My Repos/sarinsaurabh.in/src/layouts/BaseLayout.astro`**
- Contains the `<footer class="site-footer">` element with placeholder content
- Existing `.footer-content` class provides border-top and padding structure
- Scoped styles already define footer container width (680px max) and spacing

**`/Users/saurabhsarin/Documents/My Repos/sarinsaurabh.in/src/styles/global.css`**
- Global link styles (lines 78-93) define the understated underline treatment
- Color scheme uses `#111` for text on `#fff` background
- Font family and line-height established for consistent typography

**Navigation link patterns in BaseLayout.astro**
- `.nav-link` hover and focus states demonstrate the interaction pattern to follow
- Shows how to apply consistent focus outlines for accessibility

## Out of Scope
- Creating a dedicated Contact page
- Adding social media links or icons anywhere on the site
- Newsletter signup forms or email capture
- Calendly or scheduling integrations
- Multiple contact methods or options
- "Work with me" or services-oriented framing
- Availability statements (e.g., "open to opportunities")
- Contact forms or any server-side form handling
- Visual emphasis like buttons, cards, or highlighted sections
- Page-specific CTAs or variations of the footer content
