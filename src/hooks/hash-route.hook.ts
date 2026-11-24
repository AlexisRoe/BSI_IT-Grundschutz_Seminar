import { parseHash, type Route, toHash } from "@/app/routes.constants";
import { navigate as navigateToHash, useHashRoute as useRawHashRoute } from "@/ui";

/** Current route derived from the URL hash; re-renders on hash changes. */
export function useHashRoute(): Route {
  return useRawHashRoute(parseHash);
}

/** Navigates to a route and scrolls the page body to the top. */
export function navigate(route: Route): void {
  navigateToHash(toHash(route));
}
