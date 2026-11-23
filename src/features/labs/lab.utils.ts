import type { LabItem, LabTask } from "@/content/course.types";

/** Number of correctly classified items. */
export function scoreClassify(
  task: Extract<LabTask, { kind: "classify" }>,
  answers: Readonly<Record<string, string>>,
): number {
  return task.items.filter((item) => answers[item.id] === item.answer).length;
}

/** Number of items placed at their correct position. */
export function scoreOrder(
  task: Extract<LabTask, { kind: "order" }>,
  orderIds: readonly string[],
): number {
  return task.items.filter((item, i) => orderIds[i] === item.id).length;
}

/** Maximum points of a task: one per item. */
export function maxScore(task: LabTask): number {
  return task.items.length;
}

/** Moves the element at `from` by `delta` positions; returns a new array. */
export function move<T>(items: readonly T[], from: number, delta: number): T[] {
  const to = from + delta;
  if (to < 0 || to >= items.length) return [...items];
  const copy = [...items];
  const [moved] = copy.splice(from, 1);
  copy.splice(to, 0, moved as T);
  return copy;
}

/** Deterministic, never-identity scramble so the start order is not already the solution. */
export function scramble(items: readonly LabItem[]): LabItem[] {
  if (items.length < 2) return [...items];
  const odd = items.filter((_, i) => i % 2 === 1);
  const even = items.filter((_, i) => i % 2 === 0);
  return [...odd.reverse(), ...even];
}
