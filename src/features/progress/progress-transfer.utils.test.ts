import { emptyProgress } from "@/stores/progress.store";
import { createExport, EXPORT_APP_ID, parseExport } from "./progress-transfer.utils";

describe("progress export/import", () => {
  it("round-trips an export", () => {
    const data = {
      ...emptyProgress(),
      lessons: { "t01-l01": { completedAt: "2026-11-23T10:00:00.000Z" } },
      labs: { lab: { correct: 3, total: 4, at: "2026-11-23T10:00:00.000Z" } },
    };
    const parsed = parseExport(JSON.parse(JSON.stringify(createExport(data))));
    expect(parsed).toEqual(data);
  });

  it.each([
    null,
    "text",
    { app: "other", version: 1, data: emptyProgress() },
    { app: EXPORT_APP_ID, version: 99, data: emptyProgress() },
    { app: EXPORT_APP_ID, version: 1, data: { ...emptyProgress(), exams: [{ id: 1 }] } },
    { app: EXPORT_APP_ID, version: 1, data: { ...emptyProgress(), labs: { x: { correct: "1" } } } },
  ])("rejects invalid file %#", (raw) => {
    expect(parseExport(raw)).toBeNull();
  });
});
