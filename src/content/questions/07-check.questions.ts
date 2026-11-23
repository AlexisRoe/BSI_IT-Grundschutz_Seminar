import type { TopicQuestions } from "../course.types";

/** Prüfungsfragenpool Themenfeld 7. */
export const pool: TopicQuestions = {
  topic: 7,
  questions: [
    {
      id: "p07-01",
      topic: 7,
      level: "basis",
      stem: "Was ist der IT-Grundschutz-Check?",
      options: [
        {
          text: "Ein Organisationsinstrument, das einen schnellen Überblick über das vorhandene Sicherheitsniveau bietet",
          correct: true,
        },
        {
          text: "Ein Soll-Ist-Vergleich zwischen den Anforderungen der modellierten Bausteine und den umgesetzten Maßnahmen",
          correct: true,
        },
        { text: "Die frühere Bezeichnung war Basis-Sicherheitscheck.", correct: true },
        { text: "Eine Zertifizierungsprüfung durch das BSI", correct: false },
      ],
      explanation:
        "Der Check ist ein internes Instrument; zertifiziert wird durch Audits nach dem Zertifizierungsschema.",
      source: { doc: "200-2", section: "Kap. 8; Glossar", page: 77 },
    },
    {
      id: "p07-02",
      topic: 7,
      level: "basis",
      stem: "Aus welchen Schritten besteht der IT-Grundschutz-Check laut BSI-Standard 200-2?",
      options: [
        { text: "Organisatorische Vorarbeiten", correct: true },
        { text: "Durchführung des Soll-Ist-Vergleichs", correct: true },
        { text: "Dokumentation der Ergebnisse", correct: true },
        { text: "Ausstellung eines Zertifikats", correct: false },
      ],
      explanation:
        "Der Check besteht aus drei Schritten: Vorbereitung, Soll-Ist-Vergleich, Dokumentation.",
      source: { doc: "200-2", section: "Kap. 8.4", page: 145 },
    },
    {
      id: "p07-03",
      topic: 7,
      level: "basis",
      stem: "Mit welchen Methoden wird der Soll-Ist-Vergleich durchgeführt?",
      options: [
        { text: "Interviews", correct: true },
        { text: "Stichprobenartige Kontrollen", correct: true },
        { text: "Besichtigungen vor Ort im Bereich Infrastruktur", correct: true },
        { text: "Ausschließlich automatisierte Schwachstellenscans", correct: false },
      ],
      explanation:
        "Interviews werden bei Bedarf durch Stichproben, Sichtung von Regelungen, Besichtigungen und Prüfung von Einstellungen verifiziert.",
      source: { doc: "200-2", section: "Kap. 8.4.2", page: 150 },
    },
    {
      id: "p07-04",
      topic: 7,
      level: "basis",
      stem: "Wer sollte laut BSI-Standard 200-2 Hauptansprechpartner für Bausteine der Schicht APP sein?",
      options: [
        { text: "Die Betreuer bzw. Verantwortlichen der einzelnen Anwendungen", correct: true },
        { text: "Der Hausmeister", correct: false },
        { text: "Die Personalvertretung", correct: false },
        { text: "Der Datenschutzbeauftragte", correct: false },
      ],
      explanation:
        "Für APP-Bausteine sind die Anwendungsverantwortlichen die richtigen Ansprechpartner.",
      source: { doc: "200-2", section: "Kap. 8.4.1", page: 147 },
    },
    {
      id: "p07-05",
      topic: 7,
      level: "basis",
      stem: "Welche Besetzung hat sich für Interviewteams beim IT-Grundschutz-Check bewährt?",
      options: [
        {
          text: "Zwei Personen: Eine stellt die Fragen, die andere notiert Ergebnisse und Anmerkungen.",
          correct: true,
        },
        { text: "Eine Person, die gleichzeitig fragt und protokolliert", correct: false },
        { text: "Mindestens fünf Personen aus unterschiedlichen Abteilungen", correct: false },
        { text: "Ausschließlich externe Auditoren", correct: false },
      ],
      explanation: "Bewährt haben sich zwei Personen pro Interviewgruppe.",
      source: { doc: "200-2", section: "Kap. 8.4.1", page: 147 },
    },
    {
      id: "p07-06",
      topic: 7,
      level: "basis",
      stem: "Was bedeutet der Umsetzungsstatus „nein“?",
      options: [
        {
          text: "Die Anforderung wurde noch nicht erfüllt; geeignete Maßnahmen sind größtenteils noch nicht umgesetzt.",
          correct: true,
        },
        { text: "Die Anforderung ist im Informationsverbund nicht relevant.", correct: false },
        { text: "Die Anforderung wurde durch eine Alternativmaßnahme erfüllt.", correct: false },
        { text: "Die Anforderung wurde vollständig umgesetzt.", correct: false },
      ],
      explanation:
        "Nicht relevant bzw. Alternativmaßnahme = „entbehrlich“; vollständig umgesetzt = „ja“.",
      source: { doc: "200-2", section: "Kap. 8.4.2", page: 150 },
    },
    {
      id: "p07-07",
      topic: 7,
      level: "basis",
      stem: "In welchen Fällen kann eine Anforderung den Status „entbehrlich“ erhalten?",
      options: [
        {
          text: "Wenn sie im betrachteten Informationsverbund nicht relevant ist, z. B. weil ein Dienst nicht aktiviert ist",
          correct: true,
        },
        { text: "Wenn sie durch Alternativmaßnahmen behandelt wurde", correct: true },
        { text: "Wenn ihre Umsetzung zu teuer erscheint", correct: false },
        {
          text: "Wenn das Risiko einer zugehörigen Gefährdung pauschal akzeptiert wird",
          correct: false,
        },
      ],
      explanation: "Kosten oder pauschale Risikoakzeptanz rechtfertigen „entbehrlich“ nicht.",
      source: { doc: "200-2", section: "Kap. 8.4.2", page: 150 },
    },
    {
      id: "p07-08",
      topic: 7,
      level: "basis",
      stem: "Welches Hilfsmittel muss herangezogen werden, um bei „entbehrlich“ die betroffenen elementaren Gefährdungen zu identifizieren?",
      options: [
        { text: "Die Kreuzreferenztabelle des jeweiligen Bausteins", correct: true },
        { text: "Der Netzplan", correct: false },
        { text: "Die Sicherheitsleitlinie", correct: false },
        { text: "Das Glossar", correct: false },
      ],
      explanation: "Die Kreuzreferenztabelle ordnet Anforderungen den elementaren Gefährdungen zu.",
      source: { doc: "200-2", section: "Kap. 8.4.2", page: 150 },
    },
    {
      id: "p07-09",
      topic: 7,
      level: "basis",
      stem: "Nach welchem Niveau richtet sich die Befragungstiefe beim IT-Grundschutz-Check zunächst?",
      options: [
        { text: "Nach dem Niveau der Basis- und Standard-Anforderungen", correct: true },
        { text: "Nach dem Niveau der Anforderungen bei erhöhtem Schutzbedarf", correct: false },
        { text: "Nach den Wünschen der Befragten", correct: false },
        { text: "Nach dem Budget des Informationssicherheitsmanagements", correct: false },
      ],
      explanation:
        "Weitergehende Aspekte hochschutzbedürftiger Anwendungen werden erst nach Abschluss des Checks betrachtet.",
      source: { doc: "200-2", section: "Kap. 8.4.2", page: 150 },
    },
    {
      id: "p07-10",
      topic: 7,
      level: "basis",
      stem: "Welche Stamminformationen sollten bei der Dokumentation des IT-Grundschutz-Checks erfasst werden?",
      options: [
        { text: "Nummer und Bezeichnung des Zielobjekts bzw. der Gruppe", correct: true },
        { text: "Erfassungsdatum und Name der erfassenden Person", correct: true },
        { text: "Die befragten Ansprechpartner", correct: true },
        { text: "Der Standort der zugeordneten Objekte", correct: true },
      ],
      explanation: "Alle vier Angaben werden im Standard als Stamminformationen genannt.",
      source: { doc: "200-2", section: "Kap. 8.4.3", page: 151 },
    },
    {
      id: "p07-11",
      topic: 7,
      level: "basis",
      stem: "Wozu dient das Feld „Defizite/Kostenschätzung“ in der Dokumentation des IT-Grundschutz-Checks?",
      options: [
        {
          text: "Das Risiko nicht oder teilweise erfüllter Anforderungen zu dokumentieren",
          correct: true,
        },
        {
          text: "Den finanziellen und personellen Aufwand für die Beseitigung der Defizite zu schätzen",
          correct: true,
        },
        { text: "Den Schutzbedarf des Zielobjekts festzulegen", correct: false },
        {
          text: "Die Kosten bereits vollständig umgesetzter Maßnahmen abzurechnen",
          correct: false,
        },
      ],
      explanation: "Das Feld unterstützt Audits, Zertifizierung und die spätere Umsetzungsplanung.",
      source: { doc: "200-2", section: "Kap. 8.4.3", page: 152 },
    },
    {
      id: "p07-12",
      topic: 7,
      level: "experte",
      stem: "Bei einem Webserver ist der Dienst FTP nicht installiert. Eine Anforderung zur sicheren Konfiguration von FTP wird geprüft. Welche Dokumentation ist korrekt?",
      options: [
        { text: "Status „entbehrlich“", correct: true },
        {
          text: "Begründung im Feld Bemerkungen/Begründungen, z. B. „Dienst nicht installiert“",
          correct: true,
        },
        { text: "Status „ja“, da kein Risiko besteht", correct: false },
        { text: "Status „nein“, da keine Maßnahme umgesetzt wurde", correct: false },
      ],
      explanation:
        "Nicht relevante Anforderungen sind „entbehrlich“; die Begründung wird dokumentiert, damit die Entscheidung nachvollziehbar ist.",
      source: { doc: "200-2", section: "Kap. 8.4.2 und 8.4.3", page: 150 },
    },
    {
      id: "p07-13",
      topic: 7,
      level: "experte",
      stem: "Statt der im Baustein geforderten Lösung setzt eine Institution eine gleichwertige Alternativmaßnahme ein. Was ist im IT-Grundschutz-Check zu beachten?",
      options: [
        { text: "Die Anforderung kann als „entbehrlich“ geführt werden.", correct: true },
        {
          text: "Es muss begründet werden, dass das Risiko aller betreffenden elementaren Gefährdungen angemessen minimiert wurde.",
          correct: true,
        },
        {
          text: "Die betroffenen elementaren Gefährdungen werden über die Kreuzreferenztabelle identifiziert.",
          correct: true,
        },
        {
          text: "Eine Begründung ist nicht erforderlich, da die Maßnahme gleichwertig ist.",
          correct: false,
        },
      ],
      explanation:
        "Alternativmaßnahmen erfordern eine Begründung anhand der elementaren Gefährdungen.",
      source: { doc: "200-2", section: "Kap. 8.4.2", page: 150 },
    },
    {
      id: "p07-14",
      topic: 7,
      level: "experte",
      stem: "Ein Administrator gibt im Interview an, alle Server seien gehärtet. Wie sollte das Interviewteam vorgehen?",
      options: [
        {
          text: "Die Aussage bei Bedarf stichprobenartig an ausgewählten Systemen verifizieren",
          correct: true,
        },
        { text: "Vorhandene Regelungen und Konzepte zur Härtung sichten", correct: true },
        {
          text: "Die Aussage ungeprüft als „ja“ übernehmen, da Prüfungen nicht vorgesehen sind",
          correct: false,
        },
        {
          text: "Dem Befragten am Ende des Bausteins das Ergebnis mitteilen und erläutern",
          correct: true,
        },
      ],
      explanation:
        "Interviewaussagen können durch Stichproben verifiziert werden; Ergebnisse werden den Befragten erläutert.",
      source: { doc: "200-2", section: "Kap. 8.4.2", page: 150 },
    },
    {
      id: "p07-15",
      topic: 7,
      level: "experte",
      stem: "Teile des IT-Betriebs sind an ein externes Rechenzentrum ausgelagert. Was folgt daraus für den IT-Grundschutz-Check?",
      options: [
        {
          text: "Es ist zu klären, ob und in welchem Umfang das Rechenzentrum bei der Ermittlung des Umsetzungsstatus beteiligt werden muss.",
          correct: true,
        },
        { text: "Die ausgelagerten Teile werden vom Check ausgenommen.", correct: false },
        {
          text: "Die Terminkoordination mit externen Stellen verdient besondere Aufmerksamkeit.",
          correct: true,
        },
        {
          text: "Die Verantwortung für die Informationssicherheit geht auf das Rechenzentrum über.",
          correct: false,
        },
      ],
      explanation:
        "Externe Stellen sind ggf. einzubeziehen; die Verantwortung verbleibt bei der auslagernden Institution.",
      source: { doc: "200-2", section: "Kap. 8.4.1 und 8.3.7", page: 146 },
    },
  ],
};
