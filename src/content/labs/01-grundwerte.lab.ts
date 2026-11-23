import type { Lab } from "../course.types";
import { LAB_ORG } from "./lab-organisation.constants";

/** Labor Themenfeld 1: Grundwerte, IT/OT, Security/Safety. */
export const lab: Lab = {
  id: "grundwerte",
  topic: 1,
  title: "Grundwerte, IT/OT und Security/Safety zuordnen",
  scenario: [
    LAB_ORG.intro,
    "Der oder die neue ISB sammelt Vorfälle der letzten zwölf Monate und möchte sie für die Leitung verständlich einordnen.",
  ],
  tasks: [
    {
      kind: "classify",
      id: "grundwerte",
      prompt: "Welcher Grundwert war bei den folgenden Vorfällen **primär** betroffen?",
      categories: [
        { id: "v", label: "Vertraulichkeit" },
        { id: "i", label: "Integrität" },
        { id: "a", label: "Verfügbarkeit" },
      ],
      items: [
        {
          id: "e1",
          label: "Eine Preiskalkulation wurde versehentlich an einen Wettbewerber gemailt.",
          answer: "v",
          explanation: "Information wurde Unbefugten preisgegeben.",
        },
        {
          id: "e2",
          label: "Nach einem Update übernimmt das ERP-System Stücklisten mit vertauschten Maßen.",
          answer: "i",
          explanation:
            "Die Daten sind nicht mehr korrekt bzw. das System funktioniert nicht korrekt.",
        },
        {
          id: "e3",
          label:
            "Der Fileserver ist wegen eines defekten Netzteils einen Tag lang nicht erreichbar.",
          answer: "a",
          explanation: "Der Dienst kann nicht wie vorgesehen genutzt werden.",
        },
        {
          id: "e4",
          label:
            "Nur eine erkrankte Kollegin kann die CAD-Lizenzverwaltung bedienen; Konstruktionen verzögern sich.",
          answer: "a",
          explanation:
            "Auch fehlendes Know-how führt dazu, dass Funktionen nicht wie vorgesehen nutzbar sind.",
        },
        {
          id: "e5",
          label: "Im Onlineshop wurden Preise durch einen Angreifer auf 1 Euro gesetzt.",
          answer: "i",
          explanation: "Informationen wurden unerlaubt verändert.",
        },
      ],
    },
    {
      kind: "classify",
      id: "it-ot",
      prompt:
        "Gehören die folgenden Systeme zur **Office-IT** oder zur **OT** (Prozessleit- und Automatisierungstechnik)?",
      categories: [
        { id: "it", label: "Office-IT" },
        { id: "ot", label: "OT" },
      ],
      items: [
        {
          id: "s1",
          label: "SCADA-Leitsystem der Fertigung",
          answer: "ot",
          explanation: "Überwacht und steuert physische Prozesse.",
        },
        {
          id: "s2",
          label: "ERP-System",
          answer: "it",
          explanation: "Klassische betriebswirtschaftliche Anwendung der Büro-IT.",
        },
        {
          id: "s3",
          label: "Gebäudeleittechnik für Klima und Zutritt",
          answer: "ot",
          explanation: "IND.1 nennt Gebäudeleittechnik ausdrücklich als Beispiel.",
        },
        {
          id: "s4",
          label: "Barcodescanner mit Kleinrechner im Lager",
          answer: "ot",
          explanation:
            "IND.1 nennt Logistiksysteme wie Barcodescanner mit Kleinrechner als Beispiel.",
        },
        {
          id: "s5",
          label: "E-Mail-Server",
          answer: "it",
          explanation: "Büro-Kommunikation ohne Steuerung physischer Prozesse.",
        },
      ],
    },
    {
      kind: "classify",
      id: "security-safety",
      prompt:
        "Handelt es sich primär um ein **Security**-Thema (Informationssicherheit) oder ein **Safety**-Thema (funktionale Sicherheit)?",
      categories: [
        { id: "sec", label: "Security" },
        { id: "saf", label: "Safety" },
      ],
      items: [
        {
          id: "x1",
          label:
            "Die Not-Aus-Funktion einer CNC-Maschine muss Personen bei Gefahr zuverlässig schützen.",
          answer: "saf",
          explanation:
            "Schutz von Menschen vor Gefahren durch die Anlage = funktionale Sicherheit.",
        },
        {
          id: "x2",
          label:
            "Der Fernwartungszugang des Maschinenherstellers ist nur mit einem Standardpasswort geschützt.",
          answer: "sec",
          explanation:
            "Unzureichender Zugangsschutz ist eine Schwachstelle der Informationssicherheit – mit möglichen Folgen für die Safety.",
        },
        {
          id: "x3",
          label: "Konstruktionsdaten sollen nicht an Wettbewerber gelangen.",
          answer: "sec",
          explanation: "Vertraulichkeit ist ein Grundwert der Informationssicherheit.",
        },
      ],
    },
  ],
  sources: [
    { doc: "kompendium", section: "Glossar" },
    { doc: "kompendium", section: "IND.1 Prozessleit- und Automatisierungstechnik" },
  ],
};
