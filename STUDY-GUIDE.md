# How the Pangasinan Showcase Works

This project is built with **Next.js 14 App Router**. The `app/` folder is the starting point: `app/layout.tsx` wraps every page and loads global CSS, `app/page.tsx` renders the home page, `app/sites/page.tsx` renders the heritage-sites page, and `app/field-notes/page.tsx` renders the field-notes page. The site is configured with `output: "export"` in `next.config.mjs`, so a successful production build creates static files suitable for ordinary static hosting.

## Atomic Design Structure

| Level | Folder | What it contains | Example |
|---|---|---|---|
| Atoms | `components/atoms/` | Small, reusable UI pieces | `Button`, `Icon`, `Image`, `Typography`, `tokens` |
| Molecules | `components/molecules/` | Small combinations of atoms | `HeritageCard`, `SearchForm`, `NavigationItem` |
| Organisms | `components/organisms/` | Complete page regions | `HeritageGrid`, `HeaderNavigation` |
| Shared layout | `components/layout/` | The header/footer shell used by all pages | `SiteFrame` |
| Page composition | `components/pages/` | Route-level assemblies of the design system | `HomePage`, `SitesExplorer`, `FieldNotesPage` |
| Data | `lib/heritage.ts` | The site records separate from UI code | `heritageSites` |

The main idea is that **small pieces should not know the whole page**. For example, `HeritageCard` only knows how to show one site. `HeritageGrid` decides how many cards to show and how the cards are arranged. `SiteFrame` puts the same navigation on all three pages, while each page composition owns only its own route’s content and state.

## How Interaction Works

The shared header uses normal route links: **Home** goes to `/`, **Sites** goes to `/sites`, and **Field notes** goes to `/field-notes`. `SitesExplorer.tsx` is a client component because it owns the search, category filter, and selected-record state. The `query` and `filter` values are passed into `SearchForm`; `useMemo` filters `heritageSites`; and `HeritageGrid` returns the selected card to the page. `FieldNotesPage.tsx` has its own simple selected-site state so the student can open each sample record in a dedicated reading route.

## Responsive and Accessible Decisions

The CSS is mobile-first. The default layout is a single column. Tailwind’s `sm:` utilities begin at 640px and add two-column controls or grids; `lg:` utilities begin at 1024px and display desktop navigation plus the asymmetric record layout. The menu button uses `aria-expanded` and `aria-controls`; the search and select controls use labels; heritage images use meaningful alt text; a skip link appears for keyboard users; and global CSS gives keyboard focus a clear copper outline.

## Low-Data Decisions

All destination assets are stored locally in `public/images`, not fetched from a remote image API. The Image atom uses `loading="lazy"` for non-priority media and `decoding="async"`. The icon registry uses inline SVG paths instead of an external icon package. These choices keep the runtime simple and avoid unnecessary network requests.

## Commands to Remember

Run `npm install` once after opening the folder. Use `npm run dev` while editing, `npm run typecheck` before submission, and `npm run build` to generate the static output. Do not submit `node_modules`, `.next`, or `out`.
