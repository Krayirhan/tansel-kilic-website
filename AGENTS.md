# AGENTS.md

## Project Overview

This project is a premium personal portfolio / executive profile website for **Tansel KILIÇ**, a technology leader focused on AI transformation, scalable platforms, fintech/payment systems, cloud architecture, security, and engineering leadership.

The website must feel like an executive landing page, not a generic résumé template.

Main goals:

* Premium minimalist white theme
* World-class performance
* Strong SEO
* High accessibility
* Fully responsive layout
* Turkish and English support
* Clean, maintainable code

## Tech Stack

Use the existing stack:

* Next.js 16
* React 19
* App Router
* TypeScript
* Tailwind CSS v4
* Framer Motion v12
* Local JSON-based i18n

Use Server Components by default.

Use Client Components only when required for:

* Animations
* Mobile menu state
* Language switcher behavior
* Scroll-based UI
* Browser-only APIs
* Event handlers

## Project Structure

Prefer this structure:

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    sitemap.ts
    robots.ts
  components/
    layout/
    sections/
    ui/
    motion/
  messages/
    tr.json
    en.json
  lib/
  types/
```

Keep components small, readable, and focused.

## Design Direction

The design should feel:

* Premium
* Minimal
* White
* Calm
* Executive
* Trustworthy
* Modern

Use:

* White and off-white backgrounds
* Soft borders
* Subtle shadows
* Rounded cards
* Large readable typography
* Clean spacing
* One restrained accent color
* Light, elegant motion

Avoid:

* Heavy dark UI
* Excessive gradients
* Loud colors
* Generic template feeling
* Too many animations
* Inline styles
* Visual clutter

## Content Rules

Do not invent facts about Tansel KILIÇ.

Never fabricate:

* Company names
* Dates
* Metrics
* Awards
* Certifications
* Education details
* Team sizes
* Revenue numbers
* Case studies
* Testimonials

Use only verified or user-provided information.

If information is missing, use a `TODO` comment or neutral wording.

Preferred tone:

* Executive
* Clear
* Confident
* Concise
* Strategic
* Human

Avoid empty buzzwords and exaggerated AI claims.

## i18n Rules

The site supports Turkish and English.

All user-facing text must come from:

```txt
src/messages/tr.json
src/messages/en.json
```

When adding or changing copy:

1. Update `tr.json`
2. Update `en.json`
3. Keep both meanings aligned
4. Do not hardcode visible text in components

Use clear translation keys.

Good:

```json
{
  "hero": {
    "title": "...",
    "description": "..."
  }
}
```

Bad:

```json
{
  "text1": "...",
  "title2": "..."
}
```

## Recommended Sections

The page should include:

1. Navbar
2. Hero
3. Impact Metrics
4. About
5. Experience
6. Expertise
7. Responsible AI
8. Education
9. Contact
10. Footer

## Section Guidelines

### Hero

The Hero must quickly explain who Tansel KILIÇ is.

Include:

* Executive headline
* Short positioning text
* Email CTA
* LinkedIn CTA
* Availability or location indicator
* Optional metric cards

### About

Use short paragraphs.

Focus on:

* Technology leadership
* AI transformation
* Fintech and payment systems
* Cloud architecture
* Secure scalable platforms
* Engineering leadership

### Experience

Use an impact-oriented timeline.

Each major role may include:

* Role title
* Company
* Date range, only if verified
* Short summary
* Key responsibilities
* Skill tags

Older roles can be shown as a compact list.

Do not add fake metrics.

### Expertise

Use six cards:

* AI Transformation
* Fintech & Payment Systems
* Cloud Architecture
* Security & Governance
* Engineering Leadership
* Digital Transformation

### Responsible AI

Include a dedicated section for responsible AI and AI trust.

Suggested themes:

* Human-in-the-loop systems
* AI governance
* Trust thresholds
* Secure AI workflows
* Production-ready LLM adoption
* Risk-aware automation

Keep this section mature and strategic.

### Contact

Include:

* Email CTA
* LinkedIn CTA
* Availability indicator
* Short professional contact text

Do not rely only on color for availability status.

## Accessibility Rules

Accessibility is mandatory.

Follow these rules:

* Use semantic HTML
* Use correct heading order
* Use visible focus states
* Ensure keyboard navigation
* Add `aria-label` for icon-only buttons
* Use meaningful alt text
* Maintain sufficient color contrast
* Respect `prefers-reduced-motion`
* Avoid hover-only interactions
* Do not rely only on color to show state

Use these elements correctly:

* `header`
* `nav`
* `main`
* `section`
* `article`
* `footer`

## SEO Rules

Implement strong SEO.

Include:

* Metadata API
* Localized title and description
* Open Graph metadata
* Twitter card metadata
* Canonical URL
* Sitemap
* Robots file
* JSON-LD structured data

Recommended JSON-LD types:

* `Person`
* `ProfilePage`

Use `sameAs`, `knowsAbout`, and `alumniOf` only when verified.

Do not add unsupported claims to structured data.

## Performance Rules

Performance is a core requirement.

Follow these rules:

* Prefer Server Components
* Minimize JavaScript
* Avoid unnecessary dependencies
* Use `next/image`
* Avoid layout shift
* Lazy-load heavy non-critical parts
* Keep Framer Motion usage controlled
* Optimize fonts
* Avoid third-party scripts unless approved

Target Lighthouse scores:

* Performance: 95+
* Accessibility: 95+
* Best Practices: 95+
* SEO: 95+

## Tailwind CSS Rules

Use Tailwind CSS v4 utilities.

Rules:

* Use CSS-first design tokens
* Define reusable values in `@theme`
* Avoid inline styles
* Avoid random arbitrary values
* Keep class names readable
* Reuse UI primitives
* Keep spacing, colors, shadows, and radius consistent

## Animation Rules

Use Framer Motion only for subtle premium motion.

Good:

* Fade in
* Small vertical movement
* Gentle card hover
* Mobile menu transitions
* Section reveal

Avoid:

* Heavy parallax
* Constant motion
* Bouncing effects
* Scroll-jacking
* Distracting animations

Always respect reduced motion preferences.

## Code Style

Use:

* TypeScript
* Clear component names
* Explicit prop types
* Small components
* Reusable UI primitives
* Server Components by default

Avoid:

* Over-engineering
* Duplicated JSX
* Duplicated long class strings
* Hardcoded visible copy
* Unnecessary Client Components

## Commands

Use the package manager from the lockfile.

For pnpm:

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
```

For npm:

```bash
npm install
npm run dev
npm run lint
npm run build
```

For yarn:

```bash
yarn install
yarn dev
yarn lint
yarn build
```

Do not claim checks passed unless they were actually run.

## Agent Workflow

Before editing:

1. Read `package.json`
2. Inspect `src/app`
3. Inspect `src/components`
4. Inspect `src/messages`
5. Inspect `src/app/globals.css`

While editing:

1. Keep changes small
2. Preserve the white minimalist theme
3. Keep TR/EN content synchronized
4. Use Server Components by default
5. Maintain accessibility
6. Maintain SEO
7. Run relevant checks when possible

## Do Not

Do not:

* Invent personal facts
* Add fake metrics
* Add fake testimonials
* Add unsupported dates
* Add unnecessary dependencies
* Add analytics without approval
* Scrape private LinkedIn data
* Break i18n
* Overuse animations
* Use inline styles for normal UI
* Convert everything to Client Components

## Definition of Done

A task is complete when:

* The requested change works
* Code is clean and maintainable
* UI remains premium and minimal
* Mobile and desktop layouts work
* TR/EN content is synchronized
* Accessibility is preserved
* SEO is preserved or improved
* Relevant checks were run or clearly noted
