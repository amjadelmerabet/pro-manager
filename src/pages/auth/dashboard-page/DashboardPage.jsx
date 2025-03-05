import AppHeader from "../../../components/app-header/AppHeader";
import NavigationSideBar from "../../../components/navigation-sidebar/NavigationSideBar";
import Content from "./content/Content";

import "./DashboardPage.css";

export default function DashboardPage() {
  return (
    <div>
      <AppHeader />
      <div className="dashboard-ui">
        <NavigationSideBar />
        <Content />
      </div>
    </div>
  );
}