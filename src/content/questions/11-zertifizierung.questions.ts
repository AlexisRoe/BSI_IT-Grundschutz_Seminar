import type { TopicQuestions } from "../course.types";

/** Prüfungsfragenpool Themenfeld 11. */
export const pool: TopicQuestions = {
  topic: 11,
  questions: [
    {
      id: "p11-01",
      topic: 11,
      level: "basis",
      stem: "Welche Vorgehensweisen des IT-Grundschutzes bilden laut BSI-Standard 200-1 die Anforderungen der ISO/IEC 27001 ab und eignen sich daher als Grundlage einer ISO 27001-Zertifizierung auf Basis von IT-Grundschutz?",
      options: [
        { text: "Standard-Absicherung", correct: true },
        { text: "Kern-Absicherung", correct: true },
        { text: "Basis-Absicherung", correct: false },
        {
          text: "Keine – das BSI zertifiziert ausschließlich nach eigenen Kriterien ohne ISO-Bezug",
          correct: false,
        },
      ],
      explanation:
        "Laut 200-1 bilden Standard- und Kern-Absicherung die ISO/IEC 27001 ab. Bei reiner Basis-Absicherung reichen die Maßnahmen für eine Zertifizierung nicht aus (200-2, Kap. 10).",
      source: {
        doc: "200-1",
        section: "Kap. 9",
        page: 39,
        quote:
          "Die Standard- und die Kern-Absicherung des IT-Grundschutzes bilden die Anforderungen der ISO/IEC 27001 ab.",
      },
    },
    {
      id: "p11-02",
      topic: 11,
      level: "basis",
      stem: "Wer führt das Audit für eine ISO 27001-Zertifizierung auf der Basis von IT-Grundschutz durch?",
      options: [
        {
          text: "Ein vom BSI zertifizierter Auditteamleiter für ISO 27001-Audits auf der Basis von IT-Grundschutz",
          correct: true,
        },
        { text: "Der ISB der zu zertifizierenden Institution", correct: false },
        { text: "Die Zertifizierungsstelle des BSI selbst", correct: false },
        { text: "Ein beliebiger IT-Berater ohne Zertifizierung", correct: false },
      ],
      explanation:
        "Das Audit führt ein externer, vom BSI zertifizierter Auditteamleiter durch; die Zertifizierungsstelle prüft den Bericht.",
      source: {
        doc: "zert",
        section: "Kap. 2.1",
        page: 8,
        quote:
          "Überprüfung des Informationsverbundes durch einen vom BSI zertifizierten Auditteamleiter",
      },
    },
    {
      id: "p11-03",
      topic: 11,
      level: "basis",
      stem: "Welche Aufgaben hat die Zertifizierungsstelle im BSI laut Zertifizierungsschema?",
      options: [
        {
          text: "Sie gewährleistet als unabhängige dritte Instanz die Gleichwertigkeit der Prüfungen.",
          correct: true,
        },
        {
          text: "Sie veröffentlicht die Schemata und Interpretationen zum Verfahren.",
          correct: true,
        },
        {
          text: "Sie prüft Zertifizierungsantrag und Auditbericht und erteilt bei positivem Ergebnis das Zertifikat.",
          correct: true,
        },
        { text: "Sie führt die Dokumentenprüfung anstelle des Auditteams durch.", correct: false },
      ],
      explanation: "Die Prüfungen vor Ort und die Dokumentenprüfung führt das Auditteam durch.",
      source: {
        doc: "zert",
        section: "Kap. 2.2",
        page: 9,
        quote:
          "Die Zertifizierungsstelle übernimmt die Rolle einer unabhängigen dritten Instanz, welche die Gleichwertigkeit der Prüfungen und der Auditberichte gewährleistet.",
      },
    },
    {
      id: "p11-04",
      topic: 11,
      level: "basis",
      stem: "Aus welchen Personen kann ein Auditteam laut Zertifizierungsschema bestehen?",
      options: [
        { text: "Einem oder mehreren Auditoren", correct: true },
        { text: "Fachexperten", correct: true },
        { text: "Trainees", correct: true },
        { text: "Mitarbeitenden der zu auditierenden Institution", correct: false },
      ],
      explanation:
        "Mitarbeitende der auditierten Institution sind wegen der Unabhängigkeit ausgeschlossen.",
      source: {
        doc: "zert",
        section: "Kap. 2.2",
        page: 9,
        quote:
          "Ein Auditteam kann aus einem oder mehreren Auditoren und darüber hinaus aus Fachexperten und Trainees bestehen.",
      },
    },
    {
      id: "p11-05",
      topic: 11,
      level: "basis",
      stem: "Wann muss der vollständige Zertifizierungsantrag der Zertifizierungsstelle spätestens vorliegen?",
      options: [
        { text: "Mindestens zwei Monate vor Beginn des Audits", correct: true },
        { text: "Mindestens eine Woche vor Beginn des Audits", correct: false },
        { text: "Erst mit Übergabe des Auditberichts", correct: false },
        { text: "Ein Antrag ist bei der Erstzertifizierung nicht erforderlich.", correct: false },
      ],
      explanation:
        "Der Antrag muss mindestens zwei Monate vor Beginn der Sichtung der Referenzdokumente vorliegen.",
      source: {
        doc: "zert",
        section: "Kap. 2.3",
        page: 9,
        quote:
          "Der Zertifizierungsstelle muss der vollständige Zertifizierungsantrag mindestens zwei Monate vor Beginn des Audits",
      },
    },
    {
      id: "p11-06",
      topic: 11,
      level: "basis",
      stem: "Welche Aussagen zum Voraudit treffen laut Zertifizierungsschema zu?",
      options: [
        { text: "Es kann im Rahmen einer Erstzertifizierung durchgeführt werden.", correct: true },
        {
          text: "Das Auditteam kann gezielt einzelne Aspekte stichprobenartig prüfen.",
          correct: true,
        },
        {
          text: "Es dient der Einschätzung, ob ein Zertifizierungsaudit positiv ausgehen könnte.",
          correct: true,
        },
        { text: "Es ersetzt das Zertifizierungsaudit.", correct: false },
      ],
      explanation: "Das Voraudit ist optional und ersetzt das Zertifizierungsaudit nicht.",
      source: {
        doc: "zert",
        section: "Kap. 2.8 und 2.9.1",
        page: 12,
        quote:
          "Dabei kann das Auditteam gezielt einzelne Aspekte aus Phase 1 und 2 auswählen und stichprobenartig prüfen.",
      },
    },
    {
      id: "p11-07",
      topic: 11,
      level: "basis",
      stem: "Wie oft finden während der Laufzeit eines Zertifikats Überwachungsaudits statt?",
      options: [
        { text: "Jährlich", correct: true },
        { text: "Monatlich", correct: false },
        { text: "Nur einmal nach drei Jahren", correct: false },
        { text: "Nur auf Verlangen des Antragstellers", correct: false },
      ],
      explanation: "In die dreijährige Laufzeit sind jährliche Überwachungsaudits integriert.",
      source: {
        doc: "zert",
        section: "Kap. 2.8",
        page: 12,
        quote:
          "In die dreijährige Laufzeit eines Zertifikates integriert sind jährliche Überwachungsaudits",
      },
    },
    {
      id: "p11-08",
      topic: 11,
      level: "basis",
      stem: "Wie ist der Auditbericht an die Zertifizierungsstelle zu übermitteln?",
      options: [
        { text: "Verschlüsselt, z. B. mit OpenPGP oder S/MIME", correct: true },
        { text: "Unverschlüsselt per E-Mail, da er nur Prüfergebnisse enthält", correct: false },
        { text: "Als öffentlicher Download-Link", correct: false },
        { text: "Ausschließlich per Fax", correct: false },
      ],
      explanation:
        "Die elektronische Übermittlung muss aus Vertraulichkeitsgründen verschlüsselt erfolgen.",
      source: {
        doc: "zert",
        section: "Kap. 2.6",
        page: 11,
        quote: "an das BSI muss aus Gründen der Vertraulichkeit unbedingt verschlüsselt erfolgen",
      },
    },
    {
      id: "p11-09",
      topic: 11,
      level: "basis",
      stem: "Welche Dokumente erhält die Institution bei Zertifikatserteilung?",
      options: [
        { text: "Das Zertifikat", correct: true },
        {
          text: "Einen Zertifizierungsreport mit zusätzlichen Informationen, z. B. Auflagen",
          correct: true,
        },
        { text: "Einen Zertifizierungsbutton für Werbezwecke", correct: true },
        { text: "Die Referenzdokumente anderer zertifizierter Institutionen", correct: false },
      ],
      explanation:
        "Zertifikat, Zertifizierungsreport und Button werden mit dem Bescheid zugesandt.",
      source: {
        doc: "zert",
        section: "Kap. 2.12",
        page: 15,
        quote:
          "einen Zertifizierungsreport mit zusätzlichen Informationen zum Zertifizierungsverfahren (z. B. Auflagen) sowie einen Zertifizierungsbutton für Werbezwecke",
      },
    },
    {
      id: "p11-10",
      topic: 11,
      level: "basis",
      stem: "Welche Gründe können laut Zertifizierungsschema zur Zurückziehung eines Zertifikats führen?",
      options: [
        { text: "Das Überwachungsaudit wird nicht durchgeführt.", correct: true },
        {
          text: "Verletzung der Meldepflicht von Sicherheitsvorfällen innerhalb des Informationsverbunds",
          correct: true,
        },
        { text: "Irreführung oder Täuschung des Auditteams bzw. des BSI", correct: true },
        {
          text: "Ein Wechsel des Ansprechpartners, der unverzüglich gemeldet wurde",
          correct: false,
        },
      ],
      explanation:
        "Ein ordnungsgemäß gemeldeter Wechsel des Ansprechpartners ist kein Grund für eine Zurückziehung.",
      source: {
        doc: "zert",
        section: "Kap. 2.13.2",
        page: 16,
        quote: "Irreführungen und Täuschungen der Institution gegenüber dem Auditteam bzw. dem BSI",
      },
    },
    {
      id: "p11-11",
      topic: 11,
      level: "basis",
      stem: "Welche Aussage zu einem zurückgezogenen Zertifikat ist richtig?",
      options: [
        {
          text: "Es kann nicht wieder aktiviert werden; ggf. ist ein neues Zertifizierungsverfahren aufzusetzen.",
          correct: true,
        },
        { text: "Es wird nach Behebung der Mängel automatisch wieder gültig.", correct: false },
        { text: "Es darf weiterhin für Werbezwecke verwendet werden.", correct: false },
        { text: "Die Zertifikatsurkunde darf behalten werden.", correct: false },
      ],
      explanation:
        "Wiederherstellbar ist nur ein ausgesetztes Zertifikat; Urkunde und Report sind zurückzugeben.",
      source: {
        doc: "zert",
        section: "Kap. 2.13.2",
        page: 17,
        quote:
          "Ein zurückgezogenes Zertifikat kann nicht wieder aktiviert und in einen gültigen Zustand versetzt werden.",
      },
    },
    {
      id: "p11-12",
      topic: 11,
      level: "experte",
      stem: "Im zweiten Überwachungsaudit werden schwerwiegende Abweichungen festgestellt, die bis zur gesetzten Frist noch nicht behoben, aber in Umsetzung sind. Welche Maßnahme ist laut Zertifizierungsschema vorgesehen?",
      options: [
        { text: "Die Zertifizierungsstelle kann das Zertifikat aussetzen.", correct: true },
        { text: "Mit dem ausgesetzten Zertifikat darf nicht geworben werden.", correct: true },
        {
          text: "Nach Beseitigung der Ursachen gemäß den Vorgaben erhält das Zertifikat seine Gültigkeit zurück.",
          correct: true,
        },
        { text: "Das Zertifikat wird sofort endgültig zurückgezogen.", correct: false },
      ],
      explanation: "Abweichungen in Umsetzung führen zur Aussetzung, nicht zur Zurückziehung.",
      source: {
        doc: "zert",
        section: "Kap. 2.13.1",
        page: 16,
        quote:
          "die vom Antragsteller innerhalb der vom Auditteam gesetzten Frist noch nicht behoben sind, sich aber in Umsetzung befinden",
      },
    },
    {
      id: "p11-13",
      topic: 11,
      level: "experte",
      stem: "Ein Zertifikat wurde am 1. Juli erteilt. Wann darf das erste Überwachungsaudit frühestens beginnen, und wann muss der Auditbericht spätestens vorliegen?",
      options: [
        { text: "Beginn frühestens am 1. März des Folgejahres", correct: true },
        { text: "Auditbericht spätestens am 1. Mai des Folgejahres", correct: true },
        { text: "Beginn frühestens am 1. Januar des Folgejahres", correct: false },
        { text: "Auditbericht spätestens am 1. Juli des Folgejahres", correct: false },
      ],
      explanation:
        "Prüfungen nicht früher als vier Monate vor Ablauf des ersten Jahres; Auditbericht nicht später als zwei Monate vor diesem Zeitpunkt.",
      source: {
        doc: "zert",
        section: "Kap. 2.9.2 und 3",
        page: 13,
        quote:
          "dürfen nicht früher als vier Monate vor Ablauf des ersten bzw. zweiten Jahres nach Zertifikatserteilung beginnen",
      },
    },
    {
      id: "p11-14",
      topic: 11,
      level: "experte",
      stem: "Während der Zertifikatslaufzeit plant eine Institution, ihr Rechenzentrum an einen Dienstleister auszulagern. Was ist laut Zertifizierungsschema zu tun?",
      options: [
        {
          text: "Die wesentliche Änderung unverzüglich der Zertifizierungsstelle mitteilen",
          correct: true,
        },
        {
          text: "Das BSI entscheidet, ob eine vorzeitige Re-Zertifizierung erforderlich ist.",
          correct: true,
        },
        { text: "Nichts, da Outsourcing keine wesentliche Änderung ist", correct: false },
        { text: "Das Zertifikat selbst um den Dienstleister ergänzen", correct: false },
      ],
      explanation:
        "Änderungen im Outsourcing gelten als wesentliche Änderung und sind unverzüglich mitzuteilen.",
      source: {
        doc: "zert",
        section: "Kap. 2.9.3",
        page: 14,
        quote: "Das BSI entscheidet dann, ob eine vorzeitige Re-Zertifizierung erforderlich ist.",
      },
    },
    {
      id: "p11-15",
      topic: 11,
      level: "experte",
      stem: "Bei der Übergabe des Auditberichts an die Zertifizierungsstelle liegt die Vor-Ort-Prüfung fünf Monate zurück. Wie ist das zu bewerten?",
      options: [
        {
          text: "Unzulässig – der Bericht darf sich nur auf Prüfungen stützen, die bei Übergabe nicht älter als drei Monate sind.",
          correct: true,
        },
        { text: "Zulässig, solange der Antragsteller zustimmt", correct: false },
        { text: "Zulässig, da nur die Dokumentenprüfung aktuell sein muss", correct: false },
        { text: "Zulässig, wenn ein Voraudit stattgefunden hat", correct: false },
      ],
      explanation:
        "Dokumenten- und Umsetzungsprüfung dürfen bei Übergabe nicht älter als drei Monate sein.",
      source: {
        doc: "zert",
        section: "Kap. 2.9.1",
        page: 13,
        quote:
          "die zum Zeitpunkt der Übergabe des Auditberichts an die Zertifizierungsstelle nicht älter als drei Monate sind",
      },
    },
  ],
};
