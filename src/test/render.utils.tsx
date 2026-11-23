import { render } from "@testing-library/react";
import type { ReactElement } from "react";
import { AppProviders } from "@/app/app-providers.component";

/** Renders a component inside the app providers. */
export function renderWithProviders(ui: ReactElement) {
  return render(<AppProviders>{ui}</AppProviders>);
}
