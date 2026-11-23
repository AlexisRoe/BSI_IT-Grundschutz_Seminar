import { fireEvent, screen } from "@testing-library/react";
import { GLOSSARY } from "@/content/glossary.content";
import { renderWithProviders } from "@/test/render.utils";
import { GlossaryView } from "./glossary.view";

describe("glossary", () => {
  it("is sorted alphabetically", () => {
    const terms = GLOSSARY.map((e) => e.term);
    expect(terms).toEqual([...terms].sort((a, b) => a.localeCompare(b, "de")));
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
