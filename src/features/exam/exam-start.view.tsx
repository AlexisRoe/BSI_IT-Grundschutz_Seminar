import { Loading } from "@/components/loading.component";
import {
  EXAM_DISTRIBUTION,
  EXAM_DURATION_MIN,
  EXAM_PASS_RATIO,
  EXAM_QUESTION_COUNT,
} from "@/config/exam.config";
import { useCourse } from "@/hooks/course.hook";
import { navigate } from "@/hooks/hash-route.hook";
import { useExamStore } from "@/stores/exam.store";
import { usedExamQuestionIds } from "@/stores/progress.selectors";
import { useProgressStore } from "@/stores/progress.store";
import { Alert, Button, Flex, List, ListItem, Text, Title } from "@/ui";
import { drawExam } from "./exam.utils";

/** Explains the exam rules and starts or resumes a simulation. */
export function ExamStartView() {
  const course = useCourse();
  const active = useExamStore((s) => s.active);
  const start = useExamStore((s) => s.start);
  const exams = useProgressStore((s) => s.exams);
  if (!course) return <Loading />;

  const required = Math.ceil(EXAM_QUESTION_COUNT * EXAM_PASS_RATIO);
  const ids = () =>
    drawExam(course.pool, EXAM_DISTRIBUTION, EXAM_QUESTION_COUNT, usedExamQuestionIds({ exams }));
  const poolComplete = ids().length === EXAM_QUESTION_COUNT;

  return (
    <Flex column gap="md">
      <Title size="1">Prüfungssimulation</Title>
      <Text>
        Die Simulation folgt den Prüfungsbedingungen für den IT-Grundschutz-Praktiker (Version 2.2):
      </Text>
      <List>
        <ListItem>{`${EXAM_QUESTION_COUNT} Multiple-Choice-Fragen, verteilt auf die 15 Themenfelder nach Tabelle 2.`}</ListItem>
        <ListItem>
          Jede Frage hat vier Aussagen. Keine, eine, mehrere oder alle können richtig sein.
        </ListItem>
        <ListItem>
          Eine Frage zählt nur, wenn alle Aussagen korrekt angekreuzt sind. Es gibt keine Teilpunkte
          und keine Punktabzüge.
        </ListItem>
        <ListItem>{`Bearbeitungszeit ${EXAM_DURATION_MIN} Minuten. Die Zeit läuft weiter, auch wenn Sie die App schließen.`}</ListItem>
        <ListItem>{`Bestanden ab ${required} richtigen Antworten (${EXAM_PASS_RATIO * 100} %).`}</ListItem>
        <ListItem>
          Keine Hilfsmittel. Fragen aus früheren Simulationen werden nach Möglichkeit nicht
          wiederholt.
        </ListItem>
      </List>
      {!poolComplete && (
        <Alert
          variant="warning"
          title="Fragenpool noch unvollständig"
          description={`Aktuell können nur ${ids().length} von ${EXAM_QUESTION_COUNT} Fragen gezogen werden.`}
        />
      )}
      {active ? (
        <Button onClick={() => navigate({ name: "exam-run" })}>
          Laufende Simulation fortsetzen
        </Button>
      ) : (
        <Button
          disabled={course.pool.length === 0}
          onClick={() => {
            start(ids());
            navigate({ name: "exam-run" });
          }}
        >
          Simulation starten
        </Button>
      )}
    </Flex>
  );
}
