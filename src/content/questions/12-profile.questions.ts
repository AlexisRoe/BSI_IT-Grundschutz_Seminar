import type { TopicQuestions } from "../course.types";

/** Prüfungsfragenpool Themenfeld 12. */
export const pool: TopicQuestions = {
  topic: 12,
  questions: [
    {
      id: "p12-01",
      topic: 12,
      level: "basis",
      stem: "Welche Schritte des Sicherheitsprozesses bereitet ein IT-Grundschutz-Profil laut Strukturbeschreibung für einen Anwendungsbereich auf?",
      options: [
        {
          text: "Verallgemeinerte Strukturanalyse, Schutzbedarfsfeststellung und Modellierung",
          correct: true,
        },
        { text: "Auswahl und Anpassung von umzusetzenden Bausteinen", correct: true },
        { text: "Gegebenenfalls Risikoanalyse und Risikobehandlung", correct: true },
        { text: "Die Ausstellung eines Zertifikats für alle Anwender", correct: false },
      ],
      explanation: "Profile bereiten Prozessschritte auf; ein Zertifikat ersetzen sie nicht.",
      source: { doc: "profil", section: "Kap. 1", page: 5 },
    },
    {
      id: "p12-02",
      topic: 12,
      level: "basis",
      stem: "Welche Vorteile von IT-Grundschutz-Profilen nennt die Strukturbeschreibung?",
      options: [
        {
          text: "Zeitersparnis und geschonte personelle und finanzielle Ressourcen",
          correct: true,
        },
        { text: "Sicherheitskonzepte einer Branche werden vergleichbarer.", correct: true },
        {
          text: "Ein an Sprachgebrauch und Spezifika der Branche angepasster Werkzeugkasten",
          correct: true,
        },
        {
          text: "Die Schutzbedarfsfeststellung entfällt für alle Anwender vollständig.",
          correct: false,
        },
      ],
      explanation:
        "Profile liefern eine verallgemeinerte Schutzbedarfsfeststellung; Abweichungen sind trotzdem individuell zu prüfen.",
      source: { doc: "profil", section: "Kap. 1 Vorteile", page: 6 },
    },
    {
      id: "p12-03",
      topic: 12,
      level: "basis",
      stem: "Welche Bestandteile sollte ein IT-Grundschutz-Profil laut Strukturbeschreibung aufweisen?",
      options: [
        { text: "Management Summary", correct: true },
        { text: "Geltungsbereich (Scope)", correct: true },
        { text: "Restrisikobetrachtung/Risikobehandlung", correct: true },
        { text: "Den Auditbericht der letzten Zertifizierung", correct: false },
      ],
      explanation:
        "Aufbau: formale Aspekte, Management Summary, Geltungsbereich, Bausteine/Anforderungen/Maßnahmen, Restrisiko, Anwendungshinweise, unterstützende Informationen, Anhang.",
      source: { doc: "profil", section: "Kap. 2", page: 7 },
    },
    {
      id: "p12-04",
      topic: 12,
      level: "basis",
      stem: "Was wird in der Referenzarchitektur eines IT-Grundschutz-Profils festgelegt?",
      options: [
        {
          text: "Auf welche Objekte die Anforderungen des IT-Grundschutzes anzuwenden sind",
          correct: true,
        },
        {
          text: "Relevante Objekte mit eindeutigem Identifikator und kurzer Beschreibung",
          correct: true,
        },
        {
          text: "Wie mit Abweichungen gegenüber der Referenzarchitektur umgegangen werden kann",
          correct: true,
        },
        { text: "Die Gehaltsstruktur der Anwenderinstitutionen", correct: false },
      ],
      explanation: "Die Referenzarchitektur beschreibt den Untersuchungsgegenstand.",
      source: { doc: "profil", section: "Kap. 2.5", page: 11 },
    },
    {
      id: "p12-05",
      topic: 12,
      level: "basis",
      stem: "Unter welcher Bedingung ist ein IT-Grundschutz-Profil laut Strukturbeschreibung zu ISO 27001 kompatibel?",
      options: [
        { text: "Wenn mindestens die Standard-Absicherung umgesetzt wird", correct: true },
        {
          text: "Immer, auch wenn nur einzelne Basis-Anforderungen ausgewählt werden",
          correct: false,
        },
        {
          text: "Nur wenn ausschließlich Anforderungen bei erhöhtem Schutzbedarf gewählt werden",
          correct: false,
        },
        { text: "Niemals, da Profile nicht auf ISO 27001 beruhen", correct: false },
      ],
      explanation: "Bei geringerem Erfüllungsgrad ist die Kompatibilität zu prüfen.",
      source: { doc: "profil", section: "Kap. 2.3", page: 9 },
    },
    {
      id: "p12-06",
      topic: 12,
      level: "basis",
      stem: "Was geschieht, wenn ein IT-Grundschutz-Profil beim BSI zur Registrierung eingereicht wird?",
      options: [
        {
          text: "Das BSI nimmt eine formale und stichprobenartige inhaltliche Prüfung vor.",
          correct: true,
        },
        { text: "Bei positivem Ergebnis wird eine Registernummer vergeben.", correct: true },
        { text: "Das Profil wird im IT-Grundschutz-Profil-Register gelistet.", correct: true },
        {
          text: "Jede Anwenderinstitution erhält automatisch ein ISO 27001-Zertifikat.",
          correct: false,
        },
      ],
      explanation: "Registrierung ist keine Zertifizierung der Anwender.",
      source: { doc: "profil", section: "Kap. 3", page: 23 },
    },
    {
      id: "p12-07",
      topic: 12,
      level: "basis",
      stem: "Welche Möglichkeiten zur Anpassung von Baustein-Anforderungen nennt die Strukturbeschreibung für ein Profil?",
      options: [
        {
          text: "Nur bestimmte Anforderungen als relevant festlegen, z. B. nur Basis-Anforderungen",
          correct: true,
        },
        { text: "Anforderungen konkretisieren", correct: true },
        { text: "Anforderungen komplett streichen", correct: true },
        {
          text: "Zusätzliche, im IT-Grundschutz bisher nicht vorhandene Anforderungen ergänzen",
          correct: true,
        },
      ],
      explanation: "Alle vier Möglichkeiten werden genannt.",
      source: { doc: "profil", section: "Kap. 2.6", page: 14 },
    },
    {
      id: "p12-08",
      topic: 12,
      level: "basis",
      stem: "Was gehört typischerweise in den Anhang eines IT-Grundschutz-Profils?",
      options: [
        { text: "Benutzerdefinierte Bausteine", correct: true },
        {
          text: "Detaillierte Informationen zu Schutzbedarfsfeststellung und Risikobewertung",
          correct: true,
        },
        { text: "Glossar, Abkürzungs- und Literaturverzeichnis", correct: true },
        { text: "Personenbezogene Daten aller Anwender", correct: false },
      ],
      explanation: "Der Anhang enthält Detailinformationen und ggf. benutzerdefinierte Bausteine.",
      source: { doc: "profil", section: "Kap. 2.10", page: 21 },
    },
    {
      id: "p12-09",
      topic: 12,
      level: "experte",
      stem: "Ein Profil soll auf eine Standard-Anforderung eines Bausteins verzichten. Was verlangt die Strukturbeschreibung?",
      options: [
        { text: "Eine stichhaltige Begründung", correct: true },
        {
          text: "Als Begründung kommen z. B. Risiko-Übernahme, Risiko-Reduktion durch alternative Anforderungen oder Risiko-Transfer infrage.",
          correct: true,
        },
        {
          text: "Die verbleibenden Restrisiken sind zu bewerten und zu dokumentieren.",
          correct: true,
        },
        {
          text: "Ein Verzicht ist ohne Begründung möglich, da Profile verbindlich sind.",
          correct: false,
        },
      ],
      explanation:
        "Verzicht auf Standard-Anforderungen erfordert eine stichhaltige Begründung; Restrisiken werden dokumentiert.",
      source: { doc: "profil", section: "Kap. 2.6 und 2.7", page: 15 },
    },
    {
      id: "p12-10",
      topic: 12,
      level: "experte",
      stem: "Der eigene Informationsverbund weicht stark von der Referenzarchitektur eines Profils ab. Was empfiehlt die Strukturbeschreibung?",
      options: [
        {
          text: "Es kann zielführender sein, ein eigenes Profil zu erstellen, z. B. auf Basis des vorhandenen.",
          correct: true,
        },
        {
          text: "Kleinere Abweichungen sind zu dokumentieren und mit passenden Bausteinen abzudecken.",
          correct: true,
        },
        {
          text: "Das Profil darf trotz großer Abweichungen unverändert übernommen werden.",
          correct: false,
        },
        { text: "Abweichende Objekte werden grundsätzlich nicht betrachtet.", correct: false },
      ],
      explanation: "Abweichungen sollten nicht zu groß sein; sonst eigenes Profil.",
      source: { doc: "profil", section: "Kap. 2.5", page: 12 },
    },
  ],
};
