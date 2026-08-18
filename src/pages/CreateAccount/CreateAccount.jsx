import { useState } from "react";
import { motion } from "framer-motion";
import "./CreateAccount.css";

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Create account submitted");
  };

  return (
    <main className="create-page">
      {/* Background */}
      <div className="create-grid" />

      <div className="create-glow create-glow-one" />
      <div className="create-glow create-glow-two" />

      {/* Floating particles */}
      <motion.span
        className="create-particle create-particle-one"
        animate={{
          y: [-15, 15, -15],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="create-particle create-particle-two"
        animate={{
          y: [15, -15, 15],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Navbar */}
      <header className="create-navbar">
        <a href="/" className="create-logo">
          <span className="create-logo-box">S</span>

          <span>
            MY<span>SOCIALS</span>
          </span>
        </a>

        <a href="/" className="create-back-home">
          ← Back to home
        </a>
      </header>

      {/* Main */}
      <section className="create-container">
        {/* Left content */}
        <motion.div
          className="create-intro"
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="create-badge">
            <span />
            Start growing today
          </div>

          <h1>
            Your social
            <br />
            media,
            <br />
            <span>simplified.</span>
          </h1>

          <p>
            Create your MySocials account and bring all your social channels
            together in one powerful workspace.
          </p>

          <div className="create-benefits">
            <div className="create-benefit">
              <div className="benefit-icon">✓</div>

              <div>
                <strong>Connect your channels</strong>
                <span>Instagram, YouTube, LinkedIn and more.</span>
              </div>
            </div>

            <div className="create-benefit">
              <div className="benefit-icon">✓</div>

              <div>
                <strong>Plan your content</strong>
                <span>Schedule posts without the daily hassle.</span>
              </div>
            </div>

            <div className="create-benefit">
              <div className="benefit-icon">✓</div>

              <div>
                <strong>Understand your audience</strong>
                <span>Track reach and engagement in one place.</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Create account card */}
        <motion.div
          className="create-card"
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          <div className="create-card-content">
            {/* Header */}
            <div className="create-card-header">
              <div className="create-user-icon">+</div>

              <h2>Create your account</h2>

              <p>Get started with MySocials for free.</p>
            </div>

            {/* Form */}
            <form className="create-form" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="create-field">
                <label htmlFor="name">Full name</label>

                <div className="create-input-wrapper">
                  <span className="create-input-icon">●</span>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="create-field">
                <label htmlFor="create-email">Email address</label>

                <div className="create-input-wrapper">
                  <span className="create-input-icon">@</span>

                  <input
                    id="create-email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="create-field">
                <label htmlFor="create-password">Password</label>

                <div className="create-input-wrapper">
                  <span className="create-input-icon">•</span>

                  <input
                    id="create-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    required
                    minLength={8}
                  />

                  <button
                    type="button"
                    className="create-password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Confirm password */}
              <div className="create-field">
                <label htmlFor="confirm-password">Confirm password</label>

                <div className="create-input-wrapper">
                  <span className="create-input-icon">•</span>

                  <input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    required
                    minLength={8}
                  />

                  <button
                    type="button"
                    className="create-password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="create-terms">
                <input type="checkbox" required />

                <span>
                  I agree to the <a href="/terms">Terms of Service</a> and{" "}
                  <a href="/privacy">Privacy Policy</a>.
                </span>
              </label>

              {/* Submit */}
              <motion.button
                type="submit"
                className="create-submit"
                whileHover={{
                  scale: 1.01,
                  y: -1,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <span>Create account</span>

                <span className="create-arrow">→</span>
              </motion.button>
            </form>

            {/* Divider */}
            <div className="create-divider">
              <span />
              <p>OR</p>
              <span />
            </div>

            {/* Google */}
            <button type="button" className="create-google">
              <span>G</span>
              Continue with Google
            </button>

            {/* Sign in */}
            <p className="already-account">
              Already have an account?
              <a href="/signin">Sign in</a>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="create-footer">
        <span>© 2026 MySocials</span>

        <div>
          <a href="/terms">Terms</a>

          <a href="/privacy">Privacy</a>
        </div>
      </footer>
    </main>
  );
}
