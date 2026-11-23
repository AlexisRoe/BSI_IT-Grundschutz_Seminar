# 0016. Moderate npm audit findings in the PWA build tooling are deferred

Date: 2026-11-23 · Status: accepted

## Context
`npm audit` reports 4 moderate findings, all in the build-time dependency chain `vite-plugin-pwa` → `workbox-build` → `glob` / `minimatch`:
- GHSA-3g3m-2fjr-6pw4 (glob: AbortSignal cancellation bypass)
- GHSA-g3hv-75wg-m249 (minimatch: denial of service via globparts amplification)

The only fix npm offers is `npm audit fix --force`, which downgrades `vite-plugin-pwa` to 1.1.0, a breaking change.

## Decision
The findings are not fixed for now. No downgrade and no `overrides` are applied.
- The affected packages run only during `npm run build`, on globs from our own config. They are not part of the app bundle that users load.
- `npm run security` keeps `--audit-level=high`, so these findings do not fail the check.

## Consequences
The build tooling keeps known moderate vulnerabilities until upstream ships fixed versions. Revisit when `vite-plugin-pwa` or `workbox-build` releases an update, or when a finding is raised to high.
