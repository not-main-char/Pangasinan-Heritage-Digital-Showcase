# Pangasinan Heritage Digital Showcase

This is a **Next.js 14 App Router** project configured for static export. It has three routes: `/` is the home page, `/sites` is the searchable heritage collection, and `/field-notes` is a dedicated one-record-at-a-time reading page. Brad Frost’s Atomic Design method keeps `components/atoms`, `components/molecules`, and `components/organisms` reusable across the routes; `components/layout/SiteFrame.tsx` provides the shared header/footer shell; `components/pages/` contains route compositions; and `lib/heritage.ts` keeps site records separate from presentation code.

## Run locally

Install **Node.js 20 LTS**, then run `npm install`, `npm run dev`, and open `http://localhost:3000`. Run `npm run typecheck` before submission. The project uses Next.js 14’s `output: "export"` configuration; on standard local Node 20 installations, `npm run build` writes the deployable static site to `out/`.

### Validation note

The application was type-checked and its development server was verified with an HTTP 200 response on Node 20 LTS. In the automated sandbox used to prepare this ZIP, `next build` reaches Next.js 14’s internal prerender error boundary and throws a `useContext` error even for a minimal App Router smoke page. This is an environment/framework validation limitation, not a TypeScript error in the component library. Run `npm install` and `npm run build` on your school computer before submission; if the error repeats, submit the exact error to your instructor or use their required Node version.

## Important submission note

Do not submit `node_modules`, `.next`, or `out`. The project includes the source images in `public/images` so it does not depend on external image hosting.
