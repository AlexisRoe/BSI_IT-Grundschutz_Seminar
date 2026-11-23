import type { TopicContent } from "../course.types";

/** Themenfeld 8: Risikoanalyse. */
export const topic: TopicContent = {
  topic: 8,
  lessons: [
    {
      id: "t08-l01",
      title: "Grundlagen, Vorarbeiten und elementare Gefährdungen",
      depth: "II",
      minutes: 35,
      goals: [
        "Den Begriff Risikoanalyse im IT-Grundschutz von ISO 31000/27005 abgrenzen",
        "Die vier Schritte der Risikoanalyse nach BSI-Standard 200-3 benennen",
        "Vorarbeiten und Richtlinie zum Umgang mit Risiken beschreiben",
        "Elementare Gefährdungen nach Relevanz für ein Zielobjekt einordnen",
      ],
      blocks: [
        { type: "heading", text: "Wann und warum eine Risikoanalyse?" },
        {
          type: "paragraph",
          text: "Die IT-Grundschutz-Anforderungen beruhen auf einer bereits für typische Einsatzszenarien durchgeführten Risikoanalyse. Eine **eigene Risikoanalyse** ist erforderlich bei **hohem oder sehr hohem Schutzbedarf**, wenn Zielobjekte **nicht hinreichend modellierbar** sind oder in **nicht vorgesehenen Einsatzszenarien** betrieben werden.",
        },
        {
          type: "callout",
          variant: "merke",
          title: "Begriff „Risikoanalyse“",
          text: "In ISO 31000 und ISO 27005 ist Risikoanalyse nur ein Schritt der Risikobeurteilung (Identifikation, Analyse, Bewertung). Im deutschen Sprachgebrauch und im IT-Grundschutz bezeichnet „Risikoanalyse“ den kompletten Prozess aus Risikobeurteilung UND Risikobehandlung.",
        },
        { type: "heading", text: "Die Schritte nach BSI-Standard 200-3" },
        {
          type: "list",
          ordered: true,
          items: [
            "**Gefährdungsübersicht erstellen**: relevante elementare Gefährdungen + zusätzliche Gefährdungen",
            "**Risikoeinstufung**: Risikoeinschätzung (Eintrittshäufigkeit und Schadenshöhe) und Risikobewertung (Risikokategorie)",
            "**Risikobehandlung**: Vermeidung, Reduktion, Transfer, Akzeptanz",
            "**Konsolidierung des Sicherheitskonzepts**",
          ],
        },
        {
          type: "paragraph",
          text: "Danach folgt die **Rückführung in den Sicherheitsprozess** (IT-Grundschutz-Check für neue Anforderungen, Umsetzung, Überprüfung).",
        },
        { type: "heading", text: "Vorarbeiten" },
        {
          type: "list",
          items: [
            "Initiierter Sicherheitsprozess, definierter Informationsverbund",
            "Strukturanalyse, Schutzbedarfsfeststellung und Modellierung",
            "Vorher sollte ein **IT-Grundschutz-Check** durchgeführt worden sein",
            "Ergebnis: Liste der **betrachteten Zielobjekte**, sinnvoll gruppiert",
          ],
        },
        {
          type: "table",
          headers: ["Gewählte Vorgehensweise", "Priorisierung der Risikoanalysen"],
          rows: [
            [
              "Standard-Absicherung",
              "Zuerst übergeordnete Zielobjekte (Geschäftsprozesse, Teilverbünde, gesamter Informationsverbund)",
            ],
            ["Kern-Absicherung", "Zuerst Zielobjekte mit dem höchsten Schutzbedarf"],
            [
              "Basis-Absicherung",
              "Zunächst **keine** Risikoanalysen – erst die Basis-Anforderungen umsetzen",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Die Leitungsebene verabschiedet eine **Richtlinie zum Umgang mit Risiken**: Wann ist eine Risikoanalyse Pflicht? Welche Methodik? Welche **Risikoakzeptanzkriterien**? Wer ist verantwortlich, sind **Risikoeigentümer** zugeordnet? Wie ist die Integration in den Sicherheitsprozess, welche Berichtspflichten bestehen, in welchem Zeitrahmen wird aktualisiert? Auch der **Risikoappetit** – die Neigung einer Institution, wie sie Risiken einschätzt, bewertet und mit ihnen umgeht – kann darin beschrieben werden.",
        },
        { type: "heading", text: "Elementare Gefährdungen G 0.1 bis G 0.47" },
        {
          type: "paragraph",
          text: "Die 47 elementaren Gefährdungen benennen **tatsächliche Gefahren** – Gefährdungen, die nur fehlende Maßnahmen thematisieren, wurden bewusst nicht aufgenommen. Zu jeder ist angegeben, welche Grundwerte **direkt** beeinträchtigt werden (C = Vertraulichkeit, I = Integrität, A = Verfügbarkeit).",
        },
        {
          type: "table",
          headers: ["Beispiel", "Grundwerte"],
          rows: [
            ["G 0.1 Feuer", "A"],
            ["G 0.14 Ausspähen von Informationen/Spionage", "C"],
            ["G 0.15 Abhören", "C"],
            ["G 0.16 Diebstahl von Geräten, Datenträgern und Dokumenten", "C, A"],
            ["G 0.22 Manipulation von Informationen", "I"],
            ["G 0.25 Ausfall von Geräten oder Systemen", "A"],
            ["G 0.28 Software-Schwachstellen oder -Fehler", "C, I, A"],
            ["G 0.33 Personalausfall", "A"],
            ["G 0.39 Schadprogramme", "C, I, A"],
            ["G 0.40 Verhinderung von Diensten (Denial of Service)", "A"],
            ["G 0.42 Social Engineering", "C, I"],
            ["G 0.45 Datenverlust", "A"],
            ["G 0.47 Schädliche Seiteneffekte IT-gestützter Angriffe", "C, I, A"],
          ],
          caption: "Auszug aus BSI-Standard 200-3, Tabelle 1",
        },
        {
          type: "example",
          title: "Feuer betrifft nur die Verfügbarkeit?",
          text: "Ein Brand könnte indirekt auch Integrität (beschädigter Datenträger) oder Vertraulichkeit (Unterlagen bei Rettungsmaßnahmen zugänglich) berühren. Aufgeführt wird aber nur der unmittelbar beeinträchtigte Grundwert: Verfügbarkeit.",
        },
        { type: "heading", text: "Relevanz einer Gefährdung für ein Zielobjekt" },
        {
          type: "table",
          headers: ["Einstufung", "Bedeutung"],
          rows: [
            [
              "direkt relevant",
              "Kann auf das Zielobjekt einwirken – muss in der Risikoanalyse behandelt werden.",
            ],
            [
              "indirekt relevant",
              "Kann einwirken, geht in ihrer Wirkung aber nicht über andere (allgemeinere) Gefährdungen hinaus – keine gesonderte Behandlung.",
            ],
            ["nicht relevant", "Kann nicht einwirken – keine Behandlung für dieses Zielobjekt."],
          ],
        },
        {
          type: "paragraph",
          text: "Für modellierbare Zielobjekte sind die relevanten elementaren Gefährdungen der Bausteine der Ausgangspunkt; weitere werden ergänzt. Für nicht modellierbare Zielobjekte wird die vollständige Liste der 47 Gefährdungen geprüft. Beispiel Server-Betriebssystem: G 0.25 Ausfall und G 0.26 Fehlfunktion sind direkt relevant; G 0.1 Feuer bringt gegenüber G 0.25 keine neuen Aspekte.",
        },
      ],
      sources: [
        { doc: "200-3", section: "Kap. 1.3, 2 und 3", page: 6 },
        { doc: "200-3", section: "Kap. 4.1 Ermittlung von elementaren Gefährdungen", page: 16 },
        { doc: "kompendium", section: "Glossar: Risikoanalyse, Risikoappetit" },
      ],
      quiz: [
        {
          id: "q-t08-l01-1",
          topic: 8,
          level: "basis",
          stem: "Welche Schritte umfasst die Risikoanalyse nach BSI-Standard 200-3?",
          options: [
            { text: "Erstellung einer Gefährdungsübersicht", correct: true },
            { text: "Risikoeinstufung", correct: true },
            { text: "Risikobehandlung", correct: true },
            { text: "Konsolidierung des Sicherheitskonzepts", correct: true },
          ],
          explanation: "Alle vier Schritte gehören zur Risikoanalyse nach 200-3.",
          source: { doc: "200-3", section: "Kap. 1.3", page: 7 },
        },
        {
          id: "q-t08-l01-2",
          topic: 8,
          level: "basis",
          stem: "Welche Grundwerte beeinträchtigt die elementare Gefährdung G 0.15 Abhören laut BSI-Standard 200-3 direkt?",
          options: [
            { text: "Vertraulichkeit", correct: true },
            { text: "Integrität", correct: false },
            { text: "Verfügbarkeit", correct: false },
            { text: "Alle drei Grundwerte", correct: false },
          ],
          explanation: "G 0.15 Abhören ist mit „C“ gekennzeichnet.",
          source: { doc: "200-3", section: "Kap. 3, Tabelle 1", page: 14 },
        },
        {
          id: "q-t08-l01-3",
          topic: 8,
          level: "experte",
          stem: "Eine Institution hat sich für die Basis-Absicherung entschieden. Welche Aussage zur Risikoanalyse ist nach BSI-Standard 200-3 richtig?",
          options: [
            {
              text: "Zunächst werden keine Risikoanalysen durchgeführt, sondern die Basis-Anforderungen umgesetzt.",
              correct: true,
            },
            {
              text: "Es sind zuerst die Zielobjekte mit dem höchsten Schutzbedarf zu analysieren.",
              correct: false,
            },
            {
              text: "Es sind zuerst die übergeordneten Zielobjekte zu analysieren.",
              correct: false,
            },
            {
              text: "Die Risikoanalyse ersetzt die Umsetzung der Basis-Anforderungen.",
              correct: false,
            },
          ],
          explanation:
            "Bei Basis-Absicherung keine Risikoanalysen zu Beginn; Kern-Absicherung: höchster Schutzbedarf zuerst; Standard-Absicherung: übergeordnete Zielobjekte zuerst.",
          source: { doc: "200-3", section: "Kap. 2", page: 10 },
        },
        {
          id: "q-t08-l01-4",
          topic: 8,
          level: "basis",
          stem: "Was bedeutet die Einstufung „indirekt relevant“ für eine elementare Gefährdung?",
          options: [
            {
              text: "Sie kann einwirken, geht aber in ihrer Wirkung nicht über andere, allgemeinere Gefährdungen hinaus und wird nicht gesondert behandelt.",
              correct: true,
            },
            { text: "Sie muss mit besonders hoher Priorität behandelt werden.", correct: false },
            {
              text: "Sie ist für den gesamten Informationsverbund ausgeschlossen.",
              correct: false,
            },
            { text: "Sie wird automatisch akzeptiert.", correct: false },
          ],
          explanation:
            "Indirekt relevante Gefährdungen werden für das Zielobjekt nicht gesondert betrachtet.",
          source: { doc: "200-3", section: "Kap. 4.1", page: 16 },
        },
      ],
    },
    {
      id: "t08-l02",
      title: "Zusätzliche Gefährdungen und Risikoeinstufung",
      depth: "II",
      minutes: 35,
      goals: [
        "Zusätzliche Gefährdungen im Brainstorming ermitteln",
        "Eintrittshäufigkeit und Schadenshöhe mit den Kategorien des BSI-Standards 200-3 einschätzen",
        "Risikokategorien interpretieren und an einem Beispiel anwenden",
      ],
      blocks: [
        { type: "heading", text: "Zusätzliche Gefährdungen" },
        {
          type: "paragraph",
          text: "Über die elementaren Gefährdungen hinaus werden Gefährdungen ermittelt, die sich aus dem **spezifischen Einsatzszenario** ergeben. Bewährt hat sich ein **moderiertes Brainstorming** mit ISB, Fachverantwortlichen, Administration, Benutzenden und ggf. externen Sachverständigen; Arbeitsauftrag klar formulieren, Zeit begrenzen. Fehlende Gefährdungen führen zu Lücken im Sicherheitskonzept – im Zweifel externe Beratung nutzen.",
        },
        {
          type: "example",
          title: "Zusätzliche Gefährdungen (RECPLAST)",
          text: [
            "G z.1 Manipulation durch Familienangehörige und Besucher – konkretisiert G 0.21 und G 0.22.",
            "G z.2 Beschädigung von Informationstechnik im Fertigungsbereich – konkretisiert G 0.24 Zerstörung von Geräten oder Datenträgern.",
          ],
        },
        { type: "heading", text: "Risikoeinschätzung" },
        {
          type: "paragraph",
          text: "Das Risiko hängt von der **Eintrittshäufigkeit** und der **Schadenshöhe** ab. Die Schadenshöhe kann nur die Institution selbst einschätzen; die Eintrittshäufigkeit schätzt geeignetes Fachpersonal, unterstützt durch Statistiken und Erfahrung. Weil umfangreiche Statistiken meist fehlen, ist eine **qualitative** Betrachtung praktikabler – mit **nicht mehr als fünf Kategorien pro Dimension**.",
        },
        {
          type: "table",
          headers: ["Eintrittshäufigkeit", "Beschreibung"],
          rows: [
            ["selten", "höchstens alle fünf Jahre"],
            ["mittel", "einmal alle fünf Jahre bis einmal im Jahr"],
            ["häufig", "einmal im Jahr bis einmal pro Monat"],
            ["sehr häufig", "mehrmals im Monat"],
          ],
          caption: "BSI-Standard 200-3, Tabelle 8",
        },
        {
          type: "table",
          headers: ["Schadenshöhe", "Beschreibung"],
          rows: [
            ["vernachlässigbar", "gering, kann vernachlässigt werden"],
            ["begrenzt", "begrenzt und überschaubar"],
            ["beträchtlich", "kann beträchtlich sein"],
            ["existenzbedrohend", "existenziell bedrohliches, katastrophales Ausmaß möglich"],
          ],
          caption: "BSI-Standard 200-3, Tabelle 9",
        },
        { type: "heading", text: "Risikobewertung" },
        {
          type: "paragraph",
          text: "Über eine **Risikomatrix** wird die Kombination aus Häufigkeit und Schadenshöhe einer **Risikokategorie** zugeordnet. Die BSI-Matrix ist nur ein Beispiel und sollte an die eigenen Bedürfnisse angepasst werden. Berücksichtigt werden die **bereits umgesetzten oder geplanten** Maßnahmen.",
        },
        {
          type: "table",
          headers: ["Risikokategorie", "Bedeutung"],
          rows: [
            [
              "gering",
              "Vorhandene/geplante Maßnahmen bieten ausreichenden Schutz; geringe Risiken werden üblicherweise akzeptiert, aber beobachtet.",
            ],
            ["mittel", "Die Maßnahmen reichen **möglicherweise** nicht aus."],
            ["hoch", "Die Maßnahmen bieten **keinen** ausreichenden Schutz."],
            [
              "sehr hoch",
              "Die Maßnahmen bieten keinen ausreichenden Schutz; sehr hohe Risiken werden in der Praxis selten akzeptiert.",
            ],
          ],
          caption: "BSI-Standard 200-3, Tabelle 10",
        },
        {
          type: "example",
          title: "Einstufungen aus den Beispielen des BSI-Standards 200-3",
          text: [
            "G 0.15 Abhören bei der Live-Migration: **selten** × **beträchtlich** → Risiko **mittel**.",
            "G 0.25 Ausfall des Verwaltungsservers: **mittel** × **beträchtlich** → **mittel**.",
            "G 0.28 Software-Schwachstelle (bekannte SQL-Injection, keine Updates mehr): **häufig** × **beträchtlich** → **hoch**.",
            "G 0.32 Missbrauch von Berechtigungen an einer Datenbank: **selten** × **existenzbedrohend** → **mittel**.",
          ],
        },
        {
          type: "callout",
          variant: "hinweis",
          title: "Ideen notieren",
          text: "Bei der Risikoeinstufung kommen oft erste Ideen für Gegenmaßnahmen auf. Diese sollten notiert werden – sie sind für die Risikobehandlung nützlich.",
        },
      ],
      sources: [
        { doc: "200-3", section: "Kap. 4.2 Ermittlung zusätzlicher Gefährdungen", page: 22 },
        { doc: "200-3", section: "Kap. 5 Risikoeinstufung", page: 26 },
      ],
      quiz: [
        {
          id: "q-t08-l02-1",
          topic: 8,
          level: "basis",
          stem: "Welche Kategorien für die Eintrittshäufigkeit nennt der BSI-Standard 200-3?",
          options: [
            { text: "selten", correct: true },
            { text: "mittel", correct: true },
            { text: "häufig", correct: true },
            { text: "sehr häufig", correct: true },
          ],
          explanation: "Die vier Kategorien sind selten, mittel, häufig und sehr häufig.",
          source: { doc: "200-3", section: "Kap. 5.1, Tabelle 8", page: 27 },
        },
        {
          id: "q-t08-l02-2",
          topic: 8,
          level: "basis",
          stem: "Wie ist die Risikokategorie „mittel“ nach BSI-Standard 200-3 definiert?",
          options: [
            {
              text: "Die umgesetzten oder vorgesehenen Sicherheitsmaßnahmen reichen möglicherweise nicht aus.",
              correct: true,
            },
            { text: "Die Maßnahmen bieten in jedem Fall ausreichenden Schutz.", correct: false },
            { text: "Das Risiko wird in der Praxis grundsätzlich nie akzeptiert.", correct: false },
            { text: "Es sind keine Maßnahmen vorhanden.", correct: false },
          ],
          explanation: "„Mittel“ heißt: Die Maßnahmen reichen möglicherweise nicht aus.",
          source: { doc: "200-3", section: "Kap. 5.2, Tabelle 10", page: 28 },
        },
        {
          id: "q-t08-l02-3",
          topic: 8,
          level: "experte",
          stem: "Für eine Webanwendung ist eine SQL-Injection-Schwachstelle öffentlich bekannt, Updates gibt es nicht mehr. Ein erfolgreicher Angriff hätte beträchtliche Auswirkungen. Welche Einstufung entspricht dem Beispiel im BSI-Standard 200-3?",
          options: [
            { text: "Eintrittshäufigkeit „häufig“", correct: true },
            { text: "Schadenshöhe „beträchtlich“", correct: true },
            { text: "Risikokategorie „hoch“", correct: true },
            {
              text: "Risikokategorie „gering“, da die Datenbankrechte restriktiv vergeben sind",
              correct: false,
            },
          ],
          explanation:
            "Die restriktiven Rechte begrenzen die Auswirkungen auf die Daten der Anwendung, das Risiko bleibt aber hoch.",
          source: { doc: "200-3", section: "Kap. 5.2, Beispiel Datenbank A1", page: 30 },
        },
      ],
    },
    {
      id: "t08-l03",
      title: "Risikobehandlung, Konsolidierung und Rückführung",
      depth: "II",
      minutes: 35,
      goals: [
        "Die vier Risikobehandlungsoptionen unterscheiden und begründet auswählen",
        "Restrisiko und Risikoakzeptanz durch die Leitung erklären",
        "Ein Sicherheitskonzept nach der Risikoanalyse konsolidieren",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Für jede Gefährdung mit Risikokategorie **mittel, hoch oder sehr hoch** wird entschieden, wie das Risiko behandelt wird. Die **Leitungsebene muss beteiligt** werden, da sich erhebliche Schäden oder Kosten ergeben können.",
        },
        {
          type: "table",
          headers: ["Option", "Frage", "Typische Gründe"],
          rows: [
            [
              "A: Risikovermeidung",
              "Lässt sich das Risiko durch Umstrukturierung des Geschäftsprozesses oder Informationsverbunds vermeiden?",
              "Gegenmaßnahmen sehr teuer, Umstrukturierung ohnehin sinnvoll, einfacher als zusätzliche Komplexität, Maßnahmen würden Funktion oder Komfort stark einschränken",
            ],
            [
              "B: Risikoreduktion (-modifikation)",
              "Lässt sich das Risiko durch weitere Sicherheitsmaßnahmen senken?",
              "Quellen: Herstellerdokumentation, Standards und Best Practices, Veröffentlichungen, eigene Erfahrungen; auch H-Anforderungen des Kompendiums als Anhaltspunkt",
            ],
            [
              "C: Risikotransfer (-teilung)",
              "Lässt sich das Risiko an andere übertragen, z. B. durch Versicherung oder Outsourcing?",
              "Rein finanzielle Schäden, Auslagerung ohnehin geplant, Partner kann besser mit dem Risiko umgehen; sachgerechte Vertragsgestaltung entscheidend",
            ],
            [
              "D: Risikoakzeptanz",
              "Kann das Risiko auf nachvollziehbarer Faktenlage akzeptiert werden?",
              "Schaden nur unter speziellen Voraussetzungen, keine wirksamen Gegenmaßnahmen bekannt, Kosten übersteigen den zu schützenden Wert",
            ],
          ],
        },
        {
          type: "callout",
          variant: "merke",
          title: "Restrisiko",
          text: "Einstufung und Behandlung werden so lange wiederholt, bis die Risikoakzeptanzkriterien erreicht sind. Das verbleibende Restrisiko wird der Leitungsebene zur Zustimmung vorgelegt und nachvollziehbar dokumentiert. Idealerweise werden nur geringe Risiken akzeptiert.",
        },
        {
          type: "paragraph",
          text: "Anforderungen bei erhöhtem Schutzbedarf sind **empfehlenswert, werden aber auch bei hohen Sicherheitsanforderungen nicht automatisch verbindlich** und müssen nicht zwingend in die Risikoanalyse einbezogen werden. Werden durch Vermeidung oder Transfer Prozesse oder der Informationsverbund geändert, sind die Arbeitsschritte ab der **Strukturanalyse** entsprechend zu aktualisieren.",
        },
        { type: "heading", text: "Risiken unter Beobachtung" },
        {
          type: "paragraph",
          text: "Risiken, die heute akzeptabel sind, aber voraussichtlich steigen, werden **beobachtet**; ergänzende Maßnahmen werden vorbereitet und bei Bedarf übernommen. Generell sollten **alle** Risiken beobachtet werden – üblich sind **Risikoregister**. Für **benutzerdefinierte Bausteine** müssen Gefährdungen regelmäßig überprüft und neu bewertet werden.",
        },
        {
          type: "example",
          title: "Behandlungsentscheidungen (RECPLAST)",
          text: [
            "G 0.15 Abhören (mittel): **Akzeptanz** – nur vertrauenswürdige Administratoren haben Zugriff.",
            "G 0.25 Ausfall Verwaltungsserver (mittel): **Reduktion** durch Redundanz → gering.",
            "G 0.28 SQL-Injection (hoch): **Reduktion** durch eine Datenbank-Firewall bis zur Ablösung der Anwendung → gering.",
          ],
        },
        { type: "heading", text: "Konsolidierung des Sicherheitskonzepts" },
        {
          type: "table",
          headers: ["Kriterium", "Prüffragen"],
          rows: [
            [
              "Eignung",
              "Werden alle Aspekte der Gefährdungen abgedeckt? Einklang mit den Sicherheitszielen?",
            ],
            [
              "Zusammenwirken",
              "Unterstützen sich die Maßnahmen, ergeben sie ein wirksames Ganzes, gibt es Widersprüche?",
            ],
            [
              "Benutzerfreundlichkeit",
              "Fehlertolerant, transparent, Ausfall erkennbar, nicht zu leicht zu umgehen?",
            ],
            ["Angemessenheit", "Kosten und Aufwand im sachgerechten Verhältnis zum Schutzbedarf?"],
          ],
        },
        {
          type: "paragraph",
          text: "Ungeeignete, widersprüchliche, nicht akzeptierte, zu teure oder zu schwache Maßnahmen werden überarbeitet oder ersetzt. Neue Anforderungen können bestehende Bausteine ergänzen oder in einem **benutzerdefinierten Baustein** zusammengefasst werden.",
        },
        {
          type: "paragraph",
          text: "**Rückführung in den Sicherheitsprozess**: Umsetzungsstatus neuer oder geänderter Anforderungen im IT-Grundschutz-Check prüfen, Umsetzung planen (Kosten, Reihenfolge), regelmäßig überprüfen, Leitung informieren – ggf. bis zur ISO 27001-Zertifizierung auf Basis von IT-Grundschutz.",
        },
      ],
      sources: [{ doc: "200-3", section: "Kap. 6, 7 und 8", page: 32 }],
      quiz: [
        {
          id: "q-t08-l03-1",
          topic: 8,
          level: "basis",
          stem: "Welche Risikobehandlungsoptionen nennt der BSI-Standard 200-3?",
          options: [
            { text: "Risikovermeidung", correct: true },
            { text: "Risikoreduktion", correct: true },
            { text: "Risikotransfer", correct: true },
            { text: "Risikoverschleierung", correct: false },
          ],
          explanation: "Die vier Optionen sind Vermeidung, Reduktion, Transfer und Akzeptanz.",
          source: { doc: "200-3", section: "Kap. 6.1", page: 32 },
        },
        {
          id: "q-t08-l03-2",
          topic: 8,
          level: "basis",
          stem: "Ein Unternehmen schließt eine Versicherung gegen die finanziellen Folgen eines Ausfalls ab. Welche Option liegt vor?",
          options: [
            { text: "Risikotransfer", correct: true },
            { text: "Risikovermeidung", correct: false },
            { text: "Risikoakzeptanz", correct: false },
            { text: "Risikoreduktion", correct: false },
          ],
          explanation:
            "Versicherungen und Outsourcing sind Beispiele für den Risikotransfer (Risikoteilung).",
          source: { doc: "200-3", section: "Kap. 6.1", page: 34 },
        },
        {
          id: "q-t08-l03-3",
          topic: 8,
          level: "experte",
          stem: "Nach der Risikobehandlung verbleibt ein mittleres Restrisiko. Welche Aussagen sind nach BSI-Standard 200-3 richtig?",
          options: [
            {
              text: "Das Restrisiko ist der Leitungsebene zur Zustimmung vorzulegen.",
              correct: true,
            },
            { text: "Die Akzeptanz ist nachvollziehbar zu dokumentieren.", correct: true },
            { text: "Das Risiko sollte weiter beobachtet werden.", correct: true },
            {
              text: "Mittlere Risiken dürfen grundsätzlich nie akzeptiert werden.",
              correct: false,
            },
          ],
          explanation:
            "Höhere Risiken können in begründeten Fällen akzeptiert werden; die Leitung stimmt zu, die Entscheidung wird dokumentiert, das Risiko beobachtet.",
          source: { doc: "200-3", section: "Kap. 6.1 und 6.2", page: 34 },
        },
      ],
    },
  ],
};
