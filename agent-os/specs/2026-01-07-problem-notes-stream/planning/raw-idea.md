# Problem Notes Stream - Raw Idea

## Feature Description from Roadmap

"Problem Notes Stream — Build the thinking stream section displaying short, structured pieces on problems. Include list view with titles and brief descriptions, individual note pages, and clear visual treatment for 'unfinished' or 'evolving' status."

## Context

This is for a personal website (sarinsaurabh.in) built with Astro + MDX. The content architecture is already in place with:
- Content collections configured in src/content.config.ts
- Problem Notes schema: title, description, date, status (exploring/evolving/stable), tags, draft
- Placeholder content in src/content/problem-notes/
- Draft filtering helper in src/lib/content.ts

## Requirements

The Problem Notes Stream should:
- Display a list view with titles and brief descriptions
- Individual note pages for each problem note
- Visual treatment for status (exploring, evolving, stable)
