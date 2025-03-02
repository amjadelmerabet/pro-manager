import "./Overview.css";

export default function Overview() {
  return (
    <div className="overview-section">
      <div className="overview">
        <p className="welcome poppins-regular">
          {/* Pro Manager is a project management tool that helps you keep track of
          your projects and collaborate with your team. It is designed to be
          simple and easy to use, so you can focus on getting things done. */}
          Welcome to <b className="poppins-bold">Pro Manager</b>, the ultimate tool for managing your projects and
          tasks effortlessly. Whether you're working solo or collaborating with a
          team, our app helps you stay organized, prioritize effectively, and
          achieve your goals faster
        </p>
        <button className="signup-button poppins-bold">Sign up for Free</button>
      </div>
      <div className="video"></div>
    </div>
  );
}
