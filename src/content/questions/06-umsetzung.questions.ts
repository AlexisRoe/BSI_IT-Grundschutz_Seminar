import type { TopicQuestions } from "../course.types";

/** Prüfungsfragenpool Themenfeld 6. */
export const pool: TopicQuestions = {
  topic: 6,
  questions: [
    {
      id: "p06-01",
      topic: 6,
      level: "basis",
      stem: "Welche Teilaufgaben gehören laut BSI-Standard 200-2 zur Strukturanalyse?",
      options: [
        { text: "Erfassung der Geschäftsprozesse, Anwendungen und Informationen", correct: true },
        { text: "Netzplanerhebung", correct: true },
        { text: "Erfassung der Räume und Gebäude", correct: true },
        { text: "Festlegung des Umsetzungsstatus der Anforderungen", correct: false },
      ],
      explanation: "Der Umsetzungsstatus wird im IT-Grundschutz-Check festgestellt.",
      source: { doc: "200-2", section: "Kap. 8.1", page: 79 },
    },
    {
      id: "p06-02",
      topic: 6,
      level: "basis",
      stem: "Welche Vorteile hat eine konsequente Gruppenbildung bei technischen Objekten?",
      options: [
        {
          text: "Die Administration wird vereinfacht, wenn es nur wenige Grundkonfigurationen gibt.",
          correct: true,
        },
        {
          text: "Die Zahl potenzieller Sicherheitslücken wird durch Standardisierung reduziert.",
          correct: true,
        },
        {
          text: "Eine Stichprobe repräsentiert in der Regel den Sicherheitszustand der Gruppe.",
          correct: true,
        },
        { text: "Eine Schutzbedarfsfeststellung wird dadurch überflüssig.", correct: false },
      ],
      explanation:
        "Gruppenbildung ersetzt die Schutzbedarfsfeststellung nicht; gleicher Schutzbedarf ist Voraussetzung.",
      source: { doc: "200-2", section: "Kap. 8.1.1", page: 79 },
    },
    {
      id: "p06-03",
      topic: 6,
      level: "basis",
      stem: "In welchem Fall ist Gruppenbildung laut BSI-Standard 200-2 zwingend erforderlich?",
      options: [
        { text: "Beim Cloud Computing", correct: true },
        { text: "Bei Räumen mit nur einem IT-System", correct: false },
        { text: "Bei Geschäftsprozessen mit sehr hohem Schutzbedarf", correct: false },
        { text: "Bei Außenverbindungen", correct: false },
      ],
      explanation:
        "Beim Cloud Computing ist eine Gruppenbildung, z. B. nach Schutzbedarf, zwingend erforderlich.",
      source: { doc: "200-2", section: "Kap. 8.1.1", page: 80 },
    },
    {
      id: "p06-04",
      topic: 6,
      level: "basis",
      stem: "Welche Datenträger und Dokumente sollten laut BSI-Standard 200-2 in der Strukturanalyse gesondert erfasst werden, sofern sie nicht fest mit einer Anwendung oder einem IT-System verknüpft sind?",
      options: [
        { text: "Archiv- und Backup-Datenträger", correct: true },
        { text: "Ausgedruckte Notfallhandbücher", correct: true },
        { text: "Wichtige Verträge mit Partnern und Kunden", correct: true },
        { text: "USB-Sticks und externe Festplatten für den mobilen Einsatz", correct: true },
      ],
      explanation: "Alle genannten Beispiele werden im Standard ausdrücklich aufgeführt.",
      source: { doc: "200-2", section: "Kap. 8.1.3", page: 83 },
    },
    {
      id: "p06-05",
      topic: 6,
      level: "basis",
      stem: "Welche Angaben sollten bei der Erhebung der IT-Systeme laut BSI-Standard 200-2 vermerkt werden?",
      options: [
        { text: "Eindeutige Bezeichnung bzw. Gruppe mit Anzahl", correct: true },
        { text: "Status (in Betrieb, im Test, in Planung)", correct: true },
        { text: "Aufstellungsort", correct: true },
        { text: "Seriennummer jeder Tastatur und jedes Bildschirms", correct: false },
      ],
      explanation: "Erfasst werden Systeme als Ganzes, nicht ihre einzelnen Bestandteile.",
      source: { doc: "200-2", section: "Kap. 8.1.5", page: 91 },
    },
    {
      id: "p06-06",
      topic: 6,
      level: "basis",
      stem: "Welche Aussagen zur Erfassung von IoT-Geräten treffen laut BSI-Standard 200-2 zu?",
      options: [
        { text: "IoT-Geräte werden bei Bestandserhebungen leicht übersehen.", correct: true },
        {
          text: "Regelmäßige Netzscans können helfen, nicht zuzuordnende Geräte zu finden.",
          correct: true,
        },
        { text: "Gespräche mit der Haustechnik sind hilfreich.", correct: true },
        {
          text: "Privat mitgebrachte Geräte sind grundsätzlich nicht zu betrachten.",
          correct: false,
        },
      ],
      explanation:
        "Auch mitgebrachte private Geräte wie Smartwatches werden als IoT-Beispiele genannt.",
      source: { doc: "200-2", section: "Kap. 8.1.7", page: 97 },
    },
    {
      id: "p06-07",
      topic: 6,
      level: "basis",
      stem: "Welche Räumlichkeiten müssen laut BSI-Standard 200-2 in die Strukturanalyse einbezogen werden?",
      options: [
        { text: "Serverräume und Datenträgerarchive", correct: true },
        { text: "Telearbeitsplätze", correct: true },
        {
          text: "Räume, in denen Aktenordner mit schutzbedürftigen Informationen lagern",
          correct: true,
        },
        { text: "Nur Räume, in denen sich vernetzte IT-Systeme befinden", correct: false },
      ],
      explanation:
        "Auch Räume mit nicht elektronischen schutzbedürftigen Informationen und Räume außerhalb der Liegenschaften gehören dazu.",
      source: { doc: "200-2", section: "Kap. 8.1.8", page: 101 },
    },
    {
      id: "p06-08",
      topic: 6,
      level: "basis",
      stem: "Welche Schadensszenarien nennt der BSI-Standard 200-2 für die Schutzbedarfsfeststellung?",
      options: [
        { text: "Verstoß gegen Gesetze/Vorschriften/Verträge", correct: true },
        { text: "Beeinträchtigung der persönlichen Unversehrtheit", correct: true },
        { text: "Negative Innen- oder Außenwirkung", correct: true },
        { text: "Steigerung der Produktivität", correct: false },
      ],
      explanation:
        "Die sechs Szenarien: Gesetzesverstoß, informationelle Selbstbestimmung, persönliche Unversehrtheit, Aufgabenerfüllung, Innen-/Außenwirkung, finanzielle Auswirkungen.",
      source: { doc: "200-2", section: "Kap. 8.2.1", page: 105 },
    },
    {
      id: "p06-09",
      topic: 6,
      level: "basis",
      stem: "Welche maximal tolerierbare Ausfallzeit ist laut den Beispieltabellen des BSI-Standards 200-2 typisch für den Schutzbedarf „normal“?",
      options: [
        { text: "Zwischen 24 und 72 Stunden", correct: true },
        { text: "Kleiner als eine Stunde", correct: false },
        { text: "Zwischen einer und 24 Stunden", correct: false },
        { text: "Mindestens eine Woche", correct: false },
      ],
      explanation: "normal: 24–72 h; hoch: 1–24 h; sehr hoch: unter 1 h.",
      source: { doc: "200-2", section: "Kap. 8.2.1, Tabelle 2", page: 106 },
    },
    {
      id: "p06-10",
      topic: 6,
      level: "basis",
      stem: "Worauf basiert die Schutzbedarfsfeststellung für IT-Systeme, Räume und Kommunikationsverbindungen?",
      options: [
        {
          text: "Auf dem Schutzbedarf der Geschäftsprozesse und Anwendungen (Vererbung)",
          correct: true,
        },
        { text: "Auf dem Anschaffungswert der Hardware", correct: false },
        { text: "Auf der Anzahl der Benutzer", correct: false },
        { text: "Auf dem Ergebnis des IT-Grundschutz-Checks", correct: false },
      ],
      explanation:
        "Der Schutzbedarf der Geschäftsprozesse und Informationen vererbt sich auf die zur Verarbeitung genutzten Objekte.",
      source: { doc: "200-2", section: "Kap. 8.2.2", page: 108 },
    },
    {
      id: "p06-11",
      topic: 6,
      level: "basis",
      stem: "Was beschreibt das Maximumprinzip?",
      options: [
        {
          text: "Der Schaden bzw. die Summe der Schäden mit den schwerwiegendsten Auswirkungen bestimmt den Schutzbedarf eines Objekts.",
          correct: true,
        },
        { text: "Jedes Objekt erhält immer den Schutzbedarf „sehr hoch“.", correct: false },
        {
          text: "Der Schutzbedarf wird als Durchschnitt aller Anwendungen gebildet.",
          correct: false,
        },
        { text: "Es werden maximal drei Schutzbedarfskategorien verwendet.", correct: false },
      ],
      explanation: "Maßgeblich ist der schwerwiegendste Schaden – kein Durchschnitt.",
      source: { doc: "kompendium", section: "Glossar: Maximumprinzip" },
    },
    {
      id: "p06-12",
      topic: 6,
      level: "basis",
      stem: "Bei welchem Grundwert tritt der Verteilungseffekt laut BSI-Standard 200-2 hauptsächlich auf?",
      options: [
        { text: "Verfügbarkeit", correct: true },
        { text: "Vertraulichkeit", correct: false },
        { text: "Integrität", correct: false },
        { text: "Authentizität", correct: false },
      ],
      explanation:
        "Vor allem bei redundant ausgelegten Systemen hinsichtlich der Verfügbarkeit; Verteilungseffekte bei Vertraulichkeit sind aber ebenfalls vorstellbar.",
      source: { doc: "200-2", section: "Kap. 8.2.2", page: 109 },
    },
    {
      id: "p06-13",
      topic: 6,
      level: "basis",
      stem: "Welche Kommunikationsverbindungen gelten laut BSI-Standard 200-2 als kritisch?",
      options: [
        { text: "Außenverbindungen, z. B. ins Internet", correct: true },
        {
          text: "Verbindungen, über die hochschutzbedürftige Informationen übertragen werden",
          correct: true,
        },
        { text: "Außenverbindungen für die Fernadministration", correct: true },
        { text: "Ausschließlich Verbindungen mit Glasfaser-Technik", correct: false },
      ],
      explanation:
        "Die Übertragungstechnik ist kein Kriterium; maßgeblich sind Außenbezug und Schutzbedarf.",
      source: { doc: "200-2", section: "Kap. 8.2.8", page: 124 },
    },
    {
      id: "p06-14",
      topic: 6,
      level: "basis",
      stem: "Welche Schutzwirkung haben die IT-Grundschutz-Anforderungen bei sehr hohem Schutzbedarf?",
      options: [
        {
          text: "Sie liefern eine Standard-Absicherung, reichen allein aber im Allgemeinen nicht aus.",
          correct: true,
        },
        {
          text: "Zusätzliche Maßnahmen sind individuell auf Grundlage einer Risikoanalyse zu ermitteln.",
          correct: true,
        },
        { text: "Sie sind immer ausreichend und angemessen.", correct: false },
        {
          text: "Sie sind nicht anzuwenden, da ausschließlich die Risikoanalyse gilt.",
          correct: false,
        },
      ],
      explanation:
        "Die Grundschutz-Anforderungen bleiben die Basis und werden durch Maßnahmen aus der Risikoanalyse ergänzt.",
      source: { doc: "200-2", section: "Kap. 8.2.9, Tabelle 5", page: 130 },
    },
    {
      id: "p06-15",
      topic: 6,
      level: "basis",
      stem: "Welche Arten von Sicherheitszonen nennt der BSI-Standard 200-2?",
      options: [
        { text: "Räumliche Sicherheitszonen", correct: true },
        { text: "Technische Sicherheitszonen", correct: true },
        { text: "Personelle Sicherheitszonen", correct: true },
        { text: "Finanzielle Sicherheitszonen", correct: false },
      ],
      explanation:
        "Genannt werden räumliche, technische und personelle Zonen sowie Zonenkonzepte für Virtualisierung und Cloud.",
      source: { doc: "200-2", section: "Kap. 8.2.9", page: 130 },
    },
    {
      id: "p06-16",
      topic: 6,
      level: "basis",
      stem: "Welche Bereiche sind laut BSI-Standard 200-2 mit R1 gekennzeichnet und bilden das grundlegende Sicherheitsgerüst?",
      options: [
        { text: "ISMS", correct: true },
        { text: "ORP", correct: true },
        { text: "OPS.1.1 Kern-IT-Betrieb", correct: true },
        { text: "INF Infrastruktur", correct: false },
      ],
      explanation: "R1: ISMS, ORP und OPS.1.1. R2 und R3 finden sich in allen anderen Schichten.",
      source: { doc: "200-2", section: "Kap. 8.3.3", page: 137 },
    },
    {
      id: "p06-17",
      topic: 6,
      level: "basis",
      stem: "Wann wird der konkrete Ansprechpartner zu einem modellierten Baustein ermittelt?",
      options: [
        { text: "Bei der Planung des Soll-Ist-Vergleichs im IT-Grundschutz-Check", correct: true },
        { text: "Bereits in der Strukturanalyse", correct: false },
        { text: "Erst bei der Zertifizierung", correct: false },
        {
          text: "Gar nicht, da die Zuständigkeit im Baustein abschließend festgelegt ist",
          correct: false,
        },
      ],
      explanation: "Bei der Modellierung kann nur Vorarbeit anhand der Rollen geleistet werden.",
      source: { doc: "200-2", section: "Kap. 8.3.4", page: 138 },
    },
    {
      id: "p06-18",
      topic: 6,
      level: "basis",
      stem: "Wie sollten die Anforderungen der IT-Grundschutz-Bausteine laut BSI-Standard 200-2 umgesetzt werden?",
      options: [
        {
          text: "Sinngemäß, angepasst an Rahmenbedingungen und Sprachgebrauch der Institution",
          correct: true,
        },
        { text: "Änderungen gegenüber dem Kompendium sind zu dokumentieren.", correct: true },
        { text: "Wörtlich und ohne jede Anpassung", correct: false },
        {
          text: "Nicht relevante Empfehlungen in Umsetzungshinweisen dürfen gestrichen werden.",
          correct: true,
        },
      ],
      explanation:
        "Anforderungen werden sinngemäß in konkrete Maßnahmen übersetzt; Änderungen werden dokumentiert.",
      source: { doc: "200-2", section: "Kap. 8.3.6", page: 142 },
    },
    {
      id: "p06-19",
      topic: 6,
      level: "experte",
      stem: "Eine Fachanwendung für die Lohnabrechnung (Vertraulichkeit „hoch“) läuft auf einem Applikationsserver. Ein Client der Poststelle kann nur den Status „Abrechnung erstellt“ abrufen. Welche Aussagen sind zutreffend?",
      options: [
        { text: "Der Applikationsserver erbt den hohen Vertraulichkeitsbedarf.", correct: true },
        {
          text: "Für den Client der Poststelle kann durch den Verteilungseffekt ein geringerer Schutzbedarf angesetzt werden.",
          correct: true,
        },
        {
          text: "Die Entscheidung zum Verteilungseffekt sollte sorgfältig dokumentiert werden.",
          correct: true,
        },
        {
          text: "Alle Clients im Netz erhalten automatisch den Schutzbedarf „hoch“.",
          correct: false,
        },
      ],
      explanation:
        "Ruft ein Client nur unkritische Daten einer vertraulichen Anwendung ab, kann sein Schutzbedarf geringer sein; die Entscheidung ist zu dokumentieren.",
      source: { doc: "200-2", section: "Kap. 8.2.2", page: 109 },
    },
    {
      id: "p06-20",
      topic: 6,
      level: "experte",
      stem: "Eine für sich unbedeutende Anwendung A liefert Lagerbestandsdaten an die geschäftskritische Auftragsabwicklung B. Wie ist der Schutzbedarf von A zu beurteilen?",
      options: [
        {
          text: "Der Schutzbedarf von B ist auf A zu übertragen (Beachtung von Abhängigkeiten).",
          correct: true,
        },
        {
          text: "A behält ihren niedrigen Schutzbedarf, da sie für sich betrachtet unbedeutend ist.",
          correct: false,
        },
        {
          text: "Laufen A und B auf verschiedenen IT-Systemen, sind die Schutzbedarfsanforderungen auch auf das System von A zu übertragen.",
          correct: true,
        },
        {
          text: "Es liegt ein Verteilungseffekt vor, der den Schutzbedarf von B senkt.",
          correct: false,
        },
      ],
      explanation:
        "Abhängigkeiten zwischen Anwendungen führen zur Übertragung des höheren Schutzbedarfs.",
      source: { doc: "200-2", section: "Kap. 8.2.2", page: 108 },
    },
    {
      id: "p06-21",
      topic: 6,
      level: "experte",
      stem: "Auf einem Virtualisierungsserver laufen zehn VMs mit normalem Verfügbarkeitsbedarf. Es wird ein Warm-Standby-System auf separater Hardware betrieben. Welche Einschätzung entspricht dem BSI-Standard 200-2?",
      options: [
        {
          text: "Durch Kumulation kann der Schutzbedarf zunächst auf „hoch“ steigen.",
          correct: true,
        },
        { text: "Durch den Verteilungseffekt kann er wieder auf „normal“ sinken.", correct: true },
        {
          text: "Virtualisierungsserver haben immer den Schutzbedarf „sehr hoch“.",
          correct: false,
        },
        { text: "Kumulationseffekte sind bei Virtualisierung ausgeschlossen.", correct: false },
      ],
      explanation:
        "Der Standard beschreibt genau diesen Fall: Kumulation nach „hoch“, durch Verteilung (Warm-Standby) zurück auf „normal“.",
      source: { doc: "200-2", section: "Kap. 8.2.4", page: 118 },
    },
    {
      id: "p06-22",
      topic: 6,
      level: "experte",
      stem: "Ein Konzern definiert für Vertraulichkeit vier Stufen („offen“, „intern“, „vertraulich“, „geheim“). Was ist laut BSI-Standard 200-2 zu beachten?",
      options: [
        { text: "Abweichende Kategorien sind grundsätzlich zulässig.", correct: true },
        {
          text: "Es ist festzulegen, welche Stufen den Kategorien „hoch“ und „sehr hoch“ entsprechen.",
          correct: true,
        },
        {
          text: "Die Zuordnung wird benötigt, um zu entscheiden, welche Objekte in die Risikoanalyse aufgenommen werden.",
          correct: true,
        },
        { text: "Bei mehr als drei Kategorien entfällt die Risikoanalyse.", correct: false },
      ],
      explanation:
        "Weitere Kategorien sind möglich; ihre Entsprechung zu „hoch“/„sehr hoch“ muss für die Auswahl der Risikoanalyse-Objekte klar sein.",
      source: { doc: "200-2", section: "Kap. 8.2.1", page: 104 },
    },
    {
      id: "p06-23",
      topic: 6,
      level: "experte",
      stem: "Ein physischer Server mit Bare-Metal-Hypervisor soll modelliert werden. Wie ist laut BSI-Standard 200-2 vorzugehen?",
      options: [
        { text: "Für den Hypervisor ist eine Risikoanalyse durchzuführen.", correct: true },
        {
          text: "Die Ergebnisse sollten mit den Anforderungen des Bausteins SYS.1.5 Virtualisierung konsolidiert werden.",
          correct: true,
        },
        { text: "Der Hypervisor wird wie ein Client mit SYS.2.1 modelliert.", correct: false },
        {
          text: "Virtuelle Systeme werden nach denselben Regeln modelliert wie physische.",
          correct: true,
        },
      ],
      explanation:
        "Bare-Metal-Hypervisoren sind kein Zielobjekt des Kompendiums; daher Risikoanalyse plus Abgleich mit SYS.1.5.",
      source: { doc: "200-2", section: "Kap. 8.3.5", page: 139 },
    },
    {
      id: "p06-24",
      topic: 6,
      level: "experte",
      stem: "Bei der Schutzbedarfsfeststellung zeigt sich, dass nur die Entwicklungsabteilung hoch vertrauliche Konstruktionsdaten verarbeitet. Wie lässt sich verhindern, dass sich der hohe Schutzbedarf über die Vernetzung auf den ganzen Informationsverbund ausbreitet?",
      options: [
        {
          text: "Durch Einrichtung von Sicherheitszonen zur Trennung von Bereichen mit unterschiedlichem Schutzbedarf",
          correct: true,
        },
        { text: "Durch Netzsegmentierung als technische Sicherheitszone", correct: true },
        {
          text: "Durch eine zusätzliche Zugangskontrolle zur Entwicklungsabteilung",
          correct: true,
        },
        {
          text: "Durch Absenken der Vertraulichkeit der Konstruktionsdaten auf „normal“",
          correct: false,
        },
      ],
      explanation:
        "Sicherheitszonen (räumlich, technisch, personell) begrenzen die Ausbreitung des höheren Schutzbedarfs.",
      source: { doc: "200-2", section: "Kap. 8.2.9", page: 130 },
    },
  ],
};
