import type { SourceDocId, SourceRef } from "./course.types";

/** A BSI document in `resources/` that course content may cite. */
export interface SourceDocument {
  id: SourceDocId;
  title: string;
  version: string;
  file: string;
}

/** Registry of all citable documents (see ADR 0014). */
export const SOURCES: Readonly<Record<SourceDocId, SourceDocument>> = {
  curriculum: {
    id: "curriculum",
    title: "Curriculum zum Schulungskonzept IT-Grundschutz-Praktiker und -Berater",
    version: "1.1 (24.09.2024)",
    file: "curriculum_1_1.pdf",
  },
  faq: {
    id: "faq",
    title: "Fragen und Antworten zum Schulungskonzept IT-Grundschutz-Berater",
    version: "1.1 (24.09.2024)",
    file: "faq_curiculum.pdf",
  },
  pruefung: {
    id: "pruefung",
    title: "Prüfungsbedingungen für den IT-Grundschutz-Praktiker",
    version: "2.2 (23.06.2026)",
    file: "pruefungsbedingungen_fuer_den_it_gs_praktiker.pdf",
  },
  kompendium: {
    id: "kompendium",
    title: "IT-Grundschutz-Kompendium",
    version: "Edition 2023",
    file: "IT_Grundschutz_Kompendium_Edition2023.pdf",
  },
  "200-1": {
    id: "200-1",
    title: "BSI-Standard 200-1: Managementsysteme für Informationssicherheit (ISMS)",
    version: "1.0 (Oktober 2017)",
    file: "standard_200_1.pdf",
  },
  "200-2": {
    id: "200-2",
    title: "BSI-Standard 200-2: IT-Grundschutz-Methodik",
    version: "1.0 (Oktober 2017)",
    file: "standard_200_2.pdf",
  },
  "200-3": {
    id: "200-3",
    title: "BSI-Standard 200-3: Risikoanalyse auf der Basis von IT-Grundschutz",
    version: "1.0 (Oktober 2017)",
    file: "standard_200_3.pdf",
  },
  "200-4": {
    id: "200-4",
    title: "BSI-Standard 200-4: Business Continuity Management",
    version: "2023",
    file: "standard_200_4.pdf",
  },
  zert: {
    id: "zert",
    title: "Zertifizierung nach ISO 27001 auf der Basis von IT-Grundschutz – Zertifizierungsschema",
    version: "2.2",
    file: "zertifizierungsschema.pdf",
  },
  audit: {
    id: "audit",
    title: "Auditierungsschema für ISO 27001-Zertifizierungen auf der Basis von IT-Grundschutz",
    version: "2.5",
    file: "auditierungsschema.pdf",
  },
  refdoc: {
    id: "refdoc",
    title: "Hinweise zur Bereitstellung der Referenzdokumente (ISO 27001 auf Basis IT-Grundschutz)",
    version: "2.1",
    file: "hinweise_referenzdokumente.pdf",
  },
  basis: {
    id: "basis",
    title: "Leitfaden zur Basis-Absicherung nach IT-Grundschutz",
    version: "Oktober 2017",
    file: "leitfaden_basis_absicherung.pdf",
  },
  profil: {
    id: "profil",
    title: "IT-Grundschutz-Profile – Strukturbeschreibung",
    version: "1.0 (28.09.2018)",
    file: "it_grundschutz_profil_strukturbeschreibung.pdf",
  },
};

/** Short German citation, e.g. "BSI-Standard 200-2, Kap. 8.2, S. 103". */
export function formatSource(ref: SourceRef): string {
  const doc = SOURCES[ref.doc];
  const parts = [doc.title.split(":")[0] ?? doc.title];
  if (ref.section) parts.push(ref.section);
  if (ref.page !== undefined) parts.push(`S. ${ref.page}`);
  return parts.join(", ");
}
