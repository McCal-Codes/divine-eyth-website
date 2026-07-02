# L0r3 Website

Personal website for Divine Eyth, built with React, TypeScript, Vite, and plain CSS. There's no CMS — all content lives in plain files in this repo, editable directly. This README is the guide for making changes.

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Project Structure

- `src/pages` — route-level pages (Home, About, Resume, Consulting, Writing, BlogPost, Contact, NotFound).
- `src/components/layout` — Header, Footer, Layout (site chrome shared by every page).
- `src/components/ui` — reusable pieces: `PageHero` (title/kicker/description block used at the top of most pages), `Kicker` (numbered section label, e.g. "01 — About"), `SectionHeader`, `ButtonLink`, `PullQuote`, `Seo`, `JsonLd`.
- `src/content` — all editable site copy (see below).
- `src/data/navigation.ts` — header/footer nav links.
- `public` — static assets (images, favicon, robots.txt, sitemap.xml) served from the site root.

## Editing content

Everything here is a plain `.ts` or `.md` file — edit it, save, and `npm run dev` will hot-reload. Each file also has a comment at the top explaining its fields.

### Bio, hero, footer text — `src/content/profile.ts`

Name, location, headline, hero photo, and the "public source" links shown on the homepage and About page. `email` and `linkedinUrl` are intentionally blank — fill them in when they're ready to go public; leaving them blank keeps the Contact page in its "coming soon" state automatically.

### Resume — `src/content/resume.ts`

`experience`, `education`, `leadership`, and `skillGroups` are arrays — add, remove, or reorder objects to change what shows on `/resume`. No other file needs to change.

### Consulting services — `src/content/services.ts`

Each service is `{ title, description, icon }`. `icon` is a component imported from [lucide-react](https://lucide.dev/icons) — pick any icon there, import it at the top of the file, and reference it. Services show up on `/consulting` (all of them) and the homepage (first three).

### Navigation — `src/data/navigation.ts`

The header/footer links, in order. `href` needs to match a route in `src/App.tsx`.

### Blog posts — `src/content/blog/*.md`

Each post is one Markdown file with a frontmatter block at the top:

```md
---
title: Why Onboarding Is a Communication Problem
category: Work & Culture
date: Draft
readingTime: 5 min read
excerpt: A practical look at onboarding as a writing, sequencing, and expectation-setting challenge.
---

Write the post body here in regular Markdown — paragraphs, **bold**, _italic_,
[links](https://example.com), lists, and `> blockquotes` all work.
```

- **To add a post:** create a new file in `src/content/blog/`, e.g. `my-new-post.md`. The filename (minus `.md`) becomes the URL slug: `/writing/my-new-post`.
- **To keep a post unpublished:** leave `date: Draft`. Draft posts never show on `/writing` or the homepage, and their `/writing/:slug` page 404s — this is intentional, so you can write and revise in place without it going live.
- **To publish:** change `date` to a real date (`2026-05-01`). It'll immediately appear on the writing page, sorted newest-first, and become reachable at its URL.
- `category` should match one of the categories listed in `src/content/posts.ts` (`writingCategories`) if you want it to line up with the category filter pills on `/writing` — add a new category there if you need one.
- Nothing else needs to change — `src/content/posts.ts` just reads every file in `src/content/blog/` automatically.

### Images — `public/`

Drop new images anywhere under `public/` (e.g. `public/images/`) and reference them with an absolute path starting at `/`, e.g. `/images/my-photo.jpg`. Used for the homepage hero (`profile.heroImage` in `profile.ts`), favicon (`favicon.svg`), brand mark (`brand-mark.svg`), and the social share image (`og-image.jpg`, referenced from `index.html` and `src/components/ui/Seo.tsx`).

Keep the social share image close to 1200×630 (landscape) — that's the standard size link previews on iMessage, Slack, X, and LinkedIn expect.

### Colors, type, spacing — `src/index.css`

All design tokens live in the `:root` block at the top (colors as CSS variables, plus `--heading`/`--body` font stacks). Changing a variable there updates it everywhere it's used.

## Launch Checklist

- Confirm public email and LinkedIn URL in `profile.ts`.
- Add the real resume PDF before enabling the download button on `/resume`.
- Add a real contact form endpoint (or embed a third-party form) to replace the Contact page's coming-soon state.
- Flip draft blog posts to real dates only after content review.
- Run `npm run lint` and `npm run build` before deploy.
