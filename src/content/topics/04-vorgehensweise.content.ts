import type { TopicContent } from "../course.types";

/** Themenfeld 4: IT-Grundschutz-Vorgehensweise (Überblick). */
export const topic: TopicContent = {
  topic: 4,
  lessons: [
    {
      id: "t04-l01",
      title: "Leitfragen und Anforderungsarten",
      depth: "I + II",
      minutes: 30,
      goals: [
        "Die Leitfragen zur Ermittlung von Rahmenbedingungen und Sicherheitsniveau anwenden",
        "Basis-Anforderungen, Standard-Anforderungen und Anforderungen bei erhöhtem Schutzbedarf unterscheiden",
        "Die Modalverben MUSS und SOLLTE richtig interpretieren",
      ],
      blocks: [
        { type: "heading", text: "Leitfragen in der Initiierungsphase" },
        {
          type: "paragraph",
          text: "Bevor eine Vorgehensweise gewählt wird, ermittelt die Institution ihre **Rahmenbedingungen**, formuliert **allgemeine Sicherheitsziele** und bestimmt das **angestrebte Sicherheitsniveau**. Dabei geht es noch nicht um eine detaillierte Analyse, sondern um eine Übersicht.",
        },
        {
          type: "table",
          headers: ["Bereich", "Typische Leitfragen"],
          rows: [
            [
              "Allgemeine Einflussfaktoren",
              "Welche Faktoren sind wesentlich für den Geschäftserfolg? Welche Managementsysteme gibt es bereits? Wer sind wichtige Kunden, Partner und Dienstleister? Wie beeinflusst die Wettbewerbsposition den Risikoappetit?",
            ],
            [
              "Interne Rahmenbedingungen",
              "Welche Geschäftsprozesse gibt es? Welche hängen von funktionierender IT ab? Welche Informationen werden verarbeitet, und welche sind besonders schützenswert?",
            ],
            [
              "Externe Rahmenbedingungen",
              "Gesetzliche Vorgaben, Anforderungen von Kunden und Partnern, Marktlage, branchenspezifische Sicherheitsstandards",
            ],
            [
              "Sicherheitsniveau",
              "Welche Informationen sind kritisch? Welche Aufgaben sind ohne IT nicht oder nur mit erheblichem Mehraufwand möglich? Welche Auswirkungen hätten Sicherheitsvorfälle? Welche gesetzlichen Anforderungen (z. B. Datenschutz) erfordern besondere Maßnahmen?",
            ],
          ],
          caption: "Nach BSI-Standard 200-2, Kap. 3.2",
        },
        {
          type: "paragraph",
          text: "Für jeden Geschäftsprozess wird ein **Informationseigentümer** als verantwortlicher Ansprechpartner benannt. Rahmenbedingungen werden effizient in kurzen **Sicherheitsgesprächen (Brainstorming)** unter Leitung des ISB ermittelt; die Leitungsebene muss nicht teilnehmen, und die Erstaufnahme sollte typischerweise nicht mehr als einen halben Tag dauern.",
        },
        { type: "heading", text: "Drei Arten von Anforderungen" },
        {
          type: "table",
          headers: ["Kürzel", "Anforderungsart", "Bedeutung"],
          rows: [
            [
              "(B)",
              "Basis-Anforderung",
              "**Vorrangig** umzusetzen; mit geringem Aufwand größtmöglicher Nutzen; Minimum dessen, was vernünftigerweise umzusetzen ist",
            ],
            [
              "(S)",
              "Standard-Anforderung",
              "Gemeinsam mit den Basis-Anforderungen der **Stand der Technik** für den **normalen Schutzbedarf**",
            ],
            [
              "(H)",
              "Anforderung bei erhöhtem Schutzbedarf",
              "**Exemplarische Vorschläge**, die sich in der Praxis bewährt haben",
            ],
          ],
        },
        {
          type: "callout",
          variant: "merke",
          title: "Zertifizierung",
          text: "Für eine Zertifizierung nach ISO 27001 auf der Basis von IT-Grundschutz müssen im Geltungsbereich die Basis- und Standard-Anforderungen erfüllt sein. Teilanforderungen mit MUSS sind uneingeschränkt – ohne sie ist keine Zertifizierung möglich.",
        },
        { type: "heading", text: "Modalverben" },
        {
          type: "definition",
          term: "MUSS / DARF NUR",
          text: "Anforderung, die unbedingt erfüllt werden muss – uneingeschränkt, **keine Risikoübernahme möglich**.",
        },
        { type: "definition", term: "DARF NICHT / DARF KEIN", text: "Uneingeschränktes Verbot." },
        {
          type: "definition",
          term: "SOLLTE",
          text: "Normalerweise zu erfüllen; es kann Gründe dagegen geben, die aber **sorgfältig abgewogen und stichhaltig begründet** werden müssen.",
        },
        {
          type: "definition",
          term: "SOLLTE NICHT / SOLLTE KEIN",
          text: "Normalerweise nicht zu tun; Ausnahmen müssen sorgfältig abgewogen und stichhaltig begründet werden.",
        },
        {
          type: "paragraph",
          text: "Die Definition basiert auf **RFC 2119** und **DIN 820-2:2012, Anhang H**. Standard-Anforderungen können durch **mindestens gleichwertige Alternativen** oder die **bewusste Akzeptanz des Restrisikos** ersetzt werden.",
        },
      ],
      sources: [
        {
          doc: "200-2",
          section: "Kap. 3.2 Konzeption und Planung des Sicherheitsprozesses",
          page: 21,
        },
        {
          doc: "kompendium",
          section: "IT-Grundschutz – Basis für Informationssicherheit: Anforderungen, Modalverben",
        },
        { doc: "kompendium", section: "Glossar: Sicherheitsanforderung" },
      ],
      quiz: [
        {
          id: "q-t04-l01-1",
          topic: 4,
          level: "basis",
          stem: "Welche Aussage zum Modalverb MUSS ist richtig?",
          options: [
            {
              text: "Die Anforderung muss unbedingt erfüllt werden; eine Risikoübernahme ist nicht möglich.",
              correct: true,
            },
            {
              text: "Die Anforderung kann mit stichhaltiger Begründung entfallen.",
              correct: false,
            },
            { text: "Die Anforderung ist nur bei erhöhtem Schutzbedarf relevant.", correct: false },
            { text: "Die Anforderung ist eine unverbindliche Empfehlung.", correct: false },
          ],
          explanation:
            "MUSS kennzeichnet uneingeschränkte Anforderungen ohne Möglichkeit der Risikoübernahme.",
          source: { doc: "kompendium", section: "Modalverben" },
        },
        {
          id: "q-t04-l01-2",
          topic: 4,
          level: "basis",
          stem: "Was zeigt das Kürzel (H) im Titel einer Anforderung an?",
          options: [
            { text: "Eine Anforderung bei erhöhtem Schutzbedarf", correct: true },
            { text: "Eine Anforderung, für die die Haustechnik zuständig ist", correct: false },
            {
              text: "Eine Hauptanforderung, die vor allen Basis-Anforderungen umzusetzen ist",
              correct: false,
            },
            { text: "Eine historische, nicht mehr gültige Anforderung", correct: false },
          ],
          explanation: "(B) Basis, (S) Standard, (H) erhöhter Schutzbedarf.",
          source: { doc: "kompendium", section: "Aufbau der Bausteine" },
        },
        {
          id: "q-t04-l01-3",
          topic: 4,
          level: "experte",
          stem: "Eine SOLLTE-Anforderung wird nicht umgesetzt. Was ist im Sinne des IT-Grundschutzes erforderlich bzw. möglich?",
          options: [
            { text: "Eine sorgfältige Abwägung und stichhaltige Begründung", correct: true },
            { text: "Der Ersatz durch eine mindestens gleichwertige Alternative", correct: true },
            { text: "Die bewusste Akzeptanz des Restrisikos", correct: true },
            { text: "Nichts, da SOLLTE-Anforderungen unverbindlich sind", correct: false },
          ],
          explanation:
            "SOLLTE ist normalerweise zu erfüllen; Abweichungen sind zu begründen, Standard-Anforderungen können durch gleichwertige Alternativen oder bewusste Risikoakzeptanz ersetzt werden.",
          source: { doc: "kompendium", section: "Modalverben; Glossar: Sicherheitsanforderung" },
        },
      ],
    },
    {
      id: "t04-l02",
      title: "Basis-, Kern- und Standard-Absicherung wählen",
      depth: "I + II",
      minutes: 35,
      goals: [
        "Die Einsatzkriterien der drei Vorgehensweisen nennen",
        "Vor- und Nachteile der Vorgehensweisen gegenüberstellen",
        "An einem Praxisbeispiel eine begründete Vorgehensweise vorschlagen",
      ],
      blocks: [
        {
          type: "table",
          headers: ["", "Basis-Absicherung", "Kern-Absicherung", "Standard-Absicherung"],
          rows: [
            [
              "Ziel",
              "Breite, grundlegende Erst-Absicherung aller Geschäftsprozesse",
              "Vorrangiger Schutz besonders gefährdeter Prozesse und **Kronjuwelen**",
              "Umfassender und tiefgehender Schutz – **vom BSI präferiert**",
            ],
            [
              "Geeignet, wenn …",
              "Informationssicherheit steht am Anfang (niedriger Reifegrad); kein deutlich erhöhtes Gefährdungspotenzial; Sicherheitsniveau normal; keine existenzbedrohenden Assets; kleinere Vorfälle tolerierbar",
              "Nur wenige Prozesse mit deutlich erhöhtem Schutzbedarf, zügig abgrenzbar; eindeutig benennbare Kronjuwelen; kleinere Vorfälle akzeptabel",
              "Institution arbeitet bereits mit IT-Grundschutz/ISO 27001; ausreichender Reifegrad; kein vordringlicher Einzelprozess; wahrnehmbare Vorfälle nicht akzeptabel",
            ],
            [
              "Pro",
              "Geringer Aufwand, schneller Einstieg",
              "Volle Fokussierung auf Kronjuwelen; schneller als Gesamtbetrachtung; **Zertifizierung für den abgegrenzten Verbund möglich**",
              "Hohes, angepasstes, gleichmäßiges und vergleichbares Sicherheitsniveau; **Zertifizierung** und Messbarkeit möglich",
            ],
            [
              "Contra",
              "Nur niedriges Sicherheitsniveau; **keine Zertifizierung** nach ISO 27001",
              "Kronjuwelen evtl. nicht isolierbar; übrige Prozesse bleiben zunächst unbeachtet; kumulierte Risiken können übersehen werden",
              "Bei niedrigem Reifegrad höherer Aufwand",
            ],
          ],
          caption: "Nach BSI-Standard 200-2, Kap. 3.3",
        },
        {
          type: "callout",
          variant: "merke",
          title: "Ziel ist immer die Standard-Absicherung",
          text: "Basis- und Kern-Absicherung sind Einstiegsvorgehensweisen. Ziel muss es sein, mittelfristig ein vollständiges Sicherheitskonzept gemäß Standard-Absicherung zu erstellen.",
        },
        { type: "heading", text: "Geltungsbereich und Managemententscheidung" },
        {
          type: "paragraph",
          text: "Der Geltungsbereich der Sicherheitskonzeption heißt **Informationsverbund**. Die betrachteten Geschäftsprozesse müssen **vollständig** enthalten sein; Schnittstellen zu externen Partnern (z. B. Outsourcing) sind klar zu definieren. Vorgehensweisen lassen sich **kombinieren**: z. B. Kern-Absicherung für einen kleinen Bereich mit besonders gefährdeten Assets, für den Rest der Institution mindestens die Basis-Absicherung.",
        },
        {
          type: "paragraph",
          text: "Der oder die Verantwortliche für Informationssicherheit erarbeitet einen Vorschlag; **die Leitung entscheidet**, für welche Bereiche welche Vorgehensweise gewählt wird. Entscheidung, Geltungsbereiche und Zeitplan werden dokumentiert.",
        },
        {
          type: "example",
          title: "Wahl der Vorgehensweise",
          text: [
            "Rheintal Präzision hat bisher kein ISMS, kaum dokumentierte Maßnahmen und keine Erfahrung mit IT-Grundschutz.",
            "Die Konstruktionsdaten für einen Großkunden gelten jedoch als **Kronjuwelen**: Ihr Abfluss würde den wichtigsten Auftrag und damit die Existenz gefährden.",
            "Sinnvoll ist daher: **Kern-Absicherung** für den Konstruktions- und Fertigungsdatenprozess und **Basis-Absicherung** für die übrige Institution – mit dem Ziel, mittelfristig die Standard-Absicherung zu erreichen.",
          ],
        },
      ],
      sources: [{ doc: "200-2", section: "Kap. 3.3 Entscheidung für Vorgehensweise", page: 28 }],
      quiz: [
        {
          id: "q-t04-l02-1",
          topic: 4,
          level: "basis",
          stem: "Welche Vorgehensweise präferiert das BSI?",
          options: [
            { text: "Basis-Absicherung", correct: false },
            { text: "Kern-Absicherung", correct: false },
            { text: "Standard-Absicherung", correct: true },
            { text: "Keine – alle sind gleichwertig", correct: false },
          ],
          explanation: "Die Standard-Absicherung ist die vom BSI präferierte Vorgehensweise.",
          source: { doc: "200-2", section: "Kap. 3.3", page: 28 },
        },
        {
          id: "q-t04-l02-2",
          topic: 4,
          level: "basis",
          stem: "Auf Basis welcher Vorgehensweisen ist eine Zertifizierung nach ISO 27001 möglich?",
          options: [
            { text: "Basis-Absicherung", correct: false },
            { text: "Kern-Absicherung für den abgegrenzten Informationsverbund", correct: true },
            { text: "Standard-Absicherung", correct: true },
            { text: "Jede der drei Vorgehensweisen ohne Einschränkung", correct: false },
          ],
          explanation: "Bei der Basis-Absicherung ist keine Zertifizierung möglich.",
          source: { doc: "200-2", section: "Kap. 3.3.5", page: 31 },
        },
        {
          id: "q-t04-l02-3",
          topic: 4,
          level: "experte",
          stem: "Eine Stadtverwaltung arbeitet seit Jahren mit IT-Grundschutz, hat Sicherheitskonzepte erstellt, und wahrnehmbare Sicherheitsvorfälle sind nicht akzeptabel. Welche Vorgehensweise ist laut BSI-Standard 200-2 angezeigt?",
          options: [
            { text: "Ein direkter Einstieg in die Standard-Absicherung", correct: true },
            { text: "Zunächst die Basis-Absicherung als Erst-Absicherung", correct: false },
            { text: "Ausschließlich eine Kern-Absicherung der Kronjuwelen", correct: false },
            {
              text: "Keine Vorgehensweise, da bereits Sicherheitskonzepte existieren",
              correct: false,
            },
          ],
          explanation:
            "Die genannten Kriterien sprechen für einen direkten Einstieg in die Standard-Absicherung.",
          source: { doc: "200-2", section: "Kap. 3.3.3", page: 30 },
        },
      ],
    },
  ],
};
