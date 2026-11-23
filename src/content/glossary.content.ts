import type { SourceRef } from "./course.types";

/** A glossary term with its definition and source. */
export interface GlossaryEntry {
  term: string;
  definition: string;
  source: SourceRef;
}

const G: SourceRef = { doc: "kompendium", section: "Glossar" };

/** Key terms of IT-Grundschutz, alphabetically sorted. */
export const GLOSSARY: readonly GlossaryEntry[] = [
  {
    term: "AAO (Allgemeine Aufbauorganisation)",
    definition: "Ständige Organisationsform einer Institution für den täglichen Geschäftsbetrieb.",
    source: { doc: "200-4", section: "Kap. 2.1", page: 20 },
  },
  {
    term: "Angriff",
    definition:
      "Vorsätzliche Form der Gefährdung, nämlich eine unerwünschte oder unberechtigte Handlung mit dem Ziel, sich Vorteile zu verschaffen bzw. Dritte zu schädigen.",
    source: G,
  },
  {
    term: "Assets",
    definition:
      "Im IT-Grundschutz werthaltige bzw. wertvolle Zielobjekte, die zur Erreichung von Geschäftszielen benötigt werden.",
    source: G,
  },
  {
    term: "Authentizität",
    definition:
      "Eigenschaft, die gewährleistet, dass eine Kommunikationsstelle tatsächlich diejenige ist, die sie vorgibt zu sein; authentische Informationen stammen von der angegebenen Quelle.",
    source: G,
  },
  {
    term: "BAO (Besondere Aufbauorganisation)",
    definition:
      "Zeitlich begrenzte Organisationsform für außergewöhnliche Situationen wie Notfälle und Krisen, mit eigenen Zuständigkeiten sowie Kommunikations- und Entscheidungswegen.",
    source: { doc: "200-4", section: "Kap. 2.1", page: 20 },
  },
  {
    term: "Basis-Absicherung",
    definition:
      "Einstieg in den IT-Grundschutz mit einer breiten, grundlegenden Erst-Absicherung über alle Geschäftsprozesse.",
    source: G,
  },
  {
    term: "Bedrohung",
    definition:
      "Umstand oder Ereignis, der oder das Verfügbarkeit, Integrität oder Vertraulichkeit von Informationen beeinträchtigen und so einen Schaden verursachen kann.",
    source: G,
  },
  {
    term: "BIA (Business Impact Analyse)",
    definition:
      "Analyse der potenziellen direkten und indirekten Folgeschäden eines Ausfalls von Geschäftsprozessen; identifiziert kritische Ressourcen und Wiederanlaufanforderungen.",
    source: G,
  },
  {
    term: "Business Continuity Management (BCM)",
    definition:
      "Alle organisatorischen, technischen und personellen Maßnahmen zur Fortführung des Kerngeschäfts nach Eintritt eines Notfalls bzw. Sicherheitsvorfalls.",
    source: G,
  },
  {
    term: "Cyber-Sicherheit",
    definition:
      "Sicherheit in der Informations- und Kommunikationstechnik, ausgeweitet auf den gesamten Cyber-Raum.",
    source: G,
  },
  {
    term: "Datenschutz",
    definition:
      "Schutz von Personen vor Beeinträchtigungen ihrer Persönlichkeitsrechte durch den Umgang mit ihren personenbezogenen Daten.",
    source: G,
  },
  {
    term: "Gefährdung",
    definition: "Bedrohung, die konkret über eine Schwachstelle auf ein Objekt einwirkt.",
    source: G,
  },
  {
    term: "Grundwerte der Informationssicherheit",
    definition:
      "Vertraulichkeit, Verfügbarkeit und Integrität; weitere können ergänzend betrachtet werden.",
    source: G,
  },
  {
    term: "Informationssicherheitsbeauftragte (ISB)",
    definition:
      "Für die operative Erfüllung der Aufgabe Informationssicherheit zuständig; idealerweise als Stabsstelle eingerichtet.",
    source: G,
  },
  {
    term: "Informationsverbund",
    definition:
      "Gesamtheit infrastruktureller, organisatorischer, personeller und technischer Objekte, die der Aufgabenerfüllung in einem bestimmten Anwendungsbereich dienen.",
    source: G,
  },
  {
    term: "Integrität",
    definition:
      "Sicherstellung der Korrektheit (Unversehrtheit) von Daten und der korrekten Funktionsweise von Systemen.",
    source: G,
  },
  {
    term: "IT-Grundschutz-Check",
    definition:
      "Überprüfung, ob die nach IT-Grundschutz empfohlenen Anforderungen bereits erfüllt sind (Soll-Ist-Vergleich).",
    source: G,
  },
  {
    term: "Kern-Absicherung",
    definition:
      "Vorgehensweise, bei der zunächst besonders gefährdete Geschäftsprozesse und Assets (Kronjuwelen) abgesichert werden.",
    source: G,
  },
  {
    term: "Kronjuwelen",
    definition:
      "Assets, deren Diebstahl, Zerstörung oder Kompromittierung einen existenzbedrohenden Schaden bedeuten würde.",
    source: G,
  },
  {
    term: "Kumulationseffekt",
    definition:
      "Der Schutzbedarf eines Objekts erhöht sich, weil sich mehrere (kleinere) Schäden zu einem höheren Gesamtschaden summieren.",
    source: G,
  },
  {
    term: "Leitlinie zur Informationssicherheit",
    definition:
      "Zentrales Dokument, das Zwecke, Mittel und Strukturen, Sicherheitsziele und Strategie der Informationssicherheit beschreibt.",
    source: G,
  },
  {
    term: "Maximumprinzip",
    definition:
      "Der Schaden bzw. die Summe der Schäden mit den schwerwiegendsten Auswirkungen bestimmt den Schutzbedarf.",
    source: G,
  },
  {
    term: "Modellierung",
    definition:
      "Nachbildung des Informationsverbunds mit den Bausteinen des IT-Grundschutz-Kompendiums.",
    source: G,
  },
  {
    term: "MTPD (Maximal tolerierbare Ausfallzeit)",
    definition:
      "Wie lange ein Geschäftsprozess maximal ausfallen darf, bevor nicht tolerierbare Auswirkungen auftreten.",
    source: { doc: "200-4", section: "Kap. 7", page: 159 },
  },
  {
    term: "Netzplan",
    definition: "Graphische Übersicht über die Komponenten eines Netzes und ihre Verbindungen.",
    source: G,
  },
  {
    term: "Nichtabstreitbarkeit",
    definition:
      "Versand und Empfang von Nachrichten können gegenüber Dritten nicht nachträglich bestritten werden.",
    source: G,
  },
  {
    term: "Notfall",
    definition:
      "Unterbrechung des Geschäftsbetriebs, die mindestens einen zeitkritischen Geschäftsprozess betrifft, der nicht im Normalbetrieb innerhalb der maximal tolerierbaren Ausfallzeit wiederhergestellt werden kann.",
    source: { doc: "200-4", section: "Kap. 2.1", page: 20 },
  },
  {
    term: "Risiko",
    definition:
      "Häufig definiert als Kombination aus Häufigkeit und Ausmaß eines Schadens; enthält bereits eine Bewertung.",
    source: G,
  },
  {
    term: "Risikoanalyse",
    definition:
      "Im IT-Grundschutz der komplette Prozess, Risiken zu beurteilen (identifizieren, einschätzen, bewerten) und zu behandeln.",
    source: G,
  },
  {
    term: "RPO (maximal zulässiger Datenverlust)",
    definition:
      "Wie alt verfügbare Daten maximal sein dürfen, um im Notbetrieb sinnvoll arbeiten zu können.",
    source: { doc: "200-4", section: "Kap. 7", page: 159 },
  },
  {
    term: "RTO (geforderte Wiederanlaufzeit)",
    definition:
      "Zeitraum vom Ausrufen des Notfalls bis zur geforderten Inbetriebnahme der BC-Lösung; muss kürzer als die MTPD sein.",
    source: { doc: "200-4", section: "Kap. 7", page: 159 },
  },
  {
    term: "Schutzbedarf",
    definition:
      "Welcher Schutz für Geschäftsprozesse, Informationen und Informationstechnik ausreichend und angemessen ist (normal, hoch, sehr hoch).",
    source: G,
  },
  {
    term: "Schwachstelle",
    definition: "Sicherheitsrelevanter Fehler eines IT-Systems oder einer Institution.",
    source: G,
  },
  {
    term: "Sicherheitsanforderung",
    definition:
      "Beschreibt, was getan werden muss, um ein Sicherheitsniveau zu erreichen; unterschieden in Basis-, Standard- und Anforderungen bei erhöhtem Schutzbedarf.",
    source: G,
  },
  {
    term: "Sicherheitskonzept",
    definition:
      "Zentrales Dokument im Sicherheitsprozess; jede konkrete Sicherheitsmaßnahme muss sich darauf zurückführen lassen.",
    source: G,
  },
  {
    term: "Standard-Absicherung",
    definition:
      "Umfassende und tiefgehende Absicherung; entspricht im Wesentlichen der klassischen IT-Grundschutz-Vorgehensweise.",
    source: G,
  },
  {
    term: "Strukturanalyse",
    definition:
      "Erfassung von Geschäftsprozessen, Anwendungen, IT-Systemen, Netzen, Räumen und Verbindungen des Informationsverbunds.",
    source: G,
  },
  {
    term: "Verbindlichkeit",
    definition: "Fasst die Sicherheitsziele Authentizität und Nichtabstreitbarkeit zusammen.",
    source: G,
  },
  {
    term: "Verfügbarkeit",
    definition:
      "Dienstleistungen, Funktionen, Anwendungen oder Informationen können stets wie vorgesehen genutzt werden.",
    source: G,
  },
  {
    term: "Verteilungseffekt",
    definition:
      "Relativiert den Schutzbedarf, wenn auf einem Objekt nur unwesentliche Teile einer hochschutzbedürftigen Anwendung laufen.",
    source: G,
  },
  {
    term: "Vertraulichkeit",
    definition: "Schutz vor unbefugter Preisgabe von Informationen.",
    source: G,
  },
];
