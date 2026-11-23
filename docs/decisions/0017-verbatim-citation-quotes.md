# 0017. Citations carry a verbatim quote checked in CI

Date: 2026-11-23 · Status: accepted

## Context
ADR 0014 requires exam-relevant content to trace back to a BSI document. A `SourceRef` only held a document, a section and a page, and nothing checked them. A wrong page or a claim the source doesn't contain stayed unnoticed. The extracted PDF text existed only locally (git-ignored), and the extraction tool wasn't kept.

## Decision
- `SourceRef` gets an optional `quote`: a short verbatim phrase (about 5–20 words, at least 20 normalized characters) from the cited page.
- The extracted text in `resources/.text/*.txt` is committed (about 4 MB). Each physical PDF page starts with a line `===== Seite N =====`. Committing it keeps CI deterministic and avoids a PDF-parsing dependency. If the text is ever regenerated, for example with `gs -sDEVICE=txtwrite`, it must keep this marker format.
- `SourceDocument.pageOffset` maps printed page numbers to physical pages (physical = printed + offset). It is 0 for most documents, −2 for BSI-Standard 200-4 and −1 for the Profil-Strukturbeschreibung. Kompendium page numbers restart in every Baustein, so Kompendium refs cite a section and no page; a test enforces this.
- `src/content/source-text.utils.ts` normalizes the page text and the quote the same way: Unicode NFC, soft hyphens removed, hyphenated line breaks joined, typographic quotes and dashes mapped to ASCII, lower case, and all whitespace removed. Some extracted text (parts of the Kompendium) has lost the spaces between words, so the comparison ignores spacing; the 20-character minimum counts non-space characters.
- `src/content/citations.test.ts` checks every ref that has a quote. With a page, the quote must be on that page, or start there and run onto the next page. Without a page, it must appear somewhere in the document. A failure message gives the page(s) where the quote was actually found, which separates a wrong page from a claim that isn't in the source.
- Every exam pool question must have a quote. Lessons, quizzes and labs may add quotes over time; any quote that is present is always checked.

## Consequences
A wrong page or a claim without a source fails CI. The repository grows by about 4 MB of text, which is not part of the app bundle (biome ignores `resources/`, Vite never imports it). If BSI publishes new versions of a document, the PDF, its text file and the quotes that cite it must be updated together.
