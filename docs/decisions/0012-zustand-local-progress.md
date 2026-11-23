# 0012. zustand with localStorage for learning progress

Date: 2026-11-23 · Status: accepted

## Context
Progress (lessons, quiz/lab results, answer statistics, exam history) and a running exam must survive reloads and stay on the device. CLAUDE.md names zustand as the state library "when needed".

## Decision
- Add `zustand` 5.1.0 (exact pin). It has no dependencies and its `persist` middleware handles versioning.
- `progress.store.ts` and `exam.store.ts` persist to `localStorage` under versioned keys. Only data is stored, never functions.
- Export/import as a versioned JSON file, validated by hand-written type guards before replacing state (`progress-transfer.utils.ts`). No data ever leaves the device otherwise.

## Consequences
Clearing site data deletes progress unless it was exported. Schema changes need a version bump and a `migrate` step.
