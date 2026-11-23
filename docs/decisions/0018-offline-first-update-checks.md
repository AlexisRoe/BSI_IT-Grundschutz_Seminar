# 0018. Offline-first PWA with regular update checks

Date: 2026-11-23 · Status: accepted

## Context
The app is used as an installed PWA, often on e-ink devices that stay open for a long time and are often offline. The service worker (vite-plugin-pwa, Workbox `generateSW`) precaches all built files, so the app runs without a connection. However, browsers only look for a new service worker when the app navigates, so an app left open never learned about new versions.

## Decision
- Offline first: every build file is precached (HTML, all JS/CSS chunks including lazily loaded course content, fonts, icons, manifest). Navigation falls back to the cached `index.html`. Nothing is fetched at runtime from other origins (CSP `connect-src 'self'`).
- Update checks: `usePwaUpdate` calls `registration.update()` when the app starts, every `UPDATE_CHECK_INTERVAL_MS` (1 hour, `src/config/app.config.ts`), when the app becomes visible again and when the connection returns. Checks are skipped while offline; failures are ignored, so the cached version keeps working.
- Activation stays user-confirmed (`registerType: "prompt"`): a new version downloads in the background, and the banner "Eine neue Version ist verfügbar" lets the user reload. An automatic reload could interrupt an exam simulation.
- `sw.js` and `index.html` are served with `Cache-Control: no-cache` (`public/_headers`), so update checks always reach the server.

## Consequences
An installed app picks up a new release at the next start or within an hour while online, without losing offline capability. The user decides when to switch to the new version.
