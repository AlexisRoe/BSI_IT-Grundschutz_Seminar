import { navigate } from "./hash-route.hook";

describe("navigate", () => {
  it("resets the scroll position of the page body", () => {
    document.body.innerHTML = '<div id="body"><main></main></div>';
    const body = document.getElementById("body") as HTMLElement;
    body.scrollTop = 500;
    navigate({ name: "dashboard" });
    expect(body.scrollTop).toBe(0);
  });
});
