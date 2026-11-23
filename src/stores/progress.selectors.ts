import type { Course } from "@/content/content.utils";
import type { TopicId } from "@/content/course.types";
import type { ProgressData } from "./progress.store";

/** Completed and total lessons of a topic. */
export function topicLessonProgress(
  course: Course,
  progress: Pick<ProgressData, "lessons">,
  topic: TopicId,
): { done: number; total: number } {
  const lessons = course.topics.find((t) => t.topic === topic)?.lessons ?? [];
  return { done: lessons.filter((l) => progress.lessons[l.id]).length, total: lessons.length };
}

/** Share of completed lessons across the whole course, 0–100. */
export function overallLessonPercent(
  course: Course,
  progress: Pick<ProgressData, "lessons">,
): number {
  const ids = course.topics.flatMap((t) => t.lessons.map((l) => l.id));
  if (ids.length === 0) return 0;
  return Math.round((ids.filter((id) => progress.lessons[id]).length / ids.length) * 100);
}

/** Ids of exam questions used in any previous simulation. */
export function usedExamQuestionIds(progress: Pick<ProgressData, "exams">): Set<string> {
  return new Set(progress.exams.flatMap((e) => e.questionIds));
}

/** Pool questions whose last answer was wrong (for Fehlertraining). */
export function wrongQuestionIds(progress: Pick<ProgressData, "questions">): string[] {
  return Object.entries(progress.questions)
    .filter(([, stat]) => !stat.lastCorrect)
    .map(([id]) => id);
}

/** Correct-answer rate per topic over all answered pool questions, 0–100. */
export function topicAccuracy(
  course: Course,
  progress: Pick<ProgressData, "questions">,
  topic: TopicId,
): number | undefined {
  let seen = 0;
  let correct = 0;
  for (const q of course.pool) {
    const stat = progress.questions[q.id];
    if (q.topic !== topic || !stat) continue;
    seen += stat.seen;
    correct += stat.correct;
  }
  return seen === 0 ? undefined : Math.round((correct / seen) * 100);
}
