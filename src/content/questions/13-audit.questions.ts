import type { TopicQuestions } from "../course.types";

/** Prüfungsfragenpool Themenfeld 13. */
export const pool: TopicQuestions = {
  topic: 13,
  questions: [
    {
      id: "p13-01",
      topic: 13,
      level: "basis",
      stem: "Was wird einer Institution mit der Vergabe eines ISO 27001-Zertifikats auf der Basis von IT-Grundschutz laut Auditierungsschema bescheinigt?",
      options: [
        { text: "Dass Informationssicherheit ein anerkannter Wert ist", correct: true },
        { text: "Dass ein funktionierendes ISMS vorhanden ist", correct: true },
        {
          text: "Dass zu einem bestimmten Zeitpunkt ein definiertes Sicherheitsniveau erreicht wurde",
          correct: true,
        },
        { text: "Dass künftig keine Sicherheitsvorfälle auftreten können", correct: false },
      ],
      explanation:
        "Ein Zertifikat ist eine Momentaufnahme mit Aussagen zu Wert, ISMS und Sicherheitsniveau – keine Garantie.",
      source: {
        doc: "audit",
        section: "Vorwort",
        page: 4,
        quote:
          "Mit der Vergabe eines Zertifikats wird der Institution bescheinigt, dass Informationssicherheit ein anerkannter Wert ist",
      },
    },
    {
      id: "p13-02",
      topic: 13,
      level: "basis",
      stem: "Welche Vorgehensweise muss für eine Auditierung laut Auditierungsschema umgesetzt sein?",
      options: [
        { text: "Standard-Absicherung", correct: true },
        { text: "Kern-Absicherung", correct: true },
        { text: "Basis-Absicherung als alleinige Grundlage", correct: false },
        { text: "Keine bestimmte Vorgehensweise", correct: false },
      ],
      explanation: "Voraussetzung ist die Umsetzung der Standard- oder Kern-Absicherung.",
      source: {
        doc: "audit",
        section: "Kap. 2.3",
        page: 9,
        quote:
          "Voraussetzung für die Zertifizierung und Auditierung ist die Umsetzung der Standard- oder Kernabsicherung",
      },
    },
    {
      id: "p13-03",
      topic: 13,
      level: "basis",
      stem: "Welche Listen muss die Strukturanalyse (A.1) laut den Hinweisen zu den Referenzdokumenten enthalten?",
      options: [
        { text: "Liste der IT-Systeme", correct: true },
        { text: "Liste der Kommunikationsverbindungen", correct: true },
        { text: "Liste der Dienstleister", correct: true },
        { text: "Liste der privaten Wohnadressen der Mitarbeitenden", correct: false },
      ],
      explanation:
        "Hinzu kommen u. a. bereinigter Netzplan, Geschäftsprozesse, Anwendungen sowie Räume, Gebäude und Standorte.",
      source: {
        doc: "refdoc",
        section: "Kap. 2.2",
        page: 7,
        quote: "In dieser Liste sind alle im Informationsverbund vorhandenen IT-Systeme",
      },
    },
    {
      id: "p13-04",
      topic: 13,
      level: "basis",
      stem: "Welche Prinzipien umfasst die Berufsethik laut Auditierungsschema?",
      options: [
        { text: "Fachkompetenz", correct: true },
        { text: "Sachliche Darstellung", correct: true },
        { text: "Objektivität und Sorgfalt", correct: true },
        { text: "Gewinnmaximierung des Auditunternehmens", correct: false },
      ],
      explanation:
        "Weitere Prinzipien: ethisches Verhalten, Vertrauenswürdigkeit, Nachweise und Nachvollziehbarkeit.",
      source: {
        doc: "audit",
        section: "Kap. 3",
        page: 10,
        quote: "Fachkompetenz: Die Mitglieder des Auditteams übernehmen nur solche Aufgaben",
      },
    },
    {
      id: "p13-05",
      topic: 13,
      level: "basis",
      stem: "Was ist Ziel der Phase 1 (Dokumentenprüfung) eines Audits?",
      options: [
        { text: "Ein ausreichendes Verständnis des Informationsverbunds gewinnen", correct: true },
        {
          text: "Prüfen, ob die Konzeption nach BSI-Standard 200-2 schlüssig und sinnvoll ist",
          correct: true,
        },
        {
          text: "Prüfen, ob die Zertifizierungsfähigkeit grundsätzlich gegeben ist",
          correct: true,
        },
        { text: "Technische Konfigurationen am Zielobjekt demonstrieren lassen", correct: false },
      ],
      explanation: "Demonstrationen am Zielobjekt gehören zur Phase 2.",
      source: {
        doc: "audit",
        section: "Kap. 4.1",
        page: 11,
        quote:
          "Der Auditor prüft insbesondere, ob die Zertifizierungsfähigkeit des Informationsverbundes grundsätzlich gegeben ist",
      },
    },
    {
      id: "p13-06",
      topic: 13,
      level: "basis",
      stem: "Wann kann der Auditteamleiter das Audit nach der Dokumentenprüfung abbrechen?",
      options: [
        { text: "Wenn die ISMS-Dokumentation gravierende Defizite aufweist", correct: true },
        {
          text: "Wenn bei der Institution keine Bereitschaft zur aktiven Mitwirkung erkennbar ist",
          correct: true,
        },
        { text: "Wenn eine Empfehlung ausgesprochen wurde", correct: false },
        { text: "Ein Abbruch ist nicht vorgesehen.", correct: false },
      ],
      explanation:
        "Ein Abbruch ist möglich, wenn ein positives Votum ausgeschlossen erscheint; die Zertifizierungsstelle ist zu informieren.",
      source: {
        doc: "audit",
        section: "Kap. 4.2",
        page: 12,
        quote:
          "wenn die Dokumentation zum ISMS gravierende Defizite aufweist oder bei der Institution nicht die Bereitschaft erkennbar ist",
      },
    },
    {
      id: "p13-07",
      topic: 13,
      level: "basis",
      stem: "Welche Vorgaben gelten laut Auditierungsschema für die Bausteinauswahl über die gesamte Zertifikatslaufzeit?",
      options: [
        {
          text: "Alle modellierten Schichten werden mit mindestens je einem Baustein geprüft.",
          correct: true,
        },
        { text: "Es werden mindestens 12 Bausteine auditiert.", correct: true },
        { text: "ISMS.1 wird bei jedem Audit geprüft.", correct: true },
        { text: "Der Antragsteller wählt die zu prüfenden Bausteine aus.", correct: false },
      ],
      explanation:
        "Der Auditteamleiter wählt die Bausteine risikoorientiert aus und begründet die Auswahl.",
      source: {
        doc: "audit",
        section: "Kap. 4.3",
        page: 12,
        quote: "Es werden alle modellierten Schichten mit mindestens je einem Baustein geprüft",
      },
    },
    {
      id: "p13-08",
      topic: 13,
      level: "basis",
      stem: "Was gilt für Remote-Audits laut Auditierungsschema?",
      options: [
        { text: "Vor- und Nacharbeiten sind generell remote durchführbar.", correct: true },
        {
          text: "Das Audit zur Erstzertifizierung muss bis auf Vor- und Nacharbeiten in Präsenz erfolgen.",
          correct: true,
        },
        {
          text: "Alle Audits dürfen ohne Bedingungen vollständig remote stattfinden.",
          correct: false,
        },
        {
          text: "Der Auditteamleiter muss das Risiko einer Remote-Durchführung abschätzen.",
          correct: true,
        },
      ],
      explanation:
        "Remote sind Überwachungs- und Re-Zertifizierungsaudits unter Bedingungen möglich.",
      source: {
        doc: "audit",
        section: "Kap. 4.3.2",
        page: 13,
        quote:
          "Das Audit zu einer Erstzertifizierung muss bis auf die Vor- und Nacharbeiten in Präsenz erfolgen",
      },
    },
    {
      id: "p13-09",
      topic: 13,
      level: "basis",
      stem: "Was bedeutet eine schwerwiegende Abweichung im Audit?",
      options: [
        {
          text: "Die Effektivität des ISMS oder die Sicherheit des Informationsverbunds ist erheblich gefährdet.",
          correct: true,
        },
        {
          text: "Ausstellung oder Aufrechterhaltung des Zertifikats ist nicht möglich.",
          correct: true,
        },
        {
          text: "Es handelt sich um einen unverbindlichen Verbesserungsvorschlag.",
          correct: false,
        },
        {
          text: "Sie kann vorliegen, wenn Anforderungen nicht oder in wesentlichen Teilen nicht umgesetzt sind.",
          correct: true,
        },
      ],
      explanation: "Unverbindliche Vorschläge sind Empfehlungen.",
      source: {
        doc: "audit",
        section: "Kap. 4.6",
        page: 15,
        quote:
          "Bei Vorliegen von schwerwiegenden Abweichungen ist die Ausstellung oder Aufrechterhaltung eines Zertifikats nicht möglich",
      },
    },
    {
      id: "p13-10",
      topic: 13,
      level: "basis",
      stem: "Wer entscheidet, ob eine Abweichung geringfügig oder schwerwiegend ist?",
      options: [
        { text: "Der Auditteamleiter", correct: true },
        { text: "Der ISB der auditierten Institution", correct: false },
        { text: "Die Institutionsleitung", correct: false },
        { text: "Ein Mehrheitsbeschluss aller Interviewpartner", correct: false },
      ],
      explanation:
        "Bei abweichender Auffassung kann sich die Institution schriftlich an die Zertifizierungsstelle wenden.",
      source: {
        doc: "audit",
        section: "Kap. 4.6 und 4.9",
        page: 15,
        quote:
          "Der Auditteamleiter entscheidet bei Abweichungen, ob es sich um geringfügige oder schwerwiegende Abweichungen handelt",
      },
    },
    {
      id: "p13-11",
      topic: 13,
      level: "basis",
      stem: "Was ist laut Auditierungsschema für das Überwachungsaudit von der Institution bereitzustellen?",
      options: [
        {
          text: "Eine Zusammenstellung der wesentlichen Änderungen seit dem letzten Audit",
          correct: true,
        },
        { text: "Die fortgeschriebene Liste der Referenzdokumente", correct: true },
        {
          text: "Eine vollständig neu erstellte Strukturanalyse, unabhängig von Änderungen",
          correct: false,
        },
        { text: "Ein neuer Zertifizierungsantrag", correct: false },
      ],
      explanation:
        "Im Überwachungsaudit werden nur geänderte Dokumente geprüft; ein neuer Antrag ist nicht nötig.",
      source: {
        doc: "audit",
        section: "Kap. 6",
        page: 19,
        quote:
          "Für das Überwachungsaudit ist von der Institution eine Zusammenstellung der wesentlichen Änderungen seit dem Audit bereitzustellen",
      },
    },
    {
      id: "p13-12",
      topic: 13,
      level: "experte",
      stem: "Eine Institution möchte eine Standard-Anforderung aus wirtschaftlichen Gründen bewusst nicht erfüllen. Wie ist dies laut Auditierungsschema korrekt zu dokumentieren?",
      options: [
        { text: "Umsetzungsstatus „nein“", correct: true },
        {
          text: "Aufnahme in den Realisierungsplan, ggf. mit Hinweis, dass die Umsetzung nicht vorgesehen ist",
          correct: true,
        },
        {
          text: "Bewertung der Risiken und Bestätigung der Risikoübernahme durch die Leitungsebene",
          correct: true,
        },
        { text: "Umsetzungsstatus „entbehrlich“ mit Verweis auf die Kosten", correct: false },
      ],
      explanation:
        "„Entbehrlich“ darf nicht für bewusst nicht erfüllte Anforderungen genutzt werden. MUSS-Teilanforderungen dürfen zudem nicht in die Risikoübernahme einfließen.",
      source: {
        doc: "audit",
        section: "Kap. 4.5",
        page: 15,
        quote:
          "Wird eine Anforderung gewollt nicht erfüllt (beispielsweise aus wirtschaftlichen Gründen), dann ist der Umsetzungsstatus auf „nein“ zu setzen",
      },
    },
    {
      id: "p13-13",
      topic: 13,
      level: "experte",
      stem: "Ein Auditteamleiter stellt im Vor-Ort-Audit fest, dass die Firewall-Regeln nur auf Papier dokumentiert sind. Wie ist laut Auditierungsschema zu prüfen?",
      options: [
        { text: "Direkt am Zielobjekt, nicht nur anhand der Papierlage", correct: true },
        { text: "Durch Demonstration durch die zuständige Administration", correct: true },
        { text: "Es genügt die Sichtung der Dokumentation.", correct: false },
        {
          text: "Es ist zu prüfen, ob die Anforderungen mit den Umsetzungshinweisen oder gleichwertigen Maßnahmen umgesetzt wurden.",
          correct: true,
        },
      ],
      explanation:
        "Technische Aspekte werden am Zielobjekt demonstriert; schwächere Mechanismen sollten nicht umgesetzt sein.",
      source: {
        doc: "audit",
        section: "Kap. 4.4",
        page: 14,
        quote:
          "Die einzelnen Prüfungen sollen direkt am Zielobjekt vor Ort erfolgen, nicht nur anhand der Papierlage",
      },
    },
    {
      id: "p13-14",
      topic: 13,
      level: "experte",
      stem: "Ein Informationsverbund umfasst 25 Standorte. Wie viele Standorte sind bei der Erstzertifizierung im Zertifizierungsaudit und im Überwachungsaudit mindestens zu begehen?",
      options: [
        { text: "Zertifizierungsaudit: 5", correct: true },
        { text: "Überwachungsaudit: 3", correct: true },
        { text: "Zertifizierungsaudit: 25", correct: false },
        { text: "Überwachungsaudit: 5", correct: false },
      ],
      explanation:
        "Zertifizierungsaudit: Quadratwurzel der Standortzahl, aufgerundet (√25 = 5). Überwachungsaudit: zusätzlich Faktor 0,6, aufgerundet (5 × 0,6 = 3).",
      source: {
        doc: "audit",
        section: "Kap. 4.3.1",
        page: 13,
        quote:
          "Quadratwurzel aus der Anzahl der Standorte, multipliziert mit dem Faktor 0,6, gerundet auf die höhere Anzahl",
      },
    },
    {
      id: "p13-15",
      topic: 13,
      level: "experte",
      stem: "Während eines Voraudits stellt der Auditteamleiter fest, dass ein positives Zertifizierungsaudit derzeit unwahrscheinlich ist. Was ist laut Auditierungsschema vorgesehen?",
      options: [
        {
          text: "Er kann empfehlen, das Audit um eine von ihm festgesetzte Zeit zu verschieben.",
          correct: true,
        },
        {
          text: "Die Empfehlung wird der Institution schriftlich mitgeteilt; die Zertifizierungsstelle wird schriftlich informiert.",
          correct: true,
        },
        { text: "Nach der Verschiebung ist ein weiteres Voraudit zulässig.", correct: false },
        {
          text: "Er kann die Institution gezielt auf die später geprüften Zielobjekte vorbereiten.",
          correct: false,
        },
      ],
      explanation:
        "Ein erneutes Voraudit ist nicht möglich; das Voraudit darf nicht zur Vorbereitung auf Prüfaspekte dienen.",
      source: {
        doc: "audit",
        section: "Kap. 5",
        page: 18,
        quote:
          "Kommt der Auditteamleiter nach dem Voraudit zu der Empfehlung, das Audit um eine von ihm festgesetzte Zeit zu verschieben",
      },
    },
  ],
};
