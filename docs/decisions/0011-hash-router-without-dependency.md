# 0011. Hash routing without a router library

Date: 2026-11-23 · Status: accepted

## Context
The course needs about a dozen screens, some with one parameter (lesson, lab, exam result). It is a static PWA on Cloudflare with `navigateFallback` to `index.html`.

## Decision
A small hash router (`src/app/routes.constants.ts`, `src/hooks/hash-route.hook.ts`) based on `useSyncExternalStore` and `hashchange`. Routes are a typed union; `parseHash`/`toHash` round-trip and are unit-tested.

## Consequences
No new dependency and no server rewrites needed. Nested layouts, loaders and history state are not available; add a router library via a new ADR if those become necessary.
