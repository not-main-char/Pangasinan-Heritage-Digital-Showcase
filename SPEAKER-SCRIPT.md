# Web Presenter Script — 17 Minutes

**Your part:** project overview, live demo, web framework, web architecture, JAMstack, performance metrics, challenges, and conclusions.
**Your teammate's part:** mobile framework and mobile architecture.
**Group total:** about 23–24 minutes. Hard stop: 25:00.

Replace every bracket before recording:

- `[GROUP NUMBER]`
- `[YOUR FULL NAME]` — you
- `[CO-PRESENTER FULL NAME]` — optional, if two people present the web section
- `[MOBILE TEAMMATE FULL NAME]`
- `[DATE]`

If you are the **only web presenter**, deliver the whole script. If there are **two web presenters**, hand off at **7:30** (after the framework alternatives) so each person gets a balanced section.

---

## 0:00–7:30 — Presenter 1: overview, demo, framework

### Slide 1 — Title (0:30)

> Good morning, everyone. We are Group `[GROUP NUMBER]`, and our capstone project is the **Pangasinan Heritage Digital Platform**. My name is `[YOUR FULL NAME]`, and I will present the web build. With me are `[CO-PRESENTER FULL NAME]` and `[MOBILE TEAMMATE FULL NAME]`. Our subject is **Elective 4, Special Topics in IT**, under **Sir Rey Molano**.
>
> Today I will show the current web application, explain the framework and architecture decisions behind it, and present our measured performance. My teammate will then cover the mobile architecture.

### Slide 2 — Agenda (0:15)

> I will cover the project context and demo, the web framework, the web architecture, the JAMstack performance model, and our Lighthouse results. Then I will hand over for the mobile section.

### Slide 3 — Project overview and business context (1:15)

> Pangasinan has strong heritage and tourism assets, but the information is scattered across social media posts, travel blogs, and image-heavy pages. A visitor who wants to compare a coastal site, a built landmark, and a nature site has to open several sources, and many of those pages are slow on mobile data.
>
> Our vision is a single, lightweight field guide that presents each site as a curated record: place, category, location, a short context note, and a photo. The goal is not to replace the official tourism website. The goal is to show how a small, well-structured digital platform can make heritage information easier to browse, read, and extend.
>
> Our users are domestic tourists planning a trip, students and researchers looking for a starting point, and local tourism offices that need a simple showcase. For this milestone, we built a vertical slice with three records: **Hundred Islands** in Alaminos, **Bolinao Lighthouse** in Bolinao, and **Balungao Hot Spring** in Balungao. That gives us one record for each category: coastal landscape, built landmark, and natural wellness.

### Slide 4 — Features and constraints (1:00)

> The web app has three routes. **Home** explains the purpose and features one record. **Sites** is the searchable collection: a visitor can type a name, municipality, or keyword, filter by category, and see a live count of how many records are shown. **Field notes** gives one record at a time more reading space.
>
> The interface is mobile-first, with a disclosure menu on small screens and a full navigation bar on desktop. Accessibility is built in: a skip link, labelled search and filter controls, a live region for result counts, pressed states on the field-note buttons, visible keyboard focus, and reduced-motion support.
>
> The main constraints were the academic timeline, a small team, no budget for servers, and users on limited mobile data. Those constraints are why we chose a static, pre-rendered architecture instead of a database-backed server.

### Slides 5–7 — Live demonstration (2:30)

*[Switch to the browser. Use 100% zoom. Run `npm run dev` before recording and keep the tab open.]*

> Let me demonstrate the current build.
>
> This is the **Home** page. The hero uses a local image, and the page states the purpose in one sentence. The two buttons are the main paths: **Browse heritage sites** and **Open field notes**.
>
> *[Click Sites.]*
>
> This is the **Sites** route. The search and category controls are native form elements, so they work with keyboards and screen readers. I will type **"bolinao"**. *[Type.]* The grid updates immediately and the count changes from **3 of 3** to **1 of 3**. The match includes the site name, municipality, category, description, and search terms. Now I will clear it and choose **Natural wellness**. *[Select.]* Only Balungao remains. If nothing matches, the grid shows a status message instead of an empty area.
>
> *[Clear the filter, then click **Open record** on a card.]*
>
> Opening a card updates the selected-record panel below. This is local React state; there is no page reload and no server request.
>
> *[Click **Field notes** in the navigation.]*
>
> The **Field notes** route lets the reader switch between the three records one at a time. The selected button exposes `aria-pressed`, so assistive technology knows which record is active. The image and the note change together.
>
> *[Resize the browser to a mobile width and open the menu.]*
>
> At mobile width, the desktop navigation is replaced by a menu button with `aria-expanded` and `aria-controls`, and the layout becomes a single column.
>
> That is the complete web demo. The three routes, search, filter, selected-record state, field-note switching, and responsive navigation are working.

### Slide 8 — Web framework selection (1:30)

> The web stack is **Next.js 14 with the App Router, React 18, TypeScript 5.5, and Tailwind CSS 3.4**. We evaluated the choice on four criteria from the module: maintainability, scalability, performance, and development efficiency.
>
> **Maintainability:** Next gives us file-based routing and a shared layout. Each route file in `app/` is six lines; it only composes the shared frame and the page component. TypeScript catches prop mismatches at build time, and we run `npm run typecheck` before submission. Tailwind keeps spacing, color, and breakpoints in one configuration instead of scattered CSS files.
>
> **Scalability:** the production build is a static export. Any static host or CDN can serve it, so traffic spikes do not require a bigger server. The component layers let us add pages without rewriting the shell.
>
> **Performance:** Next pre-renders the pages at build time, splits JavaScript per route, and fingerprints assets for caching. Our first-load JavaScript is about 90 to 93 kilobytes per route.
>
> **Development efficiency:** one language across the UI, the data model, and the build; reusable components; and a fast feedback loop with the development server.
>
> The key decision is `output: "export"` in `next.config.mjs`. That turns the app into plain HTML, CSS, JavaScript, and images in the `out/` folder. There is no Node server at runtime.

### Slide 9 — Alternatives and trade-offs (0:30)

> We considered **Vue with Nuxt**. It has a gentler learning curve and excellent documentation. We chose React because the team already had React experience, the ecosystem is larger, and it gives us a consistent component model across the project.
>
> We considered **plain React with Vite**. It is lighter, but we would have to rebuild routing, metadata, and pre-rendering ourselves. Next gives those conventions out of the box.
>
> We considered **WordPress**. It is fast to start, but it brings plugin maintenance, a database, and hosting overhead, and it gives us less control over the design system. For a small curated guide, static export is simpler and cheaper.
>
> The trade-off is real: static export means no Next API routes or server-side sessions. If we add accounts, favorites, or user-generated content, we will need a separate API or serverless functions. For three curated records, that complexity is not justified yet.

---

## 7:30–17:00 — Presenter 2: architecture, JAMstack, metrics, conclusions

> *[If you are presenting alone, continue. If there are two web presenters, introduce the handoff:]* My name is `[CO-PRESENTER FULL NAME]`, and I will cover the web architecture, the JAMstack delivery model, and the measured performance.

### Slide 10 — Web architecture (2:30)

*[Show the runtime architecture diagram.]*

> The runtime architecture is deliberately small. The browser requests a route from a static host or CDN. The host returns pre-rendered HTML, plus hashed CSS, JavaScript, and local images. React hydrates the interactive parts. There is no application server and no database in this version.
>
> The content source is `lib/heritage.ts`. It exports a `HeritageSite` type and an array of three records. That file is compiled into the HTML at build time, so the first render already contains the content. This is why search works without a network request: the data is already in the client bundle, and filtering happens in memory.
>
> The route layer is the `app/` folder. `app/layout.tsx` loads the global CSS and sets the page metadata. `app/page.tsx`, `app/sites/page.tsx`, and `app/field-notes/page.tsx` are thin route files. Each one wraps a page composition in `SiteFrame`.
>
> `SiteFrame` owns the shared shell: the header, the main landmark, and the footer. Because every route uses it, navigation and footer content are defined once.
>
> The UI is organized with **Atomic Design**. Atoms are `Button`, `Heading`, `Text`, `Eyebrow`, `Image`, `Icon`, and the design tokens. Molecules combine atoms into a single job: `HeritageCard` shows one site; `SearchForm` owns the search and filter controls; `NavigationItem` renders one link. Organisms are complete regions: `HeaderNavigation` and `HeritageGrid`. Page compositions in `components/pages` assemble those regions for a route. `lib/` holds the data and the type.
>
> Only the components that own state are client components: `HeaderNavigation` for the mobile menu, `SitesExplorer` for query, filter, and selected record, and `FieldNotesPage` for the selected note. The atoms and molecules stay server-rendered unless their parent is interactive.
>
> This separation is what makes the architecture maintainable. Adding a site means adding one object to `lib/heritage.ts`. Changing how every card looks means editing one molecule. Adding a route means creating a six-line page file and a page composition. The small pieces do not know the whole page.

### Slide 11 — Components and data flow (1:00)

*[Show the folder tree and the two code snippets.]*

> The dependency direction is one way: pages depend on organisms, organisms depend on molecules, molecules depend on atoms. Atoms never import pages. That rule prevents circular dependencies and keeps components portable.
>
> You can see the reuse in the code. `Button` is used on the home page and inside `HeritageCard`. `HeritageCard` is used by `HeritageGrid`. `SearchForm` is controlled by its parent through `query`, `filter`, and change callbacks, so the same form could be reused in another route with a different wrapper.
>
> The props are explicit. `HeritageCard` takes a `site` and an `onViewMore` callback. It does not fetch data, and it does not know which route it is on. That is the single-responsibility principle in practice.
>
> The data flow is unidirectional. `SitesExplorer` owns `query`, `filter`, and `selected`. The query and filter flow down into `SearchForm`. The filtered list is derived with `useMemo`, so it is recalculated only when query or filter changes. `HeritageGrid` receives the filtered sites and an `onSiteSelect` callback. When a card is clicked, the callback flows up and updates `selected`, which re-renders the detail panel.
>
> There is no duplicated filtering logic and no global store. For this scope, `useState` plus `useMemo` is enough.

### Slide 12 — JAMstack architecture (1:30)

*[Show the build-and-deploy diagram.]*

> Our architecture maps directly to **JAMstack**. **Markup:** the pages are pre-rendered at build time by Next.js and exported as static HTML. **JavaScript:** React adds only the interactivity we need, which is search, filtering, the mobile menu, and record selection. **APIs:** we do not have a runtime API in this version because the content is compiled in. That is a deliberate choice, not an omission. The boundary is ready: if the collection grows or becomes editable, the data can move behind an API without changing the component contracts.
>
> The build and deployment flow is **Git-based**. A commit triggers `npm install` and `npm run build`. Next.js generates the static pages, and the `out/` folder is deployed to a static host. The host or CDN replicates the files to edge locations. The user request never reaches an origin application server.
>
> Pre-rendering matters because the HTML is ready before the request. There is no per-request database query and no server render. Decoupling matters because the content and UI can change without provisioning a backend. CDN distribution matters because the files are cached close to the user.
>
> The trade-offs are the usual JAMstack trade-offs: build time grows with content, frequent content changes require a rebuild, and dynamic features need an API or serverless function. For a curated guide, those trade-offs are acceptable.

### Slide 13 — Performance techniques already in the code (0:45)

> These are the techniques already implemented. The build splits JavaScript per route, so the home page does not download the Sites or Field notes bundles. The shared first-load JavaScript is about 87 kilobytes, and each route adds only a few kilobytes. Static assets are content-hashed, so they can be cached for a long time.
>
> The `Image` atom uses native lazy loading for non-priority images, asynchronous decoding, and explicit width and height. The hero image is marked priority, so it loads eagerly. Explicit dimensions and aspect ratios reserve space and keep Cumulative Layout Shift at zero.
>
> We use local images instead of a remote image API, inline SVG icons instead of an icon package, and system font stacks instead of downloaded fonts. The CSS is mobile-first, and reduced-motion preferences are respected.
>
> What we have **not** done yet: next-generation image formats, responsive `srcset`, preloading the hero image, and production compression and cache headers. Those are the next performance tasks.

### Slides 14–15 — Measured performance (1:15)

> Here are the actual **Lighthouse 12** results from our production build, served locally in headless Chrome. On mobile, the home page scored **88 for performance, 100 for accessibility, 96 for best practices, and 100 for SEO**. The Sites page scored **85 performance**, and Field notes scored **92**, with 100 accessibility and SEO on both. On desktop, the home page scored **100 performance**.
>
> The Core Web Vitals: First Contentful Paint is **0.9 seconds** on mobile. Largest Contentful Paint is **3.6 seconds** on Home, **4.4** on Sites, and **3.4** on Field notes. Total Blocking Time is **180 milliseconds** on Home and **10 milliseconds** on the other routes. Cumulative Layout Shift is **zero** on every route. Desktop LCP is **0.7 seconds**.
>
> I want to be precise about the test conditions. We served the static `out/` folder with a minimal local server that did not enable gzip or long-lived cache headers. Lighthouse therefore penalized text compression and caching. On a real static host or CDN, those audits should improve. We will re-run the audit on the deployed URL and include that report. We are not claiming production CDN numbers we have not measured.

### Slide 16 — Issues found and fixes (0:45)

> Lighthouse found four concrete issues.
>
> **First, LCP on mobile.** The LCP element is the hero JPEG, and 66 percent of the LCP time on the home page is render delay, not download. The fix is a combination: serve WebP or AVIF with `srcset`, preload the hero, and reduce main-thread work during hydration.
>
> **Second, best practices is 96 because `favicon.ico` returns 404.** That is a quick fix: add a proper icon.
>
> **Third, accessibility is already 100**, but Lighthouse flags a label-content-name mismatch on the logo link, where the `aria-label` does not contain all the visible text. We will align the label.
>
> **Fourth, about 123 kilobytes of JavaScript is unused on the home page.** Some of that is the React and Next runtime; we will audit imports and keep the interactive islands small.
>
> The improvements **already implemented** are image compression, lazy loading, explicit dimensions, route-level code splitting, inline icons, and system fonts. The **planned** improvements are next-gen images with `srcset`, a hero preload, the favicon, the label fix, and re-testing on the deployed host. We are reporting the gap honestly because the presentation is about engineering decisions, not perfect scores.

### Slide 17 — Challenges experienced (0:45)

> We faced three main web challenges.
>
> **First, static export versus dynamic behavior.** Search and filtering feel dynamic, but we did not want a server. We solved it by keeping the data small, shipping it with the bundle, and filtering in memory with `useMemo`. The limitation is that this approach does not scale to thousands of records; at that point we would move search behind an API or a search index.
>
> **Second, responsive layout complexity.** The desktop grid is asymmetric: the first card spans seven columns, the second spans five and is offset, and the third becomes a full-width feature. We handled that with a twelve-column grid and explicit span classes, while keeping the mobile layout a single column. The lesson was to design the mobile layout first.
>
> **Third, image performance.** The original images were large, and the hero is the LCP element. We compressed the images and added explicit dimensions and lazy loading for non-priority images. The remaining work is next-gen formats, `srcset`, and preloading the hero.
>
> There are also unresolved items: the favicon, the logo label, and an unused prototype composition in `components/showcase` that we consolidated into `SitesExplorer` and will remove. We are listing them rather than hiding them.

### Slide 18 — Conclusions (0:45)

> In conclusion, the web build is a working, measured, static Next.js application. The architecture is **component-first**: atoms, molecules, organisms, page compositions, and a single data source. The delivery model is **JAMstack**: pre-rendered markup, small interactive JavaScript, no runtime server, and CDN-ready output. The performance results are real: accessibility and SEO at 100 on every route, desktop performance at 100, and mobile performance between 85 and 92 with a clear plan for the remaining LCP work.
>
> Module 1 gave us the vocabulary and the criteria: responsive and component architecture, Atomic Design, framework selection, JAMstack, BFF, edge computing, and Core Web Vitals. More importantly, it gave us a way to justify decisions instead of just listing features.

### Slide 19 — Handoff to mobile (0:15)

> That covers the web build and its architecture. My name is `[YOUR FULL NAME]`, and I will hand over to `[MOBILE TEAMMATE FULL NAME]` for the mobile framework and architecture.

---

## If you have two web presenters

Use this split:

| Section | Presenter | Time |
|---|---|---|
| Title, agenda, overview, features, demo | Presenter 1 | 0:00–5:30 |
| Framework, alternatives | Presenter 1 | 5:30–7:30 |
| Web architecture, components, data flow | Presenter 2 | 7:30–11:00 |
| JAMstack, performance techniques, metrics, issues | Presenter 2 | 11:00–15:15 |
| Challenges, conclusions, handoff | Presenter 2 | 15:15–17:00 |

If you are presenting alone, you cover both columns.

---

## Demo safety

- Run `npm run dev` before recording.
- Keep `http://localhost:3000` open in a clean browser window.
- Use 100% zoom.
- Close notifications and unrelated tabs.
- Have screenshots or a screen recording ready as a backup.
- If the demo fails, say: "The live demo is not responding, so I will use the recorded walkthrough we prepared." Then play it. Do not debug in silence for more than ten seconds.

## Handoff line to your teammate

Say it with your full name so the recording clearly identifies you:

> "That covers the web build and its architecture. My name is `[YOUR FULL NAME]`, and I will hand over to `[MOBILE TEAMMATE FULL NAME]` for the mobile framework and architecture."
