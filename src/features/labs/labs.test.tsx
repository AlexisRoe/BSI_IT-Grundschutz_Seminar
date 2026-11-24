import { fireEvent, screen, within } from "@testing-library/react";
import { useProgressStore } from "@/stores/progress.store";
import { renderWithProviders } from "@/ui/testing";
import { LabView } from "./lab.view";
import { LabsOverviewView } from "./labs-overview.view";

describe("labs", () => {
  beforeEach(() => useProgressStore.getState().reset());

  it("lists the labs", async () => {
    renderWithProviders(<LabsOverviewView />);
    expect(
      await screen.findByText("Grundwerte, IT/OT und Security/Safety zuordnen"),
    ).toBeInTheDocument();
    fireEvent.click(screen.getAllByText("Starten")[0] as HTMLElement);
    expect(window.location.hash).toMatch(/^#\/labor\//);
  });

  it("runs a lab with classify and order tasks and records the result", async () => {
    renderWithProviders(<LabView labId="rollen" />);
    await screen.findByText("Rollen der IS-Organisation und Leitlinie");

    for (const trigger of screen.getAllByRole("button", { name: /Zuordnung/ })) {
      fireEvent.click(trigger);
      const list = screen.getByRole("listbox");
      fireEvent.click(within(list).getAllByRole("option")[0] as HTMLElement);
    }
    fireEvent.click(screen.getAllByText("Auswerten")[0] as HTMLElement);
    expect(screen.getAllByText(/Lösung:|Richtig/).length).toBeGreaterThan(0);

    fireEvent.click(screen.getAllByRole("button", { name: /nach unten/ })[0] as HTMLElement);
    fireEvent.click(screen.getAllByRole("button", { name: /nach oben/ })[1] as HTMLElement);
    fireEvent.click(screen.getByText("Auswerten"));
    expect(screen.getByText("Richtige Reihenfolge:")).toBeInTheDocument();
    expect(screen.getByText(/Labor abgeschlossen/)).toBeInTheDocument();
    expect(useProgressStore.getState().labs.rollen?.total).toBe(12);
  });

  it("shows an empty state for unknown labs", async () => {
    renderWithProviders(<LabView labId="nope" />);
    expect(await screen.findByText("Labor nicht gefunden")).toBeInTheDocument();
  });
});
