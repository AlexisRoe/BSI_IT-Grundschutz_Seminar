import { useState } from "react";
import type { Question } from "@/content/course.types";
import { isAnsweredCorrectly } from "@/features/exam/exam.utils";
import { Alert, Button, Flex } from "@/ui";
import { QuestionCard } from "./question-card.component";

/** Props of {@link Quiz}. */
export interface QuizProps {
  questions: readonly Question[];
  /** Called after each checked answer. */
  onAnswer?: (question: Question, correct: boolean) => void;
  /** Called once all questions are answered. */
  onFinish?: (correct: number, total: number) => void;
  /** Label of the restart button shown at the end. */
  restartLabel?: string;
}

/** Runs questions one at a time with immediate feedback after each answer. */
export function Quiz({ questions, onAnswer, onFinish, restartLabel = "Nochmal" }: QuizProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[index];
  if (!question) return null;

  if (finished) {
    return (
      <Flex column gap="md">
        <Alert
          variant="info"
          icon="circle-check"
          title={`Ergebnis: ${score} von ${questions.length} richtig`}
          description="Eine Frage zählt nur, wenn alle Aussagen korrekt angekreuzt sind."
        />
        <Button.Outlined
          onClick={() => {
            setIndex(0);
            setSelected([]);
            setRevealed(false);
            setScore(0);
            setFinished(false);
          }}
        >
          {restartLabel}
        </Button.Outlined>
      </Flex>
    );
  }

  const check = () => {
    const ok = isAnsweredCorrectly(question, selected);
    setRevealed(true);
    if (ok) setScore((s) => s + 1);
    onAnswer?.(question, ok);
  };

  const next = () => {
    if (index + 1 >= questions.length) {
      setFinished(true);
      onFinish?.(score, questions.length);
      return;
    }
    setIndex(index + 1);
    setSelected([]);
    setRevealed(false);
  };

  return (
    <Flex column gap="md">
      <QuestionCard
        question={question}
        caption={`Frage ${index + 1} von ${questions.length}`}
        selected={selected}
        reveal={revealed}
        onToggle={(i) => setSelected((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]))}
      />
      {revealed ? (
        <Button onClick={next}>
          {index + 1 >= questions.length ? "Auswertung" : "Nächste Frage"}
        </Button>
      ) : (
        <Button onClick={check}>Antwort prüfen</Button>
      )}
    </Flex>
  );
}
