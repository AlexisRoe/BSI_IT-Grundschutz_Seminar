import { Flex, Skeleton } from "@/ui";

/** Placeholder shown while the course content is loading. */
export function Loading() {
  return (
    <Flex column gap="md" role="status" aria-busy="true" aria-label="Inhalte werden geladen">
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Flex>
  );
}
