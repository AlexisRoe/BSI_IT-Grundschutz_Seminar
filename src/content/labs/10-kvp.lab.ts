import type { Lab } from "../course.types";
import { LAB_ORG } from "./lab-organisation.constants";

/** Labor Themenfeld 10: KVP, Reifegrad und Kennzahlen. */
export const lab: Lab = {
  id: "kvp",
  topic: 10,
  title: "PDCA, Reifegrad und Kennzahlen",
  scenario: [
    LAB_ORG.intro,
    "Ein Jahr nach Einführung des ISMS bereitet die ISB die erste Managementbewertung vor.",
  ],
  tasks: [
    {
      kind: "classify",
      id: "pdca",
      prompt: "Welcher PDCA-Phase ist die Aktivität zuzuordnen?",
      categories: [
        { id: "plan", label: "Plan" },
        { id: "do", label: "Do" },
        { id: "check", label: "Check" },
        { id: "act", label: "Act" },
      ],
      items: [
        {
          id: "a1",
          label: "Sicherheitsziele aus den Geschäftszielen ableiten",
          answer: "plan",
          explanation: "Ziele und Strategie werden in der Planungsphase festgelegt.",
        },
        {
          id: "a2",
          label: "Neue Passwortrichtlinie technisch einführen und schulen",
          answer: "do",
          explanation: "Umsetzung der Planung.",
        },
        {
          id: "a3",
          label: "Interne Audits und Auswertung der Patch-Kennzahl",
          answer: "check",
          explanation: "Erfolgskontrolle bzw. Überwachung der Zielerreichung.",
        },
        {
          id: "a4",
          label: "Erkannte Schwachstelle im Freigabeprozess sofort beheben",
          answer: "act",
          explanation: "Beseitigung erkannter Mängel bzw. Optimierung.",
        },
      ],
    },
    {
      kind: "classify",
      id: "reifegrad",
      prompt: "Welcher Reifegrad nach dem Beispielmodell im BSI-Standard 200-2 liegt vor?",
      categories: [
        { id: "1", label: "1 – geplant, nicht etabliert" },
        { id: "2", label: "2 – teilweise etabliert" },
        { id: "3", label: "3 – voll etabliert und dokumentiert" },
        { id: "4", label: "4 – zusätzlich regelmäßig auf Effektivität überprüft" },
        { id: "5", label: "5 – zusätzlich regelmäßig verbessert" },
      ],
      items: [
        {
          id: "r1",
          label:
            "Schicht ORP: Regelungen sind vollständig dokumentiert und gelebt, eine Wirksamkeitsprüfung gab es bisher nicht.",
          answer: "3",
          explanation:
            "Voll etabliert und dokumentiert, aber noch keine regelmäßige Effektivitätsprüfung.",
        },
        {
          id: "r2",
          label:
            "Schicht DER: Ein Konzept zur Vorfallbehandlung ist beschlossen, aber noch nicht eingeführt.",
          answer: "1",
          explanation: "Geplant, aber nicht etabliert.",
        },
        {
          id: "r3",
          label:
            "Schicht OPS: Backups sind etabliert, werden jährlich per Wiederherstellungstest überprüft und anhand der Ergebnisse verbessert.",
          answer: "5",
          explanation: "Etabliert, regelmäßig überprüft und regelmäßig verbessert.",
        },
        {
          id: "r4",
          label: "Schicht SYS: Härtung ist für Server umgesetzt, für Clients noch nicht.",
          answer: "2",
          explanation: "Zum Teil etabliert.",
        },
      ],
    },
  ],
  sources: [
    { doc: "200-1", section: "Kap. 3.2.2", page: 18 },
    { doc: "200-2", section: "Kap. 10.1.2", page: 166 },
  ],
};
