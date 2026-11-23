import type { Lab } from "../course.types";
import { LAB_ORG } from "./lab-organisation.constants";

/** Labor Themenfeld 13: Auditfeststellungen und Vorbereitung. */
export const lab: Lab = {
  id: "audit",
  topic: 13,
  title: "Auditfeststellungen einordnen",
  scenario: [
    LAB_ORG.intro,
    "Das Zertifizierungsaudit läuft. Ordnen Sie die Feststellungen des Auditteamleiters nach dem Auditierungsschema ein.",
  ],
  tasks: [
    {
      kind: "classify",
      id: "feststellungen",
      prompt: "Welche Art von Feststellung liegt jeweils vor?",
      categories: [
        { id: "empf", label: "Empfehlung" },
        { id: "gering", label: "Geringfügige Abweichung" },
        { id: "schwer", label: "Schwerwiegende Abweichung" },
      ],
      items: [
        {
          id: "f1",
          label:
            "Die Passwortrichtlinie ist umgesetzt; ein Hinweis zu Passphrasen könnte die Akzeptanz erhöhen.",
          answer: "empf",
          explanation: "Nicht bindender Verbesserungsvorschlag.",
        },
        {
          id: "f2",
          label:
            "Die Backup-Wiederherstellung wird getestet, aber die Testergebnisse werden nicht protokolliert.",
          answer: "gering",
          explanation: "Ein Aspekt fehlt, das wesentliche Ziel der Anforderung ist erreicht.",
        },
        {
          id: "f3",
          label:
            "Für das SCADA-System gibt es keinerlei Zugriffsschutz; die Basis-Anforderungen sind nicht umgesetzt.",
          answer: "schwer",
          explanation:
            "Anforderungen in wesentlichen Teilen nicht umgesetzt – die Sicherheit ist erheblich gefährdet.",
        },
        {
          id: "f4",
          label:
            "Die Anforderungen des Bausteins ISMS.1 zur Verantwortung der Leitung und zu Managementberichten sind in wesentlichen Teilen nicht umgesetzt.",
          answer: "schwer",
          explanation:
            "Anforderungen in wesentlichen Teilen nicht umgesetzt – die Effektivität des ISMS ist erheblich gefährdet.",
        },
      ],
    },
    {
      kind: "classify",
      id: "doku",
      prompt: "Zu welchem Referenzdokument gehört die Information?",
      categories: [
        { id: "a0", label: "A.0 Richtlinien" },
        { id: "a1", label: "A.1 Strukturanalyse" },
        { id: "a4", label: "A.4 IT-Grundschutz-Check" },
        { id: "a6", label: "A.6 Realisierungsplan" },
      ],
      items: [
        {
          id: "d1",
          label: "Richtlinie zur internen ISMS-Auditierung",
          answer: "a0",
          explanation: "Gehört zu den Mindestrichtlinien in A.0.",
        },
        {
          id: "d2",
          label: "Liste der Dienstleister mit Einfluss auf den Informationsverbund",
          answer: "a1",
          explanation: "Seit Version 2.1 Bestandteil der Strukturanalyse.",
        },
        {
          id: "d3",
          label: "SYS.1.1.A3 – Status „teilweise“ – Beschreibung der aktuellen Umsetzung",
          answer: "a4",
          explanation: "Umsetzungsstatus je Anforderung und Zielobjekt.",
        },
        {
          id: "d4",
          label:
            "Offene Standard-Anforderungen mit Termin, Ressourcen und Unterschrift der Leitung",
          answer: "a6",
          explanation: "Der Realisierungsplan wird von der Institutionsleitung genehmigt.",
        },
      ],
    },
  ],
  sources: [
    { doc: "audit", section: "Kap. 4.6", page: 15 },
    { doc: "refdoc", section: "Kap. 2", page: 6 },
  ],
};
