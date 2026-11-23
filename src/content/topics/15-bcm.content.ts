import type { TopicContent } from "../course.types";

/** Themenfeld 15: BCM-Prozess. */
export const topic: TopicContent = {
  topic: 15,
  lessons: [
    {
      id: "t15-l01",
      title: "BCM nach BSI-Standard 200-4: Begriffe und Stufenmodell",
      depth: "I",
      minutes: 35,
      goals: [
        "Zeitkritische Geschäftsprozesse, Störung, Notfall und Krise abgrenzen",
        "AAO und BAO unterscheiden",
        "Die Bestandteile eines BCMS und das Stufenmodell (Reaktiv-, Aufbau-, Standard-BCMS) erklären",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Im Fokus des Business Continuity Management (BCM) stehen die **zeitkritischen Geschäftsprozesse**, die gegen Ausfälle abgesichert werden. **Zeitkritisch** ist ein Geschäftsprozess, dessen Ausfall innerhalb eines zuvor festgelegten Zeitraums zu einem nicht tolerierbaren, unter Umständen existenzgefährdenden Schaden führen kann. Auch Unterstützungsprozesse und Ressourcen (Personal, IT, Dienstleister), die zeitkritische Prozesse benötigen, sind zeitkritisch. Im BCM werden **ausschließlich** die zeitkritischen Geschäftsprozesse berücksichtigt.",
        },
        { type: "heading", text: "Störung, Notfall, Krise" },
        {
          type: "table",
          headers: ["Begriff", "Merkmal", "Bewältigung"],
          rows: [
            [
              "Störung",
              "Prozesse oder Ressourcen stehen nicht wie vorgesehen zur Verfügung",
              "Im Normalbetrieb durch die **AAO** (Störungs- bzw. Incident-Management); kein Gegenstand von 200-4, kann aber eskalieren",
            ],
            [
              "Notfall",
              "Unterbrechung, die mindestens einen **zeitkritischen** Geschäftsprozess betrifft, der nicht im Normalbetrieb innerhalb der maximal tolerierbaren Ausfallzeit wiederhergestellt werden kann",
              "Durch die **BAO** mit vorhandenen oder adaptierbaren **Notfallplänen**; kann schon bei Gefahr einer Unterbrechung ausgerufen werden",
            ],
            [
              "Krise",
              "Erhebliche negative Auswirkung, nicht im Normalbetrieb bewältigbar – **keine spezifischen Notfallpläne** vorhanden oder anwendbar",
              "Durch die **BAO** situativ",
            ],
          ],
          caption: "Nach BSI-Standard 200-4, Kap. 2.1",
        },
        {
          type: "example",
          title: "Stromausfall",
          text: [
            "Werkstatt ohne Strom, mit Mitteln der AAO behebbar → **Störung**.",
            "Großer Gebäudebereich betroffen, zeitkritische Prozesse unterbrochen, Wiederanlauf nicht in der erforderlichen Zeit → **Notfall**.",
            "Überregional, auch Ausweichstandorte betroffen, Notfallmaßnahmen reichen nicht → **Krise**.",
          ],
        },
        {
          type: "definition",
          term: "AAO und BAO",
          text: "Die **Allgemeine Aufbauorganisation (AAO)** ist die ständige Organisationsform für den Normalbetrieb. Die **Besondere Aufbauorganisation (BAO)** ist eine zeitlich begrenzte Organisationsform für außergewöhnliche Situationen mit eigenen Zuständigkeiten, Hierarchien sowie Kommunikations- und Entscheidungswegen.",
        },
        { type: "heading", text: "Bestandteile eines BCMS" },
        {
          type: "list",
          items: [
            "**BCM-Organisation** auf strategischer, taktischer und operativer Ebene",
            "**BCM-Methoden**: Business-Impact-Analyse, BCM-Risikoanalyse, Entwicklung von BC-Strategien, Lösungen und Notfallplänen",
            "**BCM-Prozess** nach dem **PDCA-Zyklus** – zusätzlich der ereignisbezogene Ablauf der Bewältigung",
            "**Ressourcen**, **Dokumentation** (inkl. Notfallhandbuch) und **Schnittstellen** zu anderen Managementsystemen",
          ],
        },
        {
          type: "paragraph",
          text: "Die **Institutionsleitung** initiiert das BCMS und trägt die Verantwortung; die operativen Aufgaben werden an den oder die **Business Continuity Beauftragte (BCB)** delegiert. Der BSI-Standard 200-4 löst den BSI-Standard 100-4 ab; ein vollständig umgesetztes Standard-BCMS ermöglicht die Reife für eine Zertifizierung nach **ISO 22301**.",
        },
        { type: "heading", text: "Stufenmodell" },
        {
          type: "table",
          headers: ["Stufe", "Merkmal", "Vorteil", "Nachteil"],
          rows: [
            [
              "Reaktiv-BCMS",
              "Ausgewählte zeitkritische Prozesse mit vorhandenen Mitteln oder kleineren Investitionen absichern; stark vereinfachte Einstiegsstufe, nach **einem** Zyklus weiterzuentwickeln",
              "Schnelle Fähigkeit zur Notfallbewältigung",
              "Lücken in nicht oder teilweise betrachteten Bereichen",
            ],
            [
              "Aufbau-BCMS",
              "Zunächst nur ein eingeschränkter Umfang an Geschäftsprozessen (über den **BIA-Vorfilter**), schrittweiser Ausbau",
              "Ressourcenschonender, schrittweiser Aufbau",
              "Nicht betrachtete Bereiche",
            ],
            [
              "Standard-BCMS",
              "Alle Geschäftsprozesse im Geltungsbereich analysiert und angemessen abgesichert",
              "Vollständige Absicherung, gesteigerte Resilienz",
              "Größerer Ressourcenbedarf je Zyklus",
            ],
          ],
          caption: "Nach BSI-Standard 200-4, Kap. 2.6, Tabelle 2",
        },
        {
          type: "callout",
          variant: "merke",
          title: "Ziel Standard-BCMS",
          text: "Reaktiv- und Aufbau-BCMS sind Einstiegsstufen. Ziel muss grundsätzlich immer ein Standard-BCMS sein – nur so werden alle zeitkritischen Geschäftsprozesse identifiziert und angemessen geschützt. Gesetzliche oder regulatorische Anforderungen können gegen den Einstieg mit dem Reaktiv-BCMS sprechen.",
        },
      ],
      sources: [
        { doc: "200-4", section: "Kap. 2.1 Begriffe", page: 19 },
        { doc: "200-4", section: "Kap. 2.2 Grundlagen eines Managementsystems (BCMS)", page: 23 },
        { doc: "200-4", section: "Kap. 2.6 BCMS-Stufenmodell", page: 42 },
        { doc: "200-4", section: "Kap. 3.1 Übernahme der Verantwortung", page: 52 },
      ],
      quiz: [
        {
          id: "q-t15-l01-1",
          topic: 15,
          level: "basis",
          stem: "Wodurch unterscheidet sich laut BSI-Standard 200-4 eine Krise von einem Notfall?",
          options: [
            {
              text: "Für eine Krise liegen keine spezifischen Notfallpläne vor oder sie greifen nicht.",
              correct: true,
            },
            { text: "Eine Krise wird durch die BAO situativ bewältigt.", correct: true },
            {
              text: "Eine Krise wird immer im Normalbetrieb durch die AAO behoben.",
              correct: false,
            },
            {
              text: "Bei einer Krise ist nie ein zeitkritischer Geschäftsprozess betroffen.",
              correct: false,
            },
          ],
          explanation:
            "Notfall: Notfallpläne vorhanden bzw. adaptierbar; Krise: keine passenden Pläne, situative Bewältigung durch die BAO.",
          source: { doc: "200-4", section: "Kap. 2.1", page: 21 },
        },
        {
          id: "q-t15-l01-2",
          topic: 15,
          level: "basis",
          stem: "Welche BCMS-Stufe sollte laut BSI-Standard 200-4 grundsätzlich immer das Ziel sein?",
          options: [
            { text: "Standard-BCMS", correct: true },
            { text: "Reaktiv-BCMS", correct: false },
            { text: "Aufbau-BCMS", correct: false },
            { text: "Keine – alle Stufen sind gleichwertig dauerhaft geeignet", correct: false },
          ],
          explanation: "Reaktiv- und Aufbau-BCMS sind Einstiegsstufen.",
          source: { doc: "200-4", section: "Kap. 2.6.1", page: 44 },
        },
        {
          id: "q-t15-l01-3",
          topic: 15,
          level: "experte",
          stem: "Ein Rechenzentrum fällt aus. Notfallpläne für den Wechsel ins Ausweichrechenzentrum liegen vor und sind anwendbar; betroffen ist die zeitkritische Auftragsannahme. Wie ist die Lage nach BSI-Standard 200-4 einzuordnen?",
          options: [
            { text: "Als Notfall", correct: true },
            {
              text: "Die Bewältigung erfolgt durch die BAO mithilfe der Notfallpläne.",
              correct: true,
            },
            { text: "Als Krise, weil ein Rechenzentrum betroffen ist", correct: false },
            { text: "Als Störung, die im Normalbetrieb von der AAO behoben wird", correct: false },
          ],
          explanation: "Zeitkritischer Prozess betroffen und Notfallpläne anwendbar → Notfall.",
          source: { doc: "200-4", section: "Kap. 2.1", page: 22 },
        },
      ],
    },
    {
      id: "t15-l02",
      title: "Business-Impact-Analyse und Baustein DER.4",
      depth: "I",
      minutes: 30,
      goals: [
        "Die BIA-Kenngrößen MTPD, RTO, RPO und Notbetriebsniveau erklären",
        "Zusammenhänge zwischen den Kenngrößen anwenden",
        "Den Baustein DER.4 Notfallmanagement im Kompendium einordnen",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Die **Business-Impact-Analyse (BIA)** bewertet, welche Auswirkungen der Ausfall eines Geschäftsprozesses hat und **wie sich der Schaden zeitlich entwickelt**. Ergebnis: welche Geschäftsprozesse und Ressourcen **zeitkritisch** sind. Ein **BIA-Vorfilter** kann vorab den Untersuchungsumfang eingrenzen (z. B. beim Aufbau-BCMS).",
        },
        { type: "heading", text: "Kenngrößen der BIA" },
        {
          type: "table",
          headers: ["Kenngröße", "Bedeutung"],
          rows: [
            [
              "MTPD – Maximum Tolerable Period of Disruption (Maximal tolerierbare Ausfallzeit, MTA)",
              "Wie lange ein Geschäftsprozess maximal ausfallen darf, bevor nicht tolerierbare Auswirkungen eintreten; ermittelt über das Schadenspotenzial",
            ],
            [
              "RTO – Recovery Time Objective (Geforderte Wiederanlaufzeit, WAZ)",
              "Zeitraum vom **Ausrufen des Notfalls** bis zur geforderten Inbetriebnahme der BC-Lösung; aus der MTPD abgeleitet, für Prozesse und Ressourcen; **muss zwingend kürzer als die MTPD** sein",
            ],
            [
              "RPO – Recovery Point Objective (maximal zulässiger Datenverlust)",
              "Wie alt verfügbare Daten maximal sein dürfen, um im Notbetrieb sinnvoll arbeiten zu können; Grundlage für den **Datensicherungszyklus**",
            ],
            [
              "Notbetriebsniveau (MBCO)",
              "Wie leistungsfähig der Notbetrieb sein soll; je Geschäftsprozess individuell, z. B. prozentual",
            ],
          ],
          caption: "Nach BSI-Standard 200-4, Kap. 7",
        },
        {
          type: "callout",
          variant: "merke",
          title: "Rechenregeln",
          text: "Die Reaktionszeit wird von der MTPD abgezogen, um mit der RTO die MTPD noch zu erreichen – zusätzlich ist ein Puffer empfehlenswert. Nutzen mehrere Geschäftsprozesse dieselbe Ressource, gilt für sie die kleinste RTO.",
        },
        {
          type: "example",
          title: "Kenngrößen am Beispiel",
          text: "Die Auftragsannahme darf höchstens 48 Stunden ausfallen (MTPD). Bis ein Notfall erkannt und ausgerufen ist, vergehen erfahrungsgemäß bis zu 8 Stunden; mit Puffer wird eine RTO von 24 Stunden festgelegt. Weil Aufträge höchstens einen halben Tag nacherfasst werden können, beträgt die RPO 12 Stunden – Datensicherungen müssen also mindestens zweimal täglich laufen.",
        },
        { type: "heading", text: "Baustein DER.4 Notfallmanagement" },
        {
          type: "list",
          items: [
            "Immer **einmal für den gesamten Informationsverbund** anzuwenden; Bearbeitungsreihenfolge **R3**.",
            "Eigener Prozessverantwortlicher: der oder die **Notfallbeauftragte**, abgestimmt mit dem ISB.",
            "Ob ein Notfall vorliegt, wird **nicht in DER.4**, sondern bei der Behandlung des Sicherheitsvorfalls (**DER.2.1**) entschieden. Krisen werden im eigenen Krisenmanagement behandelt.",
            "Der Baustein enthält **keine Basis-Anforderungen**. Standard: **A1 Notfallhandbuch** (aktuell, im Notfall zugänglich, durch Tests und Übungen überprüft) und **A2 Integration** von Notfall- und Informationssicherheitsmanagement.",
            "Bei erhöhtem Schutzbedarf u. a. Geltungsbereich und Strategie, Leitlinie, Organisationsstruktur, Ressourcen, **Notfallkonzept auf Basis einer BIA**, Sensibilisierung, **Tests und Notfallübungen**.",
          ],
        },
      ],
      sources: [
        { doc: "200-4", section: "Kap. 7 Business-Impact-Analyse", page: 158 },
        { doc: "kompendium", section: "DER.4 Notfallmanagement" },
      ],
      quiz: [
        {
          id: "q-t15-l02-1",
          topic: 15,
          level: "basis",
          stem: "Was gibt die RPO (Recovery Point Objective) an?",
          options: [
            { text: "Den maximal zulässigen Datenverlust", correct: true },
            {
              text: "Wie alt verfügbare Daten maximal sein dürfen, um im Notbetrieb sinnvoll arbeiten zu können",
              correct: true,
            },
            {
              text: "Die maximal tolerierbare Ausfallzeit eines Geschäftsprozesses",
              correct: false,
            },
            { text: "Die Leistungsfähigkeit des Notbetriebs", correct: false },
          ],
          explanation:
            "Maximal tolerierbare Ausfallzeit = MTPD; Leistungsfähigkeit = Notbetriebsniveau.",
          source: { doc: "200-4", section: "Kap. 7", page: 159 },
        },
        {
          id: "q-t15-l02-2",
          topic: 15,
          level: "basis",
          stem: "Welche Aussage zum Verhältnis von RTO und MTPD ist richtig?",
          options: [
            { text: "Die RTO muss zwingend kürzer sein als die MTPD.", correct: true },
            { text: "Die RTO muss länger sein als die MTPD.", correct: false },
            { text: "RTO und MTPD sind immer identisch.", correct: false },
            { text: "Die MTPD wird aus der RTO abgeleitet.", correct: false },
          ],
          explanation: "Die RTO wird aus der MTPD abgeleitet und muss kürzer sein.",
          source: { doc: "200-4", section: "Kap. 7", page: 159 },
        },
        {
          id: "q-t15-l02-3",
          topic: 15,
          level: "basis",
          stem: "Welche Aussagen zum Baustein DER.4 Notfallmanagement treffen zu?",
          options: [
            {
              text: "Er ist einmal für den gesamten Informationsverbund anzuwenden.",
              correct: true,
            },
            { text: "Er enthält keine Basis-Anforderungen.", correct: true },
            { text: "In ihm wird entschieden, ob ein Notfall vorliegt.", correct: false },
            { text: "Grundsätzlich zuständig sind die Notfallbeauftragten.", correct: true },
          ],
          explanation:
            "Die Entscheidung über einen Notfall fällt bei der Behandlung des Sicherheitsvorfalls (DER.2.1).",
          source: { doc: "kompendium", section: "DER.4, Kap. 1.3 und 3" },
        },
      ],
    },
  ],
};
