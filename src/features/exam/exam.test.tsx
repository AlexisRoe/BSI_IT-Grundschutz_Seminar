import { act, fireEvent, screen } from "@testing-library/react";
import { EXAM_DURATION_MIN, EXAM_QUESTION_COUNT } from "@/config/exam.config";
import { useExamStore } from "@/stores/exam.store";
import { useProgressStore } from "@/stores/progress.store";
import { renderWithProviders } from "@/ui/testing";
import { ExamResultView } from "./exam-result.view";
import { ExamRunView } from "./exam-run.view";
import { ExamStartView } from "./exam-start.view";

describe("exam simulation", () => {
  beforeEach(() => {
    useExamStore.getState().clear();
    useProgressStore.getState().reset();
  });

  it("starts an exam with 50 questions", async () => {
    renderWithProviders(<ExamStartView />);
    fireEvent.click(await screen.findByText("Simulation starten"));
    expect(useExamStore.getState().active?.questionIds).toHaveLength(EXAM_QUESTION_COUNT);
    expect(window.location.hash).toBe("#/pruefung/laufend");
  });

  it("shows an empty state without a running exam", async () => {
    renderWithProviders(<ExamRunView />);
    expect(await screen.findByText("Keine laufende Simulation")).toBeInTheDocument();
  });

  it("navigates, flags, answers and hands in", async () => {
    renderWithProviders(<ExamStartView />);
    fireEvent.click(await screen.findByText("Simulation starten"));
    const view = renderWithProviders(<ExamRunView />);
    expect(await view.findByText(/Frage 1 von 50/)).toBeInTheDocument();
    fireEvent.click(view.getAllByRole("checkbox")[0] as HTMLElement);
    fireEvent.click(view.getByText("Markieren"));
    expect(view.getByText(/Frage 1 von 50 · markiert/)).toBeInTheDocument();
    fireEvent.click(view.getByText("Weiter"));
    expect(view.getByText(/Frage 2 von 50/)).toBeInTheDocument();
    fireEvent.click(view.getByText("Zurück"));
    fireEvent.click(view.getByText("Prüfung abgeben"));
    fireEvent.click(await screen.findByText("Abgeben"));
    expect(useExamStore.getState().active).toBeNull();
    expect(useProgressStore.getState().exams).toHaveLength(1);
  });

  it("hands in automatically when the time is up", async () => {
    useExamStore.getState().start([], Date.now() - (EXAM_DURATION_MIN * 60_000 + 1000));
    renderWithProviders(<ExamStartView />);
    await screen.findByText("Laufende Simulation fortsetzen");
    const ids = (await import("@/content/content.utils")).loadCourse;
    const course = await ids();
    act(() =>
      useExamStore.getState().start(
        course.pool.slice(0, 3).map((q) => q.id),
        0,
      ),
    );
    renderWithProviders(<ExamRunView />);
    await vi.waitFor(() => expect(useProgressStore.getState().exams).toHaveLength(1));
    expect(useProgressStore.getState().exams[0]?.timedOut).toBe(true);
  });

  it("shows the result with per-topic table and review", async () => {
    const { loadCourse } = await import("@/content/content.utils");
    const course = await loadCourse();
    const q = course.pool[0];
    if (!q) throw new Error("pool empty");
    useProgressStore.getState().addExam({
      id: "exam-1",
      startedAt: "2026-11-23T10:00:00.000Z",
      finishedAt: "2026-11-23T11:00:00.000Z",
      questionIds: [q.id],
      answers: {},
      score: 0,
      total: 1,
      passed: false,
      byTopic: { [q.topic]: { correct: 0, total: 1 } },
      timedOut: true,
    });
    renderWithProviders(<ExamResultView examId="exam-1" />);
    expect(await screen.findByText(/Nicht bestanden: 0 von 1/)).toBeInTheDocument();
    expect(screen.getByText(/automatisch abgegeben/)).toBeInTheDocument();
    fireEvent.click(screen.getByText("Alle"));
    expect(screen.getByText(/Frage 1 · Themenfeld/)).toBeInTheDocument();
  });

  it("shows an empty state for unknown results", () => {
    renderWithProviders(<ExamResultView examId="nope" />);
    expect(screen.getByText("Ergebnis nicht gefunden")).toBeInTheDocument();
  });
});
