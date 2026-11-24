# Changelog

Alle nennenswerten Änderungen an diesem Projekt. Das Format folgt [Keep a Changelog](https://keepachangelog.com/de/1.1.0/), die Versionen [Semantic Versioning](https://semver.org/lang/de/). Ausführliche Release-Notizen stehen bei den [GitHub Releases](https://github.com/AlexisRoe/BSI_IT-Grundschutz_Seminar/releases).

## [1.4.0] – 2026-11-24

### Geändert
- Aktualisierung auf `e-ink-ui-lib` 1.4.0. Die App nutzt nun die dort aufgenommenen Bausteine statt eigener Kopien: `EinkProvider`, `RichText`, `OrderList`, `Skeleton.Group`, `Alert` mit Aktionsbereich, `Checkbox` mit Ergebnis-Anzeige, `Table` mit Zeilenumbruch und Spaltenbreite, `Button` mit linker Ausrichtung, `useNow`, Hash-Router-Grundfunktionen, `useDownload` sowie `shuffle`, `move` und `scramble`. Testhilfen kommen aus `e-ink-ui-lib/testing`.
- Die Schriften liefert die Bibliothek nun selbst als Dateien aus; das Build-Plugin zum Auslagern entfällt (ADR 0010 ersetzt).
- Fehlgeschlagene Importe zeigen eine deutsche Meldung statt der englischen Standardmeldung.
- In der Ordnungsaufgabe bleiben die Pfeil-Schaltflächen nach dem Auswerten sichtbar, sind aber deaktiviert.
- Callout-Texte zeigen Hervorhebungen (`**…**`) nun an, statt die Markierung zu entfernen.

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
