import { describe, expect, it, vi } from "vitest";
import { installTrustedTypesPolicy, SERVICE_WORKER_URL } from "./trusted-types.utils";

describe("installTrustedTypesPolicy", () => {
  it("does nothing when Trusted Types are unsupported", () => {
    expect(() => installTrustedTypesPolicy(undefined)).not.toThrow();
  });

  it("registers a default policy that only allows the service worker URL", () => {
    const createPolicy = vi.fn();
    installTrustedTypesPolicy({ createPolicy });
    const [name, rules] = createPolicy.mock.calls[0] as [
      string,
      { createScriptURL: (u: string) => string },
    ];
    expect(name).toBe("default");
    expect(rules.createScriptURL(SERVICE_WORKER_URL)).toBe(SERVICE_WORKER_URL);
    expect(() => rules.createScriptURL("https://evil.example/x.js")).toThrow(TypeError);
  });
});
