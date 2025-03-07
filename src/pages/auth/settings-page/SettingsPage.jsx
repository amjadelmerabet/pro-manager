import AppHeader from "../../../components/app-header/AppHeader";
import NavSideBar from "./nav-sidebar/NavSideBar";
import Settings from "./settings/Settings";

import "./SettingsPage.css";

export default function SettingsPage() {
  return (
    <div className="settings-page">
      <AppHeader />
      <div className="content">
        <NavSideBar />
        <Settings />
      </div>
    </div>
  );
}
