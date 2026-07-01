# L0r3 Website

Personal website for Divine Eyth, built with React, TypeScript, Vite, and plain CSS.

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Project Structure

- `src/pages` contains route-level pages.
- `src/components` contains shared layout, section, SEO, and UI components.
- `src/content` contains profile, resume, services, and writing content.
- `public` contains static assets served from the site root.

## Content Notes

The site intentionally avoids publishing unconfirmed contact details, resume downloads, and draft writing. Add real values in `src/content/profile.ts`, `src/content/resume.ts`, and `src/content/posts.ts` when they are approved for publication.

Draft writing posts use `date: 'Draft'` and are hidden from public article routes. Give a post a real date when it should appear on the writing page and resolve at `/writing/:slug`.

## Launch Checklist

- Confirm public email and LinkedIn URL.
- Add the real contact form endpoint or replace the coming-soon state.
- Add the final resume PDF before enabling the download button.
- Replace draft post dates with publication dates only after content review.
- Run `npm run lint` and `npm run build` before deploy.
