import { usePwaUpdate } from "@/hooks/pwa-update.hook";
import { Alert, Button } from "@/ui";

/** Banner offering to reload when a new version of the app is ready. */
export function UpdatePrompt() {
  const { updateAvailable, applyUpdate } = usePwaUpdate();
  if (!updateAvailable) return null;
  return (
    <div className="app__notice">
      <Alert variant="info" icon="refresh" title="Eine neue Version ist verfügbar" />
      <Button onClick={applyUpdate}>Neu laden</Button>
    </div>
  );
}
