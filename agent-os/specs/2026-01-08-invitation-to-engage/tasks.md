# Task Breakdown: Invitation to Engage

## Overview
Total Tasks: 5
Size: XS (Extra Small)
Scope: Single file modification to add email invitation link in footer

## Task List

### Frontend Implementation

#### Task Group 1: Footer Enhancement
**Dependencies:** None

- [x] 1.0 Complete footer invitation implementation
  - [x] 1.1 Write 2-3 focused tests for footer functionality
    - Test that footer contains invitation text
    - Test that mailto link is present with correct email address
    - Test that link has accessible text (not generic "click here")
  - [x] 1.2 Add invitation copy to footer in BaseLayout.astro
    - Replace placeholder comment in `.footer-content` div
    - Add paragraph: "If something here resonates and you want to think through a problem together, "
    - Add inline mailto link with text "reach out" pointing to `mailto:sarin.saurabh@gmail.com`
    - Ensure semantic HTML structure (`<p>` containing `<a>`)
  - [x] 1.3 Add footer text styling
    - Add `.footer-text` class to the paragraph element
    - Style with slightly smaller font size (`0.9rem`) for unobtrusive presence
    - Use muted color (`#444` or similar) to reduce visual prominence
    - Maintain left alignment consistent with reading column
    - Add scoped styles within `<style>` block of BaseLayout.astro
  - [x] 1.4 Verify accessibility compliance
    - Confirm link text "reach out" is descriptive in context
    - Verify focus state inherits from global.css (`outline: 2px solid #111; outline-offset: 2px`)
    - Confirm no ARIA attributes needed (semantic mailto link is sufficient)
  - [x] 1.5 Ensure footer tests pass
    - Run ONLY the 2-3 tests written in 1.1
    - Verify footer renders correctly across all pages
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- Footer displays invitation text on all pages
- "reach out" links to `mailto:sarin.saurabh@gmail.com`
- Text styling is understated (smaller, muted)
- Existing border-top separator and padding preserved
- Link hover/focus states work correctly (inherited from global styles)
- Accessible to screen readers

## File Changes Summary

| File | Change Type | Description |
|------|-------------|-------------|
| `src/layouts/BaseLayout.astro` | Modify | Add invitation paragraph with mailto link, add footer text styles |

## Execution Order

Recommended implementation sequence:
1. Footer Enhancement (Task Group 1) - Single task group, implements complete feature

## Implementation Notes

**Existing Code to Leverage:**
- Global link styles in `src/styles/global.css` (lines 78-93) provide underline treatment and focus states
- Footer structure already exists with `.site-footer` and `.footer-content` classes
- Scoped styles pattern established in BaseLayout.astro for `.nav-link` styles

**Key Constraints:**
- No new files or components needed
- No buttons, icons, or visual embellishment
- One sentence only, calm and non-transactional tone
- Must feel like part of reading environment, not a CTA
