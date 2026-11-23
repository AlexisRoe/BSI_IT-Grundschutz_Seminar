import type { SourceRef } from "./course.types";

/** A glossary term with its definition and source. */
export interface GlossaryEntry {
  term: string;
  definition: string;
  source: SourceRef;
}

/** Key terms of IT-Grundschutz, alphabetically sorted. */
export const GLOSSARY: readonly GlossaryEntry[] = [];
