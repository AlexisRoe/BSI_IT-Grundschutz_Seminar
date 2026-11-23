/** The part of a service-worker registration needed to look for a new version. */
export interface UpdatableRegistration {
  installing: ServiceWorker | null;
  update: () => Promise<unknown>;
}

/**
 * Looks for a new app version right away, every `intervalMs`, when the app
 * becomes visible again and when the connection returns. Checks are skipped
 * while offline. Returns a function that stops all checks.
 */
export function scheduleUpdateChecks(
  registration: UpdatableRegistration,
  intervalMs: number,
  win: Window = window,
): () => void {
  const check = () => {
    if (!win.navigator.onLine || registration.installing) return;
    registration.update().catch(() => {
      // Offline or server unreachable: the cached version keeps working.
    });
  };
  const onVisibility = () => {
    if (win.document.visibilityState === "visible") check();
  };

  check();
  const timer = win.setInterval(check, intervalMs);
  win.addEventListener("online", check);
  win.document.addEventListener("visibilitychange", onVisibility);
  return () => {
    win.clearInterval(timer);
    win.removeEventListener("online", check);
    win.document.removeEventListener("visibilitychange", onVisibility);
  };
}
