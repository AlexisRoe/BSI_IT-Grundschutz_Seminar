/** Script URL the service worker is registered from. */
export const SERVICE_WORKER_URL = "/sw.js";

interface TrustedTypesFactory {
  createPolicy: (name: string, rules: { createScriptURL: (input: string) => string }) => unknown;
}

/**
 * Installs the Trusted Types `default` policy that the CSP directive
 * `require-trusted-types-for 'script'` needs: without it the browser rejects
 * `navigator.serviceWorker.register("/sw.js")`, so the service worker is never
 * installed and the app cannot start offline. The policy only passes the
 * service worker URL and rejects every other script URL.
 */
export function installTrustedTypesPolicy(
  factory: TrustedTypesFactory | undefined = (globalThis as { trustedTypes?: TrustedTypesFactory })
    .trustedTypes,
): void {
  if (!factory) return;
  factory.createPolicy("default", {
    createScriptURL: (input) => {
      if (input === SERVICE_WORKER_URL) return input;
      throw new TypeError(`Script URL not allowed: ${input}`);
    },
  });
}
