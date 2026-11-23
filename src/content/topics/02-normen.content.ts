import type { TopicContent } from "../course.types";

/** Themenfeld 2: Normen und Standards der Informationssicherheit. */
export const topic: TopicContent = {
  topic: 2,
  lessons: [
    {
      id: "t02-l01",
      title: "Die ISO/IEC-2700x-Normenreihe",
      depth: "I",
      minutes: 30,
      goals: [
        "Zweck und Inhalt der wichtigsten Normen der ISO/IEC-2700x-Reihe benennen",
        "Den Unterschied zwischen ISO/IEC 27001 (Anforderungen, zertifizierbar) und ISO/IEC 27002 (Maßnahmenempfehlungen) erklären",
        "Die Rolle des PDCA-Zyklus für ein ISMS einordnen",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Innerhalb der internationalen Normungsorganisationen **ISO und IEC** werden die Normen zur Informationssicherheit in der **2700x-Reihe** zusammengeführt. International heißen sie „Standards“; ein Teil liegt auch als DIN-Normen in deutscher Übersetzung vor. Der Einsatz von Normen verbessert das Sicherheitsniveau und erleichtert die Abstimmung zwischen Institutionen darüber, welche Maßnahmen in welcher Form umzusetzen sind.",
        },
        {
          type: "table",
          headers: ["Norm", "Inhalt"],
          rows: [
            [
              "ISO/IEC 27000",
              "Überblick über ISMS, Zusammenhänge der 2700x-Familie, **Begriffe und Definitionen**",
            ],
            [
              "ISO/IEC 27001",
              "**Anforderungen** an Einführung, Betrieb und Verbesserung eines dokumentierten ISMS; **zertifizierbar**. Normativer Anhang mit mehr als 100 Maßnahmen (Controls), die risikobasiert auszuwählen sind. Keine Hilfe zur praktischen Umsetzung.",
            ],
            [
              "ISO/IEC 27002",
              "Leitfaden zur **Auswahl und Umsetzung der Maßnahmen** aus ISO/IEC 27001; vor allem für die Management-Ebene, kaum konkrete technische Hinweise",
            ],
            [
              "ISO/IEC 27004",
              "Bewertung von Umsetzung und **Wirksamkeit eines ISMS** anhand von Kenngrößen",
            ],
            [
              "ISO/IEC 27005",
              "Rahmenempfehlungen zum **Risikomanagement**; gibt keine spezifische Methode vor; basiert wesentlich auf ISO 31000",
            ],
            [
              "ISO/IEC 27006",
              "Anforderungen an die **Akkreditierung von Zertifizierungsstellen** für ISMS",
            ],
            [
              "ISO/IEC 27009",
              "Wie **sektorspezifische Erweiterungen** in ein ISMS nach ISO/IEC 27001 einfließen",
            ],
            [
              "ISO/IEC 27010 – 27019",
              "**Sektorspezifische Normen**, z. B. ISO/IEC 27019 für den Energiesektor",
            ],
          ],
          caption: "Nach BSI-Standard 200-1, Kap. 2.1.1",
        },
        {
          type: "paragraph",
          text: "Ergänzend beschreibt **ISO/IEC 31010**, wie die Risikobeurteilung in ein Risikomanagementsystem integriert werden kann; ihr Anhang B führt 31 Methoden zur Risikobeurteilung auf.",
        },
        { type: "heading", text: "PDCA-Zyklus" },
        {
          type: "paragraph",
          text: "Früher orientierte sich ISO/IEC 27001 explizit am Lebenszyklusmodell **Plan – Do – Check – Act**. Um mit dem **Annex SL** (Leitfaden für Managementsystemnormen) kompatibel zu sein, wird der PDCA-Zyklus in der überarbeiteten Norm nicht mehr ausdrücklich genannt. Damit soll deutlich werden, dass die Reihenfolge der Anforderungen nichts über ihre Wichtigkeit oder Umsetzungsreihenfolge aussagt. Alle Aktivitäten zum Aufbau und Betrieb eines ISMS lassen sich aber **weiterhin nach dem PDCA-Zyklus** durchführen.",
        },
        {
          type: "callout",
          variant: "merke",
          title: "27001 vs. 27002",
          text: "ISO/IEC 27001 sagt, WAS ein ISMS erfüllen muss, und ist zertifizierbar. ISO/IEC 27002 hilft bei der Auswahl und Umsetzung von Maßnahmen. Die Umsetzung der 27002-Empfehlungen ist eine von vielen Möglichkeiten, die Anforderungen der ISO 27001 zu erfüllen – der IT-Grundschutz ist eine andere.",
        },
      ],
      sources: [
        { doc: "200-1", section: "Kap. 2.1.1 ISO-Normen zur Informationssicherheit", page: 9 },
      ],
      quiz: [
        {
          id: "q-t02-l01-1",
          topic: 2,
          level: "basis",
          stem: "Welche Norm der 2700x-Reihe ermöglicht eine Zertifizierung des ISMS?",
          options: [
            { text: "ISO/IEC 27000", correct: false },
            { text: "ISO/IEC 27001", correct: true },
            { text: "ISO/IEC 27002", correct: false },
            { text: "ISO/IEC 27005", correct: false },
          ],
          explanation:
            "ISO/IEC 27001 enthält normative Anforderungen an ein ISMS und ermöglicht eine Zertifizierung.",
          source: { doc: "200-1", section: "Kap. 2.1.1", page: 9 },
        },
        {
          id: "q-t02-l01-2",
          topic: 2,
          level: "basis",
          stem: "Welche Aussagen zu ISO/IEC 27005 treffen laut BSI-Standard 200-1 zu?",
          options: [
            {
              text: "Sie enthält Rahmenempfehlungen zum Risikomanagement für Informationssicherheit.",
              correct: true,
            },
            {
              text: "Sie schreibt eine verbindliche Methode zur Risikoanalyse vor.",
              correct: false,
            },
            { text: "Sie basiert wesentlich auf ISO/IEC 31000.", correct: true },
            { text: "Sie regelt die Akkreditierung von Zertifizierungsstellen.", correct: false },
          ],
          explanation:
            "ISO/IEC 27005 gibt keine spezifische Methode vor und basiert auf ISO 31000; die Akkreditierung regelt ISO/IEC 27006.",
          source: { doc: "200-1", section: "Kap. 2.1.1", page: 9 },
        },
        {
          id: "q-t02-l01-3",
          topic: 2,
          level: "basis",
          stem: "Warum wird der PDCA-Zyklus in der überarbeiteten ISO/IEC 27001 nicht mehr explizit genannt?",
          options: [
            {
              text: "Wegen der Kompatibilität mit dem Annex SL für Managementsystemnormen",
              correct: true,
            },
            {
              text: "Weil die Reihenfolge der Anforderungen keinen Rückschluss auf Wichtigkeit oder Umsetzungsreihenfolge geben soll",
              correct: true,
            },
            {
              text: "Weil ein ISMS nicht mehr kontinuierlich verbessert werden muss",
              correct: false,
            },
            { text: "Weil der PDCA-Zyklus für ein ISMS nicht mehr anwendbar ist", correct: false },
          ],
          explanation:
            "Der Verzicht dient der Annex-SL-Kompatibilität; alle ISMS-Aktivitäten lassen sich weiterhin nach PDCA durchführen.",
          source: { doc: "200-1", section: "Kap. 2.1.1", page: 9 },
        },
      ],
    },
    {
      id: "t02-l02",
      title: "BSI-Standards und IT-Grundschutz-Kompendium",
      depth: "I",
      minutes: 25,
      goals: [
        "Die BSI-Standards 200-1, 200-2, 200-3 und 200-4 mit ihrem jeweiligen Zweck zuordnen",
        "Das Verhältnis von IT-Grundschutz zu ISO/IEC 27001 und 27002 erklären",
        "Kompendium, Bausteine und Umsetzungshinweise unterscheiden",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Die Methodik des BSI zur Informationssicherheit ist **seit 1994 der IT-Grundschutz** – eine ganzheitliche Vorgehensweise für Institutionen aller Arten und Größen. Politische Rahmenbedingungen wie das IT-Sicherheitsgesetz, die Dynamik der Informationssicherheit und professionellere Cyberangriffe führten zur Modernisierung mit den **BSI-Standards 200-1 bis 200-3** und dem **IT-Grundschutz-Kompendium**.",
        },
        {
          type: "table",
          headers: ["Dokument", "Zweck"],
          rows: [
            [
              "BSI-Standard 200-1 – Managementsysteme für Informationssicherheit (ISMS)",
              "Allgemeine Anforderungen an ein ISMS; **vollständig kompatibel mit ISO/IEC 27001**, berücksichtigt Begriffe der ISO/IEC 27000 und Empfehlungen der ISO/IEC 27002",
            ],
            [
              "BSI-Standard 200-2 – IT-Grundschutz-Methodik",
              "Schritt-für-Schritt-Aufbau und Betrieb eines ISMS; **Basis-, Kern- und Standard-Absicherung**; Erstellung des Sicherheitskonzepts",
            ],
            [
              "BSI-Standard 200-3 – Risikoanalyse auf der Basis von IT-Grundschutz",
              "Vereinfachte Risikoanalyse auf Basis der **elementaren Gefährdungen**",
            ],
            [
              "BSI-Standard 200-4 – Business Continuity Management",
              "Aufbau und Betrieb eines BCMS; Nachfolger des BSI-Standards 100-4 Notfallmanagement",
            ],
            [
              "IT-Grundschutz-Kompendium",
              "Modular aufgebaute **Bausteine** mit Gefährdungslage und Sicherheitsanforderungen",
            ],
            [
              "Umsetzungshinweise",
              "Beschreiben, **wie** Anforderungen in der Praxis erfüllt werden können (konkrete Maßnahmen, Best Practices)",
            ],
            [
              "Leitfaden für die IS-Revision",
              "Verfahren, um den Status der Informationssicherheit festzustellen und Schwachstellen zu identifizieren",
            ],
          ],
        },
        {
          type: "callout",
          variant: "merke",
          title: "IT-Grundschutz und ISO 27001",
          text: "Der IT-Grundschutz interpretiert die allgemein gehaltenen Anforderungen der ISO/IEC 27001 und 27002 und hilft bei der praktischen Umsetzung. Ein Vorgehen nach IT-Grundschutz ist eine erprobte und effiziente Möglichkeit, allen Anforderungen dieser ISO-Normen gerecht zu werden. Die Bausteine erklären, WAS getan werden sollte; die Umsetzungshinweise, WIE es geht.",
        },
        {
          type: "paragraph",
          text: "Das Kompendium betrachtet alle Bereiche einer Institution – neben Organisation, Personal und IT-Betrieb auch Produktion und Fertigung mit **ICS** sowie **IoT**-Komponenten. Bausteine und Umsetzungshinweise werden regelmäßig aktualisiert und kostenfrei im Internet veröffentlicht.",
        },
        { type: "heading", text: "Branchenspezifische Standards und IT-Grundschutz-Profile" },
        {
          type: "paragraph",
          text: "Bei der Ermittlung der Rahmenbedingungen fragt der Leitfaden zur Basis-Absicherung ausdrücklich: **„Was sind branchenspezifische Sicherheitsstandards?“** Sektorspezifische Normen (ISO/IEC 27010 bis 27019) und **IT-Grundschutz-Profile** – Musterlösungen für typische Szenarien einer Branche oder Institutionsart – helfen, den IT-Grundschutz auf die eigene Situation zu übertragen. Profile werden in Themenfeld 12 ausführlich behandelt.",
        },
        {
          type: "praxis",
          title: "Vom Kompendium zu Grundschutz++",
          text: "Das IT-Grundschutz-Kompendium Edition 2023 ist die letzte Ausgabe im bisherigen Format. Das BSI überführt den IT-Grundschutz in ein modernisiertes, maschinenlesbares Regelwerk („Grundschutz++“). Für die Praktiker-Prüfung bleiben die in diesem Kurs genutzten Dokumente maßgeblich.",
          source: {
            label: "BSI: IT-Grundschutz",
            url: "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/it-grundschutz_node.html",
            date: "2026",
          },
        },
      ],
      sources: [
        {
          doc: "200-1",
          section: "Kap. 2.1.2 Ausgewählte BSI-Publikationen und Standards",
          page: 10,
        },
        { doc: "basis", section: "Kap. 3.1 Ermittlung von Rahmenbedingungen", page: 41 },
        { doc: "200-4", section: "Kap. 1.1 Versionshistorie" },
      ],
      quiz: [
        {
          id: "q-t02-l02-1",
          topic: 2,
          level: "basis",
          stem: "Welcher BSI-Standard beschreibt die Basis-, Kern- und Standard-Absicherung?",
          options: [
            { text: "BSI-Standard 200-1", correct: false },
            { text: "BSI-Standard 200-2", correct: true },
            { text: "BSI-Standard 200-3", correct: false },
            { text: "BSI-Standard 200-4", correct: false },
          ],
          explanation:
            "Die drei Vorgehensweisen sind Inhalt der IT-Grundschutz-Methodik (BSI-Standard 200-2).",
          source: { doc: "200-1", section: "Kap. 2.1.2", page: 12 },
        },
        {
          id: "q-t02-l02-2",
          topic: 2,
          level: "basis",
          stem: "Welche Aussagen zum BSI-Standard 200-1 sind richtig?",
          options: [
            { text: "Er ist vollständig kompatibel mit ISO/IEC 27001.", correct: true },
            { text: "Er definiert allgemeine Anforderungen an ein ISMS.", correct: true },
            { text: "Er enthält die elementaren Gefährdungen G 0.1 bis G 0.47.", correct: false },
            { text: "Er berücksichtigt die in ISO/IEC 27000 definierten Begriffe.", correct: true },
          ],
          explanation:
            "200-1 definiert ISMS-Anforderungen kompatibel zu ISO 27001; die elementaren Gefährdungen stehen im Kompendium.",
          source: { doc: "200-1", section: "Kap. 2.1.2", page: 12 },
        },
        {
          id: "q-t02-l02-3",
          topic: 2,
          level: "experte",
          stem: "Eine Institution möchte die Anforderungen der ISO/IEC 27001 erfüllen. Welche Aussagen sind im Sinne von BSI-Standard 200-1 zutreffend?",
          options: [
            {
              text: "Ein Vorgehen nach IT-Grundschutz ist eine erprobte Möglichkeit, den Anforderungen der ISO 27001 gerecht zu werden.",
              correct: true,
            },
            {
              text: "Die Bausteine beschreiben, was getan werden sollte; Umsetzungshinweise beschreiben, wie es umgesetzt werden kann.",
              correct: true,
            },
            {
              text: "Die Umsetzung der Empfehlungen aus ISO/IEC 27002 ist der einzige Weg, ISO 27001 zu erfüllen.",
              correct: false,
            },
            {
              text: "ISO/IEC 27001 enthält detaillierte Hilfen zur technischen Umsetzung in der Praxis.",
              correct: false,
            },
          ],
          explanation:
            "27002 ist nur eine von vielen Möglichkeiten; ISO 27001 selbst gibt keine Hilfe zur praktischen Umsetzung.",
          source: { doc: "200-1", section: "Kap. 2.1.1 und 2.1.2", page: 12 },
        },
      ],
    },
    {
      id: "t02-l03",
      title: "Weitere Standards, VSA und integrierte Managementsysteme",
      depth: "I",
      minutes: 30,
      goals: [
        "COBIT, ITIL, PCI DSS, NIST SP 800-53 und den ISF Standard of Good Practice einordnen",
        "Das Verhältnis von IT-Grundschutz und Verschlusssachenanweisung (VSA) erklären",
        "Synergieeffekte zwischen ISMS, BCM und Risikomanagement benennen",
      ],
      blocks: [
        {
          type: "table",
          headers: ["Standard", "Herausgeber und Fokus"],
          rows: [
            [
              "COBIT 5",
              "ISACA; IT als Grundlage zur Erreichung der Geschäftsziele; Reife von **37 Prozessgebieten in fünf Domänen**; orientiert sich u. a. an ISO/IEC 27002",
            ],
            [
              "ITIL",
              "Britisches Office of Government Commerce (OGC); **IT-Service-Management** aus Sicht des IT-Dienstleisters; Basis der zertifizierbaren Norm **ISO/IEC 20000**",
            ],
            [
              "PCI DSS",
              "PCI Security Standards Council (Kreditkartenorganisationen); Pflicht für alle, die **Karteninhaberdaten** speichern, verarbeiten oder übertragen",
            ],
            [
              "NIST SP 800-53",
              "US-Bundesbehörde NIST; umfangreicher Katalog von **Controls**; NIST-Standards sind für US-Behörden verpflichtend",
            ],
            [
              "ISF Standard of Good Practice",
              "Information Security Forum; Best-Practice-Leitfaden, deckt nach eigenen Angaben ISO/IEC 27002, COBIT 5, PCI DSS und das NIST Cybersecurity Framework ab",
            ],
          ],
          caption: "Nach BSI-Standard 200-1, Kap. 2.1.3",
        },
        {
          type: "paragraph",
          text: "Umgekehrt ist ein funktionierender IT-Betrieb ein wesentlicher Stützpfeiler für das ISMS. Viele ITIL-Disziplinen finden sich deshalb – mit Fokus auf Informationssicherheit – im IT-Grundschutz wieder.",
        },
        { type: "heading", text: "Geheimschutz: Verschlusssachenanweisung (VSA)" },
        {
          type: "paragraph",
          text: "Für den materiellen Geheimschutz des Bundes ist die **Verschlusssachenanweisung (VSA)** maßgeblich; Grundlage des personellen Geheimschutzes ist das Sicherheitsüberprüfungsgesetz (SÜG). Wird IT zur Handhabung von Verschlusssachen eingesetzt (**VS-IT**), ist ein **Informationssicherheitskonzept nach den BSI-Standards des IT-Grundschutzes Voraussetzung** – hinzu kommen die Geheimschutzanforderungen. Der Baustein **CON.11.1 Geheimschutz VS-NfD** unterstützt dabei.",
        },
        {
          type: "callout",
          variant: "merke",
          title: "Zertifikat ersetzt keine VS-Freigabe",
          text: "IT-Grundschutz dient der Informationssicherheit, die VSA dem Geheimschutz. Eine ISO 27001-Zertifizierung auf Basis von IT-Grundschutz ersetzt daher nicht die Freigaben nach VSA.",
        },
        { type: "heading", text: "Integrierte Managementsysteme und Synergien" },
        {
          type: "list",
          items: [
            "Zu den Aufgaben der oder des ISB gehört, **Synergien zwischen dem Informationssicherheitsprozess und anderen Managementprozessen** ausfindig zu machen (BSI-Standard 200-2).",
            "Bei der Strukturanalyse können vorhandene **Inventar-, Konfigurationsmanagement- oder Prozessdatenbanken** genutzt werden.",
            "**ISMS und BCMS**: Schnittstellen früh festlegen – im Notbetrieb kann es Zielkonflikte geben (z. B. Verfügbarkeit gegen Vertraulichkeit).",
            "**Risikomanagement**: Methoden, Risikokategorien und Akzeptanzkriterien können von BCM und ISMS gemeinsam genutzt werden.",
            "**Three-Lines-of-Defense**: 1. Linie = Risikoeigentümer; 2. Linie = steuernde und überwachende Funktionen, z. B. das BCM; 3. Linie = unabhängige Prüfinstanz, häufig die interne Revision.",
          ],
        },
        {
          type: "praxis",
          title: "C5 und HV-Benchmark",
          text: "Das Curriculum nennt außerdem den **C5** (Cloud Computing Compliance Criteria Catalogue des BSI) – einen Kriterienkatalog, mit dem Cloud-Anbieter die Informationssicherheit ihrer Dienste durch eine Prüfung nachweisen können – und den **HV-Benchmark**, ein Reifegradmodell des BSI zur Bewertung der Hochverfügbarkeit. Beide sind nicht Teil der in diesem Kurs verwendeten Quelldokumente; merken Sie sich ihren Zweck.",
          source: {
            label: "BSI: Kriterienkatalog C5",
            url: "https://www.bsi.bund.de/C5",
            date: "2026",
          },
        },
      ],
      sources: [
        { doc: "200-1", section: "Kap. 2.1.3 Weitere Sicherheitsstandards", page: 13 },
        { doc: "kompendium", section: "CON.11.1 Geheimschutz VS-NfD, Kap. 1" },
        {
          doc: "200-2",
          section: "Kap. 5.2 Informationsfluss im Informationssicherheitsprozess",
          page: 60,
        },
        { doc: "200-4", section: "Kap. 4.2 Analyse der erweiterten Rahmenbedingungen", page: 75 },
      ],
      quiz: [
        {
          id: "q-t02-l03-1",
          topic: 2,
          level: "basis",
          stem: "Welche Aussagen zu ITIL treffen laut BSI-Standard 200-1 zu?",
          options: [
            { text: "ITIL befasst sich mit IT-Service-Management.", correct: true },
            { text: "Auf Basis von ITIL wurde die Norm ISO/IEC 20000 erarbeitet.", correct: true },
            { text: "ITIL wird von der ISACA herausgegeben.", correct: false },
            { text: "ITIL betrachtet IT-Services aus Sicht des IT-Dienstleisters.", correct: true },
          ],
          explanation: "ITIL stammt vom britischen OGC; die ISACA gibt COBIT heraus.",
          source: { doc: "200-1", section: "Kap. 2.1.3", page: 13 },
        },
        {
          id: "q-t02-l03-2",
          topic: 2,
          level: "basis",
          stem: "Eine Bundesbehörde verarbeitet VS-NfD und besitzt ein ISO 27001-Zertifikat auf Basis von IT-Grundschutz. Was gilt?",
          options: [
            { text: "Das Zertifikat ersetzt die Freigaben nach VSA.", correct: false },
            { text: "Die Anforderungen der VSA müssen zusätzlich beachtet werden.", correct: true },
            {
              text: "Ein Informationssicherheitskonzept nach IT-Grundschutz ist Voraussetzung für den Einsatz von VS-IT.",
              correct: true,
            },
            {
              text: "Der Baustein CON.11.1 stellt ein eigenständiges Regelwerk dar.",
              correct: false,
            },
          ],
          explanation:
            "CON.11.1 unterstützt nur die Umsetzung der VSA und ist kein eigenständiges Regelwerk; das Zertifikat ersetzt keine VSA-Freigaben.",
          source: { doc: "kompendium", section: "CON.11.1, Kap. 1.1 und 1.3" },
        },
        {
          id: "q-t02-l03-3",
          topic: 2,
          level: "basis",
          stem: "Wer bildet im Three-Lines-of-Defense-Modell die dritte Verteidigungslinie?",
          options: [
            { text: "Die Risikoeigentümer in den Fachbereichen", correct: false },
            {
              text: "Eine objektive und unabhängige Prüfinstanz, häufig die interne Revision",
              correct: true,
            },
            { text: "Der oder die BCM-Beauftragte", correct: false },
            { text: "Externe Dienstleister des IT-Betriebs", correct: false },
          ],
          explanation:
            "Die 3. Linie prüft unabhängig im Auftrag der Institutionsleitung; die 2. Linie (z. B. BCM) steuert, die 1. Linie sind die Risikoeigentümer.",
          source: { doc: "200-4", section: "Kap. 4.2", page: 76 },
        },
      ],
    },
  ],
};
