import type { TopicQuestions } from "../course.types";

/** Prüfungsfragenpool Themenfeld 9. */
export const pool: TopicQuestions = {
  topic: 9,
  questions: [
    {
      id: "p09-01",
      topic: 9,
      level: "basis",
      stem: "Welche Ergebnisse bilden laut BSI-Standard 200-2 die Grundlage für die Umsetzungsplanung?",
      options: [
        { text: "Die Ergebnisse des IT-Grundschutz-Checks", correct: true },
        { text: "Maßnahmenvorschläge aus durchgeführten Risikoanalysen", correct: true },
        { text: "Strukturanalyse, Schutzbedarfsfeststellung und Modellierung", correct: true },
        { text: "Ausschließlich die Wünsche der Fachabteilungen", correct: false },
      ],
      explanation:
        "Alle Ergebnisse der Sicherheitskonzeption fließen in die Umsetzungsplanung ein.",
      source: { doc: "200-2", section: "Kap. 9", page: 157 },
    },
    {
      id: "p09-02",
      topic: 9,
      level: "basis",
      stem: "Wie verbindlich sind die Maßnahmen aus den Umsetzungshinweisen des IT-Grundschutzes?",
      options: [
        {
          text: "Sie sind nicht verbindlich und können durch eigene Maßnahmen ergänzt oder ersetzt werden.",
          correct: true,
        },
        { text: "Sie sind wörtlich umzusetzen.", correct: false },
        { text: "Sie ersetzen die Anforderungen der Bausteine.", correct: false },
        { text: "Sie gelten nur für Bundesbehörden.", correct: false },
      ],
      explanation:
        "Eigene Maßnahmen mit neuen Aspekten sollten dem IT-Grundschutz-Team des BSI mitgeteilt werden.",
      source: { doc: "200-2", section: "Kap. 9", page: 157 },
    },
    {
      id: "p09-03",
      topic: 9,
      level: "basis",
      stem: "Welche Eigenschaften müssen Sicherheitsmaßnahmen bei der Sichtung der Untersuchungsergebnisse aufweisen?",
      options: [
        { text: "Sie müssen vor den möglichen Gefährdungen wirksam schützen.", correct: true },
        { text: "Sie müssen in der Praxis tatsächlich umsetzbar sein.", correct: true },
        { text: "Sie müssen wirtschaftlich sein.", correct: true },
        {
          text: "Sie dürfen andere Sicherheitsmaßnahmen aushebeln, wenn sie günstiger sind.",
          correct: false,
        },
      ],
      explanation:
        "Maßnahmen dürfen Organisationsabläufe nicht behindern oder andere Maßnahmen aushebeln.",
      source: { doc: "200-2", section: "Kap. 9.1", page: 157 },
    },
    {
      id: "p09-04",
      topic: 9,
      level: "basis",
      stem: "Was ist zu tun, wenn sich eine aus einer Anforderung abgeleitete Maßnahme als unwirtschaftlich erweist?",
      options: [
        {
          text: "Ersatzmaßnahmen suchen, durch die die Anforderung dennoch erfüllt wird",
          correct: true,
        },
        {
          text: "Falls keine angemessene Maßnahme gefunden wird, Restrisiko und Entscheidung dokumentieren",
          correct: true,
        },
        { text: "Die Anforderung stillschweigend streichen", correct: false },
        { text: "Bei Basis-Anforderungen das Restrisiko einfach akzeptieren", correct: false },
      ],
      explanation: "Bei Basis-Anforderungen ist eine Restrisiko-Akzeptanz nicht vorgesehen.",
      source: { doc: "200-2", section: "Kap. 9.2", page: 159 },
    },
    {
      id: "p09-05",
      topic: 9,
      level: "basis",
      stem: "Wie sollten die festgestellten Schwachstellen der Leitungsebene zur Budgetentscheidung präsentiert werden?",
      options: [
        {
          text: "Geordnet nach Schutzbedarf, zusammen mit den Kosten und dem Aufwand der noch notwendigen Maßnahmen",
          correct: true,
        },
        { text: "Alphabetisch nach Systemnamen ohne Kostenangaben", correct: false },
        { text: "Nur als Gesamtsumme ohne Details", correct: false },
        { text: "Gar nicht, die Leitung muss nicht informiert werden", correct: false },
      ],
      explanation:
        "Die Darstellung nach Schutzbedarf dient der Sensibilisierung; Kosten und Aufwand sind Entscheidungsgrundlage.",
      source: { doc: "200-2", section: "Kap. 9.2", page: 159 },
    },
    {
      id: "p09-06",
      topic: 9,
      level: "basis",
      stem: "Was zeigen die Kreuzreferenztabellen im Rahmen der Umsetzungsplanung?",
      options: [
        {
          text: "Gegen welche elementaren Gefährdungen kein ausreichender Schutz besteht, wenn Anforderungen nicht erfüllt werden",
          correct: true,
        },
        {
          text: "Welche Anforderungen gegen welche elementaren Gefährdungen wirken",
          correct: true,
        },
        { text: "Die Kosten jeder Maßnahme", correct: false },
        { text: "Die verantwortlichen Personen je Maßnahme", correct: false },
      ],
      explanation:
        "Kreuzreferenztabellen machen das Restrisiko bei nicht erfüllten Anforderungen sichtbar.",
      source: { doc: "200-2", section: "Kap. 9.2", page: 160 },
    },
    {
      id: "p09-07",
      topic: 9,
      level: "basis",
      stem: "Welche Kriterien nennt der BSI-Standard 200-2 als Tipps für die weitere Umsetzungsreihenfolge?",
      options: [
        { text: "Breitenwirkung der Maßnahmen", correct: true },
        { text: "Lebenszyklus des Zielobjekts", correct: true },
        { text: "Bausteine mit auffallend vielen nicht umgesetzten Anforderungen", correct: true },
        { text: "Persönliche Vorlieben der Administration", correct: false },
      ],
      explanation:
        "Genannt werden Lebenszyklus, Abhängigkeiten, Breitenwirkung, Einfluss des Bausteins und viele offene Anforderungen.",
      source: { doc: "200-2", section: "Kap. 9.3", page: 160 },
    },
    {
      id: "p09-08",
      topic: 9,
      level: "basis",
      stem: "Wo lassen sich laut BSI-Standard 200-2 sogenannte „Quick Wins“ häufig finden?",
      options: [
        { text: "Im organisatorischen Bereich", correct: true },
        { text: "Durch zentrale Konfigurationseinstellungen", correct: true },
        { text: "Ausschließlich bei teuren Hardware-Beschaffungen", correct: false },
        { text: "Nur bei Anforderungen für erhöhten Schutzbedarf", correct: false },
      ],
      explanation:
        "Quick Wins liefern schnell Sicherheitsgewinn, oft organisatorisch oder durch zentrale Einstellungen.",
      source: { doc: "200-2", section: "Kap. 9.3", page: 161 },
    },
    {
      id: "p09-09",
      topic: 9,
      level: "basis",
      stem: "Warum sollte die Entscheidung, welche Maßnahmen verschoben und welche Restrisiken akzeptiert werden, sorgfältig dokumentiert werden?",
      options: [
        {
          text: "Auch aus juristischen Gründen, um die Einhaltung der Sorgfaltspflicht belegen zu können",
          correct: true,
        },
        {
          text: "Damit in Zweifelsfällen eingeholte weitere Meinungen nachvollziehbar sind",
          correct: true,
        },
        {
          text: "Weil die Zertifizierungsstelle sonst automatisch das Zertifikat entzieht",
          correct: false,
        },
        { text: "Weil nur dokumentierte Risiken eintreten können", correct: false },
      ],
      explanation:
        "Die Dokumentation dient dem Nachweis der Sorgfaltspflicht in späteren Streitfällen.",
      source: { doc: "200-2", section: "Kap. 9.3", page: 161 },
    },
    {
      id: "p09-10",
      topic: 9,
      level: "basis",
      stem: "An wen wird der Abschluss der Realisierung einzelner Maßnahmen typischerweise gemeldet?",
      options: [
        { text: "An den Informationssicherheitsbeauftragten (ISB)", correct: true },
        { text: "An das BSI", correct: false },
        { text: "An die Zertifizierungsstelle", correct: false },
        { text: "An den Datenschutzbeauftragten", correct: false },
      ],
      explanation: "Der ISB wird informiert und berichtet regelmäßig der Leitungsebene.",
      source: { doc: "200-2", section: "Kap. 9.4", page: 161 },
    },
    {
      id: "p09-11",
      topic: 9,
      level: "basis",
      stem: "Welche realisierungsbegleitenden Maßnahmen nennt der BSI-Standard 200-2 besonders?",
      options: [
        { text: "Sensibilisierungsmaßnahmen", correct: true },
        { text: "Schulung der betroffenen Mitarbeitenden", correct: true },
        { text: "Verzicht auf jede Information der Mitarbeitenden", correct: false },
        { text: "Disziplinarmaßnahmen als erster Schritt", correct: false },
      ],
      explanation: "Ohne Sensibilisierung und Schulung verlieren Maßnahmen oft ihre Wirkung.",
      source: { doc: "200-2", section: "Kap. 9.5", page: 162 },
    },
    {
      id: "p09-12",
      topic: 9,
      level: "experte",
      stem: "Für mehrere Server und Clients sind Defizite festgestellt worden; das Budget reicht nur für einen Teil. Welche Priorisierung entspricht den Hinweisen des BSI-Standards 200-2?",
      options: [
        {
          text: "Zuerst die Server absichern (u. a. SYS.1.1), dann die angeschlossenen Clients",
          correct: true,
        },
        {
          text: "Basis-Anforderungen bevorzugen, da sie die schnellste Absicherung in der Breite erreichen",
          correct: true,
        },
        {
          text: "Schwachstellen in hochschutzbedürftigen Bereichen bevorzugt beseitigen",
          correct: true,
        },
        { text: "Zuerst alle Anforderungen bei erhöhtem Schutzbedarf umsetzen", correct: false },
      ],
      explanation:
        "Server vor Clients, Basis zuerst, Bausteine mit großem Einfluss auf hochschutzbedürftige Bereiche bevorzugen.",
      source: { doc: "200-2", section: "Kap. 9.3", page: 161 },
    },
    {
      id: "p09-13",
      topic: 9,
      level: "experte",
      stem: "Ein Unternehmen spart bei der automatisierten Patchverteilung und lässt Updates manuell einspielen. Wie bewertet der BSI-Standard 200-2 solche Einsparungen grundsätzlich?",
      options: [
        {
          text: "Einsparungen bei technischen Maßnahmen führen häufig zu einem hohen fortlaufenden Personaleinsatz.",
          correct: true,
        },
        {
          text: "Wiederkehrende Personalaufwände sind in der Kostenschätzung zu berücksichtigen.",
          correct: true,
        },
        { text: "Personalaufwand spielt bei der Kostenschätzung keine Rolle.", correct: false },
        {
          text: "Einsparungen beim Personal führen schnell zu wachsenden Sicherheitsdefiziten.",
          correct: true,
        },
      ],
      explanation:
        "200-2 weist auf diese Wechselwirkungen zwischen technischen Einsparungen und Personaleinsatz hin.",
      source: { doc: "200-2", section: "Kap. 9.2", page: 158 },
    },
    {
      id: "p09-14",
      topic: 9,
      level: "experte",
      stem: "Mehrere Standard-Anforderungen bleiben aus Ressourcenmangel vorerst unerfüllt. Welches Vorgehen empfiehlt BSI-Standard 200-2?",
      options: [
        {
          text: "Eine vereinfachte Risikoanalyse der entstandenen Defizite durchführen",
          correct: true,
        },
        {
          text: "Die Ermittlung von Gefährdungen kann dabei entfallen, da sie bei der Erstellung der Bausteine erfolgt ist.",
          correct: true,
        },
        {
          text: "Es verbleibt die Bewertung des Risikos aufgrund der fehlenden Umsetzung.",
          correct: true,
        },
        {
          text: "Die Anforderungen werden im IT-Grundschutz-Check auf „entbehrlich“ gesetzt.",
          correct: false,
        },
      ],
      explanation:
        "Fehlende Ressourcen rechtfertigen kein „entbehrlich“; die Defizite werden vereinfacht risikoanalytisch bewertet.",
      source: { doc: "200-2", section: "Kap. 9.3, Hinweis", page: 161 },
    },
    {
      id: "p09-15",
      topic: 9,
      level: "experte",
      stem: "Für eine Maßnahme wurde zwar eine verantwortliche Person benannt, sie verfügt aber weder über die Kompetenzen noch über Budget. Wie ist das laut BSI-Standard 200-2 zu bewerten?",
      options: [
        {
          text: "Unzureichend – Verantwortliche müssen ausreichende Fähigkeiten und Kompetenzen besitzen.",
          correct: true,
        },
        {
          text: "Die erforderlichen Ressourcen müssen zur Verfügung gestellt werden.",
          correct: true,
        },
        { text: "Ausreichend, solange ein Name im Realisierungsplan steht.", correct: false },
        {
          text: "Ohne verbindliche Festlegung verzögert sich die Realisierung erfahrungsgemäß erheblich.",
          correct: true,
        },
      ],
      explanation:
        "Verantwortung braucht Kompetenz und Ressourcen; sonst unterbleibt die Umsetzung oft.",
      source: { doc: "200-2", section: "Kap. 9.4", page: 161 },
    },
  ],
};
