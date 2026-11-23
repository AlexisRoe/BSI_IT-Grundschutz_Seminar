import type { TopicQuestions } from "../course.types";

/** Prüfungsfragenpool Themenfeld 5. */
export const pool: TopicQuestions = {
  topic: 5,
  questions: [
    {
      id: "p05-01",
      topic: 5,
      level: "basis",
      stem: "Welche Eigenschaften haben die elementaren Gefährdungen laut IT-Grundschutz-Kompendium?",
      options: [
        { text: "Sie sind für die Verwendung bei der Risikoanalyse optimiert.", correct: true },
        { text: "Sie sind immer produktneutral.", correct: true },
        {
          text: "Sie sind kompatibel mit vergleichbaren internationalen Katalogen und Standards.",
          correct: true,
        },
        {
          text: "Sie beziehen sich jeweils auf ein konkretes Produkt eines Herstellers.",
          correct: false,
        },
      ],
      explanation:
        "Elementare Gefährdungen sind produktneutral (immer) und möglichst technikneutral.",
      source: { doc: "kompendium", section: "Elementare Gefährdungen (Einstieg)" },
    },
    {
      id: "p05-02",
      topic: 5,
      level: "basis",
      stem: "Was beschreibt die Anforderungsnummer APP.1.2.A3?",
      options: [
        { text: "Die Anforderung A3 im Baustein APP.1.2 der Schicht APP", correct: true },
        { text: "Die dritte Maßnahme aus den Umsetzungshinweisen", correct: false },
        { text: "Den dritten Baustein der Teilschicht APP.1", correct: false },
        { text: "Eine Anforderung bei erhöhtem Schutzbedarf, erkennbar an der 3", correct: false },
      ],
      explanation:
        "Schicht – Teilschicht und Baustein – Anforderung. Die Art (B/S/H) ergibt sich aus dem Kürzel im Titel, nicht aus der Nummer.",
      source: { doc: "kompendium", section: "Aufbau der Bausteine" },
    },
    {
      id: "p05-03",
      topic: 5,
      level: "basis",
      stem: "Welche Aussagen zu Prozess- und System-Bausteinen treffen zu?",
      options: [
        {
          text: "Prozess-Bausteine gelten in der Regel für sämtliche oder große Teile des Informationsverbunds.",
          correct: true,
        },
        {
          text: "System-Bausteine werden in der Regel auf einzelne Zielobjekte oder Gruppen angewendet.",
          correct: true,
        },
        { text: "Die Schicht DER gehört zu den System-Bausteinen.", correct: false },
        { text: "Die Schicht INF gehört zu den System-Bausteinen.", correct: true },
      ],
      explanation:
        "DER (Detektion und Reaktion) ist eine Prozess-Schicht; INF eine System-Schicht.",
      source: { doc: "kompendium", section: "Schichtenmodell und Modellierung" },
    },
    {
      id: "p05-04",
      topic: 5,
      level: "basis",
      stem: "Wofür kann ein IT-Grundschutz-Modell eines bereits realisierten Informationsverbunds verwendet werden?",
      options: [
        { text: "Als Prüfplan für einen Soll-Ist-Vergleich", correct: true },
        { text: "Als Ersatz für die Schutzbedarfsfeststellung", correct: false },
        { text: "Als Zertifikat nach ISO 27001", correct: false },
        { text: "Als Entwicklungskonzept für einen erst geplanten Verbund", correct: false },
      ],
      explanation:
        "Für realisierte Verbünde ist das Modell ein Prüfplan; für geplante Verbünde ein Entwicklungskonzept.",
      source: { doc: "kompendium", section: "Schichtenmodell und Modellierung" },
    },
    {
      id: "p05-05",
      topic: 5,
      level: "experte",
      stem: "Ein Baustein, den eine Institution bereits umgesetzt hat, wird in einer neuen Edition um eine Basis-Anforderung ergänzt. Welche Aussagen sind zutreffend?",
      options: [
        {
          text: "Die bisherigen Anforderungsnummern bleiben bestehen, damit Referenzen in Sicherheitskonzepten gültig bleiben.",
          correct: true,
        },
        {
          text: "Die neue Anforderung erhält die nächste freie Nummer, auch wenn sie bei den Basis-Anforderungen einsortiert wird.",
          correct: true,
        },
        { text: "Das BSI stellt Änderungsdokumente zur Vorjahres-Edition bereit.", correct: true },
        { text: "Alle Anforderungen werden fortlaufend neu nummeriert.", correct: false },
      ],
      explanation:
        "Die initial vergebene Nummerierung bleibt bestehen; neue Anforderungen erhalten die nächste freie Nummer.",
      source: { doc: "kompendium", section: "Überarbeitung von IT-Grundschutz-Bausteinen" },
    },
    {
      id: "p05-06",
      topic: 5,
      level: "experte",
      stem: "Für eine spezielle Laborsteuerung existiert kein passender Baustein. Wie ist im Sinne des IT-Grundschutzes vorzugehen?",
      options: [
        { text: "Für das Zielobjekt ist eine Risikoanalyse durchzuführen.", correct: true },
        {
          text: "Ein passender allgemeiner Baustein kann eine gute Grundlage für Modellierung und Risikoanalyse sein.",
          correct: true,
        },
        { text: "Das Zielobjekt wird aus dem Informationsverbund ausgeklammert.", correct: false },
        { text: "Anwendende können dem BSI auch neue Bausteine vorschlagen.", correct: true },
      ],
      explanation:
        "Nicht hinreichend abbildbare Zielobjekte erfordern eine Risikoanalyse; allgemeine Bausteine helfen; neue Bausteine können vorgeschlagen werden.",
      source: { doc: "kompendium", section: "Schichtenmodell und Modellierung, Kap. 2.1" },
    },
  ],
};
