# CLAUDE.md

@AGENTS.md

## Claude Code Notes

This repository uses `AGENTS.md` as the main project instruction file.

Before making changes, read and follow `AGENTS.md`.

## Project Context

This is a premium bilingual executive portfolio website for **Tansel KILIÇ**.

The site should communicate:

* Technology leadership
* AI transformation
* Responsible AI
* Scalable platforms
* Fintech and payment systems
* Cloud architecture
* Security and governance
* Engineering leadership

The design style is a minimalist white executive theme.

## Working Rules

Before editing:

1. Inspect `package.json`
2. Inspect `src/app`
3. Inspect `src/components`
4. Inspect `src/messages`
5. Inspect `src/app/globals.css`

While editing:

* Keep changes small and focused
* Use TypeScript
* Use Server Components by default
* Use Client Components only when necessary
* Keep visible copy in `src/messages/tr.json` and `src/messages/en.json`
* Keep Turkish and English content synchronized
* Preserve the premium minimalist white theme
* Avoid inline styles
* Avoid unsupported personal claims
* Do not scrape private LinkedIn data

## Verification

Run relevant checks when available:

```bash
pnpm lint
pnpm build
```

Use npm or yarn equivalents only if the project uses them.

Do not claim a check passed unless it was actually run.

## Response Format

When summarizing work, include:

* What changed
* Files edited
* TR/EN content status
* Checks run
* Remaining TODOs, if any
