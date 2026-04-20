# AGENTS.md — Fundación Ciudadanía Inteligente Website

## Project

- **Site**: https://fciweb.netlify.app/
- **Stack**: Astro 6 (SSR), Keystatic CMS, Tailwind CSS 4, DaisyUI 5, Alpine.js, Markdoc
- **Deploy**: Netlify (adapter `@astrojs/netlify` with Cloudinary image service)
- **Node**: 22

## Commands

```
npm run dev       # starts Astro dev server
npm run build     # production build → dist/
npm run preview   # preview production build locally
npm run astro     # raw Astro CLI
```

No test, lint, or typecheck scripts exist. Formatting via Prettier (`prettier-plugin-astro`).

## Architecture

- **`output: "server"`** — this is SSR, not static. Pages render on Netlify serverless functions.
- **`src/pages/`** — file-based routing. Key pages: `index.astro`, `noticias.astro`, `proyectos.astro`, `publicaciones.astro`, `nosotros.astro`, `contacto.astro`, `transparencia.astro`, `lealtad.astro`
- **`src/content/`** — content collections managed by Keystatic:
  - `posts/*.mdoc` — news articles (Markdoc format, `.mdoc` extension)
  - `people/*.yaml` / `people2/*.yaml` — board directory / team members
  - `proyectos/*.yaml` — projects
  - `publicaciones/*.yaml` — publications
  - `documentos/*.yaml` — documents
  - `memorias/*.yaml` — annual reports (memorias)
- **`src/content.config.ts`** — Zod schemas for each collection. Must match `keystatic.config.ts` schema.
- **`keystatic.config.ts`** — cloud storage, project `fciweb/fkiweb`. Images go to `public/images/<collection>/`, PDFs to `public/pdfs/<collection>/`.
- **`markdoc.config.mjs`** — registers `<Aside>` custom Markdoc component.

## Content Conventions

- **Posts use `.mdoc` extension** (not `.md`). Keystatic renders them as Markdoc.
- All content collections except `posts` use **YAML** frontmatter-only files.
- Collections with `order` field should be sorted by it in queries.
- `showOnHome` / `home` checkboxes control front-page visibility.

## Key Gotchas

- **Tailwind CSS v4** — uses `@tailwindcss/vite` plugin, not the old `tailwind.config.js` approach.
- **Keystatic cloud storage** — content is stored in Keystatic Cloud, not committed to git. Local YAML files are the source of truth; Keystatic syncs to cloud.
- **No `.env` committed** — any env vars must be set in Netlify dashboard or local `.env`.
