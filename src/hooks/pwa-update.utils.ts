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

/** Outcome of a manual update check. */
export type UpdateCheckResult = "available" | "current" | "offline" | "unsupported" | "error";

/** The part of a service-worker registration needed for a manual check. */
export interface CheckableRegistration {
  installing: ServiceWorker | null;
  waiting: ServiceWorker | null;
  update: () => Promise<unknown>;
}

/** Resolves once `worker` has finished installing (or failed). */
function whenInstalled(worker: ServiceWorker): Promise<void> {
  return new Promise((resolve) => {
    const onChange = () => {
      if (worker.state === "installed" || worker.state === "redundant") {
        worker.removeEventListener("statechange", onChange);
        resolve();
      }
    };
    worker.addEventListener("statechange", onChange);
    onChange();
  });
}

/**
 * Asks the server for a newer version and waits until it is downloaded.
 * Resolves `"available"` when a new version waits for activation.
 */
export async function checkForUpdate(
  registration: CheckableRegistration | undefined,
  win: Window = window,
): Promise<UpdateCheckResult> {
  if (!registration) return "unsupported";
  if (!win.navigator.onLine) return "offline";
  try {
    await registration.update();
    if (registration.installing) await whenInstalled(registration.installing);
    return registration.waiting ? "available" : "current";
  } catch {
    return "error";
  }
}

/**
 * Activates the waiting version and reloads once it controls the page.
 * Falls back to a plain reload when nothing is waiting.
 */
export function activateWaitingUpdate(
  registration: Pick<CheckableRegistration, "waiting"> | undefined,
  win: Window = window,
): void {
  const reload = () => win.location.reload();
  const waiting = registration?.waiting;
  if (!waiting) {
    reload();
    return;
  }
  win.navigator.serviceWorker.addEventListener("controllerchange", reload, { once: true });
  waiting.postMessage({ type: "SKIP_WAITING" });
}
