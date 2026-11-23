import type { Lab } from "../course.types";
import { LAB_ORG } from "./lab-organisation.constants";

/** Labor Themenfeld 6: Strukturanalyse und Schutzbedarfsfeststellung. */
export const lab: Lab = {
  id: "schutzbedarf",
  topic: 6,
  title: "Strukturanalyse und Schutzbedarfsfeststellung",
  scenario: [
    LAB_ORG.intro,
    "Die Schutzbedarfskategorien wurden wie im BSI-Standard 200-2 definiert (normal: max. Ausfall 24–72 h; hoch: 1–24 h; sehr hoch: unter 1 h). Der Geschäftsprozess **Fertigung** hat für die Verfügbarkeit den Schutzbedarf **hoch** (Ausfall über 8 Stunden gefährdet Liefertermine). Die **Konstruktionsdaten** haben für die Vertraulichkeit den Schutzbedarf **sehr hoch** (Kronjuwelen).",
  ],
  tasks: [
    {
      kind: "classify",
      id: "gruppen",
      prompt: "Dürfen die folgenden Objekte jeweils **zu einer Gruppe** zusammengefasst werden?",
      categories: [
        { id: "ja", label: "Ja, Gruppe zulässig" },
        { id: "nein", label: "Nein, getrennt erfassen" },
      ],
      items: [
        {
          id: "g1",
          label: "120 Verwaltungs-Clients, gleiches Image, gleiches Netzsegment, Office und E-Mail",
          answer: "ja",
          explanation:
            "Gleicher Typ, gleiche Aufgaben, gleiche Konfiguration und gleicher Schutzbedarf.",
        },
        {
          id: "g2",
          label: "8 CAD-Workstations mit Konstruktionsdaten und 120 Verwaltungs-Clients",
          answer: "nein",
          explanation:
            "Unterschiedliche Aufgaben und unterschiedlicher Schutzbedarf (Vertraulichkeit sehr hoch).",
        },
        {
          id: "g3",
          label: "Zwei identisch konfigurierte Webserver im Lastverbund mit gleicher Aufgabe",
          answer: "ja",
          explanation: "Auch Server mit gleicher Aufgabe können gruppiert werden.",
        },
        {
          id: "g4",
          label: "Fileserver der Verwaltung und SCADA-Leitrechner",
          answer: "nein",
          explanation: "Unterschiedlicher Typ, unterschiedliche Aufgaben und Rahmenbedingungen.",
        },
      ],
    },
    {
      kind: "classify",
      id: "effekte",
      prompt: "Welches Prinzip bzw. welcher Effekt bestimmt jeweils den Schutzbedarf?",
      categories: [
        { id: "max", label: "Maximumprinzip" },
        { id: "kum", label: "Kumulationseffekt" },
        { id: "vert", label: "Verteilungseffekt" },
        { id: "abh", label: "Beachtung von Abhängigkeiten" },
      ],
      items: [
        {
          id: "e1",
          label:
            "Der CAD-Server speichert Konstruktionsdaten (Vertraulichkeit sehr hoch) und unkritische Normteilkataloge.",
          answer: "max",
          explanation:
            "Der schwerwiegendste mögliche Schaden bestimmt den Schutzbedarf: sehr hoch.",
        },
        {
          id: "e2",
          label:
            "Auf einem Virtualisierungshost laufen ERP, E-Mail, Fileserver und Zeiterfassung – jeweils mit normaler Verfügbarkeit; fällt der Host aus, steht der ganze Betrieb.",
          answer: "kum",
          explanation: "Viele kleine Schäden summieren sich zu einem höheren Gesamtschaden.",
        },
        {
          id: "e3",
          label:
            "Für die Fertigungsplanung gibt es zwei Leitrechner im Hot-Standby; jeder einzelne darf ausfallen, ohne dass die Produktion stoppt.",
          answer: "vert",
          explanation:
            "Durch Redundanz erbt der einzelne Rechner den hohen Verfügbarkeitsbedarf nicht vollständig.",
        },
        {
          id: "e4",
          label:
            "Ein kleines Lagerverwaltungsprogramm liefert die Bestände, ohne die das ERP keine Fertigungsaufträge freigibt.",
          answer: "abh",
          explanation:
            "Die wichtige Anwendung ist auf die Ergebnisse angewiesen; ihr Schutzbedarf wird übertragen.",
        },
      ],
    },
    {
      kind: "classify",
      id: "kategorien",
      prompt:
        "Welche Schutzbedarfskategorie für die **Verfügbarkeit** ergibt sich nach den Beispieltabellen des BSI-Standards 200-2?",
      categories: [
        { id: "normal", label: "normal" },
        { id: "hoch", label: "hoch" },
        { id: "sehrhoch", label: "sehr hoch" },
      ],
      items: [
        {
          id: "k1",
          label: "Intranet-Kantinenplan: Ein Ausfall von zwei Tagen wäre für alle tolerabel.",
          answer: "normal",
          explanation: "Tolerierbare Ausfallzeit 24–72 Stunden.",
        },
        {
          id: "k2",
          label: "Versandsystem: Nach vier Stunden Ausfall verpasst der Spediteur die Abholung.",
          answer: "hoch",
          explanation: "Tolerierbare Ausfallzeit zwischen einer und 24 Stunden.",
        },
        {
          id: "k3",
          label:
            "Not-Aus-Überwachung der Fertigung: Schon wenige Minuten Ausfall sind für niemanden tolerabel.",
          answer: "sehrhoch",
          explanation:
            "Maximal tolerierbare Ausfallzeit unter einer Stunde, zudem Gefahr für Leib und Leben.",
        },
      ],
    },
  ],
  sources: [{ doc: "200-2", section: "Kap. 8.1.1 und 8.2", page: 79 }],
};
