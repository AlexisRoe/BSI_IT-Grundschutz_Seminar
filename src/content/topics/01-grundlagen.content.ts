import type { TopicContent } from "../course.types";

/** Themenfeld 1: Grundlagen der Informationssicherheit und rechtliche Rahmenbedingungen. */
export const topic: TopicContent = {
  topic: 1,
  lessons: [
    {
      id: "t01-l01",
      title: "Informationen, Grundwerte und Grundbegriffe",
      depth: "I + II",
      minutes: 35,
      goals: [
        "Erklären, warum Informationen ein schützenswerter Wert sind – unabhängig vom Speicherort",
        "Die drei Grundwerte **Vertraulichkeit, Integrität und Verfügbarkeit** definieren und an Beispielen unterscheiden",
        "Informationssicherheit, IT-Sicherheit, Cyber-Sicherheit und Datenschutz voneinander abgrenzen",
        "Die Begriffskette Bedrohung – Schwachstelle – Gefährdung – Risiko anwenden",
      ],
      blocks: [
        { type: "heading", text: "Warum Informationen geschützt werden müssen" },
        {
          type: "paragraph",
          text: "Informationen sind ein wesentlicher Wert für Unternehmen und Behörden. Die meisten Geschäftsprozesse und Fachaufgaben sind ohne IT-Unterstützung nicht mehr vorstellbar. Unzureichend geschützte Informationen sind ein häufig unterschätzter Risikofaktor, der sogar **existenzbedrohend** werden kann. Ein vernünftiger Informationsschutz ist dabei schon mit verhältnismäßig geringen Mitteln erreichbar.",
        },
        {
          type: "paragraph",
          text: "**Informationssicherheit** hat das Ziel, Informationen jeglicher Art und Herkunft zu schützen. Informationen können auf Papier, in IT-Systemen oder auch in den Köpfen der Menschen gespeichert sein. **IT-Sicherheit** ist eine Teilmenge davon und konzentriert sich auf elektronisch gespeicherte Informationen und deren Verarbeitung. **Cyber-Sicherheit** weitet das Aktionsfeld auf den gesamten Cyber-Raum aus – also alle mit dem Internet und vergleichbaren Netzen verbundene Informationstechnik einschließlich Kommunikation, Anwendungen, Prozessen und verarbeiteten Informationen.",
        },
        {
          type: "callout",
          variant: "merke",
          title: "Ganzheitlich denken",
          text: "Informationssicherheit ist mehr als IT-Sicherheit. Sie hängt stark von infrastrukturellen, organisatorischen und personellen Rahmenbedingungen ab – z. B. Schulung der Mitarbeitenden, Umgang mit Papierdokumenten, Verlässlichkeit von Dienstleistungen.",
        },
        { type: "heading", text: "Die drei Grundwerte (Schutzziele)" },
        {
          type: "definition",
          term: "Vertraulichkeit",
          text: "Schutz vor unbefugter Preisgabe von Informationen. Vertrauliche Daten und Informationen dürfen ausschließlich Befugten in der zulässigen Weise zugänglich sein.",
        },
        {
          type: "definition",
          term: "Integrität",
          text: "Sicherstellung der Korrektheit (Unversehrtheit) von Daten und der korrekten Funktionsweise von Systemen. Bezogen auf Informationen kann ein Integritätsverlust auch bedeuten, dass Angaben zur verfassenden Person verfälscht oder Zeitangaben zur Erstellung manipuliert wurden.",
        },
        {
          type: "definition",
          term: "Verfügbarkeit",
          text: "Dienstleistungen, Funktionen eines IT-Systems, IT-Anwendungen, IT-Netze oder Informationen sind verfügbar, wenn sie von den Anwendenden stets wie vorgesehen genutzt werden können.",
        },
        {
          type: "paragraph",
          text: "Der IT-Grundschutz betrachtet diese **drei Grundwerte**. Es steht jeder Institution frei, bei der Schutzbedarfsfeststellung weitere Grundwerte zu betrachten, wenn das im Einzelfall hilfreich ist. Weitere generische Oberbegriffe sind z. B. **Authentizität, Verbindlichkeit, Zuverlässigkeit, Resilienz und Nichtabstreitbarkeit**.",
        },
        {
          type: "table",
          headers: ["Begriff", "Bedeutung im IT-Grundschutz"],
          rows: [
            [
              "Authentizität",
              "Eine Kommunikationsstelle ist tatsächlich diejenige, die sie vorgibt zu sein; authentische Informationen stammen nachweislich von der angegebenen Quelle.",
            ],
            [
              "Nichtabstreitbarkeit",
              "Versand bzw. Empfang von Nachrichten kann gegenüber Dritten nachgewiesen und nicht nachträglich bestritten werden.",
            ],
            [
              "Verbindlichkeit",
              "Fasst die Sicherheitsziele Authentizität und Nichtabstreitbarkeit zusammen.",
            ],
          ],
          caption: "Weitere Sicherheitsziele laut Glossar des IT-Grundschutz-Kompendiums",
        },
        {
          type: "example",
          title: "Grundwerte im Alltag",
          text: [
            "Ein Angebot wird versehentlich an einen falschen Empfänger gemailt → **Vertraulichkeit** verletzt.",
            "Nach einem missglückten Software-Update werden Daten unbemerkt verändert → **Integrität** verletzt.",
            "Ein Wasserschaden macht den Serverraum unzugänglich → **Verfügbarkeit** verletzt.",
            "Nur ein erkrankter Mitarbeiter kann die Fachanwendung bedienen → ebenfalls ein **Verfügbarkeitsproblem**, obwohl keine Technik ausgefallen ist.",
          ],
        },
        { type: "heading", text: "Von der Bedrohung zum Risiko" },
        {
          type: "list",
          items: [
            "**Bedrohung**: Umstand oder Ereignis, das Verfügbarkeit, Integrität oder Vertraulichkeit von Informationen beeinträchtigen und so einen Schaden verursachen kann (z. B. höhere Gewalt, menschliche Fehlhandlungen, technisches Versagen, vorsätzliche Handlungen).",
            "**Schwachstelle**: sicherheitsrelevanter Fehler eines IT-Systems oder einer Institution – Ursachen können in Konzeption, Algorithmen, Implementierung, Konfiguration, Betrieb oder Organisation liegen.",
            "**Gefährdung**: eine Bedrohung, die konkret über eine Schwachstelle auf ein Objekt einwirkt. Erst die Schwachstelle macht die Bedrohung zur Gefährdung.",
            "**Risiko**: häufig definiert als Kombination aus Häufigkeit eines Schadens und Ausmaß des Schadens. Anders als „Gefährdung“ enthält der Begriff bereits eine **Bewertung**.",
            "**Angriff**: vorsätzliche Form der Gefährdung mit dem Ziel, sich Vorteile zu verschaffen oder Dritte zu schädigen.",
          ],
        },
        {
          type: "example",
          title: "Schadprogramm",
          text: "Alle Internetnutzenden sind durch Schadprogramme **bedroht**. **Gefährdet** ist aber nur, wessen System für diesen Schadprogrammtyp anfällig ist. Mit wirksamem Virenschutz oder einer Konfiguration, die die Ausführung verhindert, entsteht keine Gefährdung.",
        },
        {
          type: "callout",
          variant: "hinweis",
          title: "Datenschutz ≠ Datensicherheit",
          text: "Datenschutz schützt Personen vor Beeinträchtigungen ihrer Persönlichkeitsrechte durch den Umgang mit ihren personenbezogenen Daten. Datensicherheit meint den Schutz von Daten hinsichtlich Vertraulichkeit, Verfügbarkeit und Integrität – der modernere Begriff dafür ist Informationssicherheit.",
        },
      ],
      sources: [
        { doc: "200-1", section: "Kap. 2 Einführung in die Informationssicherheit", page: 8 },
        { doc: "kompendium", section: "IT-Grundschutz – Basis für Informationssicherheit" },
        { doc: "kompendium", section: "Glossar" },
      ],
      quiz: [
        {
          id: "q-t01-l01-1",
          topic: 1,
          level: "basis",
          stem: "Welche Grundwerte betrachtet der IT-Grundschutz standardmäßig?",
          options: [
            { text: "Vertraulichkeit", correct: true },
            { text: "Integrität", correct: true },
            { text: "Verfügbarkeit", correct: true },
            { text: "Nichtabstreitbarkeit", correct: false },
          ],
          explanation:
            "Der IT-Grundschutz betrachtet die drei Grundwerte Vertraulichkeit, Integrität und Verfügbarkeit. Weitere Grundwerte wie Nichtabstreitbarkeit können ergänzend betrachtet werden.",
          source: { doc: "kompendium", section: "Glossar: Grundwerte der Informationssicherheit" },
        },
        {
          id: "q-t01-l01-2",
          topic: 1,
          level: "basis",
          stem: "Nach einem fehlerhaften Update rechnet eine Lohnabrechnung unbemerkt falsche Beträge aus. Welcher Grundwert ist primär verletzt?",
          options: [
            { text: "Vertraulichkeit", correct: false },
            { text: "Integrität", correct: true },
            { text: "Verfügbarkeit", correct: false },
            { text: "Authentizität", correct: false },
          ],
          explanation:
            "Integrität umfasst die Korrektheit von Daten und die korrekte Funktionsweise von Systemen. Die Anwendung ist verfügbar, liefert aber falsche Ergebnisse.",
          source: { doc: "kompendium", section: "Glossar: Integrität" },
        },
        {
          id: "q-t01-l01-3",
          topic: 1,
          level: "basis",
          stem: "Welche Aussagen zu Informationssicherheit und IT-Sicherheit sind richtig?",
          options: [
            { text: "IT-Sicherheit ist eine Teilmenge der Informationssicherheit.", correct: true },
            {
              text: "Informationssicherheit schützt auch Informationen auf Papier und in den Köpfen von Menschen.",
              correct: true,
            },
            {
              text: "Informationssicherheit befasst sich ausschließlich mit Angriffen aus dem Internet.",
              correct: false,
            },
            {
              text: "Cyber-Sicherheit weitet das Aktionsfeld auf den gesamten Cyber-Raum aus.",
              correct: true,
            },
          ],
          explanation:
            "Informationssicherheit schützt Informationen jeglicher Art und Herkunft; IT-Sicherheit konzentriert sich auf elektronisch gespeicherte Informationen, Cyber-Sicherheit auf den Cyber-Raum.",
          source: { doc: "200-1", section: "Kap. 2", page: 8 },
        },
        {
          id: "q-t01-l01-4",
          topic: 1,
          level: "experte",
          stem: "Ein Notebook ohne Festplattenverschlüsselung wird regelmäßig im Auto liegen gelassen. Wie lässt sich die Situation im Sinne des IT-Grundschutz-Glossars einordnen?",
          options: [
            { text: "Diebstahl ist eine Bedrohung.", correct: true },
            { text: "Die fehlende Verschlüsselung ist eine Schwachstelle.", correct: true },
            {
              text: "Durch das Zusammentreffen von Bedrohung und Schwachstelle entsteht eine Gefährdung.",
              correct: true,
            },
            {
              text: "Es liegt bereits ein bewertetes Risiko vor, ohne dass Häufigkeit oder Schadensausmaß betrachtet werden müssen.",
              correct: false,
            },
          ],
          explanation:
            "Trifft eine Bedrohung auf eine Schwachstelle, entsteht eine Gefährdung. Ein Risiko enthält zusätzlich eine Bewertung von Häufigkeit und Schadensausmaß.",
          source: { doc: "kompendium", section: "Glossar: Bedrohung, Gefährdung, Risiko" },
        },
      ],
    },
    {
      id: "t01-l02",
      title: "IT und OT, Security und Safety",
      depth: "I + II",
      minutes: 25,
      goals: [
        "Operational Technology (OT) definieren und von der Office-IT abgrenzen",
        "Erklären, warum in der OT andere Prioritäten bei den Grundwerten gelten",
        "Security (Informationssicherheit) und Safety (funktionale Sicherheit) unterscheiden",
      ],
      blocks: [
        { type: "heading", text: "Was ist OT?" },
        {
          type: "paragraph",
          text: "**Prozessleit- und Automatisierungstechnik (Operational Technology, OT)** ist Hard- und Software, die physische Geräte, Prozesse und Ereignisse in der Institution überwacht und steuert. Dazu zählen insbesondere **industrielle Steuerungssysteme (Industrial Control Systems, ICS)**, aber auch Laborgeräte, Logistiksysteme wie Barcodescanner mit Kleinrechner oder Gebäudeleittechnik.",
        },
        {
          type: "paragraph",
          text: "Der BSI-Standard 200-1 stellt klar: Wenn von „IT-Systemen“ die Rede ist, sind nicht nur klassische Server, Clients oder Netzkomponenten gemeint, sondern auch **ICS und IoT-Komponenten**. Im IT-Grundschutz-Kompendium bildet die Schicht **IND (Industrielle IT)** diese Systeme ab, z. B. IND.1 Prozessleit- und Automatisierungstechnik oder IND.2.7 Safety Instrumented Systems.",
        },
        { type: "heading", text: "Wesentliche Unterschiede zwischen OT und Office-IT" },
        {
          type: "table",
          headers: ["Aspekt", "Office-IT", "OT"],
          rows: [
            [
              "Wichtigste Grundwerte",
              "Verfügbarkeit häufig nachrangig",
              "Oft **hohe Verfügbarkeits- und Integritätsanforderungen**",
            ],
            [
              "Folgen von Störungen",
              "Meist Datenverlust oder Arbeitsausfall; Neustart hilft oft",
              "Mögliche Gefährdung von **Leib, Leben und Umwelt**; meist nicht durch Neustart zu beheben",
            ],
            [
              "Lebenszyklus",
              "Relativ kurz, Updates regelmäßig verfügbar",
              "**Deutlich länger**, teils über den Herstellersupport hinaus; Updates nicht durchgängig verfügbar",
            ],
            [
              "Änderungen",
              "Patchen und Härten sind Routine",
              "Herstellervorgaben oder gesetzliche Anforderungen können Änderungen verhindern; Eingriffe können eine erneute behördliche Freigabe oder Supportverlust nach sich ziehen",
            ],
          ],
          caption: "Nach IT-Grundschutz-Kompendium, Baustein IND.1",
        },
        {
          type: "paragraph",
          text: "Die früher übliche physische Trennung von OT und Office-Netzen ist wegen zunehmender Integrationsanforderungen (z. B. Industrie 4.0, übergreifende Produktionssteuerung) nur noch in Ausnahmefällen umsetzbar. Weil in der OT zunehmend Komponenten aus der Office-IT eingesetzt werden, ist sie inzwischen **ähnlich gefährdet**.",
        },
        { type: "heading", text: "Security und Safety" },
        {
          type: "paragraph",
          text: "**Security** bezeichnet im IT-Grundschutz die Informationssicherheit: den Schutz von Informationen und Systemen vor Beeinträchtigungen der Grundwerte. **Safety** bezeichnet die **funktionale Sicherheit** – also dass eine Anlage keine Gefahr für Menschen und Umwelt verursacht. Der Baustein IND.1 beschreibt ausdrücklich die Gefahr, dass ICS-spezifische Informationssicherheits- und Safety-Aspekte den Informationssicherheitsbeauftragten der Office-IT nicht bekannt sind.",
        },
        {
          type: "callout",
          variant: "merke",
          title: "Security wirkt auf Safety",
          text: "Nicht autorisierte Änderungen an einer OT-Komponente können ihre Funktion beeinflussen und damit auch Auswirkungen auf deren Safety-Funktion haben. Informationssicherheit ist in der OT deshalb eine Voraussetzung für funktionale Sicherheit.",
        },
        {
          type: "example",
          title: "Klärwerk",
          text: "Ein ungepatchter Fernwartungszugang (Security-Schwachstelle) erlaubt die Manipulation von Sollwerten einer Dosierpumpe. Die Folge wäre kein Datenverlust, sondern eine mögliche Gefährdung von Umwelt und Gesundheit (Safety). Ein Neustart behebt die Folgen nicht.",
        },
      ],
      sources: [
        { doc: "200-1", section: "Kap. 1.4 Anwendungsweise", page: 7 },
        {
          doc: "kompendium",
          section: "IND.1 Prozessleit- und Automatisierungstechnik, Kap. 1 und 2",
        },
        { doc: "kompendium", section: "Glossar: Industrial Control System (ICS)" },
      ],
      quiz: [
        {
          id: "q-t01-l02-1",
          topic: 1,
          level: "basis",
          stem: "Welche Systeme zählen laut Baustein IND.1 zur Operational Technology (OT)?",
          options: [
            { text: "Industrielle Steuerungssysteme (ICS)", correct: true },
            { text: "Gebäudeleittechnik", correct: true },
            { text: "Automatisierte Laborgeräte", correct: true },
            { text: "Barcodescanner mit Kleinrechner in der Logistik", correct: true },
          ],
          explanation:
            "IND.1 nennt neben ICS ausdrücklich Laborgeräte, Logistiksysteme wie Barcodescanner mit Kleinrechner und Gebäudeleittechnik als Beispiele.",
          source: { doc: "kompendium", section: "IND.1, Kap. 1.1" },
        },
        {
          id: "q-t01-l02-2",
          topic: 1,
          level: "basis",
          stem: "Welche Aussagen zu Unterschieden zwischen OT und Office-IT treffen laut IT-Grundschutz-Kompendium zu?",
          options: [
            { text: "OT-Systeme haben in der Regel deutlich längere Lebenszyklen.", correct: true },
            {
              text: "Störungen von OT-Systemen lassen sich fast immer durch einen Neustart beheben.",
              correct: false,
            },
            {
              text: "In der OT bestehen oft hohe Verfügbarkeits- und Integritätsanforderungen.",
              correct: true,
            },
            {
              text: "Eine vollständige physische Trennung von OT und Office-IT ist heute der Regelfall.",
              correct: false,
            },
          ],
          explanation:
            "OT hat lange Lebenszyklen und hohe Verfügbarkeits-/Integritätsanforderungen. Störungen sind meist nicht durch Neustart zu beheben, und die physische Trennung ist nur noch in Ausnahmefällen anwendbar.",
          source: { doc: "kompendium", section: "IND.1, Kap. 1.1" },
        },
        {
          id: "q-t01-l02-3",
          topic: 1,
          level: "experte",
          stem: "Ein Hersteller verbietet das Einspielen von Betriebssystem-Updates auf einer Steuerung, da sonst die Zulassung erlischt. Welche Schlussfolgerungen sind im Sinne des IT-Grundschutzes sachgerecht?",
          options: [
            {
              text: "Es handelt sich um eine typische OT-Besonderheit, die bei der Sicherheitskonzeption zu berücksichtigen ist.",
              correct: true,
            },
            {
              text: "Bausteine der Office-IT müssen ohne Anpassung genauso umgesetzt werden.",
              correct: false,
            },
            {
              text: "Ungeplante Änderungen könnten auch die Safety-Funktion der Steuerung beeinträchtigen.",
              correct: true,
            },
            {
              text: "Die Steuerung fällt nicht unter den Begriff IT-System und ist daher nicht zu betrachten.",
              correct: false,
            },
          ],
          explanation:
            "IND.1 nennt Herstellervorgaben und Zulassungen als Grund für eingeschränkte Änderbarkeit. 200-1 schließt ICS ausdrücklich in den Begriff IT-System ein.",
          source: { doc: "kompendium", section: "IND.1, Kap. 1.1 und 2.3" },
        },
      ],
    },
    {
      id: "t01-l03",
      title: "Rechtliche Rahmenbedingungen",
      depth: "I + II",
      minutes: 25,
      goals: [
        "Erklären, warum gesetzliche und vertragliche Vorgaben das ISMS beeinflussen",
        "Die in den BSI-Dokumenten genannten Rechtsgrundlagen (BSIG, IT-Sicherheitsgesetz, BSI-KritisV) einordnen",
        "Den Baustein ORP.5 Compliance Management als Werkzeug für die Umsetzung kennen",
      ],
      blocks: [
        { type: "heading", text: "Vorgaben, die jede Institution beachten muss" },
        {
          type: "paragraph",
          text: "In jeder Institution gibt es gesetzliche, vertragliche und sonstige Vorgaben (z. B. interne Richtlinien), die direkte oder indirekte Auswirkungen auf das Informationssicherheitsmanagement haben. Sie unterscheiden sich nach **Branche, Land und Rechtsform** – eine Behörde unterliegt anderen Regelungen als eine Aktiengesellschaft. Die **Leitungsebene** muss die Einhaltung („Compliance“) durch angemessene Überwachungsmaßnahmen sicherstellen.",
        },
        { type: "heading", text: "Rechtsgrundlagen in den BSI-Dokumenten" },
        {
          type: "table",
          headers: ["Rechtsgrundlage", "Bezug im IT-Grundschutz"],
          rows: [
            [
              "**BSI-Gesetz (BSIG)**",
              "Gesetz über das Bundesamt für Sicherheit in der Informationstechnik. Zusammen mit der **Zertifizierungsverordnung (ZVO)** ist es rechtliche Grundlage des Verfahrens für ISO 27001-Zertifizierungen auf der Basis von IT-Grundschutz.",
            ],
            [
              "**§ 8 Abs. 1 BSIG**",
              "Grundlage der **Mindeststandards des BSI**, die von den dort genannten Stellen der **Bundesverwaltung** umzusetzen sind (z. B. Mindeststandard für Webbrowser).",
            ],
            [
              "**§ 8a Abs. 1 BSIG**",
              "Verpflichtung von Betreibern Kritischer Infrastrukturen zu angemessenen Maßnahmen; das BSI konkretisiert diese in einer eigenen Veröffentlichung.",
            ],
            [
              "**IT-Sicherheitsgesetz, BSI-KritisV, EU-Richtlinie 2008/114/EG**",
              "Vom BSI-Standard 200-4 als regulatorische Anforderungen für Kritische Infrastrukturen genannt, aus denen sich Pflichten zum BCM ergeben können.",
            ],
            [
              "**KonTraG**",
              "Verpflichtet Vorstände größerer Kapitalgesellschaften zu angemessenem Risikomanagement – eine indirekte Begründung für Notfallvorsorge.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "hinweis",
          title: "Prüfungsrelevanz",
          text: "Die BSI-Dokumente gehen nicht auf einzelne Paragrafen im Detail ein. Prüfungsrelevant ist vor allem, dass gesetzliche, vertragliche und branchenspezifische Vorgaben identifiziert und im ISMS berücksichtigt werden müssen – und welche Rolle BSIG, IT-Sicherheitsgesetz und KRITIS-Regelungen grundsätzlich spielen.",
        },
        { type: "heading", text: "Umsetzung mit ORP.5 Compliance Management" },
        {
          type: "paragraph",
          text: "Der Baustein **ORP.5 Compliance Management (Anforderungsmanagement)** ist **einmal für den gesamten Informationsverbund** anzuwenden. Er beschreibt, wie sich Zuständige einen Überblick über die relevanten Anforderungen verschaffen. Auf konkrete Gesetze geht er bewusst nicht ein.",
        },
        {
          type: "list",
          items: [
            "**ORP.5.A1 Identifikation der Rahmenbedingungen (B)** – gesetzliche, vertragliche und sonstige Vorgaben ermitteln und dokumentieren.",
            "**ORP.5.A2 Beachtung der Rahmenbedingungen (B)** – die Vorgaben bei Planung und Betrieb berücksichtigen.",
            "**ORP.5.A4 Konzeption und Organisation des Compliance Managements (S)**.",
            "**ORP.5.A8 Regelmäßige Überprüfungen des Compliance Managements (S)**.",
          ],
        },
        {
          type: "example",
          title: "Cloud-Nutzung",
          text: "Viele Cloud-Dienstleistende bieten ihre Services international an und unterliegen anderen nationalen Gesetzen. Wer nur auf niedrige Kosten schaut, schätzt rechtliche Rahmenbedingungen wie Datenschutz, Informationspflichten, Insolvenzrecht, Haftung oder den Informationszugriff durch Dritte leicht falsch ein (Gefährdungslage ORP.5).",
        },
        {
          type: "praxis",
          title: "NIS-2-Umsetzung in Deutschland",
          text: 'Mit dem NIS-2-Umsetzungs- und Cybersicherheitsstärkungsgesetz wurde das BSIG umfassend neu gefasst. Deutlich mehr Unternehmen ("wichtige" und "besonders wichtige Einrichtungen") unterliegen nun Pflichten zu Risikomanagementmaßnahmen, Registrierung und Meldung erheblicher Sicherheitsvorfälle; Geschäftsleitungen tragen eine ausdrückliche Verantwortung. Die IT-Grundschutz-Methodik bleibt ein anerkannter Weg, solche Anforderungen strukturiert umzusetzen.',
          source: {
            label: "BSI: NIS-2 – was Unternehmen jetzt wissen müssen",
            url: "https://www.bsi.bund.de/DE/Themen/Regulierte-Wirtschaft/NIS-2-regulierte-Unternehmen/nis-2-regulierte-unternehmen_node.html",
            date: "2026",
          },
        },
      ],
      sources: [
        { doc: "zert", section: "Vorwort", page: 3 },
        { doc: "kompendium", section: "ORP.5 Compliance Management (Anforderungsmanagement)" },
        {
          doc: "kompendium",
          section: "OPS.1.1.2, Kap. 4.1 (§ 8a BSIG); APP.1.2, Kap. 4.1 (§ 8 BSIG)",
        },
        { doc: "200-4", section: "Kap. 3.2 Zielsetzung", page: 55 },
      ],
      quiz: [
        {
          id: "q-t01-l03-1",
          topic: 1,
          level: "basis",
          stem: "Was sind laut Zertifizierungsschema die rechtlichen Grundlagen des Verfahrens für ISO 27001-Zertifizierungen auf der Basis von IT-Grundschutz?",
          options: [
            { text: "Das BSI-Gesetz (BSIG)", correct: true },
            { text: "Die Zertifizierungsverordnung zum BSI-Gesetz (ZVO)", correct: true },
            {
              text: "Das Gesetz zur Kontrolle und Transparenz im Unternehmensbereich (KonTraG)",
              correct: false,
            },
            { text: "Die Betriebssicherheitsverordnung (BetrSichV)", correct: false },
          ],
          explanation:
            "Das Zertifizierungsschema nennt BSIG und ZVO als rechtliche Grundlagen des Verfahrens.",
          source: { doc: "zert", section: "Vorwort", page: 3 },
        },
        {
          id: "q-t01-l03-2",
          topic: 1,
          level: "basis",
          stem: "Welche Aussagen zum Baustein ORP.5 Compliance Management treffen zu?",
          options: [
            {
              text: "Er ist für den gesamten Informationsverbund einmal anzuwenden.",
              correct: true,
            },
            {
              text: "Er listet die konkret einzuhaltenden Gesetze für jede Branche auf.",
              correct: false,
            },
            {
              text: "Die Identifikation der Rahmenbedingungen ist eine Basis-Anforderung.",
              correct: true,
            },
            {
              text: "Für die Einhaltung der Vorgaben ist allein der IT-Betrieb verantwortlich.",
              correct: false,
            },
          ],
          explanation:
            "ORP.5 wird einmal auf den Informationsverbund angewandt, geht nicht auf konkrete Gesetze ein und enthält ORP.5.A1 als Basis-Anforderung. Die Leitungsebene muss die Einhaltung sicherstellen.",
          source: { doc: "kompendium", section: "ORP.5, Kap. 1 und 3.1" },
        },
        {
          id: "q-t01-l03-3",
          topic: 1,
          level: "basis",
          stem: "Wer muss nach ORP.5 die Einhaltung gesetzlicher und vertraglicher Vorgaben durch angemessene Überwachungsmaßnahmen sicherstellen?",
          options: [
            { text: "Die Leitungsebene der Institution", correct: true },
            { text: "Ausschließlich externe Auditoren", correct: false },
            { text: "Jede einzelne Fachabteilung ohne zentrale Steuerung", correct: false },
            { text: "Das BSI", correct: false },
          ],
          explanation:
            "Die Leitungsebene muss die Compliance durch angemessene Überwachung sicherstellen.",
          source: { doc: "kompendium", section: "ORP.5, Kap. 1.1" },
        },
      ],
    },
  ],
};
