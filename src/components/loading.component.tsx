import { Skeleton } from "@/ui";

/** Placeholder shown while the course content is loading. */
export function Loading() {
  return <Skeleton.Group count={3} aria-label="Inhalte werden geladen" />;
}
