# Pangasinan Heritage Digital Showcase

**Project Title:** Pangasinan Heritage Digital Showcase
**Student Name:** Rico Taluban
**Selected Framework:** Next.js 14 (App Router) + React 18 + TypeScript + Tailwind CSS
**Live Website:** https://not-main-char.github.io/Pangasinan-Heritage-Digital-Showcase/

A fast, mobile-first, static **field guide** to three Pangasinan heritage sites:

1. **Hundred Islands** — Alaminos — Coastal landscape
2. **Bolinao Lighthouse** — Bolinao — Built landmark
3. **Balungao Hot Spring** — Balungao — Natural wellness

The site has **three pages**, one search bar at the top of the Sites page, and no backend or database. Every page is pre-rendered into static HTML at build time, so it can be hosted for free on GitHub Pages.

## The three pages

| Page | URL | What it does |
| --- | --- | --- |
| **Home** | `/` | Title + introduction + the full card grid + links to the other pages |
| **Sites** | `/sites` | Search bar + category filter + full card grid + a "selected record" summary panel |
| **Field notes** | `/field-notes` | Three buttons to choose a record, then that record read at length with a large photo |

## Project structure (Atomic Design)

```
app/                       URL routes. Each file is tiny: it puts one page inside SiteFrame
├── layout.tsx             <html>, <body>, global CSS, default page metadata
├── page.tsx               "/"
├── sites/page.tsx         "/sites"
└── field-notes/page.tsx   "/field-notes"

components/
├── atoms/                 smallest pieces, used everywhere
│   ├── Button.tsx         one button (renders <a> if given href, else <button>)
│   ├── Typography.tsx     Heading, Text, Eyebrow
│   ├── Icon.tsx           hand-drawn SVG icons (no icon library)
│   ├── Image.tsx          the only way a photo is shown (lazy load + alt text)
│   ├── tokens.ts          the colour palette + breakpoints, written down
│   └── index.ts           re-export file, so imports stay short
├── molecules/             small groups of atoms
│   ├── HeritageCard.tsx   photo + category + location + name + button
│   ├── SearchForm.tsx     the search bar (+ optional category dropdown)
│   └── NavigationItem.tsx one header link
├── organisms/             whole sections
│   ├── HeritageGrid.tsx   the 1 / 2 / 3-column card grid + empty message
│   └── HeaderNavigation.tsx  logo, page links, mobile menu
├── layout/SiteFrame.tsx   header + main + footer, shared by all pages
└── pages/                 one file per page
    ├── HomePage.tsx
    ├── SitesPage.tsx
    └── FieldNotesPage.tsx

lib/heritage.ts            ALL the content (3 records) + filterSites() search helper
public/images/             the three photos + the logo mark
```

**Rule of the design system:** a page never writes a colour, font size, or button style itself. It only arranges atoms and molecules. Change `Button.tsx` once and every button on all three pages changes.

## How the search works

`lib/heritage.ts` exports one function:

```ts
filterSites(sites, query, category)  // returns only the matching records
```

The Sites page keeps the typed text in state (`useState`), calls `filterSites` together with the chosen category, and renders the result. The Home page shows all three records without searching. There is no server request — the three records are already loaded in the page.

## Run it on your computer

Install **Node.js 20 LTS** (or newer), then in this folder:

```bash
npm install      # once: download the libraries
npm run dev      # start the site, open the URL it prints (usually localhost:3000)
npm run typecheck
npm run build    # create the static website inside out/
npm start        # preview the built out/ folder
```

Stop the dev server with `Ctrl + C`.

## Deployment to GitHub Pages

`.github/workflows/deploy.yml` does everything automatically:

1. Push your changes to the `main` branch.
2. GitHub Actions runs `npm ci` and `npm run build` with `GITHUB_PAGES=true`.
3. The generated `out/` folder is uploaded and published.
4. In GitHub: **Settings → Pages → Source: GitHub Actions**.

`next.config.mjs` only adds the `/Pangasinan-Heritage-Digital-Showcase` base path when `GITHUB_PAGES=true`, so local development stays at the root. The `repoName` constant must match the GitHub repository name **exactly**, including capital letters.

## Requirements checklist

| Requirement | How it is met |
| --- | --- |
| Lightning fast | Static HTML, no webfonts, no icon library, ~250 KB photos, images lazy-loaded |
| Mobile-first | One column on phones, two on tablets, three on desktop; 44 px touch targets |
| Maintainable | Atomic Design layers, one content file, one shared frame |
| Accessible | Skip link, landmarks, real form labels, `aria-live` result count, `aria-pressed` buttons, visible focus outline, alt text on every photo |
| Deployable | `output: "export"` static build deployed to GitHub Pages by a workflow |

Do not commit `node_modules`, `.next`, or `out` — they are generated files and are already in `.gitignore`.
