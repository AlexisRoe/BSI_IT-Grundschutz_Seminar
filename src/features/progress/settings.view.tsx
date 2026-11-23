import { useState } from "react";
import { useExamStore } from "@/stores/exam.store";
import { selectProgressData, useProgressStore } from "@/stores/progress.store";
import { Button, FileUpload, Flex, Modal, Text, Title, useNotifications } from "@/ui";
import { createExport, parseExport } from "./progress-transfer.utils";

/** Export, import and reset of the locally stored progress. */
export function SettingsView() {
  const [confirmReset, setConfirmReset] = useState(false);
  const { notify } = useNotifications();

  const exportProgress = () => {
    const data = selectProgressData(useProgressStore.getState());
    const blob = new Blob([JSON.stringify(createExport(data), null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `grundschutz-fortschritt-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
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
    </Flex>
  );
}
