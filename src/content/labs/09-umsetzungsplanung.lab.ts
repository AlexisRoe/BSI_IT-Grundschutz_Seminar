import type { Lab } from "../course.types";
import { LAB_ORG } from "./lab-organisation.constants";

/** Labor Themenfeld 9: Umsetzungsplanung. */
export const lab: Lab = {
  id: "umsetzungsplanung",
  topic: 9,
  title: "Realisierungsplan priorisieren",
  scenario: [
    LAB_ORG.intro,
    "Nach dem IT-Grundschutz-Check liegen offene Maßnahmen vor. Das Budget für dieses Jahr reicht nicht für alles. Planen Sie die Umsetzung nach den Hinweisen des BSI-Standards 200-2.",
  ],
  tasks: [
    {
      kind: "order",
      id: "reihenfolge",
      prompt:
        "Bringen Sie die offenen Maßnahmen in eine sinnvolle Umsetzungsreihenfolge (oben = zuerst).",
      items: [
        {
          id: "m1",
          label: "Fileserver: restriktive Rechtevergabe herstellen",
          detail: "Basis-Anforderung, bestehender Server",
        },
        {
          id: "m2",
          label: "Zentrale Bildschirmsperre per Gruppenrichtlinie",
          detail: "Standard-Anforderung, Quick Win mit Breitenwirkung",
        },
        {
          id: "m3",
          label: "Clients: lokale Firewall-Regeln verfeinern",
          detail: "Standard-Anforderung, erst nach den Servern",
        },
        {
          id: "m4",
          label: "Konstruktionsserver: Zwei-Faktor-Authentisierung",
          detail: "Maßnahme für erhöhten Schutzbedarf aus der Risikoanalyse",
        },
      ],
      explanation:
        "Basis vor Standard vor erhöhtem Schutzbedarf. Innerhalb der Standard-Anforderungen zuerst Maßnahmen mit großer Breitenwirkung; Server vor Clients.",
    },
    {
      kind: "classify",
      id: "plan",
      prompt:
        "Ist der jeweilige Eintrag im Realisierungsplan vollständig im Sinne des BSI-Standards 200-2?",
      categories: [
        { id: "ok", label: "Vollständig" },
        { id: "fehlt", label: "Unvollständig" },
      ],
      items: [
        {
          id: "p1",
          label:
            "S01 Fileserver – SYS.1.1.A3 – Gruppenberechtigungen auflösen – bis 30.06. – 0 € – Herr Weber (IT-Betrieb)",
          answer: "ok",
          explanation:
            "Zielobjekt, Baustein/Anforderung, Maßnahme, Termin, Budget und Verantwortlicher sind vorhanden.",
        },
        {
          id: "p2",
          label: "Backup verbessern – irgendwann dieses Jahr",
          answer: "fehlt",
          explanation:
            "Zielobjekt, Baustein, Anforderung, konkreter Termin, Budget und Verantwortliche fehlen.",
        },
        {
          id: "p3",
          label: "Clients – SYS.2.1 – Firewall-Regeln – Q4 – 2.000 € – (keine Verantwortlichen)",
          answer: "fehlt",
          explanation:
            "Ohne verbindlich benannte Verantwortliche verzögert sich die Umsetzung erfahrungsgemäß erheblich.",
        },
      ],
    },
  ],
  sources: [{ doc: "200-2", section: "Kap. 9 Umsetzung der Sicherheitskonzeption", page: 157 }],
};
