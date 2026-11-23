import { PROGRESS_VERSION, type ProgressData } from "@/stores/progress.store";

/** Marker identifying export files of this app. */
export const EXPORT_APP_ID = "it-grundschutz-praktiker";

/** Shape of an exported progress file. */
export interface ProgressExport {
  app: typeof EXPORT_APP_ID;
  version: number;
  exportedAt: string;
  data: ProgressData;
}

/** Wraps progress data in a versioned export envelope. */
export function createExport(data: ProgressData, now = new Date()): ProgressExport {
  return { app: EXPORT_APP_ID, version: PROGRESS_VERSION, exportedAt: now.toISOString(), data };
}

const isRecord = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v);

const isScore = (v: unknown) =>
  isRecord(v) &&
  typeof v.correct === "number" &&
  typeof v.total === "number" &&
  typeof v.at === "string";

const allValues = (v: unknown, check: (x: unknown) => boolean) =>
  isRecord(v) && Object.values(v).every(check);

const isExam = (v: unknown) =>
  isRecord(v) &&
  typeof v.id === "string" &&
  typeof v.score === "number" &&
  typeof v.total === "number" &&
  typeof v.passed === "boolean" &&
  Array.isArray(v.questionIds) &&
  isRecord(v.answers) &&
  isRecord(v.byTopic);

/**
 * Validates an imported file. Returns the progress data, or `null` when the
 * file is not a compatible export of this app.
 */
export function parseExport(raw: unknown): ProgressData | null {
  if (!isRecord(raw) || raw.app !== EXPORT_APP_ID || raw.version !== PROGRESS_VERSION) return null;
  const d = raw.data;
  if (!isRecord(d)) return null;
  const valid =
    allValues(d.lessons, (l) => isRecord(l) && typeof l.completedAt === "string") &&
    allValues(d.quizzes, isScore) &&
    allValues(d.labs, isScore) &&
    allValues(
      d.questions,
      (q) => isRecord(q) && typeof q.seen === "number" && typeof q.correct === "number",
    ) &&
    Array.isArray(d.exams) &&
    d.exams.every(isExam);
  return valid ? (d as unknown as ProgressData) : null;
}
