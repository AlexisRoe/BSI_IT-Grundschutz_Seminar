import { EXAM_PASS_RATIO } from "@/config/exam.config";
import type { Question } from "@/content/course.types";
import type { ActiveExam } from "@/stores/exam.store";
import type { ExamRecord } from "@/stores/progress.store";
import { evaluateExam } from "./exam.utils";

/** Resolves the questions of an exam in exam order, skipping ids missing from the pool. */
export function examQuestions(
  exam: Pick<ActiveExam, "questionIds">,
  pool: readonly Question[],
): Question[] {
  const byId = new Map(pool.map((q) => [q.id, q]));
  return exam.questionIds.flatMap((id) => {
    const q = byId.get(id);
    return q ? [q] : [];
  });
}

/** Turns a running exam into a scored, storable record. */
export function finishExam(
  exam: ActiveExam,
  pool: readonly Question[],
  now: number,
  timedOut: boolean,
): ExamRecord {
  const questions = examQuestions(exam, pool);
  const result = evaluateExam(questions, exam.answers, EXAM_PASS_RATIO);
  return {
    id: exam.id,
    startedAt: new Date(exam.startedAt).toISOString(),
    finishedAt: new Date(Math.min(now, exam.deadline)).toISOString(),
    questionIds: exam.questionIds,
    answers: exam.answers,
    score: result.score,
    total: result.total,
    passed: result.passed,
    byTopic: result.byTopic,
    timedOut,
  };
}
