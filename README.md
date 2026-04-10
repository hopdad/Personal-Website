# Personal Website

Personal portfolio built with [Astro](https://astro.build) 4 + [Tailwind CSS](https://tailwindcss.com) 3, following [`portfolio-website-spec.pdf`](./portfolio-website-spec.pdf).

## Stack

- **Framework:** Astro 4 (static output)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind + CSS custom properties for dark mode
- **Content:** Astro content collections (`projects`, `blog`) with zod schemas
- **Images:** `astro:assets` (WebP/AVIF, responsive)
- **Deploy:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## Commands

```sh
npm install     # install dependencies
npm run dev     # start dev server on :4321
npm run build   # build static site to ./dist
npm run preview # preview the built site locally
```

## Project structure

```
src/
├── assets/projects/     # optimized images for projects
├── components/          # Header, Footer, Hero, ProjectCard, SEO, ThemeToggle, ...
├── config.ts            # site-wide name, tagline, socials, nav
├── content/
│   ├── config.ts        # projects + blog collection schemas
│   ├── projects/*.md    # project entries
│   └── blog/*.md        # blog posts
├── layouts/BaseLayout.astro
├── lib/url.ts           # base-path-aware URL helper
├── pages/
│   ├── index.astro      # homepage (hero + featured + about + contact)
│   ├── projects/        # list + [slug] dynamic route
│   ├── blog/            # list + [slug] dynamic route
│   ├── rss.xml.ts       # blog RSS feed
│   └── 404.astro
└── styles/global.css    # CSS tokens, dark-mode vars, base styles
```

## Customizing

1. Edit `src/config.ts` — name, tagline, email, socials, nav.
2. Add project markdown files under `src/content/projects/` with thumbnails in `src/assets/projects/`.
3. Write blog posts in `src/content/blog/`.
4. Replace `public/og-default.png` and tweak `public/favicon.svg` to taste.

## Deployment

The site deploys to GitHub Pages on every push to `main`. The repo is
`hopdad.github.io` (user site), so it serves from `https://hopdad.github.io/`
with no base path.

Enable Pages in the repo's Settings → Pages → Source: GitHub Actions.

## Dark mode

Class-based (`darkMode: 'class'`). A no-flash inline script in `BaseLayout.astro`
sets `.dark` on `<html>` before paint based on `localStorage.theme` or
`prefers-color-scheme`. The `ThemeToggle` component persists user choice.
