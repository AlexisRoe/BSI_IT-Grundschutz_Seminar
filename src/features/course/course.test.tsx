import { fireEvent, screen, waitFor } from "@testing-library/react";
import { loadCourse } from "@/content/content.utils";
import { useProgressStore } from "@/stores/progress.store";
import { renderWithProviders } from "@/ui/testing";
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

  it("opens the topic with the first unfinished lesson", async () => {
    const course = await loadCourse();
    const topics = course.topics.filter((t) => t.lessons.length > 0);
    const [first, second] = topics;
    for (const lesson of first?.lessons ?? [])
      useProgressStore.getState().completeLesson(lesson.id);
    const { container } = renderWithProviders(<CourseOverviewView />);
    await screen.findByText(/1\. Einführung und Grundlagen/);
    await waitFor(() =>
      expect(container.querySelector("details[open]")?.id).toBe(`topic-${second?.topic}`),
    );
    expect(container.querySelectorAll("details[open]")).toHaveLength(1);
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

  it("renders definition terms as level-4 headings", async () => {
    renderWithProviders(<LessonView lessonId="t01-l01" />);
    expect(
      await screen.findByRole("heading", { level: 4, name: "Vertraulichkeit" }),
    ).toBeInTheDocument();
  });

  it("offers a button that scrolls the page body back to the top", async () => {
    renderWithProviders(
      <main data-testid="body">
        <LessonView lessonId="t01-l02" />
      </main>,
    );
    const body = screen.getByTestId("body");
    body.scrollTop = 400;
    fireEvent.click(await screen.findByRole("button", { name: "Nach oben" }));
    expect(body.scrollTop).toBe(0);
  });

  it("shows an empty state for unknown lessons", async () => {
    renderWithProviders(<LessonView lessonId="gibt-es-nicht" />);
    expect(await screen.findByText("Lektion nicht gefunden")).toBeInTheDocument();
  });
});
