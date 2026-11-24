# 0010. Extract the library's inline fonts at build time

Date: 2026-11-19 · Status: superseded (e-ink-ui-lib 1.4.0)

## Context
`e-ink-ui-lib` up to 1.3.x shipped its fonts as base64 `data:` URIs inside its CSS (3 MB). That would require `font-src data:` in the CSP and exceeds the service worker precache limit.

## Decision
A small Vite build plugin (`plugins/extract-inline-fonts.plugin.ts`) rewrote those URIs to emitted font files under `/assets/fonts/`.

## Consequences
The CSP stayed strict, the CSS shrank to ~94 kB and the fonts were precached.

## Update
Since 1.4.0 the library emits its fonts as real files and references them with relative URLs, so Vite bundles and hashes them itself. The plugin and its test were removed; the CSP (`font-src 'self'`) and the service worker precache are unchanged.
