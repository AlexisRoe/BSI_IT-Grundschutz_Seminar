import type { Lab } from "../course.types";
import { LAB_ORG } from "./lab-organisation.constants";

/** Labor Themenfeld 8: Risikoanalyse nach BSI-Standard 200-3. */
export const lab: Lab = {
  id: "risikoanalyse",
  topic: 8,
  title: "Risikoanalyse für den Konstruktionsserver",
  scenario: [
    LAB_ORG.intro,
    "Der Konstruktionsserver (Vertraulichkeit sehr hoch, Integrität hoch, Verfügbarkeit hoch) wird einer Risikoanalyse nach BSI-Standard 200-3 unterzogen. Die Institution verwendet die Kategorien und Matrix aus den Beispielen des Standards.",
  ],
  tasks: [
    {
      kind: "classify",
      id: "relevanz",
      prompt:
        "Wie relevant sind die elementaren Gefährdungen für das **Server-Betriebssystem** des Konstruktionsservers?",
      categories: [
        { id: "direkt", label: "direkt relevant" },
        { id: "indirekt", label: "indirekt / nicht relevant" },
      ],
      items: [
        {
          id: "r1",
          label: "G 0.25 Ausfall von Geräten oder Systemen",
          answer: "direkt",
          explanation: "Wirkt direkt auf das Betriebssystem ein; Maßnahmen sind zu prüfen.",
        },
        {
          id: "r2",
          label: "G 0.1 Feuer",
          answer: "indirekt",
          explanation: "Bringt für das Betriebssystem keine neuen Aspekte gegenüber G 0.25.",
        },
        {
          id: "r3",
          label: "G 0.28 Software-Schwachstellen oder -Fehler",
          answer: "direkt",
          explanation: "Betrifft das Betriebssystem unmittelbar.",
        },
        {
          id: "r4",
          label: "G 0.9 Ausfall oder Störung von Kommunikationsnetzen",
          answer: "indirekt",
          explanation:
            "Ein Betriebssystem bietet keine spezifischen Schutzmaßnahmen dagegen; keine neuen Aspekte gegenüber G 0.26.",
        },
      ],
    },
    {
      kind: "classify",
      id: "einstufung",
      prompt: "Welche Risikokategorie ergibt sich nach den Beispielen des BSI-Standards 200-3?",
      categories: [
        { id: "mittel", label: "mittel" },
        { id: "hoch", label: "hoch" },
      ],
      items: [
        {
          id: "e1",
          label: "Abhören der Datensicherung im Storage-Netz",
          detail: "Eintrittshäufigkeit selten, Schadenshöhe beträchtlich",
          answer: "mittel",
          explanation: "selten × beträchtlich = mittel (vgl. G 0.15 im Beispiel).",
        },
        {
          id: "e2",
          label: "Ausnutzen einer öffentlich bekannten Schwachstelle der CAD-Lizenzsoftware",
          detail: "Eintrittshäufigkeit häufig, Schadenshöhe beträchtlich",
          answer: "hoch",
          explanation: "häufig × beträchtlich = hoch (vgl. G 0.28 im Beispiel).",
        },
        {
          id: "e3",
          label: "Missbrauch administrativer Rechte durch Innentäter",
          detail: "Eintrittshäufigkeit selten, Schadenshöhe existenzbedrohend",
          answer: "mittel",
          explanation: "selten × existenzbedrohend = mittel (vgl. G 0.32 im Beispiel).",
        },
      ],
    },
    {
      kind: "classify",
      id: "behandlung",
      prompt: "Welche Risikobehandlungsoption wurde jeweils gewählt?",
      categories: [
        { id: "vermeidung", label: "A: Vermeidung" },
        { id: "reduktion", label: "B: Reduktion" },
        { id: "transfer", label: "C: Transfer" },
        { id: "akzeptanz", label: "D: Akzeptanz" },
      ],
      items: [
        {
          id: "b1",
          label:
            "Für die CAD-Lizenzsoftware wird bis zum Update eine vorgeschaltete Firewall-Regel eingeführt.",
          answer: "reduktion",
          explanation: "Ergänzende Sicherheitsmaßnahmen senken das Risiko.",
        },
        {
          id: "b2",
          label:
            "Konstruktionsdaten werden nicht mehr per E-Mail an Lieferanten geschickt; der Prozess wird auf ein Kundenportal umgestellt.",
          answer: "vermeidung",
          explanation:
            "Die Risikoursache wird durch Umstrukturierung des Prozesses ausgeschlossen.",
        },
        {
          id: "b3",
          label:
            "Gegen die finanziellen Folgen eines Produktionsausfalls wird eine Versicherung abgeschlossen.",
          answer: "transfer",
          explanation: "Das Risiko wird mit einer anderen Partei geteilt.",
        },
        {
          id: "b4",
          label:
            "Das mittlere Restrisiko beim Abhören im Storage-Netz wird von der Geschäftsführung dokumentiert übernommen.",
          answer: "akzeptanz",
          explanation: "Risikoakzeptanz durch die Leitung auf nachvollziehbarer Faktenlage.",
        },
      ],
    },
    {
      kind: "order",
      id: "schritte",
      prompt:
        "Bringen Sie die Schritte der Risikoanalyse in die Reihenfolge nach BSI-Standard 200-3.",
      items: [
        { id: "s1", label: "Elementare Gefährdungen ermitteln" },
        { id: "s2", label: "Zusätzliche Gefährdungen im Brainstorming ermitteln" },
        { id: "s3", label: "Eintrittshäufigkeit und Schadenshöhe einschätzen" },
        { id: "s4", label: "Risikokategorie bestimmen" },
        { id: "s5", label: "Behandlungsoption wählen" },
        { id: "s6", label: "Sicherheitskonzept konsolidieren" },
      ],
      explanation: "Gefährdungsübersicht → Risikoeinstufung → Risikobehandlung → Konsolidierung.",
    },
  ],
  sources: [{ doc: "200-3", section: "Kap. 4 bis 7", page: 16 }],
};
