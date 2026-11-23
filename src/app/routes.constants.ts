/** Every screen of the app; parsed from and serialised to the URL hash. */
export type Route =
  | { name: "dashboard" }
  | { name: "course" }
  | { name: "lesson"; lessonId: string }
  | { name: "labs" }
  | { name: "lab"; labId: string }
  | { name: "training" }
  | { name: "exam" }
  | { name: "exam-run" }
  | { name: "exam-result"; examId: string }
  | { name: "progress" }
  | { name: "glossary" }
  | { name: "settings" }
  | { name: "not-found" };

const STATIC: Record<string, Route> = {
  "": { name: "dashboard" },
  kurs: { name: "course" },
  labor: { name: "labs" },
  training: { name: "training" },
  pruefung: { name: "exam" },
  "pruefung/laufend": { name: "exam-run" },
  fortschritt: { name: "progress" },
  glossar: { name: "glossary" },
  einstellungen: { name: "settings" },
};

/** Parses a location hash such as `#/kurs/t06-l01` into a route. */
export function parseHash(hash: string): Route {
  const path = hash.replace(/^#\/?/, "").replace(/\/$/, "");
  const fixed = STATIC[path];
  if (fixed) return fixed;
  const [first, second, third] = path.split("/").map(decodeURIComponent);
  if (first === "kurs" && second && !third) return { name: "lesson", lessonId: second };
  if (first === "labor" && second && !third) return { name: "lab", labId: second };
  if (first === "pruefung" && second === "ergebnis" && third) {
    return { name: "exam-result", examId: third };
  }
  return { name: "not-found" };
}

/** Builds the hash for a route, e.g. `#/kurs/t06-l01`. */
export function toHash(route: Route): string {
  switch (route.name) {
    case "dashboard":
    case "not-found":
      return "#/";
    case "course":
      return "#/kurs";
    case "lesson":
      return `#/kurs/${encodeURIComponent(route.lessonId)}`;
    case "labs":
      return "#/labor";
    case "lab":
      return `#/labor/${encodeURIComponent(route.labId)}`;
    case "training":
      return "#/training";
    case "exam":
      return "#/pruefung";
    case "exam-run":
      return "#/pruefung/laufend";
    case "exam-result":
      return `#/pruefung/ergebnis/${encodeURIComponent(route.examId)}`;
    case "progress":
      return "#/fortschritt";
    case "glossary":
      return "#/glossar";
    case "settings":
      return "#/einstellungen";
  }
}
