import "./LoginForm.css";

export default function LoginForm() {
  return (
    <form className="login-form">
      <h2 className="form-title poppins-bold">Sign in</h2>
      <div className="form-inputs">
        <div className="username-input">
          <label htmlFor="usernmae" className="username poppins-regular">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="username-input-field poppins-regular"
            placeholder="user123@example.com"
          />
        </div>
        <div className="password-input">
          <label htmlFor="password" className="password poppins-regular">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="password-input-field poppins-regular"
          />
        </div>
        <div className="useful-links poppins-regular">
          <a href="#" className="forgot-password">I forgot my password</a>
          <p>Don't have an account yet. <a href="#" className="signup-link">Sign up</a></p>
        </div>
      </div>
      <button type="submit" className="sign-in-button poppins-bold">
        Sign in
      </button>
    </form>
  );
}
