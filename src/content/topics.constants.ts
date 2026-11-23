import type { DepthLevel, TopicId } from "./course.types";

/** Metadata of one curriculum topic (Themenfeld). */
export interface TopicMeta {
  id: TopicId;
  title: string;
  /** Unterrichtseinheiten (60 min) for the IT-Grundschutz-Praktiker. */
  ue: number;
  depth: DepthLevel;
  /** Questions drawn for the exam (Prüfungsbedingungen v2.2, Tabelle 2). */
  examCount: number;
  /** Minimum size of this topic's exam pool in this app. */
  poolTarget: number;
  /** Lerninhalte as listed in the curriculum. */
  learningItems: string[];
}

/** The 15 topics of Curriculum v1.1 for the IT-Grundschutz-Praktiker. */
export const TOPICS: readonly TopicMeta[] = [
  {
    id: 1,
    title: "Einführung und Grundlagen der Informationssicherheit und rechtliche Rahmenbedingungen",
    ue: 2,
    depth: "I + II",
    examCount: 2,
    poolTarget: 10,
    learningItems: [
      "Begriffe (Arten und Wichtigkeit von Informationen, Integrität, Verfügbarkeit, Vertraulichkeit)",
      "Unterschied zwischen IT und OT sowie Security und Safety",
      "Gesetzliche Grundlagen (BSIG, IT-SiG usw.)",
    ],
  },
  {
    id: 2,
    title: "Normen und Standards der Informationssicherheit",
    ue: 2,
    depth: "I",
    examCount: 2,
    poolTarget: 10,
    learningItems: [
      "Überblick, Zweck und Struktur relevanter Normen (ISO 2700x usw.)",
      "Integrierte Managementsysteme, VSA, C5, HV-Benchmark",
      "COBIT, ITIL usw.",
      "IT-Grundschutz-Kompendium",
      "Branchenspezifische Sicherheitsstandards und IT-Grundschutz-Profile",
    ],
  },
  {
    id: 3,
    title: "Einführung IT-Grundschutz",
    ue: 2,
    depth: "II",
    examCount: 2,
    poolTarget: 10,
    learningItems: [
      "IT-Grundschutz – Bestandteile",
      "Sicherheitsprozess",
      "Rollen, Verantwortung und Aufgaben",
      "Sicherheitskonzept",
      "Leitlinie erstellen",
    ],
  },
  {
    id: 4,
    title: "IT-Grundschutz-Vorgehensweise (Überblick)",
    ue: 1,
    depth: "I + II",
    examCount: 2,
    poolTarget: 6,
    learningItems: [
      "Leitfragen zur IT-Grundschutz-Absicherung",
      "Basis-, Standard- und Kern-Absicherung",
      "Wahl der Vorgehensweise am Praxisbeispiel",
    ],
  },
  {
    id: 5,
    title: "IT-Grundschutz-Kompendium (Überblick)",
    ue: 1,
    depth: "I + II",
    examCount: 2,
    poolTarget: 6,
    learningItems: [
      "Aufbau und Anwendung des Kompendiums",
      "Prozess- und System-Bausteine, ISMS",
      "Umsetzungshinweise und Erstellung eines Bausteins",
    ],
  },
  {
    id: 6,
    title: "Umsetzung der IT-Grundschutz-Vorgehensweise",
    ue: 1,
    depth: "II",
    examCount: 8,
    poolTarget: 24,
    learningItems: [
      "Netzplan erstellen",
      "Geschäftsprozesse, Anwendungen, IT-Systeme und Räume erfassen",
      "Schutzbedarfskategorien, Vorgehen und Vererbung",
      "Modellierung gemäß IT-Grundschutz",
    ],
  },
  {
    id: 7,
    title: "IT-Grundschutz-Check",
    ue: 1,
    depth: "II",
    examCount: 3,
    poolTarget: 15,
    learningItems: [
      "Was wird geprüft?",
      "Vorbereitung und Durchführung",
      "Dokumentation und Entscheidungskriterien",
    ],
  },
  {
    id: 8,
    title: "Risikoanalyse",
    ue: 1,
    depth: "II",
    examCount: 5,
    poolTarget: 15,
    learningItems: [
      "Elementare Gefährdungen und weitere Gefährdungsübersichten",
      "Risikobewertung und Risikobehandlung",
      "Beispiel für die Risikobewertung",
    ],
  },
  {
    id: 9,
    title: "Umsetzungsplanung",
    ue: 1,
    depth: "II",
    examCount: 5,
    poolTarget: 15,
    learningItems: [
      "Maßnahmenplan, Umsetzungsreihenfolge und Verantwortlichkeiten",
      "Aufwände schätzen und begleitende Maßnahmen",
    ],
  },
  {
    id: 10,
    title: "Aufrechterhaltung und kontinuierliche Verbesserung",
    ue: 1,
    depth: "II",
    examCount: 5,
    poolTarget: 15,
    learningItems: [
      "Leitfragen und Überprüfungsverfahren",
      "Kennzahlen und Reifegradmodelle",
      "Kontinuierlicher Verbesserungsprozess (KVP)",
    ],
  },
  {
    id: 11,
    title: "Zertifizierung und Erwerb des IT-Grundschutz-Zertifikats auf Basis von ISO 27001",
    ue: 1,
    depth: "I",
    examCount: 3,
    poolTarget: 15,
    learningItems: [
      "Arten von Audits",
      "Grundsätze der Auditierung (1st, 2nd, 3rd Party)",
      "Modell der Akkreditierung und Zertifizierung",
      "Ablauf des BSI-Zertifizierungsprozesses",
    ],
  },
  {
    id: 12,
    title: "IT-Grundschutz-Profile",
    ue: 1,
    depth: "I + II",
    examCount: 2,
    poolTarget: 10,
    learningItems: [
      "Aufbau eines IT-Grundschutz-Profils",
      "Nutzung und Erstellung",
      "Veröffentlichte Profile",
    ],
  },
  {
    id: 13,
    title: "Vorbereitung auf ein Audit",
    ue: 1,
    depth: "II",
    examCount: 3,
    poolTarget: 15,
    learningItems: [
      "Planung und Vorbereitung",
      "Auditprozess-Aktivitäten und Umgang mit Abweichungen",
      "Berichtswesen und Folgemaßnahmen",
      "Qualifikation von Auditoren",
    ],
  },
  {
    id: 14,
    title: "Sicherheitsvorfallbehandlung",
    ue: 2,
    depth: "II",
    examCount: 3,
    poolTarget: 10,
    learningItems: ["Sicherheitsvorfallbehandlung nach DER.2.1", "Rollen, Meldewege und Ablauf"],
  },
  {
    id: 15,
    title: "BCM-Prozess",
    ue: 2,
    depth: "I",
    examCount: 2,
    poolTarget: 8,
    learningItems: [
      "Überblick über den BSI-Standard 200-4",
      "BCM-Prozess und DER.4 Notfallmanagement",
    ],
  },
];

/** Looks up a topic; throws for unknown ids so content errors surface early. */
export function getTopic(id: TopicId): TopicMeta {
  const topic = TOPICS.find((t) => t.id === id);
  if (!topic) throw new Error(`Unbekanntes Themenfeld ${id}`);
  return topic;
}
