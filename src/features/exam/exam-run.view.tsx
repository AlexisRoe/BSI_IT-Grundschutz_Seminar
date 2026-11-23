import { useCallback, useEffect, useState } from "react";
import { Loading } from "@/components/loading.component";
import { EXAM_TIMER_TICK_MS } from "@/config/exam.config";
import { QuestionCard } from "@/features/quiz/question-card.component";
import { useCourse } from "@/hooks/course.hook";
import { navigate } from "@/hooks/hash-route.hook";
import { useNow } from "@/hooks/now.hook";
import { useExamStore } from "@/stores/exam.store";
import { useProgressStore } from "@/stores/progress.store";
import { Button, Flex, Modal, Pill, State, Text, Title } from "@/ui";
import { minutesLeft } from "./exam.utils";
import { examQuestions, finishExam } from "./exam-session.utils";

/** The running exam: one question at a time, no feedback, auto-submit at the deadline. */
export function ExamRunView() {
  const course = useCourse();
  const active = useExamStore((s) => s.active);
  const { toggleOption, toggleFlag, goTo, clear } = useExamStore.getState();
  const addExam = useProgressStore((s) => s.addExam);
  const now = useNow(EXAM_TIMER_TICK_MS);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const submit = useCallback(
    (timedOut: boolean) => {
      if (!course || !active) return;
      const record = finishExam(active, course.pool, Date.now(), timedOut);
      addExam(record);
      clear();
      navigate({ name: "exam-result", examId: record.id });
    },
    [course, active, addExam, clear],
  );

  const expired = active !== null && now >= active.deadline;
  useEffect(() => {
    if (expired) submit(true);
  }, [expired, submit]);

  if (!active) {
    return (
      <State.Empty
        title="Keine laufende Simulation"
        action={{ label: "Zur Prüfungssimulation", onClick: () => navigate({ name: "exam" }) }}
      />
    );
  }
  if (!course) return <Loading />;

  const questions = examQuestions(active, course.pool);
  const question = questions[active.current];
  if (!question) return <Loading />;
  const answered = questions.filter((q) => (active.answers[q.id] ?? []).length > 0).length;
  const flagged = active.flagged.includes(question.id);

  return (
    <Flex column gap="md">
      <Flex row gap="sm" justify="space-between" align="center" wrap>
        <Title size="1">Prüfungssimulation</Title>
        <Pill icon="clock">{`noch ${minutesLeft(active.deadline, now)} Min.`}</Pill>
      </Flex>
      <Text>{`${answered} von ${questions.length} Fragen mit Kreuz · ohne Kreuz gilt „keine Aussage richtig“`}</Text>

      <QuestionCard
        question={question}
        caption={`Frage ${active.current + 1} von ${questions.length}${flagged ? " · markiert" : ""}`}
        selected={active.answers[question.id] ?? []}
        onToggle={(i) => toggleOption(question.id, i)}
      />

      <Flex row gap="sm" justify="space-between" wrap>
        <Button.Outlined
          iconLeft="arrow-left"
          disabled={active.current === 0}
          onClick={() => goTo(active.current - 1)}
        >
          Zurück
        </Button.Outlined>
        <Button.Outlined iconLeft="star" onClick={() => toggleFlag(question.id)}>
          {flagged ? "Markierung entfernen" : "Markieren"}
        </Button.Outlined>
        {active.current + 1 < questions.length ? (
          <Button iconRight="arrow-right" onClick={() => goTo(active.current + 1)}>
            Weiter
          </Button>
        ) : (
          <Button onClick={() => setConfirmOpen(true)}>Abgeben</Button>
        )}
      </Flex>

      <Title size="2">Übersicht</Title>
      <div className="question-grid">
        {questions.map((q, i) => {
          const mark = `${active.answers[q.id]?.length ? "●" : "○"}${active.flagged.includes(q.id) ? "★" : ""}`;
          const label = `${i + 1} ${mark}`;
          return i === active.current ? (
            <Button key={q.id} size="sm" onClick={() => goTo(i)}>
              {label}
            </Button>
          ) : (
            <Button.Outlined key={q.id} size="sm" onClick={() => goTo(i)}>
              {label}
            </Button.Outlined>
          );
        })}
      </div>
      <Text>● Kreuz gesetzt · ○ kein Kreuz · ★ markiert</Text>
      <Button.Outlined onClick={() => setConfirmOpen(true)}>Prüfung abgeben</Button.Outlined>

      <Modal
        open={confirmOpen}
        title="Prüfung abgeben?"
        onClosed={() => setConfirmOpen(false)}
        onAccept={() => submit(false)}
      >
        <Text>
          {`${answered} von ${questions.length} Fragen haben mindestens ein Kreuz. Fragen ohne Kreuz werden als „keine Aussage richtig“ gewertet. Nach der Abgabe sind keine Änderungen mehr möglich.`}
        </Text>
        <Modal.CloseButton>Weiter bearbeiten</Modal.CloseButton>
        <Modal.ActionButton>Abgeben</Modal.ActionButton>
      </Modal>
    </Flex>
  );
}
