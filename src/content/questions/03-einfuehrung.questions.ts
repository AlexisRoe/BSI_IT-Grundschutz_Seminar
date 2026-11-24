import type { TopicQuestions } from "../course.types";

/** Prüfungsfragenpool Themenfeld 3. */
export const pool: TopicQuestions = {
  topic: 3,
  questions: [
    {
      id: "p03-01",
      topic: 3,
      level: "basis",
      stem: "Welche Schichten des IT-Grundschutz-Kompendiums enthalten systemorientierte Bausteine?",
      options: [
        { text: "INF", correct: true },
        { text: "SYS", correct: true },
        { text: "IND", correct: true },
        { text: "CON", correct: false },
      ],
      explanation:
        "System-Schichten: INF, NET, SYS, APP, IND. CON gehört zu den Prozess-Schichten.",
      source: {
        doc: "200-2",
        section: "Kap. 2.4",
        page: 13,
        quote:
          "Die systemorientierten Bausteine sind in die folgenden Schichten gruppiert: INF (Infrastruktur) NET (Netze und Kommunikation) SYS (IT-Systeme) APP (Anwendungen) IND (Industrielle IT)",
      },
    },
    {
      id: "p03-02",
      topic: 3,
      level: "basis",
      stem: "Welche Aufgaben gehören laut BSI-Standard 200-2 zu den Aufgaben des ISB?",
      options: [
        {
          text: "Die Leitungsebene bei der Erstellung der Sicherheitsleitlinie unterstützen",
          correct: true,
        },
        { text: "Sicherheitsvorfälle untersuchen", correct: true },
        {
          text: "Sensibilisierungs- und Schulungsmaßnahmen initiieren und koordinieren",
          correct: true,
        },
        {
          text: "Die Gesamtverantwortung für die Informationssicherheit übernehmen",
          correct: false,
        },
      ],
      explanation: "Die Gesamtverantwortung verbleibt bei der Leitungsebene.",
      source: {
        doc: "200-2",
        section: "Kap. 4.4",
        page: 41,
        quote:
          "die Leitungsebene bei der Erstellung der Leitlinie zur Informationssicherheit zu unterstützen",
      },
    },
    {
      id: "p03-03",
      topic: 3,
      level: "basis",
      stem: "Welche Aussagen zum IS-Management-Team treffen zu?",
      options: [
        { text: "Es unterstützt den ISB und koordiniert übergreifende Maßnahmen.", correct: true },
        {
          text: "Es kann im Extremfall nur aus dem ISB und seiner Vertretung bestehen.",
          correct: true,
        },
        { text: "Es entwickelt die Leitlinie zur Informationssicherheit.", correct: true },
        {
          text: "Es setzt die Leitlinie ohne Zustimmung der Leitungsebene in Kraft.",
          correct: false,
        },
      ],
      explanation:
        "Das IS-Management-Team entwickelt die Leitlinie; in Kraft gesetzt wird sie durch die Leitungsebene.",
      source: {
        doc: "200-2",
        section: "Kap. 4.5",
        page: 43,
        quote:
          "Das IS-Management-Team unterstützt den Informationssicherheitsbeauftragten, indem es übergreifende Maßnahmen in der Gesamtorganisation koordiniert",
      },
    },
    {
      id: "p03-04",
      topic: 3,
      level: "basis",
      stem: "Welche Aussage zur Personalunion von ISB und Datenschutzbeauftragtem ist laut BSI-Standard 200-2 richtig?",
      options: [
        { text: "Die beiden Rollen schließen sich nicht grundsätzlich aus.", correct: true },
        { text: "Die Personalunion ist grundsätzlich verboten.", correct: false },
        {
          text: "Bei Personalunion entfallen die direkten Berichtswege zur Leitungsebene.",
          correct: false,
        },
        { text: "Bei Personalunion ist keine Vertretung mehr erforderlich.", correct: false },
      ],
      explanation:
        "Die Rollen schließen sich nicht aus; Schnittstellen, direkte Berichtswege und Ressourcen müssen geklärt sein.",
      source: {
        doc: "200-2",
        section: "Kap. 4.4",
        page: 42,
        quote:
          "Die beiden Rollen schließen sich nicht grundsätzlich aus, es sind allerdings einige Aspekte im Vorfeld zu klären",
      },
    },
    {
      id: "p03-05",
      topic: 3,
      level: "basis",
      stem: "Was beschreibt die Leitlinie zur Informationssicherheit?",
      options: [
        {
          text: "Für welche Zwecke, mit welchen Mitteln und mit welchen Strukturen Informationssicherheit hergestellt werden soll",
          correct: true,
        },
        {
          text: "Die angestrebten Sicherheitsziele und die verfolgte Sicherheitsstrategie",
          correct: true,
        },
        { text: "Das angestrebte Sicherheitsniveau", correct: true },
        { text: "Die vollständige Ergebnisliste des IT-Grundschutz-Checks", correct: false },
      ],
      explanation:
        "Der IT-Grundschutz-Check ist Teil der Sicherheitskonzeption, nicht der Leitlinie.",
      source: {
        doc: "200-2",
        section: "Kap. 3.4",
        page: 32,
        quote:
          "für welche Zwecke, mit welchen Mitteln und mit welchen Strukturen Informationssicherheit innerhalb der Institution hergestellt werden soll",
      },
    },
    {
      id: "p03-06",
      topic: 3,
      level: "basis",
      stem: "Wann sollte neuen Mitarbeitenden die Sicherheitsleitlinie erläutert werden?",
      options: [
        { text: "Bevor sie Zugang zur Informationsverarbeitung erhalten", correct: true },
        { text: "Erst nach Ablauf der Probezeit", correct: false },
        { text: "Nur wenn sie Führungsverantwortung übernehmen", correct: false },
        { text: "Bei der nächsten jährlichen Schulung", correct: false },
      ],
      explanation: "Die Leitlinie ist vor dem Zugang zur Informationsverarbeitung zu erläutern.",
      source: {
        doc: "200-2",
        section: "Kap. 3.4.4",
        page: 34,
        quote:
          "Neuen Mitarbeitern sollte die Sicherheitsleitlinie erläutert werden, bevor sie Zugang zur Informationsverarbeitung erhalten.",
      },
    },
    {
      id: "p03-07",
      topic: 3,
      level: "basis",
      stem: "Welche Aussagen zum ICS-Informationssicherheitsbeauftragten (ICS-ISB) treffen zu?",
      options: [
        { text: "Er sollte Mitglied im IS-Management-Team sein.", correct: true },
        {
          text: "Er erstellt Sicherheitsrichtlinien für den ICS-Bereich unter Einbeziehung von Safety und Security.",
          correct: true,
        },
        {
          text: "Er arbeitet unabhängig vom ISB und ohne Abstimmung mit dem Gesamt-ISMS.",
          correct: false,
        },
        {
          text: "Er führt für den ICS-Bereich Risikoanalysen nach den Vorgaben des Risikomanagements durch.",
          correct: true,
        },
      ],
      explanation: "Eine enge Kooperation zwischen ICS-ISB und ISB ist ausdrücklich gefordert.",
      source: {
        doc: "200-2",
        section: "Kap. 4.7",
        page: 45,
        quote:
          "sollte die Institution einen ICS-Informationssicherheitsbeauftragten (ICS-ISB) benennen. Dieser sollte Mitglied im IS-Management-Team sein.",
      },
    },
    {
      id: "p03-08",
      topic: 3,
      level: "basis",
      stem: "Welche Aussagen zur Standard-Absicherung treffen laut BSI-Standard 200-2 zu?",
      options: [
        {
          text: "Sie erreicht ein für den normalen Schutzbedarf angemessenes und ausreichendes Sicherheitsniveau.",
          correct: true,
        },
        {
          text: "Sie liegt im Sicherheitsniveau deutlich unter der Basis-Absicherung.",
          correct: false,
        },
        {
          text: "Sie ist in einem einzigen großen Schritt oft ein zu ehrgeiziges Ziel.",
          correct: true,
        },
        {
          text: "Sie verzichtet auf organisatorische und personelle Anforderungen.",
          correct: false,
        },
      ],
      explanation:
        "Die Basis-Absicherung liegt unter der Standard-Absicherung; der IT-Grundschutz ist ganzheitlich.",
      source: {
        doc: "200-2",
        section: "Kap. 2.4 und 2.6",
        page: 13,
        quote:
          "mit der Standard-Absicherung ein Sicherheitsniveau erreicht, das für den normalen Schutzbedarf angemessen und ausreichend ist",
      },
    },
    {
      id: "p03-09",
      topic: 3,
      level: "experte",
      stem: "Eine Geschäftsführung möchte Informationssicherheit „komplett an die IT abgeben“. Welche Aussagen sind im Sinne von BSI-Standard 200-2 zutreffend?",
      options: [
        {
          text: "Die Verantwortung für Informationssicherheit kann nicht delegiert werden und verbleibt bei der Leitungsebene.",
          correct: true,
        },
        {
          text: "Die Leitungsebene muss sicherstellen, dass entscheidungsrelevante Informationen sie rechtzeitig erreichen.",
          correct: true,
        },
        {
          text: "Ein Sicherheitsprozess, der sich nur auf Arbeitsebene initiiert, garantiert kein dauerhaftes Fortentwickeln des Sicherheitsniveaus.",
          correct: true,
        },
        {
          text: "Es genügt, wenn der IT-Leiter zugleich ISB ist, da so keine Interessenkonflikte entstehen.",
          correct: false,
        },
      ],
      explanation:
        "Die Aufgabe kann delegiert werden, die Verantwortung nicht. Eine Zuordnung zur IT führt häufig zu Rollenkonflikten.",
      source: {
        doc: "200-2",
        section: "Kap. 2.3, 3.1 und 4.4",
        page: 20,
        quote:
          "Die Verantwortung für Informationssicherheit verbleibt dort. Die operative Aufgabe „Informationssicherheit“ wird allerdings typischerweise an einen Informationssicherheitsbeauftragten (ISB) delegiert.",
      },
    },
    {
      id: "p03-10",
      topic: 3,
      level: "experte",
      stem: "Ein Unternehmen mit 40 Beschäftigten baut eine IS-Organisation auf. Welche Gestaltung ist laut BSI-Standard 200-2 zulässig?",
      options: [
        {
          text: "Ein ISB nimmt alle Aufgaben des Informationssicherheitsmanagements wahr.",
          correct: true,
        },
        {
          text: "Die zentralen Rollen müssen zwingend von verschiedenen Personen besetzt werden.",
          correct: false,
        },
        {
          text: "Die Ressourcenplanung muss das beschlossene Sicherheitsniveau tatsächlich erreichbar machen.",
          correct: true,
        },
        {
          text: "Auf eine Vertretung des ISB kann bei kleinen Institutionen verzichtet werden.",
          correct: false,
        },
      ],
      explanation:
        "In kleinen Institutionen kann der ISB alle Aufgaben übernehmen. Auch er benötigt aber eine qualifizierte Vertretung.",
      source: {
        doc: "200-2",
        section: "Kap. 4.2 und 4.4",
        page: 37,
        quote:
          "eine Struktur für die IS-Organisation in einer kleinen Institution, in der alle Aufgaben vom Informationssicherheitsbeauftragten wahrgenommen werden",
      },
    },
    {
      id: "p03-11",
      topic: 3,
      level: "basis",
      stem: "Welche der folgenden Punkte sind nach BSI-Standard 200-1 grundlegende Komponenten eines ISMS?",
      options: [
        { text: "Managementprinzipien", correct: true },
        { text: "Mitarbeiter", correct: true },
        { text: "Ein Penetrationstest-Programm", correct: false },
        { text: "Ressourcen", correct: true },
      ],
      explanation:
        "Zu einem ISMS gehören Managementprinzipien, Ressourcen, Mitarbeiter und der Sicherheitsprozess (Leitlinie, Sicherheitskonzept, Sicherheitsorganisation). Penetrationstests sind ein mögliches Prüfverfahren, keine Komponente.",
      source: {
        doc: "200-1",
        section: "Kap. 3.1",
        page: 15,
        quote: "Zu einem ISMS gehören folgende grundlegende Komponenten",
      },
    },
    {
      id: "p03-12",
      topic: 3,
      level: "experte",
      stem: "Die Geschäftsführung verlangt von allen Beschäftigten eine Zwei-Faktor-Anmeldung, nutzt selbst aber weiterhin nur ein Passwort und lässt die Pflichtschulung ausfallen. Welche Aussagen treffen zu?",
      options: [
        {
          text: "Die Leitungsebene verletzt ihre Vorbildfunktion.",
          correct: true,
        },
        {
          text: "Das ist zulässig, solange die Leitung die Gesamtverantwortung schriftlich übernommen hat.",
          correct: false,
        },
        {
          text: "Die Basis-Anforderung ISMS.1.A1 verlangt, dass die Institutionsleitung Informationssicherheit vorlebt.",
          correct: true,
        },
        {
          text: "Die Vorbildfunktion betrifft nur den ISB, nicht die Leitungsebene.",
          correct: false,
        },
      ],
      explanation:
        "Zur Vorbildfunktion gehört, dass auch die Leitungsebene alle Sicherheitsregeln beachtet und selbst an Schulungen teilnimmt. ISMS.1.A1 fordert, dass die Institutionsleitung Informationssicherheit vorlebt.",
      source: {
        doc: "200-1",
        section: "Kap. 4.1, 6. Vorbildfunktion",
        page: 22,
        quote:
          "dass auch die Leitungsebene alle vorgegebenen Sicherheitsregeln beachtet, selbst an Schulungsveranstaltungen teilnimmt",
      },
    },
    {
      id: "p03-13",
      topic: 3,
      level: "basis",
      stem: "Welche Aussagen zur Klassifikation von Informationen treffen nach BSI-Standard 200-2 zu?",
      options: [
        {
          text: "Im Kontext der Basis-Absicherung kann anfangs eine zweistufige Klassifizierung (intern/öffentlich) ausreichen.",
          correct: true,
        },
        {
          text: "Die Vertraulichkeit wird häufig in offen, intern, vertraulich und streng vertraulich abgestuft.",
          correct: true,
        },
        {
          text: "Schwierig ist vor allem der Aufbau des Schemas, seine Anwendung im Betrieb gelingt meist problemlos.",
          correct: false,
        },
        {
          text: "Eine Klassifikation ist nur für Behörden vorgesehen, nicht für Unternehmen.",
          correct: false,
        },
      ],
      explanation:
        "Zwei Stufen können zum Einstieg genügen; für die Vertraulichkeit sind vier Stufen üblich. Nach 200-2 ist ein Schema einfach aufzubauen, es im laufenden Betrieb konsequent anzuwenden ist dagegen schwierig.",
      source: {
        doc: "200-2",
        section: "Kap. 5.1",
        page: 53,
        quote: "kann anfangs bereits eine zweistufige Klassifizierung ausreichend sein",
      },
    },
  ],
};
