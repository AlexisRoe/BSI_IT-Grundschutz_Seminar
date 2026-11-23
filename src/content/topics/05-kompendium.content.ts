import type { TopicContent } from "../course.types";

/** Themenfeld 5: IT-Grundschutz-Kompendium (Überblick). */
export const topic: TopicContent = {
  topic: 5,
  lessons: [
    {
      id: "t05-l01",
      title: "Aufbau und Anwendung des Kompendiums",
      depth: "I + II",
      minutes: 30,
      goals: [
        "Die Teile des IT-Grundschutz-Kompendiums benennen",
        "Prozess- und System-Bausteine nach Geltungsbereich unterscheiden",
        "Die Bearbeitungsreihenfolge R1, R2, R3 richtig interpretieren",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Das **IT-Grundschutz-Kompendium** ist der Nachfolger der IT-Grundschutz-Kataloge und fasst die **Bausteine** des IT-Grundschutzes zusammen. Die Edition 2023 enthält über 100 Bausteine. Es ist so angelegt, dass einzelne Bausteine zügig aktualisiert und neue Themen aufgenommen werden können.",
        },
        {
          type: "table",
          headers: ["Teil des Kompendiums", "Inhalt"],
          rows: [
            [
              "Einstieg",
              "Idee, Ziel und Struktur des Kompendiums; die Methodik selbst steht im BSI-Standard 200-2",
            ],
            [
              "Schichtenmodell und Modellierung",
              "Wann welcher Baustein einzusetzen ist, auf welche Zielobjekte er anzuwenden ist und ob er vor- oder nachrangig umgesetzt werden sollte",
            ],
            ["Rollen", "Kurzbeschreibung der in den Anforderungen genannten Rollen"],
            ["Glossar", "Wichtigste Begriffe rund um Informationssicherheit und IT-Grundschutz"],
            ["Elementare Gefährdungen", "**47** generalisierte Gefährdungen (G 0.1 bis G 0.47)"],
            ["Bausteine", "Gegliedert in zehn Schichten"],
          ],
        },
        {
          type: "paragraph",
          text: "Die elementaren Gefährdungen sind **für die Risikoanalyse optimiert**, **produktneutral (immer)**, **technikneutral (möglichst)**, kompatibel mit internationalen Katalogen und nahtlos in den IT-Grundschutz integriert.",
        },
        { type: "heading", text: "Prozess- und System-Bausteine" },
        {
          type: "list",
          items: [
            "**Prozess-Bausteine** (ISMS, ORP, CON, OPS, DER) gelten in der Regel für **sämtliche oder große Teile** des Informationsverbunds. Die Schicht ISMS enthält mit dem Baustein **ISMS.1 Sicherheitsmanagement** die Grundlage für alle weiteren Aktivitäten.",
            "**System-Bausteine** (APP, SYS, IND, NET, INF) werden in der Regel auf **einzelne Zielobjekte oder Gruppen** angewendet.",
            "**Allgemeine Bausteine** (z. B. SYS.2.1 Allgemeiner Client) beschreiben übergreifende Aspekte; spezifische Bausteine sind **stets zusammen mit dem allgemeinen** anzuwenden. Gibt es keinen spezifischen Baustein, ist der allgemeine eine gute Grundlage für Modellierung und Risikoanalyse.",
          ],
        },
        { type: "heading", text: "Bearbeitungsreihenfolge R1, R2, R3" },
        {
          type: "table",
          headers: ["Kennzeichen", "Bedeutung", "Beispiele"],
          rows: [
            [
              "R1",
              "Vorrangig umsetzen – Grundlage für einen effektiven Sicherheitsprozess",
              "ISMS.1 Sicherheitsmanagement, ORP.1 Organisation, DER.2.1 Behandlung von Sicherheitsvorfällen",
            ],
            [
              "R2",
              "Als Nächstes umsetzen – in wesentlichen Teilen des Verbunds für nachhaltige Sicherheit erforderlich",
              "z. B. INF.7 Büroarbeitsplatz",
            ],
            [
              "R3",
              "Ebenfalls erforderlich; empfohlen, erst nach den anderen zu betrachten",
              "z. B. DER.4 Notfallmanagement, INF.11 Allgemeines Fahrzeug",
            ],
          ],
        },
        {
          type: "callout",
          variant: "merke",
          title: "Reihenfolge ist keine Gewichtung",
          text: "R1 bis R3 geben eine sinnvolle zeitliche Reihenfolge vor, aber keine Gewichtung. Grundsätzlich müssen alle für den Informationsverbund relevanten Bausteine umgesetzt werden.",
        },
        {
          type: "paragraph",
          text: "Das aus den Bausteinen gebildete **IT-Grundschutz-Modell** dient bei einem bestehenden Informationsverbund als **Prüfplan** (Soll-Ist-Vergleich), bei einem geplanten Verbund als **Entwicklungskonzept**. Zielobjekte, die nicht hinreichend mit Bausteinen abgebildet werden können, erfordern eine **Risikoanalyse**.",
        },
      ],
      sources: [
        {
          doc: "kompendium",
          section: "IT-Grundschutz – Basis für Informationssicherheit: Aufbau des Kompendiums",
        },
        { doc: "kompendium", section: "Schichtenmodell und Modellierung, Kap. 2.1 und 2.2" },
      ],
      quiz: [
        {
          id: "q-t05-l01-1",
          topic: 5,
          level: "basis",
          stem: "Wie viele elementare Gefährdungen enthält das IT-Grundschutz-Kompendium?",
          options: [
            { text: "21", correct: false },
            { text: "47", correct: true },
            { text: "100", correct: false },
            { text: "Eine variable Zahl je Baustein", correct: false },
          ],
          explanation:
            "Das BSI hat 47 elementare Gefährdungen (G 0.1 bis G 0.47) herausgearbeitet.",
          source: { doc: "kompendium", section: "Elementare Gefährdungen" },
        },
        {
          id: "q-t05-l01-2",
          topic: 5,
          level: "basis",
          stem: "Was bedeutet die Kennzeichnung R1 bei einem Baustein?",
          options: [
            { text: "Der Baustein sollte vorrangig umgesetzt werden.", correct: true },
            { text: "Der Baustein ist wichtiger als alle R2- und R3-Bausteine.", correct: false },
            { text: "Der Baustein ist nur bei erhöhtem Schutzbedarf relevant.", correct: false },
            {
              text: "Der Baustein darf erst nach einer Risikoanalyse umgesetzt werden.",
              correct: false,
            },
          ],
          explanation: "R1–R3 beschreiben eine zeitliche Reihenfolge, keine Gewichtung.",
          source: { doc: "kompendium", section: "Schichtenmodell und Modellierung, Kap. 2.2" },
        },
        {
          id: "q-t05-l01-3",
          topic: 5,
          level: "experte",
          stem: "Für einen Linux-Client gibt es einen spezifischen Baustein. Was ist bei der Modellierung zu beachten?",
          options: [
            {
              text: "Der spezifische Baustein ist zusammen mit dem allgemeinen Baustein SYS.2.1 anzuwenden.",
              correct: true,
            },
            {
              text: "Der allgemeine Baustein entfällt, sobald ein spezifischer existiert.",
              correct: false,
            },
            {
              text: "Gäbe es keinen spezifischen Baustein, wäre der allgemeine eine gute Grundlage für Modellierung und Risikoanalyse.",
              correct: true,
            },
            {
              text: "System-Bausteine werden grundsätzlich nur einmal für den gesamten Verbund angewandt.",
              correct: false,
            },
          ],
          explanation:
            "Spezifische Bausteine sind stets mit den allgemeinen anzuwenden; System-Bausteine gelten für einzelne Zielobjekte oder Gruppen.",
          source: { doc: "kompendium", section: "Schichtenmodell und Modellierung, Kap. 2.1" },
        },
      ],
    },
    {
      id: "t05-l02",
      title: "Bausteine, Umsetzungshinweise und neue Bausteine",
      depth: "I + II",
      minutes: 30,
      goals: [
        "Den einheitlichen Aufbau eines Bausteins beschreiben",
        "Anforderungsnummern und Rollenangaben lesen",
        "Umsetzungshinweise und den Weg zu neuen Bausteinen einordnen",
      ],
      blocks: [
        { type: "heading", text: "Aufbau eines Bausteins" },
        {
          type: "list",
          ordered: true,
          items: [
            "**Beschreibung**: Einleitung, Zielsetzung, **Abgrenzung und Modellierung** (Kapitel 1.3: wann der Baustein einzusetzen ist und auf welche Zielobjekte)",
            "**Gefährdungslage**: spezifische Gefährdungen – ohne Anspruch auf Vollständigkeit, abgeleitet aus den elementaren Gefährdungen",
            "**Anforderungen**: Zuständigkeiten (eine grundsätzlich zuständige Rolle, ggf. weitere), dann Basis- (3.1), Standard- (3.2) und Anforderungen bei erhöhtem Schutzbedarf (3.3)",
            "**Weiterführende Informationen** (4.1 Wissenswertes)",
            "Ergänzend: **Kreuzreferenztabelle** – ordnet Anforderungen den elementaren Gefährdungen zu; in der Edition 2023 separat auf den BSI-Webseiten veröffentlicht",
          ],
        },
        {
          type: "example",
          title: "Anforderungsnummer SYS.3.4.A2",
          text: [
            "**SYS** = Schicht, **3.4** = Teilschicht und Baustein, **A2** = Anforderung Nr. 2.",
            "Eine passende Maßnahme in den Umsetzungshinweisen trägt dieselbe Nummer mit „M“: **SYS.3.4.M2**.",
            "Im Titel stehen das Kürzel **(B), (S) oder (H)** sowie weitere zuständige Rollen in **eckigen Klammern**.",
          ],
        },
        {
          type: "paragraph",
          text: "In jedem Baustein ist eine **grundsätzlich zuständige Rolle** benannt. Die oder der **ISB ist bei strategischen Entscheidungen stets einzubeziehen** und dafür zuständig, dass alle Anforderungen gemäß Sicherheitskonzept erfüllt und überprüft werden.",
        },
        {
          type: "callout",
          variant: "hinweis",
          title: "Kreuzreferenztabelle richtig nutzen",
          text: "Ein X bedeutet, dass die Anforderung gegen die Gefährdung wirkt. Sind alle zugeordneten Gefährdungen im Einzelfall nicht relevant, wird die Anforderung NICHT automatisch hinfällig – das muss im Einzelfall anhand der vollständigen Sicherheitskonzeption geprüft und dokumentiert werden.",
        },
        { type: "heading", text: "Umsetzungshinweise" },
        {
          type: "paragraph",
          text: "Umsetzungshinweise beschreiben, **wie** Anforderungen umgesetzt werden können, und erläutern geeignete Maßnahmen. Sie sind **nicht Bestandteil des Kompendiums**, sondern werden als **Hilfsmittel** veröffentlicht, richten sich an die zuständigen Personengruppen (z. B. IT-Betrieb, Haustechnik) und sollten an die Rahmenbedingungen der Institution angepasst werden. Ein Umsetzungshinweis kann Maßnahmen für mehrere Bausteine enthalten.",
        },
        { type: "heading", text: "Neue und überarbeitete Bausteine" },
        {
          type: "list",
          items: [
            "Anwendende können Bausteine **vorschlagen, kommentieren oder selbst erstellen**. Unter Federführung des IT-Grundschutz-Teams des BSI werden sie zunächst als **Community Draft** aufbereitet, bevor sie ins Kompendium aufgenommen werden.",
            "Die einmal vergebene **Nummerierung der Anforderungen bleibt bestehen** – so referenzieren Sicherheitskonzepte und Profile auch nach Überarbeitungen korrekt. Eine neue Basis-Anforderung in einem Baustein mit A1–A15 erhält z. B. die Nummer **A16** und wird hinter A5 einsortiert.",
            "Das BSI stellt **Änderungsdokumente** zur Vorjahres-Edition bereit; Änderungen stehen im Kapitel „Neues im IT-Grundschutz-Kompendium“.",
          ],
        },
        {
          type: "paragraph",
          text: "Fehlt für ein Zielobjekt ein passender Baustein, wird es mit einer **Risikoanalyse** nach BSI-Standard 200-3 betrachtet; dabei sind allgemeine Bausteine eine gute Ausgangsbasis.",
        },
      ],
      sources: [
        {
          doc: "kompendium",
          section:
            "IT-Grundschutz – Basis für Informationssicherheit: Aufbau der Bausteine, Kreuzreferenztabellen, Umsetzungshinweise",
        },
        { doc: "200-2", section: "Kap. 2.7 Anwendung des IT-Grundschutz-Kompendiums", page: 17 },
      ],
      quiz: [
        {
          id: "q-t05-l02-1",
          topic: 5,
          level: "basis",
          stem: "Welche Aussagen zu Umsetzungshinweisen treffen zu?",
          options: [
            { text: "Sie sind Bestandteil des IT-Grundschutz-Kompendiums.", correct: false },
            { text: "Sie beschreiben, wie Anforderungen umgesetzt werden können.", correct: true },
            {
              text: "Sie sollten an die Rahmenbedingungen der Institution angepasst werden.",
              correct: true,
            },
            { text: "Eine Maßnahme zu SYS.3.4.A2 trägt die Nummer SYS.3.4.M2.", correct: true },
          ],
          explanation:
            "Umsetzungshinweise werden als Hilfsmittel zu den Bausteinen veröffentlicht, nicht als Teil des Kompendiums.",
          source: { doc: "kompendium", section: "Umsetzungshinweise; Aufbau der Bausteine" },
        },
        {
          id: "q-t05-l02-2",
          topic: 5,
          level: "basis",
          stem: "In welchem Kapitel eines Bausteins steht, auf welche Zielobjekte er anzuwenden ist?",
          options: [
            { text: "1.3 Abgrenzung und Modellierung", correct: true },
            { text: "2 Gefährdungslage", correct: false },
            { text: "3.3 Anforderungen bei erhöhtem Schutzbedarf", correct: false },
            { text: "In der Kreuzreferenztabelle", correct: false },
          ],
          explanation: "Kapitel 1.3 enthält Abgrenzung und Modellierungshinweise.",
          source: { doc: "kompendium", section: "Schichtenmodell und Modellierung, Kap. 2.1" },
        },
        {
          id: "q-t05-l02-3",
          topic: 5,
          level: "experte",
          stem: "In einer Kreuzreferenztabelle sind einer Anforderung nur Gefährdungen zugeordnet, die im eigenen Informationsverbund nicht relevant sind. Was folgt daraus?",
          options: [
            { text: "Die Anforderung entfällt automatisch.", correct: false },
            {
              text: "Ob auf die Anforderung verzichtet werden kann, ist im Einzelfall anhand der vollständigen Sicherheitskonzeption zu prüfen.",
              correct: true,
            },
            { text: "Die Prüfung und Entscheidung ist zu dokumentieren.", correct: true },
            {
              text: "Die Anforderung wird zur Anforderung bei erhöhtem Schutzbedarf.",
              correct: false,
            },
          ],
          explanation:
            "Eine Anforderung wird nicht automatisch hinfällig; Einzelfallprüfung und Dokumentation sind nötig.",
          source: { doc: "kompendium", section: "Kreuzreferenztabellen" },
        },
      ],
    },
  ],
};
