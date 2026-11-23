import { render, screen } from "@testing-library/react";
import { App } from "@/app/app.component";

describe("App shell", () => {
  it("renders the placeholder screen", () => {
    render(<App />);
    expect(screen.getByText("IT-Grundschutz Seminar")).toBeInTheDocument();
  });
});
