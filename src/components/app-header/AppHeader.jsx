import ProfilePicture from "../../assets/images/profile-picture.jpg";

import "./AppHeader.css";

export default function AppHeader() {
  return (
    <header className="app-header">
      <div className="app-logo">
        <h1 className="app-name poppins-bold">Pro Manager</h1>
      </div>
      <ul className="app-menu">
        <li className="app-menu-item poppins-semibold">Dashboard</li>
        <li className="app-menu-item poppins-semibold">Projects</li>
        <li className="app-menu-item poppins-semibold">Tasks</li>
        <li className="app-menu-item poppins-semibold">Insights</li>
      </ul>
      <div className="profile-picture poppins-bold">
        <img
          src={ProfilePicture}
          style={{ width: "64px", height: "64px", borderRadius: "50%" }}
          alt="Profile picture"
        />
      </div>
    </header>
  );
}
