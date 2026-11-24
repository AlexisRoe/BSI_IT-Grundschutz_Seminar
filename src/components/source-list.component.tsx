import type { SourceRef } from "@/content/course.types";
import { formatSource } from "@/content/sources.constants";
import { Flex, List, ListItem, Text } from "@/ui";

/** Lists source references under a "Quellen" caption. */
export function SourceList({ sources }: { sources: readonly SourceRef[] }) {
  if (sources.length === 0) return null;
  return (
    <Flex column gap="md">
      <Text>Quellen</Text>
      <List>
        {sources.map((s) => (
          <ListItem key={formatSource(s)}>{formatSource(s)}</ListItem>
        ))}
      </List>
    </Flex>
  );
}
