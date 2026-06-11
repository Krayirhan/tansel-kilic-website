# AGENTS.md — Tansel KILIÇ Portfolio

## Stack

| Tool | Version |
|------|---------|
| Next.js | 16 (App Router) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 (CSS-first, `@theme` tokens) |
| Framer Motion | 12 |
| Package manager | pnpm |
| i18n | Custom `LangContext` — no external library |

---

## Project Structure

```
src/
  app/
    layout.tsx       — metadata, Inter font, LangProvider
    page.tsx         — "use client" (LangContext dependency); assembles sections
    globals.css      — Tailwind v4 base + @theme design tokens
  components/
    Navbar.tsx
    Footer.tsx
    sections/        — one file per page section
    ui/              — reusable primitives (Tag, etc.)
  context/
    LangContext.tsx  — TR/EN toggle, client-side only
  lib/
    data.ts          — experience timeline (TS, not JSON — has _en/_tr fields)
    i18n.ts
  messages/
    tr.json          — all visible copy except experience entries
    en.json
```

---

## Known Issues (do not silently ignore)

Line numbers are approximate — verify by reading the file before acting on them.

| Issue | Location | Impact |
|-------|----------|--------|
| `lang="tr"` SSR-only | `layout.tsx` | **Accepted** — default locale IS Turkish; useEffect updates to "en" on client switch. Static export can't do better without separate /tr /en URLs. |
| LinkedIn/email URLs hardcoded | `Hero.tsx` ~L80,85 | Should be in messages or a config constant |
| `lucide-react "^1.17.0"` | `package.json` | Resolves correctly — verified via pnpm install |

**Fixed issues (no longer tracked):**
- `page.tsx` "use client" → fixed via `PageSections` wrapper (Sprint-04)
- JSON-LD missing → added Person + ProfilePage + sameAs (Sprint-01, Sprint-06)
- `sitemap.ts` / `robots.ts` missing → added (Sprint-01)
- OG image missing → `public/og-image.png` + metadata (Sprint-01)

**`page.tsx` "use client" — why it exists and how to fix it:**
`LangContext` is a React Context, which requires a client boundary. Because `page.tsx` consumes `LangProvider`'s children, it must be a Client Component. To fix this without a full i18n rewrite: move section imports into a separate `<PageSections />` Client Component wrapper and keep `page.tsx` as a Server Component that only renders `<PageSections />`. This way only the wrapper is a Client Component, not the route itself. Do not attempt this fix without user approval — it is a structural refactor.

---

## Sections

| Section | Status |
|---------|--------|
| Navbar | Done |
| Hero | Done |
| Impact Metrics | **TODO — do not build without user-provided numbers** |
| About | Done |
| Experience | Done |
| Expertise | Done |
| Responsible AI | **TODO — do not build without user-provided content** |
| Education | Done |
| Contact | Done |
| Footer | Done |

**Impact Metrics:** Needs verified numbers (years of experience, engineers managed, companies). Do not invent or estimate. Ask the user before building.

**Responsible AI:** Needs user-approved themes and copy. Suggested topics exist in the original brief but must be confirmed before use. This section must not read like marketing — keep it strategic and specific.

---

## Content Rules

Use only verified or user-provided information. Mark gaps with `// TODO` in code or neutral placeholder copy in messages.

**Tone:** executive, confident, concise. No buzzwords, no inflated AI claims.

---

## i18n Rules

- All visible copy → `tr.json` + `en.json` (both, always)
- **Exception:** experience entries live in `src/lib/data.ts` with `_en`/`_tr` suffixed fields (see data structure below)
- Never hardcode visible text in components — not copy, not labels, not display URLs
- Keys must be semantic: `hero.title`, not `text1`
- TR and EN must stay meaning-aligned on every change

---

## `data.ts` Experience Entry Structure

Each entry in `src/lib/data.ts` uses this shape. Follow it exactly when adding or editing entries:

```ts
{
  date_en: string;      // required
  date_tr: string;      // required
  role_en: string;      // required
  role_tr?: string;     // optional — falls back to role_en if omitted
  company: string;      // required — not localized
  desc_en: string;      // required
  desc_tr: string;      // required
  tags: string[];       // required — English tags
  tags_tr: string[];    // required — Turkish tags
  current?: boolean;    // optional — marks active role with filled dot
}
```

The first `FULL_COUNT` (currently **6**) entries render as full timeline cards with description and tags. Entries beyond that render as a compact list (role + company + date only). To change the cutoff, edit `FULL_COUNT` in `Experience.tsx` — this is a deliberate design decision, not a bug. Do not change it without user approval.

---

## LangContext Usage

Always import `useLang` from `@/context/LangContext`. Use the minimum needed:

```ts
// Only need copy (most sections):
const { t } = useLang();

// Need copy + locale (when rendering data.ts fields like role_tr / desc_tr):
const { locale, t } = useLang();
const isTr = locale === "tr";
```

Do not destructure `setLocale` unless the component changes language (only Navbar does this).

---

## Mounted Pattern (required in all Client Components)

All Client Components that read `useLang()` or browser APIs must use this hydration guard to prevent SSR/client mismatch:

```ts
const [mounted, setMounted] = useState(false);
useEffect(() => { setMounted(true); }, []);

if (!mounted) {
  // Return a static skeleton with matching height to prevent layout shift
  return <section id="..." className="py-20 bg-white min-h-[400px]" />;
}
```

The skeleton must have the same `id`, background color, and approximate height as the real section.

---

## Adding a New Section

1. Create `src/components/sections/NewSection.tsx`
2. Import and add it to `<main>` in `src/app/page.tsx` in the correct order
3. Add copy keys to both `tr.json` and `en.json`
4. If it needs a nav link, add it to the `links` array in `Navbar.tsx`
5. Use `"use client"` + mounted pattern if the section uses `useLang()` or animations

Before starting, read: `page.tsx`, `tr.json`, `en.json`, and the adjacent section files to match the background alternation pattern.

---

## Design Rules

White minimalist executive theme. Use design tokens — no arbitrary color or shadow values.

**Section background alternation** — sections alternate between `bg-white` and `bg-slate-50` to create visual rhythm. Current pattern:

| Section | Background |
|---------|-----------|
| Hero | `bg-gradient-to-b from-slate-50/50 via-white to-white` |
| About | `bg-slate-50` + `border-y border-slate-200/80` |
| Experience | `bg-white` |
| Expertise | `bg-slate-50` + `border-y border-slate-200/80` |
| Education | `bg-white` + `border-b border-slate-200/80` |
| Contact | `bg-slate-50` + `border-t border-slate-200/80` |

New sections must follow this alternating pattern. Use `bg-slate-50` with `border-y border-slate-200/80` for "off-white" sections, `bg-white` for "white" sections.

**Cards inside sections** always use `bg-white` regardless of the section background — this creates the lifted-card effect on `bg-slate-50` sections.

Avoid dark UI, heavy gradients, loud colors, visual clutter, generic template patterns.

---

## Design Tokens

Defined in `src/app/globals.css`. Use these — do not use arbitrary color or shadow values:

| Token | Tailwind equivalent | Value | Use |
|-------|-------------------|-------|-----|
| `--color-accent` | `text-blue-600` / `bg-blue-600` | `#2563eb` | Primary buttons, links, highlights |
| `--color-accent-hover` | `text-blue-700` / `bg-blue-700` | `#1d4ed8` | Hover state for accent elements |
| `--color-surface-bg` | `bg-slate-50` | `#f8fafc` | Off-white section backgrounds (CSS var only — use `bg-slate-50` in JSX) |
| `--color-muted-text` | `text-slate-500` | `#64748b` | Secondary text, labels |
| `--color-main-text` | `text-slate-900` | `#0f172a` | Primary body text, headings |
| `--shadow-premium` | `shadow-premium` ¹ | soft 4-layer | Card resting shadow |
| `--shadow-premium-hover` | `shadow-premium-hover` ¹ | elevated | Card hover shadow |

¹ These are custom `@utility` classes defined in `globals.css`, not standard Tailwind utilities. They work as `className="shadow-premium"` in JSX but will not appear in Tailwind docs or autocomplete. If they don't work, check that `globals.css` is imported in `layout.tsx`.

Reuse custom `@utility` classes defined in `globals.css` ¹:
- `card-premium` — white card with border, radius, and resting shadow
- `card-premium-hover` — adds lift + shadow on hover
- `text-gradient` — blue-to-violet gradient text effect

---

## Code Rules

- Server Components by default
- Client Components only for: animations, menu state, lang switch, scroll behavior, event handlers
- Explicit TypeScript prop types on every component
- No hardcoded visible copy in JSX

**`ui/` primitives — when to extract:**
Extract a pattern to `src/components/ui/` when the same JSX structure appears in 2+ sections with only prop differences. Current primitives:

- `Tag` — skill tag pill (white bg, slate border, rounded-full). Use this for any standalone tag that is not inside the Experience color palette context. Do not recreate tag styles inline.

If you need a variant (e.g. colored tag), add a `variant` prop to `Tag` rather than writing a new component or inlining styles.

**When NOT to extract:** one-off layouts, section-specific structures, anything that would need 4+ props to cover its only two use cases.

---

## Experience Color Palette

`Experience.tsx` uses a 6-color `PALETTE` array cycled by index. Do not modify the palette order — it affects all rendered cards. Each color has `dot`, `tagBg`, `tagText`, `tagBorder` fields used for the timeline dot and skill tags. These inline styles are intentional — the palette cannot be expressed with static Tailwind classes.

---

## Animation Rules

Framer Motion for subtle motion only: fade-in, small Y reveal, gentle card hover, menu transitions.

**`willChange` inline style** is acceptable only on Framer Motion wrappers:
```tsx
style={{ willChange: "transform, opacity" }}
```
Do not use `willChange` on static elements. All other inline styles are prohibited.

**Standard `viewport` config for scroll-triggered animations** — use this consistently across all sections:
```tsx
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
```
`once: true` prevents re-triggering on scroll up. `margin: "-100px"` triggers the animation slightly before the element enters the viewport. Do not omit `margin` — without it animations fire too late on fast scrolls.

For staggered children (e.g. card grids), add `delay: index * 0.05` to `transition`. Cap the delay at `0.3s` total — more than ~6 items should not stagger.

**`prefers-reduced-motion` guard** — required in any `"use client"` component with non-trivial animation (anything with `y` movement, scale, or delay chains). Use Framer Motion's `useReducedMotion()` hook — this hook requires `"use client"`, do not call it in Server Components.

`"use client"` must be the very first line of the file, before any imports. Pattern:

```tsx
"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function MySection() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: prefersReduced ? 0 : 0.5 }}
    />
  );
}
```

Simple `opacity`-only fade-in does not require this guard. No parallax, bounce, scroll-jacking, or constant motion.

---

## Accessibility Rules

- Semantic HTML: `header`, `nav`, `main`, `section`, `article`, `footer`
- Single `h1` per page (`Hero` owns it); all other sections use `h2`
- Visible focus states — do not remove `outline` without a visible replacement
- `aria-label` on every icon-only interactive element
- Meaningful `alt` text on images — never empty `alt=""` on informative images
- Never rely on color alone to convey state

**Project-specific patterns:**

Lang switcher in Navbar — two `<button>` elements inside a `<div>`. If refactored, use `role="group"` + `aria-label="Language"` on the wrapper. Each button's `aria-label` must read `"Switch language to EN"` / `"Switch language to TR"`, not just `"EN"` / `"TR"`.

Mobile menu toggle — already has `aria-label="Menüyü Aç/Kapat"` and `aria-expanded`. Keep both when editing. The drawer must be reachable by keyboard (Tab from the trigger).

Section labels (e.g. `"Kariyer"`, `"Uzmanlık"`) rendered as `<span>` above each `h2` are decorative — they do not need `aria` roles. Do not add `aria-hidden` either; they are visible text.

---

## SEO Rules

**Current state:** `layout.tsx` has static English-only metadata. No TR locale, no JSON-LD, no sitemap.

**Target state and how to get there:**

Localized metadata — use `generateMetadata` in `layout.tsx` (or per-page) and read locale from a cookie or search param once LangContext is RSC-compatible. Until then, keep English metadata and note the gap. Do not hardcode Turkish metadata alongside English — it produces mixed-language OG tags.

`alternates.languages` — add only when the site has separate TR/EN URLs (e.g. `/tr`, `/en`). Currently it is a single-URL SPA with client-side lang switch, so `alternates.languages` is not applicable yet.

JSON-LD — add a `<script type="application/ld+json">` in `layout.tsx` with `Person` + `ProfilePage` types. Use only verified fields. Do not add `alumniOf`, `sameAs`, or `knowsAbout` without user confirmation.

Sitemap + robots.txt — create `src/app/sitemap.ts` and `src/app/robots.ts` using Next.js conventions. Single URL for now.

OG image — add `opengraph-image.png` to `src/app/` (Next.js picks it up automatically) or use `generateImageMetadata`.

---

## Workflow

**Standard edit:**
1. Read `package.json` and the exact files you will touch
2. Make the change; sync TR/EN on every copy change
3. Run `pnpm lint`
4. Run `pnpm build` when: new component, new import, metadata change, route change, structural refactor — skip for copy-only changes in `tr.json` / `en.json`
5. Never claim a check passed without running it

**Adding a new section** — follow the steps in the "Adding a New Section" section above, then run `pnpm lint` + `pnpm build`.

**After every task, report:**
- What changed and which files were edited
- TR/EN sync status
- Checks run (or why skipped)
- Open TODOs if any

---

## Hard Rules

- Tasarım dili kesinlikle korunacak ( established white minimalist executive style, design tokens, and spacing parameters must be strictly preserved; no arbitrary theme, layout, or font deviations).
- Never invent personal facts, metrics, or dates
- Never add analytics without approval
- Never scrape LinkedIn
- Never add a dependency without checking if the existing stack covers it
- Never convert a Server Component to Client Component without a concrete reason

---

## Definition of Done

- Change works as requested
- TR/EN synchronized
- No new a11y or SEO regressions
- `pnpm lint` passes (or failure explicitly noted)
- Layout verified at mobile (375px), tablet (768px), desktop (1280px) — use browser devtools or `pnpm dev` + resize; do not claim responsive without checking
