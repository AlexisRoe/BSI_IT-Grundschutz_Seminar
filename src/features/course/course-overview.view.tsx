import { Loading } from "@/components/loading.component";
import { TOPICS } from "@/content/topics.constants";
import { useCourse } from "@/hooks/course.hook";
import { navigate } from "@/hooks/hash-route.hook";
import { topicLessonProgress } from "@/stores/progress.selectors";
import { useProgressStore } from "@/stores/progress.store";
import { Accordion, Button, Flex, Pill, ProgressBar, Text, Title } from "@/ui";

/** All 15 curriculum topics with their lessons and progress. */
export function CourseOverviewView() {
  const course = useCourse();
  const lessonsDone = useProgressStore((s) => s.lessons);
  if (!course) return <Loading />;

  const firstOpenTopic = TOPICS.find((topic) =>
    (course.topics.find((t) => t.topic === topic.id)?.lessons ?? []).some(
      (lesson) => !lessonsDone[lesson.id],
    ),
  );

  return (
    <div className="course">
      <Title size="1">Kurs</Title>
      <Text>
        Die 15 Themenfelder folgen dem Curriculum v1.1 des BSI (24 Unterrichtseinheiten). Jede
        Lektion endet mit Kontrollfragen; Labore vertiefen die praktische Anwendung.
      </Text>
      <Accordion {...(firstOpenTopic ? { defaultOpenId: `topic-${firstOpenTopic.id}` } : {})}>
        {TOPICS.map((topic) => {
          const lessons = course.topics.find((t) => t.topic === topic.id)?.lessons ?? [];
          const { done, total } = topicLessonProgress(course, { lessons: lessonsDone }, topic.id);
          return (
            <Accordion.Item
              key={topic.id}
              id={`topic-${topic.id}`}
              summary={`${topic.id}. ${topic.title}`}
            >
              <div className="course__topic">
                <Flex row gap="sm" wrap>
                  <Pill>{topic.ue} UE</Pill>
                  <Pill>Vertiefungsgrad {topic.depth}</Pill>
                  <Pill>{topic.examCount} Prüfungsfragen</Pill>
                </Flex>
                <ProgressBar
                  value={total === 0 ? 0 : Math.round((done / total) * 100)}
                  label={`${done} von ${total} Lektionen abgeschlossen`}
                />
                {lessons.length === 0 && <Text>Inhalte folgen.</Text>}
                <div className="course__lessons">
                  {lessons.map((lesson, i) => (
                    <Button.Naked
                      key={lesson.id}
                      align="start"
                      iconLeft={lessonsDone[lesson.id] ? "circle-check" : "circle-dashed"}
                      onClick={() => navigate({ name: "lesson", lessonId: lesson.id })}
                    >
                      {`${topic.id}.${i + 1} ${lesson.title}`}
                    </Button.Naked>
                  ))}
                </div>
              </div>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}
