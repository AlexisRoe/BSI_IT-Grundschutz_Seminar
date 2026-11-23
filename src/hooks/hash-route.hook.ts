import { useSyncExternalStore } from "react";
import { parseHash, type Route, toHash } from "@/app/routes.constants";

function subscribe(onChange: () => void): () => void {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

const getHash = () => window.location.hash;

/** Current route derived from the URL hash; re-renders on hash changes. */
export function useHashRoute(): Route {
  return parseHash(useSyncExternalStore(subscribe, getHash, getHash));
}

/** Navigates to a route and scrolls to the top. */
export function navigate(route: Route): void {
  const hash = toHash(route);
  if (window.location.hash !== hash) window.location.hash = hash;
  window.scrollTo?.(0, 0);
}
