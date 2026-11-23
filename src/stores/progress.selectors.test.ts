import { assembleCourse } from "@/content/content.utils";
import { makeQuestion } from "@/test/fixtures.utils";
import {
  overallLessonPercent,
  topicAccuracy,
  topicLessonProgress,
  usedExamQuestionIds,
  wrongQuestionIds,
} from "./progress.selectors";
import { emptyProgress } from "./progress.store";

const lesson = (id: string) => ({
  id,
  title: id,
  depth: "I" as const,
  minutes: 1,
  goals: [],
  blocks: [],
  sources: [],
  quiz: [],
});
const course = assembleCourse(
  [{ topic: 1, lessons: [lesson("t01-l01"), lesson("t01-l02")] }],
  [{ topic: 1, questions: [makeQuestion("p1", 1), makeQuestion("p2", 1)] }],
  [],
);

describe("progress selectors", () => {
  it("computes lesson progress", () => {
    const p = { ...emptyProgress(), lessons: { "t01-l01": { completedAt: "x" } } };
    expect(topicLessonProgress(course, p, 1)).toEqual({ done: 1, total: 2 });
    expect(topicLessonProgress(course, p, 2)).toEqual({ done: 0, total: 0 });
    expect(overallLessonPercent(course, p)).toBe(50);
    expect(overallLessonPercent(assembleCourse([], [], []), p)).toBe(0);
  });

  it("computes answer statistics", () => {
    const p = {
      ...emptyProgress(),
      questions: {
        p1: { seen: 2, correct: 1, lastCorrect: false },
        p2: { seen: 2, correct: 2, lastCorrect: true },
      },
    };
    expect(wrongQuestionIds(p)).toEqual(["p1"]);
    expect(topicAccuracy(course, p, 1)).toBe(75);
    expect(topicAccuracy(course, emptyProgress(), 1)).toBeUndefined();
  });

  it("collects used exam questions", () => {
    const p = {
      ...emptyProgress(),
      exams: [{ questionIds: ["p1"] }, { questionIds: ["p2"] }],
    } as never;
    expect([...usedExamQuestionIds(p)].sort()).toEqual(["p1", "p2"]);
  });
});
