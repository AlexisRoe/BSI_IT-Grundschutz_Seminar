import { EXAM_DISTRIBUTION, EXAM_PASS_RATIO, EXAM_QUESTION_COUNT } from "@/config/exam.config";
import type { TopicId } from "@/content/course.types";
import { makeQuestion, seededRng } from "@/test/fixtures.utils";
import { drawExam, evaluateExam, isAnsweredCorrectly, minutesLeft } from "./exam.utils";

const fullPool = Object.entries(EXAM_DISTRIBUTION).flatMap(([topic, count]) =>
  Array.from({ length: count * 3 }, (_, i) =>
    makeQuestion(`t${topic}-${i}`, Number(topic) as TopicId),
  ),
);

describe("Tabelle 2 distribution", () => {
  it("matches the official table, which sums to 49 (one question short of §4)", () => {
    expect(Object.values(EXAM_DISTRIBUTION).reduce((a, b) => a + b, 0)).toBe(
      EXAM_QUESTION_COUNT - 1,
    );
  });
});

describe("isAnsweredCorrectly", () => {
  it("requires exactly the correct options", () => {
    const q = makeQuestion("q", 1, [0, 2]);
    expect(isAnsweredCorrectly(q, [0, 2])).toBe(true);
    expect(isAnsweredCorrectly(q, [2, 0])).toBe(true);
    expect(isAnsweredCorrectly(q, [0])).toBe(false);
    expect(isAnsweredCorrectly(q, [0, 1, 2])).toBe(false);
  });

  it("treats no ticks as correct when no statement is correct", () => {
    const q = makeQuestion("none", 1, []);
    expect(isAnsweredCorrectly(q, [])).toBe(true);
    expect(isAnsweredCorrectly(q)).toBe(true);
    expect(isAnsweredCorrectly(q, [3])).toBe(false);
  });

  it("handles all four correct", () => {
    const q = makeQuestion("all", 1, [0, 1, 2, 3]);
    expect(isAnsweredCorrectly(q, [0, 1, 2, 3])).toBe(true);
    expect(isAnsweredCorrectly(q, [0, 1, 2])).toBe(false);
  });
});

describe("drawExam", () => {
  it("draws per topic according to the distribution", () => {
    const ids = drawExam(fullPool, EXAM_DISTRIBUTION, EXAM_QUESTION_COUNT, new Set(), seededRng(7));
    expect(ids).toHaveLength(50);
    expect(new Set(ids).size).toBe(50);
    expect(ids.filter((id) => id.startsWith("t6-")).length).toBeGreaterThanOrEqual(8);
    expect(ids.filter((id) => id.startsWith("t7-")).length).toBeGreaterThanOrEqual(3);
    expect(ids.filter((id) => id.startsWith("t15-")).length).toBeGreaterThanOrEqual(2);
    const perTopic = (t: number) => ids.filter((id) => id.startsWith(`t${t}-`)).length;
    const surplus = Object.entries(EXAM_DISTRIBUTION).reduce(
      (sum, [t, n]) => sum + perTopic(Number(t)) - n,
      0,
    );
    expect(surplus).toBe(1);
  });

  it("prefers questions not used in earlier exams", () => {
    const first = drawExam(
      fullPool,
      EXAM_DISTRIBUTION,
      EXAM_QUESTION_COUNT,
      new Set(),
      seededRng(1),
    );
    const second = drawExam(
      fullPool,
      EXAM_DISTRIBUTION,
      EXAM_QUESTION_COUNT,
      new Set(first),
      seededRng(2),
    );
    expect(second.filter((id) => first.includes(id))).toHaveLength(0);
  });

  it("falls back to used questions when the pool is exhausted", () => {
    const small = [makeQuestion("a", 1), makeQuestion("b", 1)];
    const ids = drawExam(
      small,
      EXAM_DISTRIBUTION,
      EXAM_QUESTION_COUNT,
      new Set(["a", "b"]),
      seededRng(3),
    );
    expect(ids.sort()).toEqual(["a", "b"]);
  });
});

describe("evaluateExam", () => {
  const questions = Array.from({ length: 50 }, (_, i) =>
    makeQuestion(`q${i}`, ((i % 15) + 1) as TopicId, [0]),
  );

  it("passes with exactly 30 correct answers", () => {
    const answers = Object.fromEntries(questions.slice(0, 30).map((q) => [q.id, [0]]));
    const result = evaluateExam(questions, answers, EXAM_PASS_RATIO);
    expect(result).toMatchObject({ score: 30, total: 50, required: 30, passed: true });
  });

  it("fails with 29 correct answers and counts per topic", () => {
    const answers = Object.fromEntries(questions.slice(0, 29).map((q) => [q.id, [0]]));
    const result = evaluateExam(questions, answers, EXAM_PASS_RATIO);
    expect(result.passed).toBe(false);
    expect(result.byTopic[1]).toEqual({ correct: 2, total: 4 });
  });
});

describe("helpers", () => {
  it("minutesLeft rounds up and never goes negative", () => {
    expect(minutesLeft(60_000 * 10, 0)).toBe(10);
    expect(minutesLeft(60_000 * 10, 1)).toBe(10);
    expect(minutesLeft(0, 5000)).toBe(0);
  });
});
