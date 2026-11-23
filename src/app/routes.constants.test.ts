import { parseHash, type Route, toHash } from "./routes.constants";

describe("hash routes", () => {
  const routes: Route[] = [
    { name: "dashboard" },
    { name: "course" },
    { name: "lesson", lessonId: "t06-l02" },
    { name: "labs" },
    { name: "lab", labId: "schutzbedarf" },
    { name: "training" },
    { name: "exam" },
    { name: "exam-run" },
    { name: "exam-result", examId: "exam-123" },
    { name: "progress" },
    { name: "glossary" },
    { name: "settings" },
  ];

  it.each(routes)("round-trips $name", (route) => {
    expect(parseHash(toHash(route))).toEqual(route);
  });

  it("parses empty and unknown hashes", () => {
    expect(parseHash("")).toEqual({ name: "dashboard" });
    expect(parseHash("#/gibt/es/nicht")).toEqual({ name: "not-found" });
    expect(toHash({ name: "not-found" })).toBe("#/");
  });
});
