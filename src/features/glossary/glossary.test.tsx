import { fireEvent, screen } from "@testing-library/react";
import { GLOSSARY } from "@/content/glossary.content";
import { renderWithProviders } from "@/ui/testing";
import { GlossaryView } from "./glossary.view";

describe("glossary", () => {
  it("is sorted alphabetically", () => {
    const terms = GLOSSARY.map((e) => e.term);
    expect(terms).toEqual([...terms].sort((a, b) => a.localeCompare(b, "de")));
  });

  it("shows term as heading, the definition and the source", () => {
    renderWithProviders(<GlossaryView />);
    const entry = GLOSSARY[0] as (typeof GLOSSARY)[number];
    expect(screen.getByRole("heading", { level: 2, name: entry.term })).toBeInTheDocument();
    expect(screen.getAllByText(/^Quelle: /).length).toBe(GLOSSARY.length);
  });

  it("filters by search term", () => {
    renderWithProviders(<GlossaryView />);
    expect(screen.getByText("Vertraulichkeit")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "Kumulation" } });
    expect(screen.getByText("Kumulationseffekt")).toBeInTheDocument();
    expect(screen.queryByText("Vertraulichkeit")).not.toBeInTheDocument();
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "xyz" } });
    expect(screen.getByText("Keine Einträge gefunden.")).toBeInTheDocument();
  });
});
