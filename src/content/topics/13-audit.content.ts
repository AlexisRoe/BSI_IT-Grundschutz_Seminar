import type { TopicContent } from "../course.types";

/** Themenfeld 13: Vorbereitung auf ein Audit. */
export const topic: TopicContent = {
  topic: 13,
  lessons: [
    {
      id: "t13-l01",
      title: "Audit vorbereiten: Referenzdokumente und Rahmenbedingungen",
      depth: "II",
      minutes: 30,
      goals: [
        "Die Referenzdokumente A.0 bis A.6 und ihre Mindestinhalte benennen",
        "Voraussetzungen der Institution für ein Audit kennen",
        "Die Prinzipien der Berufsethik von Auditoren erläutern",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Mit einem Zertifikat wird bescheinigt, dass **Informationssicherheit ein anerkannter Wert ist**, ein **funktionierendes ISMS** vorhanden ist und **zu einem bestimmten Zeitpunkt ein definiertes Sicherheitsniveau** erreicht wurde. Prüfgrundlage sind ISO 27001, die BSI-Standards 200-1 bis 200-3 und das Kompendium. Voraussetzung ist die Umsetzung der **Standard- oder Kern-Absicherung** mit einer **gültigen Kompendium-Edition** (Versionen und Übergangsfristen regelt die Prüfgrundlage).",
        },
        { type: "heading", text: "Referenzdokumente" },
        {
          type: "table",
          headers: ["Nr.", "Dokument", "Mindestinhalt"],
          rows: [
            [
              "A.0",
              "Richtlinien für Informationssicherheit",
              "Sicherheitsleitlinie; Richtlinien zur Risikoanalyse, zur Lenkung von Dokumenten und Aufzeichnungen, zur internen ISMS-Auditierung und zur Lenkung von Korrektur- und Vorbeugungsmaßnahmen",
            ],
            [
              "A.1",
              "Strukturanalyse",
              "Untersuchungsgegenstand (Mindestgröße), Firmen-/Behördenprofil, **bereinigter Netzplan**, Listen der Geschäftsprozesse, Anwendungen, IT-Systeme, Räume/Gebäude/Standorte, Kommunikationsverbindungen und **Dienstleister**",
            ],
            [
              "A.2",
              "Schutzbedarfsfeststellung",
              "Definition der Kategorien und begründeter Schutzbedarf aller Objektarten",
            ],
            [
              "A.3",
              "Modellierung",
              "Alle Bausteine im Informationsverbund und bei externen Dienstleistern",
            ],
            [
              "A.4",
              "Ergebnis des IT-Grundschutz-Checks",
              "Je Anforderung und Zielobjekt: Umsetzungsstatus, Beschreibung der Umsetzung, Bemerkungen/Begründungen",
            ],
            [
              "A.5",
              "Risikoanalyse",
              "Nach der selbst definierten Richtlinie, z. B. nach BSI-Standard 200-3 oder ISO/IEC 27005",
            ],
            [
              "A.6",
              "Realisierungsplan",
              "Defizite und Risiken als Managementbericht mit Ressourcen und Zeitplan; **durch Unterschrift der Leitung genehmigt**",
            ],
          ],
        },
        {
          type: "callout",
          variant: "merke",
          title: "Basis-Anforderungen im Realisierungsplan",
          text: "Basis-Anforderungen sind uneingeschränkt; für sie ist keine Risikoübernahme möglich. Deshalb können sie nicht im Realisierungsplan (A.6) erscheinen.",
        },
        {
          type: "paragraph",
          text: "Die Dokumente werden **elektronisch** übergeben und zusammen mit einer **Liste der Referenzdokumente** eingereicht, die bei Überwachungsaudits und Re-Zertifizierung fortgeschrieben wird und relevante Änderungen ausweist. Die Referenzdokumente sind **Bestandteil des Auditberichts**. Der Auditor kann vor Ort weitere Dokumente einsehen.",
        },
        { type: "heading", text: "Berufsethik der Auditoren" },
        {
          type: "list",
          items: [
            "**Ethisches Verhalten** – Vertraulichkeit und Diskretion; Institution und Zertifizierungsstelle müssen dem Auditteam vertrauen können",
            "**Fachkompetenz** – nur Aufgaben übernehmen, für die Wissen und Erfahrung vorhanden sind; kontinuierliche Weiterbildung",
            "**Vertrauenswürdigkeit** – keine Offenlegung ohne Befugnis",
            "**Sachliche Darstellung** – wahrheitsgemäß und genau berichten; Ergebnisse wiederholbar",
            "**Nachweise und Nachvollziehbarkeit** – eindeutige Dokumentation und nachvollziehbare Methodik",
            "**Objektivität und Sorgfalt** – ausgewogene Beurteilung, unbeeinflusst von eigenen Interessen oder Dritten",
          ],
        },
        {
          type: "paragraph",
          text: "**Qualifikation**: Audits leiten vom BSI **zertifizierte Auditteamleiter** (Personenzertifizierung). Fehlt Spezialwissen, werden Fachexperten hinzugezogen. Jedes Teammitglied braucht eine freigegebene **Unabhängigkeitserklärung**.",
        },
      ],
      sources: [
        { doc: "audit", section: "Vorwort, Kap. 2.3 und 3", page: 5 },
        { doc: "refdoc", section: "Kap. 2 Referenzdokumente", page: 6 },
        { doc: "faq", section: "Welche möglichen Qualifikationsformen gibt es?", page: 2 },
      ],
      quiz: [
        {
          id: "q-t13-l01-1",
          topic: 13,
          level: "basis",
          stem: "Welche Referenzdokumente muss der Antragsteller für ein Audit bereitstellen?",
          options: [
            { text: "Strukturanalyse (A.1) und Schutzbedarfsfeststellung (A.2)", correct: true },
            {
              text: "Modellierung (A.3) und Ergebnis des IT-Grundschutz-Checks (A.4)",
              correct: true,
            },
            { text: "Risikoanalyse (A.5) und Realisierungsplan (A.6)", correct: true },
            { text: "Die Gehaltsabrechnungen aller Administratoren", correct: false },
          ],
          explanation: "A.0 bis A.6 sind die Referenzdokumente.",
          source: { doc: "audit", section: "Kap. 2.3", page: 9 },
        },
        {
          id: "q-t13-l01-2",
          topic: 13,
          level: "basis",
          stem: "Welche Richtlinien müssen laut den Hinweisen zu den Referenzdokumenten in A.0 mindestens dokumentiert sein?",
          options: [
            { text: "Sicherheitsleitlinie", correct: true },
            { text: "Richtlinie zur Risikoanalyse", correct: true },
            { text: "Richtlinie zur internen ISMS-Auditierung", correct: true },
            {
              text: "Richtlinie zur Lenkung von Korrektur- und Vorbeugungsmaßnahmen",
              correct: true,
            },
          ],
          explanation:
            "Zusätzlich gehört die Richtlinie zur Lenkung von Dokumenten und Aufzeichnungen dazu.",
          source: { doc: "refdoc", section: "Kap. 2.1", page: 6 },
        },
        {
          id: "q-t13-l01-3",
          topic: 13,
          level: "experte",
          stem: "Im Realisierungsplan (A.6) eines Antragstellers steht eine nicht umgesetzte Basis-Anforderung mit der Bemerkung „Risiko von der Geschäftsführung übernommen“. Wie ist das zu bewerten?",
          options: [
            {
              text: "Unzulässig – für Basis-Anforderungen ist keine Risikoübernahme möglich.",
              correct: true,
            },
            { text: "Basis-Anforderungen können nicht im A.6-Dokument erscheinen.", correct: true },
            { text: "Zulässig, wenn die Geschäftsführung unterschreibt.", correct: false },
            {
              text: "Zulässig, wenn die Anforderung zusätzlich auf „entbehrlich“ gesetzt wird.",
              correct: false,
            },
          ],
          explanation:
            "Basis-Anforderungen müssen umgesetzt sein; „entbehrlich“ darf nicht für bewusst nicht erfüllte Anforderungen genutzt werden.",
          source: { doc: "refdoc", section: "Kap. 2.7", page: 10 },
        },
      ],
    },
    {
      id: "t13-l02",
      title: "Auditprozess, Auditplan und Abweichungen",
      depth: "II",
      minutes: 40,
      goals: [
        "Phase 1 und Phase 2 des Audits mit ihren Zielen beschreiben",
        "Die Vorgaben für die Stichprobe von Bausteinen und Standorten anwenden",
        "Empfehlungen, geringfügige und schwerwiegende Abweichungen unterscheiden",
      ],
      blocks: [
        { type: "heading", text: "Phase 1: Dokumentenprüfung" },
        {
          type: "paragraph",
          text: "Der Auditteamleiter verschafft sich ein ausreichendes Verständnis des Informationsverbunds und prüft, ob die Sicherheitskonzeption nach BSI-Standard 200-2 **schlüssig** ist und die **Zertifizierungsfähigkeit** grundsätzlich gegeben ist. Ein Teil kann vor Ort stattfinden, z. B. aus Vertraulichkeitsgründen. Festgestellte Abweichungen und Empfehlungen werden mit Frist mitgeteilt und – auch wenn sie vor Phase 2 behoben sind – **im Auditbericht dokumentiert**. Bei gravierenden Defiziten oder fehlender Mitwirkungsbereitschaft kann der Auditteamleiter das Audit **abbrechen** (Zertifizierungsstelle sofort informieren).",
        },
        { type: "heading", text: "Auditplan und Stichprobe" },
        {
          type: "table",
          headers: ["Vorgabe", "Inhalt"],
          rows: [
            [
              "Zertifizierungsaudit",
              "Mindestens **sechs Bausteine**, darunter zwingend **ISMS.1**",
            ],
            ["Jedes Überwachungsaudit", "**ISMS.1** und mindestens **zwei weitere** Bausteine"],
            [
              "Über die Laufzeit",
              "Alle modellierten Schichten mit je mindestens einem Baustein; mindestens **12 Bausteine**; Stichprobe erweiterbar",
            ],
            ["Outsourcing", "OPS.2.3 bzw. OPS.3.2 zwingend, wenn Dienstleister eingebunden sind"],
            [
              "Auswahl",
              "Bausteine und Zielobjekte **risikoorientiert** wählen und begründen; **fünf Maßnahmen der Risikoanalyse** auditieren",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Welche **Zielobjekte** konkret auditiert werden, sollte der Institution möglichst **nicht vorab** mitgeteilt werden. Die **Themen** nennt der Auditplan, damit Interviewpartner rechtzeitig benannt werden können.",
        },
        {
          type: "example",
          title: "Standort-Stichprobe (IAF MD 1)",
          text: [
            "Zertifizierungsaudit: Quadratwurzel der Standortzahl, aufgerundet. Bei Re-Zertifizierung mit nachweislich effektivem ISMS: × 0,8.",
            "Überwachungsaudit: Quadratwurzel × 0,6, aufgerundet.",
            "18 Standorte → Zertifizierungsaudit 5, Überwachungsaudit 3, Re-Zertifizierung bei effektivem ISMS 4.",
          ],
        },
        {
          type: "paragraph",
          text: "**Remote**: Vor- und Nacharbeiten immer; das Audit zur **Erstzertifizierung** muss (bis auf Vor- und Nacharbeiten) **in Präsenz** stattfinden. Re-Zertifizierungs- und Überwachungsaudits können remote erfolgen, wenn der Antragsteller einverstanden ist, keine nur vor Ort bewertbaren Änderungen vorliegen, der Auditteamleiter das Risiko abschätzt und über die Laufzeit mindestens die Hälfte der berechneten Standorte in Präsenz besucht wird.",
        },
        { type: "heading", text: "Phase 2: Umsetzungsprüfung vor Ort" },
        {
          type: "list",
          items: [
            "Für jeden gewählten Baustein wird **am Zielobjekt** geprüft, ob der im Check dokumentierte Umsetzungsstatus zutrifft – **nicht nur anhand der Papierlage**; technische Aspekte werden von der Administration **demonstriert**.",
            "Umsetzungshinweise sichten: Anforderungen mit diesen oder gleichwertigen Maßnahmen umgesetzt? Keine schwächeren Mechanismen.",
            "Ausgewählte Maßnahmen der Risikoanalyse prüfen; Angaben der Strukturanalyse mit der Realität abgleichen (Betriebssystem, Aufstellungsort).",
            "Begründungen für „entbehrlich“ müssen nachvollziehbar sein.",
            "Alle **MUSS**-Teilanforderungen (Basis und Standard) müssen umgesetzt sein; sie dürfen **nicht in die Risikoübernahme** einfließen.",
            "Bewusst nicht erfüllte Anforderungen (z. B. aus wirtschaftlichen Gründen) erhalten den Status **„nein“** und kommen in den Realisierungsplan – nicht „entbehrlich“. Die Leitung trägt die Risiken per Unterschrift oder elektronischer Freigabe.",
          ],
        },
        { type: "heading", text: "Umgang mit Abweichungen" },
        {
          type: "table",
          headers: ["Feststellung", "Bedeutung", "Folge"],
          rows: [
            [
              "Empfehlung",
              "Nicht bindender Verbesserungsvorschlag, mit Frist zur Prüfung",
              "Fehlende Prüfung kann zur geringfügigen Abweichung werden",
            ],
            [
              "Geringfügige Abweichung",
              "Einzelne Aspekte einer Anforderung nicht ausreichend umgesetzt, wesentliches Ziel aber erreicht; ISMS funktioniert insgesamt",
              "Zertifikat unter Umständen trotzdem möglich; mehrere können zusammen schwerwiegend sein",
            ],
            [
              "Schwerwiegende Abweichung",
              "Effektivität des ISMS oder Sicherheit erheblich gefährdet; Anforderungen nicht oder in wesentlichen Teilen nicht umgesetzt",
              "**Keine Ausstellung oder Aufrechterhaltung** des Zertifikats",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Der **Auditteamleiter** entscheidet über die Einstufung. Alle Feststellungen kommen mit Frist und fortlaufender Nummer in die **Liste der Abweichungen und Empfehlungen**, die schon in Phase 1 beginnt und für den Verbund fortgeschrieben wird. Abweichungen und Empfehlungen aus früheren Audits werden im Rahmen der kontinuierlichen Verbesserung erneut auditiert. Ist die Institution anderer Meinung, kann sie sich schriftlich an die **Zertifizierungsstelle** wenden, die entscheidet.",
        },
      ],
      sources: [{ doc: "audit", section: "Kap. 4.1 bis 4.6", page: 11 }],
      quiz: [
        {
          id: "q-t13-l02-1",
          topic: 13,
          level: "basis",
          stem: "Wie viele Bausteine müssen bei einem Zertifizierungsaudit laut Auditierungsschema mindestens auditiert werden?",
          options: [
            { text: "Mindestens sechs, darunter zwingend ISMS.1", correct: true },
            { text: "Mindestens zwei", correct: false },
            { text: "Alle modellierten Bausteine", correct: false },
            { text: "Genau zwölf", correct: false },
          ],
          explanation:
            "Zertifizierungsaudit: mindestens sechs Bausteine inkl. ISMS.1; über die Laufzeit mindestens zwölf.",
          source: { doc: "audit", section: "Kap. 4.3", page: 12 },
        },
        {
          id: "q-t13-l02-2",
          topic: 13,
          level: "basis",
          stem: "Was ist eine geringfügige Abweichung laut Auditierungsschema?",
          options: [
            {
              text: "Einzelne Aspekte einer Anforderung sind nicht ausreichend umgesetzt, das wesentliche Ziel ist aber realisiert.",
              correct: true,
            },
            { text: "Das ISMS funktioniert insgesamt.", correct: true },
            { text: "Ein Zertifikat ist in jedem Fall ausgeschlossen.", correct: false },
            {
              text: "Mehrere geringfügige Abweichungen können zusammen eine schwerwiegende darstellen.",
              correct: true,
            },
          ],
          explanation: "Bei geringfügigen Abweichungen ist ein Zertifikat unter Umständen möglich.",
          source: { doc: "audit", section: "Kap. 4.6", page: 15 },
        },
        {
          id: "q-t13-l02-3",
          topic: 13,
          level: "experte",
          stem: "Ein Informationsverbund umfasst 9 Standorte. Wie viele Standorte sind beim Zertifizierungsaudit mindestens zu begehen, wie viele beim Überwachungsaudit?",
          options: [
            { text: "Zertifizierungsaudit: 3", correct: true },
            { text: "Überwachungsaudit: 2", correct: true },
            { text: "Zertifizierungsaudit: 9", correct: false },
            { text: "Überwachungsaudit: 3", correct: false },
          ],
          explanation: "√9 = 3; Überwachung: 3 × 0,6 = 1,8, aufgerundet 2.",
          source: { doc: "audit", section: "Kap. 4.3.1", page: 13 },
        },
      ],
    },
    {
      id: "t13-l03",
      title: "Auditbericht, Gesamtvotum und Folgemaßnahmen",
      depth: "II",
      minutes: 25,
      goals: [
        "Inhalt, Verteilung und Vertraulichkeit des Auditberichts beschreiben",
        "Voraudit, Überwachungsaudit und Re-Zertifizierung als Folgemaßnahmen einordnen",
        "Die eigene Institution gezielt auf ein Überwachungsaudit vorbereiten",
      ],
      blocks: [
        { type: "heading", text: "Auditbericht und Gesamtvotum" },
        {
          type: "list",
          items: [
            "Für **jedes** Audit erstellt der Auditteamleiter einen Bericht auf Basis des **gültigen Muster-Auditberichts**; Inhalte des Musters dürfen nicht verändert werden.",
            "Er kann in zwei Schritten entstehen: erst Ergebnisse von Phase 1, dann Ergänzung um Phase 2.",
            "Er richtet sich **ausschließlich an Antragsteller und Zertifizierungsstelle**, wird vertraulich behandelt und **verschlüsselt** übermittelt.",
            "Das **Gesamtvotum** des Auditteamleiters – erfüllt der Verbund die Anforderungen? – ist Grundlage der Entscheidung über das Zertifikat.",
            "Die **Prüfbegleitung** der Zertifizierungsstelle kann mehrfach Nachforderungen stellen; der Auditteamleiter dokumentiert Nachbesserungen und bewertet sie.",
          ],
        },
        { type: "heading", text: "Voraudit" },
        {
          type: "paragraph",
          text: "Der Auditor prüft gezielt einzelne Aspekte stichprobenartig. Das Voraudit darf **höchstens ein Drittel** der Gesamtzeit des Zertifizierungsaudits beanspruchen und **nicht** dazu dienen, die Institution auf später zu prüfende Aspekte vorzubereiten. Alle Prüfungen werden im Auditbericht dokumentiert. Empfiehlt der Auditteamleiter eine **Verschiebung**, ist ein erneutes Voraudit nicht möglich.",
        },
        { type: "heading", text: "Überwachungsaudit" },
        {
          type: "list",
          items: [
            "**Jährlich**, deutlich geringerer Umfang; Nachweis, dass das ISMS aktiv ist und weiterentwickelt wird.",
            "Die Institution stellt eine **Zusammenstellung der wesentlichen Änderungen** bereit und schreibt die Liste der Referenzdokumente fort – geprüft werden nur geänderte Dokumente.",
            "**ISMS.1 wird vollständig auditiert**, mit Schwerpunkt auf Aufrechterhaltung der Informationssicherheit und Managementberichten.",
            "Geprüft wird u. a., ob bei Mängeln Korrekturmaßnahmen ergriffen wurden und ob die Leitung regelmäßig informiert wurde und bewertet hat.",
            "Unterlassene Meldung gravierender Änderungen kann zur **Zurückziehung** des Zertifikats führen.",
          ],
        },
        {
          type: "paragraph",
          text: "Die **Re-Zertifizierung** setzt einen neuen Antrag voraus; die Auditaktivitäten entsprechen einer Erstzertifizierung. Redundante Prüfungen zu früheren Audits sind nur in begründeten, abgestimmten Ausnahmefällen zulässig.",
        },
        {
          type: "example",
          title: "Checkliste zur Vorbereitung (aus Sicht der Institution)",
          text: [
            "Referenzdokumente A.0–A.6 aktuell, versioniert, Liste der Referenzdokumente gepflegt; gültige Kompendium-Edition laut Prüfgrundlage.",
            "Realisierungsplan von der Leitung unterschrieben; keine Basis-Anforderungen und keine MUSS-Teilanforderungen darin.",
            "Begründungen für „entbehrlich“ nachvollziehbar dokumentiert.",
            "Liste der Abweichungen und Empfehlungen aus früheren Audits abgearbeitet.",
            "Interviewpartner und Administration für Demonstrationen am Zielobjekt eingeplant.",
          ],
        },
      ],
      sources: [{ doc: "audit", section: "Kap. 4.7 bis 7", page: 16 }],
      quiz: [
        {
          id: "q-t13-l03-1",
          topic: 13,
          level: "basis",
          stem: "An wen richtet sich der Auditbericht?",
          options: [
            { text: "An den Antragsteller", correct: true },
            { text: "An die Zertifizierungsstelle", correct: true },
            { text: "An die Öffentlichkeit über die BSI-Website", correct: false },
            { text: "An Wettbewerber des Antragstellers", correct: false },
          ],
          explanation:
            "Der Auditbericht richtet sich ausschließlich an Antragsteller und Zertifizierungsstelle.",
          source: { doc: "zert", section: "Kap. 2.11", page: 15 },
        },
        {
          id: "q-t13-l03-2",
          topic: 13,
          level: "basis",
          stem: "Welcher Baustein wird beim Überwachungsaudit laut Auditierungsschema vollständig auditiert?",
          options: [
            { text: "ISMS.1 Sicherheitsmanagement", correct: true },
            { text: "DER.4 Notfallmanagement", correct: false },
            { text: "INF.1 Allgemeines Gebäude", correct: false },
            { text: "SYS.1.1 Allgemeiner Server", correct: false },
          ],
          explanation:
            "ISMS.1 wird bei jedem Audit geprüft und im Überwachungsaudit vollständig auditiert.",
          source: { doc: "audit", section: "Kap. 6", page: 19 },
        },
        {
          id: "q-t13-l03-3",
          topic: 13,
          level: "experte",
          stem: "Welche Aussagen zum Voraudit treffen laut Auditierungsschema zu?",
          options: [
            {
              text: "Es darf höchstens ein Drittel der Gesamtzeit des Zertifizierungsaudits beanspruchen.",
              correct: true,
            },
            {
              text: "Es darf nicht dazu dienen, die Institution auf später zu prüfende Aspekte vorzubereiten.",
              correct: true,
            },
            {
              text: "Nach einer Verschiebung des Audits ist ein erneutes Voraudit möglich.",
              correct: false,
            },
            {
              text: "Alle Prüfungen des Voraudits sind im Auditbericht zu dokumentieren.",
              correct: true,
            },
          ],
          explanation: "Ein erneutes Voraudit nach Verschiebung ist ausgeschlossen.",
          source: { doc: "audit", section: "Kap. 5", page: 18 },
        },
      ],
    },
  ],
};
