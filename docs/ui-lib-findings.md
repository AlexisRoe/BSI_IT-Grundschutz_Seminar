# e-ink-ui-lib usage review

Checked against `e-ink-ui-lib` **1.3.1** (matches `package-lock.json`). Date: 2026-11-24.

The app uses about 30 lib components, imports them only through `src/ui/index.ts`, and does not fork or re-implement any lib component. The gaps below are either small custom compositions or CSS workarounds.

## 1. Components built from scratch

| Item | What it does | Move to lib? |
|---|---|---|
| Question overview (`.question-grid`, `exam-run.view.tsx`) | Grid of small `Button` / `Button.Outlined`; the filled one marks the current item. | **Partly.** The grid itself is an app-side cleanup: `Grid` already has `minColumnWidth` (auto-fill), so use `<Grid minColumnWidth={72}>` and drop the CSS. A `Pagination`-like navigator with per-item state (answered, flagged) would be a lib feature. |
| `RichText` | Parses `**bold**` into `Highlight`, never into HTML (fits the CSP). | **Maybe.** Safe markdown-subset renderer; only worth moving if other apps need the `**` convention. |
| `QuestionCard` | Multi-select question with reveal state (`Card`, `Checkbox`, `Pill`, `Alert`). | No, domain-specific. |
| `ClassifyTask` / `OrderTask` | Dropdown classification; reorderable list with up/down `Button.IconOutlined`. | `OrderTask` partly: a reorderable `List` with up/down controls (no drag and drop, suits e-ink). `ClassifyTask` no. |
| `ContentBlockView` | Maps content blocks to lib components. | No. |
| `SourceList` | Caption plus `List`. | No. |
| `UpdatePrompt` | `Alert` and `Button` in one row. | **Yes, via an `Alert` action slot** (removes `.app__notice`). |
| `Loading` | Three `Skeleton`s with `role="status"` and `aria-busy`. | **Yes, small:** `Skeleton` group or `count` prop with built-in status role. |

## 2. Lib components that needed workarounds

All in `src/app/app.css` unless noted.

1. **Tables truncate text.** `.eink-table-cell` and header cells use `max-width:0; white-space:nowrap; text-overflow:ellipsis`, and the table uses `table-layout:fixed`. The app overrides this with `.table-wrap` (wrap, `overflow-wrap`, `hyphens`), a `.scroll-x` wrapper div, and `.table-wrap--title-col` (first column 55%).
   Transfer: **yes.** Suggested `Table` props: `wrap` (or `truncate={false}`), `scrollable`, and a column-width option. `Table` currently has only `selectable`, `mono` and `stickyHeader`.
2. **List markers misalign on wrapped items.** `.eink-list__item` uses `align-items:center`. The app forces `flex-start` and offsets the bullet with `margin-top: calc((1lh - var(--eink-size-10)) / 2)`, overriding lib-internal selectors (fragile).
   Transfer: **yes, a bug fix** in the lib's own `List`.
3. **`Checkbox` cannot sit next to a result badge.** `.option-row` wraps `Checkbox` and `Pill` in a flex row.
   Transfer: small. A trailing/suffix slot or a result state (readonly correct/incorrect) on `Checkbox` and `RadioInput`.
4. **`Page` layout.** `html, body, #root { height:100% }` is required for `Page` to fill the screen. `.app__header` (toggle + title row) and `.app__main` (`max-width`) are also app CSS.
   Transfer: **yes.** Full-height reset in the lib, a header row layout, and a `maxWidth` prop on `Page.Body`.
5. **Left-aligned `Button`.** `.lesson-link` sets `justify-content:flex-start; text-align:left`.
   Transfer: small `align="start"` prop.
6. **Layout helpers.** `.stack` duplicates `<Flex column gap="md">` and should simply be replaced (app-side cleanup). `.grow` and `.scroll-x` are generic utilities: `Flex` child grow props and an `overflow`/`ScrollArea` option.
7. **`Alert.description` is a `string`.** `ContentBlockView` strips markup with `replaceAll("**", "")`.
   Transfer: maybe. Accept `ReactNode` so `Highlight` works inside.
8. **`FileUpload` error state.** `importProgress` throws a dummy `Error("invalid export")` so the field shows an error. Works as designed; a visible `error` message prop would be cleaner. Minor.
9. **Inline fonts (ADR 0010).** The lib ships fonts as base64 `data:` URIs inside its CSS (about 3 MB). That forced `plugins/extract-inline-fonts.plugin.ts` to keep `font-src 'self'` and precache the fonts. The lib's `exports` map has only `.` and `./style.css`.
   Transfer: **yes, this is the root cause.** The lib should emit real font files; the plugin can then be deleted (as the ADR already says). Alternative: ship the plugin as a separate lib entry point.

## 3. Project utilities that could be useful in the lib

| Item | Location | Assessment |
|---|---|---|
| `stubMatchMedia` and `renderWithProviders` | `src/test/` | **Yes.** Every consumer testing `ThemeProvider` in jsdom needs them. Ship as `e-ink-ui-lib/testing`. |
| `AppProviders` | `app-providers.component.tsx` | **Yes.** `ThemeProvider` > `NotificationProvider` > `ModalProvider` is boilerplate; offer one combined provider. |
| `extract-inline-fonts.plugin` | `plugins/` | See 2.9. Better to fix at the source. |
| `installTrustedTypesPolicy` | `src/hooks/trusted-types.utils.ts` | Not lib code (service-worker specific). A docs note on using the lib under a strict CSP is worthwhile. |
| `useNow` | `src/hooks/now.hook.ts` | Marginal; the lib already has `useInterval`. |
| `useHashRoute` / `navigate` | `src/hooks/hash-route.hook.ts` | Possible. Tiny dependency-free hash router (`useSyncExternalStore`) that fits `Navigation target="#/…"`. The `scrollToTop` that finds the scrolling parent is really a `Page.Body` concern. |
| `pwa-update.utils`, `usePwaUpdate` | `src/hooks/` | No, or a separate "e-ink PWA kit". Depends on `vite-plugin-pwa`. |
| `shuffle`, `scramble`, `move` | `exam.utils.ts`, `lab.utils.ts` | `move` pairs with a reorderable `List`; the rest is too small. |
| Download-as-file (Blob and `<a download>`) | `settings.view.tsx` | **Yes, small.** `downloadFile` util or `useDownload`, next to `useCopyToClipboard` and `FileUpload`. |
| `parseExport` validators | `progress-transfer.utils.ts` | No, app-specific schema. |
| Test and coverage config | `vite.config.ts` | Docs snippet at most. |

## Recommended priority

1. List marker alignment (bug fix).
2. Table wrapping, scroll and column widths.
3. Emit font files instead of base64 (removes the ADR 0010 plugin).
4. Testing helpers and a combined provider.
5. `Alert` as `ReactNode` plus action slot, and a `Checkbox` result or trailing slot.
6. Small extras: download util, `Page` full-height reset and `maxWidth`, `Skeleton` group, left-aligned `Button`, reorderable `List`, per-item state navigator.

Keep in the app: `QuestionCard`, `ClassifyTask`, `ContentBlockView`, PWA update logic, the Trusted Types policy, the export validators.

## App-side cleanups (no lib change needed)

- Replace `.stack` with `<Flex column gap="md">`.
- Replace `.question-grid` with `<Grid minColumnWidth={72}>`.
