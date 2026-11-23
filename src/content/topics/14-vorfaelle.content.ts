import type { TopicContent } from "../course.types";

/** Themenfeld 14: Sicherheitsvorfallbehandlung. */
export const topic: TopicContent = {
  topic: 14,
  lessons: [
    {
      id: "t14-l01",
      title: "Grundlagen und Organisation der Vorfallbehandlung",
      depth: "II",
      minutes: 35,
      goals: [
        "Einen Sicherheitsvorfall definieren und von Störungen abgrenzen",
        "Richtlinie, Verantwortlichkeiten, Meldewege und Eskalation festlegen",
        "DER.2.1 im Zusammenspiel mit DER.1, DER.2.2, DER.2.3 und DER.4 einordnen",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Erkannte Sicherheitsvorfälle müssen **schnell und effizient** bearbeitet werden, um Schäden zu begrenzen. Dafür braucht es ein **vorgegebenes und erprobtes Verfahren** (Security Incident Handling bzw. Response). Beispiele für Vorfälle: Fehlkonfigurationen mit Offenlegung vertraulicher Informationen, Angriffe auf Server, Diebstahl vertraulicher Informationen, Sabotage oder Erpressung mit IT-Bezug. Ursachen sind u. a. Malware, veraltete Systeme, Innentäter, Zero-Day-Exploits und **Advanced Persistent Threats (APT)**.",
        },
        { type: "heading", text: "Einordnung im Kompendium" },
        {
          type: "table",
          headers: ["Baustein", "Inhalt"],
          rows: [
            [
              "DER.1 Detektion von sicherheitsrelevanten Ereignissen",
              "Vorfälle erkennen – wird von DER.2.1 vorausgesetzt",
            ],
            [
              "DER.2.1 Behandlung von Sicherheitsvorfällen",
              "**Einmal für den Informationsverbund** anzuwenden; Sicht der Informationstechnik; R1",
            ],
            [
              "DER.2.2 Vorsorge für die IT-Forensik",
              "Vorsorge, um forensische Untersuchungen zu ermöglichen",
            ],
            [
              "DER.2.3 Bereinigung weitreichender Sicherheitsvorfälle",
              "Bereinigung nach APT-Vorfällen",
            ],
            [
              "DER.4 Notfallmanagement",
              "Besonderer Bereich – aber: **ob ein Notfall vorliegt, wird in DER.2.1 entschieden**",
            ],
          ],
        },
        { type: "heading", text: "Basis-Anforderungen" },
        {
          type: "list",
          items: [
            "**A1 Definition eines Sicherheitsvorfalls** – klar definiert, von Störungen im Tagesbetrieb abgegrenzt, allen Beteiligten bekannt; Eintrittsschwellen nach Schutzbedarf.",
            "**A2 Richtlinie** – Zweck, Ziele, Verhaltensregeln für verschiedene Vorfallarten, zielgruppenorientierte Handlungsanweisungen; allen bekannt, mit dem IT-Betrieb abgestimmt, **von der Institutionsleitung verabschiedet**, regelmäßig geprüft.",
            "**A3 Verantwortlichkeiten und Ansprechpersonen** – inklusive der Frage, wer über eine **forensische Untersuchung** entscheidet; Kontaktinformationen aktuell und leicht zugänglich.",
            "**A4 Benachrichtigung betroffener Stellen** – intern und extern zeitnah; prüfen, ob Datenschutzbeauftragte, Betriebs-/Personalrat und Rechtsabteilung einzubeziehen sind; **Meldepflichten** für Behörden und regulierte Branchen beachten.",
            "**A5 Behebung** und **A6 Wiederherstellung** (siehe nächste Lektion).",
          ],
        },
        { type: "heading", text: "Organisation (Standard-Anforderungen)" },
        {
          type: "list",
          items: [
            "**Vorgehensweise** dokumentieren und von der Institutionsleitung in Kraft setzen (A7).",
            "**Sicherheitsvorfall-Team**, dessen Mitglieder je nach Vorfall einberufen werden – vorab benannt und eingewiesen (A8).",
            "**Meldewege** über verlässliche Kanäle; zentrale Anlaufstelle kommunizieren; **Kommunikations- und Kontaktstrategie**: wer informiert werden muss bzw. darf, durch wen, in welcher Reihenfolge und Tiefe; wer Informationen an Dritte gibt (A9).",
            "Einheitliches **Einstufungsverfahren** für Vorfälle und Störungen, abgestimmt mit dem Incident Management (A11); Schnittstellen zu Störungsbehebung und Notfallmanagement (A12, A13).",
            "**Eskalationsstrategie** mit eindeutigen Handlungsanweisungen; geeignete, auch im Vorfall verfügbare Werkzeuge; Eskalationswege in Übungen erproben (A14).",
            "Service Desk schulen und mit Hilfsmitteln ausstatten (A15).",
          ],
        },
        {
          type: "praxis",
          title: "Gestufte Meldepflichten unter NIS-2",
          text: "Besonders wichtige und wichtige Einrichtungen sowie Betreiber kritischer Anlagen müssen dem BSI erhebliche Sicherheitsvorfälle gestuft melden: frühe Erstmeldung innerhalb von 24 Stunden nach Kenntniserlangung, Folgemeldung innerhalb von 72 Stunden, Abschlussmeldung spätestens einen Monat nach der Meldung. DER.2.1.A4 verlangt allgemein, Meldepflichten für Behörden und regulierte Branchen zu berücksichtigen.",
          source: {
            label: "BSI: NIS-2-Meldepflicht",
            url: "https://www.bsi.bund.de/DE/Themen/Regulierte-Wirtschaft/NIS-2-regulierte-Unternehmen/NIS-2-Infopakete/NIS-2-Meldepflicht/NIS-2-Meldepflicht_node.html",
            date: "2026",
          },
        },
      ],
      sources: [
        { doc: "kompendium", section: "DER.2.1 Behandlung von Sicherheitsvorfällen, Kap. 1 und 3" },
      ],
      quiz: [
        {
          id: "q-t14-l01-1",
          topic: 14,
          level: "basis",
          stem: "Welche Aussagen zur Definition eines Sicherheitsvorfalls nach DER.2.1.A1 treffen zu?",
          options: [
            {
              text: "Er muss so weit wie möglich von Störungen im Tagesbetrieb abgegrenzt sein.",
              correct: true,
            },
            {
              text: "Alle an der Behandlung Beteiligten müssen die Definition kennen.",
              correct: true,
            },
            { text: "Eintrittsschwellen sollten sich am Schutzbedarf orientieren.", correct: true },
            {
              text: "Die Definition ist ausschließlich dem ISB bekannt zu machen.",
              correct: false,
            },
          ],
          explanation:
            "A1 fordert eine klare, allen Beteiligten bekannte Definition mit Abgrenzung zu Störungen.",
          source: { doc: "kompendium", section: "DER.2.1.A1" },
        },
        {
          id: "q-t14-l01-2",
          topic: 14,
          level: "basis",
          stem: "In welchem Baustein wird laut Kompendium entschieden, ob ein Notfall vorliegt?",
          options: [
            { text: "DER.2.1 Behandlung von Sicherheitsvorfällen", correct: true },
            { text: "DER.4 Notfallmanagement", correct: false },
            { text: "DER.1 Detektion von sicherheitsrelevanten Ereignissen", correct: false },
            { text: "ISMS.1 Sicherheitsmanagement", correct: false },
          ],
          explanation:
            "Notfallmanagement ist in DER.4 geregelt, die Entscheidung über das Vorliegen eines Notfalls fällt aber in DER.2.1.",
          source: { doc: "kompendium", section: "DER.2.1, Kap. 1.3" },
        },
        {
          id: "q-t14-l01-3",
          topic: 14,
          level: "experte",
          stem: "Nach einem Datenabfluss überlegt die IT-Leitung, wen sie informieren muss. Welche Aussagen entsprechen DER.2.1?",
          options: [
            {
              text: "Alle betroffenen internen und externen Stellen sind zeitnah zu informieren.",
              correct: true,
            },
            {
              text: "Es ist zu prüfen, ob die Datenschutzbeauftragten einbezogen werden müssen.",
              correct: true,
            },
            {
              text: "Meldepflichten für Behörden und regulierte Branchen sind zu berücksichtigen.",
              correct: true,
            },
            {
              text: "Jede Mitarbeiterin darf Informationen zum Vorfall nach eigenem Ermessen an die Presse geben.",
              correct: false,
            },
          ],
          explanation:
            "Die Kommunikationsstrategie legt fest, wer Informationen an Dritte weitergibt.",
          source: { doc: "kompendium", section: "DER.2.1.A4 und A9" },
        },
      ],
    },
    {
      id: "t14-l02",
      title: "Ablauf: Eindämmen, Beheben, Wiederherstellen, Nachbereiten",
      depth: "II",
      minutes: 35,
      goals: [
        "Die Schritte zur Behebung und Wiederherstellung nach DER.2.1 anwenden",
        "Zwischen Eindämmung und Aufklärung abwägen und Beweise sichern",
        "Vorfälle dokumentieren, nachbereiten und daraus lernen",
      ],
      blocks: [
        { type: "heading", text: "Eindämmen oder aufklären?" },
        {
          type: "paragraph",
          text: "Parallel zur Ursachenanalyse wird entschieden, ob es wichtiger ist, den **Schaden einzudämmen** oder den **Vorfall aufzuklären** (A10). Für ausgewählte Szenarien sollten vorab **Worst-Case-Betrachtungen** durchgeführt werden.",
        },
        {
          type: "callout",
          variant: "hinweis",
          title: "Beweisspuren nicht zerstören",
          text: "Wer unvorsichtig handelt, zerstört wichtige Beweisspuren: Ein voreilig heruntergefahrener Client verliert Hauptspeicher und aktive Prozesse; ein beendeter Prozess und gelöschte Temp-Dateien verraten nicht mehr, ob Daten abgeflossen sind; vorschnell eingespielte Updates verhindern die Analyse der Einbruchsursache. Eine gute Fehlerkultur ist Voraussetzung für Aufklärung.",
        },
        { type: "heading", text: "Behebung (A5)" },
        {
          type: "list",
          ordered: true,
          items: [
            "Problem eingrenzen und Ursache finden",
            "Erforderliche Maßnahmen auswählen",
            "**Freigabe durch die Leitung des IT-Betriebs**",
            "Ursache beseitigen und sicheren Zustand herstellen",
          ],
        },
        {
          type: "paragraph",
          text: "Eine aktuelle **Liste interner und externer Sicherheitsfachleute** und sichere Kommunikationsverfahren mit ihnen müssen vorhanden sein.",
        },
        { type: "heading", text: "Wiederherstellung der Betriebsumgebung (A6)" },
        {
          type: "list",
          ordered: true,
          items: [
            "Betroffene Komponenten **vom Netz nehmen**",
            "Alle Daten **sichern**, die Aufschluss über Art und Ursache geben könnten",
            "Betriebssystem und Applikationen auf **Veränderungen untersuchen**",
            "Originaldaten von **schreibgeschützten Datenträgern** einspielen, inkl. sicherheitsrelevanter Konfigurationen und Patches; Datensicherungen nur, wenn sie nachweislich nicht betroffen waren",
            "Nach einem Angriff **alle Zugangsdaten ändern**, bevor die Komponenten wieder in Betrieb gehen; ggf. Penetrationstest",
            "Benutzende in **Anwendungsfunktionstests** einbeziehen",
            "Komponenten inklusive Netzübergängen **gezielt überwachen**",
          ],
        },
        { type: "heading", text: "Dokumentation und Nachbereitung" },
        {
          type: "list",
          items: [
            "**A16**: Behebung standardisiert dokumentieren – alle Aktionen mit Zeitpunkten und Protokolldaten, vertraulich archiviert, bevor die Störung als abgeschlossen markiert wird.",
            "**A17**: Nachbereitung – Wie schnell wurde erkannt und behoben? Funktionierten Meldewege und Detektion? Waren die Maßnahmen wirksam? Daraus Handlungsanweisungen für vergleichbare Vorfälle ableiten.",
            "Die **Institutionsleitung** wird **jährlich** über Sicherheitsvorfälle unterrichtet; bei sofortigem Handlungsbedarf **umgehend** (MUSS).",
            "**A18**: Prozesse anhand der Erkenntnisse und neuer Entwicklungen in Incident Management und Forensik weiterentwickeln.",
          ],
        },
        {
          type: "paragraph",
          text: "Bei **erhöhtem Schutzbedarf**: vorab genehmigte **Prioritäten** (A19), eine **dedizierte Meldestelle** auch außerhalb der Arbeitszeiten (A20), ein **Expertenteam** (A21) sowie angekündigte und unangekündigte **Übungen** und **Planspiele** (A22).",
        },
      ],
      sources: [{ doc: "kompendium", section: "DER.2.1, Kap. 2 und 3" }],
      quiz: [
        {
          id: "q-t14-l02-1",
          topic: 14,
          level: "basis",
          stem: "Wer muss laut DER.2.1.A5 eine Freigabe erteilen, bevor Maßnahmen zur Behebung eines Sicherheitsvorfalls umgesetzt werden?",
          options: [
            { text: "Die Leitung des IT-Betriebs", correct: true },
            { text: "Die Datenschutzbeauftragten", correct: false },
            { text: "Der Betriebsrat", correct: false },
            { text: "Das BSI", correct: false },
          ],
          explanation: "A5 verlangt die Freigabe durch die Leitung des IT-Betriebs.",
          source: { doc: "kompendium", section: "DER.2.1.A5" },
        },
        {
          id: "q-t14-l02-2",
          topic: 14,
          level: "basis",
          stem: "Was muss laut DER.2.1.A6 nach einem Angriff geschehen, bevor betroffene Komponenten wieder in Betrieb genommen werden?",
          options: [
            {
              text: "Alle Zugangsdaten auf den betroffenen Komponenten müssen geändert werden.",
              correct: true,
            },
            {
              text: "Originaldaten sind von schreibgeschützten Datenträgern einzuspielen.",
              correct: true,
            },
            {
              text: "Betriebssystem und Applikationen sind auf Veränderungen zu untersuchen.",
              correct: true,
            },
            {
              text: "Die Komponenten werden ohne weitere Überwachung freigegeben.",
              correct: false,
            },
          ],
          explanation:
            "Nach der Wiederherstellung müssen die Komponenten gezielt überwacht werden.",
          source: { doc: "kompendium", section: "DER.2.1.A6" },
        },
        {
          id: "q-t14-l02-3",
          topic: 14,
          level: "experte",
          stem: "Auf einem Server läuft ein unbekannter Prozess, der Daten ins Internet sendet. Welches Vorgehen ist im Sinne von DER.2.1 angemessen?",
          options: [
            { text: "Abwägen, ob Eindämmung oder Aufklärung wichtiger ist", correct: true },
            {
              text: "Daten sichern, die Aufschluss über Art und Ursache geben können",
              correct: true,
            },
            {
              text: "Den Prozess sofort beenden und die temporären Dateien löschen",
              correct: false,
            },
            {
              text: "Die Komponente vom Netz nehmen, um weiteren Abfluss zu verhindern",
              correct: true,
            },
          ],
          explanation:
            "Voreiliges Beenden und Löschen zerstört Beweisspuren; Netztrennung und Datensicherung sind vorgesehen.",
          source: { doc: "kompendium", section: "DER.2.1, Kap. 2.2, A6 und A10" },
        },
      ],
    },
  ],
};
