import type { TopicContent } from "../course.types";

/** Themenfeld 10: Aufrechterhaltung und kontinuierliche Verbesserung. */
export const topic: TopicContent = {
  topic: 10,
  lessons: [
    {
      id: "t10-l01",
      title: "Leitfragen und Überprüfungsverfahren",
      depth: "II",
      minutes: 30,
      goals: [
        "Den Lebenszyklus der Informationssicherheit (PDCA) erklären",
        "Leitfragen für die Managementbewertung anwenden",
        "Geeignete Überprüfungsverfahren und die Unabhängigkeit der Prüfenden beachten",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Sicherheit ist **kein unveränderbarer Zustand**. Geschäftsprozesse, Technik, Organisation, Gesetze und Angriffsmethoden ändern sich – Sicherheitskonzepte können teilweise oder vollständig unwirksam werden. Informationssicherheit muss daher **aktiv gemanagt** werden.",
        },
        {
          type: "table",
          headers: ["Phase", "Inhalt"],
          rows: [
            [
              "Plan – Planung",
              "Rahmenbedingungen analysieren, Sicherheitsziele bestimmen, Strategie ausarbeiten",
            ],
            ["Do – Umsetzung", "Sicherheitskonzept und -organisation umsetzen"],
            ["Check – Erfolgskontrolle", "Überwachung der Zielerreichung"],
            [
              "Act – Optimierung",
              "Umgehende Beseitigung kleinerer Mängel; bei grundlegenden Veränderungen wieder mit der Planung beginnen",
            ],
          ],
          caption: "Lebenszyklus nach Deming (PDCA) – BSI-Standard 200-1, Kap. 3.2.2",
        },
        {
          type: "paragraph",
          text: "Auch Maßnahmen haben einen Lebenszyklus. Die Umsetzungshinweise gliedern sie in **Planung und Konzeption, Beschaffung, Umsetzung, Betrieb, Aussonderung und Notfallvorsorge**.",
        },
        { type: "heading", text: "Managementbewertung und Leitfragen" },
        {
          type: "paragraph",
          text: "Die Leitungsebene bewertet den Sicherheitsprozess regelmäßig (**Managementbewertung**), bei Bedarf auch zwischen den Routineterminen – z. B. bei Häufung von Vorfällen oder deutlich geänderten Rahmenbedingungen. Ergebnisse und Beschlüsse werden **nachvollziehbar dokumentiert**; der ISB bereitet die Informationen kurz und übersichtlich auf. Im Mittelpunkt steht eine **Gesamtbetrachtung**, nicht die Prüfung einzelner Maßnahmen.",
        },
        {
          type: "list",
          items: [
            "Haben sich Rahmenbedingungen geändert, die ein anderes Vorgehen erfordern?",
            "Sind die Sicherheitsziele noch angemessen? Ist die Leitlinie noch aktuell?",
            "Ist die Sicherheitsstrategie noch angemessen?",
            "Ist das Sicherheitskonzept geeignet, die Ziele zu erreichen – werden z. B. gesetzliche Anforderungen erfüllt?",
            "Ist die Sicherheitsorganisation geeignet? Muss ihre Stellung gestärkt werden?",
            "Steht der Aufwand (Kosten, Personal, Material) in einem sinnvollen Verhältnis zu den Geschäftszielen?",
          ],
        },
        { type: "heading", text: "Messung der Zielerreichung" },
        {
          type: "paragraph",
          text: "Die Sicherheitsstrategie sollte festlegen: **WAS** überwacht oder gemessen wird (sinnvolle Anzahl), **WER** dafür verantwortlich ist und **WANN** bzw. wie häufig ausgewertet wird.",
        },
        {
          type: "list",
          items: [
            "Kennzahlen definieren, dokumentieren und auswerten",
            "Sicherheitsvorfälle detektieren, dokumentieren und auswerten",
            "Übungen und Tests, z. B. Backup-Wiederherstellung",
            "Interne und externe Audits, Datenschutzkontrollen, **IS-Revision**",
            "Zertifizierung, z. B. ISO 27001 auf der Basis von IT-Grundschutz",
            "**Cyber-Sicherheits-Check** (BSI und ISACA) – für Institutionen, die sich bisher weniger intensiv mit Cyber-Sicherheit befasst haben; ohne obligatorische Voraussetzungen an Dokumentenlage oder Umsetzungsstatus",
          ],
        },
        {
          type: "callout",
          variant: "merke",
          title: "Unabhängigkeit",
          text: "Prüfungen und Audits sollten nicht von denjenigen durchgeführt werden, die die Sicherheitsvorgaben entwickelt haben (Rollenkonflikt Ersteller/Prüfer). Externe Experten helfen gegen Betriebsblindheit. Prüfergebnisse sind in der Regel vertraulich.",
        },
        {
          type: "paragraph",
          text: "Auch **kleine Institutionen** können das leisten: automatisiertes Monitoring und Reporting, Durchsicht der Dokumentation auf Aktualität und ein Workshop zu Erfahrungen mit dem Sicherheitskonzept geben bereits einen ausreichenden Überblick. Nach Einführung neuer Maßnahmen prüft der ISB die **Akzeptanz** bei den Mitarbeitenden.",
        },
      ],
      sources: [
        { doc: "200-1", section: "Kap. 3.2 Prozessbeschreibung und Lebenszyklus-Modell", page: 17 },
        { doc: "200-1", section: "Kap. 4.3 Erfolgskontrolle im Sicherheitsprozess", page: 24 },
        {
          doc: "200-2",
          section: "Kap. 10.1 Überprüfung des Informationssicherheitsprozesses",
          page: 164,
        },
      ],
      quiz: [
        {
          id: "q-t10-l01-1",
          topic: 10,
          level: "basis",
          stem: "Wofür stehen die Phasen des PDCA-Zyklus?",
          options: [
            { text: "Plan – Do – Check – Act", correct: true },
            { text: "Prepare – Deploy – Control – Audit", correct: false },
            { text: "Plan – Design – Certify – Approve", correct: false },
            { text: "Policy – Detection – Correction – Assessment", correct: false },
          ],
          explanation: "Planung, Umsetzung, Erfolgskontrolle, Optimierung.",
          source: { doc: "200-1", section: "Kap. 3.2.2", page: 18 },
        },
        {
          id: "q-t10-l01-2",
          topic: 10,
          level: "basis",
          stem: "Was sollte die Sicherheitsstrategie laut BSI-Standard 200-2 zur Messung der Zielerreichung mindestens festlegen?",
          options: [
            { text: "Welche Ziele überwacht oder gemessen werden", correct: true },
            { text: "Wer für die Überwachung verantwortlich ist", correct: true },
            { text: "Wann und wie häufig die Ergebnisse ausgewertet werden", correct: true },
            { text: "Welche Mitarbeitenden bei Fehlern entlassen werden", correct: false },
          ],
          explanation: "WAS, WER und WANN sind festzulegen.",
          source: { doc: "200-2", section: "Kap. 10.1", page: 164 },
        },
        {
          id: "q-t10-l01-3",
          topic: 10,
          level: "experte",
          stem: "Der ISB hat das Sicherheitskonzept selbst erstellt und möchte nun auch die Vollständigkeits- und Plausibilitätskontrolle durchführen. Wie ist das zu bewerten?",
          options: [
            {
              text: "Kontrollen sollten nicht durch die Ersteller der Konzepte durchgeführt werden.",
              correct: true,
            },
            { text: "Prüfende müssen Kompetenz und Unabhängigkeit gewährleisten.", correct: true },
            { text: "Externe Experten können gegen Betriebsblindheit helfen.", correct: true },
            {
              text: "Das ist unproblematisch, da der ISB das Konzept am besten kennt.",
              correct: false,
            },
          ],
          explanation: "200-2 nennt ausdrücklich den Rollenkonflikt zwischen Ersteller und Prüfer.",
          source: { doc: "200-2", section: "Kap. 10.1 und 10.3", page: 170 },
        },
      ],
    },
    {
      id: "t10-l02",
      title: "Kennzahlen, Reifegradmodelle und KVP",
      depth: "II",
      minutes: 30,
      goals: [
        "Kennzahlen sinnvoll einsetzen und ihre Grenzen kennen",
        "Ein ISMS mit dem Reifegradmodell aus BSI-Standard 200-2 bewerten",
        "Ergebnisse von Überprüfungen in einen kontinuierlichen Verbesserungsprozess überführen",
      ],
      blocks: [
        { type: "heading", text: "Kennzahlen" },
        {
          type: "paragraph",
          text: "Kennzahlen machen den IS-Prozess **messbar**, helfen bei der Optimierung und überprüfen Güte, Effizienz und Effektivität von Maßnahmen. Sie sind eine wertvolle **Argumentationshilfe gegenüber dem Management**.",
        },
        {
          type: "list",
          items: [
            "Beispiele: Anzahl erkannter Schadsoftware-Muster, installierte Sicherheitspatches, Dauer von Systemausfällen, durchgeführte Schulungen.",
            "Grenzen: Kennzahlen beleuchten meist nur **punktuell** Bereiche, in denen sich **leicht Messwerte** erzielen lassen – oft die technische Sicherheit.",
            "Der Aufwand muss in **vernünftiger Relation** zum Ergebnis stehen.",
            "Kennzahlen lassen sich unterschiedlich interpretieren – das **Ziel der Messung** muss vorher klar sein.",
          ],
        },
        { type: "heading", text: "Reifegradmodell" },
        {
          type: "table",
          headers: ["Reifegrad", "Erläuterung"],
          rows: [
            ["0", "Es existiert kein ISMS und es ist auch nichts geplant."],
            ["1", "ISMS ist geplant, aber nicht etabliert."],
            ["2", "ISMS ist zum Teil etabliert."],
            ["3", "ISMS ist voll etabliert und dokumentiert."],
            ["4", "Zusätzlich zu 3 wird das ISMS regelmäßig auf Effektivität überprüft."],
            ["5", "Zusätzlich zu 4 wird das ISMS regelmäßig verbessert."],
          ],
          caption: "Beispielhafte Reifegradbewertung nach BSI-Standard 200-2, Kap. 10.1.2",
        },
        {
          type: "paragraph",
          text: "Ein Reifegradmodell dokumentiert den Fortschritt über die Jahre, **ohne sich in Einzelmaßnahmen zu verlieren**. Die Bewertung kann mehrdimensional erfolgen, z. B. je Schicht des IT-Grundschutzes (ISMS, ORP, CON, OPS, DER, INF, NET, SYS, APP, IND). Ziele: Vollständigkeit prüfen, Verbesserungspotenziale erkennen, Vergleichbarkeit zwischen Institutionen, Nachweis gegenüber Dritten.",
        },
        {
          type: "callout",
          variant: "hinweis",
          title: "Reifegrad ist keine selbstständige Größe",
          text: "Der Reifegrad der Informationssicherheit hängt vom Reifegrad anderer Managementprozesse ab. Ohne Verzahnung mit dem Projektmanagement lässt sich der Schutzbedarf neuer Prozesse nur zyklisch abfragen; ohne Störungsmanagement werden Sicherheitsvorfälle nicht erkannt oder falsch gemeldet.",
        },
        { type: "heading", text: "Kontinuierlicher Verbesserungsprozess (KVP)" },
        {
          type: "list",
          items: [
            "**Aktualität** von Zielen, Rahmenbedingungen und Konzeption prüfen; Änderungen (neue Systeme, Umzug, Outsourcing, neue Gesetze) schon in der Planungsphase einbeziehen – Informationssicherheit gehört in das **Änderungsmanagement**.",
            "**Wirtschaftlichkeit** beobachten: Entsprechen die Ist-Kosten den Plankosten? Gibt es ressourcenschonendere Alternativen?",
            "**Rückmeldungen** von Mitarbeitenden, Kunden und Partnern über ein klar definiertes Verfahren aufnehmen, bewerten und Korrekturmaßnahmen ergreifen.",
            "**Vorgehensweise erweitern**: z. B. von Basis- auf Standard-Absicherung oder von der Kern-Absicherung auf einen größeren Informationsverbund – Ziel ist langfristig mindestens die Standard-Absicherung für alle Bereiche.",
            "Bei größeren Veränderungen schließt sich der Managementkreislauf und es wird wieder mit der **Planung** begonnen.",
          ],
        },
        {
          type: "paragraph",
          text: "Die grundsätzliche Vorgehensweise wird in einer **Richtlinie zur Überprüfung und Verbesserung** des IS-Prozesses dokumentiert und von der Leitung verabschiedet. Sie regelt insbesondere, wie **interne Audits** durchgeführt werden und wie die Ergebnisse in den Änderungsprozess einfließen.",
        },
        {
          type: "example",
          title: "KVP in der Praxis",
          text: "Die Kennzahl „Anteil der Clients mit aktuellen Sicherheitspatches“ sinkt drei Monate in Folge. Die Managementbewertung zeigt: Ein manueller Freigabeprozess verzögert die Verteilung. Maßnahme: automatisierte Verteilung mit Testgruppe. Im nächsten Quartal wird die Wirkung erneut gemessen – der Zyklus beginnt von vorn.",
        },
      ],
      sources: [
        { doc: "200-2", section: "Kap. 10.1.1 bis 10.3", page: 165 },
        {
          doc: "200-1",
          section: "Kap. 4.4 Kontinuierliche Verbesserung des Sicherheitsprozesses",
          page: 25,
        },
      ],
      quiz: [
        {
          id: "q-t10-l02-1",
          topic: 10,
          level: "basis",
          stem: "Welcher Reifegrad beschreibt laut BSI-Standard 200-2 ein ISMS, das voll etabliert und dokumentiert ist und zusätzlich regelmäßig auf Effektivität überprüft wird?",
          options: [
            { text: "Reifegrad 4", correct: true },
            { text: "Reifegrad 3", correct: false },
            { text: "Reifegrad 5", correct: false },
            { text: "Reifegrad 2", correct: false },
          ],
          explanation:
            "3 = voll etabliert und dokumentiert; 4 = zusätzlich regelmäßig auf Effektivität geprüft; 5 = zusätzlich regelmäßig verbessert.",
          source: { doc: "200-2", section: "Kap. 10.1.2", page: 166 },
        },
        {
          id: "q-t10-l02-2",
          topic: 10,
          level: "basis",
          stem: "Welche Grenzen von Kennzahlen nennt der BSI-Standard 200-2?",
          options: [
            { text: "Sie beleuchten meist nur einzelne Bereiche punktuell.", correct: true },
            {
              text: "Häufig werden Bereiche gemessen, in denen sich leicht Messwerte erzielen lassen.",
              correct: true,
            },
            { text: "Sie lassen sich unterschiedlich interpretieren.", correct: true },
            { text: "Sie ersetzen die Managementbewertung vollständig.", correct: false },
          ],
          explanation: "Kennzahlen sind hilfreich, aber in ihrer Aussagekraft begrenzt.",
          source: { doc: "200-2", section: "Kap. 10.1.1", page: 165 },
        },
        {
          id: "q-t10-l02-3",
          topic: 10,
          level: "experte",
          stem: "Eine Institution hat die Kern-Absicherung erfolgreich umgesetzt und befindet sich in der Phase der Aufrechterhaltung. Was sollte laut BSI-Standard 200-2 überlegt werden?",
          options: [
            {
              text: "Ob der Geltungsbereich auf einen größeren Informationsverbund erweitert werden soll",
              correct: true,
            },
            { text: "Ob die gewählte Vorgehensweise ergänzt werden soll", correct: true },
            {
              text: "Langfristig alle Bereiche auf mindestens Standard-Absicherung zu heben",
              correct: true,
            },
            { text: "Das ISMS einzustellen, da das Ziel erreicht ist", correct: false },
          ],
          explanation:
            "Ziel ist langfristig ein ganzheitliches Sicherheitsniveau von mindestens Standard-Absicherung.",
          source: { doc: "200-2", section: "Kap. 10.2", page: 169 },
        },
      ],
    },
  ],
};
