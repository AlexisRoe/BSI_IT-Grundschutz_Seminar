import type { TopicQuestions } from "../course.types";

/** Prüfungsfragenpool Themenfeld 2. */
export const pool: TopicQuestions = {
  topic: 2,
  questions: [
    {
      id: "p02-01",
      topic: 2,
      level: "basis",
      stem: "Welche Norm enthält laut BSI-Standard 200-1 einen Überblick über ISMS sowie grundlegende Begriffe und Definitionen?",
      options: [
        { text: "ISO/IEC 27000", correct: true },
        { text: "ISO/IEC 27004", correct: false },
        { text: "ISO/IEC 27006", correct: false },
        { text: "ISO/IEC 27009", correct: false },
      ],
      explanation: "ISO/IEC 27000 („Overview and vocabulary“) liefert Überblick und Begriffe.",
      source: { doc: "200-1", section: "Kap. 2.1.1", page: 9 },
    },
    {
      id: "p02-02",
      topic: 2,
      level: "basis",
      stem: "Welche Aussagen zu ISO/IEC 27002 treffen zu?",
      options: [
        {
          text: "Sie unterstützt bei der Auswahl und Umsetzung der in ISO/IEC 27001 beschriebenen Maßnahmen.",
          correct: true,
        },
        {
          text: "Ihre Empfehlungen sind in erster Linie für die Management-Ebene gedacht.",
          correct: true,
        },
        {
          text: "Sie enthält zahlreiche detaillierte technische Konfigurationsvorgaben.",
          correct: false,
        },
        { text: "Auf ihrer Grundlage wird ein ISMS zertifiziert.", correct: false },
      ],
      explanation:
        "ISO/IEC 27002 enthält kaum konkrete technische Hinweise; zertifiziert wird nach ISO/IEC 27001.",
      source: { doc: "200-1", section: "Kap. 2.1.1", page: 9 },
    },
    {
      id: "p02-03",
      topic: 2,
      level: "basis",
      stem: "Welche Norm behandelt die Bewertung der Umsetzung und Wirksamkeit eines ISMS anhand von Kenngrößen?",
      options: [
        { text: "ISO/IEC 27001", correct: false },
        { text: "ISO/IEC 27004", correct: true },
        { text: "ISO/IEC 27005", correct: false },
        { text: "ISO/IEC 20000", correct: false },
      ],
      explanation: "ISO/IEC 27004 behandelt Monitoring, Messung, Analyse und Bewertung.",
      source: { doc: "200-1", section: "Kap. 2.1.1", page: 9 },
    },
    {
      id: "p02-04",
      topic: 2,
      level: "basis",
      stem: "Welche Aussagen zu COBIT 5 treffen laut BSI-Standard 200-1 zu?",
      options: [
        { text: "COBIT wird von der ISACA herausgegeben.", correct: true },
        { text: "COBIT 5 betrachtet 37 Prozessgebiete in fünf Domänen.", correct: true },
        {
          text: "COBIT 5 fordert, dass Ziele aus der Geschäftsstrategie in die Ziele der IT einfließen.",
          correct: true,
        },
        { text: "COBIT 5 ist die Grundlage der Norm ISO/IEC 20000.", correct: false },
      ],
      explanation: "ISO/IEC 20000 basiert auf ITIL, nicht auf COBIT.",
      source: { doc: "200-1", section: "Kap. 2.1.3", page: 13 },
    },
    {
      id: "p02-05",
      topic: 2,
      level: "basis",
      stem: "Für wen sind die Anforderungen des PCI DSS verbindlich?",
      options: [
        {
          text: "Für alle Institutionen, die Karteninhaberdaten von Kreditkarten speichern, verarbeiten oder übertragen",
          correct: true,
        },
        { text: "Für Händler, die Kreditkartenzahlungen akzeptieren", correct: true },
        {
          text: "Für Dienstleister, die Kreditkartendaten im Auftrag weiterverarbeiten",
          correct: true,
        },
        { text: "Ausschließlich für US-Bundesbehörden", correct: false },
      ],
      explanation:
        "PCI DSS gilt für alle, die Karteninhaberdaten verarbeiten – etwa Händler und Dienstleister. Für US-Behörden verpflichtend sind NIST-Standards.",
      source: { doc: "200-1", section: "Kap. 2.1.3", page: 14 },
    },
    {
      id: "p02-06",
      topic: 2,
      level: "basis",
      stem: "Was beschreibt der BSI-Standard 200-3?",
      options: [
        { text: "Eine Risikoanalyse auf der Basis von IT-Grundschutz", correct: true },
        {
          text: "Eine vereinfachte Risikoanalyse, die auf den elementaren Gefährdungen basiert",
          correct: true,
        },
        { text: "Den Aufbau eines Business Continuity Management Systems", correct: false },
        {
          text: "Die Anforderungen an die Akkreditierung von Zertifizierungsstellen",
          correct: false,
        },
      ],
      explanation:
        "200-3 beschreibt die Risikoanalyse auf Basis der elementaren Gefährdungen. BCM ist Thema von 200-4, Akkreditierung von ISO/IEC 27006.",
      source: { doc: "200-1", section: "Kap. 2.1.2", page: 12 },
    },
    {
      id: "p02-07",
      topic: 2,
      level: "basis",
      stem: "Welche Aussage beschreibt das Verhältnis von Bausteinen und Umsetzungshinweisen richtig?",
      options: [
        {
          text: "Bausteine beschreiben, was gemacht werden sollte; Umsetzungshinweise geben konkrete Hinweise, wie Anforderungen erfüllt werden können.",
          correct: true,
        },
        { text: "Umsetzungshinweise ersetzen die Bausteine vollständig.", correct: false },
        {
          text: "Bausteine enthalten ausschließlich technische Konfigurationsanleitungen.",
          correct: false,
        },
        {
          text: "Umsetzungshinweise sind für eine Zertifizierung verpflichtend umzusetzen.",
          correct: false,
        },
      ],
      explanation: "Bausteine = Was, Umsetzungshinweise = Wie (Best Practices).",
      source: { doc: "200-1", section: "Kap. 2.1.2", page: 12 },
    },
    {
      id: "p02-08",
      topic: 2,
      level: "basis",
      stem: "Welche Aussagen zur Verschlusssachenanweisung (VSA) und zum IT-Grundschutz treffen zu?",
      options: [
        {
          text: "Die VSA ist für den materiellen Geheimschutz des Bundes maßgeblich.",
          correct: true,
        },
        {
          text: "Der IT-Grundschutz dient der Informationssicherheit, die VSA dem Geheimschutz.",
          correct: true,
        },
        {
          text: "Eine ISO 27001-Zertifizierung auf Basis von IT-Grundschutz ersetzt die Freigaben nach VSA.",
          correct: false,
        },
        {
          text: "Der Baustein CON.11.1 richtet sich an Institutionen, die der VSA unterliegen.",
          correct: true,
        },
      ],
      explanation:
        "Das Zertifikat ersetzt keine VSA-Freigaben; CON.11.1 unterstützt Bundesbehörden und bundesunmittelbare Einrichtungen bei der Umsetzung.",
      source: { doc: "kompendium", section: "CON.11.1, Kap. 1" },
    },
    {
      id: "p02-09",
      topic: 2,
      level: "experte",
      stem: "Ein Energieversorger betreibt bereits ein ISMS und baut ein BCMS auf. Welche Empfehlungen ergeben sich aus BSI-Standard 200-4?",
      options: [
        {
          text: "Die Schnittstellen zwischen BCMS und ISMS sollten bereits in der Planungs- und Konzeptionsphase festgelegt werden.",
          correct: true,
        },
        {
          text: "Im Notbetrieb können Zielkonflikte zwischen Schutzzielen auftreten, etwa zwischen Verfügbarkeit und Vertraulichkeit.",
          correct: true,
        },
        {
          text: "Risikokategorien und Akzeptanzkriterien des Risikomanagements können in der BCM-Risikoanalyse wiederverwendet werden.",
          correct: true,
        },
        {
          text: "BCM und ISMS sollten strikt getrennt bleiben, da es keine gemeinsamen Methoden gibt.",
          correct: false,
        },
      ],
      explanation:
        "200-4 empfiehlt die frühe Festlegung der Schnittstellen und die gemeinsame Nutzung von Methoden und Parametern des Risikomanagements.",
      source: { doc: "200-4", section: "Kap. 4.2", page: 75 },
    },
    {
      id: "p02-10",
      topic: 2,
      level: "experte",
      stem: "Ein Konzern möchte die Anforderungen sektorspezifischer Regelwerke in sein ISMS nach ISO/IEC 27001 integrieren. Welche Normen sind dafür laut BSI-Standard 200-1 einschlägig?",
      options: [
        {
          text: "ISO/IEC 27009 beschreibt, wie sektorspezifische Erweiterungen in ein ISMS nach ISO/IEC 27001 einfließen.",
          correct: true,
        },
        {
          text: "ISO/IEC 27019 ist ein Beispiel für eine sektorspezifische Norm (Energiesektor).",
          correct: true,
        },
        {
          text: "ISO/IEC 27006 legt die Inhalte der sektorspezifischen Normen fest.",
          correct: false,
        },
        {
          text: "Sektorspezifische Normen sind mit ISO/IEC 27001 grundsätzlich unvereinbar.",
          correct: false,
        },
      ],
      explanation:
        "27009 regelt sektorspezifische Erweiterungen, 27010–27019 sind sektorspezifische Normen; 27006 betrifft die Akkreditierung von Zertifizierungsstellen.",
      source: { doc: "200-1", section: "Kap. 2.1.1", page: 10 },
    },
  ],
};
