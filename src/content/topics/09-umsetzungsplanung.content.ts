import type { TopicContent } from "../course.types";

/** Themenfeld 9: Umsetzungsplanung. */
export const topic: TopicContent = {
  topic: 9,
  lessons: [
    {
      id: "t09-l01",
      title: "Maßnahmen sichten, Kosten schätzen, Budget entscheiden",
      depth: "II",
      minutes: 30,
      goals: [
        "Defizite aus IT-Grundschutz-Check und Risikoanalyse zu einer Maßnahmenliste konsolidieren",
        "Einmalige und wiederkehrende Kosten und Aufwände schätzen",
        "Restrisiken bei begrenztem Budget transparent machen",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Grundlage der Umsetzungsplanung sind die Ergebnisse von Strukturanalyse, Schutzbedarfsfeststellung, Modellierung, **IT-Grundschutz-Check** und ggf. **Risikoanalyse**. Da Geld und Personal begrenzt sind, ist das Ziel eine **möglichst effiziente Umsetzung**. Maßnahmen aus Umsetzungshinweisen sind **nicht verbindlich** und können durch eigene ergänzt oder ersetzt werden.",
        },
        { type: "heading", text: "1. Sichtung der Untersuchungsergebnisse" },
        {
          type: "list",
          items: [
            "Nicht oder nur teilweise umgesetzte Anforderungen aus dem Check in einer **Tabelle** zusammenfassen.",
            "Zusätzliche Anforderungen und Maßnahmen aus Risikoanalysen ebenfalls erfassen und den Zielobjekten und Bausteinen zuordnen.",
            "Anforderungen zu **konkreten Maßnahmen** passend zur Institution ausarbeiten und auf **Eignung** prüfen: wirksam, praktisch umsetzbar, wirtschaftlich.",
            "Wenn nötig, Anforderungen so anpassen, dass dieselben Sicherheitsziele erreicht werden. **Basis-Anforderungen** können im Normalfall **nicht ersetzt** werden.",
            "Die Entstehung der Maßnahmenliste **dokumentieren**.",
          ],
        },
        {
          type: "example",
          title: "Zu pauschale Vorgabe (Krankenhaus)",
          text: [
            "Vorgabe „Time-out nach zehn Minuten für alle IT-Systeme“ erweist sich im Check als nicht praxistauglich und wird differenziert:",
            "Verwaltung: erneute Authentisierung nach 15 Minuten Inaktivität. Bereiche mit Patienten- und Besucherverkehr: fünf Minuten. Behandlungsräume: keine automatische Abmeldung, dafür die Anweisung, sich beim Verlassen abzumelden.",
          ],
        },
        { type: "heading", text: "2. Kosten- und Aufwandsschätzung" },
        {
          type: "paragraph",
          text: "Für jede Maßnahme werden **Investitionskosten und Personalaufwand** festgehalten – getrennt nach **einmalig und wiederkehrend**. Einsparungen bei technischen oder infrastrukturellen Maßnahmen führen oft zu hohem fortlaufenden Personaleinsatz; Einsparungen beim Personal führen schnell zu wachsenden Sicherheitsdefiziten.",
        },
        {
          type: "list",
          items: [
            "Unwirtschaftliche Maßnahmen → **Ersatzmaßnahmen** suchen, die die Anforderung dennoch erfüllen.",
            "Keine angemessene Maßnahme → **Restrisiko und Entscheidung dokumentieren**.",
            "**Basis-Anforderungen** müssen im Normalfall immer erfüllt werden; eine Restrisiko-Akzeptanz ist wegen ihrer elementaren Natur **nicht vorgesehen**.",
          ],
        },
        { type: "heading", text: "3. Budgetentscheidung durch die Leitung" },
        {
          type: "paragraph",
          text: "Der Leitungsebene werden die Ergebnisse dargestellt – die festgestellten Schwachstellen **geordnet nach Schutzbedarf**, dazu Kosten und Aufwand. Reicht das Budget nicht, wird das **Restrisiko** aufgezeigt; die **Kreuzreferenztabellen** zeigen, gegen welche elementaren Gefährdungen dann kein ausreichender Schutz besteht. Weitere Schritte erfolgen erst, wenn die **Leitung entschieden hat, dass das Restrisiko tragbar ist** – sie trägt die Verantwortung für die Konsequenzen.",
        },
      ],
      sources: [{ doc: "200-2", section: "Kap. 9.1 und 9.2", page: 157 }],
      quiz: [
        {
          id: "q-t09-l01-1",
          topic: 9,
          level: "basis",
          stem: "Wie sind Kosten und Aufwände für Sicherheitsmaßnahmen laut BSI-Standard 200-2 zu erfassen?",
          options: [
            { text: "Getrennt nach Investitionskosten und Personalaufwand", correct: true },
            {
              text: "Getrennt nach einmaligen und wiederkehrenden Kosten bzw. Aufwänden",
              correct: true,
            },
            { text: "Nur die einmaligen Anschaffungskosten", correct: false },
            { text: "Gar nicht, da Informationssicherheit keine Kostenfrage ist", correct: false },
          ],
          explanation:
            "200-2 fordert die Unterscheidung von Investitions- und Personalaufwand sowie einmalig/wiederkehrend.",
          source: { doc: "200-2", section: "Kap. 9.2", page: 158 },
        },
        {
          id: "q-t09-l01-2",
          topic: 9,
          level: "basis",
          stem: "Was gilt laut BSI-Standard 200-2 für Basis-Anforderungen bei der Umsetzungsplanung?",
          options: [
            { text: "Sie müssen im Normalfall immer erfüllt werden.", correct: true },
            {
              text: "Eine Akzeptanz des Restrisikos ist wegen ihrer elementaren Natur nicht vorgesehen.",
              correct: true,
            },
            { text: "Sie können im Normalfall nicht ersetzt werden.", correct: true },
            {
              text: "Sie können bei knappem Budget ohne Weiteres zurückgestellt werden.",
              correct: false,
            },
          ],
          explanation: "Basis-Anforderungen sind elementar und vorrangig umzusetzen.",
          source: { doc: "200-2", section: "Kap. 9.1 und 9.2", page: 158 },
        },
        {
          id: "q-t09-l01-3",
          topic: 9,
          level: "experte",
          stem: "Das Budget reicht nicht für alle fehlenden Maßnahmen. Wie ist laut BSI-Standard 200-2 vorzugehen?",
          options: [
            {
              text: "Das entstehende Restrisiko transparent beschreiben und der Leitungsebene vorlegen",
              correct: true,
            },
            {
              text: "Mithilfe der Kreuzreferenztabellen ermitteln, gegen welche Gefährdungen kein ausreichender Schutz besteht",
              correct: true,
            },
            {
              text: "Weitere Schritte erst nach der Entscheidung der Leitung über die Tragbarkeit des Restrisikos",
              correct: true,
            },
            { text: "Der ISB entscheidet allein, welche Risiken getragen werden.", correct: false },
          ],
          explanation:
            "Die Leitungsebene entscheidet über das Restrisiko und trägt die Verantwortung.",
          source: { doc: "200-2", section: "Kap. 9.2", page: 159 },
        },
      ],
    },
    {
      id: "t09-l02",
      title: "Umsetzungsreihenfolge, Verantwortung und begleitende Maßnahmen",
      depth: "II",
      minutes: 30,
      goals: [
        "Eine begründete Umsetzungsreihenfolge festlegen",
        "Einen Realisierungsplan mit Verantwortlichen, Terminen und Budget erstellen",
        "Realisierungsbegleitende Maßnahmen einplanen",
      ],
      blocks: [
        { type: "heading", text: "Umsetzungsreihenfolge" },
        {
          type: "callout",
          variant: "merke",
          title: "Grundregel",
          text: "Zuerst die Maßnahmen aus den Basis-Anforderungen, dann aus den Standard-Anforderungen, erst danach die zusätzlichen Maßnahmen für erhöhten Schutzbedarf. Die Baustein-Reihenfolge R1–R3 kann zusätzlich herangezogen werden – vor allem bei der Basis-Absicherung.",
        },
        {
          type: "table",
          headers: ["Kriterium", "Erläuterung"],
          rows: [
            [
              "Lebenszyklus",
              "Neue Zielobjekte: Planung und Konzeption zuerst; bestehende Zielobjekte: Absicherung des Betriebs zuerst",
            ],
            [
              "Logische Abhängigkeiten",
              "Restriktive Rechtevergabe (Basis) auf einem neuen Server erst nach sicherer Installation (Standard). Basis-Anforderungen haben dennoch inhaltlich Priorität, sobald sie erfüllbar sind.",
            ],
            [
              "Breitenwirkung",
              "Maßnahmen mit großer Breitenwirkung zuerst; **Quick Wins** oft im organisatorischen Bereich oder durch zentrale Konfiguration",
            ],
            [
              "Einfluss des Bausteins",
              "Bausteine mit großem Einfluss bevorzugen – z. B. erst Server (SYS.1.1), dann Clients",
            ],
            [
              "Viele offene Anforderungen",
              "Bausteine mit auffallend vielen Defiziten bevorzugt behandeln",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Die Entscheidung, welche Maßnahmen ergriffen oder verschoben und wo Restrisiken akzeptiert werden, ist **auch aus juristischen Gründen** sorgfältig zu dokumentieren (Nachweis der Sorgfaltspflicht). Bleiben Anforderungen unerfüllt, empfiehlt sich eine **vereinfachte Risikoanalyse** – die Gefährdungsermittlung entfällt, da sie bereits bei der Erstellung der Bausteine erfolgt ist.",
        },
        { type: "heading", text: "Aufgaben und Verantwortung" },
        {
          type: "paragraph",
          text: "Es muss verbindlich festgelegt werden, **wer bis wann welche Maßnahme** realisiert – sonst verzögert sich die Umsetzung erheblich oder unterbleibt. Die Verantwortlichen brauchen ausreichende Kompetenzen und Ressourcen. Ebenso wird festgelegt, wer die Realisierung **überwacht** – typischerweise wird der Abschluss an den **ISB** gemeldet, der die Leitungsebene regelmäßig über Fortschritt und Risikoabsenkung informiert.",
        },
        {
          type: "list",
          items: [
            "Bezeichnung des Zielobjekts",
            "Nummer bzw. Titel des Bausteins",
            "Titel bzw. Beschreibung der Anforderung",
            "Beschreibung der umzusetzenden Maßnahme (oder Verweis auf das Sicherheitskonzept)",
            "Terminplanung und Budgetplanung (Beschaffung, Betriebskosten)",
            "Verantwortliche für die Umsetzung",
          ],
        },
        {
          type: "example",
          title: "Realisierungsplan (RECPLAST, Auszug)",
          text: "S008 Print-Server – SYS.1.1.A8 Regelmäßige Datensicherung – externes Backup-System geplant, Angebot 15.000 Euro, Betriebskosten noch offen – Termin Q1 Folgejahr – verantwortlich: Einkauf.",
        },
        { type: "heading", text: "Realisierungsbegleitende Maßnahmen" },
        {
          type: "paragraph",
          text: "Rechtzeitig einplanen: **Sensibilisierung** (Notwendigkeit und Konsequenzen neuer Maßnahmen erklären) und **Schulung** (Maßnahmen korrekt anwenden). Ohne Schulung können Maßnahmen oft nicht umgesetzt werden, verlieren ihre Wirkung und führen zu einer ablehnenden Haltung gegenüber Informationssicherheit.",
        },
      ],
      sources: [{ doc: "200-2", section: "Kap. 9.3 bis 9.5", page: 160 }],
      quiz: [
        {
          id: "q-t09-l02-1",
          topic: 9,
          level: "basis",
          stem: "In welcher Reihenfolge sind Maßnahmen laut BSI-Standard 200-2 grundsätzlich umzusetzen?",
          options: [
            {
              text: "Basis-Anforderungen, dann Standard-Anforderungen, dann erhöhter Schutzbedarf",
              correct: true,
            },
            {
              text: "Erhöhter Schutzbedarf zuerst, da dort die größten Risiken liegen",
              correct: false,
            },
            { text: "Alphabetisch nach Bausteinnamen", correct: false },
            {
              text: "Die günstigsten Maßnahmen zuerst, unabhängig von der Anforderungsart",
              correct: false,
            },
          ],
          explanation: "Grundsätzlich: Basis vor Standard vor erhöhtem Schutzbedarf.",
          source: { doc: "200-2", section: "Kap. 9.3", page: 160 },
        },
        {
          id: "q-t09-l02-2",
          topic: 9,
          level: "basis",
          stem: "Welche Informationen sollte ein Realisierungsplan laut BSI-Standard 200-2 mindestens enthalten?",
          options: [
            { text: "Bezeichnung des Zielobjekts und betrachteter Baustein", correct: true },
            { text: "Terminplanung und Budgetplanung", correct: true },
            { text: "Verantwortliche für die Umsetzung", correct: true },
            { text: "Die private Telefonnummer der Geschäftsführung", correct: false },
          ],
          explanation:
            "Zielobjekt, Baustein, Anforderung, Maßnahme, Termine, Budget und Verantwortliche.",
          source: { doc: "200-2", section: "Kap. 9.4", page: 162 },
        },
        {
          id: "q-t09-l02-3",
          topic: 9,
          level: "experte",
          stem: "Ein neuer Server soll in Betrieb gehen. Die Basis-Anforderung „restriktive Rechtevergabe“ setzt eine sichere Installation (Standard-Anforderung) voraus. Wie ist laut BSI-Standard 200-2 vorzugehen?",
          options: [
            {
              text: "Die logische Abhängigkeit bestimmt hier die zeitliche Reihenfolge: zuerst sicher installieren.",
              correct: true,
            },
            {
              text: "Basis-Anforderungen haben inhaltlich dennoch Priorität, sobald sie erfüllbar sind.",
              correct: true,
            },
            {
              text: "Die Rechtevergabe entfällt, da sie mit der Klassifikation kollidiert.",
              correct: false,
            },
            {
              text: "Bei bestehenden Servern ist die restriktive Rechtevergabe sofort umsetzbar und vorrangig.",
              correct: true,
            },
          ],
          explanation: "200-2 nennt genau dieses Beispiel für logische Abhängigkeiten.",
          source: { doc: "200-2", section: "Kap. 9.3", page: 160 },
        },
      ],
    },
  ],
};
