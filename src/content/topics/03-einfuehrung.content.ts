import type { TopicContent } from "../course.types";

/** Themenfeld 3: Einführung IT-Grundschutz. */
export const topic: TopicContent = {
  topic: 3,
  lessons: [
    {
      id: "t03-l01",
      title: "Bestandteile des IT-Grundschutzes und der Sicherheitsprozess",
      depth: "II",
      minutes: 45,
      goals: [
        "Die Komponenten eines ISMS nach BSI-Standard 200-1 benennen",
        "Die Bestandteile des IT-Grundschutzes und das Schichtenmodell des Kompendiums benennen",
        "Die Phasen des Sicherheitsprozesses nach BSI-Standard 200-2 in die richtige Reihenfolge bringen",
        "Den Zweck eines Sicherheitskonzepts erklären",
        "Zweck und Aufbau eines Klassifikationsschemas für Informationen erläutern",
      ],
      blocks: [
        { type: "heading", text: "Komponenten eines ISMS" },
        {
          type: "paragraph",
          text: "Ein **Informationssicherheitsmanagementsystem (ISMS)** ist der Teil des Managementsystems, mit dem die Leitungsebene die Informationssicherheit nachvollziehbar lenkt: planen, einsetzen, durchführen, überwachen und verbessern. Einzelne technische Maßnahmen ohne diesen Rahmen bleiben Stückwerk. Nach BSI-Standard 200-1 gehören zu einem ISMS vier grundlegende Komponenten:",
        },
        {
          type: "list",
          items: [
            "**Managementprinzipien**, z. B. Verantwortung der Leitung, Ziele, Kommunikation, Erfolgskontrolle",
            "**Ressourcen**: Budget, Zeit, Technik",
            "**Mitarbeiter**: alle Beschäftigten, nicht nur die Sicherheitsorganisation",
            "**Sicherheitsprozess** mit der **Leitlinie** (Sicherheitsziele und Strategie), dem **Sicherheitskonzept** und der **Sicherheitsorganisation**",
          ],
        },
        {
          type: "paragraph",
          text: "Die **Sicherheitsstrategie** gibt die Leitungsebene vor; ihre Kernaspekte stehen in der Leitlinie. Sicherheitskonzept und Sicherheitsorganisation sind die Werkzeuge, mit denen die Strategie umgesetzt wird.",
        },
        { type: "heading", text: "Elemente des IT-Grundschutzes" },
        {
          type: "paragraph",
          text: "Der IT-Grundschutz kombiniert die **Vorgehensweisen** des BSI-Standards 200-2 mit dem **IT-Grundschutz-Kompendium**, in dem Sicherheitsanforderungen nach dem **Stand der Technik** formuliert sind. Er verfolgt einen **ganzheitlichen Ansatz** aus organisatorischen, personellen, infrastrukturellen und technischen Anforderungen.",
        },
        {
          type: "table",
          headers: ["Vorgehensweise", "Erreichtes Sicherheitsniveau"],
          rows: [
            [
              "Standard-Absicherung",
              "Angemessen und ausreichend für den **normalen Schutzbedarf**",
            ],
            [
              "Basis-Absicherung",
              "Deutlich unter der Standard-Absicherung, aber eine gute Grundlage für **Einsteiger**",
            ],
            [
              "Kern-Absicherung",
              "**Hochschutzbedürftige** Informationen und Geschäftsprozesse werden vorrangig geschützt",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Die Bausteine sind in **prozessorientierte** und **systemorientierte** Bausteine aufgeteilt und in ein **Schichtenmodell** einsortiert:",
        },
        {
          type: "table",
          headers: ["Prozess-Bausteine", "System-Bausteine"],
          rows: [
            ["ISMS – Sicherheitsmanagement", "INF – Infrastruktur"],
            ["ORP – Organisation und Personal", "NET – Netze und Kommunikation"],
            ["CON – Konzepte und Vorgehensweisen", "SYS – IT-Systeme"],
            ["OPS – Betrieb", "APP – Anwendungen"],
            ["DER – Detektion und Reaktion", "IND – Industrielle IT"],
          ],
        },
        {
          type: "callout",
          variant: "merke",
          title: "Stand der Technik",
          text: "Die Basis- und Standard-Anforderungen des Kompendiums stellen zusammengenommen den Stand der Technik dar. Sie müssen für eine Zertifizierung nach ISO 27001 auf der Basis von IT-Grundschutz erfüllt werden.",
        },
        { type: "heading", text: "Phasen des Sicherheitsprozesses" },
        {
          type: "list",
          ordered: true,
          items: [
            "**Initiierung des Sicherheitsprozesses**: Übernahme der Verantwortung durch die Leitungsebene, Konzeption und Planung, Bereitstellung von Ressourcen, Entscheidung für eine Vorgehensweise",
            "**Erstellung der Leitlinie** zur Informationssicherheit",
            "**Aufbau einer geeigneten Organisationsstruktur** für das Informationssicherheitsmanagement",
            "**Erstellung einer Sicherheitskonzeption**",
            "**Umsetzung der Sicherheitskonzeption**",
            "**Aufrechterhaltung und kontinuierliche Verbesserung**",
            "**Fortentwicklung des ISMS**, z. B. Erweiterung der gewählten Vorgehensweise",
          ],
        },
        {
          type: "paragraph",
          text: "Einige Phasen können **parallel** laufen, z. B. Konzeption und Planung gleichzeitig mit dem Aufbau der Sicherheitsorganisation; vorgezogene Phasen müssen dann zeitnah aktualisiert werden. Viele kleine Schritte und ein langfristiger, kontinuierlicher Verbesserungsprozess sind oft erfolgversprechender als die Standard-Absicherung „in einem großen Schritt“.",
        },
        { type: "heading", text: "Das Sicherheitskonzept" },
        {
          type: "paragraph",
          text: "Ein **Sicherheitskonzept** dient zur Umsetzung der Sicherheitsstrategie und beschreibt die geplante Vorgehensweise, um die gesetzten Sicherheitsziele zu erreichen. Es ist das **zentrale Dokument im Sicherheitsprozess** – jede konkrete Sicherheitsmaßnahme muss sich darauf zurückführen lassen. Leitlinie und Sicherheitsorganisation definieren den Prozess auf **strategischer** Ebene, die Sicherheitskonzeption führt ihn auf **operativer** Ebene fort.",
        },
        {
          type: "paragraph",
          text: "Kern der Sicherheitskonzeption ist ein **Soll-Ist-Vergleich** zwischen den Anforderungen der relevanten Bausteine und den bereits realisierten Maßnahmen. Fehlende oder unzureichend erfüllte Anforderungen zeigen die Sicherheitsdefizite. **Nur bei signifikant höherem Schutzbedarf** ist zusätzlich eine Risikoanalyse (BSI-Standard 200-3) durchzuführen.",
        },
        { type: "heading", text: "Klassifikation von Informationen" },
        {
          type: "paragraph",
          text: "Informationen lassen sich nur angemessen schützen, wenn ihre Bedeutung für die Institution klar ist. Dafür beschreibt ein **Klassifikationsschema**, welche Stufen der Wertigkeit es gibt und wie sie voneinander abgegrenzt sind. Es soll so einfach sein, dass alle Mitarbeitenden daraus für jede Art von Information die richtige Einstufung ableiten können. Naheliegend ist eine Klassifikation entlang der **Grundwerte**:",
        },
        {
          type: "table",
          headers: ["Grundwert", "Typische Abstufung (Beispiel aus 200-2)"],
          rows: [
            ["Vertraulichkeit", "offen – intern – vertraulich – streng vertraulich"],
            [
              "Verfügbarkeit",
              "tolerierbare Dauer bis zur Wiederherstellung, z. B. eine Stunde, ein Tag, eine Woche, ein Monat",
            ],
            ["Integrität", "z. B. essenziell – wichtig – normal (schwieriger abzugrenzen)"],
          ],
        },
        {
          type: "list",
          items: [
            "Zum Einstieg, etwa bei der Basis-Absicherung, kann eine **zweistufige** Klassifikation genügen: intern und öffentlich. Dann werden nur die zur Veröffentlichung vorgesehenen Informationen als „offen“ gekennzeichnet.",
            "Ideal ist eine **Kennzeichnung schon bei der Entstehung**. Schwierig ist weniger der Aufbau des Schemas als die konsequente, einheitliche Anwendung im Betrieb.",
            "Die Einstufung kann sich im **Lebenszyklus** einer Information ändern.",
            "Für den Klassifikationsprozess braucht es mindestens eine **verantwortliche Rolle** und die Rollen derer, die ihn einhalten.",
            "Nebeneffekt: Beim Klassifizieren fallen überflüssige und veraltete Daten auf.",
          ],
        },
        {
          type: "callout",
          variant: "merke",
          title: "Klassifikation und Schutzbedarf",
          text: "Die Klassifikation ist eine wesentliche Voraussetzung, um später angemessene Sicherheitsmaßnahmen auszuwählen. Mehr Stufen oder zusätzliche Kriterien machen das Schema genauer, aber schwerer anwendbar und schwerer mit anderen Institutionen abzustimmen.",
        },
      ],
      sources: [
        {
          doc: "200-1",
          section: "Kap. 3.1 Komponenten eines Managementsystems für Informationssicherheit",
          page: 15,
        },
        { doc: "200-2", section: "Kap. 2.4 Elemente des IT-Grundschutzes", page: 12 },
        {
          doc: "200-2",
          section: "Kap. 2.6 Übersicht über den Informationssicherheitsprozess",
          page: 14,
        },
        { doc: "200-2", section: "Kap. 2.7 Anwendung des IT-Grundschutz-Kompendiums", page: 17 },
        { doc: "kompendium", section: "Glossar: Sicherheitskonzept" },
        { doc: "200-2", section: "Kap. 5.1 Klassifikation von Informationen", page: 52 },
      ],
      quiz: [
        {
          id: "q-t03-l01-1",
          topic: 3,
          level: "basis",
          stem: "Welche Schichten des Kompendiums enthalten prozessorientierte Bausteine?",
          options: [
            { text: "ORP", correct: true },
            { text: "DER", correct: true },
            { text: "NET", correct: false },
            { text: "OPS", correct: true },
          ],
          explanation:
            "Prozess-Schichten: ISMS, ORP, CON, OPS, DER. NET gehört zu den System-Schichten.",
          source: { doc: "200-2", section: "Kap. 2.4", page: 13 },
        },
        {
          id: "q-t03-l01-2",
          topic: 3,
          level: "basis",
          stem: "Wann ist im Rahmen der Sicherheitskonzeption nach IT-Grundschutz zusätzlich eine Risikoanalyse durchzuführen?",
          options: [
            { text: "Grundsätzlich für jedes Zielobjekt", correct: false },
            { text: "Nur bei signifikant höherem Schutzbedarf", correct: true },
            { text: "Ausschließlich bei der Basis-Absicherung", correct: false },
            { text: "Nie, da die Bausteine alle Risiken abdecken", correct: false },
          ],
          explanation:
            "Nur bei signifikant höherem Schutzbedarf ist zusätzlich eine Risikoanalyse nach 200-3 erforderlich.",
          source: { doc: "200-2", section: "Kap. 2.6", page: 16 },
        },
        {
          id: "q-t03-l01-3",
          topic: 3,
          level: "experte",
          stem: "Welche Aussagen zur Reihenfolge der Phasen im Sicherheitsprozess treffen laut BSI-Standard 200-2 zu?",
          options: [
            { text: "Die Leitlinie wird vor der Sicherheitskonzeption erstellt.", correct: true },
            {
              text: "Konzeption und Planung können parallel zum Aufbau der Sicherheitsorganisation erfolgen.",
              correct: true,
            },
            {
              text: "Die Umsetzung der Sicherheitskonzeption beginnt vor der Entscheidung für eine Vorgehensweise.",
              correct: false,
            },
            {
              text: "Bei paralleler Durchführung müssen vorgezogene Phasen zeitnah aktualisiert werden.",
              correct: true,
            },
          ],
          explanation:
            "Die Vorgehensweise wird in der Initiierung gewählt; parallele Phasen sind möglich, müssen aber nachgezogen werden.",
          source: { doc: "200-2", section: "Kap. 2.6", page: 15 },
        },
        {
          id: "q-t03-l01-4",
          topic: 3,
          level: "basis",
          stem: "Welche Komponenten gehören nach BSI-Standard 200-1 zu einem ISMS?",
          options: [
            { text: "Managementprinzipien", correct: true },
            { text: "Ressourcen und Mitarbeiter", correct: true },
            {
              text: "Ein Sicherheitsprozess mit Leitlinie, Sicherheitskonzept und -organisation",
              correct: true,
            },
            { text: "Ein ISO 27001-Zertifikat", correct: false },
          ],
          explanation:
            "Managementprinzipien, Ressourcen, Mitarbeiter und der Sicherheitsprozess bilden das ISMS. Ein Zertifikat ist ein möglicher Nachweis, keine Komponente.",
          source: { doc: "200-1", section: "Kap. 3.1", page: 15 },
        },
        {
          id: "q-t03-l01-5",
          topic: 3,
          level: "basis",
          stem: "Welche Aussagen zur Klassifikation von Informationen nach BSI-Standard 200-2 treffen zu?",
          options: [
            {
              text: "Das Klassifikationsschema sollte einfach verständlich und leicht anwendbar sein.",
              correct: true,
            },
            {
              text: "Je mehr Stufen und Kriterien, desto besser lässt sich das Schema im Alltag anwenden.",
              correct: false,
            },
            {
              text: "Für den Einstieg kann eine zweistufige Klassifikation (intern/öffentlich) ausreichen.",
              correct: true,
            },
            {
              text: "Eine einmal vergebene Einstufung gilt für den gesamten Lebenszyklus der Information.",
              correct: false,
            },
          ],
          explanation:
            "Ein einfaches Schema wird eher konsequent angewendet; zwei Stufen können anfangs genügen. Die Einstufung kann sich im Lebenszyklus ändern.",
          source: { doc: "200-2", section: "Kap. 5.1", page: 53 },
        },
      ],
    },
    {
      id: "t03-l02",
      title: "Rollen, Verantwortung und Aufgaben",
      depth: "II",
      minutes: 40,
      goals: [
        "Die Verantwortung der Institutionsleitung von der delegierten Aufgabe des ISB unterscheiden",
        "Die Vorbildfunktion der Leitungsebene begründen",
        "Aufgaben, Anforderungsprofil und organisatorische Einordnung des ISB beschreiben",
        "IS-Management-Team, Bereichs-/Projekt-ISB, ICS-ISB, IS-Koordinierungsausschuss und Datenschutzbeauftragte voneinander abgrenzen",
      ],
      blocks: [
        { type: "heading", text: "Institutionsleitung" },
        {
          type: "paragraph",
          text: "Die oberste Leitungsebene muss den Sicherheitsprozess **initiieren, steuern und kontrollieren**. Sie entscheidet über den Umgang mit Risiken und stellt die Ressourcen bereit. Die **Verantwortung für Informationssicherheit verbleibt bei der Leitungsebene**; die operative Aufgabe wird typischerweise an eine oder einen **Informationssicherheitsbeauftragten (ISB)** delegiert.",
        },
        {
          type: "paragraph",
          text: "Zu den Managementprinzipien gehört die **Vorbildfunktion**: Die Leitungsebene beachtet selbst alle Sicherheitsregeln, nimmt an Schulungen teil und unterstützt andere Führungskräfte darin, ebenfalls Vorbild zu sein. Das Kompendium fordert in der Basis-Anforderung **ISMS.1.A1**, dass die Institutionsleitung Informationssicherheit **vorlebt**. Regeln, die „oben“ nicht gelten, werden auch sonst nicht ernst genommen.",
        },
        {
          type: "callout",
          variant: "merke",
          title: "Drei Grundregeln für Rollen",
          text: "1. Die Gesamtverantwortung verbleibt bei der Leitungsebene. 2. Mindestens eine Person (typischerweise der ISB) fördert und koordiniert den Prozess. 3. Jeder Mitarbeitende ist für seine Aufgabe ebenso wie für die Informationssicherheit am Arbeitsplatz verantwortlich.",
        },
        { type: "heading", text: "Informationssicherheitsbeauftragte (ISB)" },
        {
          type: "list",
          items: [
            "Hauptaufgabe: die Leitung bei Fragen der Informationssicherheit **beraten und bei der Umsetzung unterstützen**.",
            "Den Sicherheitsprozess steuern, die Leitung bei der **Leitlinie** unterstützen, Erstellung von **Sicherheitskonzept, Notfallvorsorgekonzept** und Richtlinien koordinieren.",
            "Realisierung von Maßnahmen initiieren und überprüfen, an Leitung und IS-Management-Team **berichten**, sicherheitsrelevante Projekte koordinieren.",
            "**Sicherheitsvorfälle untersuchen**, Sensibilisierung und Schulungen initiieren und koordinieren.",
            "Bei allen größeren Projekten mit Auswirkungen auf die Informationsverarbeitung **beteiligt** werden.",
          ],
        },
        {
          type: "paragraph",
          text: "**Einordnung**: Empfohlen ist eine **Stabsstelle**, direkt der Leitungsebene zugeordnet und weisungsfrei, mit **direktem und jederzeitigem Vorspracherecht**. Der ISB sollte **nicht der IT-Abteilung** zugeordnet sein: Sonst wird Informationssicherheit leicht auf IT-Absicherung reduziert, und es drohen Interessenkonflikte – etwa wenn ein aktiver Administrator zugleich ISB ist. Eine **Personalunion mit dem Datenschutzbeauftragten** ist grundsätzlich möglich, wenn Schnittstellen klar definiert, direkte Berichtswege vorhanden und ausreichende Ressourcen gesichert sind. Auch der ISB benötigt eine qualifizierte **Vertretung**.",
        },
        { type: "heading", text: "Weitere Rollen der IS-Organisation" },
        {
          type: "table",
          headers: ["Rolle", "Aufgaben und Merkmale"],
          rows: [
            [
              "IS-Management-Team",
              "Unterstützt den ISB; bestimmt Sicherheitsziele und -strategien, entwickelt die Leitlinie, überprüft deren Umsetzung, wirkt am Sicherheitskonzept mit, prüft die Wirksamkeit der Maßnahmen, konzipiert Schulungsprogramme. Minimal: ISB und Vertretung.",
            ],
            [
              "Bereichs-ISB",
              "Verantwortlich für die Sicherheitsbelange eines Bereichs (z. B. Abteilung, Außenstelle); muss Aufgaben und Abläufe dort gut kennen.",
            ],
            [
              "Projekt-ISB",
              "Klärt den Sicherheitsbedarf großer Projekte. Die **Verantwortung liegt immer bei der Projektleitung bzw. Leitungsebene**.",
            ],
            [
              "Beauftragte für IT-Sicherheit",
              "In großen Institutionen; sorgen im IT-Betrieb für die technische Umsetzung der Vorgaben des ISB.",
            ],
            [
              "ICS-ISB",
              "Verantwortlich für Informationssicherheit im Bereich industrieller Steuerung; **Mitglied im IS-Management-Team** und im IS-Koordinierungsausschuss; eng mit dem ISB verzahnt; berücksichtigt Safety und Security.",
            ],
            [
              "IS-Koordinierungsausschuss",
              "**Keine Dauereinrichtung**, bei Bedarf einberufen; koordiniert IS-Management-Team, Fachverantwortliche, Sicherheitsbeauftragte und Leitung. Mindestens: IT-Verantwortliche, ISB, Vertretung der Anwender; sinnvoll auch Datenschutzbeauftragte und ICS-ISB.",
            ],
            [
              "Datenschutzbeauftragte",
              "Begleiten alle Aspekte des Datenschutzes, arbeiten eng mit dem ISB zusammen, sind weisungsunabhängig und berichten direkt an die Leitung.",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Die personelle Ausgestaltung richtet sich nach **Größe, Ressourcen und angestrebtem Sicherheitsniveau**: In kleinen Institutionen nimmt der ISB alle Aufgaben wahr; in mittelgroßen können IS-Management-Team und ISB zusammengefasst sein.",
        },
        {
          type: "example",
          title: "Rollenkonflikt",
          text: "Die Leitung von Rheintal Präzision möchte den Leiter der IT zum ISB ernennen, „weil er die Systeme am besten kennt“. Nach 200-2 ist davon abzuraten: Er müsste als ISB gegebenenfalls Entscheidungen widersprechen, die er als IT-Leiter selbst getroffen hat oder die sein Fachvorgesetzter favorisiert.",
        },
      ],
      sources: [
        {
          doc: "200-2",
          section: "Kap. 3.1 Übernahme von Verantwortung durch die Leitungsebene",
          page: 20,
        },
        { doc: "200-2", section: "Kap. 4 Organisation des Sicherheitsprozesses", page: 36 },
        { doc: "200-2", section: "Kap. 4.4 bis 4.9", page: 40 },
        {
          doc: "200-1",
          section: "Kap. 4.1 Verantwortung der Leitungsebene, 6. Vorbildfunktion",
          page: 22,
        },
        { doc: "kompendium", section: "ISMS.1.A1 Übernahme der Gesamtverantwortung" },
      ],
      quiz: [
        {
          id: "q-t03-l02-1",
          topic: 3,
          level: "basis",
          stem: "Bei wem verbleibt nach BSI-Standard 200-2 die Verantwortung für die Informationssicherheit?",
          options: [
            { text: "Bei der obersten Leitungsebene", correct: true },
            { text: "Beim Informationssicherheitsbeauftragten", correct: false },
            { text: "Beim IT-Betrieb", correct: false },
            { text: "Beim IS-Koordinierungsausschuss", correct: false },
          ],
          explanation:
            "Die Aufgabe wird an den ISB delegiert, die Verantwortung verbleibt bei der Leitungsebene.",
          source: { doc: "200-2", section: "Kap. 3.1", page: 20 },
        },
        {
          id: "q-t03-l02-2",
          topic: 3,
          level: "basis",
          stem: "Welche Aussagen zur organisatorischen Einordnung des ISB entsprechen den Empfehlungen des BSI-Standards 200-2?",
          options: [
            { text: "Einrichtung als Stabsstelle direkt bei der Leitungsebene", correct: true },
            { text: "Direktes und jederzeitiges Vorspracherecht bei der Leitung", correct: true },
            {
              text: "Zuordnung zur IT-Abteilung, um Nähe zu den Systemen sicherzustellen",
              correct: false,
            },
            { text: "Wahrnehmung der Rolle durch einen aktiven Administrator", correct: false },
          ],
          explanation:
            "Eine Zuordnung zur IT oder Personalunion mit einem Administrator führt häufig zu Interessenkonflikten.",
          source: { doc: "200-2", section: "Kap. 4.4", page: 42 },
        },
        {
          id: "q-t03-l02-3",
          topic: 3,
          level: "basis",
          stem: "Welche Aussagen zum IS-Koordinierungsausschuss treffen zu?",
          options: [
            { text: "Er ist in der Regel keine Dauereinrichtung.", correct: true },
            {
              text: "Mindestens IT-Verantwortliche, ISB und Vertretung der Anwender sollten vertreten sein.",
              correct: true,
            },
            {
              text: "Er trägt die Gesamtverantwortung für die Informationssicherheit.",
              correct: false,
            },
            { text: "Ein vorhandener ICS-ISB sollte ebenfalls vertreten sein.", correct: true },
          ],
          explanation:
            "Der Ausschuss koordiniert bei Bedarf; die Gesamtverantwortung liegt bei der Leitungsebene.",
          source: { doc: "200-2", section: "Kap. 4.8", page: 46 },
        },
        {
          id: "q-t03-l02-4",
          topic: 3,
          level: "experte",
          stem: "In einem großen Digitalisierungsprojekt wird eine Projekt-Sicherheitsbeauftragte benannt. Welche Aussagen sind korrekt?",
          options: [
            {
              text: "Die Verantwortung für die Informationssicherheit im Projekt liegt bei der Projektleitung bzw. Leitungsebene.",
              correct: true,
            },
            {
              text: "Die Projektleitung muss die erforderlichen Ressourcen für Informationssicherheit einplanen.",
              correct: true,
            },
            {
              text: "Die Projekt-Sicherheitsbeauftragte kann Mitglied des IS-Management-Teams sein.",
              correct: true,
            },
            {
              text: "Mit der Benennung geht die Verantwortung auf die Projekt-Sicherheitsbeauftragte über.",
              correct: false,
            },
          ],
          explanation:
            "Projekt-ISB unterstützen; die Verantwortung bleibt bei Projektleitung bzw. Leitungsebene.",
          source: { doc: "200-2", section: "Kap. 4.6", page: 44 },
        },
        {
          id: "q-t03-l02-5",
          topic: 3,
          level: "basis",
          stem: "Was gehört nach BSI-Standard 200-1 zur Vorbildfunktion der Leitungsebene?",
          options: [
            { text: "Sie beachtet selbst alle vorgegebenen Sicherheitsregeln.", correct: true },
            { text: "Sie nimmt selbst an Schulungsveranstaltungen teil.", correct: true },
            {
              text: "Sie ist von Sicherheitsregeln ausgenommen, die den Geschäftsbetrieb verlangsamen.",
              correct: false,
            },
            {
              text: "Sie unterstützt andere Führungskräfte bei der Ausübung ihrer Vorbildfunktion.",
              correct: true,
            },
          ],
          explanation:
            "Die Leitung muss Informationssicherheit vorleben: Regeln selbst einhalten, an Schulungen teilnehmen und andere Führungskräfte unterstützen.",
          source: { doc: "200-1", section: "Kap. 4.1", page: 22 },
        },
      ],
    },
    {
      id: "t03-l03",
      title: "Die Leitlinie zur Informationssicherheit",
      depth: "II",
      minutes: 30,
      goals: [
        "Zweck und Mindestinhalte einer Sicherheitsleitlinie benennen",
        "Die Schritte zur Erstellung, Inkraftsetzung und Bekanntgabe beschreiben",
        "Den Aktualisierungsbedarf einer Leitlinie beurteilen",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Die **Leitlinie zur Informationssicherheit** beschreibt allgemein verständlich, **für welche Zwecke, mit welchen Mitteln und mit welchen Strukturen** Informationssicherheit hergestellt werden soll. Sie enthält die angestrebten **Sicherheitsziele** und die **Sicherheitsstrategie** und beschreibt damit das angestrebte **Sicherheitsniveau**. Sie ist ein zentrales Strategiepapier und dokumentiert die strategische Position der Institutionsleitung.",
        },
        { type: "heading", text: "Mindestinhalte" },
        {
          type: "list",
          items: [
            "Stellenwert der Informationssicherheit und Bedeutung der wesentlichen Informationen, Geschäftsprozesse und der IT",
            "Bezug der Sicherheitsziele zu den Geschäftszielen bzw. Aufgaben der Institution",
            "Sicherheitsziele und Kernelemente der Sicherheitsstrategie",
            "Zusicherung, dass die Leitlinie von der Institutionsleitung **durchgesetzt** wird, sowie Leitaussagen zur Erfolgskontrolle",
            "Beschreibung der für die Umsetzung etablierten **Organisationsstruktur**",
          ],
        },
        {
          type: "paragraph",
          text: "Optional: wichtige Gefährdungen und gesetzliche Rahmenbedingungen zur Motivation, Aufgaben und Zuständigkeiten, Ansprechpartner, angekündigte Schulungs- und Sensibilisierungsprogramme. Die Leitlinie soll **kurz und bündig** sein – mehr als **20 Seiten** haben sich nicht bewährt. Im **Geltungsbereich** müssen die betrachteten Geschäftsprozesse **komplett** enthalten sein.",
        },
        { type: "heading", text: "Vorgehen" },
        {
          type: "list",
          ordered: true,
          items: [
            "Auftrag der Leitungsebene einholen",
            "Entwicklungsgruppe einberufen (bzw. IS-Management-Team, falls vorhanden)",
            "Geltungsbereich und Inhalte festlegen",
            "Inkraftsetzung durch die Leitungsebene veranlassen (schriftlich, formelle Zustimmung)",
            "Leitlinie bekannt geben – neuen Mitarbeitenden **vor dem Zugang** zur Informationsverarbeitung erläutern",
            "Regelmäßig überprüfen und aktualisieren",
          ],
        },
        {
          type: "callout",
          variant: "merke",
          title: "Aktualisierung",
          text: "Die Leitlinie sollte regelmäßig, **spätestens alle zwei Jahre**, überdacht werden – und anlassbezogen, z. B. bei geänderten Geschäftszielen, neuen IT-Verfahren oder ICS-Komponenten oder einer neuen Organisationsstruktur.",
        },
        {
          type: "paragraph",
          text: "Vertrauliche Aussagen gehören in eine **deutlich als vertraulich gekennzeichnete Anlage**; die Leitlinie selbst soll für alle einfach zugänglich sein, z. B. im Intranet. Bei der Erarbeitung sollte das Fachwissen vieler Bereiche genutzt werden: Fachverantwortliche, IT-Betrieb, Sicherheit, Datenschutz, Produktion, Personalabteilung und Personalvertretung, Revision, Finanzen, Rechtsabteilung.",
        },
      ],
      sources: [
        {
          doc: "200-2",
          section: "Kap. 3.4 Erstellung einer Leitlinie zur Informationssicherheit",
          page: 32,
        },
      ],
      quiz: [
        {
          id: "q-t03-l03-1",
          topic: 3,
          level: "basis",
          stem: "Welche Inhalte sollte eine Sicherheitsleitlinie laut BSI-Standard 200-2 mindestens enthalten?",
          options: [
            { text: "Sicherheitsziele und Kernelemente der Sicherheitsstrategie", correct: true },
            { text: "Beschreibung der etablierten Organisationsstruktur", correct: true },
            { text: "Detaillierte Konfigurationsvorgaben für alle IT-Systeme", correct: false },
            { text: "Zusicherung der Durchsetzung durch die Institutionsleitung", correct: true },
          ],
          explanation:
            "Technische Details gehören nicht in die Leitlinie, sondern in Sicherheitskonzept und Richtlinien.",
          source: { doc: "200-2", section: "Kap. 3.4.3", page: 33 },
        },
        {
          id: "q-t03-l03-2",
          topic: 3,
          level: "basis",
          stem: "Wie oft sollte die Sicherheitsleitlinie laut BSI-Standard 200-2 spätestens überdacht werden?",
          options: [
            { text: "Jährlich", correct: false },
            { text: "Spätestens alle zwei Jahre", correct: true },
            { text: "Alle fünf Jahre", correct: false },
            { text: "Nur bei einem Sicherheitsvorfall", correct: false },
          ],
          explanation:
            "Empfohlen ist eine Überprüfung spätestens alle zwei Jahre sowie anlassbezogen.",
          source: { doc: "200-2", section: "Kap. 3.4.5", page: 35 },
        },
        {
          id: "q-t03-l03-3",
          topic: 3,
          level: "experte",
          stem: "Eine Leitlinie enthält Hinweise auf besonders schutzbedürftige Standorte. Wie sollte laut BSI-Standard 200-2 damit umgegangen werden?",
          options: [
            {
              text: "Vertrauliche Aussagen in eine deutlich als vertraulich gekennzeichnete Anlage auslagern",
              correct: true,
            },
            {
              text: "Die gesamte Leitlinie nur der Leitungsebene zugänglich machen",
              correct: false,
            },
            {
              text: "Die Leitlinie dennoch für alle Mitarbeitenden einfach zugänglich halten",
              correct: true,
            },
            { text: "Auf eine schriftliche Fassung verzichten", correct: false },
          ],
          explanation:
            "Die Leitlinie soll allen bekannt und zugänglich sein; Vertrauliches gehört in eine gekennzeichnete Anlage.",
          source: { doc: "200-2", section: "Kap. 3.4.4", page: 34 },
        },
      ],
    },
  ],
};
