import type { TopicQuestions } from "../course.types";

/** Prüfungsfragenpool Themenfeld 14. */
export const pool: TopicQuestions = {
  topic: 14,
  questions: [
    {
      id: "p14-01",
      topic: 14,
      level: "basis",
      stem: "Wie oft ist der Baustein DER.2.1 Behandlung von Sicherheitsvorfällen zu modellieren?",
      options: [
        { text: "Einmal für den Informationsverbund", correct: true },
        { text: "Für jedes IT-System einzeln", correct: false },
        { text: "Für jeden Raum einzeln", correct: false },
        { text: "Nur bei erhöhtem Schutzbedarf", correct: false },
      ],
      explanation: "DER.2.1 ist für den Informationsverbund einmal anzuwenden.",
      source: {
        doc: "kompendium",
        section: "DER.2.1, Kap. 1.3",
        quote: "ist für den Informationsverbund einmal anzuwenden",
      },
    },
    {
      id: "p14-02",
      topic: 14,
      level: "basis",
      stem: "Welche Aussagen zur Richtlinie zur Behandlung von Sicherheitsvorfällen (DER.2.1.A2) treffen zu?",
      options: [
        { text: "Sie muss allen Mitarbeitenden bekannt sein.", correct: true },
        { text: "Sie muss mit dem IT-Betrieb abgestimmt sein.", correct: true },
        { text: "Sie muss durch die Institutionsleitung verabschiedet sein.", correct: true },
        { text: "Sie muss regelmäßig geprüft und aktualisiert werden.", correct: true },
      ],
      explanation: "Alle vier Punkte sind MUSS-Inhalte von A2.",
      source: {
        doc: "kompendium",
        section: "DER.2.1.A2",
        quote:
          "Die Richtlinie MUSS allen Mitarbeitenden bekannt sein. Sie MUSS mit dem IT-Betrieb abgestimmt und durch die Institutionsleitung verabschiedet sein",
      },
    },
    {
      id: "p14-03",
      topic: 14,
      level: "basis",
      stem: "Was muss nach DER.2.1.A3 im Rahmen der Verantwortlichkeiten bei Sicherheitsvorfällen insbesondere geregelt sein?",
      options: [
        { text: "Wer die Entscheidung für eine forensische Untersuchung trifft", correct: true },
        {
          text: "Nach welchen Kriterien und wann eine forensische Untersuchung erfolgt",
          correct: true,
        },
        { text: "Dass Kontaktinformationen aktuell und leicht zugänglich sind", correct: true },
        {
          text: "Welche Mitarbeitenden bei einem Vorfall disziplinarisch belangt werden",
          correct: false,
        },
      ],
      explanation: "A3 regelt Zuständigkeiten, Forensik-Entscheidungen und Ansprechpersonen.",
      source: {
        doc: "kompendium",
        section: "DER.2.1.A3",
        quote:
          "wer die mögliche Entscheidung für eine forensische Untersuchung trifft, nach welchen Kriterien diese vorgenommen wird und wann sie erfolgen soll",
      },
    },
    {
      id: "p14-04",
      topic: 14,
      level: "basis",
      stem: "Was ist laut DER.2.1.A6 bei der Wiederherstellung aus Datensicherungen sicherzustellen?",
      options: [
        {
          text: "Dass die eingespielten Daten vom Sicherheitsvorfall nicht betroffen waren",
          correct: true,
        },
        {
          text: "Dass immer die neueste Sicherung verwendet wird, unabhängig von ihrem Zustand",
          correct: false,
        },
        { text: "Dass Patches erst Monate später eingespielt werden", correct: false },
        { text: "Dass Benutzende nicht an Funktionstests beteiligt werden", correct: false },
      ],
      explanation:
        "Wiederhergestellte Daten dürfen nicht kompromittiert sein; Benutzende sind in Funktionstests einzubeziehen.",
      source: {
        doc: "kompendium",
        section: "DER.2.1.A6",
        quote:
          "Wenn Daten aus Datensicherungen wiedereingespieltwerden,MUSSsichergestelltsein,dassdiesevomSicherheitsvorfallnichtbetroffenwaren",
      },
    },
    {
      id: "p14-05",
      topic: 14,
      level: "basis",
      stem: "Was soll eine Kommunikations- und Kontaktstrategie für Sicherheitsvorfälle laut DER.2.1.A9 regeln?",
      options: [
        {
          text: "Wer grundsätzlich informiert werden muss und wer informiert werden darf",
          correct: true,
        },
        {
          text: "Durch wen, in welcher Reihenfolge und in welcher Tiefe informiert wird",
          correct: true,
        },
        { text: "Wer Informationen über Sicherheitsvorfälle an Dritte weitergibt", correct: true },
        { text: "Dass alle Mitarbeitenden frei mit der Presse sprechen dürfen", correct: false },
      ],
      explanation:
        "Es soll sichergestellt sein, dass keine Unautorisierten Informationen weitergeben.",
      source: {
        doc: "kompendium",
        section: "DER.2.1.A9",
        quote:
          "Es SOLLTE definiert sein, wer Informationen über Sicherheitsvorfälle an Dritte weitergibt",
      },
    },
    {
      id: "p14-06",
      topic: 14,
      level: "basis",
      stem: "Wie oft sollte die Institutionsleitung laut DER.2.1.A17 über Sicherheitsvorfälle unterrichtet werden?",
      options: [
        { text: "Jährlich", correct: true },
        { text: "Bei sofortigem Handlungsbedarf umgehend", correct: true },
        { text: "Nie, das ist ausschließlich Aufgabe des IT-Betriebs", correct: false },
        { text: "Nur bei einer Zertifizierung", correct: false },
      ],
      explanation:
        "Jährliche Unterrichtung; bei sofortigem Handlungsbedarf MUSS sie umgehend informiert werden.",
      source: {
        doc: "kompendium",
        section: "DER.2.1.A17",
        quote:
          "Die Institutionsleitung SOLLTE jährlich über die Sicherheitsvorfälle unterrichtet werden",
      },
    },
    {
      id: "p14-07",
      topic: 14,
      level: "basis",
      stem: "Welche Fragen sollen bei der Nachbereitung von Sicherheitsvorfällen (DER.2.1.A17) untersucht werden?",
      options: [
        { text: "Wie schnell die Vorfälle erkannt und behoben wurden", correct: true },
        { text: "Ob die Meldewege funktioniert haben", correct: true },
        { text: "Ob die Detektionsmaßnahmen wirksam waren", correct: true },
        { text: "Wie hoch die Boni der beteiligten Mitarbeitenden sein sollen", correct: false },
      ],
      explanation:
        "Aus den Erfahrungen werden Handlungsanweisungen für vergleichbare Vorfälle abgeleitet.",
      source: {
        doc: "kompendium",
        section: "DER.2.1.A17",
        quote:
          "Sicherheitsvorfälle SOLLTEN standardisiert nachbereitet werden. Dabei SOLLTE untersucht werden, wie schnell die",
      },
    },
    {
      id: "p14-08",
      topic: 14,
      level: "experte",
      stem: "Ein Server wurde kompromittiert, weil Updates fehlten. Der Administrator spielt sie aus Angst vor Konsequenzen sofort ein, bevor das Sicherheitsteam analysieren kann. Welche Aussagen sind im Sinne von DER.2.1 zutreffend?",
      options: [
        { text: "Dadurch kann die Analyse der Einbruchsursache verhindert werden.", correct: true },
        {
          text: "Eine mangelhafte Fehlerkultur kann die Aufklärung von Vorfällen behindern.",
          correct: true,
        },
        {
          text: "Vor der Umsetzung von Behebungsmaßnahmen ist eine Freigabe durch die Leitung des IT-Betriebs erforderlich.",
          correct: true,
        },
        {
          text: "Das Vorgehen entspricht dem vorgesehenen Ablauf, da die Lücke schnell geschlossen wurde.",
          correct: false,
        },
      ],
      explanation:
        "DER.2.1 nennt genau dieses Szenario als Gefährdung durch Zerstörung von Beweisspuren.",
      source: {
        doc: "kompendium",
        section: "DER.2.1, Kap. 2.2 und A5",
        quote: "Eine mangelhafte Fehlerkultur hat somit eine Analyse des Problems verhindert",
      },
    },
    {
      id: "p14-09",
      topic: 14,
      level: "experte",
      stem: "In einer Filiale werden Notebooks mit Zugangsdaten zum Intranet gestohlen. Die Filialleitung meldet nur einen Einbruch an die Polizei. Welche Aussagen sind im Sinne von DER.2.1 richtig?",
      options: [
        {
          text: "Der Vorfall hätte als Sicherheitsvorfall erkannt und an den ISB gemeldet werden müssen.",
          correct: true,
        },
        {
          text: "Ohne Meldung ist die Institution auf Folgeangriffe mit den gestohlenen Daten nicht vorbereitet.",
          correct: true,
        },
        { text: "Nach einem Angriff sind betroffene Zugangsdaten zu ändern.", correct: true },
        {
          text: "Da Hardware gestohlen wurde, handelt es sich nicht um ein Thema der Informationssicherheit.",
          correct: false,
        },
      ],
      explanation:
        "DER.2.1 beschreibt dieses Beispiel für ungeeigneten Umgang mit Sicherheitsvorfällen.",
      source: {
        doc: "kompendium",
        section: "DER.2.1, Kap. 2.1",
        quote: "Der oder die Informationssicherheitsbeauftragte (ISB) wird daher nicht informiert",
      },
    },
    {
      id: "p14-10",
      topic: 14,
      level: "experte",
      stem: "Eine Institution mit erhöhtem Schutzbedarf möchte ihr Vorfallmanagement verbessern. Welche Anforderungen bei erhöhtem Schutzbedarf nennt DER.2.1?",
      options: [
        {
          text: "Vorab festgelegte, von der Institutionsleitung genehmigte Prioritäten",
          correct: true,
        },
        {
          text: "Eine dedizierte Meldestelle, über die Vorfälle auch außerhalb der Arbeitszeiten gemeldet werden können",
          correct: true,
        },
        { text: "Angekündigte und unangekündigte Übungen sowie Planspiele", correct: true },
        {
          text: "Der Verzicht auf jede Dokumentation, um schneller reagieren zu können",
          correct: false,
        },
      ],
      explanation:
        "A19–A22 beschreiben diese Vorschläge; Dokumentation bleibt gefordert (DER.2.1.A16).",
      source: {
        doc: "kompendium",
        section: "DER.2.1.A19 bis A22",
        quote:
          "Zusätzlich SOLLTE es möglich sein, dass Sicherheitsvorfälle auch außerhalb der üblichen Arbeitszeiten gemeldet werden können",
      },
    },
  ],
};
