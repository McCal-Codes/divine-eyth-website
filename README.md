# L0r3 Website

Personal website for Divine Eyth, built with React, TypeScript, Vite, and plain CSS. Content is editable two ways: through a visual dashboard (TinaCMS, at `/admin`) or by editing the underlying files directly — both end up changing the exact same files, committed to this repo. This README is the guide for both.

## Scripts

```bash
npm install
npm run dev      # starts the site AND the /admin dashboard together
npm run lint
npm run build
npm run preview
```

## Editing content via the dashboard

Run `npm run dev`, then visit `http://localhost:5173/admin`. Locally this works immediately with no login ("local mode") — edits save straight to the files on disk.

The sidebar has two sections:

- **Collections → Blog Posts** — a list of every post; click one to edit it in a full rich-text editor (bold, links, lists, headings — a normal writing experience, not raw Markdown).
- **Site → Site Profile / Resume / Services / Navigation** — one form per area, matching the sections below. Repeatable things (experience entries, services, nav links) have "+" to add and a trash icon to remove.

Every field has a plain-language label and, where it's not obvious, a description under the label explaining what it does.

**To give the live site (not just your own machine) a real dashboard your client can log into:**

1. Go to [app.tina.io](https://app.tina.io), create a free account, and connect it to this GitHub repo (Tina Cloud needs GitHub App access to the repo — only the repo owner can grant this).
2. From the new Tina Cloud project, copy the **Client ID** and generate a **read-only Token**.
3. Add them as environment variables, both locally (in a `.env` file at the repo root — gitignored, never commit it) and in the Vercel project's environment variables:
   ```
   TINA_PUBLIC_CLIENT_ID=<client id>
   TINA_TOKEN=<token>
   ```
4. In Tina Cloud's project settings, invite your client's email as an editor (the free tier covers up to 2 editors). They'll then log in directly at `yoursite.com/admin` with that email — no GitHub account needed on their end.
5. Redeploy. `npm run build` runs `tinacms build` first, which needs those two env vars to succeed — this only matters for the deployed build, not local dev.

## Editing content directly (for developers)

Everything is a plain `.ts`/`.json`/`.md` file — edit it, save, and `npm run dev` hot-reloads. This is exactly what the dashboard does under the hood, so either approach is equally "correct"; use whichever's convenient.

### Bio, hero, footer text — `src/content/profile.json`

Name, location, headline, hero photo, and the "public source" links shown on the homepage and About page. `email` and `linkedinUrl` are intentionally blank — fill them in when they're ready to go public; leaving them blank keeps the Contact page in its "coming soon" state automatically.

### Resume — `src/content/resume.json`

`experience`, `education`, `leadership`, and `skillGroups` are arrays — add, remove, or reorder objects to change what shows on `/resume`.

### Consulting services — `src/content/services.json`

Each service is `{ title, description, icon }`. `icon` must be one of the names listed in the `SERVICE_ICONS` array in `tina/config.ts` (which maps to the matching `iconMap` in `src/content/services.ts`) — add a new lucide icon to both places to make it selectable.

### Navigation — `src/content/navigation.json`

The header/footer links, in order (`items` array). `href` needs to match a route in `src/App.tsx`.

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

- **To add a post:** create a new file in `src/content/blog/`, e.g. `my-new-post.md`. The filename (minus `.md`) becomes the URL slug: `/writing/my-new-post`. (Via the dashboard: Collections → Blog Posts → "Add File".)
- **To keep a post unpublished:** leave `date: Draft`. Draft posts never show on `/writing` or the homepage, and their `/writing/:slug` page 404s — this is intentional, so you can write and revise in place without it going live.
- **To publish:** change `date` to a real date (`2026-05-01`). It'll immediately appear on the writing page, sorted newest-first, and become reachable at its URL.
- `category` should match one of the categories listed in `src/content/posts.ts` (`writingCategories`) and `tina/config.ts` (`WRITING_CATEGORIES`) if you want it to line up with the category filter pills on `/writing` — add a new category to both if you need one.
- Keep frontmatter values on one line — `src/content/posts.ts` parses frontmatter itself (deliberately, to avoid shipping a full YAML parser to the browser) and doesn't handle multi-line values. The dashboard is configured not to produce them, so this only matters if you're hand-editing.

### Images — `public/`

Drop new images anywhere under `public/` (e.g. `public/images/`) and reference them with an absolute path starting at `/`, e.g. `/images/my-photo.jpg`. Used for the homepage hero (`profile.heroImage`), favicon (`favicon.svg`), brand mark (`brand-mark.svg`), and the social share image (`og-image.jpg`, referenced from `index.html` and `src/components/ui/Seo.tsx`). Images uploaded through the dashboard's image fields land in `public/images/uploads/`.

Keep the social share image close to 1200×630 (landscape) — that's the standard size link previews on iMessage, Slack, X, and LinkedIn expect.

### Colors, type, spacing — `src/index.css`

All design tokens live in the `:root` block at the top (colors as CSS variables, plus `--heading`/`--body` font stacks). Changing a variable there updates it everywhere it's used. Not dashboard-editable — this one's a code change.

## Project Structure

- `src/pages` — route-level pages (Home, About, Resume, Consulting, Writing, BlogPost, Contact, NotFound).
- `src/components/layout` — Header, Footer, Layout (site chrome shared by every page).
- `src/components/ui` — reusable pieces: `PageHero` (title/kicker/description block used at the top of most pages), `Kicker` (numbered section label, e.g. "01 — About"), `SectionHeader`, `ButtonLink`, `PullQuote`, `Seo`, `JsonLd`.
- `src/content` — all editable site copy (see above).
- `tina/config.ts` — the dashboard's schema; defines which fields show up in `/admin` and how they map to the files above.
- `public` — static assets (images, favicon, robots.txt, sitemap.xml) served from the site root.

## Launch Checklist

- Confirm public email and LinkedIn URL in `profile.json`.
- Add the real resume PDF before enabling the download button on `/resume`.
- Add a real contact form endpoint (or embed a third-party form) to replace the Contact page's coming-soon state.
- Flip draft blog posts to real dates only after content review.
- Connect Tina Cloud (see above) so the client has dashboard access on the live site.
- Run `npm run lint` and `npm run build` before deploy.
