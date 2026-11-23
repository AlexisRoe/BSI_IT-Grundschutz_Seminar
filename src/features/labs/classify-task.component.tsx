import { useState } from "react";
import { RichText } from "@/components/rich-text.component";
import type { LabTask } from "@/content/course.types";
import { Alert, Button, Card, Flex, Select, Text } from "@/ui";
import { scoreClassify } from "./lab.utils";

/** Props of {@link ClassifyTask}. */
export interface ClassifyTaskProps {
  task: Extract<LabTask, { kind: "classify" }>;
  onChecked: (score: number) => void;
}

/** Assign each item to one category, then compare with the solution. */
export function ClassifyTask({ task, onChecked }: ClassifyTaskProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const label = (id: string) => task.categories.find((c) => c.id === id)?.label ?? id;
  const complete = task.items.every((item) => answers[item.id]);

  return (
    <Flex column gap="md">
      <Text>
        <RichText text={task.prompt} />
      </Text>
      {task.items.map((item) => {
        const ok = answers[item.id] === item.answer;
        return (
          <Card key={item.id}>
            <Card.Header>
              <Card.Title>{item.label}</Card.Title>
              {item.detail && <Card.Subtitle>{item.detail}</Card.Subtitle>}
            </Card.Header>
            <Card.Content>
              <Select
                label="Zuordnung"
                placeholder="Bitte wählen"
                value={answers[item.id] ?? ""}
                disabled={checked}
                onChange={(v) => setAnswers((a) => ({ ...a, [item.id]: String(v) }))}
              >
                {task.categories.map((c) => (
                  <Select.Option key={c.id} value={c.id}>
                    {c.label}
                  </Select.Option>
                ))}
              </Select>
              {checked && (
                <Alert
                  variant={ok ? "info" : "error"}
                  icon={ok ? "circle-check" : "circle-x"}
                  title={ok ? "Richtig" : `Lösung: ${label(item.answer)}`}
                  description={item.explanation}
                />
              )}
            </Card.Content>
          </Card>
        );
      })}
      {!checked && (
        <Button
          disabled={!complete}
          onClick={() => {
            setChecked(true);
            onChecked(scoreClassify(task, answers));
          }}
        >
          Auswerten
        </Button>
      )}
    </Flex>
  );
}
