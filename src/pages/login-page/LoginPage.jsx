import LoginForm from "./login-form/LoginForm";

import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-page">
      <h1 className="app-logo poppins-bold">Pro Manager</h1>
      <LoginForm />
      <a href="#" className="go-back-home poppins-regular">Go back home</a>
    </div>
  )
}