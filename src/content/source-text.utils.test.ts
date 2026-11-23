import { findQuotePages, normalizeForMatch, parsePages } from "./source-text.utils";

describe("normalizeForMatch", () => {
  it("removes soft hyphens and the line break after them", () => {
    expect(normalizeForMatch("Informations\u00AD\nsicherheit")).toBe("informationssicherheit");
  });

  it("joins words hyphenated at a line break", () => {
    expect(normalizeForMatch("Schutz-\nbedarf")).toBe("schutzbedarf");
  });

  it("joins words split with a spaced hyphen at a line break", () => {
    expect(normalizeForMatch("Situa -\ntion")).toBe("situation");
  });

  it("keeps compound hyphens regardless of spacing and line breaks", () => {
    expect(normalizeForMatch("IT -Systeme und IT-\nGrundschutz")).toBe(
      "it-systemeundit-grundschutz",
    );
  });

  it("ignores missing spaces in the extracted text", () => {
    expect(normalizeForMatch("wiedereingespieltwerden,MUSS")).toBe(
      normalizeForMatch("wieder eingespielt werden, MUSS"),
    );
  });

  it("maps typographic quotes, dashes and bullets", () => {
    expect(normalizeForMatch("„A“ – ‚b’ •\tc")).toBe("\"a\"-'b'c");
  });
});

describe("findQuotePages", () => {
  const pages = parsePages(
    [
      "===== Seite 1 =====",
      "Titel",
      "===== Seite 2 =====",
      "Die Strukturanalyse dient der",
      "===== Seite 3 =====",
      "Vorerhebung von Informationen.",
    ].join("\n"),
  );

  it("parses page markers", () => {
    expect([...pages.keys()]).toEqual([1, 2, 3]);
  });

  it("finds a quote on its page", () => {
    expect(findQuotePages(pages, "Vorerhebung von")).toEqual([3]);
  });

  it("reports a quote crossing a page break on its first page", () => {
    expect(findQuotePages(pages, "dient der Vorerhebung")).toEqual([2]);
  });

  it("returns nothing for unknown or empty quotes", () => {
    expect(findQuotePages(pages, "erfunden")).toEqual([]);
    expect(findQuotePages(pages, "  ")).toEqual([]);
  });
});
