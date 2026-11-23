import { useState } from "react";
import { GLOSSARY } from "@/content/glossary.content";
import { formatSource } from "@/content/sources.constants";
import { Flex, Input, List, ListItem, Text, Title } from "@/ui";

/** Searchable glossary of IT-Grundschutz terms. */
export function GlossaryView() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const entries = GLOSSARY.filter(
    (e) => !q || e.term.toLowerCase().includes(q) || e.definition.toLowerCase().includes(q),
  );

  return (
    <Flex column gap="md">
      <Title size="1">Glossar</Title>
      <Input placeholder="z. B. Schutzbedarf" value={query} onChange={setQuery} useClear>
        Begriff suchen
      </Input>
      {entries.length === 0 && <Text>Keine Einträge gefunden.</Text>}
      <List as="detailed">
        {entries.map((e) => (
          <ListItem key={e.term} title={e.term} description={formatSource(e.source)}>
            {e.definition}
          </ListItem>
        ))}
      </List>
    </Flex>
  );
}
