import { Loading } from "@/components/loading.component";
import { SourceList } from "@/components/source-list.component";
import { allLessons, findLesson } from "@/content/content.utils";
import { getTopic } from "@/content/topics.constants";
import { Quiz } from "@/features/quiz/quiz.component";
import { useCourse } from "@/hooks/course.hook";
import { navigate } from "@/hooks/hash-route.hook";
import { useProgressStore } from "@/stores/progress.store";
import {
  BreadCrumbs,
  Button,
  Divider,
  Flex,
  List,
  ListItem,
  Pill,
  RichText,
  State,
  Text,
  Title,
} from "@/ui";
import { ContentBlockView } from "./content-block.component";

/** One lesson: goals, content blocks, sources, Kontrollfragen and navigation. */
export function LessonView({ lessonId }: { lessonId: string }) {
  const course = useCourse();
  const completed = useProgressStore((s) => Boolean(s.lessons[lessonId]));
  const completeLesson = useProgressStore((s) => s.completeLesson);
  const recordQuiz = useProgressStore((s) => s.recordQuiz);
  const recordAnswer = useProgressStore((s) => s.recordAnswer);

  if (!course) return <Loading />;
  const found = findLesson(course, lessonId);
  if (!found) {
    return (
      <State.Empty
        title="Lektion nicht gefunden"
        action={{ label: "Zur Kursübersicht", onClick: () => navigate({ name: "course" }) }}
      />
    );
  }
  const { lesson, topic, index } = found;
  const meta = getTopic(topic.topic);
  const ordered = allLessons(course);
  const position = ordered.findIndex((l) => l.id === lesson.id);
  const prev = ordered[position - 1];
  const next = ordered[position + 1];

  return (
    <Flex column gap="md" key={lesson.id}>
      <BreadCrumbs onNavigate={() => navigate({ name: "course" })}>
        <BreadCrumbs.Item target="course">Kurs</BreadCrumbs.Item>
        <BreadCrumbs.Item target="topic">{`${meta.id}. ${meta.title}`}</BreadCrumbs.Item>
      </BreadCrumbs>
      <Title size="1">{`${meta.id}.${index + 1} ${lesson.title}`}</Title>
      <Flex row gap="sm" wrap>
        <Pill>Vertiefungsgrad {lesson.depth}</Pill>
        <Pill icon="clock">ca. {lesson.minutes} Min.</Pill>
        {completed && <Pill icon="circle-check">abgeschlossen</Pill>}
      </Flex>

      <Title size="2" className="section-title">
        Lernziele
      </Title>
      <List>
        {lesson.goals.map((goal) => (
          <ListItem key={goal}>
            <RichText text={goal} />
          </ListItem>
        ))}
      </List>
      <Divider />

      {lesson.blocks.map((block, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: blocks are static content
        <ContentBlockView key={i} block={block} />
      ))}

      <SourceList sources={lesson.sources} />
      <Divider />

      {lesson.quiz.length > 0 && (
        <>
          <Title size="2" className="section-title">
            Kontrollfragen
          </Title>
          <Text>
            Wie in der Prüfung können keine, eine, mehrere oder alle Aussagen richtig sein.
          </Text>
          <Quiz
            questions={lesson.quiz}
            onAnswer={(q, ok) => recordAnswer(q.id, ok)}
            onFinish={(correct, total) => {
              recordQuiz(lesson.id, correct, total);
              completeLesson(lesson.id);
            }}
          />
          <Divider />
        </>
      )}

      <Flex row gap="sm" justify="space-between" wrap>
        {prev ? (
          <Button.Outlined
            iconLeft="arrow-left"
            onClick={() => navigate({ name: "lesson", lessonId: prev.id })}
          >
            Vorherige Lektion
          </Button.Outlined>
        ) : (
          <span />
        )}
        {!completed && (
          <Button.Outlined onClick={() => completeLesson(lesson.id)}>
            Als gelesen markieren
          </Button.Outlined>
        )}
        {next && (
          <Button
            iconRight="arrow-right"
            onClick={() => navigate({ name: "lesson", lessonId: next.id })}
          >
            Nächste Lektion
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
