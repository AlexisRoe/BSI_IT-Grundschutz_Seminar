import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { type Course, loadCourse } from "./content.utils";
import type { SourceDocId, SourceRef } from "./course.types";
import { findQuotePages, normalizeForMatch, parsePages } from "./source-text.utils";
import { SOURCES, textFileOf } from "./sources.constants";

const MIN_QUOTE_LENGTH = 20;

const TEXT_DIR = resolve(process.cwd(), "resources/.text");
const docIds = Object.keys(SOURCES) as SourceDocId[];

let course: Course;
const pagesByDoc = new Map<SourceDocId, Map<number, string>>();

beforeAll(async () => {
  course = await loadCourse();
  for (const id of docIds) {
    pagesByDoc.set(
      id,
      parsePages(readFileSync(resolve(TEXT_DIR, textFileOf(SOURCES[id])), "utf8")),
    );
  }
});

function allRefs(): { owner: string; ref: SourceRef }[] {
  return [
    ...course.topics.flatMap((t) =>
      t.lessons.flatMap((l) => [
        ...l.sources.map((ref) => ({ owner: l.id, ref })),
        ...l.quiz.map((q) => ({ owner: q.id, ref: q.source })),
      ]),
    ),
    ...course.pool.map((q) => ({ owner: q.id, ref: q.source })),
    ...course.labs.flatMap((lab) => lab.sources.map((ref) => ({ owner: lab.id, ref }))),
  ];
}

function quoteProblem(owner: string, ref: SourceRef & { quote: string }): string | undefined {
  const pages = pagesByDoc.get(ref.doc);
  if (!pages) return `${owner} → ${ref.doc}: no extracted text`;
  if (normalizeForMatch(ref.quote).length < MIN_QUOTE_LENGTH) {
    return `${owner} → ${ref.doc}: quote shorter than ${MIN_QUOTE_LENGTH} non-space characters`;
  }
  const found = findQuotePages(pages, ref.quote);
  if (found.length === 0) return `${owner} → ${ref.doc}: quote not in document`;
  if (ref.page === undefined) return undefined;
  const physical = ref.page + SOURCES[ref.doc].pageOffset;
  if (found.includes(physical)) return undefined;
  const printed = found.map((p) => p - SOURCES[ref.doc].pageOffset);
  return `${owner} → ${ref.doc} S. ${ref.page}: quote not on page; found on printed page(s) [${printed.join(", ")}]`;
}

describe("source citations", () => {
  it("has extracted text with page markers for every registered document", () => {
    for (const id of docIds) expect(pagesByDoc.get(id)?.size ?? 0).toBeGreaterThan(0);
  });

  it("finds every quote verbatim on the cited page", () => {
    const problems = allRefs()
      .filter((r): r is { owner: string; ref: SourceRef & { quote: string } } =>
        Boolean(r.ref.quote),
      )
      .map((r) => quoteProblem(r.owner, r.ref))
      .filter((p): p is string => p !== undefined);
    expect(problems).toEqual([]);
  });

  it("does not cite Kompendium pages, which restart in every Baustein", () => {
    const paged = allRefs().filter((r) => r.ref.doc === "kompendium" && r.ref.page !== undefined);
    expect(paged.map((r) => r.owner)).toEqual([]);
  });

  it("requires a quote on every exam pool question", () => {
    expect(course.pool.filter((q) => !q.source.quote).map((q) => q.id)).toEqual([]);
  });
});
