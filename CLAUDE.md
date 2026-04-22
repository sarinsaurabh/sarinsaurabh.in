# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Source for **sarinsaurabh.in**, Saurabh Sarin's personal site — a static Astro 5 site deployed to GitHub Pages. Per `agent-os/product/mission.md`, it's intentionally *not* a blog, portfolio, or SEO play. It's a "public workspace" optimized for signal density over polish, with three content types:

- **Problem Notes** — short, problem-first explorations, each tagged `exploring` / `evolving` / `stable`
- **Case Studies** — deeper write-ups with explicit `context` and `outcome` fields
- **Now** — a single-entry living page for current focus

Content lives as MDX in `src/content/` and is rendered by Astro pages with no client-side JS framework.

## Commands

- `npm run dev` — start Astro dev server (drafts are visible in dev)
- `npm run build` — static build to `dist/`
- `npm run preview` — preview the production build
- `npm test` — run Vitest suite (`src/**/*.test.ts` and `tests/**/*.test.ts`)
- `npm run test:ui` — Vitest UI
- Run a single test file: `npx vitest run tests/problem-notes/list-page.test.ts`
- Filter by test name: `npx vitest run -t "sorts notes"`

## Architecture

Astro 5 static site (`output: 'static'`) built around content collections. No client-side framework — authoring happens in Markdown/MDX.

**Deployment specifics.** Despite `agent-os/product/tech-stack.md` mentioning Vercel, the live deploy is GitHub Pages via `.github/workflows/deploy.yml` on push to `main`. The site is served from the apex domain `sarinsaurabh.in` (set in `astro.config.mjs`) via `public/CNAME`, which Astro copies into `dist/` so GitHub Pages keeps the custom-domain binding on every deploy.

**Content collections** (`src/content.config.ts`) define three schemas, each with strict Zod validation:
- `problem-notes` — requires `status: 'exploring' | 'evolving' | 'stable'`, optional `tags`, `draft` boolean
- `case-studies` — requires `context` and `outcome` fields alongside title/description/date
- `now` — single-entry collection with `lastUpdated` and `description`. The entry lives at `src/content/now/index.mdx` (not `now.mdx`), and `src/pages/now.astro` reads it via `getEntry('now', 'index')`.

Adding or renaming fields requires updating the schema here AND the pages that render the collection; mismatches fail the build.

**Imports.** `tsconfig.json` maps `@/*` to `src/*`. Prefer `@/lib/content` over deep relative paths.

**Drafts.** `src/lib/content.ts` exposes `filterDrafts()` — every list page that surfaces collection entries must pass results through it. It keys off `import.meta.env.PROD`, so drafts render in `npm run dev` but are stripped from the production build.

**Routing.** `src/pages/problem-notes/[slug].astro` and `src/pages/case-studies/[slug].astro` handle individual entries via Astro's dynamic routes backed by `getStaticPaths` over the collection. List pages live at `index.astro` in each folder. `BaseLayout.astro` is the single shared shell; the nav array there is the source of truth for the top-level sections.

**Styling.** Global tokens (`--color-text`, `--color-border`, etc.) come from `src/styles/global.css`, imported once by `BaseLayout.astro`. Per-page `<style>` blocks are scoped by Astro and reference those CSS variables rather than hardcoding colors. Typography is the primary design element — see problem-note status indicators for the pattern (italic/normal/bold instead of colored pills).

## Testing

Vitest + `happy-dom`. Tests are file-assertion heavy: they read `.astro`/`.mdx` files from disk with `fs` + `gray-matter` and assert on source content (e.g., presence of strings, frontmatter shape, file existence). They are not rendering the components through Astro. When adding a feature, expect to update a test that greps the template string rather than snapshotting output.

## Agent-OS product context

`agent-os/` holds product mission, roadmap, and writing/style standards that inform *editorial* intent (problem-first, signal density, comfortable with uncertainty). Read `agent-os/product/mission.md` before making content or IA changes — e.g., this is intentionally *not* a blog, not SEO-optimized, and avoids "personal brand" framing.

For content work, also read `docs/writing-style.md` and `docs/saurabh-positioning.md` — they define the dry, understated first-person voice used across Problem Notes and Case Studies. Code-side conventions live under `agent-os/standards/{frontend,testing,global,backend}/`.
