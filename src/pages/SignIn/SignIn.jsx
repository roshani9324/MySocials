import { useState } from "react";
import { motion } from "framer-motion";
import "./SignIn.css";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend authentication yahan later connect kar sakte hain
    console.log("Sign in submitted");
  };

  return (
    <main className="signin-page">
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="signin-grid" />

      <div className="signin-glow signin-glow-one" />
      <div className="signin-glow signin-glow-two" />

      {/* Floating particles */}

      <motion.div
        className="signin-particle particle-one"
        animate={{
          y: [-15, 15, -15],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="signin-particle particle-two"
        animate={{
          y: [15, -15, 15],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="signin-particle particle-three"
        animate={{
          x: [-10, 10, -10],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================
          NAVBAR
      ========================================= */}

      <header className="signin-navbar">
        <a href="/" className="signin-logo">
          <span className="signin-logo-box">S</span>
          <span>
            MY<span>SOCIALS</span>
          </span>
        </a>

        <a href="/" className="signin-back-home">
          ← Back to home
        </a>
      </header>

      {/* =========================================
          MAIN
      ========================================= */}

      <section className="signin-container">
        {/* =====================================
            LEFT SIDE
        ====================================== */}

        <motion.div
          className="signin-intro"
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
          <div className="signin-badge">
            <span className="signin-badge-dot" />
            Welcome back
          </div>

          <h1>
            Manage your
            <br />
            <span>socials</span>
            <br />
            from one place.
          </h1>

          <p>
            Sign in to your MySocials account and continue managing, scheduling,
            and analysing your social media content from one simple dashboard.
          </p>

          {/* Feature points */}

          <div className="signin-features">
            <div className="signin-feature">
              <div className="feature-check">✓</div>
              <div>
                <strong>All your platforms</strong>
                <span>Manage every channel from one place.</span>
              </div>
            </div>

            <div className="signin-feature">
              <div className="feature-check">✓</div>
              <div>
                <strong>Schedule effortlessly</strong>
                <span>Plan and publish content with ease.</span>
              </div>
            </div>

            <div className="signin-feature">
              <div className="feature-check">✓</div>
              <div>
                <strong>Track performance</strong>
                <span>Understand what is working for you.</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================
            LOGIN CARD
        ====================================== */}

        <motion.div
          className="signin-card"
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
          {/* Card glow */}

          <div className="signin-card-glow" />

          <div className="signin-card-content">
            {/* Header */}

            <div className="signin-card-header">
              <div className="signin-lock">
                <span>↗</span>
              </div>

              <h2>Welcome back</h2>

              <p>Sign in to continue to your account.</p>
            </div>

            {/* =================================
                FORM
            ================================== */}

            <form className="signin-form" onSubmit={handleSubmit}>
              {/* Email */}

              <div className="signin-field">
                <label htmlFor="email">Email address</label>

                <div className="signin-input-wrapper">
                  <span className="signin-input-icon">@</span>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              {/* Password */}

              <div className="signin-field">
                <div className="signin-label-row">
                  <label htmlFor="password">Password</label>

                  <a href="/forgot-password">Forgot password?</a>
                </div>

                <div className="signin-input-wrapper">
                  <span className="signin-input-icon">•</span>

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Remember */}

              <div className="signin-options">
                <label className="remember-me">
                  <input type="checkbox" />

                  <span>Remember me</span>
                </label>
              </div>

              {/* Submit */}

              <motion.button
                type="submit"
                className="signin-submit"
                whileHover={{
                  scale: 1.01,
                  y: -1,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <span>Sign in</span>

                <span className="signin-arrow">→</span>
              </motion.button>
            </form>

            {/* Divider */}

            <div className="signin-divider">
              <span />
              <p>OR</p>
              <span />
            </div>

            {/* Google */}

            <button type="button" className="google-button">
              <span className="google-icon">G</span>
              Continue with Google
            </button>

            {/* Create account */}

            <p className="create-account-text">
              Don't have an account?
              <a href="/create-account">Create an account</a>
            </p>
          </div>
        </motion.div>
      </section>

      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="signin-footer">
        <span>© 2026 MySocials</span>

        <div>
          <a href="/terms">Terms</a>

          <a href="/privacy">Privacy</a>
        </div>
      </footer>
    </main>
  );
}
