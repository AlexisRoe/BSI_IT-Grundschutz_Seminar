import { useState } from "react";
import { BUILD_INFO } from "@/config/build-info.config";
import {
  activateWaitingUpdate,
  type CheckableRegistration,
  checkForUpdate,
} from "@/hooks/pwa-update.utils";
import { useExamStore } from "@/stores/exam.store";
import { selectProgressData, useProgressStore } from "@/stores/progress.store";
import {
  Button,
  Card,
  Description,
  FileUpload,
  Flex,
  Modal,
  Text,
  Title,
  useDownload,
  useNotifications,
} from "@/ui";
import { createExport, parseExport } from "./progress-transfer.utils";

/** Export, import and reset of the locally stored progress. */
export function SettingsView() {
  const [confirmReset, setConfirmReset] = useState(false);
  const [checking, setChecking] = useState(false);
  const [registration, setRegistration] = useState<CheckableRegistration>();
  const [updateReady, setUpdateReady] = useState(false);
  const { notify } = useNotifications();
  const download = useDownload();

  const checkUpdate = async () => {
    setChecking(true);
    const reg = await navigator.serviceWorker?.getRegistration();
    setRegistration(reg);
    const result = await checkForUpdate(reg);
    setChecking(false);
    switch (result) {
      case "available":
        setUpdateReady(true);
        notify("Neue Version verfügbar", "Sie können sie jetzt installieren.");
        break;
      case "current":
        notify("Die App ist aktuell");
        break;
      case "offline":
        notify("Keine Verbindung", "Zur Prüfung ist eine Internetverbindung nötig.", "error");
        break;
      case "unsupported":
        notify("Nicht verfügbar", "Dieser Browser hat keinen Service Worker.", "error");
        break;
      default:
        notify("Prüfung fehlgeschlagen", "Der Server ist nicht erreichbar.", "error");
    }
  };

  const exportProgress = () => {
    const data = selectProgressData(useProgressStore.getState());
    download(
      JSON.stringify(createExport(data), null, 2),
      `grundschutz-fortschritt-${new Date().toISOString().slice(0, 10)}.json`,
      "application/json",
    );
  };

  const importProgress = async (file: File) => {
    let parsed: unknown;
    try {
      parsed = JSON.parse(await file.text());
    } catch {
      parsed = null;
    }
    const data = parseExport(parsed);
    if (!data) {
      notify("Import fehlgeschlagen", "Die Datei ist kein gültiger Export dieser App.", "error");
      throw new Error("invalid export");
    }
    useProgressStore.getState().replaceAll(data);
    notify("Fortschritt importiert");
  };

  return (
    <Flex column gap="md">
      <Title size="1">Einstellungen</Title>
      <Text>
        Ihr Lernfortschritt wird ausschließlich lokal in diesem Browser gespeichert. Es werden keine
        Daten an einen Server übertragen. Mit Export und Import können Sie den Stand sichern oder
        auf ein anderes Gerät übertragen.
      </Text>
      <Title size="2">Sichern</Title>
      <Button iconLeft="download" onClick={exportProgress}>
        Fortschritt exportieren (JSON)
      </Button>
      <FileUpload
        accept={[".json", "application/json"]}
        placeholder="Exportdatei auswählen"
        errorMessage="Import fehlgeschlagen: ungültige Exportdatei"
        onUpload={importProgress}
      >
        Fortschritt importieren
      </FileUpload>
      <Title size="2">Zurücksetzen</Title>
      <Button.Outlined iconLeft="trash" onClick={() => setConfirmReset(true)}>
        Gesamten Fortschritt löschen
      </Button.Outlined>
      <Modal
        open={confirmReset}
        title="Fortschritt löschen?"
        onClosed={() => setConfirmReset(false)}
        onAccept={() => {
          useProgressStore.getState().reset();
          useExamStore.getState().clear();
          setConfirmReset(false);
          notify("Fortschritt gelöscht");
        }}
      >
        <Text>
          Alle abgeschlossenen Lektionen, Labor- und Quizergebnisse sowie die Historie der
          Prüfungssimulationen werden unwiderruflich gelöscht.
        </Text>
        <Modal.CloseButton>Abbrechen</Modal.CloseButton>
        <Modal.ActionButton>Löschen</Modal.ActionButton>
      </Modal>
      <Card>
        <Card.Header>
          <Card.Title>Über diese App</Card.Title>
        </Card.Header>
        <Card.Content>
          <Flex column gap="md">
            {updateReady ? (
              <Button iconLeft="refresh" onClick={() => activateWaitingUpdate(registration)}>
                Update installieren und neu laden
              </Button>
            ) : (
              <Button.Outlined iconLeft="refresh" disabled={checking} onClick={checkUpdate}>
                {checking ? "Prüfe …" : "Nach Update suchen"}
              </Button.Outlined>
            )}
          </Flex>
          <div className="build-info">
            <Description label="Projekt" value={BUILD_INFO.title} />
            <Description label="Version" value={BUILD_INFO.version} />
            <Description label="Commit" value={BUILD_INFO.commit} />
            <Description
              label="Build-Zeit"
              value={new Date(BUILD_INFO.builtAt).toLocaleString("de-DE")}
            />
          </div>
        </Card.Content>
      </Card>
    </Flex>
  );
}
