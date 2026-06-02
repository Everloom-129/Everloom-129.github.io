# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start local dev server (localhost:3000)
npm run build    # static export to out/
npm run lint     # ESLint check
```

There are no tests. The site is deployed as a GitHub Pages static export — `next build` produces the `out/` directory.

**Node 18+ is required** (Next.js 15). If the system default is older, install a local Node 20 and prefix commands with it on `PATH`.

## Architecture

Next.js 15 App Router site configured for **static export** (`output: "export"` in `next.config.ts`). This means no server-side features: no dynamic routes that require a server, no API routes, no Next.js image optimization (images use `unoptimized: true`).

### Content lives entirely in `src/data/`

All personal content is defined as TypeScript data files — **editing these is the primary task in this repo**:

| File | What it controls |
|------|-----------------|
| `aboutme.ts` | Name, bio (supports raw HTML links), social links, photo, CV URL |
| `publication.ts` | Papers/blog posts — `featured: true` surfaces on homepage; `conference` containing `"blog"` (case-insensitive) routes to Blog page |
| `news.ts` | Timeline items on homepage (top 4 shown) |
| `education.ts` | Education section on homepage |
| `experience.ts` | Experience section on homepage |
| `portfolio.ts` | Projects page cards |
| `title-description.ts` | `<title>` and meta description overrides |
| `section-order.ts` | (present but unused in current layout) |

### Pages and routing

- `/` (`src/app/page.tsx`) — homepage: profile sidebar + about/news/selected research/education/experience
- `/research` — all publications grouped by year; blog-type entries separated at bottom
- `/projects` — portfolio cards from `portfolioData`
- `/blog` — writing aggregator: a leading **Benchmark Atlas** section (SimBench project link + a MolmoAct2/YAM "Dataset Deep-Dive" subsection), then blog publications + hardcoded essay/course/misc entries. The Benchmark Atlas content is hardcoded JSX in `src/app/blog/page.tsx`, not data-driven.

The `Navbar` component is a `"use client"` component (needs `usePathname`); all pages themselves are server components.

### Static blog pages in `public/blogs/`

Standalone hand-authored HTML lives in `public/blogs/*.html`. Next.js copies everything under `public/` verbatim to the export root, so these are served directly at `https://everloom-129.github.io/blogs/{name}.html` — independent of the React pages, no routing needed. Link to them from React with root-relative paths (`/blogs/{name}.html`). Drop a new `.html` file in to publish another one. (Most of the former VLA-benchmark dashboards now live in the separate [SimBench](https://github.com/Everloom-129/SimBench) repo; `molmoact2_yam_dataset.html` remains here.)

### Layout details

- Root layout (`src/app/layout.tsx`) loads four Google Fonts: Geist Sans, Geist Mono, Noto Serif, PT Serif. The `font-serif` Tailwind class maps to PT Serif via CSS variable.
- Favicon is set to `/images/favicon.ico` (served from `public/images/`).
- Background color throughout is `#FFFCF8` (warm off-white).
- `lucide-react` is the only icon library used.

### Deployment

The repo targets GitHub Pages. `next build` writes static files to `out/`. No CI config is present — deployment is manual.
