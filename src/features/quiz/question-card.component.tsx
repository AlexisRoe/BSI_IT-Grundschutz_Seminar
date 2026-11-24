import type { Question } from "@/content/course.types";
import { formatSource } from "@/content/sources.constants";
import { isAnsweredCorrectly } from "@/features/exam/exam.utils";
import { Alert, Card, Checkbox, Flex, Pill, RichText, Text } from "@/ui";

/** Props of {@link QuestionCard}. */
export interface QuestionCardProps {
  question: Question;
  /** Caption above the stem, e.g. "Frage 3 von 50". */
  caption?: string;
  selected: readonly number[];
  onToggle: (option: number) => void;
  /** Shows the solution, the explanation and the source; disables input. */
  reveal?: boolean;
}

const LETTERS = ["A", "B", "C", "D"] as const;

/** Exam-style question: four statements, tick every correct one (0–4). */
export function QuestionCard({
  question,
  caption,
  selected,
  onToggle,
  reveal = false,
}: QuestionCardProps) {
  const correct = isAnsweredCorrectly(question, selected);
  return (
    <Card>
      <Card.Header>
        {caption && <Card.Subtitle>{caption}</Card.Subtitle>}
        <Card.Title>
          <RichText text={question.stem} />
        </Card.Title>
        <Card.Subtitle>Kreuzen Sie alle zutreffenden Aussagen an (0 bis 4).</Card.Subtitle>
      </Card.Header>
      <Card.Content>
        <Flex column gap="md">
          {question.options.map((option, i) => (
            <div key={LETTERS[i]} className="option-row">
              <Checkbox
                name={`${question.id}-${i}`}
                checked={selected.includes(i)}
                disabled={reveal}
                onChange={() => onToggle(i)}
              >
                {LETTERS[i]}) {option.text}
              </Checkbox>
              {reveal && (
                <Pill icon={option.correct ? "check" : "close"}>
                  {option.correct ? "richtig" : "falsch"}
                </Pill>
              )}
            </div>
          ))}
          {reveal && (
            <>
              <Alert
                variant={correct ? "info" : "error"}
                icon={correct ? "circle-check" : "circle-x"}
                title={correct ? "Richtig beantwortet" : "Nicht korrekt beantwortet"}
                description={question.explanation}
              />
              <Text>Quelle: {formatSource(question.source)}</Text>
            </>
          )}
        </Flex>
      </Card.Content>
    </Card>
  );
}
