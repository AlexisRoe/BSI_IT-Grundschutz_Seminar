import type { TopicQuestions } from "../course.types";

/** Prüfungsfragenpool Themenfeld 4. */
export const pool: TopicQuestions = {
  topic: 4,
  questions: [
    {
      id: "p04-01",
      topic: 4,
      level: "basis",
      stem: "Für welche Institutionen ist die Basis-Absicherung laut BSI-Standard 200-2 empfehlenswert?",
      options: [
        {
          text: "Institutionen, bei denen die Umsetzung von Informationssicherheit noch am Anfang steht",
          correct: true,
        },
        {
          text: "Institutionen ohne Assets, deren Kompromittierung existenzbedrohend wäre",
          correct: true,
        },
        { text: "Institutionen, die eine ISO 27001-Zertifizierung anstreben", correct: false },
        {
          text: "Institutionen, für die kleinere Sicherheitsvorfälle tolerierbar sind",
          correct: true,
        },
      ],
      explanation: "Auf Basis der Basis-Absicherung ist keine ISO 27001-Zertifizierung möglich.",
      source: {
        doc: "200-2",
        section: "Kap. 3.3.1",
        page: 29,
        quote: "Die Umsetzung von Informationssicherheit steht noch am Anfang",
      },
    },
    {
      id: "p04-02",
      topic: 4,
      level: "basis",
      stem: "Was versteht der IT-Grundschutz unter „Kronjuwelen“?",
      options: [
        {
          text: "Assets, deren Diebstahl, Zerstörung oder Kompromittierung einen existenzbedrohenden Schaden bedeuten würde",
          correct: true,
        },
        { text: "Alle IT-Systeme mit normalem Schutzbedarf", correct: false },
        { text: "Die Basis-Anforderungen der Schicht ISMS", correct: false },
        {
          text: "Besonders teure Hardware-Komponenten unabhängig von ihrer Bedeutung",
          correct: false,
        },
      ],
      explanation:
        "Kronjuwelen sind existenziell wichtige Assets; sie stehen im Fokus der Kern-Absicherung.",
      source: {
        doc: "kompendium",
        section: "Glossar: Kronjuwelen",
        quote: "existenzbedrohenden Schaden für die Institution bedeuten würde",
      },
    },
    {
      id: "p04-03",
      topic: 4,
      level: "basis",
      stem: "Welche Aussagen zu den Anforderungsarten im IT-Grundschutz-Kompendium treffen zu?",
      options: [
        { text: "Basis-Anforderungen sind vorrangig umzusetzen.", correct: true },
        {
          text: "Basis- und Standard-Anforderungen bilden gemeinsam den Stand der Technik.",
          correct: true,
        },
        {
          text: "Anforderungen bei erhöhtem Schutzbedarf sind für jede Zertifizierung zwingend.",
          correct: false,
        },
        {
          text: "Anforderungen bei erhöhtem Schutzbedarf sind exemplarische Vorschläge.",
          correct: true,
        },
      ],
      explanation:
        "Für die Zertifizierung sind Basis- und Standard-Anforderungen zu erfüllen; H-Anforderungen sind exemplarische Vorschläge.",
      source: {
        doc: "kompendium",
        section: "Anforderungen für jedes Sicherheitsbedürfnis; Aufbau der Bausteine",
        quote:
          "Basis-Anforderungen sind vorrangig umzusetzen, da sie mit geringem Aufwand den größtmöglichen Nutzen erzielen",
      },
    },
    {
      id: "p04-04",
      topic: 4,
      level: "basis",
      stem: "Wer entscheidet laut BSI-Standard 200-2, für welche Bereiche der Institution welche Vorgehensweise gewählt wird?",
      options: [
        { text: "Die Leitungsebene (Management)", correct: true },
        { text: "Der IT-Betrieb", correct: false },
        { text: "Die Zertifizierungsstelle", correct: false },
        { text: "Das BSI", correct: false },
      ],
      explanation:
        "Der Verantwortliche für Informationssicherheit erarbeitet einen Vorschlag; das Management entscheidet.",
      source: {
        doc: "200-2",
        section: "Kap. 3.3.5",
        page: 31,
        quote:
          "Das Management muss auf dieser Grundlage entscheiden, für welche Bereiche der Institution welche Vorgehensweise",
      },
    },
    {
      id: "p04-05",
      topic: 4,
      level: "experte",
      stem: "Ein Pharmaunternehmen hat eine überschaubare Zahl von Forschungsprozessen mit deutlich erhöhtem Schutzbedarf, die es klar abgrenzen kann. Für den Rest der Institution sind kleinere Vorfälle akzeptabel. Welche Aussagen sind im Sinne von BSI-Standard 200-2 zutreffend?",
      options: [
        {
          text: "Die Kern-Absicherung der Forschungsprozesse ist ein geeigneter Einstieg.",
          correct: true,
        },
        {
          text: "Für die übrige Institution sollte zumindest die Basis-Absicherung garantiert werden.",
          correct: true,
        },
        {
          text: "Bei der Kern-Absicherung können kumulierte Risiken übersehen werden.",
          correct: true,
        },
        {
          text: "Nach erfolgreicher Kern-Absicherung ist keine weitere Vorgehensweise mehr anzustreben.",
          correct: false,
        },
      ],
      explanation:
        "Kern-Absicherung passt zu den Kriterien; der Rest sollte mindestens basis-abgesichert werden. Ziel ist mittelfristig die Standard-Absicherung.",
      source: {
        doc: "200-2",
        section: "Kap. 3.3.2 und 3.3.4",
        page: 31,
        quote:
          "Damit aber auch für die restliche Institution ein Mindestmaß an Sicherheit vorhanden ist, sollte dort die Basis-Absicherung garantiert werden",
      },
    },
    {
      id: "p04-06",
      topic: 4,
      level: "experte",
      stem: "Bei der Festlegung des Informationsverbunds werden Teile eines Geschäftsprozesses von einem externen Rechenzentrum erbracht. Was ist laut BSI-Standard 200-2 zu beachten?",
      options: [
        {
          text: "Die Schnittstellen zum externen Partner sollten klar definiert werden.",
          correct: true,
        },
        {
          text: "Der betroffene Geschäftsprozess wird aus dem Geltungsbereich gestrichen.",
          correct: false,
        },
        {
          text: "Auch organisatorische Aspekte sind bei der Abgrenzung zu berücksichtigen, damit Zuständigkeiten eindeutig sind.",
          correct: true,
        },
        {
          text: "Die betrachteten Geschäftsprozesse sollten komplett im Geltungsbereich enthalten sein.",
          correct: true,
        },
      ],
      explanation:
        "Geschäftsprozesse sollen vollständig enthalten sein; Abhängigkeiten von Externen werden über klar definierte Schnittstellen berücksichtigt.",
      source: {
        doc: "200-2",
        section: "Kap. 3.3.4",
        page: 31,
        quote:
          "sollten die Schnittstellen klar definiert werden, damit dies im Rahmen der Sicherheitskonzeption berücksichtigt werden kann",
      },
    },
  ],
};
