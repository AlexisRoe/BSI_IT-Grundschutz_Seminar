import type { Lab } from "../course.types";
import { LAB_ORG } from "./lab-organisation.constants";

/** Labor Themenfeld 3: Rollen und Leitlinie. */
export const lab: Lab = {
  id: "rollen",
  topic: 3,
  title: "Rollen der IS-Organisation und Leitlinie",
  scenario: [
    LAB_ORG.intro,
    "Die Geschäftsführung hat beschlossen, ein ISMS nach IT-Grundschutz aufzubauen. Es gibt eine ISB, ein kleines IS-Management-Team, einen ICS-ISB für die Fertigung und einen externen Datenschutzbeauftragten.",
  ],
  tasks: [
    {
      kind: "classify",
      id: "aufgaben",
      prompt: "Wer ist laut BSI-Standard 200-2 für die jeweilige Aufgabe zuständig?",
      categories: [
        { id: "leitung", label: "Geschäftsführung (Leitungsebene)" },
        { id: "isb", label: "ISB" },
        { id: "imt", label: "IS-Management-Team" },
        { id: "icsisb", label: "ICS-ISB" },
      ],
      items: [
        {
          id: "a1",
          label:
            "Gesamtverantwortung für die Informationssicherheit tragen und Ressourcen bereitstellen",
          answer: "leitung",
          explanation: "Die Verantwortung verbleibt immer bei der Leitungsebene.",
        },
        {
          id: "a2",
          label: "Einen Sicherheitsvorfall auf einem Fileserver untersuchen",
          answer: "isb",
          explanation: "Sicherheitsvorfälle zu untersuchen gehört zu den Aufgaben des ISB.",
        },
        {
          id: "a3",
          label:
            "Prüfen, ob die geplanten Maßnahmen wie beabsichtigt funktionieren und wirksam sind",
          answer: "imt",
          explanation: "Eine typische Kontrollaufgabe des IS-Management-Teams.",
        },
        {
          id: "a4",
          label:
            "Eine Sicherheitsrichtlinie für das SCADA-System unter Berücksichtigung von Safety erstellen",
          answer: "icsisb",
          explanation:
            "Der ICS-ISB erstellt Richtlinien für den ICS-Bereich unter Einbeziehung von Safety und Security.",
        },
        {
          id: "a5",
          label: "Die Leitlinie zur Informationssicherheit formell in Kraft setzen",
          answer: "leitung",
          explanation: "Die Leitung muss der Leitlinie formell zustimmen.",
        },
        {
          id: "a6",
          label:
            "Der Geschäftsführung regelmäßig über den Status quo der Informationssicherheit berichten",
          answer: "isb",
          explanation: "Berichten an Leitung und IS-Management-Team ist ISB-Aufgabe.",
        },
      ],
    },
    {
      kind: "order",
      id: "leitlinie",
      prompt:
        "Bringen Sie die Schritte zur Erstellung der Sicherheitsleitlinie in die Reihenfolge nach BSI-Standard 200-2.",
      items: [
        { id: "l1", label: "Auftrag der Leitungsebene einholen" },
        { id: "l2", label: "Entwicklungsgruppe einberufen" },
        { id: "l3", label: "Geltungsbereich und Inhalte festlegen" },
        { id: "l4", label: "Inkraftsetzung durch die Leitungsebene veranlassen" },
        { id: "l5", label: "Leitlinie bekannt geben" },
        { id: "l6", label: "Regelmäßig überprüfen und aktualisieren" },
      ],
      explanation:
        "Die Reihenfolge entspricht den Aktionspunkten zu Kapitel 3.4 im BSI-Standard 200-2.",
    },
  ],
  sources: [{ doc: "200-2", section: "Kap. 3.4 und 4.4 bis 4.7", page: 32 }],
};
