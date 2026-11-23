import { Skeleton } from "@/ui";

/** Placeholder shown while the course content is loading. */
export function Loading() {
  return (
    <div className="stack" role="status" aria-busy="true" aria-label="Inhalte werden geladen">
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}
