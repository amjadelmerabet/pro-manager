import "./NavSideBar.css";

export default function NavSideBar() {
  return <nav className="nav-sidebar">
    <div className="settings-menu">
      <h4 className="settings-menu-title poppins-semibold">Profile</h4>
      <ul>
        <li className="settings-menu-item poppins-regular selected">Account</li>
        <li className="settings-menu-item poppins-regular">Themes</li>
        <li className="settings-menu-item poppins-regular">Settings</li>
      </ul>
    </div>
    <div className="settings-menu">
      <h4 className="settings-menu-title poppins-semibold">Dashboard</h4>
      <ul>
        <li className="settings-menu-item poppins-regular">Widgets</li>
        <li className="settings-menu-item poppins-regular">Themes</li>
        <li className="settings-menu-item poppins-regular">Settings</li>
      </ul>
    </div>
    <div className="settings-menu">
      <h4 className="settings-menu-title poppins-semibold">Projects</h4>
      <ul>
        <li className="settings-menu-item poppins-regular">Actions</li>
        <li className="settings-menu-item poppins-regular">Themes</li>
        <li className="settings-menu-item poppins-regular">Settings</li>
      </ul>
    </div>
    <div className="settings-menu">
      <h4 className="settings-menu-title poppins-semibold">Tasks</h4>
      <ul>
        <li className="settings-menu-item poppins-regular">Actions</li>
        <li className="settings-menu-item poppins-regular">Themes</li>
        <li className="settings-menu-item poppins-regular">Settings</li>
      </ul>
    </div>
  </nav>
}