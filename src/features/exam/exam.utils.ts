import type { Question, TopicId } from "@/content/course.types";

/** Selected option indexes (0–3) per question id. */
export type Answers = Readonly<Record<string, readonly number[]>>;

/** Random number source in [0, 1); injectable for tests. */
export type Rng = () => number;

/** Indexes of the correct options of a question. */
export function correctIndexes(question: Question): number[] {
  return question.options.flatMap((o, i) => (o.correct ? [i] : []));
}

/**
 * All-or-nothing scoring (§9): correct only if exactly the correct options are
 * ticked. With no correct option, nothing may be ticked.
 */
export function isAnsweredCorrectly(question: Question, selected: readonly number[] = []): boolean {
  const expected = correctIndexes(question);
  const chosen = new Set(selected);
  return chosen.size === expected.length && expected.every((i) => chosen.has(i));
}

/** Fisher–Yates shuffle returning a new array. */
export function shuffle<T>(items: readonly T[], rng: Rng = Math.random): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j] as T, copy[i] as T];
  }
  return copy;
}

/**
 * Draws exam question ids per topic according to `distribution` (Tabelle 2),
 * then fills up to `total` with random further questions: Tabelle 2 only sums
 * to 49 while §4 requires 50 (ADR 0015). Questions not used in earlier exams
 * are preferred, so a retake gets different questions where the pool allows (§9).
 */
export function drawExam(
  pool: readonly Question[],
  distribution: Readonly<Record<TopicId, number>>,
  total: number,
  previouslyUsed: ReadonlySet<string> = new Set(),
  rng: Rng = Math.random,
): string[] {
  const ids: string[] = [];
  for (const [topicKey, count] of Object.entries(distribution)) {
    const topic = Number(topicKey) as TopicId;
    const candidates = pool.filter((q) => q.topic === topic);
    const fresh = shuffle(
      candidates.filter((q) => !previouslyUsed.has(q.id)),
      rng,
    );
    const used = shuffle(
      candidates.filter((q) => previouslyUsed.has(q.id)),
      rng,
    );
    ids.push(...[...fresh, ...used].slice(0, count).map((q) => q.id));
  }
  const chosen = new Set(ids);
  const rest = pool.filter((q) => !chosen.has(q.id));
  const extra = [
    ...shuffle(
      rest.filter((q) => !previouslyUsed.has(q.id)),
      rng,
    ),
    ...shuffle(
      rest.filter((q) => previouslyUsed.has(q.id)),
      rng,
    ),
  ];
  ids.push(...extra.slice(0, Math.max(0, total - ids.length)).map((q) => q.id));
  return ids;
}

/** Points per topic. */
export type TopicScore = Partial<Record<TopicId, { correct: number; total: number }>>;

/** Result of a finished exam. */
export interface ExamEvaluation {
  score: number;
  total: number;
  /** Minimum score to pass (30 of 50). */
  required: number;
  passed: boolean;
  byTopic: TopicScore;
}

/** Scores an exam; `required` is the pass ratio applied to the question count. */
export function evaluateExam(
  questions: readonly Question[],
  answers: Answers,
  passRatio: number,
): ExamEvaluation {
  const byTopic: TopicScore = {};
  let score = 0;
  for (const q of questions) {
    const ok = isAnsweredCorrectly(q, answers[q.id]);
    const entry = byTopic[q.topic] ?? { correct: 0, total: 0 };
    entry.total += 1;
    if (ok) {
      entry.correct += 1;
      score += 1;
    }
    byTopic[q.topic] = entry;
  }
  const required = Math.ceil(questions.length * passRatio);
  return { score, total: questions.length, required, passed: score >= required, byTopic };
}

/** Minutes left until `deadline`, rounded up; never negative. */
export function minutesLeft(deadline: number, now: number): number {
  return Math.max(0, Math.ceil((deadline - now) / 60_000));
}
