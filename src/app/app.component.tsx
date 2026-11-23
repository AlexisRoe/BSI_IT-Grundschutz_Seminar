import "./app.css";
import { UpdatePrompt } from "@/components/update-prompt.component";
import { Text, Title } from "@/ui";
import { AppProviders } from "./app-providers.component";

/** Root of the app: providers, update prompt and the placeholder start screen. */
export function App() {
  return (
    <AppProviders>
      <div className="app">
        <UpdatePrompt />
        <main className="app__main">
          <Title>IT-Grundschutz Seminar</Title>
          <Text>Placeholder screen.</Text>
        </main>
      </div>
    </AppProviders>
  );
}
