import type { TopicContent } from "../course.types";

/** Themenfeld 7: IT-Grundschutz-Check. */
export const topic: TopicContent = {
  topic: 7,
  lessons: [
    {
      id: "t07-l01",
      title: "Was wird geprüft? Vorbereitung des IT-Grundschutz-Checks",
      depth: "II",
      minutes: 30,
      goals: [
        "Zweck und Voraussetzungen des IT-Grundschutz-Checks erklären",
        "Die drei Schritte des Checks benennen",
        "Für Bausteine verschiedener Schichten geeignete Interviewpartner auswählen",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Der **IT-Grundschutz-Check** ist ein **Organisationsinstrument**, das einen schnellen Überblick über das vorhandene Sicherheitsniveau gibt (früher: Basis-Sicherheitscheck). Mithilfe von **Interviews** wird ermittelt, wie weit die Anforderungen der modellierten Bausteine umgesetzt sind. Die Modellierung dient dabei als **Prüfplan** für einen **Soll-Ist-Vergleich**.",
        },
        {
          type: "callout",
          variant: "merke",
          title: "Voraussetzungen",
          text: "Strukturanalyse, Schutzbedarfsfeststellung und Modellierung liegen vor. Geprüft werden die Anforderungen der Bausteine, die den Zielobjekten bei der Modellierung zugeordnet wurden.",
        },
        { type: "heading", text: "Drei Schritte" },
        {
          type: "list",
          ordered: true,
          items: [
            "**Organisatorische Vorarbeiten** – insbesondere Auswahl der Ansprechpartner",
            "**Soll-Ist-Vergleich** mittels Interviews und stichprobenartiger Kontrolle",
            "**Dokumentation** der Ergebnisse einschließlich der Begründungen",
          ],
        },
        { type: "heading", text: "Organisatorische Vorarbeiten" },
        {
          type: "list",
          items: [
            "Hausinterne Dokumente sichten (Organisationsverfügungen, Arbeitshinweise, Sicherheitsanweisungen, Handbücher, auch „informelle“ Vorgehensweisen) und Zuständigkeiten dafür klären.",
            "Feststellen, ob **externe Stellen** beteiligt werden müssen – z. B. externe Rechenzentren, vorgesetzte Behörden, Outsourcing-Dienstleister, Baubehörden.",
            "Für **jeden modellierten Baustein einen Hauptansprechpartner** festlegen; die in den Anforderungen genannten Rollen helfen dabei.",
            "Terminplan inklusive Ausweichterminen abstimmen.",
            "Interviewteams bilden – bewährt haben sich **zwei Personen**: eine fragt, eine protokolliert.",
          ],
        },
        {
          type: "table",
          headers: ["Schicht", "Typischer Hauptansprechpartner"],
          rows: [
            [
              "ORP, CON, OPS",
              "Ergibt sich aus der Thematik, z. B. Personalabteilung für ORP.2 Personal; für Konzepte die Person, die das Dokument fortschreibt",
            ],
            [
              "INF",
              "In Abstimmung mit Innerem Dienst/Haustechnik; in kleinen Institutionen oft der Hausmeister; ggf. externe Stellen",
            ],
            [
              "SYS, NET, IND",
              "Administration der Komponente bzw. Gruppe, der der Baustein zugeordnet wurde",
            ],
            ["APP", "Betreuung bzw. Verantwortliche der einzelnen Anwendungen"],
          ],
        },
      ],
      sources: [
        { doc: "200-2", section: "Kap. 8.4 und 8.4.1", page: 145 },
        { doc: "kompendium", section: "Glossar: IT-Grundschutz-Check" },
      ],
      quiz: [
        {
          id: "q-t07-l01-1",
          topic: 7,
          level: "basis",
          stem: "Was dient beim IT-Grundschutz-Check als Prüfplan?",
          options: [
            { text: "Die Modellierung des Informationsverbunds", correct: true },
            { text: "Die Sicherheitsleitlinie", correct: false },
            { text: "Der Netzplan allein", correct: false },
            { text: "Die Liste der elementaren Gefährdungen", correct: false },
          ],
          explanation:
            "Das IT-Grundschutz-Modell (Modellierung) wird als Prüfplan für den Soll-Ist-Vergleich genutzt.",
          source: { doc: "200-2", section: "Kap. 8.4", page: 145 },
        },
        {
          id: "q-t07-l01-2",
          topic: 7,
          level: "basis",
          stem: "Wer ist laut BSI-Standard 200-2 typischerweise Hauptansprechpartner für einen Baustein der Schicht SYS?",
          options: [
            {
              text: "Die Administration der Komponente bzw. Gruppe, der der Baustein zugeordnet wurde",
              correct: true,
            },
            { text: "Die Personalabteilung", correct: false },
            { text: "Die Haustechnik", correct: false },
            { text: "Immer die Institutionsleitung", correct: false },
          ],
          explanation:
            "Bei SYS, NET und IND stehen technische Aspekte im Vordergrund; daher ist die Administration gefragt.",
          source: { doc: "200-2", section: "Kap. 8.4.1", page: 146 },
        },
        {
          id: "q-t07-l01-3",
          topic: 7,
          level: "basis",
          stem: "Welche Vorarbeiten gehören laut BSI-Standard 200-2 zum IT-Grundschutz-Check?",
          options: [
            { text: "Hausinterne Regelungen sichten und Zuständigkeiten klären", correct: true },
            { text: "Klären, ob externe Stellen zu beteiligen sind", correct: true },
            { text: "Einen Terminplan für Interviews abstimmen", correct: true },
            { text: "Die Schutzbedarfskategorien neu definieren", correct: false },
          ],
          explanation:
            "Die Schutzbedarfsdefinition ist Teil der Schutzbedarfsfeststellung, nicht des Checks.",
          source: { doc: "200-2", section: "Kap. 8.4.1", page: 149 },
        },
      ],
    },
    {
      id: "t07-l02",
      title: "Durchführung und Dokumentation des Soll-Ist-Vergleichs",
      depth: "II",
      minutes: 40,
      goals: [
        "Den Umsetzungsstatus entbehrlich/ja/teilweise/nein korrekt vergeben",
        "Die Regeln für „entbehrlich“ einschließlich der Kreuzreferenztabelle anwenden",
        "Die Ergebnisse vollständig und zertifizierungstauglich dokumentieren",
      ],
      blocks: [
        { type: "heading", text: "Umsetzungsstatus" },
        {
          type: "table",
          headers: ["Status", "Bedeutung"],
          rows: [
            [
              "entbehrlich",
              "Die Erfüllung ist in der vorgeschlagenen Art nicht notwendig, weil die Anforderung **nicht relevant** ist (z. B. Dienst nicht aktiviert) oder durch **Alternativmaßnahmen** behandelt wurde.",
            ],
            ["ja", "Geeignete Maßnahmen wurden **vollständig, wirksam und angemessen** umgesetzt."],
            ["teilweise", "Die Anforderung wurde nur teilweise umgesetzt."],
            [
              "nein",
              "Die Anforderung wurde noch nicht erfüllt; geeignete Maßnahmen sind größtenteils noch nicht umgesetzt.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "merke",
          title: "Regeln für „entbehrlich“",
          text: "Über die Kreuzreferenztabelle werden die zugehörigen elementaren Gefährdungen identifiziert. Bei Alternativmaßnahmen muss begründet werden, dass das Risiko aller betreffenden Gefährdungen angemessen minimiert wurde. Bei Basis-Anforderungen kann das Risiko NICHT übernommen werden. Eine Anforderung darf nicht auf „entbehrlich“ gesetzt werden, weil das Risiko einer Gefährdung pauschal akzeptiert oder ausgeschlossen wird.",
        },
        { type: "heading", text: "Durchführung der Interviews" },
        {
          type: "list",
          items: [
            "Bausteintexte, Umsetzungshinweise und Checklisten griffbereit haben.",
            "Zweck des Checks erläutern, Anforderungen der Reihe nach durchgehen und kurz erläutern; Befragte zuerst über bereits Umgesetztes berichten lassen.",
            "Die **Befragungstiefe** richtet sich zunächst nach Basis- und Standard-Anforderungen; weitergehende Aspekte hochschutzbedürftiger Anwendungen erst **nach** Abschluss des Checks betrachten.",
            "Aussagen **stichprobenartig verifizieren**: Regelungen sichten, Infrastruktur vor Ort besichtigen, Einstellungen an ausgewählten Systemen prüfen.",
            "Am Ende jedes Bausteins den Befragten das **Ergebnis mitteilen** und erläutern.",
          ],
        },
        { type: "heading", text: "Dokumentation" },
        {
          type: "paragraph",
          text: "Stamminformationen: Nummer und Bezeichnung des Zielobjekts bzw. der Gruppe, Standort, Erfassungsdatum und Name der erfassenden Person, befragte Ansprechpartner. Je Anforderung:",
        },
        {
          type: "list",
          items: [
            "**Umsetzungsgrad** (entbehrlich/ja/teilweise/nein) – im Hinblick auf eine Zertifizierung auch, **durch welche Maßnahmen** die Anforderung erfüllt wird",
            "**Umsetzung bis** – Platzhalter für die Realisierungsplanung, im Check meist noch leer",
            "**Verantwortliche** – nur eintragen, wenn eindeutig; sonst in der Realisierungsplanung bestimmen",
            "**Bemerkungen/Begründungen** – z. B. Begründung für „entbehrlich“ oder noch fehlende Maßnahmen",
            "**Defizite/Kostenschätzung** – Risiko bei nicht oder teilweise erfüllten Anforderungen sowie geschätzter finanzieller und personeller Aufwand",
          ],
        },
        {
          type: "example",
          title: "Dokumentation nach RECPLAST-Muster",
          text: [
            "ISMS.1.A1 Übernahme der Gesamtverantwortung – **ja**: Leitlinie von der Geschäftsführung unterzeichnet, monatlicher Management-Report.",
            "ISMS.1.A5 Vertragsgestaltung bei externem ISB – **entbehrlich**: Der ISB ist interner Mitarbeiter.",
            "ISMS.1.A7 Festlegung von Sicherheitsmaßnahmen – **teilweise**: Maßnahmen werden gemeldet, aber nicht ausgewertet; Umsetzung bis 30.04.",
          ],
        },
        {
          type: "paragraph",
          text: "Als Hilfsmittel eignen sich **IT-Grundschutz-Tools**, die die gesamte Vorgehensweise unterstützen (Stammdaten bis Anforderungserfüllung, Reports, Kostenauswertungen), oder die vom BSI bereitgestellten **Formulare** – zu jedem Baustein gibt es eine Datei zur tabellarischen Erfassung.",
        },
      ],
      sources: [{ doc: "200-2", section: "Kap. 8.4.2 und 8.4.3", page: 150 }],
      quiz: [
        {
          id: "q-t07-l02-1",
          topic: 7,
          level: "basis",
          stem: "Welche Antworten sind beim IT-Grundschutz-Check als Umsetzungsstatus vorgesehen?",
          options: [
            { text: "entbehrlich", correct: true },
            { text: "teilweise", correct: true },
            { text: "geplant", correct: false },
            { text: "nein", correct: true },
          ],
          explanation: "Vorgesehen sind entbehrlich, ja, teilweise und nein.",
          source: { doc: "200-2", section: "Kap. 8.4.2", page: 150 },
        },
        {
          id: "q-t07-l02-2",
          topic: 7,
          level: "basis",
          stem: "Wann ist der Status „ja“ zu vergeben?",
          options: [
            {
              text: "Wenn geeignete Maßnahmen vollständig, wirksam und angemessen umgesetzt wurden",
              correct: true,
            },
            { text: "Wenn eine Maßnahme geplant und budgetiert ist", correct: false },
            { text: "Wenn die Anforderung nicht relevant ist", correct: false },
            { text: "Wenn die Hälfte der Teilanforderungen umgesetzt ist", correct: false },
          ],
          explanation:
            "Geplante Maßnahmen zählen nicht; Teilumsetzung ist „teilweise“, nicht relevant ist „entbehrlich“.",
          source: { doc: "200-2", section: "Kap. 8.4.2", page: 150 },
        },
        {
          id: "q-t07-l02-3",
          topic: 7,
          level: "experte",
          stem: "Eine Basis-Anforderung soll auf „entbehrlich“ gesetzt werden, weil die Leitung das Restrisiko übernehmen möchte. Wie ist das zu bewerten?",
          options: [
            {
              text: "Unzulässig – bei Basis-Anforderungen kann das Risiko nicht übernommen werden.",
              correct: true,
            },
            { text: "Zulässig, wenn die Leitung schriftlich zustimmt.", correct: false },
            {
              text: "„Entbehrlich“ ist nur möglich, wenn die Anforderung nicht relevant ist oder durch Alternativmaßnahmen behandelt wurde.",
              correct: true,
            },
            {
              text: "Eine pauschale Akzeptanz des Risikos einer Gefährdung über die Kreuzreferenztabelle rechtfertigt „entbehrlich“.",
              correct: false,
            },
          ],
          explanation:
            "Basis-Anforderungen erlauben keine Risikoübernahme; „entbehrlich“ setzt Nicht-Relevanz oder Alternativmaßnahmen mit Begründung voraus.",
          source: { doc: "200-2", section: "Kap. 8.4.2", page: 150 },
        },
        {
          id: "q-t07-l02-4",
          topic: 7,
          level: "basis",
          stem: "Was ist bei der Dokumentation des IT-Grundschutz-Checks im Feld „Verantwortliche“ zu tun, wenn die Zuständigkeit noch unklar ist?",
          options: [
            {
              text: "Das Feld frei lassen und in der Realisierungsplanung eine verantwortliche Person bestimmen",
              correct: true,
            },
            { text: "Pauschal den ISB eintragen", correct: false },
            { text: "Die Anforderung auf „entbehrlich“ setzen", correct: false },
            { text: "Die Institutionsleitung eintragen", correct: false },
          ],
          explanation:
            "Nur eindeutig erkennbare Verantwortliche werden eingetragen; ansonsten folgt die Festlegung in der Realisierungsplanung.",
          source: { doc: "200-2", section: "Kap. 8.4.3", page: 152 },
        },
      ],
    },
  ],
};
