# Quelldokumente

Herkunft und Inhalt der BSI-Dokumente, die lokal in `resources/` liegen. Das Verzeichnis ist git-ignoriert (Urheberrecht, ADR 0019); `npm run verify:citations` lädt die Dokumente anhand der Quellen-URLs dieser Datei herunter (Format der Einträge nicht ändern: Überschrift `### \`datei.pdf\``, Zeile `**Quelle:** URL; …`). Alle Dokumente sind Veröffentlichungen des BSI. Kursinhalte dürfen nur auf diese Dokumente gestützt werden (ADR 0014).

**Abrufdatum** ist bei allen Dokumenten der 23.11.2026, der Tag, an dem sie erstmals aufgenommen wurden. Bei den Dokumenten zum Schulungskonzept, den BSI-Standards 200-1 bis 200-3 und beim Kompendium wurde am selben Tag geprüft, dass die Datei unter der angegebenen URL byte-identisch ist.

## Schulungskonzept und Prüfung

### `curriculum_1_1.pdf`
- **Titel:** Curriculum zum Schulungskonzept IT-Grundschutz-Praktiker und IT-Grundschutz-Berater, Version 1.1 vom 24.09.2024
- **Quelle:** https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Berater/curriculum_1_1.pdf?__blob=publicationFile; abgerufen und auf Identität geprüft am 23.11.2026
- **Inhalt:** Legt die Lerninhalte für die Praktiker-Schulung (24 Unterrichtseinheiten) und die Berater-Schulung fest. Für jedes der 15 Themenfelder nennt es Lerninhalte, Umfang und Vertiefungsgrad. Das Curriculum ist das Gerüst des gesamten Kurses.

### `faq_curiculum.pdf`
- **Titel:** Fragen und Antworten zum Schulungskonzept IT-Grundschutz-Berater, Version 1.1 vom 24.09.2024
- **Quelle:** https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Berater/faq_curiculum.pdf?__blob=publicationFile; abgerufen und auf Identität geprüft am 23.11.2026
- **Inhalt:** Beantwortet häufige Fragen zu Qualifikationsformen, Zielgruppen, Schulungsanbietern und Prüfung. Es nennt die Dokumente, die als Grundlage der Prüfung gelten, und regelt die Kennzeichnung zusätzlicher Inhalte.

### `pruefungsbedingungen_fuer_den_it_gs_praktiker.pdf`
- **Titel:** Prüfungsbedingungen für den IT-Grundschutz-Praktiker, Version 2.2, Stand 23.06.2026
- **Quelle:** https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Berater/pruefungsbedingungen_fuer_den_it_gs_praktiker.pdf?__blob=publicationFile; abgerufen und auf Identität geprüft am 23.11.2026
- **Inhalt:** Regelt Ablauf und Bewertung der Praktiker-Prüfung: 50 Multiple-Choice-Fragen mit je vier Aussagen, 60 Minuten, Bestehensgrenze 60 %. Tabelle 2 verteilt die Fragen auf die Themenfelder, und es gibt Vorgaben zu Basis- und Expertenfragen. Die Prüfungssimulation setzt diese Regeln um (ADR 0015).

## IT-Grundschutz-Kompendium und BSI-Standards

### `IT_Grundschutz_Kompendium_Edition2023.pdf`
- **Titel:** IT-Grundschutz-Kompendium, Edition 2023
- **Quelle:** https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium/IT_Grundschutz_Kompendium_Edition2023.pdf?__blob=publicationFile; abgerufen und auf Identität geprüft am 23.11.2026
- **Inhalt:** Enthält die IT-Grundschutz-Bausteine in den Schichten ISMS, ORP, CON, OPS, DER, APP, SYS, IND, NET und INF mit ihren Basis-, Standard- und erhöhten Anforderungen. Außerdem stehen darin die elementaren Gefährdungen G 0.1 bis G 0.47, das Rollen- und Begriffsglossar und Hinweise zum Aufbau der Bausteine.

### `standard_200_1.pdf`
- **Titel:** BSI-Standard 200-1: Managementsysteme für Informationssicherheit (ISMS), Version 1.0, Oktober 2017
- **Quelle:** https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/BSI_Standards/standard_200_1.pdf?__blob=publicationFile; abgerufen und auf Identität geprüft am 23.11.2026
- **Inhalt:** Beschreibt die allgemeinen Anforderungen an ein ISMS, kompatibel zu ISO/IEC 27001. Behandelt werden die Verantwortung der Leitung, die Sicherheitsorganisation, die Leitlinie, der Sicherheitsprozess nach dem PDCA-Modell und die Dokumentation.

### `standard_200_2.pdf`
- **Titel:** BSI-Standard 200-2: IT-Grundschutz-Methodik, Version 1.0, Oktober 2017
- **Quelle:** https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/BSI_Standards/standard_200_2.pdf?__blob=publicationFile; abgerufen und auf Identität geprüft am 23.11.2026
- **Inhalt:** Erklärt die Vorgehensweisen Basis-, Kern- und Standard-Absicherung, von der Initiierung des Sicherheitsprozesses bis zur Aufrechterhaltung. Die Kapitel zu Strukturanalyse, Schutzbedarfsfeststellung, Modellierung, IT-Grundschutz-Check und Umsetzungsplanung bilden den Kern der Praktiker-Prüfung.

### `standard_200_3.pdf`
- **Titel:** BSI-Standard 200-3: Risikoanalyse auf der Basis von IT-Grundschutz, Version 1.0, Oktober 2017
- **Quelle:** https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/BSI_Standards/standard_200_3.pdf?__blob=publicationFile; abgerufen und auf Identität geprüft am 23.11.2026
- **Inhalt:** Beschreibt, wie Risiken für Zielobjekte mit erhöhtem Schutzbedarf oder ohne passenden Baustein analysiert werden. Dazu gehören die Gefährdungsübersicht auf Basis der elementaren Gefährdungen, die Einstufung nach Eintrittshäufigkeit und Schadenshöhe, die Risikobehandlung und die Rückführung in den Sicherheitsprozess.

### `standard_200_4.pdf`
- **Titel:** BSI-Standard 200-4: Business Continuity Management, 2023
- **Quelle:** https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/BSI_Standards/standard_200_4.pdf?__blob=publicationFile&v=8; abgerufen am 23.11.2026
- **Inhalt:** Beschreibt den Aufbau eines BCMS mit dem Stufenmodell Reaktiv-, Aufbau- und Standard-BCMS. Behandelt werden die Business-Impact-Analyse mit Kenngrößen wie MTPD, RTO und RPO, die Abgrenzung von Störung, Notfall und Krise mit der Besonderen Aufbauorganisation sowie Übungen und Tests.

## Zertifizierung und Audit

### `zertifizierungsschema.pdf`
- **Titel:** Zertifizierung nach ISO 27001 auf der Basis von IT-Grundschutz – Zertifizierungsschema, Version 2.2
- **Quelle:** https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/Zertifikat/ISO27001/Zertifizierungsschema_Kompendium.pdf?__blob=publicationFile&v=2; abgerufen am 23.11.2026
- **Inhalt:** Regelt das Zertifizierungsverfahren beim BSI mit den Rollen Antragsteller, Auditor und Zertifizierungsstelle. Beschrieben werden Ablauf, Audittypen (Erst-, Überwachungs- und Re-Zertifizierungsaudit), Fristen und die Gültigkeit des Zertifikats.

### `auditierungsschema.pdf`
- **Titel:** Auditierungsschema für ISO 27001-Zertifizierungen auf der Basis von IT-Grundschutz, Version 2.5
- **Quelle:** https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/Zertifikat/ISO27001/Auditierungsschema_Kompendium.pdf?__blob=publicationFile&v=4; abgerufen am 23.11.2026
- **Inhalt:** Gibt den Auditorinnen und Auditoren das Vorgehen vor: Dokumentenprüfung, Auditplan, Vor-Ort-Audit mit Stichproben und Auditbericht. Es definiert die Arten der Feststellungen (Empfehlung, geringfügige und schwerwiegende Abweichung) und das Gesamtvotum.

### `hinweise_referenzdokumente.pdf`
- **Titel:** Hinweise zur Bereitstellung der Referenzdokumente für ISO 27001-Zertifizierungen auf der Basis von IT-Grundschutz, Version 2.1
- **Quelle:** https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/Zertifikat/ISO27001/Hinweise_Referenzdokumente_Kompendium.pdf?__blob=publicationFile&v=1; abgerufen am 23.11.2026
- **Inhalt:** Beschreibt, welche Referenzdokumente die Institution für das Audit vorlegen muss und was sie enthalten müssen. Dazu gehören Richtlinien (A.0), Strukturanalyse (A.1), Schutzbedarfsfeststellung (A.2), Modellierung (A.3), IT-Grundschutz-Check (A.4), Risikoanalyse (A.5) und Realisierungsplan (A.6).

## Weitere Hilfsmittel

### `leitfaden_basis_absicherung.pdf`
- **Titel:** Leitfaden zur Basis-Absicherung nach IT-Grundschutz, Oktober 2017
- **Quelle:** https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/Broschueren/Leitfaden_zur_Basis-Absicherung.pdf?__blob=publicationFile&v=3; abgerufen am 23.11.2026
- **Inhalt:** Kompakte Anleitung für kleine Institutionen, die mit der Basis-Absicherung in den IT-Grundschutz einsteigen. Sie führt in wenigen Schritten durch Sicherheitsorganisation, Leitlinie, Strukturanalyse, Modellierung und die Umsetzung der Basis-Anforderungen.

### `it_grundschutz_profil_strukturbeschreibung.pdf`
- **Titel:** IT-Grundschutz-Profile – Strukturbeschreibung, Version 1.0 vom 28.09.2018
- **Quelle:** https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/Hilfsmittel/Profile/Strukturbeschreibung.pdf?__blob=publicationFile&v=1; abgerufen am 23.11.2026
- **Inhalt:** Legt den einheitlichen Aufbau von IT-Grundschutz-Profilen fest, also von Musterlösungen für Institutionen mit vergleichbaren Rahmenbedingungen. Sie beschreibt die Pflicht- und optionalen Kapitel, darunter Geltungsbereich, Rahmenbedingungen, Vorgehensweise, Strukturanalyse, Schutzbedarf, Modellierung und Restrisiken.
