import type { TopicId } from "@/content/course.types";
import { TOPICS } from "@/content/topics.constants";

/** Number of questions in an exam (Prüfungsbedingungen v2.2, §4). */
export const EXAM_QUESTION_COUNT = 50;

/** Exam duration in minutes (§3). */
export const EXAM_DURATION_MIN = 60;

/** Share of correctly answered questions needed to pass (§9). */
export const EXAM_PASS_RATIO = 0.6;

/** How often the remaining exam time refreshes; minutes only, to spare e-ink screens. */
export const EXAM_TIMER_TICK_MS = 15_000;

/** Questions drawn per topic (Tabelle 2; sums to 49, the 50th is drawn at random – ADR 0015). */
export const EXAM_DISTRIBUTION: Readonly<Record<TopicId, number>> = Object.fromEntries(
  TOPICS.map((t) => [t.id, t.examCount]),
) as Record<TopicId, number>;

/** Questions per training round. */
export const TRAINING_ROUND_SIZE = 10;
