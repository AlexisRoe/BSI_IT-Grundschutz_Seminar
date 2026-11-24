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

## Addendum: Trusted Types and service worker registration
The CSP contains `require-trusted-types-for 'script'`. With it, Chrome rejects `navigator.serviceWorker.register("/sw.js")` with a plain string ("This document requires 'TrustedScriptURL' assignment"). The service worker was therefore never installed in production and the installed app needed a connection. `installTrustedTypesPolicy` (`src/hooks/trusted-types.utils.ts`, called from `src/main.tsx`) installs a Trusted Types `default` policy that accepts only `/sw.js`. The CSP stays unchanged.

## Addendum: Manual update check in settings
Settings has a "Nach Update suchen" button. `checkForUpdate` (`src/hooks/pwa-update.utils.ts`) calls `registration.update()` on the existing registration, waits for an installing worker to finish and reports `available`, `current`, `offline`, `unsupported` or `error`. If a version is waiting, the button becomes "Update installieren und neu laden": `activateWaitingUpdate` posts `SKIP_WAITING` and reloads on `controllerchange`. No cache has to be deleted by hand, because Workbox precaching replaces outdated entries (`cleanupOutdatedCaches`) when the new worker activates. Progress lives in localStorage and is untouched.

## Addendum: Workbox runtime inlined into sw.js
The CSP (`require-trusted-types-for 'script'`) also applies to `/sw.js`. The default `generateSW` output loads the Workbox runtime with `importScripts("workbox-….js")`, which Chrome blocks ("This document requires 'TrustedScriptURL' assignment"). The worker script then aborted before registering its handlers: it ignored the `SKIP_WAITING` message, so "Neu laden" did nothing and the update banner never went away, and its precache and fetch handling were missing as well. `workbox.inlineWorkboxRuntime: true` (`vite.config.ts`) bundles the runtime into `sw.js`, so no `importScripts` is needed and the CSP stays unchanged. Verified in headless Chrome with two builds: the update click now activates the new worker, reloads the page and removes the banner, also for updates found more than 60 s after load; the app loads offline from the precache. Installed apps that still run the broken worker receive the fixed one as the waiting version, which handles the message itself.
