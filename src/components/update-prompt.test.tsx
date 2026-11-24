import { fireEvent, render, screen } from "@testing-library/react";
import { UpdatePrompt } from "@/components/update-prompt.component";
import { renderWithProviders } from "@/ui/testing";

const applyUpdate = vi.fn();
let updateAvailable = false;

vi.mock("@/hooks/pwa-update.hook", () => ({
  usePwaUpdate: () => ({ updateAvailable, applyUpdate }),
}));

describe("UpdatePrompt", () => {
  it("renders nothing without an update", () => {
    updateAvailable = false;
    render(<UpdatePrompt />);
    expect(screen.queryByRole("button", { name: "Neu laden" })).not.toBeInTheDocument();
  });

  it("offers a reload when an update is available", () => {
    updateAvailable = true;
    renderWithProviders(<UpdatePrompt />);
    fireEvent.click(screen.getByRole("button", { name: "Neu laden" }));
    expect(applyUpdate).toHaveBeenCalled();
  });
});
