import {
  activateWaitingUpdate,
  type CheckableRegistration,
  checkForUpdate,
  scheduleUpdateChecks,
} from "./pwa-update.utils";

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

describe("checkForUpdate", () => {
  const online = { navigator: { onLine: true } } as unknown as Window;
  const reg = (over: Partial<CheckableRegistration> = {}): CheckableRegistration => ({
    installing: null,
    waiting: null,
    update: async () => {},
    ...over,
  });

  it("reports unsupported without registration", async () => {
    expect(await checkForUpdate(undefined, online)).toBe("unsupported");
  });
  it("reports offline without calling update", async () => {
    const update = vi.fn();
    const win = { navigator: { onLine: false } } as unknown as Window;
    expect(await checkForUpdate(reg({ update }), win)).toBe("offline");
    expect(update).not.toHaveBeenCalled();
  });
  it("reports current when nothing waits", async () => {
    expect(await checkForUpdate(reg(), online)).toBe("current");
  });
  it("reports available when a worker waits", async () => {
    expect(await checkForUpdate(reg({ waiting: {} as ServiceWorker }), online)).toBe("available");
  });
  it("reports error when update fails", async () => {
    const update = async () => {
      throw new Error("x");
    };
    expect(await checkForUpdate(reg({ update }), online)).toBe("error");
  });
});

describe("activateWaitingUpdate", () => {
  it("reloads directly when nothing waits", () => {
    const reload = vi.fn();
    activateWaitingUpdate({ waiting: null }, { location: { reload } } as unknown as Window);
    expect(reload).toHaveBeenCalled();
  });
  it("posts SKIP_WAITING and reloads on controllerchange", () => {
    const reload = vi.fn();
    const postMessage = vi.fn();
    let handler: () => void = () => {};
    const win = {
      location: { reload },
      navigator: {
        serviceWorker: { addEventListener: (_: string, h: () => void) => (handler = h) },
      },
    } as unknown as Window;
    activateWaitingUpdate({ waiting: { postMessage } as unknown as ServiceWorker }, win);
    expect(postMessage).toHaveBeenCalledWith({ type: "SKIP_WAITING" });
    handler();
    expect(reload).toHaveBeenCalled();
  });
});
