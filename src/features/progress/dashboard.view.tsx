import type { Route } from "@/app/routes.constants";
import { Loading } from "@/components/loading.component";
import {
  EXAM_DURATION_MIN,
  EXAM_PASS_RATIO,
  EXAM_QUESTION_COUNT,
  TRAINING_ROUND_SIZE,
} from "@/config/exam.config";
import { allLessons } from "@/content/content.utils";
import { useCourse } from "@/hooks/course.hook";
import { navigate } from "@/hooks/hash-route.hook";
import { useExamStore } from "@/stores/exam.store";
import { overallLessonPercent } from "@/stores/progress.selectors";
import { useProgressStore } from "@/stores/progress.store";
import { Alert, Button, Card, Flex, ProgressBar, Space, Text, Title } from "@/ui";

interface Section {
  title: string;
  description: string;
  action: string;
  route: Route;
}

const SECTIONS: readonly Section[] = [
  {
    title: "Kurs",
    description:
      "Die Lektionen aller Themenfelder zum Durcharbeiten, jeweils mit Lernzielen, Quellen und Kontrollfragen am Ende.",
    action: "Zum Kurs",
    route: { name: "course" },
  },
  {
    title: "Labore",
    description:
      "Praxisübungen an einer fiktiven Übungsorganisation. Zu jeder Entscheidung erhalten Sie eine Rückmeldung mit Begründung.",
    action: "Labore öffnen",
    route: { name: "labs" },
  },
  {
    title: "Training",
    description: `Üben mit Fragen aus dem Prüfungsfragenpool. Nach jeder Frage sehen Sie die Lösung mit Begründung und Quelle; eine Runde umfasst bis zu ${TRAINING_ROUND_SIZE} Fragen.`,
    action: "Training starten",
    route: { name: "training" },
  },
  {
    title: "Prüfungssimulation",
    description: `Probeprüfung nach den Prüfungsbedingungen: ${EXAM_QUESTION_COUNT} Fragen in ${EXAM_DURATION_MIN} Minuten, bestanden ab ${Math.round(EXAM_PASS_RATIO * 100)} % richtiger Antworten.`,
    action: "Simulation öffnen",
    route: { name: "exam" },
  },
];

/** Start screen: overall progress, next step, last exam result and an overview of the sections. */
export function DashboardView() {
  const course = useCourse();
  const lessons = useProgressStore((s) => s.lessons);
  const exams = useProgressStore((s) => s.exams);
  const activeExam = useExamStore((s) => s.active);
  if (!course) return <Loading />;

  const next = allLessons(course).find((l) => !lessons[l.id]);
  const last = exams.at(-1);

  return (
    <Flex column gap="md">
      <Title size="1">IT-Grundschutz-Praktiker</Title>
      <Text>
        Vorbereitung auf die Prüfung zum IT-Grundschutz-Praktiker nach dem Curriculum des BSI. Alle
        prüfungsrelevanten Inhalte stützen sich auf die BSI-Standards 200-1 bis 200-4, das
        IT-Grundschutz-Kompendium und die Zertifizierungsdokumente. Ihr Fortschritt wird nur lokal
        auf diesem Gerät gespeichert.
      </Text>
      {activeExam && (
        <Alert
          variant="warning"
          icon="clock"
          title="Eine Prüfungssimulation läuft"
          description="Die Zeit läuft weiter. Setzen Sie die Simulation fort, bevor sie automatisch abgegeben wird."
        />
      )}
      <ProgressBar
        value={overallLessonPercent(course, { lessons })}
        label="Lektionen abgeschlossen"
      />
      <Space size="16" />
      <Card>
        <Card.Header>
          <Card.Subtitle>Nächster Schritt</Card.Subtitle>
          <Card.Title>{next ? next.title : "Alle Lektionen abgeschlossen"}</Card.Title>
        </Card.Header>
        <Space size="16" />
        <Card.Action
          onClick={() =>
            next ? navigate({ name: "lesson", lessonId: next.id }) : navigate({ name: "exam" })
          }
        >
          {next ? "Weiterlernen" : "Prüfung simulieren"}
        </Card.Action>
      </Card>
      {last && (
        <Card>
          <Card.Header>
            <Card.Subtitle>Letzte Prüfungssimulation</Card.Subtitle>
            <Card.Title>{`${last.score} von ${last.total} – ${last.passed ? "bestanden" : "nicht bestanden"}`}</Card.Title>
          </Card.Header>
          <Space size="16" />
          <Card.Action onClick={() => navigate({ name: "exam-result", examId: last.id })}>
            Auswertung ansehen
          </Card.Action>
        </Card>
      )}
      <Space size="16" />
      <Flex column gap="xl">
        {SECTIONS.map((section) => (
          <Flex column gap="sm" key={section.title}>
            <Title size="2">{section.title}</Title>
            <Text>{section.description}</Text>
            <Flex row>
              <Button.Outlined onClick={() => navigate(section.route)}>
                {section.action}
              </Button.Outlined>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
