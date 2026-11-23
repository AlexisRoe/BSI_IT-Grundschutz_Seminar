import type { TopicContent } from "../course.types";

/** Themenfeld 6: Umsetzung der IT-Grundschutz-Vorgehensweise. */
export const topic: TopicContent = {
  topic: 6,
  lessons: [
    {
      id: "t06-l01",
      title: "Strukturanalyse: Geschäftsprozesse, Anwendungen und Gruppenbildung",
      depth: "II",
      minutes: 35,
      goals: [
        "Die Aktionsfelder der Standard-Absicherung in die richtige Reihenfolge bringen",
        "Geschäftsprozesse und Anwendungen in sinnvoller Granularität erfassen",
        "Objekte nach den Kriterien des BSI-Standards 200-2 zu Gruppen zusammenfassen",
      ],
      blocks: [
        { type: "heading", text: "Aktionsfelder der Standard-Absicherung" },
        {
          type: "list",
          ordered: true,
          items: [
            "Festlegung des Geltungsbereichs (Informationsverbund)",
            "**Strukturanalyse**",
            "**Schutzbedarfsfeststellung**",
            "**Modellierung** (Auswahl und Anpassung von Anforderungen)",
            "**IT-Grundschutz-Check**",
            "**Risikoanalyse** (bei hohem/sehr hohem Schutzbedarf oder nicht modellierbaren Objekten)",
            "Umsetzungsplanung und Umsetzung",
          ],
        },
        {
          type: "paragraph",
          text: "Die Aktionsfelder Strukturanalyse, Schutzbedarfsfeststellung, Modellierung, IT-Grundschutz-Check und Risikoanalyse **müssen nicht zwingend nacheinander** abgearbeitet werden – je nach Rahmenbedingungen und Teamgröße können sie auch unabhängig und zeitgleich erfolgen.",
        },
        { type: "heading", text: "Zweck und Teilaufgaben der Strukturanalyse" },
        {
          type: "paragraph",
          text: "Die Strukturanalyse dient der **Vorerhebung** der Bestandteile des Informationsverbunds: Geschäftsprozesse, Informationen, Anwendungen, IT-, ICS- und IoT-Systeme, Räume und Kommunikationsnetze. Vorhandene Datenbanken (Inventarisierung, Konfigurationsmanagement, Prozessmodellierung) sollten als Quellen genutzt werden.",
        },
        {
          type: "list",
          items: [
            "Erfassung der Geschäftsprozesse, Anwendungen und Informationen",
            "Netzplanerhebung",
            "Erhebung von IT-, ICS- und IoT-Systemen und ähnlichen Objekten",
            "Erfassung der Räume und Gebäude (im ICS-Bereich auch die produzierenden Räumlichkeiten)",
          ],
        },
        {
          type: "callout",
          variant: "hinweis",
          title: "Reihenfolge flexibel",
          text: "Klassisch werden zuerst die Anwendungen und davon ausgehend die weiteren Objekte ermittelt. Da abstrakte Anwendungen schwer losgelöst von Technik zu erfassen sind, kann es zweckmäßig sein, zuerst die IT- und ICS-Systeme zu erheben – dann mit den Servern beginnen.",
        },
        { type: "heading", text: "Komplexitätsreduktion durch Gruppenbildung" },
        {
          type: "paragraph",
          text: "Ähnliche Objekte werden zu **Gruppen** zusammengefasst. Das reduziert die Datenmenge, vereinfacht die Administration und senkt durch Standardisierung die Zahl potenzieller Sicherheitslücken. Eine **Stichprobe** aus einer Gruppe repräsentiert in der Regel den Sicherheitszustand der Gruppe.",
        },
        {
          type: "table",
          headers: ["Allgemeine Kriterien", "Zusätzlich bei technischen Objekten"],
          rows: [
            ["gleicher Typ", "ähnlich konfiguriert"],
            ["ähnliche Aufgaben", "ähnlich ins Netz eingebunden (z. B. gleiches Segment)"],
            [
              "ähnliche Rahmenbedingungen",
              "ähnliche administrative und infrastrukturelle Rahmenbedingungen",
            ],
            ["**gleicher Schutzbedarf**", "ähnliche Anwendungen, **gleicher Schutzbedarf**"],
          ],
        },
        {
          type: "paragraph",
          text: "Wichtigstes Beispiel sind **Clients**. Auch Server mit gleicher Aufgabe, Räume oder Handscanner können gruppiert werden. Bei **Virtualisierung** gelten dieselben Regeln; VMs auf verschiedenen Hosts dürfen eine Gruppe bilden. Beim **Cloud Computing** ist Gruppenbildung **zwingend erforderlich**. Typ und Anzahl der gruppierten Objekte sind zu vermerken.",
        },
        { type: "heading", text: "Geschäftsprozesse und Anwendungen erfassen" },
        {
          type: "list",
          items: [
            "Geschäftsprozesse in **sinnvoller Granularität**: Hauptprozess plus wichtigste Subprozesse (z. B. Personalgewinnung, Mitarbeiterverwaltung), aber keine zu detaillierte Auflistung. Im ICS-Bereich auch Nebenprozesse wie Logistik und Instandhaltung.",
            "Je Prozess: eindeutiger Bezeichner, Name, Prozessverantwortliche/Fachabteilung, kurze Beschreibung inkl. verarbeiteter Informationen, benötigte Anwendungen.",
            "Quellen: Prozesslandkarten, Geschäftsverteilungspläne, Aufgabenbeschreibungen, das Verfahrensverzeichnis des Datenschutzbeauftragten, Workshops und Interviews.",
            "Anwendungen erfassen, die mindestens ein Mindestniveau an Vertraulichkeit, Integrität oder Verfügbarkeit erfordern; **Standard-Software der Clients als Paket** betrachten, damit z. B. E-Mail nicht vergessen wird; virtualisierte Anwendungen nicht vergessen.",
            "Der **Zusammenhang zwischen Geschäftsprozessen und Anwendungen muss immer dargestellt** werden.",
          ],
        },
        {
          type: "paragraph",
          text: "**Datenträger und Dokumente** mit Mindestschutzbedarf, die nicht fest an eine Anwendung oder ein IT-System gebunden sind, werden gesondert und möglichst gruppiert erfasst – z. B. Backup-Datenträger, USB-Sticks, ausgedruckte Notfallhandbücher, Mikrofilme, wichtige Verträge.",
        },
        {
          type: "example",
          title: "RECPLAST GmbH",
          text: "Der BSI-Standard 200-2 illustriert alle Schritte an der fiktiven RECPLAST GmbH (ca. 500 Beschäftigte, zwei Standorte in Bonn, drei Vertriebsstandorte). Die Prozesse werden mit Kürzeln wie GP002 bezeichnet und als Kerngeschäft oder unterstützender Prozess eingeordnet.",
        },
      ],
      sources: [
        { doc: "200-2", section: "Kap. 8 Einleitung", page: 76 },
        { doc: "200-2", section: "Kap. 8.1 bis 8.1.3", page: 78 },
      ],
      quiz: [
        {
          id: "q-t06-l01-1",
          topic: 6,
          level: "basis",
          stem: "Welche Kriterien müssen Objekte laut BSI-Standard 200-2 erfüllen, um derselben Gruppe zugeordnet zu werden?",
          options: [
            { text: "Sie sind vom gleichen Typ.", correct: true },
            { text: "Sie haben ähnliche Aufgaben.", correct: true },
            { text: "Sie weisen den gleichen Schutzbedarf auf.", correct: true },
            { text: "Sie wurden vom selben Hersteller im selben Jahr gekauft.", correct: false },
          ],
          explanation:
            "Kriterien: gleicher Typ, ähnliche Aufgaben, ähnliche Rahmenbedingungen, gleicher Schutzbedarf. Hersteller oder Kaufdatum sind kein Kriterium.",
          source: { doc: "200-2", section: "Kap. 8.1.1", page: 79 },
        },
        {
          id: "q-t06-l01-2",
          topic: 6,
          level: "basis",
          stem: "Müssen Strukturanalyse, Schutzbedarfsfeststellung, Modellierung und IT-Grundschutz-Check strikt nacheinander durchgeführt werden?",
          options: [
            {
              text: "Ja, jede Phase setzt den Abschluss der vorherigen zwingend voraus.",
              correct: false,
            },
            {
              text: "Nein, sie können je nach Rahmenbedingungen auch unabhängig und zeitgleich erfolgen.",
              correct: true,
            },
            { text: "Nur bei der Kern-Absicherung dürfen sie parallel laufen.", correct: false },
            {
              text: "Nur die Risikoanalyse darf vor der Strukturanalyse durchgeführt werden.",
              correct: false,
            },
          ],
          explanation:
            "200-2 erlaubt die unabhängige und zeitgleiche Durchführung der Aktionsfelder.",
          source: { doc: "200-2", section: "Kap. 8 Reihenfolge der Bearbeitung", page: 78 },
        },
        {
          id: "q-t06-l01-3",
          topic: 6,
          level: "experte",
          stem: "In einer Behörde gibt es 400 Arbeitsplatz-PCs: 380 Standard-Clients in der Verwaltung und 20 Clients im Personalbereich mit Zugriff auf hoch vertrauliche Personalakten. Wie ist bei der Gruppenbildung vorzugehen?",
          options: [
            {
              text: "Alle 400 PCs bilden eine Gruppe, da sie vom gleichen Typ sind.",
              correct: false,
            },
            {
              text: "Die 20 Clients im Personalbereich bilden wegen des abweichenden Schutzbedarfs eine eigene Gruppe.",
              correct: true,
            },
            {
              text: "Typ und Anzahl der jeweils zusammengefassten Objekte werden vermerkt.",
              correct: true,
            },
            {
              text: "Jeder PC muss wegen der Vertraulichkeit einzeln erfasst werden.",
              correct: false,
            },
          ],
          explanation:
            "Objekte einer Gruppe müssen den gleichen Schutzbedarf aufweisen; Einzelerfassung ist nicht nötig.",
          source: { doc: "200-2", section: "Kap. 8.1.1", page: 79 },
        },
      ],
    },
    {
      id: "t06-l02",
      title: "Netzplan, IT-, ICS- und IoT-Systeme, Räume",
      depth: "II",
      minutes: 30,
      goals: [
        "Die Mindestinhalte eines Netzplans für die Strukturanalyse benennen",
        "IT-, ICS-, IoT-Systeme und sonstige Geräte vollständig erheben",
        "Räume und Kommunikationsverbindungen richtig erfassen",
      ],
      blocks: [
        { type: "heading", text: "Netzplanerhebung" },
        {
          type: "paragraph",
          text: "Ein **Netzplan** ist eine grafische Übersicht über die eingesetzten Komponenten und deren Vernetzung. Er sollte mindestens darstellen:",
        },
        {
          type: "list",
          items: [
            "**IT-Systeme**: Clients, Server, aktive Netzkomponenten (Switches, Router, WLAN Access Points), Netzdrucker",
            "**ICS- und IoT-Komponenten mit Netzanschluss**: z. B. Handscanner, Industriedrucker, SPS, Schaltschränke",
            "**Netzverbindungen** zwischen diesen Systemen (LAN, WLAN, Backbone)",
            "**Verbindungen nach außen** (Internetanbindung, Funkstrecken, Mietleitungen)",
          ],
        },
        {
          type: "paragraph",
          text: "Zu jedem Objekt gehören Minimalinformationen: eindeutige Bezeichnung, Typ und Funktion, Plattform, Standort, zuständige Administration, Kommunikationsschnittstellen, Art der Netzanbindung und Netzadresse. **Virtuelle Systeme und Netze** (VLANs, VPNs) werden wie physische dargestellt; die Zuordnung zu Hosts muss nachvollziehbar sein. Die **Trennung von Office- und ICS-Netz** sollte sichtbar sein, Bereiche mit unterschiedlichem Schutzbedarf sollten gekennzeichnet werden.",
        },
        {
          type: "callout",
          variant: "merke",
          title: "Bereinigter Netzplan",
          text: "Ein vorhandener Netzplan ist mit der tatsächlichen IT-Struktur abzugleichen und zu aktualisieren. Ein bereinigter Netzplan mit auf das Notwendige reduziertem Detaillierungsgrad eignet sich, um Dritten die Strukturen zu zeigen, und ist eine sinnvolle Grundlage für eine Zertifizierung.",
        },
        { type: "heading", text: "Erhebung der Systeme" },
        {
          type: "table",
          headers: ["Objektart", "Was ist zu beachten?"],
          rows: [
            [
              "IT-Systeme",
              "Vernetzte **und nicht vernetzte** Systeme, auch IoT- und ICS-Geräte, TK-Anlagen, Smartphones, virtuelle Systeme. Erfasst wird das System als Ganzes (z. B. „Linux-Server“), nicht Tastatur oder Bildschirm. Angaben: Bezeichnung/Gruppe mit Anzahl, Beschreibung, Plattform, Aufstellungsort, Status (in Betrieb, im Test, in Planung), Benutzer/Administration. Danach werden **Anwendungen den IT-Systemen zugeordnet**.",
            ],
            [
              "ICS-Systeme",
              "Arbeitsplatz-PCs der Fertigung (gruppieren), Peripherie inklusive Funkverbindungen wie Bluetooth, SPS, WLAN-Module für Maschinen, selbstfahrende Flurfahrzeuge.",
            ],
            [
              "Sonstige Geräte / IoT",
              "Auch Klimaanlagen, Gefahrenmeldeanlagen oder Kaffeemaschinen können die Sicherheit beeinträchtigen. IoT-Geräte werden leicht übersehen – Rundgang durch die Räume („Was braucht Strom und könnte vernetzt sein?“), Gespräche mit der Haustechnik, regelmäßige Netzscans.",
            ],
          ],
        },
        { type: "heading", text: "Räume und Liegenschaften" },
        {
          type: "list",
          items: [
            "Alle Liegenschaften, in denen die Geschäftsprozesse betrieben werden: Betriebsgelände, Gebäude, Etagen, Räume **und die Wegstrecken** dazwischen.",
            "Kommunikationsverbindungen über für Dritte zugängliches Gelände sind **Außenverbindungen** – auch drahtlose, wenn Zugriffe Dritter nicht auszuschließen sind.",
            "Auch Räume außerhalb der Liegenschaften: **Telearbeitsplätze**, temporär angemietete Arbeitsplätze und Lagerflächen.",
            "Ein **Schutzschrank** mit IT-Systemen wird wie ein Raum erfasst.",
            "Auch Räume mit nicht elektronischen schutzbedürftigen Informationen (Aktenordner, Mikrofilme) gehören dazu.",
          ],
        },
      ],
      sources: [{ doc: "200-2", section: "Kap. 8.1.4 bis 8.1.8", page: 87 }],
      quiz: [
        {
          id: "q-t06-l02-1",
          topic: 6,
          level: "basis",
          stem: "Welche Objekte sollte ein Netzplan für die Strukturanalyse mindestens darstellen?",
          options: [
            { text: "Aktive Netzkomponenten wie Switches und Router", correct: true },
            { text: "ICS-Komponenten mit Netzanschluss", correct: true },
            { text: "Verbindungen des betrachteten Bereichs nach außen", correct: true },
            { text: "Die Telefonnummern aller Mitarbeitenden", correct: false },
          ],
          explanation:
            "Gefordert sind IT-Systeme, ICS-/IoT-Komponenten mit Netzanschluss, Netzverbindungen und Außenverbindungen.",
          source: { doc: "200-2", section: "Kap. 8.1.4", page: 87 },
        },
        {
          id: "q-t06-l02-2",
          topic: 6,
          level: "basis",
          stem: "Wie ist ein Schutzschrank, in dem Server untergebracht sind, in der Strukturanalyse zu behandeln?",
          options: [
            { text: "Wie ein Raum", correct: true },
            { text: "Wie ein IT-System", correct: false },
            { text: "Gar nicht, da er keine Informationen verarbeitet", correct: false },
            { text: "Als Kommunikationsverbindung", correct: false },
          ],
          explanation: "Schutzschränke werden wie Räume erfasst.",
          source: { doc: "200-2", section: "Kap. 8.1.8", page: 101 },
        },
        {
          id: "q-t06-l02-3",
          topic: 6,
          level: "experte",
          stem: "Ein Unternehmen verbindet zwei Gebäude per Richtfunk über ein öffentliches Gelände. Wie ist die Verbindung einzuordnen?",
          options: [
            { text: "Als Außenverbindung", correct: true },
            {
              text: "Als rein interne Verbindung, da beide Gebäude dem Unternehmen gehören",
              correct: false,
            },
            {
              text: "Auch drahtlose Verbindungen gelten als Außenverbindungen, wenn Zugriffe Dritter nicht ausgeschlossen werden können.",
              correct: true,
            },
            { text: "Sie muss in der Strukturanalyse nicht erfasst werden.", correct: false },
          ],
          explanation:
            "Verbindungen über für Dritte zugängliches Gelände sind Außenverbindungen; das gilt auch für Funkstrecken.",
          source: { doc: "200-2", section: "Kap. 8.1.8", page: 101 },
        },
      ],
    },
    {
      id: "t06-l03",
      title: "Schutzbedarfsfeststellung und Vererbung",
      depth: "II",
      minutes: 45,
      goals: [
        "Die drei Schutzbedarfskategorien und die sechs Schadensszenarien anwenden",
        "Vererbung, Maximumprinzip, Abhängigkeiten, Kumulations- und Verteilungseffekt erklären und anwenden",
        "Schlussfolgerungen für Risikoanalyse und Sicherheitszonen ziehen",
      ],
      blocks: [
        { type: "heading", text: "Schutzbedarfskategorien" },
        {
          type: "table",
          headers: ["Kategorie", "Definition"],
          rows: [
            ["normal", "Die Schadensauswirkungen sind **begrenzt und überschaubar**."],
            ["hoch", "Die Schadensauswirkungen können **beträchtlich** sein."],
            [
              "sehr hoch",
              "Die Schadensauswirkungen können ein **existenziell bedrohliches, katastrophales Ausmaß** erreichen.",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Da Schutzbedarf meist nicht quantifizierbar ist, trifft der IT-Grundschutz eine **qualitative** Aussage. Institutionen können weitere Kategorien definieren (z. B. „unkritisch“) oder für Vertraulichkeit andere Stufen nutzen. Bei mehr als drei Kategorien muss klar sein, welche „hoch“ bzw. „sehr hoch“ entsprechen – das wird für die Auswahl der Objekte für die Risikoanalyse benötigt.",
        },
        { type: "heading", text: "Sechs Schadensszenarien" },
        {
          type: "table",
          headers: ["Szenario", "normal", "hoch", "sehr hoch"],
          rows: [
            [
              "Verstoß gegen Gesetze/Vorschriften/Verträge",
              "geringfügige Konsequenzen",
              "erhebliche Konsequenzen, hohe Konventionalstrafen",
              "fundamentaler Verstoß, ruinöse Haftungsschäden",
            ],
            [
              "Beeinträchtigung des informationellen Selbstbestimmungsrechts",
              "Beeinträchtigung in gesellschaftlicher Stellung oder wirtschaftlichen Verhältnissen möglich",
              "erhebliche Beeinträchtigung möglich",
              "Gefahr für Leib und Leben oder persönliche Freiheit",
            ],
            [
              "Beeinträchtigung der persönlichen Unversehrtheit",
              "nicht möglich",
              "nicht absolut auszuschließen",
              "gravierend möglich, Gefahr für Leib und Leben",
            ],
            [
              "Beeinträchtigung der Aufgabenerfüllung",
              "tolerabel; max. Ausfallzeit **24–72 Stunden**",
              "für einzelne nicht tolerabel; **1–24 Stunden**",
              "für alle nicht tolerabel; **unter 1 Stunde**",
            ],
            [
              "Negative Innen- oder Außenwirkung",
              "gering bzw. nur intern",
              "breite Ansehensbeeinträchtigung",
              "landesweit, evtl. existenzgefährdend",
            ],
            [
              "Finanzielle Auswirkungen",
              "tolerabel",
              "beachtlich, nicht existenzbedrohend",
              "existenzbedrohend",
            ],
          ],
          caption: "Nach BSI-Standard 200-2, Tabellen 2 bis 4 – von jeder Institution anzupassen",
        },
        {
          type: "paragraph",
          text: "Grenzwerte sollten institutionsspezifisch sein: 200.000 Euro können für einen Konzern gering, 10.000 Euro für ein Kleinunternehmen existenzbedrohend sein – daher bieten sich prozentuale Grenzwerte (z. B. vom Umsatz) an. Für ICS-Bereiche können kürzere Ausfallzeiten nötig sein. Die Grenze zwischen „normal“ und „hoch“ sollte so gezogen werden, dass für „normal“ die Basis- und Standard-Anforderungen ausreichen.",
        },
        { type: "heading", text: "Vererbung und ihre Regeln" },
        {
          type: "paragraph",
          text: "Zuerst wird der Schutzbedarf der **Geschäftsprozesse und Informationen** bestimmt. Er **vererbt** sich auf die Objekte, die zu ihrer Verarbeitung genutzt werden: Anwendungen → IT-Systeme, ICS- und sonstige Geräte → Räume → Kommunikationsverbindungen. Bewährt hat sich die Frage „**Was wäre, wenn …?**“ gemeinsam mit den Anwendenden.",
        },
        {
          type: "definition",
          term: "Maximumprinzip",
          text: "Der Schaden bzw. die Summe der Schäden mit den **schwerwiegendsten Auswirkungen** bestimmt den Schutzbedarf eines Objekts.",
        },
        {
          type: "definition",
          term: "Beachtung von Abhängigkeiten",
          text: "Ist eine wichtige Anwendung B auf Ergebnisse einer für sich weniger bedeutenden Anwendung A angewiesen, wird der Schutzbedarf von B auf A übertragen.",
        },
        {
          type: "definition",
          term: "Kumulationseffekt",
          text: "Mehrere (kleinere) Schäden auf einem Objekt können zu einem höheren Gesamtschaden führen – der Schutzbedarf **steigt**. Beispiel: Ein Server, auf dem alle Anwendungen der Kundendatenerfassung laufen.",
        },
        {
          type: "definition",
          term: "Verteilungseffekt",
          text: "Ein Objekt erbt den hohen Schutzbedarf einer Anwendung **nicht**, weil auf ihm nur unwesentliche Teile laufen oder Redundanzen bestehen – der Schutzbedarf wird **relativiert**. Tritt hauptsächlich bei der **Verfügbarkeit** auf (z. B. redundante Systeme, Ausweicharbeitsplätze).",
        },
        {
          type: "callout",
          variant: "merke",
          title: "Grundwerte einzeln dokumentieren",
          text: "Der Gesamtschutzbedarf eines IT-Systems ergibt sich aus dem Maximum über Vertraulichkeit, Integrität und Verfügbarkeit. Ist nur die Vertraulichkeit „hoch“, ist das System hochschutzbedürftig – Integrität und Verfügbarkeit müssen deshalb aber NICHT angehoben werden. Festlegungen sind immer mit **Begründung** zu dokumentieren.",
        },
        {
          type: "example",
          title: "Virtualisierung",
          text: [
            "VMs mit normalem Verfügbarkeitsbedarf auf einem Host → **Kumulation** kann den Host auf „hoch“ heben.",
            "Mit einem **Warm-Standby**-System auf weiterer Hardware sinkt der Schutzbedarf durch **Verteilung** wieder auf „normal“.",
            "VMs mit hohem Verfügbarkeitsbedarf → Kumulation evtl. auf „sehr hoch“, durch **Hot-Standby** wieder auf „hoch“.",
          ],
        },
        { type: "heading", text: "Kritische Kommunikationsverbindungen" },
        {
          type: "list",
          items: [
            "**Außenverbindungen** (Internet, öffentliches Gelände, Funk) – auch die für Fernadministration",
            "Verbindungen, über die **hochschutzbedürftige Informationen** übertragen werden",
            "Verbindungen im **produzierenden Bereich**, z. B. zwischen getrennten Netzen",
          ],
        },
        { type: "heading", text: "Schlussfolgerungen" },
        {
          type: "table",
          headers: ["Schutzbedarf", "Schutzwirkung der IT-Grundschutz-Anforderungen"],
          rows: [
            ["normal", "Im Allgemeinen ausreichend und angemessen"],
            [
              "hoch",
              "Standard-Absicherung, unter Umständen allein nicht ausreichend – Risikoanalyse",
            ],
            [
              "sehr hoch",
              "Reicht allein im Allgemeinen nicht aus – zusätzliche Maßnahmen individuell per Risikoanalyse",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Eine Risikoanalyse ist außerdem nötig, wenn Objekte nicht hinreichend modellierbar sind oder in nicht vorgesehenen Einsatzszenarien betrieben werden. Damit sich hoher Schutzbedarf nicht nach dem Maximumprinzip über die Vernetzung ausbreitet, sollten **Sicherheitszonen** eingerichtet werden – räumlich, technisch (Netzsegmentierung) oder personell (Rollentrennung).",
        },
      ],
      sources: [{ doc: "200-2", section: "Kap. 8.2 Schutzbedarfsfeststellung", page: 104 }],
      quiz: [
        {
          id: "q-t06-l03-1",
          topic: 6,
          level: "basis",
          stem: "Wie ist die Schutzbedarfskategorie „hoch“ im BSI-Standard 200-2 definiert?",
          options: [
            { text: "Die Schadensauswirkungen können beträchtlich sein.", correct: true },
            { text: "Die Schadensauswirkungen sind begrenzt und überschaubar.", correct: false },
            {
              text: "Die Schadensauswirkungen können existenziell bedrohlich sein.",
              correct: false,
            },
            { text: "Es entsteht in keinem Fall ein Schaden.", correct: false },
          ],
          explanation:
            "normal = begrenzt/überschaubar, hoch = beträchtlich, sehr hoch = existenziell bedrohlich.",
          source: { doc: "200-2", section: "Kap. 8.2.1", page: 104 },
        },
        {
          id: "q-t06-l03-2",
          topic: 6,
          level: "basis",
          stem: "Auf einem Server laufen fünf Anwendungen mit jeweils normalem Verfügbarkeitsbedarf. Fällt der Server aus, ist die gesamte Kundenbetreuung lahmgelegt. Welcher Effekt liegt vor?",
          options: [
            { text: "Verteilungseffekt", correct: false },
            { text: "Kumulationseffekt", correct: true },
            { text: "Maximumprinzip ohne Erhöhung", correct: false },
            { text: "Keiner, der Schutzbedarf bleibt in jedem Fall normal", correct: false },
          ],
          explanation: "Mehrere kleinere Schäden addieren sich zu einem höheren Gesamtschaden.",
          source: { doc: "200-2", section: "Kap. 8.2.2", page: 108 },
        },
        {
          id: "q-t06-l03-3",
          topic: 6,
          level: "basis",
          stem: "Welche maximal tolerierbare Ausfallzeit nennt BSI-Standard 200-2 für die Schutzbedarfskategorie „sehr hoch“ (Beeinträchtigung der Aufgabenerfüllung)?",
          options: [
            { text: "Kleiner als eine Stunde", correct: true },
            { text: "Zwischen einer und 24 Stunden", correct: false },
            { text: "Zwischen 24 und 72 Stunden", correct: false },
            { text: "Mehr als eine Woche", correct: false },
          ],
          explanation: "normal: 24–72 h, hoch: 1–24 h, sehr hoch: unter 1 h.",
          source: { doc: "200-2", section: "Kap. 8.2.1, Tabelle 4", page: 107 },
        },
        {
          id: "q-t06-l03-4",
          topic: 6,
          level: "experte",
          stem: "Ein Datenbankserver hat für Vertraulichkeit den Schutzbedarf „hoch“, für Integrität und Verfügbarkeit „normal“. Welche Aussagen treffen zu?",
          options: [
            { text: "Der Gesamtschutzbedarf des Servers ist „hoch“.", correct: true },
            {
              text: "Integrität und Verfügbarkeit müssen automatisch auf „hoch“ angehoben werden.",
              correct: false,
            },
            {
              text: "Der Schutzbedarf sollte für alle drei Grundwerte einzeln dokumentiert werden.",
              correct: true,
            },
            { text: "Die Festlegungen sind zu begründen.", correct: true },
          ],
          explanation:
            "Gesamtschutzbedarf = Maximum; die einzelnen Grundwerte bleiben unverändert und werden einzeln und begründet dokumentiert.",
          source: { doc: "200-2", section: "Kap. 8.2.4", page: 114 },
        },
      ],
    },
    {
      id: "t06-l04",
      title: "Modellierung nach IT-Grundschutz",
      depth: "II",
      minutes: 35,
      goals: [
        "Die Modellierung als Zuordnung von Bausteinen zu Zielobjekten durchführen und dokumentieren",
        "Die Vorteile des Schichtenmodells nennen",
        "Baustein-Anforderungen angemessen an die Institution anpassen",
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Mit den Ergebnissen von Strukturanalyse und Schutzbedarfsfeststellung wird der Informationsverbund mit den Bausteinen des Kompendiums **nachgebildet**. Ergebnis ist ein **IT-Grundschutz-Modell** aus (ggf. mehrfach verwendeten) Bausteinen – für realisierte Teile ein **Prüfplan**, für geplante ein **Entwicklungskonzept**.",
        },
        { type: "heading", text: "Vorteile des Schichtenmodells" },
        {
          type: "list",
          items: [
            "Reduktion der Komplexität durch sinnvolle Aufteilung",
            "Vermeidung von Redundanzen: übergeordnete Aspekte werden nur **einmal** bearbeitet, nicht für jedes IT-System",
            "Bündelung der Zuständigkeiten (ISMS/ORP → Grundsatzfragen, INF → Haustechnik, SYS → Systemverantwortliche, NET → Netzadministration, APP → Anwendungsverantwortliche)",
            "Einzelaspekte lassen sich leichter aktualisieren, ohne andere Schichten zu berühren",
          ],
        },
        { type: "heading", text: "Dokumentation der Modellierung" },
        {
          type: "table",
          headers: ["Spalte", "Inhalt"],
          rows: [
            ["Nummer und Titel des Bausteins", "z. B. SYS.1.3 Server unter Unix"],
            ["Relevanz", "ja/nein – schneller Überblick, dass kein Baustein vergessen wurde"],
            ["Zielobjekt", "Zielobjekt oder Zielobjektgruppe, z. B. S020"],
            ["Begründung", "Randinformationen; bei Nicht-Relevanz **explizit begründen**"],
            [
              "Ansprechpartner",
              "Erst bei der Planung des IT-Grundschutz-Checks ermittelt; Vorarbeit über die Rollen im Baustein",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "R1-Bausteine bilden das grundlegende Sicherheitsgerüst; es sind die Bausteine der Bereiche **ISMS, ORP und OPS.1.1 Kern-IT-Betrieb**. R2 und R3 finden sich in allen anderen Schichten. Die Kennzeichnung ist nur eine Empfehlung – jede Institution kann eine abweichende, sinnvolle Reihenfolge festlegen.",
        },
        {
          type: "example",
          title: "Modellierung bei Virtualisierung",
          text: [
            "Physischer Server S1 mit Linux und hostbasierter Virtualisierung, darauf VM1 und VM2 (Windows Server 2012) und VM3 (Linux).",
            "Zuordnung: SYS.1.1 Allgemeiner Server auf S1, VM3 und die **Gruppe aus VM1 und VM2**; SYS.1.3 Server unter Unix auf S1 und VM3; SYS.1.2.2 Windows Server 2012 auf die Gruppe VM1/VM2.",
            "Läuft der Hypervisor direkt auf der Hardware (Bare Metal), ist dafür eine **Risikoanalyse** nötig, deren Ergebnisse mit SYS.1.5 Virtualisierung konsolidiert werden.",
          ],
        },
        { type: "heading", text: "Anforderungen anpassen" },
        {
          type: "paragraph",
          text: "Anforderungen sind knapp formulierte Teilziele. Sie müssen in **Sicherheitsmaßnahmen** übersetzt werden, die an Rahmenbedingungen und Sprachgebrauch der Institution angepasst und ausreichend konkret sind. Anforderungen sind **sinngemäß** umzusetzen; alle Änderungen gegenüber dem Kompendium werden **dokumentiert**. In seltenen Fällen können sogar Basis-Anforderungen nicht umsetzbar sein, etwa bei einem Konflikt zwischen Brand- und Einbruchschutz – dann sind andere Lösungen zu finden und nachvollziehbar zu dokumentieren.",
        },
        {
          type: "table",
          headers: ["Kriterium", "Maßnahmen müssen …"],
          rows: [
            [
              "Wirksamkeit",
              "vor den möglichen Gefährdungen wirksam schützen, den Schutzbedarf abdecken",
            ],
            ["Eignung", "in der Praxis umsetzbar sein, Abläufe nicht zu stark behindern"],
            [
              "Praktikabilität",
              "leicht verständlich, einfach anwendbar, wenig fehleranfällig sein",
            ],
            ["Akzeptanz", "für alle anwendbar (barrierefrei) sein, niemanden diskriminieren"],
            ["Wirtschaftlichkeit", "in geeignetem Verhältnis zu den zu schützenden Werten stehen"],
          ],
          caption: "Angemessenheit von Sicherheitsmaßnahmen nach BSI-Standard 200-2, Kap. 8.3.6",
        },
        {
          type: "callout",
          variant: "merke",
          title: "Externe Dienstleister",
          text: "Aufgaben können an Dienstleister ausgelagert werden – die Verantwortung für die Informationssicherheit verbleibt immer bei der auslagernden Institution. Schnittstellen sind vorab festzulegen.",
        },
      ],
      sources: [
        { doc: "200-2", section: "Kap. 8.3 Modellierung eines Informationsverbunds", page: 132 },
        { doc: "kompendium", section: "Schichtenmodell und Modellierung" },
      ],
      quiz: [
        {
          id: "q-t06-l04-1",
          topic: 6,
          level: "basis",
          stem: "Welche Spalten sollte die Dokumentation der Modellierung laut BSI-Standard 200-2 enthalten?",
          options: [
            { text: "Nummer und Titel des Bausteins", correct: true },
            { text: "Relevanz", correct: true },
            { text: "Zielobjekt und Begründung", correct: true },
            { text: "Umsetzungsstatus „ja/teilweise/nein“", correct: false },
          ],
          explanation:
            "Der Umsetzungsstatus wird erst im IT-Grundschutz-Check erhoben, nicht bei der Modellierung.",
          source: { doc: "200-2", section: "Kap. 8.3.4", page: 138 },
        },
        {
          id: "q-t06-l04-2",
          topic: 6,
          level: "basis",
          stem: "Welche Kriterien muss eine angemessene Sicherheitsmaßnahme laut BSI-Standard 200-2 erfüllen?",
          options: [
            { text: "Wirksamkeit", correct: true },
            { text: "Praktikabilität", correct: true },
            { text: "Wirtschaftlichkeit", correct: true },
            { text: "Akzeptanz", correct: true },
          ],
          explanation:
            "Angemessenheit umfasst Wirksamkeit, Eignung, Praktikabilität, Akzeptanz und Wirtschaftlichkeit.",
          source: { doc: "200-2", section: "Kap. 8.3.6", page: 143 },
        },
        {
          id: "q-t06-l04-3",
          topic: 6,
          level: "experte",
          stem: "Ein Baustein OPS.1.1.2 Ordnungsgemäße IT-Administration wird als „nicht relevant“ eingestuft, weil die Administration komplett außerhalb des Informationsverbunds stattfindet. Was ist korrekt?",
          options: [
            {
              text: "Die Nicht-Relevanz ist in der Spalte Begründung explizit zu begründen.",
              correct: true,
            },
            { text: "Der Baustein kann kommentarlos weggelassen werden.", correct: false },
            {
              text: "Die Verantwortung für die Informationssicherheit verbleibt bei der Institution, auch wenn Aufgaben ausgelagert sind.",
              correct: true,
            },
            {
              text: "Die Schnittstellen zu einem externen Dienstleister sollten vorab festgelegt werden.",
              correct: true,
            },
          ],
          explanation:
            "Nicht relevante Bausteine sind explizit zu begründen; bei Auslagerung bleibt die Verantwortung bei der auslagernden Institution.",
          source: { doc: "200-2", section: "Kap. 8.3.4 und 8.3.7", page: 138 },
        },
      ],
    },
  ],
};
