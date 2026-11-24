import "./app.css";
import { UpdatePrompt } from "@/components/update-prompt.component";
import { NOTIFICATION_DURATION_MS } from "@/config/app.config";
import { CourseOverviewView } from "@/features/course/course-overview.view";
import { LessonView } from "@/features/course/lesson.view";
import { ExamResultView } from "@/features/exam/exam-result.view";
import { ExamRunView } from "@/features/exam/exam-run.view";
import { ExamStartView } from "@/features/exam/exam-start.view";
import { GlossaryView } from "@/features/glossary/glossary.view";
import { LabView } from "@/features/labs/lab.view";
import { LabsOverviewView } from "@/features/labs/labs-overview.view";
import { PracticeView } from "@/features/practice/practice.view";
import { DashboardView } from "@/features/progress/dashboard.view";
import { ProgressView } from "@/features/progress/progress.view";
import { SettingsView } from "@/features/progress/settings.view";
import { navigate, useHashRoute } from "@/hooks/hash-route.hook";
import { EinkProvider, Navigation, Page, State, Title } from "@/ui";
import { parseHash, type Route } from "./routes.constants";

function Screen({ route }: { route: Route }) {
  switch (route.name) {
    case "dashboard":
      return <DashboardView />;
    case "course":
      return <CourseOverviewView />;
    case "lesson":
      return <LessonView lessonId={route.lessonId} />;
    case "labs":
      return <LabsOverviewView />;
    case "lab":
      return <LabView labId={route.labId} />;
    case "training":
      return <PracticeView />;
    case "exam":
      return <ExamStartView />;
    case "exam-run":
      return <ExamRunView />;
    case "exam-result":
      return <ExamResultView examId={route.examId} />;
    case "progress":
      return <ProgressView />;
    case "glossary":
      return <GlossaryView />;
    case "settings":
      return <SettingsView />;
    case "not-found":
      return (
        <State.Empty
          title="Seite nicht gefunden"
          action={{ label: "Zur Startseite", onClick: () => navigate({ name: "dashboard" }) }}
        />
      );
  }
}

/** Root of the app: providers, navigation shell and the current screen. */
export function App() {
  const route = useHashRoute();
  return (
    <EinkProvider notificationDuration={NOTIFICATION_DURATION_MS}>
      <Page className="app">
        <Page.Header>
          <div className="app__header">
            <Page.NavToggle aria-label="Navigation ein- oder ausblenden" />
            <Title size="4">IT-Grundschutz-Praktiker</Title>
          </div>
        </Page.Header>
        <Page.Nav aria-label="Hauptnavigation">
          <Navigation withBorder={false} onSelect={(target) => navigate(parseHash(target))}>
            <Navigation.Item target="#/" icon="home" label="Start" />
            <Navigation.Item target="#/kurs" icon="list" label="Kurs" />
            <Navigation.Item target="#/labor" icon="layout-grid" label="Labore" />
            <Navigation.Item target="#/training" icon="refresh" label="Training" />
            <Navigation.Item target="#/pruefung" icon="clock" label="Prüfungssimulation" />
            <Navigation.Item target="#/fortschritt" icon="circle-check" label="Fortschritt" />
            <Navigation.Item target="#/glossar" icon="search" label="Glossar" />
            <Navigation.Item target="#/einstellungen" icon="settings" label="Einstellungen" />
          </Navigation>
        </Page.Nav>
        <Page.Body>
          <main className="app__main">
            <UpdatePrompt />
            <Screen route={route} />
          </main>
        </Page.Body>
      </Page>
    </EinkProvider>
  );
}
