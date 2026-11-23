import type { Question, TopicId } from "@/content/course.types";

/** Builds a pool question; `correct` lists the indexes of correct options. */
export function makeQuestion(id: string, topic: TopicId, correct: number[] = [0]): Question {
  return {
    id,
    topic,
    level: "basis",
    stem: `Frage ${id}`,
    options: [0, 1, 2, 3].map((i) => ({ text: `Aussage ${i}`, correct: correct.includes(i) })) as [
      Question["options"][0],
      Question["options"][1],
      Question["options"][2],
      Question["options"][3],
    ],
    explanation: "Erklärung",
    source: { doc: "200-2", section: "8.2" },
  };
}

/** Deterministic pseudo-random generator for reproducible shuffles. */
export function seededRng(seed = 1): () => number {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}
