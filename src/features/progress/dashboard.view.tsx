import { Loading } from "@/components/loading.component";
import { allLessons } from "@/content/content.utils";
import { useCourse } from "@/hooks/course.hook";
import { navigate } from "@/hooks/hash-route.hook";
import { useExamStore } from "@/stores/exam.store";
import { overallLessonPercent } from "@/stores/progress.selectors";
import { useProgressStore } from "@/stores/progress.store";
import { Alert, Button, Card, Flex, ProgressBar, Space, Text, Title } from "@/ui";

/** Start screen: overall progress, next step and last exam result. */
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
      <Flex row gap="sm" wrap>
        <Button.Outlined onClick={() => navigate({ name: "course" })}>Kurs</Button.Outlined>
        <Button.Outlined onClick={() => navigate({ name: "labs" })}>Labore</Button.Outlined>
        <Button.Outlined onClick={() => navigate({ name: "training" })}>Training</Button.Outlined>
        <Button.Outlined onClick={() => navigate({ name: "exam" })}>
          Prüfungssimulation
        </Button.Outlined>
      </Flex>
    </Flex>
  );
}
