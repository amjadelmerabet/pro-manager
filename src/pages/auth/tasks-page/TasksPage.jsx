import AppHeader from "../../../components/app-header/AppHeader";
import Tasks from "./tasks/Tasks";

export default function TasksPage() {
  return <div className="tasks-page">
    <AppHeader />
    <Tasks />
  </div>
}