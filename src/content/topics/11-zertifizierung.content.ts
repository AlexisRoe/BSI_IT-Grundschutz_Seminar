import type { TopicContent } from "../course.types";

/** Themenfeld 11: Zertifizierung und Erwerb des IT-Grundschutz-Zertifikats auf Basis von ISO 27001. */
export const topic: TopicContent = {
  topic: 11,
  lessons: [
    {
      id: "t11-l01",
      title: "Zertifizierungsmodell, Rollen und Audittypen",
      depth: "I",
      minutes: 30,
      goals: [
        "Nutzen und Grundlage einer ISO 27001-Zertifizierung auf der Basis von IT-Grundschutz erklären",
        "Die drei Rollen im Zertifizierungsverfahren und ihre Aufgaben benennen",
        "Zertifizierungs-, Überwachungs- und Re-Zertifizierungsaudit sowie das Voraudit unterscheiden",
      ],
      blocks: [
        { type: "heading", text: "Warum zertifizieren?" },
        {
          type: "list",
          items: [
            "Bemühungen um Informationssicherheit **nach innen und außen** dokumentieren – Qualitätsmerkmal und Wettbewerbsvorteil",
            "Vertrauen von Bürgerinnen und Bürgern, z. B. im E-Government",
            "**Compliance**: Nachweis, dass Gesetze oder vertragliche Anforderungen erfüllt werden",
            "„Passiver“ Nutzen: Andere können sich über den Sicherheitszustand potenzieller Partner informieren",
          ],
        },
        {
          type: "paragraph",
          text: "ISO/IEC 27001 sieht ein **zweistufiges** Verfahren vor: Ein qualifizierter Auditor prüft, eine **unabhängige Zertifizierungsstelle** erteilt das Zertifikat. Weil die **Standard- und die Kern-Absicherung** die Anforderungen der ISO/IEC 27001 abbilden, kann sich eine Institution die Umsetzung vom **BSI** zertifizieren lassen – als **ISO 27001-Zertifizierung auf der Basis von IT-Grundschutz**. Das Kompendium dient als **Prüfkatalog** und wird vom BSI kostenfrei bereitgestellt.",
        },
        {
          type: "paragraph",
          text: "Rechtliche Grundlagen sind das **BSI-Gesetz** und die **Zertifizierungsverordnung (ZVO)**. Kriterienwerke sind ISO/IEC 27001:2022, die BSI-Standards 200-2 und 200-3 sowie das IT-Grundschutz-Kompendium. Welche Dokumente in welcher Version gelten, regelt die **Prüfgrundlage**.",
        },
        { type: "heading", text: "Drei Rollen" },
        {
          type: "table",
          headers: ["Rolle", "Aufgaben"],
          rows: [
            [
              "Antragsteller",
              "Initiator des Verfahrens; stellt den Antrag bei der Zertifizierungsstelle, beauftragt das Auditteam, stellt die **Referenzdokumente** bereit und unterstützt bei Dokumentenprüfung und Vor-Ort-Prüfung",
            ],
            [
              "Auditor bzw. Auditteamleiter",
              "Vom **BSI zertifizierte** Auditteamleiter für ISO 27001-Audits auf Basis IT-Grundschutz; verantwortet das Audit und das Votum, wählt das Team nach Qualifikation aus, erstellt den **Auditbericht** und sendet ihn **verschlüsselt** an die Zertifizierungsstelle; Ansprechpartner der Zertifizierungsstelle",
            ],
            [
              "Zertifizierungsstelle (im BSI)",
              "**Unabhängige dritte Instanz**, die die Gleichwertigkeit der Prüfungen gewährleistet; veröffentlicht Schemata, prüft Antrag und Auditbericht und erteilt bei positivem Ergebnis das Zertifikat",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Ein Auditteam kann aus einem oder mehreren **Auditoren**, **Fachexperten** und **Trainees** bestehen. Auditoren prüfen nur Themen, für die sie Fachwissen haben – sonst sind Fachexperten hinzuzuziehen. Hilfskräfte für reine Verwaltungstätigkeiten sind möglich; die **Verantwortung bleibt beim Auditteamleiter**.",
        },
        {
          type: "callout",
          variant: "merke",
          title: "Unabhängigkeitserklärung",
          text: "Jedes Mitglied des Auditteams gibt eine Unabhängigkeitserklärung ab, die von der Zertifizierungsstelle freigegeben sein muss, bevor es eingesetzt wird. Betrachtet werden drei Jahre – Gefährdungen sind z. B. vorherige Beratung der Institution, geschäftliche Verbindungen zur Institution oder zu ihrem Berater sowie Verwandtschaft. Rein auditierende Tätigkeiten sind ausgenommen.",
        },
        { type: "heading", text: "Audittypen und Auditphasen" },
        {
          type: "table",
          headers: ["Typ", "Zweck"],
          rows: [
            [
              "Zertifizierungsaudit",
              "Prüft den gesamten Sicherheitsprozess und – per **Stichprobe** auf Basis von Bausteinen – die Umsetzung der Anforderungen; bei Erstzertifizierung und Re-Zertifizierung",
            ],
            [
              "Überwachungsaudit",
              "**Jährlich** während der dreijährigen Laufzeit; Nachweis, dass der Verbund weiterhin den Anforderungen genügt",
            ],
            [
              "Voraudit (optional)",
              "Bei Erstzertifizierung oder wesentlichen Änderungen: stichprobenartige Prüfung einzelner Aspekte, um abzuschätzen, ob ein Zertifizierungsaudit positiv ausgehen könnte",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Jedes Audit hat zwei Phasen: **Phase 1 – Dokumentenprüfung** der Referenzdokumente und **Phase 2 – Umsetzungsprüfung vor Ort** (Angemessenheit, Korrektheit und Wirksamkeit des ISMS).",
        },
        {
          type: "callout",
          variant: "hinweis",
          title: "Ergänzung außerhalb der BSI-Kursquellen",
          text: "Das Curriculum nennt außerdem allgemeine Auditbegriffe, die in den hier verwendeten BSI-Dokumenten nicht erläutert werden: Prozess- und Produktaudits (Prüfung von Abläufen bzw. von Produkteigenschaften) sowie 1st-, 2nd- und 3rd-Party-Audits (interne Audits, Audits durch Kunden bzw. Auftraggeber bei Lieferanten, Audits durch unabhängige Stellen). Grundlage dieser Begriffe ist ISO 19011, die das Zertifizierungsschema im Literaturverzeichnis nennt. Akkreditierte Zertifizierungsstellen müssen ISO/IEC 27006 bzw. ISO/IEC 17021-1 erfüllen. Das BSI-Verfahren selbst ist ein 3rd-Party-Audit mit dem BSI als unabhängiger dritter Instanz.",
        },
      ],
      sources: [
        { doc: "200-1", section: "Kap. 9 Zertifizierung des ISMS", page: 39 },
        { doc: "zert", section: "Kap. 1.4 bis 2.8", page: 6 },
      ],
      quiz: [
        {
          id: "q-t11-l01-1",
          topic: 11,
          level: "basis",
          stem: "Welche Rollen sind laut Zertifizierungsschema am Verfahren beteiligt?",
          options: [
            { text: "Antragsteller", correct: true },
            { text: "Auditor bzw. Auditteamleiter", correct: true },
            { text: "Zertifizierungsstelle", correct: true },
            { text: "Bundesdatenschutzbeauftragte", correct: false },
          ],
          explanation: "Es sind genau drei Rollen beteiligt.",
          source: { doc: "zert", section: "Kap. 2.2", page: 8 },
        },
        {
          id: "q-t11-l01-2",
          topic: 11,
          level: "basis",
          stem: "Aus welchen Phasen besteht jedes Audit im Rahmen der ISO 27001-Zertifizierung auf der Basis von IT-Grundschutz?",
          options: [
            { text: "Phase 1: Dokumentenprüfung", correct: true },
            { text: "Phase 2: Umsetzungsprüfung vor Ort", correct: true },
            { text: "Phase 3: Penetrationstest durch das BSI", correct: false },
            { text: "Phase 0: Schutzbedarfsfeststellung durch das Auditteam", correct: false },
          ],
          explanation: "Jedes Audit besteht aus Dokumentenprüfung und Umsetzungsprüfung vor Ort.",
          source: { doc: "zert", section: "Kap. 2.7", page: 12 },
        },
        {
          id: "q-t11-l01-3",
          topic: 11,
          level: "experte",
          stem: "Ein Auditor hat die zu auditierende Institution vor zwei Jahren beim Aufbau ihres ISMS beraten. Was folgt daraus laut Zertifizierungsschema?",
          options: [
            {
              text: "Die Unabhängigkeit kann gefährdet sein, da ein Zeitraum von drei Jahren betrachtet wird.",
              correct: true,
            },
            {
              text: "Die Zertifizierungsstelle kann die Unabhängigkeitserklärung nicht freigeben.",
              correct: true,
            },
            {
              text: "Ohne freigegebene Unabhängigkeitserklärung darf er im Verfahren nicht eingesetzt werden.",
              correct: true,
            },
            {
              text: "Beratung ist unproblematisch, solange sie unentgeltlich erfolgte.",
              correct: false,
            },
          ],
          explanation:
            "Vorherige Beratung innerhalb von drei Jahren ist ein Beispiel für eine Gefährdung der Unabhängigkeit.",
          source: { doc: "zert", section: "Kap. 2.4", page: 10 },
        },
      ],
    },
    {
      id: "t11-l02",
      title: "Ablauf, Fristen und Zertifikat",
      depth: "I",
      minutes: 30,
      goals: [
        "Den Ablauf vom Antrag bis zur Zertifikatserteilung beschreiben",
        "Die wichtigsten Fristen für Erstzertifizierung, Überwachung und Re-Zertifizierung nennen",
        "Gründe für Aussetzung und Zurückziehung eines Zertifikats kennen",
      ],
      blocks: [
        { type: "heading", text: "Ablauf der Erstzertifizierung" },
        {
          type: "list",
          ordered: true,
          items: [
            "ISMS nach IT-Grundschutz umgesetzt, **Referenzdokumente** liegen vor",
            "**Zertifizierungsantrag** bei der Zertifizierungsstelle – vollständig **mindestens zwei Monate vor Auditbeginn**, schriftlich (qualifizierte elektronische Signatur oder Original-Unterschrift); mit Beschreibung des Informationsverbunds, Firmenprofil, Zeitplanung und Unabhängigkeitserklärungen",
            "Zertifizierungsstelle prüft Vollständigkeit, Konsistenz und **Zertifizierbarkeit** (sinnvolle Abgrenzung), eröffnet das Verfahren und vergibt eine **Zertifizierungskennung** (BSI-IGZ-…) – **erst danach** darf das Audit beginnen",
            "Optional: Voraudit",
            "Phase 1 Dokumentenprüfung; Auditteam entscheidet, ob die Vor-Ort-Prüfung sinnvoll ist",
            "Phase 2 Umsetzungsprüfung vor Ort (stichprobenartig, nach Auditplan)",
            "**Auditbericht** – spätestens vier Monate nach Beginn der Dokumentensichtung; Prüfungen nicht älter als drei Monate bei Übergabe; enthält einen Auditplan mit grober Planung der Überwachungsaudits",
            "Zertifizierungsstelle prüft den Bericht gegen das Auditierungsschema; Nachforderungen müssen **innerhalb eines Monats** erfüllt werden und dürfen höchstens eine Nachbesserung durch den Antragsteller nach sich ziehen; mehrere Nachforderungen an den Auditbericht sind möglich",
            "**Zertifikatserteilung**: Zertifikat, Zertifizierungsreport (z. B. mit Auflagen), Zertifizierungsbutton; Veröffentlichung auf der BSI-Website, sofern nicht widersprochen",
          ],
        },
        {
          type: "callout",
          variant: "merke",
          title: "Laufzeit",
          text: "Ein Zertifikat ist drei Jahre gültig und mit jährlichen Überwachungsaudits verbunden. Wesentliche Änderungen am Verbund (z. B. Standortwechsel, Outsourcing, größere Änderungen im Managementsystem) sind der Zertifizierungsstelle unverzüglich mitzuteilen.",
        },
        { type: "heading", text: "Fristen im Überblick" },
        {
          type: "table",
          headers: ["Situation", "Frist"],
          rows: [
            ["Zertifizierungsantrag", "Vollständig mind. 2 Monate vor Auditbeginn"],
            [
              "Auditbericht Erst-/Re-Zertifizierung",
              "Spätestens 4 Monate nach Beginn der Dokumentensichtung",
            ],
            ["Nachforderungen der Zertifizierungsstelle", "Innerhalb von 1 Monat"],
            [
              "Überwachungsaudit",
              "Beginn frühestens 4 Monate vor Ablauf des 1. bzw. 2. Jahres; Bericht spätestens 2 Monate vorher; Zeitplan und ggf. neue Unabhängigkeitserklärungen mind. 1 Monat vor Auditbeginn; kein neuer Antrag nötig",
            ],
            [
              "Re-Zertifizierung",
              "Neuer Antrag; Sichtung frühestens 4 Monate vor Ablauf; Bericht spätestens 2 Monate vor Ablauf; ein laufendes Verfahren **verlängert die Gültigkeit nicht**",
            ],
          ],
        },
        { type: "heading", text: "Aussetzung und Zurückziehung" },
        {
          type: "table",
          headers: ["Aussetzung (heilbar)", "Zurückziehung (endgültig)"],
          rows: [
            [
              "Überwachungsaudit nicht fristgerecht durchgeführt bzw. Bericht zu spät (Planung bekannt)",
              "Überwachungsaudit wird nicht durchgeführt",
            ],
            [
              "Schwerwiegende Abweichungen nicht fristgerecht behoben, aber in Umsetzung",
              "Gravierende Abweichungen nicht in angemessener Zeit behebbar; Anforderungen nicht mehr erfüllt",
            ],
            [
              "Zertifikat erhält seine Gültigkeit zurück, wenn die Ursachen beseitigt sind",
              "Verstoß gegen Auflagen, Täuschung, nicht behobene Abweichungen ohne Begründung, Verletzung der Meldepflicht von Sicherheitsvorfällen – **keine Reaktivierung**, ggf. neues Verfahren",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Mit ausgesetzten oder zurückgezogenen Zertifikaten darf **nicht geworben** werden. Der Auditbericht richtet sich ausschließlich an Antragsteller und Zertifizierungsstelle und wird vertraulich behandelt. Gegen Bescheide der Zertifizierungsstelle ist der **Widerspruch** möglich; Beschwerden gehen an das zuständige BSI-Referat.",
        },
      ],
      sources: [{ doc: "zert", section: "Kap. 2.3 bis 3", page: 9 }],
      quiz: [
        {
          id: "q-t11-l02-1",
          topic: 11,
          level: "basis",
          stem: "Wie lange ist ein ISO 27001-Zertifikat auf der Basis von IT-Grundschutz gültig?",
          options: [
            { text: "Drei Jahre, verbunden mit jährlichen Überwachungsaudits", correct: true },
            { text: "Ein Jahr", correct: false },
            { text: "Fünf Jahre ohne Überwachung", correct: false },
            { text: "Unbegrenzt", correct: false },
          ],
          explanation: "Die Laufzeit beträgt drei Jahre mit jährlichen Überwachungsaudits.",
          source: { doc: "zert", section: "Kap. 2.9.1", page: 13 },
        },
        {
          id: "q-t11-l02-2",
          topic: 11,
          level: "basis",
          stem: "Wann darf mit der Sichtung der Referenzdokumente bei einer Erstzertifizierung begonnen werden?",
          options: [
            {
              text: "Erst nach Eröffnung des Verfahrens und Mitteilung der Zertifizierungskennung",
              correct: true,
            },
            { text: "Sofort nach Absenden des Antrags", correct: false },
            { text: "Bereits vor Antragstellung, um Zeit zu sparen", correct: false },
            { text: "Erst nach Erteilung des Zertifikats", correct: false },
          ],
          explanation: "Das Audit darf erst nach Mitteilung der Zertifizierungskennung beginnen.",
          source: { doc: "zert", section: "Kap. 2.3", page: 10 },
        },
        {
          id: "q-t11-l02-3",
          topic: 11,
          level: "experte",
          stem: "Ein Unternehmen beantragt die Re-Zertifizierung, das Verfahren ist bei Ablauf des Zertifikats aber noch nicht abgeschlossen. Was gilt?",
          options: [
            {
              text: "Ein laufendes Re-Zertifizierungsverfahren verlängert die Gültigkeit des Zertifikats nicht.",
              correct: true,
            },
            {
              text: "Für eine lückenlose Zertifizierung muss die Re-Zertifizierung vor Ablauf abgeschlossen sein.",
              correct: true,
            },
            { text: "Das Zertifikat verlängert sich automatisch um sechs Monate.", correct: false },
            { text: "Bei einer Re-Zertifizierung ist kein Antrag erforderlich.", correct: false },
          ],
          explanation:
            "Für die Re-Zertifizierung ist stets ein Antrag nötig; sie verlängert die Gültigkeit nicht.",
          source: { doc: "zert", section: "Kap. 2.9.3", page: 14 },
        },
      ],
    },
  ],
};
