import { Loading } from "@/components/loading.component";
import { TOPICS } from "@/content/topics.constants";
import { useCourse } from "@/hooks/course.hook";
import { navigate } from "@/hooks/hash-route.hook";
import { topicAccuracy, topicLessonProgress } from "@/stores/progress.selectors";
import { useProgressStore } from "@/stores/progress.store";
import { Button, Flex, LineChart, Table, Text, Title } from "@/ui";

const dateFormat = new Intl.DateTimeFormat("de-DE", { dateStyle: "short", timeStyle: "short" });

/** Progress per topic and the history of exam simulations. */
export function ProgressView() {
  const course = useCourse();
  const lessons = useProgressStore((s) => s.lessons);
  const questions = useProgressStore((s) => s.questions);
  const exams = useProgressStore((s) => s.exams);
  const labs = useProgressStore((s) => s.labs);
  if (!course) return <Loading />;

  return (
    <Flex column gap="md">
      <Title size="1">Lernfortschritt</Title>
      <div className="scroll-x">
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>Themenfeld</Table.HeaderCell>
              <Table.HeaderCell>Lektionen</Table.HeaderCell>
              <Table.HeaderCell>Labore</Table.HeaderCell>
              <Table.HeaderCell>Trefferquote</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {TOPICS.map((t) => {
              const { done, total } = topicLessonProgress(course, { lessons }, t.id);
              const topicLabs = course.labs.filter((l) => l.topic === t.id);
              const labsDone = topicLabs.filter((l) => labs[l.id]).length;
              const accuracy = topicAccuracy(course, { questions }, t.id);
              return (
                <Table.Row key={t.id}>
                  <Table.Cell>{`${t.id}. ${t.title}`}</Table.Cell>
                  <Table.Cell>{`${done} / ${total}`}</Table.Cell>
                  <Table.Cell>
                    {topicLabs.length ? `${labsDone} / ${topicLabs.length}` : "–"}
                  </Table.Cell>
                  <Table.Cell>{accuracy === undefined ? "–" : `${accuracy} %`}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
      <Text>Die Trefferquote bezieht sich auf beantwortete Fragen aus dem Prüfungsfragenpool.</Text>

      <Title size="2">Prüfungssimulationen</Title>
      {exams.length === 0 ? (
        <Text>Noch keine Simulation abgeschlossen.</Text>
      ) : (
        <>
          {exams.length > 1 && (
            <LineChart
              title="Punkte je Simulation (Bestehensgrenze 30)"
              datasets={[{ label: "Punkte", data: exams.map((e) => e.score) }]}
              categories={exams.map((_, i) => `#${i + 1}`)}
              withAxis
              withLabel
            />
          )}
          {[...exams].reverse().map((e) => (
            <Button.Naked
              key={e.id}
              iconLeft={e.passed ? "circle-check" : "circle-x"}
              onClick={() => navigate({ name: "exam-result", examId: e.id })}
            >
              {`${dateFormat.format(new Date(e.finishedAt))}: ${e.score} / ${e.total} – ${e.passed ? "bestanden" : "nicht bestanden"}`}
            </Button.Naked>
          ))}
        </>
      )}
    </Flex>
  );
}
