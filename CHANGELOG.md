# Changelog

Alle nennenswerten Änderungen an diesem Projekt. Das Format folgt [Keep a Changelog](https://keepachangelog.com/de/1.1.0/), die Versionen [Semantic Versioning](https://semver.org/lang/de/). Ausführliche Release-Notizen stehen bei den [GitHub Releases](https://github.com/AlexisRoe/BSI_IT-Grundschutz_Seminar/releases).

## [1.5.1] – 2026-11-24

### Hinzugefügt
- README und `RESSOURCES.md` verlinken den kostenlosen Online-Kurs IT-Grundschutz des BSI als ergänzendes Lernangebot. Er wird nur verlinkt, nicht übernommen (Nutzungsbedingungen des BSI, Stand 2018).

### Geändert
- README erwähnt den lokalen Ordner `resources/` nicht mehr; die Architekturgrafik zeigt, dass Quellenzitate manuell statt per CI geprüft werden.

## [1.5.0] – 2026-11-24

### Geändert
- BSI-Dokumente (PDF und extrahierter Text) sind aus urheberrechtlichen Gründen nicht mehr im Repository; `resources/` ist git-ignoriert, `RESSOURCES.md` liegt im Wurzelverzeichnis (ADR 0019). Die frühere Git-Historie enthält sie weiterhin.
- Die Prüfung der Quellenzitate ist kein Teil von CI mehr, sondern läuft manuell mit `npm run verify:citations` (lädt die Dokumente, extrahiert den Text, führt den Test aus; Ghostscript nötig).

## [1.4.0] – 2026-11-24

### Hinzugefügt
- Lektionen enden mit der Schaltfläche „Nach oben“, die an den Seitenanfang springt.

### Geändert
- Aktualisierung auf `e-ink-ui-lib` 1.5.0. Die App nutzt nun die dort aufgenommenen Bausteine statt eigener Kopien: `EinkProvider`, `RichText`, `OrderList`, `Skeleton.Group`, `Alert` mit Aktionsbereich, `Checkbox` mit Ergebnis-Anzeige, `Table` mit Zeilenumbruch und Spaltenbreite, `Button` mit linker Ausrichtung, `useNow`, Hash-Router-Grundfunktionen, `useDownload` sowie `shuffle`, `move` und `scramble`. Testhilfen kommen aus `e-ink-ui-lib/testing`.
- Die Schriften liefert die Bibliothek nun selbst als Dateien aus; das Build-Plugin zum Auslagern entfällt (ADR 0010 ersetzt).
- Fehlgeschlagene Importe zeigen eine deutsche Meldung statt der englischen Standardmeldung.
- In der Ordnungsaufgabe bleiben die Pfeil-Schaltflächen nach dem Auswerten sichtbar, sind aber deaktiviert.
- Einstellungen: „Über diese App“ ist nun eine Überschrift über der Karte, die Schaltfläche „Nach Update suchen“ steht unter der Karte.
- Karten auf Start und Laborseite: zwischen Text und Aktionsschaltfläche steht nun ein Abstand von 1 rem (`Space`).
- Begriffsdefinitionen in den Lektionen stehen unter einer Überschrift (Ebene 4) statt unter einem winzigen Etikett. Dasselbe gilt für das Glossar (Begriff als Überschrift, Definition und Quelle als Text; die Definitionen wurden dort zuvor nicht angezeigt) und die Build-Informationen in den Einstellungen („Version: …“).
- Tabellenzeilen (Fortschritt, Prüfungsergebnis, Lektionen) lassen sich nicht mehr anklicken und werden nicht mehr hervorgehoben.
- Startseite: Abstand zwischen Fortschrittsbalken und Karte; Kurs, Labore, Training und Prüfungssimulation haben je eine Überschrift, eine Beschreibung und eine Schaltfläche, angeordnet in einem 2×2-Raster.
- Kursübersicht: Das Themenfeld mit der ersten unerledigten Lektion ist beim Öffnen automatisch aufgeklappt (von oben beginnend); der Inhalt der Themenfelder hat mehr Innenabstand.
- Einstellungen: Reihenfolge „Über diese App“, „Sichern“, „Zurücksetzen“, mit größerem Abstand zwischen den Abschnitten. „Fortschritt exportieren“ ist nun eine Umriss-Schaltfläche, „Gesamten Fortschritt löschen“ die primäre (gefüllte). Der Import hat statt eines Feldlabels eine Überschrift („Fortschritt importieren“) auf Ebene 2.
- Callout-Texte zeigen Hervorhebungen (`**…**`) nun an, statt die Markierung zu entfernen.

### Behoben
- Beim Wechsel zur vorherigen oder nächsten Lektion blieb die Ansicht am Seitenende stehen; sie springt nun nach oben (Korrektur in `e-ink-ui-lib` 1.5.0: `navigate` setzte den Scrollbereich der Seite nicht zurück). Das doppelte `<main>`-Element der App ist entfernt.
- Der Hinweis „Eine neue Version ist verfügbar“ blieb auch nach „Neu laden“ bestehen. Ursache: Der Service Worker konnte seine Laufzeitbibliothek wegen der Trusted-Types-Richtlinie (CSP) nicht laden und beantwortete die Aktivierungsanfrage nicht; auch Zwischenspeicher und Offline-Betrieb waren dadurch betroffen. Die Laufzeitbibliothek ist jetzt in `sw.js` eingebettet (ADR 0018).

### Entfernt
- Eigene CSS-Regeln für Tabellen, Listenmarker, Antwortzeilen, Update-Hinweis und linksbündige Schaltflächen.

## [1.3.3] – 2026-11-24

### Hinzugefügt
- `CHANGELOG.md`, abgeleitet aus den bisherigen Release-Notizen.

## [1.3.2] – 2026-11-24

### Geändert
- Die Fragenübersicht der Prüfungssimulation nutzt das Raster (`Grid`) der UI-Bibliothek, Fragekarten, Quellenlisten und Ladeanzeige das `Flex`-Layout. Eigene CSS-Hilfsklassen entfallen; der Abstand zwischen den Fragen-Schaltflächen ist minimal kleiner (8 statt 10 px) (#10).

### Hinzugefügt
- `docs/ui-lib-findings.md`: Übersicht zu Eigenbauten, Workarounds und Verbesserungsvorschlägen für `e-ink-ui-lib` (#10).

## [1.3.1] – 2026-11-24

### Hinzugefügt
- Update-Suche in den Einstellungen: „Nach Update suchen“ prüft auf eine neuere Version, „Update installieren und neu laden“ installiert sie sofort. Veraltete Cache-Einträge werden entfernt, der Lernfortschritt bleibt unberührt (#9).

### Geändert
- Beim Seitenwechsel springt die Ansicht wieder nach oben (#9).

### Behoben
- Aufzählungspunkte und Nummern stehen auf Höhe der ersten Textzeile statt mittig neben dem Text (#9).

## [1.1.2] – 2026-11-24

### Behoben
- Offline-Start: Die Content Security Policy verlangt Trusted Types für Skripte, wodurch die Registrierung des Service Workers abgelehnt wurde und die App nach der Installation weiter eine Internetverbindung brauchte. Eine Trusted-Types-Richtlinie erlaubt nun ausschließlich `/sw.js`; die CSP bleibt streng (#8).

## [1.1.1] – 2026-11-23

### Geändert
- `e-ink-ui-lib` von 1.2.0 auf 1.3.1 aktualisiert (#3).
- CodeQL-Action von v4.39.3 auf v4.39.4 aktualisiert, weiterhin auf einen Commit-SHA gepinnt (#2).

## [1.1.0] – 2026-11-23

### Hinzugefügt
- Wörtliche Quellenzitate für alle 184 Fragen des Prüfungsfragenpools; ein CI-Test prüft, dass das Zitat auf der angegebenen Seite steht (ADR 0017).
- Regelmäßige Update-Prüfung der installierten App: beim Start, stündlich, bei Rückkehr in den Vordergrund und wenn die Verbindung zurückkehrt. Neue Versionen werden erst nach Bestätigung aktiviert (ADR 0018).
- Extrahierter Text der BSI-Dokumente in `resources/.text/`.
- `docs/content-review.md` mit allen Befunden der inhaltlichen Prüfung.

### Geändert
- 24 Seitenangaben korrigiert; eine Frage verweist jetzt auf BSI-Standard 200-2 statt auf das Kompendium-Glossar.
- 21 Fragen präzisiert, weil Aussage und zitierte Quelle nicht übereinstimmten. Kein Lösungsschlüssel war falsch.

## [1.0.0] – 2026-11-23

Erste Version der Progressive Web App zur Vorbereitung auf die Prüfung zum IT-Grundschutz-Praktiker (deutsch, E-Ink-optimiert, offline nutzbar).

### Hinzugefügt
- Kurs mit 37 Lektionen zu 15 Themenfeldern (Curriculum v1.1) und 116 Kontrollfragen.
- 14 interaktive Labore an einer fiktiven Übungsorganisation.
- Training nach Themenfeld, gemischt oder als Fehlertraining.
- Prüfungssimulation nach den Prüfungsbedingungen v2.2 (50 Fragen, 60 Minuten, bestanden ab 30 Punkten) mit 184 Pool-Fragen.
- Glossar mit 41 Begriffen.
- Fortschrittsanzeige sowie Export, Import und Zurücksetzen des Fortschritts (JSON).
- Hinweise „Praxis 2026“ (NIS-2, digitaler IT-Grundschutz, C5), als nicht prüfungsrelevant gekennzeichnet.

### Bekannte Einschränkungen
- Tabelle 2 der Prüfungsbedingungen ergibt 49 statt 50 Fragen; die 50. wird zufällig gezogen (ADR 0015).
- `npm audit` meldet 4 mittlere Befunde in Build-Werkzeugen, nicht in der ausgelieferten App; bewusst zurückgestellt (ADR 0016).

[1.4.0]: https://github.com/AlexisRoe/BSI_IT-Grundschutz_Seminar/compare/v1.3.3...v1.4.0
[1.3.3]: https://github.com/AlexisRoe/BSI_IT-Grundschutz_Seminar/compare/v1.3.2...v1.3.3
[1.3.2]: https://github.com/AlexisRoe/BSI_IT-Grundschutz_Seminar/compare/v1.3.1...v1.3.2
[1.3.1]: https://github.com/AlexisRoe/BSI_IT-Grundschutz_Seminar/compare/v1.1.2...v1.3.1
[1.1.2]: https://github.com/AlexisRoe/BSI_IT-Grundschutz_Seminar/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/AlexisRoe/BSI_IT-Grundschutz_Seminar/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/AlexisRoe/BSI_IT-Grundschutz_Seminar/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/AlexisRoe/BSI_IT-Grundschutz_Seminar/releases/tag/v1.0.0
