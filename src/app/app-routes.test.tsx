import { act, render, screen } from "@testing-library/react";
import { App } from "./app.component";

const routes: [string, string | RegExp][] = [
  ["#/kurs", "Kurs"],
  ["#/labor", "Labore"],
  ["#/training", "Training"],
  ["#/pruefung", "Prüfungssimulation"],
  ["#/fortschritt", "Lernfortschritt"],
  ["#/glossar", "Glossar"],
  ["#/einstellungen", "Einstellungen"],
  ["#/gibt/es/nicht", "Seite nicht gefunden"],
];

describe("app routing", () => {
  it.each(routes)("renders %s", async (hash, title) => {
    window.location.hash = hash;
    render(<App />);
    expect((await screen.findAllByText(title)).length).toBeGreaterThan(0);
    act(() => {
      window.location.hash = "#/";
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    });
  });
});
