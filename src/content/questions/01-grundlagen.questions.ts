import type { TopicQuestions } from "../course.types";

/** Prüfungsfragenpool Themenfeld 1. */
export const pool: TopicQuestions = {
  topic: 1,
  questions: [
    {
      id: "p01-01",
      topic: 1,
      level: "basis",
      stem: "Wie definiert das Glossar des IT-Grundschutz-Kompendiums den Grundwert Vertraulichkeit?",
      options: [
        { text: "Schutz vor unbefugter Preisgabe von Informationen", correct: true },
        {
          text: "Vertrauliche Informationen dürfen ausschließlich Befugten in der zulässigen Weise zugänglich sein.",
          correct: true,
        },
        { text: "Sicherstellung der Korrektheit von Daten", correct: false },
        { text: "Nutzbarkeit von Diensten wie vorgesehen", correct: false },
      ],
      explanation:
        "Vertraulichkeit ist der Schutz vor unbefugter Preisgabe; Korrektheit beschreibt Integrität, Nutzbarkeit beschreibt Verfügbarkeit.",
      source: {
        doc: "kompendium",
        section: "Glossar: Vertraulichkeit",
        quote:
          "Vertraulichkeit ist der Schutz vor unbefugter Preisgabe von Informationen. Vertrauliche Daten und Informationen dürfen ausschließlich Befugten in der zulässigen Weise zugänglich sein.",
      },
    },
    {
      id: "p01-02",
      topic: 1,
      level: "basis",
      stem: "Wo können Informationen gespeichert sein, die durch Informationssicherheit geschützt werden?",
      options: [
        { text: "Auf Papier", correct: true },
        { text: "In IT-Systemen", correct: true },
        { text: "In den Köpfen der Menschen", correct: true },
        { text: "Ausschließlich in digitaler Form", correct: false },
      ],
      explanation:
        "Informationssicherheit schützt Informationen jeglicher Art und Herkunft – auf Papier, in IT-Systemen oder in den Köpfen der Benutzer, also nicht nur digitale Informationen.",
      source: {
        doc: "200-1",
        section: "Kap. 2",
        page: 8,
        quote:
          "Informationssicherheit hat das Ziel, Informationen jeglicher Art und Herkunft zu schützen. Dabei können Informationen auf Papier, in IT-Systemen oder auch in den Köpfen der Benutzer gespeichert sein.",
      },
    },
    {
      id: "p01-03",
      topic: 1,
      level: "basis",
      stem: "Welche der folgenden Begriffe nennt der IT-Grundschutz als weitere generische Oberbegriffe der Informationssicherheit neben den drei Grundwerten?",
      options: [
        { text: "Authentizität", correct: true },
        { text: "Verbindlichkeit", correct: true },
        { text: "Wirtschaftlichkeit", correct: false },
        { text: "Nichtabstreitbarkeit", correct: true },
      ],
      explanation:
        "Genannt werden u. a. Authentizität, Verbindlichkeit, Zuverlässigkeit, Resilienz und Nichtabstreitbarkeit. Wirtschaftlichkeit ist kein Sicherheitsziel.",
      source: {
        doc: "200-1",
        section: "Kap. 2",
        page: 8,
        quote:
          "Weitere generische Oberbegriffe der Informationssicherheit sind beispielsweise Authentizität, Verbindlichkeit, Zuverlässigkeit, Resilienz und Nichtabstreitbarkeit.",
      },
    },
    {
      id: "p01-04",
      topic: 1,
      level: "basis",
      stem: "Was versteht das IT-Grundschutz-Glossar unter einer Schwachstelle?",
      options: [
        {
          text: "Einen sicherheitsrelevanten Fehler eines IT-Systems oder einer Institution",
          correct: true,
        },
        {
          text: "Einen Fehler, dessen Ursache auch in der Organisation oder im Betrieb liegen kann",
          correct: true,
        },
        { text: "Ausschließlich einen Programmierfehler in Software", correct: false },
        { text: "Eine bereits bewertete Kombination aus Häufigkeit und Schaden", correct: false },
      ],
      explanation:
        "Ursachen von Schwachstellen können in Konzeption, Algorithmen, Implementierung, Konfiguration, Betrieb oder Organisation liegen. Die Kombination aus Häufigkeit und Schaden beschreibt das Risiko.",
      source: {
        doc: "kompendium",
        section: "Glossar: Schwachstelle",
        quote:
          "Eine Schwachstelle ist ein sicherheitsrelevanter Fehler eines IT-Systems oder einer Institution.",
      },
    },
    {
      id: "p01-05",
      topic: 1,
      level: "basis",
      stem: "Welche Aussagen zum Verhältnis von Datenschutz und Datensicherheit treffen zu?",
      options: [
        {
          text: "Datenschutz schützt Personen vor Beeinträchtigungen ihrer Persönlichkeitsrechte durch den Umgang mit ihren personenbezogenen Daten.",
          correct: true,
        },
        { text: "Datenschutz und Datensicherheit sind gleichbedeutend.", correct: false },
        {
          text: "Datensicherheit meint den Schutz von Daten hinsichtlich Vertraulichkeit, Verfügbarkeit und Integrität.",
          correct: true,
        },
        {
          text: "Ein modernerer Begriff für Datensicherheit ist Informationssicherheit.",
          correct: true,
        },
      ],
      explanation:
        "Das Glossar grenzt Datenschutz ausdrücklich von Datensicherheit ab; für Datensicherheit wird heute der Begriff Informationssicherheit verwendet.",
      source: {
        doc: "kompendium",
        section: "Glossar: Datenschutz, Datensicherheit",
        quote:
          "Mit Datensicherheit wird der Schutz von Daten hinsichtlich gegebener Anforderungen an deren Vertraulichkeit, Verfügbarkeit und Integrität bezeichnet. Ein modernerer Begriff dafür ist „Informationssicherheit“.",
      },
    },
    {
      id: "p01-06",
      topic: 1,
      level: "basis",
      stem: "Welche Aussagen zur Operational Technology (OT) treffen laut Baustein IND.1 zu?",
      options: [
        {
          text: "OT ist Hard- und Software, die physische Geräte, Prozesse und Ereignisse überwacht und steuert.",
          correct: true,
        },
        {
          text: "Da in der OT zunehmend Office-IT-Komponenten eingesetzt werden, ist sie inzwischen ähnlich gefährdet.",
          correct: true,
        },
        {
          text: "Sicherheitsupdates sind für OT-Komponenten über den gesamten Lebenszyklus durchgängig verfügbar.",
          correct: false,
        },
        {
          text: "Bei der Office-IT ist die Verfügbarkeit im Vergleich zur OT häufig von nachrangiger Bedeutung.",
          correct: true,
        },
      ],
      explanation:
        "OT unterliegt langen Lebenszyklen, auch über den Herstellersupport hinaus, sodass Sicherheitsupdates nicht durchgängig verfügbar sind.",
      source: {
        doc: "kompendium",
        section: "IND.1, Kap. 1.1",
        quote:
          "Da in der OT zunehmend auch IT-Komponenten aus der Office-IT eingesetzt werden, ist diese inzwischen ähnlich gefährdet.",
      },
    },
    {
      id: "p01-07",
      topic: 1,
      level: "basis",
      stem: "Was ist mit „Safety“ im Zusammenhang mit industriellen Steuerungssystemen gemeint?",
      options: [
        { text: "Funktionale Sicherheit", correct: true },
        { text: "Ausschließlich die Vertraulichkeit von Produktionsdaten", correct: false },
        { text: "Der Schutz vor unbefugter Preisgabe von Informationen", correct: false },
        { text: "Die Zertifizierung nach ISO 27001", correct: false },
      ],
      explanation:
        "IND.1 bezeichnet Safety-Aspekte als Aspekte der funktionalen Sicherheit. Schutz vor Preisgabe ist Vertraulichkeit (Security).",
      source: {
        doc: "kompendium",
        section: "IND.1, Kap. 2.2",
        quote:
          "ICS-spezifische Informationssicherheits- und Safety-Aspekte, also Aspekte der funktionalen Sicherheit",
      },
    },
    {
      id: "p01-08",
      topic: 1,
      level: "basis",
      stem: "Welche Aussagen zu den Mindeststandards des BSI treffen laut IT-Grundschutz-Kompendium zu?",
      options: [
        { text: "Sie beruhen auf § 8 Abs. 1 BSIG.", correct: true },
        {
          text: "Sie sind von den in § 8 Abs. 1 BSIG genannten Stellen der Bundesverwaltung umzusetzen.",
          correct: true,
        },
        { text: "Sie gelten unmittelbar für alle privaten Kleinunternehmen.", correct: false },
        { text: "Sie ersetzen das IT-Grundschutz-Kompendium vollständig.", correct: false },
      ],
      explanation:
        "Das Kompendium verweist z. B. im Baustein APP.1.2 auf den Mindeststandard für Webbrowser nach § 8 Abs. 1 BSIG, der von Stellen der Bundesverwaltung umzusetzen ist.",
      source: {
        doc: "kompendium",
        section: "APP.1.2 Webbrowser, Kap. 4.1",
        quote:
          "Die Mindeststandards sind von den in §8 Abs.1 Satz1 BSIG genannten Stellen der Bundesverwaltung umzusetzen",
      },
    },
    {
      id: "p01-09",
      topic: 1,
      level: "experte",
      stem: "In einer Klinik ist das Laborinformationssystem nach einem Ransomware-Angriff zwei Tage nicht nutzbar; zusätzlich wurden Befunde vor der Verschlüsselung abgeflossen. Welche Grundwerte sind betroffen?",
      options: [
        { text: "Verfügbarkeit", correct: true },
        { text: "Vertraulichkeit", correct: true },
        { text: "Keiner, da nur Daten und keine Systeme beschädigt wurden", correct: false },
        {
          text: "Integrität, da die Daten unbefugt verändert (verschlüsselt) wurden",
          correct: true,
        },
      ],
      explanation:
        "Die Anwendung ist nicht wie vorgesehen nutzbar (Verfügbarkeit), Befunde wurden Unbefugten zugänglich (Vertraulichkeit) und die Daten wurden unerlaubt verändert (Integrität).",
      source: {
        doc: "kompendium",
        section: "Glossar: Verfügbarkeit, Vertraulichkeit, Integrität",
        quote:
          "von Informationen ist vorhanden, wenn diese von den Anwendenden stets wie vorgesehen genutzt werden können.",
      },
    },
    {
      id: "p01-10",
      topic: 1,
      level: "experte",
      stem: "Ein Stadtwerk betreibt Netzleittechnik und eine klassische Büro-IT. Welche Aussagen sind im Sinne des IT-Grundschutzes zutreffend?",
      options: [
        {
          text: "Sicherheitsvorgaben der Office-IT sind auf die Leittechnik eventuell nicht direkt übertragbar.",
          correct: true,
        },
        {
          text: "Eingriffe zur Störungsbehebung in der OT können eine erneute behördliche Freigabe erfordern.",
          correct: true,
        },
        {
          text: "Der oder die ISB der Office-IT kennt Safety-Aspekte der Leittechnik automatisch.",
          correct: false,
        },
        {
          text: "Etablierte betriebliche Abläufe der Office-IT lassen sich ohne Weiteres auf die Leittechnik übertragen.",
          correct: false,
        },
      ],
      explanation:
        "IND.1 beschreibt die Gefährdung durch ungeeignete Einbindung der OT in Sicherheitsorganisation und betriebliche Abläufe: Besonderheiten der OT erschweren das Übertragen etablierter Abläufe.",
      source: {
        doc: "kompendium",
        section: "IND.1, Kap. 2.2 und 2.3",
        quote:
          "Auch wenn sich OT und IT zunehmend annähern, gibt es Besonderheiten, die das Übertragen etablierter betrieblicher Abläufe erschweren.",
      },
    },
  ],
};
