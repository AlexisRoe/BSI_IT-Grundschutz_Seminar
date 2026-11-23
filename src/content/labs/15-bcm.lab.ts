import type { Lab } from "../course.types";
import { LAB_ORG } from "./lab-organisation.constants";

/** Labor Themenfeld 15: BCM-Grundbegriffe und BIA. */
export const lab: Lab = {
  id: "bcm",
  topic: 15,
  title: "Störung, Notfall oder Krise? BIA-Kenngrößen",
  scenario: [
    LAB_ORG.intro,
    "Die Fertigung ist zeitkritisch (MTPD 48 Stunden). Für den Ausfall des SCADA-Leitsystems gibt es einen Notfallplan mit Umschaltung auf ein Ersatzsystem.",
  ],
  tasks: [
    {
      kind: "classify",
      id: "einstufung",
      prompt: "Wie ist das Schadensereignis nach BSI-Standard 200-4 einzustufen?",
      categories: [
        { id: "stoerung", label: "Störung" },
        { id: "notfall", label: "Notfall" },
        { id: "krise", label: "Krise" },
      ],
      items: [
        {
          id: "s1",
          label:
            "Ein Drucker in der Verwaltung fällt aus und wird vom IT-Betrieb am selben Tag getauscht.",
          answer: "stoerung",
          explanation: "Im Normalbetrieb durch die AAO behebbar.",
        },
        {
          id: "s2",
          label:
            "Das SCADA-Leitsystem fällt aus und kann nicht rechtzeitig repariert werden; der Notfallplan zur Umschaltung wird angewendet.",
          answer: "notfall",
          explanation: "Zeitkritischer Prozess betroffen, Notfallplan vorhanden und anwendbar.",
        },
        {
          id: "s3",
          label:
            "Ein Hochwasser überflutet Hauptsitz und Ersatzstandort; für diese Lage gibt es keine Pläne.",
          answer: "krise",
          explanation: "Keine anwendbaren Notfallpläne – situative Bewältigung durch die BAO.",
        },
      ],
    },
    {
      kind: "classify",
      id: "kenngroessen",
      prompt: "Welche BIA-Kenngröße wird beschrieben?",
      categories: [
        { id: "mtpd", label: "MTPD (maximal tolerierbare Ausfallzeit)" },
        { id: "rto", label: "RTO (geforderte Wiederanlaufzeit)" },
        { id: "rpo", label: "RPO (maximal zulässiger Datenverlust)" },
        { id: "mbco", label: "Notbetriebsniveau" },
      ],
      items: [
        {
          id: "k1",
          label:
            "Nach spätestens 48 Stunden Stillstand drohen Vertragsstrafen, die die Existenz gefährden.",
          answer: "mtpd",
          explanation: "Maximale Ausfalldauer, bevor nicht tolerierbare Auswirkungen eintreten.",
        },
        {
          id: "k2",
          label: "Das Ersatzsystem muss 24 Stunden nach Ausrufen des Notfalls in Betrieb sein.",
          answer: "rto",
          explanation: "Zeitraum vom Ausrufen des Notfalls bis zur Inbetriebnahme der BC-Lösung.",
        },
        {
          id: "k3",
          label:
            "Fertigungsaufträge dürfen höchstens 4 Stunden alt sein, damit nachgearbeitet werden kann.",
          answer: "rpo",
          explanation: "Bestimmt den notwendigen Datensicherungszyklus.",
        },
        {
          id: "k4",
          label: "Im Notbetrieb sollen mindestens 60 % der üblichen Stückzahl gefertigt werden.",
          answer: "mbco",
          explanation: "Leistungsfähigkeit des Notbetriebs, z. B. prozentual angegeben.",
        },
      ],
    },
  ],
  sources: [{ doc: "200-4", section: "Kap. 2.1 und 7", page: 19 }],
};
