# IT-Grundschutz-Praktiker – Vorbereitungskurs

Progressive Web App zur Vorbereitung auf die Prüfung zum **IT-Grundschutz-Praktiker** des BSI. Die App ist für E-Ink-Displays optimiert und vollständig auf Deutsch.

## Inhalte

- **Kurs**: 37 Lektionen zu den 15 Themenfeldern des Curriculums v1.1, jeweils mit Lernzielen, Quellenangaben und Kontrollfragen.
- **Labore**: 14 interaktive Übungen an einer fiktiven Übungsorganisation (Strukturanalyse, Schutzbedarf, Modellierung, IT-Grundschutz-Check, Risikoanalyse u. a.).
- **Training**: Fragen aus dem Prüfungsfragenpool mit sofortiger Rückmeldung, nach Themenfeld, gemischt oder als Fehlertraining.
- **Prüfungssimulation** nach den Prüfungsbedingungen v2.2: 50 Fragen, 60 Minuten, je vier Aussagen (0–4 richtig), Wertung nur bei vollständig richtiger Antwort, bestanden ab 30 Punkten.
- **Fortschritt**: Lektionen, Labore, Trefferquote je Themenfeld und Verlauf der Simulationen – gespeichert nur lokal im Browser, mit JSON-Export und -Import.
- **Glossar** mit den wichtigsten Begriffen.

Alle prüfungsrelevanten Inhalte stützen sich auf die BSI-Dokumente in `resources/` (BSI-Standards 200-1 bis 200-4, IT-Grundschutz-Kompendium 2023, Zertifizierungs- und Auditierungsschema, Profile-Strukturbeschreibung u. a.). „Praxis 2026“-Kästen sind als nicht prüfungsrelevant gekennzeichnet. Die Zuordnung zum Curriculum steht in [docs/curriculum-coverage.md](docs/curriculum-coverage.md).

## Entwicklung

```sh
nvm use      # Node-Version aus .nvmrc
npm ci
npm run dev
npm run check   # Lint, Typecheck, Tests mit Coverage, Build
```

Architektur- und Werkzeugentscheidungen sind in [docs/decisions](docs/decisions) dokumentiert.
