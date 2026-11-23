import { scheduleUpdateChecks } from "./pwa-update.utils";

function setOnline(online: boolean) {
  Object.defineProperty(window.navigator, "onLine", { value: online, configurable: true });
}

function setVisibility(state: DocumentVisibilityState) {
  Object.defineProperty(document, "visibilityState", { value: state, configurable: true });
}

describe("scheduleUpdateChecks", () => {
  let update: ReturnType<typeof vi.fn<() => Promise<unknown>>>;
  let stop: () => void;

  beforeEach(() => {
    vi.useFakeTimers();
    update = vi.fn<() => Promise<unknown>>().mockResolvedValue(undefined);
    setOnline(true);
    setVisibility("visible");
  });

  afterEach(() => {
    stop?.();
    vi.useRealTimers();
  });

  it("checks immediately and then on every interval", () => {
    stop = scheduleUpdateChecks({ installing: null, update }, 1000);
    expect(update).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(3000);
    expect(update).toHaveBeenCalledTimes(4);
  });

  it("skips checks while offline and checks again when the connection returns", () => {
    setOnline(false);
    stop = scheduleUpdateChecks({ installing: null, update }, 1000);
    vi.advanceTimersByTime(2000);
    expect(update).not.toHaveBeenCalled();
    setOnline(true);
    window.dispatchEvent(new Event("online"));
    expect(update).toHaveBeenCalledTimes(1);
  });

  it("checks when the app becomes visible again", () => {
    stop = scheduleUpdateChecks({ installing: null, update }, 1000);
    setVisibility("hidden");
    document.dispatchEvent(new Event("visibilitychange"));
    expect(update).toHaveBeenCalledTimes(1);
    setVisibility("visible");
    document.dispatchEvent(new Event("visibilitychange"));
    expect(update).toHaveBeenCalledTimes(2);
  });

  it("does not check while a new version is installing", () => {
    stop = scheduleUpdateChecks({ installing: {} as ServiceWorker, update }, 1000);
    expect(update).not.toHaveBeenCalled();
  });

  it("ignores failed checks and stops on cleanup", async () => {
    update.mockRejectedValue(new Error("offline"));
    stop = scheduleUpdateChecks({ installing: null, update }, 1000);
    await Promise.resolve();
    stop();
    vi.advanceTimersByTime(5000);
    window.dispatchEvent(new Event("online"));
    expect(update).toHaveBeenCalledTimes(1);
  });
});
