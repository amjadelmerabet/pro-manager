import './header.css';

export default function Header() {
  return (
    <header>
      <h1 className="app-logo poppins-bold">Pro Manager</h1>
      <ul className="menu">
        <li className="menu-item poppins-semibold">Home</li>
        <li className="menu-item poppins-semibold">Features</li>
        <li className="menu-item poppins-semibold">Blog</li>
        <li className="menu-item poppins-semibold">Pricing</li>
        <li className="menu-item poppins-semibold">About us</li>
        <li className="menu-item poppins-semibold">Contact</li>
      </ul>
      <div className="signin-section">
        <button className="signup-button poppins-semibold">Sign up</button>
        <button className="signin-button poppins-semibold">Sign in</button>
      </div>
    </header>
  );
}