import { type Course, loadCourse } from "./content.utils";
import type { ContentBlock, Question } from "./course.types";
import { SOURCES } from "./sources.constants";
import { TOPICS } from "./topics.constants";

let course: Course;

beforeAll(async () => {
  course = await loadCourse();
});

const quizQuestions = () => course.topics.flatMap((t) => t.lessons.flatMap((l) => l.quiz));

function expectValidQuestion(q: Question) {
  expect(q.options).toHaveLength(4);
  expect(q.stem.trim()).not.toBe("");
  expect(q.explanation.trim()).not.toBe("");
  expect(SOURCES[q.source.doc]).toBeDefined();
  for (const o of q.options) expect(o.text.trim()).not.toBe("");
  expect(new Set(q.options.map((o) => o.text)).size).toBe(4);
}

describe("course content integrity", () => {
  it("uses globally unique ids", () => {
    const ids = [
      ...course.topics.flatMap((t) => t.lessons.map((l) => l.id)),
      ...quizQuestions().map((q) => q.id),
      ...course.pool.map((q) => q.id),
      ...course.labs.map((l) => l.id),
    ];
    expect(ids.length).toBe(new Set(ids).size);
  });

  it("keeps lesson quizzes and exam pool separate", () => {
    const poolIds = new Set(course.pool.map((q) => q.id));
    expect(quizQuestions().filter((q) => poolIds.has(q.id))).toEqual([]);
    const poolStems = new Set(course.pool.map((q) => q.stem));
    expect(
      quizQuestions()
        .filter((q) => poolStems.has(q.stem))
        .map((q) => q.id),
    ).toEqual([]);
  });

  it("has well-formed lessons", () => {
    for (const topic of course.topics) {
      for (const lesson of topic.lessons) {
        expect(lesson.id.startsWith(`t${String(topic.topic).padStart(2, "0")}-`)).toBe(true);
        expect(lesson.goals.length).toBeGreaterThan(0);
        expect(lesson.blocks.length).toBeGreaterThan(0);
        expect(lesson.sources.length).toBeGreaterThan(0);
        expect(lesson.quiz.length).toBeGreaterThanOrEqual(3);
        for (const q of lesson.quiz) {
          expect(q.topic).toBe(topic.topic);
          expectValidQuestion(q);
        }
      }
    }
  });

  it("has well-formed exam pool questions in the right topic", () => {
    for (const q of course.pool) {
      expect(q.id.startsWith(`p${String(q.topic).padStart(2, "0")}-`)).toBe(true);
      expectValidQuestion(q);
    }
  });

  it("marks every Praxis 2026 block with a public https source and date", () => {
    const praxis = course.topics
      .flatMap((t) => t.lessons.flatMap((l) => l.blocks))
      .filter((b): b is Extract<ContentBlock, { type: "praxis" }> => b.type === "praxis");
    for (const p of praxis) {
      expect(p.source.url.startsWith("https://")).toBe(true);
      expect(p.source.date.trim()).not.toBe("");
    }
  });

  it("has labs whose classify answers reference existing categories", () => {
    for (const lab of course.labs) {
      expect(TOPICS.some((t) => t.id === lab.topic)).toBe(true);
      expect(lab.tasks.length).toBeGreaterThan(0);
      for (const task of lab.tasks) {
        expect(task.items.length).toBeGreaterThanOrEqual(2);
        expect(new Set(task.items.map((i) => i.id)).size).toBe(task.items.length);
        if (task.kind === "classify") {
          const categories = new Set(task.categories.map((c) => c.id));
          for (const item of task.items) expect(categories.has(item.answer)).toBe(true);
        }
      }
    }
  });

  it("varies the number of correct options in the exam pool", () => {
    const counts = new Set(course.pool.map((q) => q.options.filter((o) => o.correct).length));
    expect(counts.size).toBeGreaterThanOrEqual(3);
  });
});
