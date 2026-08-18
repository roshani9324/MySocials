import { Eye } from "lucide-react";

function SignInSection() {
  return (
    <section className="signin-preview">
      <div className="signin-scene">
        <div className="planet-glow" />

        <div className="signin-mountains mountain-left" />
        <div className="signin-mountains mountain-right" />

        <div className="signin-card">
          <h3>Welcome back to Socials</h3>

          <label>Email</label>

          <input type="email" placeholder="Enter your email" />

          <label>Password</label>

          <div className="password-field">
            <input type="password" placeholder="Enter your password" />

            <Eye size={16} />
          </div>

          <button className="signin-button">Sign in</button>

          <div className="signin-links">
            <a href="/forgot-password">Forgot password?</a>

            <a href="/create-account">Create an account</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignInSection;
