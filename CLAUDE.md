# CLAUDE.md

Guidance for Claude Code in this repository.

## Purpose
PWA for the IT-Grundschutz Praktiker preparation course, built with `e-ink-ui-lib`. Reference material (BSI PDFs) is git-ignored for copyright reasons (ADR 0019); `RESSOURCES.md` lists sources and URLs, `npm run verify:citations` fetches them into `resources/`.
Course content is German and must be traceable to a document in `resources/` (ADR 0014); exam rules in ADR 0015.
Every exam pool question needs a `source.quote` that `npm run verify:citations` finds verbatim on the cited page in `resources/.text/` (ADR 0017, 0019). It is a manual check, not part of CI.

## Commands
- `npm run dev` / `npm run build` / `npm run preview`
- `npm test` / `npm run test:watch` / `npm run coverage`; single file: `npx vitest run path/to/file.test.ts`
- `npm run typecheck`, `npm run lint`, `npm run lint:fix`, `npm run format`
- `npm run verify:citations` — download BSI PDFs, extract text, check all `source.quote`s. Needs Ghostscript (`gs`).
- `npm run security` — npm audit + signature check
- `npm run check` — lint + typecheck + tests + build. Run before considering any change done.
Use `npm ci` to install. Node version: `.nvmrc`.

## Architecture
- React + TypeScript (strict) + Vite + vite-plugin-pwa; state with zustand when needed.
- Tunables in `src/config/*.config.ts`, fixed value sets in `src/constants/*.constants.ts`.

## UI rules
- UI comes exclusively from `e-ink-ui-lib`, imported only through `src/ui/index.ts`.
- App CSS is for layout only; use lib tokens (`var(--eink-*)`) where values are needed.
- Lib fonts only. No CSS transitions/animations (e-ink).

## File naming
Suffix states the purpose: `*.view.tsx`, `*.component.tsx`, `*.hook.ts`, `*.store.ts`, `*.selectors.ts`, `*.utils.ts`, `*.constants.ts`, `*.config.ts`, `*.types.ts`, tests `*.test.ts(x)` co-located. Course data: `*.content.ts` (lessons), `*.questions.ts` (exam pool), `*.lab.ts` (labs) in `src/content/` (ADR 0013). Lowercase, dash-separated.

## Documentation
- JSDoc on every exported symbol (purpose, not internals). Comments only when necessary.
- Every architectural or tooling decision gets an ADR in `docs/decisions/NNNN-title.md`.

## Security
- Keep `public/_headers` CSP strict; no third-party origins, no `dangerouslySetInnerHTML`/`eval`.
- Pin exact dependency versions; justify new ones in an ADR. Pin GitHub Actions to SHAs.
- Never commit secrets.

## Git
- Feature branches; `main` deploys to Cloudflare via GitHub Actions.
