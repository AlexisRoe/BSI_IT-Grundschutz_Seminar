import type { TopicQuestions } from "../course.types";

/** Prüfungsfragenpool Themenfeld 8. */
export const pool: TopicQuestions = {
  topic: 8,
  questions: [
    {
      id: "p08-01",
      topic: 8,
      level: "basis",
      stem: "In welchen Fällen ist laut BSI-Standard 200-2 zusätzlich zur IT-Grundschutz-Absicherung eine Risikoanalyse erforderlich?",
      options: [
        { text: "Bei hohem oder sehr hohem Schutzbedarf", correct: true },
        {
          text: "Wenn Zielobjekte nicht hinreichend mit Bausteinen modelliert werden können",
          correct: true,
        },
        {
          text: "Bei Einsatzszenarien, die im IT-Grundschutz nicht vorgesehen sind",
          correct: true,
        },
        { text: "Für jedes Zielobjekt mit normalem Schutzbedarf", correct: false },
      ],
      explanation:
        "Für normalen Schutzbedarf reichen die Basis- und Standard-Anforderungen in der Regel aus.",
      source: {
        doc: "200-2",
        section: "Kap. 8.2.9",
        page: 130,
        quote:
          "Außer bei hohem oder sehr hohem Schutzbedarf muss eine Risikoanalyse auch dann durchgeführt werden",
      },
    },
    {
      id: "p08-02",
      topic: 8,
      level: "basis",
      stem: "Wie viele elementare Gefährdungen enthält das IT-Grundschutz-Kompendium und wie sind sie nummeriert?",
      options: [
        { text: "47, von G 0.1 bis G 0.47", correct: true },
        { text: "100, von G 1.1 bis G 1.100", correct: false },
        { text: "21, von G 0.1 bis G 0.21", correct: false },
        {
          text: "Die Anzahl variiert je Edition beliebig und ist nicht nummeriert.",
          correct: false,
        },
      ],
      explanation: "Es gibt 47 elementare Gefährdungen G 0.1 bis G 0.47.",
      source: {
        doc: "200-3",
        section: "Kap. 3",
        page: 13,
        quote:
          "in 47 elementare Gefährdungen überführt, die im IT-Grundschutz-Kompendium aufgelistet sind",
      },
    },
    {
      id: "p08-03",
      topic: 8,
      level: "basis",
      stem: "Welche Grundwerte beeinträchtigt die elementare Gefährdung G 0.1 Feuer laut BSI-Standard 200-3 direkt?",
      options: [
        { text: "Verfügbarkeit", correct: true },
        { text: "Vertraulichkeit", correct: false },
        { text: "Integrität", correct: false },
        { text: "Authentizität", correct: false },
      ],
      explanation:
        "Indirekte Auswirkungen auf Vertraulichkeit oder Integrität sind denkbar, direkt betroffen ist nur die Verfügbarkeit.",
      source: {
        doc: "200-3",
        section: "Kap. 3",
        page: 13,
        quote:
          "So wird z. B. zu G 0.1 Feuer als einziger betroffener Grundwert „Verfügbarkeit“ genannt",
      },
    },
    {
      id: "p08-04",
      topic: 8,
      level: "basis",
      stem: "Welche der folgenden elementaren Gefährdungen betreffen laut BSI-Standard 200-3 die Vertraulichkeit?",
      options: [
        { text: "G 0.14 Ausspähen von Informationen/Spionage", correct: true },
        { text: "G 0.19 Offenlegung schützenswerter Informationen", correct: true },
        { text: "G 0.40 Verhinderung von Diensten (Denial of Service)", correct: false },
        { text: "G 0.42 Social Engineering", correct: true },
      ],
      explanation:
        "G 0.40 betrifft nur die Verfügbarkeit; G 0.42 betrifft Vertraulichkeit und Integrität.",
      source: {
        doc: "200-3",
        section: "Kap. 3, Tabelle 1",
        page: 14,
        quote: "G 0.19 Offenlegung schützenswerter Informationen C",
      },
    },
    {
      id: "p08-05",
      topic: 8,
      level: "basis",
      stem: "Was sollte die von der Leitungsebene verabschiedete Richtlinie zum Umgang mit Risiken laut BSI-Standard 200-3 regeln?",
      options: [
        {
          text: "Unter welchen Voraussetzungen in jedem Fall eine Risikoanalyse durchgeführt werden muss",
          correct: true,
        },
        { text: "Die Risikoakzeptanzkriterien", correct: true },
        {
          text: "Wer für welche Teilaufgaben verantwortlich ist und ob Risiken Risikoeigentümern zugeordnet sind",
          correct: true,
        },
        {
          text: "In welchem Zeitrahmen die Risikoanalyse vollständig aktualisiert werden muss",
          correct: true,
        },
      ],
      explanation: "Alle genannten Punkte gehören zu den Inhalten der Richtlinie.",
      source: {
        doc: "200-3",
        section: "Kap. 2",
        page: 10,
        quote:
          "Unter welchen Voraussetzungen muss in jedem Fall eine Risikoanalyse durchgeführt werden?",
      },
    },
    {
      id: "p08-06",
      topic: 8,
      level: "basis",
      stem: "Wer sollte laut BSI-Standard 200-3 am Brainstorming zur Ermittlung zusätzlicher Gefährdungen beteiligt werden?",
      options: [
        { text: "Informationssicherheitsbeauftragte", correct: true },
        {
          text: "Fachverantwortliche, Administration und Benutzende des Zielobjekts",
          correct: true,
        },
        { text: "Gegebenenfalls externe Sachverständige", correct: true },
        { text: "Ausschließlich die Institutionsleitung", correct: false },
      ],
      explanation:
        "Das Brainstorming sollte von einem Experten für Informationssicherheit moderiert werden.",
      source: {
        doc: "200-3",
        section: "Kap. 4.2",
        page: 24,
        quote:
          "Es sollten Informationssicherheitsbeauftragte, Fachverantwortliche, Administratoren und Benutzer des jeweils betrachteten Zielobjekts und gegebenenfalls auch externe Sachverständige beteiligt werden",
      },
    },
    {
      id: "p08-07",
      topic: 8,
      level: "basis",
      stem: "Warum empfiehlt der BSI-Standard 200-3 in den meisten Fällen eine qualitative statt einer quantitativen Risikobetrachtung?",
      options: [
        {
          text: "Weil quantitative Betrachtungen umfangreiches statistisches Datenmaterial voraussetzen, das meist fehlt",
          correct: true,
        },
        {
          text: "Weil qualitative Betrachtungen in der Norm ISO 27001 vorgeschrieben sind",
          correct: false,
        },
        {
          text: "Weil quantitative Verfahren für Informationssicherheit verboten sind",
          correct: false,
        },
        {
          text: "Weil qualitative Betrachtungen keine Schadenshöhe berücksichtigen",
          correct: false,
        },
      ],
      explanation:
        "Im dynamischen Umfeld der Informationssicherheit fehlen meist ausreichende Erfahrungswerte.",
      source: {
        doc: "200-3",
        section: "Kap. 5.1",
        page: 26,
        quote:
          "Die quantitative Risikobetrachtung ist sehr aufwändig und setzt umfangreiches statistisches Datenmaterial voraus",
      },
    },
    {
      id: "p08-08",
      topic: 8,
      level: "basis",
      stem: "Wie viele Kategorien pro Dimension sollten laut BSI-Standard 200-3 bei der qualitativen Risikoeinschätzung höchstens gewählt werden?",
      options: [
        { text: "Nicht mehr als fünf", correct: true },
        { text: "Genau zwei", correct: false },
        { text: "Mindestens zehn", correct: false },
        { text: "Beliebig viele, je feiner desto besser", correct: false },
      ],
      explanation: "Pro Dimension sollten nicht mehr als fünf Kategorien gewählt werden.",
      source: {
        doc: "200-3",
        section: "Kap. 5.1",
        page: 26,
        quote: "Pro Dimension sollten dabei nicht mehr als fünf Kategorien gewählt werden",
      },
    },
    {
      id: "p08-09",
      topic: 8,
      level: "basis",
      stem: "Wie ist die Eintrittshäufigkeit „häufig“ im BSI-Standard 200-3 beschrieben?",
      options: [
        { text: "Das Ereignis tritt einmal im Jahr bis einmal pro Monat ein.", correct: true },
        { text: "Das Ereignis tritt mehrmals im Monat ein.", correct: false },
        { text: "Das Ereignis tritt höchstens alle fünf Jahre ein.", correct: false },
        {
          text: "Das Ereignis tritt einmal alle fünf Jahre bis einmal im Jahr ein.",
          correct: false,
        },
      ],
      explanation:
        "selten ≤ alle 5 Jahre; mittel 5 Jahre–1 Jahr; häufig 1 Jahr–1 Monat; sehr häufig mehrmals im Monat.",
      source: {
        doc: "200-3",
        section: "Kap. 5.1, Tabelle 8",
        page: 27,
        quote: "häufig Ereignis tritt einmal im Jahr bis einmal pro Monat ein",
      },
    },
    {
      id: "p08-10",
      topic: 8,
      level: "basis",
      stem: "Welche Aussagen zur Risikobewertung nach BSI-Standard 200-3 treffen zu?",
      options: [
        {
          text: "Die BSI-Risikomatrix dient als Beispiel und sollte an die eigenen Bedürfnisse angepasst werden.",
          correct: true,
        },
        {
          text: "Bereits umgesetzte oder geplante Sicherheitsmaßnahmen werden berücksichtigt.",
          correct: true,
        },
        {
          text: "Geringe Risiken werden in der Praxis üblicherweise akzeptiert, aber beobachtet.",
          correct: true,
        },
        {
          text: "Das BSI gibt eine verbindliche Behandlungsstrategie für jede Risikokategorie vor.",
          correct: false,
        },
      ],
      explanation:
        "Eine generelle Empfehlung zur Behandlungsstrategie gibt das BSI nicht; sie hängt vom Risikoappetit ab.",
      source: {
        doc: "200-3",
        section: "Kap. 5.2",
        page: 27,
        quote:
          "Sie dient lediglich dazu, die nachfolgenden Beispiele zu veranschaulichen, und sollte auf die eigenen Bedürfnisse angepasst werden",
      },
    },
    {
      id: "p08-11",
      topic: 8,
      level: "basis",
      stem: "Welche Gründe können laut BSI-Standard 200-3 für eine Risikovermeidung sprechen?",
      options: [
        {
          text: "Alle wirksamen Gegenmaßnahmen sind sehr teuer, die Gefährdung kann aber nicht hingenommen werden.",
          correct: true,
        },
        {
          text: "Eine Umstrukturierung bietet sich ohnehin aus anderen Gründen an.",
          correct: true,
        },
        {
          text: "Es ist einfacher, Abläufe zu ändern, als sie durch zusätzliche Maßnahmen komplexer zu machen.",
          correct: true,
        },
        { text: "Die möglichen Schäden sind rein finanzieller Art.", correct: false },
      ],
      explanation: "Rein finanzielle Schäden sind ein typischer Grund für den Risikotransfer.",
      source: {
        doc: "200-3",
        section: "Kap. 6.1",
        page: 33,
        quote:
          "Die Umstrukturierung bietet sich ohnehin aus anderen Gründen an, z. B. zur Kostensenkung",
      },
    },
    {
      id: "p08-12",
      topic: 8,
      level: "experte",
      stem: "Für ein Zielobjekt mit hohem Schutzbedarf werden in der Risikoanalyse Anforderungen bei erhöhtem Schutzbedarf (H) betrachtet. Welche Aussagen sind richtig?",
      options: [
        {
          text: "H-Anforderungen können als Anhaltspunkte für weiterführende Maßnahmen dienen.",
          correct: true,
        },
        {
          text: "H-Anforderungen werden bei hohem Schutzbedarf automatisch verbindlich.",
          correct: false,
        },
        {
          text: "H-Anforderungen müssen nicht zwingend in die Risikoanalyse einbezogen werden.",
          correct: true,
        },
        {
          text: "H-Anforderungen gehen über das dem Stand der Technik entsprechende Schutzniveau hinaus.",
          correct: true,
        },
      ],
      explanation:
        "H-Anforderungen sind empfehlenswerte Beispiele, aber auch bei hohen Sicherheitsanforderungen nicht automatisch verbindlich.",
      source: {
        doc: "200-3",
        section: "Kap. 6.1, Hinweis",
        page: 35,
        quote: "auch bei hohen Sicherheitsanforderungen nicht automatisch verbindlich werden",
      },
    },
    {
      id: "p08-13",
      topic: 8,
      level: "experte",
      stem: "Im Rahmen der Risikobehandlung wird ein Geschäftsprozess an einen Dienstleister ausgelagert (Risikotransfer). Was folgt daraus laut BSI-Standard 200-3?",
      options: [
        {
          text: "Die Änderung muss im Sicherheitskonzept berücksichtigt werden – im Allgemeinen beginnend bei der Strukturanalyse.",
          correct: true,
        },
        {
          text: "Eine sachgerechte Vertragsgestaltung ist einer der wichtigsten Aspekte.",
          correct: true,
        },
        {
          text: "Die Entscheidung trifft die Leitungsebene und dokumentiert sie nachvollziehbar.",
          correct: true,
        },
        {
          text: "Das Sicherheitskonzept muss nicht angepasst werden, da das Risiko beim Dienstleister liegt.",
          correct: false,
        },
      ],
      explanation:
        "Transfer und Vermeidung verändern den Informationsverbund; die Konzeption ist ab der Strukturanalyse zu aktualisieren.",
      source: {
        doc: "200-3",
        section: "Kap. 6.1",
        page: 34,
        quote:
          "Beim Risikotransfer ist die sachgerechte Vertragsgestaltung einer der wichtigsten Aspekte",
      },
    },
    {
      id: "p08-14",
      topic: 8,
      level: "experte",
      stem: "Welche Kriterien werden bei der Konsolidierung des Sicherheitskonzepts nach einer Risikoanalyse geprüft?",
      options: [
        { text: "Eignung der Sicherheitsmaßnahmen zur Abwehr der Gefährdungen", correct: true },
        { text: "Zusammenwirken der Sicherheitsmaßnahmen", correct: true },
        { text: "Benutzerfreundlichkeit der Sicherheitsmaßnahmen", correct: true },
        { text: "Angemessenheit der Sicherheitsmaßnahmen", correct: true },
      ],
      explanation: "Alle vier Kriterien werden in Kapitel 7 des BSI-Standards 200-3 genannt.",
      source: {
        doc: "200-3",
        section: "Kap. 7",
        page: 39,
        quote:
          "die Sicherheitsmaßnahmen für jedes Zielobjekt anhand folgender Kriterien überprüft werden",
      },
    },
    {
      id: "p08-15",
      topic: 8,
      level: "basis",
      stem: "Was sollte laut BSI-Standard 200-3 mit Risiken geschehen, die derzeit akzeptabel sind, aber voraussichtlich steigen werden?",
      options: [
        {
          text: "Sie werden beobachtet; ergänzende Maßnahmen werden vorbereitet und vorgemerkt.",
          correct: true,
        },
        { text: "Sie werden dauerhaft aus der Betrachtung ausgeschlossen.", correct: false },
        { text: "Sie werden sofort als sehr hoch eingestuft.", correct: false },
        { text: "Sie werden ohne Zustimmung der Leitung transferiert.", correct: false },
      ],
      explanation: "Risiken unter Beobachtung werden dokumentiert, z. B. in einem Risikoregister.",
      source: {
        doc: "200-3",
        section: "Kap. 6.2",
        page: 35,
        quote:
          "Diese ergänzenden Sicherheitsmaßnahmen sind zu dokumentieren und vorzumerken. Die Risiken werden beobachtet",
      },
    },
  ],
};
