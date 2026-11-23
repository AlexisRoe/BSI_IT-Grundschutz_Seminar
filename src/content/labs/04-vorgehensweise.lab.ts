import type { Lab } from "../course.types";

/** Labor Themenfeld 4: Wahl der Vorgehensweise. */
export const lab: Lab = {
  id: "vorgehensweise",
  topic: 4,
  title: "Die passende Vorgehensweise wählen",
  scenario: [
    "Sie beraten intern verschiedene fiktive Institutionen bei der Entscheidung für eine IT-Grundschutz-Vorgehensweise. Ordnen Sie jeder Ausgangslage die Vorgehensweise zu, die nach den Kriterien des BSI-Standards 200-2 am besten passt.",
  ],
  tasks: [
    {
      kind: "classify",
      id: "auswahl",
      prompt: "Welche Vorgehensweise ist jeweils der geeignete **Einstieg**?",
      categories: [
        { id: "basis", label: "Basis-Absicherung" },
        { id: "kern", label: "Kern-Absicherung" },
        { id: "standard", label: "Standard-Absicherung" },
      ],
      items: [
        {
          id: "v1",
          label: "Handwerksbetrieb, 25 Beschäftigte",
          detail:
            "Bisher keine Sicherheitsmaßnahmen dokumentiert, normales Sicherheitsniveau, keine existenzkritischen Daten, kleinere Vorfälle verkraftbar.",
          answer: "basis",
          explanation:
            "Niedriger Reifegrad, normales Niveau, keine Kronjuwelen – klassischer Fall für die Basis-Absicherung.",
        },
        {
          id: "v2",
          label: "Start-up mit patentierter Rezeptur",
          detail:
            "Ein einziger Entwicklungsprozess ist existenzkritisch und klar abgrenzbar; sonst sind kleinere Vorfälle akzeptabel.",
          answer: "kern",
          explanation:
            "Wenige, klar abgrenzbare Prozesse mit Kronjuwelen sprechen für die Kern-Absicherung.",
        },
        {
          id: "v3",
          label: "Landesbehörde",
          detail:
            "Arbeitet seit Jahren mit IT-Grundschutz, Sicherheitskonzepte liegen vor; wahrnehmbare Beeinträchtigungen der Aufgabenerfüllung sind nicht akzeptabel.",
          answer: "standard",
          explanation:
            "Ausreichender Reifegrad und geringe Toleranz für Vorfälle sprechen für den direkten Einstieg in die Standard-Absicherung.",
        },
        {
          id: "v4",
          label: "Mittelständler mit Ziel ISO 27001-Zertifizierung der gesamten Institution",
          detail:
            "Bereits ISO 27001-orientierte Konzepte vorhanden, kein vordringlicher Einzelprozess.",
          answer: "standard",
          explanation:
            "Für die Zertifizierung des gesamten Informationsverbunds ist die Standard-Absicherung die Grundlage.",
        },
      ],
    },
    {
      kind: "classify",
      id: "vornachteile",
      prompt: "Zu welcher Vorgehensweise gehört das jeweilige Pro- bzw. Contra-Argument?",
      categories: [
        { id: "basis", label: "Basis-Absicherung" },
        { id: "kern", label: "Kern-Absicherung" },
        { id: "standard", label: "Standard-Absicherung" },
      ],
      items: [
        {
          id: "p1",
          label: "Gleichmäßiges, mit anderen Institutionen vergleichbares Sicherheitsniveau",
          answer: "standard",
          explanation: "Ein Vorteil der Standard-Absicherung.",
        },
        {
          id: "p2",
          label: "Eine Zertifizierung nach ISO 27001 ist auf dieser Basis nicht möglich",
          answer: "basis",
          explanation: "Ein Nachteil der Basis-Absicherung.",
        },
        {
          id: "p3",
          label: "Kumulierte Risiken könnten übersehen werden",
          answer: "kern",
          explanation:
            "Ein Nachteil der Kern-Absicherung, weil nicht kritische Prozesse zunächst unbeachtet bleiben.",
        },
        {
          id: "p4",
          label: "Bei niedrigem Reifegrad höherer Aufwand als bei den anderen Vorgehensweisen",
          answer: "standard",
          explanation: "Der Nachteil der Standard-Absicherung.",
        },
      ],
    },
  ],
  sources: [{ doc: "200-2", section: "Kap. 3.3 Entscheidung für Vorgehensweise", page: 28 }],
};
