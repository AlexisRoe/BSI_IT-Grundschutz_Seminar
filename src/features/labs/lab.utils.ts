import type { LabTask } from "@/content/course.types";

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
