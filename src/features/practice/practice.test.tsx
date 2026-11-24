import { fireEvent, screen } from "@testing-library/react";
import { useProgressStore } from "@/stores/progress.store";
import { renderWithProviders } from "@/ui/testing";
import { PracticeView } from "./practice.view";

describe("practice", () => {
  beforeEach(() => useProgressStore.getState().reset());

  it("starts a topic round and records answers", async () => {
    renderWithProviders(<PracticeView />);
    fireEvent.click(await screen.findByText(/Runde starten/));
    fireEvent.click(screen.getByText("Antwort prüfen"));
    expect(Object.keys(useProgressStore.getState().questions)).toHaveLength(1);
    fireEvent.click(screen.getByText("Andere Auswahl"));
    expect(screen.getByText(/Runde starten/)).toBeInTheDocument();
  });

  it("offers mistake and mixed modes", async () => {
    renderWithProviders(<PracticeView />);
    fireEvent.click(await screen.findByText("Fehlertraining"));
    expect(screen.getByText("Keine offenen Fehler")).toBeInTheDocument();
    useProgressStore.getState().recordAnswer("p01-01", false);
    fireEvent.click(screen.getByText("Gemischt"));
    fireEvent.click(screen.getByText("Fehlertraining"));
    expect(screen.getByText(/1 von 1 Fragen/)).toBeInTheDocument();
  });
});
