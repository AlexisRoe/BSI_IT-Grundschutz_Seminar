import type { TopicQuestions } from "../course.types";

/** Prüfungsfragenpool Themenfeld 15. */
export const pool: TopicQuestions = {
  topic: 15,
  questions: [
    {
      id: "p15-01",
      topic: 15,
      level: "basis",
      stem: "Wann gilt ein Geschäftsprozess laut BSI-Standard 200-4 als zeitkritisch?",
      options: [
        {
          text: "Wenn sein Ausfall innerhalb eines zuvor festgelegten Zeitraums zu einem nicht tolerierbaren, unter Umständen existenzgefährdenden Schaden führen kann",
          correct: true,
        },
        {
          text: "Wenn er im Alltag sehr wichtig ist, unabhängig von der Ausfallzeit",
          correct: false,
        },
        { text: "Wenn er von der IT unterstützt wird", correct: false },
        { text: "Wenn er im Jahresabschluss eine Rolle spielt", correct: false },
      ],
      explanation: "Wichtige Prozesse sind nicht automatisch zeitkritisch.",
      source: { doc: "200-4", section: "Kap. 2.1", page: 19 },
    },
    {
      id: "p15-02",
      topic: 15,
      level: "basis",
      stem: "Was ist laut BSI-Standard 200-4 eine Besondere Aufbauorganisation (BAO)?",
      options: [
        {
          text: "Eine zeitlich begrenzte Organisationsform für außergewöhnliche Situationen",
          correct: true,
        },
        {
          text: "In ihr können Zuständigkeiten und Entscheidungswege vom Normalbetrieb abweichen.",
          correct: true,
        },
        { text: "Die ständige Organisationsform des täglichen Geschäftsbetriebs", correct: false },
        { text: "Sie wird zur Bewältigung von Notfällen und Krisen eingesetzt.", correct: true },
      ],
      explanation: "Die ständige Organisationsform ist die AAO.",
      source: { doc: "200-4", section: "Kap. 2.1", page: 20 },
    },
    {
      id: "p15-03",
      topic: 15,
      level: "basis",
      stem: "Was ist laut BSI-Standard 200-4 eine Störung?",
      options: [
        {
          text: "Eine Situation, in der Prozesse oder Ressourcen nicht wie vorgesehen zur Verfügung stehen",
          correct: true,
        },
        { text: "Sie wird in der Regel im Normalbetrieb durch die AAO behoben.", correct: true },
        {
          text: "Sie kann zu einem Notfall eskalieren, wenn sie nicht in angemessener Zeit behoben werden kann.",
          correct: true,
        },
        {
          text: "Sie ist der zentrale Betrachtungsgegenstand des BSI-Standards 200-4.",
          correct: false,
        },
      ],
      explanation:
        "Störungen sind nicht Betrachtungsgegenstand von 200-4; dort geht es um Notfälle und Krisen.",
      source: { doc: "200-4", section: "Kap. 2.1", page: 20 },
    },
    {
      id: "p15-04",
      topic: 15,
      level: "basis",
      stem: "Welche Vorteile bzw. Merkmale hat das Reaktiv-BCMS laut BSI-Standard 200-4?",
      options: [
        { text: "Schnelle Fähigkeit zur Notfallbewältigung", correct: true },
        {
          text: "Es greift auf vorhandene Sicherheits- und Vorsorgemaßnahmen zurück.",
          correct: true,
        },
        {
          text: "Es muss nach einem einzigen BCM-Prozess-Zyklus weiterentwickelt werden.",
          correct: true,
        },
        {
          text: "Es ermöglicht die vollständige Absicherung aller zeitkritischen Prozesse.",
          correct: false,
        },
      ],
      explanation: "Vollständige Absicherung bietet nur das Standard-BCMS.",
      source: { doc: "200-4", section: "Kap. 2.6.1", page: 43 },
    },
    {
      id: "p15-05",
      topic: 15,
      level: "basis",
      stem: "Was legt die MTPD (Maximum Tolerable Period of Disruption) fest?",
      options: [
        {
          text: "Wie lange ein Geschäftsprozess maximal ausfallen darf, bevor nicht tolerierbare Auswirkungen auftreten",
          correct: true,
        },
        { text: "Den maximal zulässigen Datenverlust", correct: false },
        { text: "Die Leistungsfähigkeit des Notbetriebs", correct: false },
        { text: "Die Dauer einer Notfallübung", correct: false },
      ],
      explanation: "Die MTPD wird über das Schadenspotenzial je Geschäftsprozess ermittelt.",
      source: { doc: "200-4", section: "Kap. 7", page: 159 },
    },
    {
      id: "p15-06",
      topic: 15,
      level: "basis",
      stem: "Welche Anforderungen enthält der Baustein DER.4 Notfallmanagement als Standard-Anforderungen?",
      options: [
        { text: "Erstellung eines Notfallhandbuchs", correct: true },
        {
          text: "Integration von Notfallmanagement und Informationssicherheitsmanagement",
          correct: true,
        },
        { text: "Tests und Notfallübungen als Basis-Anforderung", correct: false },
        { text: "Verzicht auf jede Dokumentation im Notfall", correct: false },
      ],
      explanation:
        "DER.4 hat keine Basis-Anforderungen; Tests und Übungen sind eine Anforderung bei erhöhtem Schutzbedarf.",
      source: { doc: "kompendium", section: "DER.4, Kap. 3" },
    },
    {
      id: "p15-07",
      topic: 15,
      level: "experte",
      stem: "Drei zeitkritische Geschäftsprozesse nutzen denselben Applikationsserver; ihre Anforderungen an dessen Wiederanlauf betragen 4, 12 und 24 Stunden. Welche RTO gilt laut BSI-Standard 200-4 für den Server?",
      options: [
        { text: "4 Stunden – die kleinste RTO", correct: true },
        { text: "24 Stunden – die größte RTO", correct: false },
        { text: "Der Durchschnitt, etwa 13 Stunden", correct: false },
        { text: "Für Ressourcen wird keine RTO festgelegt.", correct: false },
      ],
      explanation:
        "Nutzen mehrere Geschäftsprozesse dieselbe Ressource, muss die kleinste RTO gewählt werden.",
      source: { doc: "200-4", section: "Kap. 7.2 Durchführung der BIA", page: 189 },
    },
    {
      id: "p15-08",
      topic: 15,
      level: "experte",
      stem: "Eine Institution unterliegt regulatorischen Anforderungen, nach denen alle betroffenen Geschäftsprozesse zeitnah untersucht und abgesichert werden müssen. Welche Aussagen sind nach BSI-Standard 200-4 zutreffend?",
      options: [
        { text: "Ein Einstieg mit dem Reaktiv-BCMS ist eher nicht zu empfehlen.", correct: true },
        {
          text: "Aufbau- oder Standard-BCMS werden für den Einstieg eher empfohlen.",
          correct: true,
        },
        { text: "Langfristig ist in jedem Fall ein Standard-BCMS anzustreben.", correct: true },
        {
          text: "Regulatorische Anforderungen spielen für die Wahl der BCMS-Stufe keine Rolle.",
          correct: false,
        },
      ],
      explanation:
        "Gesetzliche oder regulatorische Anforderungen sind ein Kriterium gegen den Einstieg über das Reaktiv-BCMS.",
      source: { doc: "200-4", section: "Kap. 2.6.1", page: 44 },
    },
  ],
};
