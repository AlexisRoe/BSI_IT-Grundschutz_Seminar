import type { TopicQuestions } from "../course.types";

/** Prüfungsfragenpool Themenfeld 10. */
export const pool: TopicQuestions = {
  topic: 10,
  questions: [
    {
      id: "p10-01",
      topic: 10,
      level: "basis",
      stem: "Warum muss Informationssicherheit laut BSI-Standard 200-1 aktiv gemanagt werden?",
      options: [
        { text: "Weil Institutionen ständigen Veränderungen unterworfen sind", correct: true },
        {
          text: "Weil neue Angriffsmethoden Sicherheitsmaßnahmen unwirksam machen können",
          correct: true,
        },
        { text: "Weil sich externe Rahmenbedingungen wie Gesetze ändern können", correct: true },
        {
          text: "Weil ein einmal erreichtes Sicherheitsniveau dauerhaft unverändert bleibt",
          correct: false,
        },
      ],
      explanation: "Sicherheit ist kein unveränderbarer Zustand.",
      source: { doc: "200-1", section: "Kap. 3.2.1", page: 17 },
    },
    {
      id: "p10-02",
      topic: 10,
      level: "basis",
      stem: "In welche Phasen werden Sicherheitsmaßnahmen in den Umsetzungshinweisen laut BSI-Standard 200-1 eingeteilt?",
      options: [
        { text: "Planung und Konzeption, Beschaffung, Umsetzung", correct: true },
        { text: "Betrieb", correct: true },
        { text: "Aussonderung und Notfallvorsorge", correct: true },
        { text: "Zertifizierung und Rezertifizierung", correct: false },
      ],
      explanation:
        "Die Phasen: Planung und Konzeption, Beschaffung, Umsetzung, Betrieb, Aussonderung, Notfallvorsorge.",
      source: { doc: "200-1", section: "Kap. 3.2.1", page: 18 },
    },
    {
      id: "p10-03",
      topic: 10,
      level: "basis",
      stem: "Was geschieht laut BSI-Standard 200-1 in der Phase „Act“ des PDCA-Zyklus bei grundlegenden oder umfangreichen Veränderungen?",
      options: [
        { text: "Es wird wieder mit der Planungsphase begonnen.", correct: true },
        { text: "Der Zyklus wird beendet.", correct: false },
        { text: "Es wird direkt zertifiziert.", correct: false },
        { text: "Die Phase „Check“ entfällt künftig.", correct: false },
      ],
      explanation:
        "Kleinere Mängel werden umgehend beseitigt; bei grundlegenden Änderungen beginnt die Planung neu.",
      source: { doc: "200-1", section: "Kap. 3.2.2", page: 18 },
    },
    {
      id: "p10-04",
      topic: 10,
      level: "basis",
      stem: "Wann sollte eine Managementbewertung laut BSI-Standard 200-2 auch außerhalb der Routinetermine stattfinden?",
      options: [
        { text: "Bei einer Häufung von Sicherheitsvorfällen", correct: true },
        { text: "Bei gravierenden Änderungen der Rahmenbedingungen", correct: true },
        { text: "Nur wenn die Zertifizierungsstelle es verlangt", correct: false },
        { text: "Grundsätzlich nie", correct: false },
      ],
      explanation: "Bei Bedarf muss auch zwischen den Routineterminen getagt werden.",
      source: { doc: "200-2", section: "Kap. 10", page: 164 },
    },
    {
      id: "p10-05",
      topic: 10,
      level: "basis",
      stem: "Welche Methoden zur Überprüfung des Informationssicherheitsprozesses nennt der BSI-Standard 200-2 beispielhaft?",
      options: [
        { text: "Definition, Dokumentation und Auswertung von Kennzahlen", correct: true },
        { text: "Übungen und Tests zur Simulation von Sicherheitsvorfällen", correct: true },
        { text: "Interne und externe Audits", correct: true },
        { text: "Zertifizierung nach festgelegten Sicherheitskriterien", correct: true },
      ],
      explanation: "Alle genannten Methoden werden ausdrücklich aufgeführt.",
      source: { doc: "200-2", section: "Kap. 10.1", page: 164 },
    },
    {
      id: "p10-06",
      topic: 10,
      level: "basis",
      stem: "Wofür werden Kennzahlen in der Informationssicherheit laut BSI-Standard 200-2 eingesetzt?",
      options: [
        { text: "Um den IS-Prozess bzw. Teilaspekte messbar zu machen", correct: true },
        {
          text: "Um Güte, Effizienz und Effektivität von Sicherheitsmaßnahmen zu überprüfen",
          correct: true,
        },
        { text: "Als Argumentationshilfe in der Kommunikation mit dem Management", correct: true },
        { text: "Um die Schutzbedarfsfeststellung zu ersetzen", correct: false },
      ],
      explanation:
        "Kennzahlen unterstützen Steuerung und Kommunikation, ersetzen aber keine methodischen Schritte.",
      source: { doc: "200-2", section: "Kap. 10.1.1", page: 165 },
    },
    {
      id: "p10-07",
      topic: 10,
      level: "basis",
      stem: "Welcher Reifegrad beschreibt laut BSI-Standard 200-2 ein ISMS, das geplant, aber nicht etabliert ist?",
      options: [
        { text: "Reifegrad 1", correct: true },
        { text: "Reifegrad 0", correct: false },
        { text: "Reifegrad 2", correct: false },
        { text: "Reifegrad 3", correct: false },
      ],
      explanation: "0 = nichts geplant; 1 = geplant, nicht etabliert; 2 = teilweise etabliert.",
      source: { doc: "200-2", section: "Kap. 10.1.2", page: 166 },
    },
    {
      id: "p10-08",
      topic: 10,
      level: "basis",
      stem: "Welche Ziele können laut BSI-Standard 200-2 durch eine einheitliche Reifegradbewertung des ISMS erreicht werden?",
      options: [
        { text: "Erkennung von Verbesserungs- und Weiterentwicklungspotenzialen", correct: true },
        { text: "Vergleichbarkeit zwischen verschiedenen Institutionen", correct: true },
        { text: "Nachweisbarkeit des Umsetzungsniveaus gegenüber Dritten", correct: true },
        { text: "Automatische Erteilung eines ISO 27001-Zertifikats", correct: false },
      ],
      explanation: "Ein Reifegrad ersetzt keine Zertifizierung.",
      source: { doc: "200-2", section: "Kap. 10.1.2", page: 166 },
    },
    {
      id: "p10-09",
      topic: 10,
      level: "basis",
      stem: "An wen richtet sich der Cyber-Sicherheits-Check laut BSI-Standard 200-2?",
      options: [
        {
          text: "An Institutionen, die sich bisher weniger intensiv mit Cyber-Sicherheit beschäftigt haben",
          correct: true,
        },
        { text: "Ausschließlich an bereits zertifizierte Institutionen", correct: false },
        { text: "Nur an Betreiber Kritischer Infrastrukturen", correct: false },
        { text: "Nur an Institutionen mit vollständiger Sicherheitsdokumentation", correct: false },
      ],
      explanation:
        "Für den Cyber-Sicherheits-Check gibt es keine obligatorischen Voraussetzungen an Dokumentation oder Umsetzungsstatus.",
      source: { doc: "200-2", section: "Kap. 10.1.3", page: 167 },
    },
    {
      id: "p10-10",
      topic: 10,
      level: "basis",
      stem: "Was ist laut BSI-Standard 200-2 nach Einführung neuer Sicherheitsmaßnahmen durch den ISB zu prüfen?",
      options: [
        {
          text: "Ob die notwendige Akzeptanz seitens der Mitarbeitenden vorhanden ist",
          correct: true,
        },
        {
          text: "Ursachen fehlender Akzeptanz sind herauszuarbeiten und abzustellen.",
          correct: true,
        },
        { text: "Ob die Maßnahmen gemäß Realisierungsplan umgesetzt wurden", correct: true },
        {
          text: "Ob die Maßnahmen ohne Rücksicht auf Akzeptanz durchgesetzt werden können",
          correct: false,
        },
      ],
      explanation: "Akzeptanz ist entscheidend für die Wirksamkeit.",
      source: { doc: "200-2", section: "Kap. 10.1.3", page: 167 },
    },
    {
      id: "p10-11",
      topic: 10,
      level: "basis",
      stem: "Wie sind Prüfergebnisse und -berichte laut BSI-Standard 200-2 im Allgemeinen zu behandeln?",
      options: [
        { text: "Als vertraulich, sie müssen besonders gut geschützt werden", correct: true },
        { text: "Sie sollten im Internet veröffentlicht werden.", correct: false },
        { text: "Sie können nach der Prüfung vernichtet werden.", correct: false },
        { text: "Sie sind ausschließlich dem BSI vorzulegen.", correct: false },
      ],
      explanation: "Prüfergebnisse sind im Allgemeinen vertraulich.",
      source: { doc: "200-2", section: "Kap. 10.3", page: 170 },
    },
    {
      id: "p10-12",
      topic: 10,
      level: "experte",
      stem: "Ein kleines Unternehmen mit 15 Beschäftigten möchte den Status seiner Informationssicherheit ohne großen Aufwand überprüfen. Was ist laut BSI-Standard 200-2 bereits ausreichend für einen Überblick?",
      options: [
        { text: "Durchsicht vorhandener Dokumentationen auf Aktualität", correct: true },
        {
          text: "Ein Workshop zu Problemen und Erfahrungen mit dem Sicherheitskonzept",
          correct: true,
        },
        { text: "Automatisiertes Monitoring und Reporting", correct: true },
        { text: "Ausschließlich eine jährliche externe Zertifizierung", correct: false },
      ],
      explanation:
        "200-2 zeigt, dass die Anforderungen auch für kleine Institutionen gut umsetzbar sind.",
      source: { doc: "200-2", section: "Kap. 10.1", page: 164 },
    },
    {
      id: "p10-13",
      topic: 10,
      level: "experte",
      stem: "Eine Institution erreicht für ISMS und ORP einen hohen Reifegrad, hat aber kein funktionierendes Störungsmanagement. Welche Folgen beschreibt der BSI-Standard 200-2?",
      options: [
        {
          text: "Sicherheitsvorfälle werden nicht erkannt bzw. nicht an die korrekte Stelle gemeldet.",
          correct: true,
        },
        {
          text: "Der Reifegrad der Informationssicherheit hängt auch vom Reifegrad anderer Managementprozesse ab.",
          correct: true,
        },
        {
          text: "Das ISMS kann betrieben werden, funktioniert aber nicht effizient.",
          correct: true,
        },
        { text: "Das Störungsmanagement ist für das ISMS ohne Bedeutung.", correct: false },
      ],
      explanation: "Der Reifegrad der Informationssicherheit ist keine selbstständige Größe.",
      source: { doc: "200-2", section: "Kap. 10.1.2", page: 166 },
    },
    {
      id: "p10-14",
      topic: 10,
      level: "experte",
      stem: "Ein Rechenzentrumsumzug ist für das nächste Jahr geplant. Wie ist das laut BSI-Standard 200-2 im ISMS zu berücksichtigen?",
      options: [
        {
          text: "Bereits in der Planungsphase in die Sicherheitskonzeption einbeziehen",
          correct: true,
        },
        {
          text: "Die Sicherheitskonzeption nach der relevanten Änderung aktualisieren",
          correct: true,
        },
        {
          text: "Den Informationssicherheitsprozess in das Änderungsmanagement integrieren",
          correct: true,
        },
        { text: "Erst nach dem Umzug bei der nächsten Zertifizierung betrachten", correct: false },
      ],
      explanation:
        "Betriebliche und organisatorische Änderungen müssen schon in der Planungsphase berücksichtigt werden.",
      source: { doc: "200-2", section: "Kap. 10.2", page: 168 },
    },
    {
      id: "p10-15",
      topic: 10,
      level: "experte",
      stem: "Welche Inhalte sollte die von der Leitung verabschiedete Richtlinie zur Überprüfung und Verbesserung des Informationssicherheitsprozesses laut BSI-Standard 200-2 insbesondere regeln?",
      options: [
        {
          text: "Wie interne Audits im Bereich der Informationssicherheit durchzuführen sind",
          correct: true,
        },
        { text: "Wie die Ergebnisse in den Änderungsprozess einfließen", correct: true },
        { text: "Die Gehaltsstruktur der Mitarbeitenden in der IT", correct: false },
        {
          text: "Die Zuständigkeit der Zertifizierungsstelle für die Behebung von Abweichungen",
          correct: false,
        },
      ],
      explanation:
        "Die Richtlinie regelt insbesondere interne Audits und den Weg der Ergebnisse in den Änderungsprozess.",
      source: { doc: "200-2", section: "Kap. 10.3", page: 170 },
    },
  ],
};
