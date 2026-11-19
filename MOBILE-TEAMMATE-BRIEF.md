# Mobile Teammate Brief — Pangasinan Heritage Digital Platform

**For:** the group member presenting the mobile framework and mobile architecture.
**Group total:** ~6:30 for this section inside a 25-minute presentation.
**Related files:** `PRESENTATION-GUIDE.md` (web section), `SPEAKER-SCRIPT.md` (web script).

> The current repository contains the web build only. If the mobile app is not finished, present the architecture honestly as **in progress**. Do not claim a running app, fabricated screenshots, or measured mobile performance. The instructions prohibit presenting unimplemented features as completed.

---

## 1. Why this section matters

The rubric gives **20%** to "Mobile Framework and Architecture" — the same weight as the entire web architecture section. It explicitly asks for:

- the selected mobile framework and why;
- cross-platform compatibility and development efficiency;
- advantages and limitations;
- how the mobile app communicates with the backend;
- the overall mobile architecture;
- folder structure and organization;
- reusable components, screens, and shared services;
- actual code examples demonstrating component reusability;
- state management, navigation, and API integration;
- platform-specific considerations for Android and iOS.

Use those bullets as your slide checklist.

---

## 2. Recommended timing (6:30)

| Time | Slide | Topic |
|---|---|---|
| 0:00–0:20 | 20 | Introduce yourself by full name; state the mobile scope |
| 0:20–2:20 | 21 | Mobile framework selection and justification |
| 2:20–4:20 | 22 | Mobile architecture: folder structure, components, state, navigation, API |
| 4:20–5:00 | 23 | Code reuse example and platform considerations |
| 5:00–5:45 | 24 | Current progress / demo (or honest status) |
| 5:45–6:30 | 25 | Mobile challenges, next steps, hand back / thank you |

---

## 3. Slide content and speaking notes

### Slide 20 — Mobile section opener

> My name is `[FULL NAME]`, and I will cover the mobile framework and architecture.

State the scope in one sentence: "The mobile companion is a React Native application that reuses the same heritage data contract as the web build."

### Slide 21 — Mobile framework selection

**On screen:** React Native · Expo · TypeScript. Four reasons; three limitations.

**Four reasons**
1. **Development efficiency:** the team already works in React and TypeScript, so the mental model, data types, and business logic carry over.
2. **Cross-platform reach:** one codebase targets Android and iOS, which matters for a small team.
3. **Ecosystem:** Expo Router or React Navigation, AsyncStorage, Expo build and update tooling.
4. **Web handoff:** the `HeritageSite` contract and component decomposition carry over.

**Three limitations**
- React Native is not a browser: no DOM, CSS, or hover; layout uses Flexbox and native components.
- Some libraries need native configuration; test on both platforms.
- Expo simplifies the workflow but adds a layer when custom native code is required.

**Say:** "Flutter is also a valid choice. We chose React Native because it matches the team's existing React/TypeScript skills and lets us share the data contract with the web build. The decision is contextual, not a claim that one framework is universally better."

### Slide 22 — Mobile architecture

**On screen:** folder tree + screen flow + state/navigation/API notes.

```
mobile/
  app/                    # screens/routes: Home, Sites, Detail
  components/             # HeritageCard, SearchBar, CategoryChips, Screen
  data/heritage.ts        # HeritageSite type + seed records
  hooks/useHeritageSearch.ts
  navigation/             # native stack
  services/api.ts         # fetch wrapper: base URL, timeout, retry, errors
  theme/                  # color, spacing, type tokens
```

**Screens**
- **Home:** featured record and entry point to the collection.
- **Sites:** `FlatList` of records, search input, category chips, result count.
- **Detail:** receives `site.id` as a route parameter, looks up the record, shows image, category, location, description.

**State management**
- Local `useState` for search text, selected category, and selected site.
- `useMemo` for the derived filtered list.
- A shared Context or Zustand store only when favorites, authentication, or offline sync arrive.

**Navigation**
- Native stack: Home → Sites → Detail.
- Pass the `id`, not the whole object, so the route stays serializable.

**API integration**
- One `services/api.ts` module; screens never call `fetch` directly.
- Owns base URL, headers, timeout, retry, and error mapping.
- Cache the last successful response in AsyncStorage for low connectivity; show a stale-data notice instead of an empty screen.
- Phase 1 can use bundled seed data or a static JSON endpoint.
- Phase 2 uses a **Mobile BFF** for tailored payloads, authentication, and aggregation.

### Slide 23 — Code reuse and platform considerations

**On screen:** two short snippets side by side.

Web:
```tsx
<HeritageCard site={site} onViewMore={() => select(site)} />
```

Mobile:
```tsx
<HeritageCard site={site} onPress={() => navigation.navigate("Detail", { id: site.id })} />
```

**Say:** "On the web, `HeritageCard` is an `article` with an image and a button. On mobile, it is a `Pressable` with an image, two text blocks, and an accessible label. The props are the same: `site` and the action callback. We share the contract, not the renderer."

**Platform-specific considerations**
- `SafeAreaView` for notches and home indicators.
- `Platform.select` for Android/iOS differences.
- Android hardware back button.
- iOS scroll momentum.
- `accessibilityLabel` and `accessibilityRole` on interactive elements.
- `useWindowDimensions` instead of CSS media queries.
- Touch targets at least 44×44 points.

### Slide 24 — Current progress

**If the app runs:** demo Home → Sites → search → Detail. Show the actual app in Expo Go or an emulator.

**If it does not run:**
> The screen map, component contracts, data contract, and API boundary are defined. The Expo implementation is in progress. We are not presenting it as finished. The next milestone is a runnable build with the three screens, local search, and the detail route.

Do not show mockups as if they are screenshots of a running app. Label them "planned UI."

### Slide 25 — Mobile challenges and next steps

**Challenges to mention**
1. Matching web behavior without DOM/CSS: Flexbox, native primitives, no hover.
2. Sharing the data contract without sharing UI code: types and pure logic only.
3. Low connectivity: cache last response, show stale-data state.
4. Cross-platform testing: Android and iOS behave differently for back navigation, safe areas, and scrolling.

**Next steps**
- Finish the three-screen Expo MVP.
- Add local search and the detail route.
- Add AsyncStorage caching.
- Add accessibility labels and test with a screen reader.
- Connect to the API/BFF when authentication is introduced.

---

## 4. Q&A for the mobile section

**1. Why React Native instead of Flutter?**
The team already uses React and TypeScript, so the skill transfer is direct, and the data contract can be shared with the web build. Flutter offers strong custom-UI consistency but requires Dart and a separate skill set. Both are valid; the choice is contextual.

**2. Is React Native truly cross-platform?**
The business logic and most UI are shared, but platform differences still exist: safe areas, back navigation, permissions, and some native modules. We plan to test on both Android and iOS and use `Platform.select` where behavior differs.

**3. How does the mobile app talk to the backend?**
Over HTTPS using JSON. Screens call a single `services/api.ts` module, which owns the base URL, headers, timeout, retries, and error mapping. Phase 1 can read bundled/static data; Phase 2 uses a Mobile BFF for tailored payloads and auth.

**4. What is a BFF?**
Backend for Frontend: a backend dedicated to one client. The mobile BFF returns only the fields the mobile screens need, centralizes authentication, and aggregates other services.

**5. How is state managed?**
Local `useState` and `useMemo` for search, filter, and selection. We add Context or Zustand only when favorites, authentication, or offline sync arrive. We do not add a global store before it is needed.

**6. How is navigation handled?**
A native stack: Home → Sites → Detail. The route carries the site `id`, not the whole object, so it stays serializable and the Detail screen looks up the record.

**7. How do you share code with the web?**
We share the `HeritageSite` type, the seed data, and pure logic such as filtering. We do not share DOM components; the presentation layer is platform-specific. Share the contract and business rules, not the renderer.

**8. What about offline use?**
Cache the last successful response in AsyncStorage and show a stale-data notice. Full offline-first sync is future work and would need conflict handling.

**9. What is still missing?**
A runnable MVP, authentication, offline sync, push notifications, and store deployment. Be specific and honest.

**10. What would you do next?**
Finish the three-screen MVP, add caching and accessibility, then connect the API/BFF and test on both platforms.

---

## 5. Handoff and participation

- Say your full name at the start of the section.
- Keep your camera on and your face visible.
- Do not read the slides word-for-word.
- End with: "That covers the mobile architecture. On behalf of Group `[NUMBER]`, thank you — we are ready for questions."
- Coordinate the handoff line with the web presenter so the recording has a clean transition.

---

## 6. Honesty checklist

- [ ] I do not claim a running app if it does not run.
- [ ] I label mockups as planned UI, not screenshots.
- [ ] I do not invent mobile Lighthouse scores or crash-free rates.
- [ ] I state clearly what is implemented, in progress, and planned.
- [ ] I can explain the folder structure and one reusable component without reading.
- [ ] I can explain how the app will communicate with the backend.
