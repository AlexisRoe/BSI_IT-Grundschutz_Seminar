import { fireEvent, render, screen } from "@testing-library/react";
import { AppProviders } from "@/app/app-providers.component";
import { UpdatePrompt } from "@/components/update-prompt.component";

const applyUpdate = vi.fn();
let updateAvailable = false;

vi.mock("@/hooks/pwa-update.hook", () => ({
  usePwaUpdate: () => ({ updateAvailable, applyUpdate }),
}));

describe("UpdatePrompt", () => {
  it("renders nothing without an update", () => {
    updateAvailable = false;
    render(<UpdatePrompt />);
    expect(screen.queryByRole("button", { name: "Reload" })).not.toBeInTheDocument();
  });

  it("offers a reload when an update is available", () => {
    updateAvailable = true;
    render(
      <AppProviders>
        <UpdatePrompt />
      </AppProviders>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Reload" }));
    expect(applyUpdate).toHaveBeenCalled();
  });
});
