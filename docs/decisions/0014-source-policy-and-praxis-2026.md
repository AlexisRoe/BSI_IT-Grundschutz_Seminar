# 0014. Course content is based only on the BSI documents in `resources/`

Date: 2026-11-23 · Status: accepted (storage amended by ADR 0019: the PDFs are no longer committed)

## Context
The course prepares for the IT-Grundschutz-Praktiker exam. The FAQ to the curriculum names BSI-Standards 200-1 to 200-4, the Kompendium, the Leitfaden Basis-Absicherung and the certification/audit schemes as the exam basis. The repo initially contained only the curriculum, the FAQ, the exam conditions and the Kompendium 2023.

## Decision
- The official PDFs from bsi.bund.de are kept in `resources/` (git-ignored since ADR 0019):
  - BSI-Standards 200-1, 200-2, 200-3, 200-4
  - Zertifizierungsschema v2.2 and Auditierungsschema v2.5 (both 01.02.2026)
  - Hinweise zur Bereitstellung der Referenzdokumente
  - Leitfaden zur Basis-Absicherung
- The guide for IT-Grundschutz-Profile ("Strukturbeschreibung", Version 1.0, 28.09.2018) was found in a second search and added to `resources/`.
- Every lesson block, quiz question, exam question and lab cites a registered source document (`src/content/sources.constants.ts`).
- Real-world developments ("Praxis 2026", e.g. NIS-2 obligations, the new digital IT-Grundschutz) appear only in callouts marked "nicht prüfungsrelevant". Each callout cites a public source and a date. They never feed exam or quiz questions. The FAQ requires this kind of labelling for additional content.
- For authoring, the text of each PDF was extracted into `resources/.text/` with a throwaway tool. Since ADR 0017 that text is used to check citation quotes.

## Consequences
Exam-relevant content can be traced to a BSI document. The PDFs are not part of the app bundle.
