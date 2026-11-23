import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { TopicScore } from "@/features/exam/exam.utils";

/** Result of a lesson quiz or a lab. */
export interface ScoreEntry {
  correct: number;
  total: number;
  /** ISO timestamp. */
  at: string;
}

/** Answer statistics of one question (quiz, training or exam). */
export interface QuestionStat {
  seen: number;
  correct: number;
  lastCorrect: boolean;
}

/** A finished exam simulation. */
export interface ExamRecord {
  id: string;
  startedAt: string;
  finishedAt: string;
  questionIds: string[];
  answers: Record<string, number[]>;
  score: number;
  total: number;
  passed: boolean;
  byTopic: TopicScore;
  /** True when the time ran out before the exam was handed in. */
  timedOut: boolean;
}

/** Everything persisted about the learner's progress. */
export interface ProgressData {
  lessons: Record<string, { completedAt: string }>;
  quizzes: Record<string, ScoreEntry>;
  labs: Record<string, ScoreEntry>;
  questions: Record<string, QuestionStat>;
  exams: ExamRecord[];
}

interface ProgressActions {
  completeLesson: (lessonId: string) => void;
  recordQuiz: (lessonId: string, correct: number, total: number) => void;
  recordLab: (labId: string, correct: number, total: number) => void;
  recordAnswer: (questionId: string, correct: boolean) => void;
  addExam: (record: ExamRecord) => void;
  replaceAll: (data: ProgressData) => void;
  reset: () => void;
}

/** Progress state plus its actions. */
export type ProgressState = ProgressData & ProgressActions;

/** localStorage key of the progress store. */
export const PROGRESS_STORAGE_KEY = "gs-praktiker-progress";

/** Current schema version of the persisted progress. */
export const PROGRESS_VERSION = 1;

/** A fresh, empty progress state. */
export function emptyProgress(): ProgressData {
  return { lessons: {}, quizzes: {}, labs: {}, questions: {}, exams: [] };
}

const now = () => new Date().toISOString();

/** Learning progress, persisted locally in the browser only. */
export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      ...emptyProgress(),
      completeLesson: (lessonId) =>
        set((s) =>
          s.lessons[lessonId]
            ? s
            : { lessons: { ...s.lessons, [lessonId]: { completedAt: now() } } },
        ),
      recordQuiz: (lessonId, correct, total) =>
        set((s) => ({ quizzes: { ...s.quizzes, [lessonId]: { correct, total, at: now() } } })),
      recordLab: (labId, correct, total) =>
        set((s) => ({ labs: { ...s.labs, [labId]: { correct, total, at: now() } } })),
      recordAnswer: (questionId, correct) =>
        set((s) => {
          const prev = s.questions[questionId] ?? { seen: 0, correct: 0, lastCorrect: false };
          return {
            questions: {
              ...s.questions,
              [questionId]: {
                seen: prev.seen + 1,
                correct: prev.correct + (correct ? 1 : 0),
                lastCorrect: correct,
              },
            },
          };
        }),
      addExam: (record) => set((s) => ({ exams: [...s.exams, record] })),
      replaceAll: (data) => set({ ...emptyProgress(), ...data }),
      reset: () => set(emptyProgress()),
    }),
    {
      name: PROGRESS_STORAGE_KEY,
      version: PROGRESS_VERSION,
      storage: createJSONStorage(() => localStorage),
      partialize: ({ lessons, quizzes, labs, questions, exams }) => ({
        lessons,
        quizzes,
        labs,
        questions,
        exams,
      }),
    },
  ),
);

/** Snapshot of the persisted part of the progress state. */
export function selectProgressData(state: ProgressState): ProgressData {
  const { lessons, quizzes, labs, questions, exams } = state;
  return { lessons, quizzes, labs, questions, exams };
}
