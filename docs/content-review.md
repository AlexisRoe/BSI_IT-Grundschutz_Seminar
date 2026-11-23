# Quellenprüfung des Prüfungsfragenpools

Unabhängige Prüfung der Pool-Fragen gegen die zitierten BSI-Dokumente (ergänzt den automatischen Zitat-Check aus ADR 0017).

## Methode

Für jede Pool-Frage werden Fragestamm, **alle vier Aussagen** und die Erläuterung mit der zitierten Stelle in `resources/.text/` verglichen. Jede Aussage erhält ein Urteil:

- **belegt**: Die Quelle stützt die Aussage bzw. widerlegt den Distraktor eindeutig.
- **zu frei paraphrasiert**: Die Aussage ist sinngemäß belegt, die Formulierung weicht aber so ab, dass die Bewertung strittig werden kann.
- **nicht in der Quelle**: Die Quelle enthält die Aussage nicht, oder ein Distraktor ist laut Quelle vertretbar richtig.

Ein Distraktor muss *laut Quelle* eindeutig falsch sein. Ein vertretbar richtiger Distraktor macht die Frage unfair. Die Erläuterung muss zum Urteil passen.

Ablauf: Je Themenfeld prüft ein frischer, nur lesender Reviewer-Agent die Datei `src/content/questions/NN-*.questions.ts`. Die Befunde werden gesichtet, die Inhalte themenweise korrigiert und die Maßnahme unten eingetragen. Was sich aus der Quelle nicht entscheiden lässt, geht an den Maintainer und bleibt bis zur Entscheidung unverändert.

Reihenfolge nach Prüfungsgewicht: Themenfeld 6, dann 8, 9, 10, dann 7, 11, 13, 14, danach die übrigen.

## Reviewer-Prompt

> Du prüfst die Prüfungsfragen in `src/content/questions/<NN>-*.questions.ts` gegen die BSI-Quellen. Ändere keine Dateien.
> Die Quelltexte liegen in `resources/.text/` (Zuordnung `doc` → Datei in `src/content/sources.constants.ts`, `.pdf` → `.txt`). Seiten beginnen mit `===== Seite N =====` (physische Seite = gedruckte Seite + `pageOffset`).
> Lies für jede Frage die zitierte Stelle und ihr Umfeld. Bewerte jede der vier Aussagen als „belegt“, „zu frei paraphrasiert“ oder „nicht in der Quelle“, gemessen daran, ob ihr `correct`-Wert laut Quelle eindeutig stimmt. Prüfe besonders, ob ein falscher Distraktor laut Quelle vertretbar richtig ist. Prüfe, ob die Erläuterung stimmt und ob das `quote` die richtigen Aussagen stützt.
> Melde nur Abweichungen als Tabelle: ID | Aussage (Nr. 1–4 oder „Erläuterung“) | Urteil | Begründung mit wörtlichem Beleg und Seite | Vorschlag. Schließe mit der Zahl der geprüften Fragen und der Fragen ohne Befund.

## Befunde

Erster Durchlauf am 23.11.2026, alle 15 Themenfelder (184 Fragen). In keiner Frage war ein `correct`-Wert laut Quelle falsch, und kein Distraktor war vertretbar richtig. Die Befunde betreffen Belegbarkeit und Formulierung. Beim Ergänzen der Zitate wurden außerdem 24 Seitenangaben korrigiert (z. B. p06-13 S. 124 → 125, p09-01 bis p09-03 S. 157 → 158) und p06-11 von `kompendium` (Glossar) auf 200-2, Kap. 8.2.2, S. 108 umgestellt.

| ID | Aussage | Urteil | Befund | Maßnahme |
|---|---|---|---|---|
| p01-02 | 4 | nicht in der Quelle | „Datenträger in einem Archiv“ nennt 200-1 nicht ausdrücklich. | Aussage durch Distraktor „Ausschließlich in digitaler Form“ ersetzt; Zitat um „jeglicher Art und Herkunft“ erweitert. |
| p01-08 | 2 | belegt, Zitat unvollständig | Zitat enthielt nur den Titel des Mindeststandards. | Zitat auf den Satz zur Umsetzungspflicht der Bundesverwaltung geändert. |
| p01-10 | 4 | nicht in der zitierten Quelle | Begründung stand nur in 200-1, zitiert ist IND.1. | Distraktor durch eine Aussage ersetzt, die IND.1 widerlegt. |
| p02-07 | 4 | nicht in der zitierten Quelle | Unverbindlichkeit der Umsetzungshinweise steht in 200-2, nicht in 200-1. | Distraktor durch eine Aussage ersetzt, die 200-1 widerlegt („kostenfrei im Internet veröffentlicht“). |
| p04-06 | 1 | zu frei paraphrasiert (gering) | Quelle: „sollten“, Aussage: „müssen“. | An Quellwortlaut angeglichen. |
| p06-16 | Erläuterung | zu frei paraphrasiert | Kompendium 2023 kennzeichnet außer ISMS, ORP, OPS.1.1 weitere Bausteine mit R1. | Erläuterung um CON.3, CON.6, DER.1, DER.2.1 ergänzt. |
| p07-01 | 3 | nicht in der zitierten Quelle | „Basis-Sicherheitscheck“ kommt in 200-2 nicht vor. | Aussage durch belegte Aussage zu Interviews ersetzt; `section` korrigiert. |
| p08-10 | 1 | belegt, andere Seite | Matrix-Hinweis steht auf S. 27, nicht S. 28. | Seite und Zitat auf S. 27 geändert. |
| p09-09 | 2 | zu frei paraphrasiert | Kausalbezug „damit nachvollziehbar“ nicht in der Quelle. | Stamm und Aussagen an den Quellwortlaut angeglichen. |
| p09-13 | 4 | passt nicht zum Stamm | Aussage betrifft den Umkehrfall (Einsparungen beim Personal). | Stamm erweitert, Aussage mit „Umgekehrt“ eingeleitet. |
| p09-15 | 4, Erläuterung | passt nicht zum Szenario | Aussage zur fehlenden Festlegung passt nicht, da Person benannt ist. | Aussage durch eindeutig falschen Distraktor ersetzt; Erläuterung nach Kap. 9.4. |
| p10-10 | 3 | zu frei paraphrasiert | Realisierungsplan-Prüfung gehört nicht zum Zeitpunkt „nach Einführung“. | Stamm auf Kap. 10.1.3 allgemein erweitert; Aussage 2 als Prüfgegenstand formuliert. |
| p10-12 | 3 | zu frei paraphrasiert | „ausreichender Überblick“ bezieht sich nicht auf Monitoring. | Stamm auf „Welche Mittel nennt 200-2“ geändert. |
| p11-01 | Erläuterung | zu frei paraphrasiert | „Basis-Absicherung nicht“ steht nicht in 200-1. | Erläuterung verweist auf 200-2, Kap. 10. |
| p12-06 | 3 | zu frei paraphrasiert | Listung nur bei positivem Prüfergebnis. | Bedingung ergänzt. |
| p12-09 | 3 | belegt, nicht durch Zitat | Restrisiken stehen in Kap. 2.7 (S. 20). | Fundstelle in der Erläuterung genannt. |
| p12-10 | 1, 2 | zu frei paraphrasiert | „Kleinere“ nicht in der Quelle; Stamm „stark“ passte nicht zu Aussage 2. | Stamm neutral, Aussagen an S. 12–13 angeglichen. |
| p13-09 | 4 | zu frei paraphrasiert (gering) | Quelle: „kann vorliegen“, nicht Definition. | Aussage als „Sie kann vorliegen, wenn …“ formuliert. |
| p13-14 | Stamm | unklar | Re-Zertifizierung hätte Faktor 0,8. | Stamm auf Erstzertifizierung präzisiert, Erläuterung nennt beide Formeln. |
| p14-10 | Erläuterung | zu frei paraphrasiert | „Pflicht“ stärker als SOLLTE (DER.2.1.A16). | „bleibt gefordert (DER.2.1.A16)“. |
| p15-06 | Erläuterung | teilweise irreführend | Tests stehen auch in DER.4.A1 (Standard). | Erläuterung präzisiert. |

### Offene Hinweise (kein Fehler, optional)

- Bei einigen Fragen stützt das Zitat nur eine der richtigen Aussagen; die übrigen stehen im direkten Umfeld (z. B. p01-04, p01-05, p01-09, p02-04, p06-02, p07-03, p08-02, p11-10, p12-04, p15-04). Ein `SourceRef` erlaubt nur ein Zitat.
- Im extrahierten Kompendium-Text fehlen teils Leerzeichen (z. B. DER.2.1, IND.1). Der Abgleich ignoriert deshalb Leerzeichen vollständig.
- Zertifizierungsschema widerspricht sich bei der Form der Änderungsmeldung (2.9.1 „formlos per E-Mail“, 2.9.3 „schriftlich“); p11-14 ist davon nicht betroffen.
