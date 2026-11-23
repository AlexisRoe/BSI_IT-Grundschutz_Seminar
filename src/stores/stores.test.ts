import { EXAM_DURATION_MIN } from "@/config/exam.config";
import { EXAM_STORAGE_KEY, useExamStore } from "./exam.store";
import { emptyProgress, PROGRESS_STORAGE_KEY, useProgressStore } from "./progress.store";

describe("progress store", () => {
  beforeEach(() => useProgressStore.getState().reset());

  it("records lessons, quizzes and answers and persists them", () => {
    const s = useProgressStore.getState();
    s.completeLesson("l1");
    s.completeLesson("l1");
    s.recordQuiz("l1", 2, 3);
    s.recordAnswer("q1", false);
    s.recordAnswer("q1", true);
    const state = useProgressStore.getState();
    expect(Object.keys(state.lessons)).toEqual(["l1"]);
    expect(state.quizzes.l1).toMatchObject({ correct: 2, total: 3 });
    expect(state.questions.q1).toEqual({ seen: 2, correct: 1, lastCorrect: true });
    const stored = JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY) ?? "{}");
    expect(stored.state.lessons.l1).toBeDefined();
    expect(stored.state.completeLesson).toBeUndefined();
  });

  it("replaces and resets all data", () => {
    useProgressStore
      .getState()
      .replaceAll({ ...emptyProgress(), labs: { x: { correct: 1, total: 1, at: "t" } } });
    expect(useProgressStore.getState().labs.x).toBeDefined();
    useProgressStore.getState().reset();
    expect(useProgressStore.getState().labs).toEqual({});
  });
});

describe("exam store", () => {
  beforeEach(() => useExamStore.getState().clear());

  it("starts an exam with a wall-clock deadline", () => {
    useExamStore.getState().start(["a", "b"], 1000);
    const active = useExamStore.getState().active;
    expect(active?.deadline).toBe(1000 + EXAM_DURATION_MIN * 60_000);
    expect(localStorage.getItem(EXAM_STORAGE_KEY)).toContain('"a"');
  });

  it("toggles options and flags and clamps navigation", () => {
    const s = useExamStore.getState();
    s.start(["a", "b"], 0);
    s.toggleOption("a", 2);
    s.toggleOption("a", 0);
    s.toggleOption("a", 2);
    s.toggleFlag("b");
    s.goTo(5);
    const active = useExamStore.getState().active;
    expect(active?.answers.a).toEqual([0]);
    expect(active?.flagged).toEqual(["b"]);
    expect(active?.current).toBe(1);
    s.toggleFlag("b");
    expect(useExamStore.getState().active?.flagged).toEqual([]);
  });

  it("ignores actions without an active exam", () => {
    const s = useExamStore.getState();
    s.toggleOption("a", 1);
    s.toggleFlag("a");
    s.goTo(1);
    expect(useExamStore.getState().active).toBeNull();
  });
});
