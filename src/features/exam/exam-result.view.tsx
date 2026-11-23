import { useState } from "react";
import { Loading } from "@/components/loading.component";
import type { TopicId } from "@/content/course.types";
import { TOPICS } from "@/content/topics.constants";
import { QuestionCard } from "@/features/quiz/question-card.component";
import { useCourse } from "@/hooks/course.hook";
import { navigate } from "@/hooks/hash-route.hook";
import { useProgressStore } from "@/stores/progress.store";
import { Alert, Button, Flex, Segmented, State, Table, Text, Title } from "@/ui";
import { isAnsweredCorrectly } from "./exam.utils";
import { examQuestions } from "./exam-session.utils";

/** Result of a finished exam with per-topic score and a full review. */
export function ExamResultView({ examId }: { examId: string }) {
  const course = useCourse();
  const record = useProgressStore((s) => s.exams.find((e) => e.id === examId));
  const [filter, setFilter] = useState<"wrong" | "all">("wrong");

  if (!record) {
    return (
      <State.Empty
        title="Ergebnis nicht gefunden"
        action={{ label: "Zur Prüfungssimulation", onClick: () => navigate({ name: "exam" }) }}
      />
    );
  }
  if (!course) return <Loading />;

  const questions = examQuestions(record, course.pool);
  const shown =
    filter === "all"
      ? questions
      : questions.filter((q) => !isAnsweredCorrectly(q, record.answers[q.id]));

  return (
    <Flex column gap="md">
      <Title size="1">Ergebnis der Prüfungssimulation</Title>
      <Alert
        variant={record.passed ? "info" : "error"}
        icon={record.passed ? "circle-check" : "circle-x"}
        title={`${record.passed ? "Bestanden" : "Nicht bestanden"}: ${record.score} von ${record.total} Punkten`}
        description={`${Math.round((record.score / Math.max(record.total, 1)) * 100)} % richtig.${record.timedOut ? " Die Bearbeitungszeit war abgelaufen; die Prüfung wurde automatisch abgegeben." : ""}`}
      />
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>Themenfeld</Table.HeaderCell>
            <Table.HeaderCell>Punkte</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {TOPICS.filter((t) => record.byTopic[t.id as TopicId]).map((t) => {
            const s = record.byTopic[t.id];
            return (
              <Table.Row key={t.id}>
                <Table.Cell>{`${t.id}. ${t.title}`}</Table.Cell>
                <Table.Cell>{`${s?.correct ?? 0} / ${s?.total ?? 0}`}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      <Title size="2">Auswertung der Fragen</Title>
      <Segmented value={filter} onChange={(id) => setFilter(id as "wrong" | "all")}>
        <Segmented.Item id="wrong">Nur falsche</Segmented.Item>
        <Segmented.Item id="all">Alle</Segmented.Item>
      </Segmented>
      {shown.length === 0 && <Text>Keine falsch beantworteten Fragen.</Text>}
      {shown.map((q) => (
        <QuestionCard
          key={q.id}
          question={q}
          caption={`Frage ${questions.indexOf(q) + 1} · Themenfeld ${q.topic}`}
          selected={record.answers[q.id] ?? []}
          onToggle={() => undefined}
          reveal
        />
      ))}
      <Flex row gap="sm" wrap>
        <Button onClick={() => navigate({ name: "exam" })}>Neue Simulation</Button>
        <Button.Outlined onClick={() => navigate({ name: "progress" })}>
          Zum Fortschritt
        </Button.Outlined>
      </Flex>
    </Flex>
  );
}
