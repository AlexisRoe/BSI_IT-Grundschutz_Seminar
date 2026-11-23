import type { Lab } from "../course.types";
import { LAB_ORG } from "./lab-organisation.constants";

/** Labor Themenfeld 11: Ablauf der Zertifizierung. */
export const lab: Lab = {
  id: "zertifizierung",
  topic: 11,
  title: "Der Weg zum Zertifikat",
  scenario: [
    LAB_ORG.intro,
    "Nach zwei Jahren Standard-Absicherung möchte die Geschäftsführung ein ISO 27001-Zertifikat auf der Basis von IT-Grundschutz.",
  ],
  tasks: [
    {
      kind: "order",
      id: "ablauf",
      prompt: "Bringen Sie die Schritte der Erstzertifizierung in die richtige Reihenfolge.",
      items: [
        { id: "z1", label: "Referenzdokumente fertigstellen und Auditteam beauftragen" },
        { id: "z2", label: "Zertifizierungsantrag mit Unabhängigkeitserklärungen einreichen" },
        { id: "z3", label: "Verfahrenseröffnung und Vergabe der Zertifizierungskennung" },
        { id: "z4", label: "Phase 1: Dokumentenprüfung" },
        { id: "z5", label: "Phase 2: Umsetzungsprüfung vor Ort" },
        { id: "z6", label: "Auditbericht verschlüsselt an die Zertifizierungsstelle" },
        { id: "z7", label: "Prüfung des Auditberichts und Zertifikatserteilung" },
      ],
      explanation:
        "Das Audit darf erst nach Verfahrenseröffnung beginnen; die Zertifizierungsstelle entscheidet auf Basis des Auditberichts.",
    },
    {
      kind: "classify",
      id: "rollen",
      prompt: "Wer ist für die jeweilige Aufgabe zuständig?",
      categories: [
        { id: "antrag", label: "Antragsteller" },
        { id: "audit", label: "Auditteamleiter" },
        { id: "zst", label: "Zertifizierungsstelle" },
      ],
      items: [
        {
          id: "a1",
          label: "Referenzdokumente bereitstellen und bei der Vor-Ort-Prüfung unterstützen",
          answer: "antrag",
          explanation: "Der Antragsteller initiiert und unterstützt das Verfahren.",
        },
        {
          id: "a2",
          label: "Positives oder negatives Votum zum Audit abgeben",
          answer: "audit",
          explanation:
            "Der Auditteamleiter ist für das Ergebnis des Zertifizierungsaudits verantwortlich.",
        },
        {
          id: "a3",
          label: "Unabhängigkeitserklärungen freigeben",
          answer: "zst",
          explanation:
            "Ohne Freigabe durch die Zertifizierungsstelle darf ein Auditteammitglied nicht eingesetzt werden.",
        },
        {
          id: "a4",
          label: "Fachexperten hinzuziehen, wenn Spezialwissen fehlt",
          answer: "audit",
          explanation: "Der Auditteamleiter muss Fachexperten hinzuziehen.",
        },
        {
          id: "a5",
          label: "Zertifikat aussetzen, wenn das Überwachungsaudit nicht fristgerecht stattfindet",
          answer: "zst",
          explanation: "Aussetzung und Zurückziehung sind Sache der Zertifizierungsstelle.",
        },
      ],
    },
  ],
  sources: [{ doc: "zert", section: "Kap. 2 und 3", page: 8 }],
};
