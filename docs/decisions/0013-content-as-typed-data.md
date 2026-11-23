# 0013. Course content as typed TypeScript data

Date: 2026-11-23 · Status: accepted

## Context
The course has about 45 lessons, about 200 exam questions, lesson quizzes and labs. The CSP forbids `dangerouslySetInnerHTML`, and Markdown rendering would need a parser dependency.

## Decision
- Content is typed data (`src/content/course.types.ts`). Lessons are lists of blocks (heading, paragraph, list, table, definition, callout, example, praxis) rendered only through `e-ink-ui-lib` components. Inline emphasis supports `**bold**` only and is rendered as `Highlight`, never as HTML.
- New file suffixes:
  - `*.content.ts`: lessons of a topic (`src/content/topics/`)
  - `*.questions.ts`: exam pool of a topic (`src/content/questions/`)
  - `*.lab.ts`: one lab (`src/content/labs/`)
- Files are collected with `import.meta.glob` and loaded lazily after the shell renders. Workbox precaches them for offline use.
- A content integrity test enforces structure, pool sizes, the Basis/Experte ratio and registered sources.

## Consequences
The TypeScript compiler catches content errors. Authoring is more verbose than Markdown.
