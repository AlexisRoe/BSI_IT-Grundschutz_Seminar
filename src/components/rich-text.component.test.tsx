import { render } from "@testing-library/react";
import { parseRichText, RichText } from "./rich-text.component";

describe("RichText", () => {
  it("splits bold markup", () => {
    expect(parseRichText("a **b** c")).toEqual([
      { text: "a ", strong: false },
      { text: "b", strong: true },
      { text: " c", strong: false },
    ]);
  });

  it("renders text without HTML injection", () => {
    const { container } = render(<RichText text="<b>x</b> **y**" />);
    expect(container.textContent).toBe("<b>x</b> y");
    expect(container.querySelector("b")).toBeNull();
  });
});
