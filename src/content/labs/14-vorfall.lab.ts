import type { Lab } from "../course.types";
import { LAB_ORG } from "./lab-organisation.constants";

/** Labor Themenfeld 14: Sicherheitsvorfall behandeln. */
export const lab: Lab = {
  id: "vorfall",
  topic: 14,
  title: "Ransomware auf dem Fileserver",
  scenario: [
    LAB_ORG.intro,
    "Montag, 7:30 Uhr: Der Service Desk meldet, dass auf dem Fileserver der Verwaltung Dateien unlesbar sind und eine Lösegeldforderung erscheint. Die ISB ruft das Sicherheitsvorfall-Team zusammen.",
  ],
  tasks: [
    {
      kind: "order",
      id: "wiederherstellung",
      prompt:
        "Bringen Sie die Schritte zur Wiederherstellung nach DER.2.1.A6 in die richtige Reihenfolge.",
      items: [
        { id: "w1", label: "Fileserver vom Netz nehmen" },
        { id: "w2", label: "Daten sichern, die Aufschluss über Art und Ursache geben" },
        { id: "w3", label: "Betriebssystem und Applikationen auf Veränderungen untersuchen" },
        {
          id: "w4",
          label: "Daten aus nachweislich nicht betroffener Sicherung einspielen, inkl. Patches",
        },
        { id: "w5", label: "Alle Zugangsdaten ändern" },
        { id: "w6", label: "Funktionstests mit den Benutzenden" },
        { id: "w7", label: "Server inklusive Netzübergängen gezielt überwachen" },
      ],
      explanation: "Reihenfolge nach DER.2.1.A6.",
    },
    {
      kind: "classify",
      id: "zustaendig",
      prompt: "Wer ist laut DER.2.1 zuständig bzw. einzubeziehen?",
      categories: [
        { id: "itl", label: "Leitung IT-Betrieb" },
        { id: "leitung", label: "Institutionsleitung" },
        { id: "dsb", label: "Datenschutzbeauftragte" },
        { id: "isb", label: "ISB" },
      ],
      items: [
        {
          id: "z1",
          label: "Freigabe der Maßnahmen zur Behebung",
          answer: "itl",
          explanation: "DER.2.1.A5.",
        },
        {
          id: "z2",
          label: "Prüfung, ob personenbezogene Daten betroffen sind und Meldepflichten bestehen",
          answer: "dsb",
          explanation:
            "DER.2.1.A4 verlangt die Prüfung, ob die Datenschutzbeauftragten einzubeziehen sind.",
        },
        {
          id: "z3",
          label: "Umgehende Information wegen sofortigem Handlungsbedarf",
          answer: "leitung",
          explanation:
            "DER.2.1.A17: Bei sofortigem Handlungsbedarf MUSS die Institutionsleitung umgehend informiert werden.",
        },
        {
          id: "z4",
          label: "Grundsätzliche Zuständigkeit für den Baustein DER.2.1",
          answer: "isb",
          explanation: "Grundsätzlich zuständig ist der oder die ISB.",
        },
      ],
    },
  ],
  sources: [{ doc: "kompendium", section: "DER.2.1 Behandlung von Sicherheitsvorfällen" }],
};
