/** Curriculum topic number (Themenfeld 1–15 of Curriculum v1.1). */
export type TopicId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

/** Vertiefungsgrad as defined in the curriculum. */
export type DepthLevel = "I" | "II" | "I + II";

/** Identifier of a document registered in `sources.constants.ts`. */
export type SourceDocId =
  | "curriculum"
  | "faq"
  | "pruefung"
  | "kompendium"
  | "200-1"
  | "200-2"
  | "200-3"
  | "200-4"
  | "zert"
  | "audit"
  | "refdoc"
  | "basis"
  | "profil";

/** Pointer into a source document. */
export interface SourceRef {
  doc: SourceDocId;
  /** Chapter, section or Baustein, e.g. "8.2.1" or "DER.2.1 A1". */
  section?: string;
  /** Printed page number in the document. */
  page?: number;
}

/**
 * One block of lesson content. Text fields support `**bold**` markup only;
 * everything is rendered through the UI library, never as HTML.
 */
export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "table"; headers: string[]; rows: string[][]; caption?: string }
  | { type: "definition"; term: string; text: string }
  | { type: "callout"; variant: "merke" | "hinweis"; title: string; text: string }
  | { type: "example"; title: string; text: string | string[] }
  | {
      type: "praxis";
      title: string;
      text: string;
      /** Public, non-exam source of the real-world example. */
      source: { label: string; url: string; date: string };
    };

/** A multiple-choice option. */
export interface QuestionOption {
  text: string;
  correct: boolean;
}

/** Exam-style question: four statements, zero to four of them correct. */
export interface Question {
  id: string;
  topic: TopicId;
  level: "basis" | "experte";
  stem: string;
  options: [QuestionOption, QuestionOption, QuestionOption, QuestionOption];
  /** Why the correct options are correct (shown after answering). */
  explanation: string;
  source: SourceRef;
}

/** A lesson inside a topic. */
export interface Lesson {
  id: string;
  title: string;
  depth: DepthLevel;
  /** Estimated reading and exercise time in minutes. */
  minutes: number;
  goals: string[];
  blocks: ContentBlock[];
  sources: SourceRef[];
  /** Kontrollfragen; never part of the exam pool. */
  quiz: Question[];
}

/** All lessons of one curriculum topic. */
export interface TopicContent {
  topic: TopicId;
  lessons: Lesson[];
}

/** Exam pool questions of one curriculum topic. */
export interface TopicQuestions {
  topic: TopicId;
  questions: Question[];
}

/** Item to be sorted into a category, or placed in a sequence. */
export interface LabItem {
  id: string;
  label: string;
  /** Additional context shown below the label. */
  detail?: string;
}

/** One task inside a lab. */
export type LabTask =
  | {
      kind: "classify";
      id: string;
      prompt: string;
      categories: { id: string; label: string }[];
      items: (LabItem & { answer: string; explanation: string })[];
    }
  | {
      kind: "order";
      id: string;
      prompt: string;
      /** Items in the correct order; shown shuffled. */
      items: LabItem[];
      explanation: string;
    };

/** Interactive exercise based on the fictional lab organisation. */
export interface Lab {
  id: string;
  topic: TopicId;
  title: string;
  /** Scenario description shown before the tasks. */
  scenario: string[];
  tasks: LabTask[];
  sources: SourceRef[];
}
