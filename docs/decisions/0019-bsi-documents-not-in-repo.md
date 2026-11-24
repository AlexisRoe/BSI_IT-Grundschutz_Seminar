# 0019. BSI documents are not committed; citation check runs manually

Date: 2026-11-24 · Status: accepted

## Context
ADR 0014 committed the BSI PDFs and ADR 0017 the extracted text to `resources/`. Redistributing them may conflict with copyright, and the text files are derivative copies.

## Decision
- `resources/` is git-ignored and removed from the tree. It holds only local copies and may hold local scripts. `RESSOURCES.md` moves to the repository root; its source URLs stay the single list of where each document comes from.
- `scripts/fetch-resources.sh` downloads the PDFs listed in `RESSOURCES.md` (existing files are kept). `scripts/extract-resource-text.sh` extracts text with Ghostscript (`txtwrite`) and writes the `===== Seite N =====` page markers required by ADR 0017.
- `npm run verify:citations` runs fetch, extract and `src/content/citations.test.ts` with `REQUIRE_SOURCE_TEXT=1`. It is a manual check and not part of `npm run check` or CI.
- `citations.test.ts` still runs the checks that need no BSI text (no Kompendium pages, quote on every pool question). The tests against the extracted text are skipped when `resources/.text/` does not exist; with `REQUIRE_SOURCE_TEXT=1` a missing text fails.

## Consequences
The repository no longer distributes BSI material, but CI no longer proves that quotes are on the cited page; authors must run `npm run verify:citations` after changing citations. It needs network access and Ghostscript. Earlier commits still contain the files; removing them from history would need a rewrite and is not done here. Ghostscript text differs slightly from the earlier committed extraction (CRLF line endings), so the script strips `\r`.
