import type { Lab, Lesson, Question, TopicContent, TopicId, TopicQuestions } from "./course.types";

/** Everything the course offers, loaded lazily in one go. */
export interface Course {
  topics: TopicContent[];
  /** Exam pool (never contains lesson quiz questions). */
  pool: Question[];
  labs: Lab[];
}

const topicModules = import.meta.glob<TopicContent>("./topics/*.content.ts", { import: "topic" });
const questionModules = import.meta.glob<TopicQuestions>("./questions/*.questions.ts", {
  import: "pool",
});
const labModules = import.meta.glob<Lab>("./labs/*.lab.ts", { import: "lab" });

async function loadAll<T>(modules: Record<string, () => Promise<T>>): Promise<T[]> {
  return Promise.all(Object.values(modules).map((load) => load()));
}

/** Builds a course from loaded parts, sorted by topic. */
export function assembleCourse(
  topics: TopicContent[],
  pools: TopicQuestions[],
  labs: Lab[],
): Course {
  return {
    topics: [...topics].sort((a, b) => a.topic - b.topic),
    pool: [...pools].sort((a, b) => a.topic - b.topic).flatMap((p) => p.questions),
    labs: [...labs].sort((a, b) => a.topic - b.topic || a.id.localeCompare(b.id)),
  };
}

let cache: Promise<Course> | undefined;

/** Loads all lessons, the exam pool and the labs; cached after the first call. */
export function loadCourse(): Promise<Course> {
  cache ??= Promise.all([
    loadAll(topicModules),
    loadAll(questionModules),
    loadAll(labModules),
  ]).then(([topics, pools, labs]) => assembleCourse(topics, pools, labs));
  return cache;
}

/** Finds a lesson and its topic by lesson id. */
export function findLesson(
  course: Course,
  lessonId: string,
): { lesson: Lesson; topic: TopicContent; index: number } | undefined {
  for (const topic of course.topics) {
    const index = topic.lessons.findIndex((l) => l.id === lessonId);
    const lesson = topic.lessons[index];
    if (lesson) return { lesson, topic, index };
  }
  return undefined;
}

/** All lessons in course order. */
export function allLessons(course: Course): Lesson[] {
  return course.topics.flatMap((t) => t.lessons);
}

/** Lessons of one topic (empty when the topic has no content yet). */
export function lessonsOf(course: Course, topic: TopicId): Lesson[] {
  return course.topics.find((t) => t.topic === topic)?.lessons ?? [];
}
