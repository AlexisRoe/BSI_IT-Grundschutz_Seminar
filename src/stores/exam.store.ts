import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { EXAM_DURATION_MIN } from "@/config/exam.config";

/** An exam simulation in progress. */
export interface ActiveExam {
  id: string;
  questionIds: string[];
  answers: Record<string, number[]>;
  flagged: string[];
  /** Epoch milliseconds. */
  startedAt: number;
  /** Wall-clock end; time keeps running while the app is closed (§3). */
  deadline: number;
  current: number;
}

interface ExamState {
  active: ActiveExam | null;
  start: (questionIds: string[], now?: number) => void;
  toggleOption: (questionId: string, option: number) => void;
  toggleFlag: (questionId: string) => void;
  goTo: (index: number) => void;
  clear: () => void;
}

/** localStorage key of the running exam. */
export const EXAM_STORAGE_KEY = "gs-praktiker-exam";

/** The running exam simulation; survives reloads. */
export const useExamStore = create<ExamState>()(
  persist(
    (set) => ({
      active: null,
      start: (questionIds, now = Date.now()) =>
        set({
          active: {
            id: `exam-${now}`,
            questionIds,
            answers: {},
            flagged: [],
            startedAt: now,
            deadline: now + EXAM_DURATION_MIN * 60_000,
            current: 0,
          },
        }),
      toggleOption: (questionId, option) =>
        set(({ active }) => {
          if (!active) return {};
          const selected = active.answers[questionId] ?? [];
          const next = selected.includes(option)
            ? selected.filter((o) => o !== option)
            : [...selected, option].sort();
          return { active: { ...active, answers: { ...active.answers, [questionId]: next } } };
        }),
      toggleFlag: (questionId) =>
        set(({ active }) => {
          if (!active) return {};
          const flagged = active.flagged.includes(questionId)
            ? active.flagged.filter((id) => id !== questionId)
            : [...active.flagged, questionId];
          return { active: { ...active, flagged } };
        }),
      goTo: (index) =>
        set(({ active }) => {
          if (!active) return {};
          const current = Math.min(Math.max(index, 0), active.questionIds.length - 1);
          return { active: { ...active, current } };
        }),
      clear: () => set({ active: null }),
    }),
    {
      name: EXAM_STORAGE_KEY,
      version: 1,
      storage: createJSONStorage(() => localStorage),
      partialize: ({ active }) => ({ active }),
    },
  ),
);
