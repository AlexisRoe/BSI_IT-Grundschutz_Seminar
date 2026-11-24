import { fireEvent, screen } from "@testing-library/react";
import { useExamStore } from "@/stores/exam.store";
import { type ExamRecord, useProgressStore } from "@/stores/progress.store";
import { renderWithProviders } from "@/ui/testing";
import { DashboardView } from "./dashboard.view";
import { ProgressView } from "./progress.view";
import { createExport } from "./progress-transfer.utils";
import { SettingsView } from "./settings.view";

const exam = (id: string, score: number): ExamRecord => ({
  id,
  startedAt: "2026-11-23T10:00:00.000Z",
  finishedAt: "2026-11-23T11:00:00.000Z",
  questionIds: [],
  answers: {},
  score,
  total: 50,
  passed: score >= 30,
  byTopic: {},
  timedOut: false,
});

describe("progress views", () => {
  beforeEach(() => {
    useProgressStore.getState().reset();
    useExamStore.getState().clear();
  });

  it("dashboard shows next step, last exam and running exam", async () => {
    useProgressStore.getState().addExam(exam("e1", 33));
    useExamStore.getState().start(["p01-01"]);
    renderWithProviders(<DashboardView />);
    expect(await screen.findByText("Weiterlernen")).toBeInTheDocument();
    expect(screen.getByText(/33 von 50 – bestanden/)).toBeInTheDocument();
    expect(screen.getByText("Eine Prüfungssimulation läuft")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Auswertung ansehen"));
    expect(window.location.hash).toBe("#/pruefung/ergebnis/e1");
  });

  it("progress view shows topics and exam history", async () => {
    useProgressStore.getState().addExam(exam("e1", 25));
    useProgressStore.getState().addExam(exam("e2", 35));
    useProgressStore.getState().recordAnswer("p01-01", true);
    useProgressStore.getState().recordLab("grundwerte", 5, 13);
    renderWithProviders(<ProgressView />);
    expect(await screen.findByText("Lernfortschritt")).toBeInTheDocument();
    expect(screen.getByText("100 %")).toBeInTheDocument();
    expect(screen.getByText(/35 \/ 50 – bestanden/)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/25 \/ 50 – nicht bestanden/));
    expect(window.location.hash).toBe("#/pruefung/ergebnis/e1");
  });

  it("settings show build information", () => {
    renderWithProviders(<SettingsView />);
    expect(screen.getByText("Über diese App")).toBeInTheDocument();
    expect(screen.getByText("IT-Grundschutz-Praktiker")).toBeInTheDocument();
    expect(screen.getByText(/^\d+\.\d+\.\d+$/)).toBeInTheDocument();
    expect(screen.getByText("Commit")).toBeInTheDocument();
    expect(screen.getByText("Build-Zeit")).toBeInTheDocument();
  });

  it("settings export, import and reset progress", async () => {
    useProgressStore.getState().completeLesson("t01-l01");
    const createUrl = vi.fn(() => "blob:x");
    const revokeUrl = vi.fn();
    Object.assign(URL, { createObjectURL: createUrl, revokeObjectURL: revokeUrl });
    const click = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => undefined);
    renderWithProviders(<SettingsView />);
    fireEvent.click(screen.getByText("Fortschritt exportieren (JSON)"));
    expect(createUrl).toHaveBeenCalled();
    expect(click).toHaveBeenCalled();

    const data = { ...useProgressStore.getState(), lessons: { "t02-l01": { completedAt: "x" } } };
    const file = new File(
      [JSON.stringify(createExport({ ...data, quizzes: {}, labs: {}, questions: {}, exams: [] }))],
      "p.json",
      {
        type: "application/json",
      },
    );
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    fireEvent.change(input, { target: { files: [file] } });
    await vi.waitFor(() => expect(useProgressStore.getState().lessons["t02-l01"]).toBeDefined());

    fireEvent.change(input, { target: { files: [new File(["kaputt"], "x.json")] } });
    await screen.findByText("Import fehlgeschlagen");

    fireEvent.click(screen.getByText("Gesamten Fortschritt löschen"));
    fireEvent.click(await screen.findByText("Löschen"));
    expect(useProgressStore.getState().lessons).toEqual({});
  });
});
