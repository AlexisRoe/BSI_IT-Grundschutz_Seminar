import { render, screen } from "@testing-library/react";
import { App } from "@/app/app.component";

describe("App shell", () => {
  it("renders the navigation and the start screen", async () => {
    window.location.hash = "#/";
    render(<App />);
    expect(screen.getAllByText("IT-Grundschutz-Praktiker").length).toBeGreaterThan(0);
    expect(
      screen.getByText("Prüfungssimulation", { selector: "button *, button" }),
    ).toBeInTheDocument();
  });
});
