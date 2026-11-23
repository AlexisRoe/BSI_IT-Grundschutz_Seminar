import { fireEvent, screen } from "@testing-library/react";
import { useProgressStore } from "@/stores/progress.store";
import { renderWithProviders } from "@/test/render.utils";
import { CourseOverviewView } from "./course-overview.view";
import { LessonView } from "./lesson.view";

describe("course views", () => {
  beforeEach(() => useProgressStore.getState().reset());

  it("lists all topics with lessons", async () => {
    renderWithProviders(<CourseOverviewView />);
    expect(await screen.findByText(/1\. Einführung und Grundlagen/)).toBeInTheDocument();
    expect(screen.getByText(/15\. BCM-Prozess/)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/1\.1 Informationen, Grundwerte/));
    expect(window.location.hash).toBe("#/kurs/t01-l01");
  });

  it("renders a lesson and marks it as read", async () => {
    renderWithProviders(<LessonView lessonId="t01-l02" />);
    expect(await screen.findByText(/IT und OT, Security und Safety/)).toBeInTheDocument();
    expect(screen.getByText("Lernziele")).toBeInTheDocument();
    expect(screen.getByText(/Praxis|Klärwerk/)).toBeInTheDocument();
    fireEvent.click(screen.getByText("Als gelesen markieren"));
    expect(useProgressStore.getState().lessons["t01-l02"]).toBeDefined();
    fireEvent.click(screen.getByText("Nächste Lektion"));
    expect(window.location.hash).toBe("#/kurs/t01-l03");
  });

  it("renders all block types incl. a Praxis box", async () => {
    renderWithProviders(<LessonView lessonId="t01-l03" />);
    expect(await screen.findByText(/Praxis 2026: NIS-2/)).toBeInTheDocument();
    expect(screen.getByText(/Nicht prüfungsrelevant/)).toBeInTheDocument();
  });

  it("shows an empty state for unknown lessons", async () => {
    renderWithProviders(<LessonView lessonId="gibt-es-nicht" />);
    expect(await screen.findByText("Lektion nicht gefunden")).toBeInTheDocument();
  });
});
