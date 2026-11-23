import type { TopicContent } from "../course.types";

/** Themenfeld 12: IT-Grundschutz-Profile. */
export const topic: TopicContent = {
  topic: 12,
  lessons: [
    {
      id: "t12-l01",
      title: "Zweck und Nutzung von IT-Grundschutz-Profilen",
      depth: "I + II",
      minutes: 25,
      goals: [
        "Erklären, was ein IT-Grundschutz-Profil ist und welchen Nutzen es bietet",
        "Wer Profile erstellt und wie sie verbreitet werden",
        "Beispiele veröffentlichter Profile nennen",
      ],
      blocks: [
        {
          type: "definition",
          term: "IT-Grundschutz-Profil",
          text: "Eine **Schablone** für einen ausgewählten Informationsverbund oder Geschäftsprozess, mit der die IT-Grundschutz-Umsetzung für diesen Bereich konkretisiert wird. Ziel ist es, für bestimmte Anwendungsfelder **Musterszenarien** anzubieten.",
        },
        {
          type: "paragraph",
          text: "Ein Profil bereitet Schritte des Sicherheitsprozesses für einen definierten Anwendungsbereich so auf, dass es als **Rahmen für Sicherheitskonzepte** adaptiert werden kann:",
        },
        {
          type: "list",
          items: [
            "Festlegung des Anwendungsbereichs",
            "verallgemeinerte **Strukturanalyse, Schutzbedarfsfeststellung und Modellierung**",
            "Auswahl und Anpassung der umzusetzenden Bausteine",
            "Beschreibung spezifischer Sicherheitsanforderungen und Maßnahmen",
            "gegebenenfalls Risikoanalyse und Risikobehandlung",
          ],
        },
        { type: "heading", text: "Wer erstellt Profile – und wozu?" },
        {
          type: "paragraph",
          text: "Profile sollten zusammen mit Vertretern der künftigen Anwender erstellt werden, also durch **Gremien, Anwendergruppen einer Branche oder Vertreter eines Themenbereichs**, unterstützt vom IT-Grundschutz-Team des BSI. Anschließend sollten sie der **Community zur Verfügung gestellt** werden – so werden Know-how geteilt und Synergien genutzt.",
        },
        {
          type: "list",
          items: [
            "**Zeit- und Ressourcenersparnis**: Institutionen arbeiten mit dem Muster weiter, statt jeden Schritt neu zu erarbeiten.",
            "**Werkzeugkasten**, angepasst an Spezifika, Sprachgebrauch und Hintergrundwissen der Branche.",
            "Sicherheitskonzepte einer Branche werden **einfacher und vergleichbarer**.",
            "Auch **einzelne Geschäftsprozesse oder Fachaufgaben** lassen sich abbilden (z. B. Nationales Waffenregister, E-Akte).",
          ],
        },
        {
          type: "example",
          title: "Veröffentlichte und mögliche Profile",
          text: [
            "Das Kompendium 2023 nennt Profile für **Weltrauminfrastrukturen** (Mindestanforderungen an die Cyber-Sicherheit für Satelliteninfrastrukturen), für **5G-Campusnetze** und für **Verkehrssteuerungs- und Leitsysteme der Bundesautobahn** – alle auf Basis der Kompendium-Bausteine.",
            "Die Strukturbeschreibung nennt als mögliche Anwendungsbereiche Kommunalverwaltungen, Krankenhäuser oder Wasserwerke als Kritische Infrastruktur.",
          ],
        },
        {
          type: "callout",
          variant: "merke",
          title: "Registrierung",
          text: "Profile können beim BSI zur Registrierung eingereicht werden. Das BSI nimmt eine formale und stichprobenartige inhaltliche Prüfung vor und vergibt bei positivem Ergebnis eine Registernummer; das Profil wird im IT-Grundschutz-Profil-Register gelistet. Weil Anforderungsnummern im Kompendium stabil bleiben, referenzieren Profile auch nach Baustein-Überarbeitungen korrekt.",
        },
      ],
      sources: [
        { doc: "profil", section: "Kap. 1 Einleitung und Kap. 3 Ausblick", page: 5 },
        { doc: "kompendium", section: "Vorwort; Überarbeitung von IT-Grundschutz-Bausteinen" },
      ],
      quiz: [
        {
          id: "q-t12-l01-1",
          topic: 12,
          level: "basis",
          stem: "Was ist ein IT-Grundschutz-Profil?",
          options: [
            {
              text: "Eine Schablone für einen ausgewählten Informationsverbund oder Geschäftsprozess",
              correct: true,
            },
            { text: "Ein Musterszenario für ein bestimmtes Anwendungsfeld", correct: true },
            { text: "Ein ISO 27001-Zertifikat für eine Branche", correct: false },
            { text: "Ein Ersatz für das IT-Grundschutz-Kompendium", correct: false },
          ],
          explanation:
            "Profile konkretisieren die IT-Grundschutz-Umsetzung; sie ersetzen weder Kompendium noch Zertifikat.",
          source: { doc: "profil", section: "Kap. 1", page: 5 },
        },
        {
          id: "q-t12-l01-2",
          topic: 12,
          level: "basis",
          stem: "Von wem sollten IT-Grundschutz-Profile laut Strukturbeschreibung erstellt werden?",
          options: [
            {
              text: "Von Gremien oder Anwendergruppen einer Branche bzw. Vertretern eines Themenbereichs",
              correct: true,
            },
            { text: "Unterstützt durch das IT-Grundschutz-Team des BSI", correct: true },
            { text: "Ausschließlich vom BSI ohne Beteiligung von Anwendern", correct: false },
            { text: "Ausschließlich von Zertifizierungsstellen", correct: false },
          ],
          explanation: "Profile sollen zusammen mit Vertretern der künftigen Anwender entstehen.",
          source: { doc: "profil", section: "Kap. 1", page: 5 },
        },
        {
          id: "q-t12-l01-3",
          topic: 12,
          level: "basis",
          stem: "Welche Profile nennt das Vorwort des IT-Grundschutz-Kompendiums 2023 als Beispiele?",
          options: [
            { text: "Weltrauminfrastrukturen", correct: true },
            { text: "5G-Campusnetze", correct: true },
            { text: "Verkehrssteuerungs- und Leitsysteme der Bundesautobahn", correct: true },
            { text: "Kreditkartenzahlungen nach PCI DSS", correct: false },
          ],
          explanation: "PCI DSS ist ein eigener Branchenstandard, kein IT-Grundschutz-Profil.",
          source: { doc: "kompendium", section: "Vorwort" },
        },
      ],
    },
    {
      id: "t12-l02",
      title: "Aufbau eines IT-Grundschutz-Profils",
      depth: "I + II",
      minutes: 35,
      goals: [
        "Die Gliederung eines Profils nach der Strukturbeschreibung wiedergeben",
        "Geltungsbereich, Referenzarchitektur und Umsetzungsvorgaben beschreiben",
        "Ein veröffentlichtes Profil auf die eigene Institution übertragen",
      ],
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "**Formale Aspekte**: Titel, Autor, Herausgeber, Registrierungsnummer, Versionsstand, Revisionszyklus, Vertraulichkeit (z. B. nach TLP oder VSA)",
            "**Management Summary**: Zielgruppe, Zielsetzung, Handlungs- und Entscheidungsempfehlungen für die Leitung, wichtigste Restrisiken",
            "**Geltungsbereich**: Zielgruppe, zugrunde gelegter Schutzbedarf, zugrunde gelegte Vorgehensweise (Basis/Standard/Kern), Abdeckung, ISO 27001-Kompatibilität, Rahmenbedingungen, optional Verbindlichkeit",
            "**Abgrenzung des Informationsverbunds**: Bestandteile, nicht berücksichtigte Objekte (mit Begründung), Verbindung zu anderen Profilen",
            "**Referenzarchitektur**: Untersuchungsgegenstand mit eindeutigen Identifikatoren (Infrastruktur, Netze und Kommunikation, IT-Systeme, Geschäftsprozesse/Anwendungen), Netzplan, Umgang mit Abweichungen",
            "**Zu erfüllende Anforderungen und umzusetzende Maßnahmen**",
            "**Restrisikobetrachtung/Risikobehandlung**",
            "**Anwendungshinweise**, **unterstützende Informationen**, **Anhang** (z. B. benutzerdefinierte Bausteine, Glossar)",
          ],
        },
        {
          type: "callout",
          variant: "merke",
          title: "ISO 27001-Kompatibilität",
          text: "Wird mindestens die Standard-Absicherung umgesetzt, ist das Profil zur ISO 27001 kompatibel. Werden die Anforderungen nur zu einem geringeren Anteil erfüllt, ist die Kompatibilität zu prüfen.",
        },
        { type: "heading", text: "Anforderungen anpassen" },
        {
          type: "paragraph",
          text: "Nach der Modellierung der Referenzarchitektur werden die Anforderungen **zielgruppengerecht angepasst**: alle Anforderungen eines Bausteins als relevant festlegen, nur bestimmte (z. B. nur Basis-Anforderungen), Anforderungen **konkretisieren**, Anforderungen **streichen** oder **zusätzliche** Anforderungen ergänzen (z. B. bei erhöhtem Schutzbedarf oder nicht modellierbaren Zielobjekten). So kann das Profil ein Sicherheitsniveau erreichen, das **exakt dem Schutzbedarf** des Anwendungsbereichs entspricht.",
        },
        {
          type: "table",
          headers: ["Umsetzungsvorgabe", "Bedeutung"],
          rows: [
            [
              "„auf geeignete Weise“",
              "Es liegt im Ermessen der Anwendenden, wie die Anforderung erfüllt wird.",
            ],
            [
              "„durch Umsetzung der zugehörigen Maßnahmen der Umsetzungshinweise“",
              "Die Maßnahmen der Umsetzungshinweise sind umzusetzen.",
            ],
            [
              "„durch Umsetzung von […]“",
              "Verweis auf andere Quellen oder direkte Vorgabe einer Maßnahme.",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Verzichtet ein Profil auf einzelne **Standard-Anforderungen**, ist das **stichhaltig zu begründen** (Risiko-Übernahme, Risiko-Reduktion durch alternative Anforderungen, Risiko-Transfer). Restrisiken, die nicht durch Anforderungen abgedeckt werden, sind zu **bewerten und zu dokumentieren**.",
        },
        {
          type: "example",
          title: "Profil für eCommerce-Anbieter (Strukturbeschreibung)",
          text: [
            "Schutzbedarf über der Standard-Absicherung: hohe Vertraulichkeit und Integrität für Kunden- und Zahlungsdaten, hohe Verfügbarkeit des Shops.",
            "Abdeckung: mindestens Standard, teilweise hoch; ISO 27001-kompatibel: ja.",
            "Nicht berücksichtigt: Büro-Clients, da für das eCommerce-Angebot nicht wesentlich.",
            "Zusätzlich: ein benutzerdefinierter Baustein „ePayment“ im Anhang.",
          ],
        },
        {
          type: "paragraph",
          text: "**Nutzung eines Profils**: Weicht der eigene Informationsverbund von der Referenzarchitektur ab, sind zusätzliche oder fehlende Objekte zu dokumentieren, ihnen geeignete Bausteine zuzuordnen und die Anforderungen an den Schutzbedarf anzupassen. Sind die Abweichungen zu groß, ist es zielführender, ein **eigenes Profil** zu erstellen – etwa auf Basis des vorhandenen. Die Anforderungen werden in das **Gesamtsicherheitskonzept** integriert.",
        },
      ],
      sources: [{ doc: "profil", section: "Kap. 2 Struktur von IT-Grundschutz-Profilen", page: 7 }],
      quiz: [
        {
          id: "q-t12-l02-1",
          topic: 12,
          level: "basis",
          stem: "Welche Angaben gehören laut Strukturbeschreibung zu den formalen Aspekten eines IT-Grundschutz-Profils?",
          options: [
            { text: "Herausgeber und Registrierungsnummer", correct: true },
            { text: "Versionsstand und Revisionszyklus", correct: true },
            { text: "Vertraulichkeit, z. B. nach TLP", correct: true },
            { text: "Die Umsetzungsstatus aller Anwender", correct: false },
          ],
          explanation:
            "Formale Aspekte: Titel, Autor, Herausgeber, Registrierungsnummer, Versionsstand, Revisionszyklus, Vertraulichkeit.",
          source: { doc: "profil", section: "Kap. 2.1", page: 7 },
        },
        {
          id: "q-t12-l02-2",
          topic: 12,
          level: "basis",
          stem: "Was bedeutet die Umsetzungsvorgabe „auf geeignete Weise“ in einem IT-Grundschutz-Profil?",
          options: [
            {
              text: "Es liegt im Ermessen der Anwendenden, wie die Anforderung erfüllt wird.",
              correct: true,
            },
            {
              text: "Die Maßnahmen der Umsetzungshinweise sind zwingend umzusetzen.",
              correct: false,
            },
            { text: "Die Anforderung ist entbehrlich.", correct: false },
            { text: "Die Anforderung gilt nur bei erhöhtem Schutzbedarf.", correct: false },
          ],
          explanation: "„Auf geeignete Weise“ überlässt die Wahl der Maßnahme den Anwendenden.",
          source: { doc: "profil", section: "Kap. 2.6", page: 15 },
        },
        {
          id: "q-t12-l02-3",
          topic: 12,
          level: "experte",
          stem: "Eine Klinik möchte ein veröffentlichtes Krankenhaus-Profil nutzen, betreibt aber zusätzlich ein eigenes Labor-Netz, das in der Referenzarchitektur fehlt. Wie ist vorzugehen?",
          options: [
            { text: "Die zusätzlichen Objekte dokumentieren", correct: true },
            { text: "Den zusätzlichen Objekten geeignete Bausteine zuordnen", correct: true },
            { text: "Die Anforderungen in Abhängigkeit vom Schutzbedarf anpassen", correct: true },
            {
              text: "Das Labor-Netz aus dem Sicherheitskonzept ausklammern, weil das Profil es nicht vorsieht",
              correct: false,
            },
          ],
          explanation:
            "Abweichungen von der Referenzarchitektur werden dokumentiert und modelliert; bei zu großen Abweichungen eigenes Profil.",
          source: { doc: "profil", section: "Kap. 2.5", page: 13 },
        },
      ],
    },
  ],
};
