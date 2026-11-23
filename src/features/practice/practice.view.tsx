import { useState } from "react";
import { Loading } from "@/components/loading.component";
import { TRAINING_ROUND_SIZE } from "@/config/exam.config";
import type { Question, TopicId } from "@/content/course.types";
import { TOPICS } from "@/content/topics.constants";
import { shuffle } from "@/features/exam/exam.utils";
import { Quiz } from "@/features/quiz/quiz.component";
import { useCourse } from "@/hooks/course.hook";
import { wrongQuestionIds } from "@/stores/progress.selectors";
import { useProgressStore } from "@/stores/progress.store";
import { Alert, Button, Flex, Segmented, Select, Text, Title } from "@/ui";

type Mode = "topic" | "mistakes" | "mixed";

/** Training with immediate feedback: by topic, mixed, or previously wrong questions. */
export function PracticeView() {
  const course = useCourse();
  const questionsStats = useProgressStore((s) => s.questions);
  const recordAnswer = useProgressStore((s) => s.recordAnswer);
  const [mode, setMode] = useState<Mode>("topic");
  const [topic, setTopic] = useState<TopicId>(1);
  const [round, setRound] = useState<Question[] | null>(null);

  if (!course) return <Loading />;

  const candidates = (): Question[] => {
    if (mode === "topic") return course.pool.filter((q) => q.topic === topic);
    if (mode === "mistakes") {
      const wrong = new Set(wrongQuestionIds({ questions: questionsStats }));
      return course.pool.filter((q) => wrong.has(q.id));
    }
    return course.pool;
  };
  const available = candidates();

  if (round) {
    return (
      <Flex column gap="md">
        <Title size="1">Training</Title>
        <Quiz
          questions={round}
          restartLabel="Runde wiederholen"
          onAnswer={(q, ok) => recordAnswer(q.id, ok)}
        />
        <Button.Outlined iconLeft="arrow-left" onClick={() => setRound(null)}>
          Andere Auswahl
        </Button.Outlined>
      </Flex>
    );
  }

  return (
    <Flex column gap="md">
      <Title size="1">Training</Title>
      <Text>
        Üben Sie mit Fragen aus dem Prüfungsfragenpool und sehen Sie nach jeder Frage die Lösung mit
        Begründung und Quelle. Eine Runde umfasst bis zu {TRAINING_ROUND_SIZE} Fragen.
      </Text>
      <Segmented value={mode} onChange={(id) => setMode(id as Mode)}>
        <Segmented.Item id="topic">Themenfeld</Segmented.Item>
        <Segmented.Item id="mixed">Gemischt</Segmented.Item>
        <Segmented.Item id="mistakes">Fehlertraining</Segmented.Item>
      </Segmented>
      {mode === "topic" && (
        <Select
          label="Themenfeld"
          placeholder="Themenfeld wählen"
          value={String(topic)}
          onChange={(v) => setTopic(Number(v) as TopicId)}
        >
          {TOPICS.map((t) => (
            <Select.Option key={t.id} value={String(t.id)}>
              {`${t.id}. ${t.title}`}
            </Select.Option>
          ))}
        </Select>
      )}
      {available.length === 0 ? (
        <Alert
          variant="info"
          title={mode === "mistakes" ? "Keine offenen Fehler" : "Noch keine Fragen vorhanden"}
          description={
            mode === "mistakes"
              ? "Alle bisher beantworteten Fragen wurden zuletzt richtig gelöst."
              : "Für diese Auswahl gibt es noch keine Fragen."
          }
        />
      ) : (
        <Button onClick={() => setRound(shuffle(available).slice(0, TRAINING_ROUND_SIZE))}>
          {`Runde starten (${Math.min(available.length, TRAINING_ROUND_SIZE)} von ${available.length} Fragen)`}
        </Button>
      )}
    </Flex>
  );
}
