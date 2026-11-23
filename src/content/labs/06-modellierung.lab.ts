import type { Lab } from "../course.types";
import { LAB_ORG } from "./lab-organisation.constants";

/** Labor Themenfeld 6: Modellierung. */
export const lab: Lab = {
  id: "modellierung",
  topic: 6,
  title: "Modellierung: Bausteine zuordnen",
  scenario: [
    LAB_ORG.intro,
    "Die Strukturanalyse ist abgeschlossen. Ordnen Sie den Zielobjekten den jeweils passenden Baustein aus dem IT-Grundschutz-Kompendium zu.",
  ],
  tasks: [
    {
      kind: "classify",
      id: "zuordnung",
      prompt: "Welcher Baustein ist auf das Zielobjekt anzuwenden?",
      categories: [
        { id: "isms", label: "ISMS.1 Sicherheitsmanagement" },
        { id: "sys211", label: "SYS.2.1 Allgemeiner Client" },
        { id: "ind1", label: "IND.1 Prozessleit- und Automatisierungstechnik" },
        { id: "inf", label: "INF – Infrastruktur-Baustein (z. B. Allgemeines Gebäude)" },
        { id: "net", label: "NET – Netz-Baustein (z. B. Router und Switches)" },
      ],
      items: [
        {
          id: "z1",
          label: "Informationsverbund als Ganzes",
          answer: "isms",
          explanation:
            "ISMS.1 ist die Grundlage aller Aktivitäten und wird auf den gesamten Informationsverbund angewendet.",
        },
        {
          id: "z2",
          label: "Gruppe der 120 Verwaltungs-Clients",
          answer: "sys211",
          explanation:
            "Allgemeiner Client – plus ggf. der spezifische Baustein für das Betriebssystem.",
        },
        {
          id: "z3",
          label: "SCADA-Leitsystem der Fertigung",
          answer: "ind1",
          explanation:
            "IND.1 ist auf jedes IT-System mit Prozessleit- und Automatisierungstechnik mindestens einmal anzuwenden.",
        },
        {
          id: "z4",
          label: "Verwaltungsgebäude am Hauptsitz",
          answer: "inf",
          explanation: "Gebäude werden mit Bausteinen der Schicht INF modelliert.",
        },
        {
          id: "z5",
          label: "Core-Switch im Serverraum",
          answer: "net",
          explanation: "Netzkomponenten werden mit Bausteinen der Schicht NET modelliert.",
        },
      ],
    },
    {
      kind: "classify",
      id: "dokumentation",
      prompt: "Ist die Modellierungsentscheidung korrekt dokumentiert?",
      categories: [
        { id: "ok", label: "Korrekt" },
        { id: "fehler", label: "Unvollständig oder falsch" },
      ],
      items: [
        {
          id: "d1",
          label:
            "„APP.5.2 Microsoft Exchange – Relevanz: nein – Begründung: wird nicht eingesetzt“",
          answer: "ok",
          explanation:
            "Nicht relevante Bausteine sind explizit zu begründen – das ist hier geschehen.",
        },
        {
          id: "d2",
          label:
            "„CON.7 Informationssicherheit auf Auslandsreisen – Relevanz: nein“ (ohne Begründung)",
          answer: "fehler",
          explanation: "Die Nicht-Relevanz muss explizit begründet werden.",
        },
        {
          id: "d3",
          label:
            "„SYS.2.2.3 Clients unter Windows – Zielobjekt: Verwaltungs-Clients“, aber SYS.2.1 fehlt",
          answer: "fehler",
          explanation:
            "Spezifische Bausteine sind stets zusammen mit dem allgemeinen Baustein anzuwenden.",
        },
      ],
    },
  ],
  sources: [
    { doc: "200-2", section: "Kap. 8.3.4 Zuordnung von Bausteinen", page: 138 },
    { doc: "kompendium", section: "Schichtenmodell und Modellierung; IND.1 Kap. 1.3" },
  ],
};
