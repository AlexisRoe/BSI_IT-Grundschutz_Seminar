import { fireEvent, screen } from "@testing-library/react";
import { makeQuestion } from "@/test/fixtures.utils";
import { renderWithProviders } from "@/test/render.utils";
import { Quiz } from "./quiz.component";

describe("Quiz", () => {
  it("checks answers, reveals the solution and finishes", () => {
    const onAnswer = vi.fn();
    const onFinish = vi.fn();
    const questions = [makeQuestion("a", 1, [0]), makeQuestion("b", 1, [])];
    renderWithProviders(<Quiz questions={questions} onAnswer={onAnswer} onFinish={onFinish} />);

    fireEvent.click(screen.getByLabelText(/A\) Aussage 0/));
    fireEvent.click(screen.getByText("Antwort prüfen"));
    expect(screen.getByText("Richtig beantwortet")).toBeInTheDocument();
    expect(onAnswer).toHaveBeenLastCalledWith(questions[0], true);

    fireEvent.click(screen.getByText("Nächste Frage"));
    fireEvent.click(screen.getByLabelText(/B\) Aussage 1/));
    fireEvent.click(screen.getByText("Antwort prüfen"));
    expect(screen.getByText("Nicht korrekt beantwortet")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Auswertung"));
    expect(onFinish).toHaveBeenCalledWith(1, 2);
    expect(screen.getByText("Ergebnis: 1 von 2 richtig")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Nochmal"));
    expect(screen.getByText("Frage 1 von 2")).toBeInTheDocument();
  });
});
