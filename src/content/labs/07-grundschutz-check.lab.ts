import type { Lab } from "../course.types";
import { LAB_ORG } from "./lab-organisation.constants";

/** Labor Themenfeld 7: IT-Grundschutz-Check. */
export const lab: Lab = {
  id: "grundschutz-check",
  topic: 7,
  title: "IT-Grundschutz-Check durchführen",
  scenario: [
    LAB_ORG.intro,
    "Sie führen Interviews zu ausgewählten Anforderungen. Bewerten Sie den Umsetzungsstatus anhand der Interviewnotizen und Stichproben nach BSI-Standard 200-2.",
  ],
  tasks: [
    {
      kind: "classify",
      id: "status",
      prompt: "Welcher Umsetzungsstatus ist zu vergeben?",
      categories: [
        { id: "ja", label: "ja" },
        { id: "teilweise", label: "teilweise" },
        { id: "nein", label: "nein" },
        { id: "entbehrlich", label: "entbehrlich" },
      ],
      items: [
        {
          id: "c1",
          label: "Sicherheitsleitlinie",
          detail:
            "Von der Geschäftsführung unterzeichnet, im Intranet veröffentlicht, neue Mitarbeitende erhalten sie vor dem ersten Login; letzte Überprüfung vor 14 Monaten.",
          answer: "ja",
          explanation: "Die Anforderung ist vollständig, wirksam und angemessen umgesetzt.",
        },
        {
          id: "c2",
          label: "Regelungen für einen externen ISB",
          detail: "Die ISB ist fest angestellte Mitarbeiterin.",
          answer: "entbehrlich",
          explanation:
            "Nicht relevant, da kein externer ISB bestellt ist – Begründung dokumentieren.",
        },
        {
          id: "c3",
          label: "Datensicherungskonzept",
          detail:
            "Backups laufen täglich, ein schriftliches Konzept fehlt; Wiederherstellungstests wurden nie durchgeführt.",
          answer: "teilweise",
          explanation: "Ein Teil ist umgesetzt, wesentliche Elemente fehlen.",
        },
        {
          id: "c4",
          label: "Schulung zur Informationssicherheit",
          detail:
            "Es gibt bisher weder ein Schulungskonzept noch durchgeführte Schulungen; ein Angebot wurde eingeholt.",
          answer: "nein",
          explanation: "Ein eingeholtes Angebot ist keine umgesetzte Maßnahme.",
        },
        {
          id: "c5",
          label: "Härtung des WLAN-Controllers",
          detail:
            "Die Institution betreibt kein WLAN; Stichprobe bestätigt: keine Access Points vorhanden.",
          answer: "entbehrlich",
          explanation: "Nicht relevant – durch Stichprobe verifiziert.",
        },
      ],
    },
    {
      kind: "order",
      id: "ablauf",
      prompt: "Bringen Sie die Schritte des IT-Grundschutz-Checks in die richtige Reihenfolge.",
      items: [
        { id: "s1", label: "Hausinterne Regelungen sichten und Zuständigkeiten klären" },
        { id: "s2", label: "Hauptansprechpartner je Baustein festlegen und Termine planen" },
        { id: "s3", label: "Zweck des Checks erläutern und Anforderungen im Interview durchgehen" },
        { id: "s4", label: "Aussagen stichprobenartig verifizieren" },
        { id: "s5", label: "Ergebnis den Befragten mitteilen" },
        { id: "s6", label: "Ergebnisse mit Begründungen tabellarisch dokumentieren" },
      ],
      explanation:
        "Vorbereitung → Soll-Ist-Vergleich (Interview, Verifikation, Rückmeldung) → Dokumentation.",
    },
  ],
  sources: [{ doc: "200-2", section: "Kap. 8.4 IT-Grundschutz-Check", page: 145 }],
};
