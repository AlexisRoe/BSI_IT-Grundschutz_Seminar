import type { SourceRef } from "@/content/course.types";
import { formatSource } from "@/content/sources.constants";
import { List, ListItem, Text } from "@/ui";

/** Lists source references under a "Quellen" caption. */
export function SourceList({ sources }: { sources: readonly SourceRef[] }) {
  if (sources.length === 0) return null;
  return (
    <div className="stack">
      <Text>Quellen</Text>
      <List>
        {sources.map((s) => (
          <ListItem key={formatSource(s)}>{formatSource(s)}</ListItem>
        ))}
      </List>
    </div>
  );
}
