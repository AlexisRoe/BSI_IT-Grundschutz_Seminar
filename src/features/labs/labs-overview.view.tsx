import { Loading } from "@/components/loading.component";
import { getTopic } from "@/content/topics.constants";
import { useCourse } from "@/hooks/course.hook";
import { navigate } from "@/hooks/hash-route.hook";
import { useProgressStore } from "@/stores/progress.store";
import { Card, Flex, Space, Text, Title } from "@/ui";

/** List of all labs with their last result. */
export function LabsOverviewView() {
  const course = useCourse();
  const results = useProgressStore((s) => s.labs);
  if (!course) return <Loading />;

  return (
    <Flex column gap="md">
      <Title size="1">Labore</Title>
      <Text>
        Praxisübungen an einer fiktiven Übungsorganisation. Sie wenden die Methodik an und erhalten
        zu jeder Entscheidung eine Rückmeldung mit Begründung.
      </Text>
      {course.labs.map((lab) => {
        const result = results[lab.id];
        return (
          <Card key={lab.id}>
            <Card.Header>
              <Card.Subtitle>{`Themenfeld ${lab.topic}: ${getTopic(lab.topic).title}`}</Card.Subtitle>
              <Card.Title>{lab.title}</Card.Title>
              {result && (
                <Card.Subtitle>{`Letztes Ergebnis: ${result.correct} von ${result.total} Punkten`}</Card.Subtitle>
              )}
            </Card.Header>
            <Space size="16" />
            <Card.Action onClick={() => navigate({ name: "lab", labId: lab.id })}>
              {result ? "Wiederholen" : "Starten"}
            </Card.Action>
          </Card>
        );
      })}
    </Flex>
  );
}
