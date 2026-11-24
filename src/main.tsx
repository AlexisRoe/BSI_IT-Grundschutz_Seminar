import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/app/app.component";
import { installTrustedTypesPolicy } from "@/hooks/trusted-types.utils";

installTrustedTypesPolicy();

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
