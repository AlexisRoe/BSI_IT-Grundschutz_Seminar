import type { Lab } from "../course.types";

/** Labor Themenfeld 12: Aufbau eines IT-Grundschutz-Profils. */
export const lab: Lab = {
  id: "profil",
  topic: 12,
  title: "Ein IT-Grundschutz-Profil gliedern",
  scenario: [
    "Ein (fiktiver) Arbeitskreis von Präzisionsfertigern möchte ein IT-Grundschutz-Profil „Vernetzte Fertigung im Mittelstand“ erstellen und beim BSI registrieren lassen.",
  ],
  tasks: [
    {
      kind: "order",
      id: "gliederung",
      prompt:
        "Bringen Sie die Kapitel des Profils in die Reihenfolge nach der Strukturbeschreibung des BSI.",
      items: [
        { id: "g1", label: "Formale Aspekte" },
        { id: "g2", label: "Management Summary" },
        { id: "g3", label: "Geltungsbereich" },
        { id: "g4", label: "Zu erfüllende Anforderungen und umzusetzende Maßnahmen" },
        { id: "g5", label: "Restrisikobetrachtung/Risikobehandlung" },
        { id: "g6", label: "Anwendungshinweise" },
        { id: "g7", label: "Anhang" },
      ],
      explanation:
        "Reihenfolge nach Kapitel 2 der Strukturbeschreibung (dazwischen: unterstützende Informationen).",
    },
    {
      kind: "classify",
      id: "zuordnung",
      prompt: "In welchen Abschnitt des Profils gehört die Information?",
      categories: [
        { id: "formal", label: "Formale Aspekte" },
        { id: "scope", label: "Geltungsbereich / Abgrenzung" },
        { id: "anf", label: "Anforderungen und Maßnahmen" },
        { id: "anhang", label: "Anhang" },
      ],
      items: [
        {
          id: "i1",
          label: "Revisionszyklus: jährlich; Vertraulichkeit: TLP:CLEAR",
          answer: "formal",
          explanation: "Revisionszyklus und Vertraulichkeit sind formale Aspekte.",
        },
        {
          id: "i2",
          label: "Zugrunde gelegte Vorgehensweise: Standard-Absicherung; ISO 27001-kompatibel: ja",
          answer: "scope",
          explanation: "Vorgehensweise und Kompatibilität werden im Geltungsbereich beschrieben.",
        },
        {
          id: "i3",
          label: "IND.1: Alle Basis-Anforderungen müssen auf geeignete Weise erfüllt werden.",
          answer: "anf",
          explanation: "Umsetzungsvorgaben je Baustein gehören zu Anforderungen und Maßnahmen.",
        },
        {
          id: "i4",
          label: "Benutzerdefinierter Baustein „Werkzeugmaschinen-Fernwartung“",
          answer: "anhang",
          explanation: "Benutzerdefinierte Bausteine werden in den Anhang aufgenommen.",
        },
        {
          id: "i5",
          label:
            "Büro-Clients der Verwaltung werden nicht betrachtet, da für die Fertigung nicht wesentlich.",
          answer: "scope",
          explanation: "Nicht berücksichtigte Objekte werden bei der Abgrenzung begründet.",
        },
      ],
    },
  ],
  sources: [{ doc: "profil", section: "Kap. 2", page: 7 }],
};
