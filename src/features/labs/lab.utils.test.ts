import type { LabTask } from "@/content/course.types";
import { maxScore, scoreClassify, scoreOrder } from "./lab.utils";

const classify: Extract<LabTask, { kind: "classify" }> = {
  kind: "classify",
  id: "c",
  prompt: "",
  categories: [
    { id: "v", label: "Vertraulichkeit" },
    { id: "i", label: "Integrität" },
  ],
  items: [
    { id: "a", label: "A", answer: "v", explanation: "" },
    { id: "b", label: "B", answer: "i", explanation: "" },
  ],
};

const order: Extract<LabTask, { kind: "order" }> = {
  kind: "order",
  id: "o",
  prompt: "",
  explanation: "",
  items: ["1", "2", "3", "4"].map((id) => ({ id, label: id })),
};

describe("lab scoring", () => {
  it("scores classification per item", () => {
    expect(scoreClassify(classify, { a: "v", b: "v" })).toBe(1);
    expect(maxScore(classify)).toBe(2);
  });

  it("scores order per position", () => {
    expect(scoreOrder(order, ["1", "2", "3", "4"])).toBe(4);
    expect(scoreOrder(order, ["2", "1", "3", "4"])).toBe(2);
  });
});
