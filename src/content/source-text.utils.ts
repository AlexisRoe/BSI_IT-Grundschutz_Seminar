const PAGE_MARKER = /^===== Seite (\d+) =====$/m;

/** Splits extracted PDF text into physical pages keyed by page number (ADR 0017). */
export function parsePages(text: string): Map<number, string> {
  const parts = text.split(PAGE_MARKER);
  const pages = new Map<number, string>();
  for (let i = 1; i < parts.length; i += 2) {
    pages.set(Number(parts[i]), normalizeForMatch(parts[i + 1] ?? ""));
  }
  return pages;
}

/**
 * Normalizes text so that a verbatim quote matches despite PDF extraction
 * artifacts (soft hyphens, hyphenated line breaks, typographic quotes, missing
 * or extra spaces). Whitespace is removed entirely, so the result is only for
 * comparison.
 */
export function normalizeForMatch(text: string): string {
  return text
    .normalize("NFC")
    .replace(/\u00AD\s*/g, "")
    .replace(/(\p{L})[ \t]*-[ \t]*\n\s*(?=\p{Ll})/gu, "$1")
    .replace(/[„“”″]/g, '"')
    .replace(/[‚‘’′]/g, "'")
    .replace(/[–—‑]/g, "-")
    .replace(/[•▪●◦]/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();
}

/**
 * Physical pages on which the quote occurs. A quote that crosses a page break
 * is reported on the page where it starts.
 */
export function findQuotePages(pages: Map<number, string>, quote: string): number[] {
  const needle = normalizeForMatch(quote);
  if (needle === "") return [];
  const found: number[] = [];
  for (const [n, body] of pages) {
    const next = pages.get(n + 1);
    const straddles =
      next !== undefined && !next.includes(needle) && `${body}${next}`.includes(needle);
    if (body.includes(needle) || straddles) {
      found.push(n);
    }
  }
  return found;
}
