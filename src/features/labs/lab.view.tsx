import { useState } from "react";
import { Loading } from "@/components/loading.component";
import { RichText } from "@/components/rich-text.component";
import { SourceList } from "@/components/source-list.component";
import { getTopic } from "@/content/topics.constants";
import { useCourse } from "@/hooks/course.hook";
import { navigate } from "@/hooks/hash-route.hook";
import { useProgressStore } from "@/stores/progress.store";
import { Alert, Button, Divider, Flex, State, Text, Title } from "@/ui";
import { ClassifyTask } from "./classify-task.component";
import { maxScore } from "./lab.utils";
import { OrderTask } from "./order-task.component";

/** Runs one lab: scenario, tasks with self-check, total score. */
export function LabView({ labId }: { labId: string }) {
  const course = useCourse();
  const recordLab = useProgressStore((s) => s.recordLab);
  const [scores, setScores] = useState<Record<string, number>>({});

  if (!course) return <Loading />;
  const lab = course.labs.find((l) => l.id === labId);
  if (!lab) {
    return (
      <State.Empty
        title="Labor nicht gefunden"
        action={{ label: "Zur Laborübersicht", onClick: () => navigate({ name: "labs" }) }}
      />
    );
  }

  const total = lab.tasks.reduce((sum, t) => sum + maxScore(t), 0);
  const done = lab.tasks.every((t) => scores[t.id] !== undefined);
  const reached = Object.values(scores).reduce((a, b) => a + b, 0);

  const onChecked = (taskId: string, score: number) => {
    const next = { ...scores, [taskId]: score };
    setScores(next);
    if (lab.tasks.every((t) => next[t.id] !== undefined)) {
      recordLab(
        lab.id,
        Object.values(next).reduce((a, b) => a + b, 0),
        total,
      );
    }
  };

  return (
    <Flex column gap="md" key={lab.id}>
      <Text>{`Labor zu Themenfeld ${lab.topic}: ${getTopic(lab.topic).title}`}</Text>
      <Title size="1">{lab.title}</Title>
      <Title size="2">Ausgangslage</Title>
      {lab.scenario.map((p) => (
        <Text key={p}>
          <RichText text={p} />
        </Text>
      ))}
      {lab.tasks.map((task, i) => (
        <Flex column gap="sm" key={task.id}>
          <Divider />
          <Title size="2">{`Aufgabe ${i + 1}`}</Title>
          {task.kind === "classify" ? (
            <ClassifyTask task={task} onChecked={(s) => onChecked(task.id, s)} />
          ) : (
            <OrderTask task={task} onChecked={(s) => onChecked(task.id, s)} />
          )}
        </Flex>
      ))}
      {done && (
        <Alert
          variant="info"
          icon="circle-check"
          title={`Labor abgeschlossen: ${reached} von ${total} Punkten`}
          description="Das Ergebnis wurde in Ihrem Lernfortschritt gespeichert."
        />
      )}
      <SourceList sources={lab.sources} />
      <Button.Outlined iconLeft="arrow-left" onClick={() => navigate({ name: "labs" })}>
        Alle Labore
      </Button.Outlined>
    </Flex>
  );
}
