import { useState } from "react";
import { motion } from "framer-motion";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
  };

  return (
    <main className="forgot-page">
      {/* Background */}
      <div className="forgot-grid" />

      <div className="forgot-glow forgot-glow-one" />
      <div className="forgot-glow forgot-glow-two" />

      {/* Floating particles */}
      <motion.span
        className="forgot-particle forgot-particle-one"
        animate={{
          y: [-12, 12, -12],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="forgot-particle forgot-particle-two"
        animate={{
          y: [12, -12, 12],
          opacity: [0.15, 0.6, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Navbar */}
      <header className="forgot-navbar">
        <a href="/" className="forgot-logo">
          <span className="forgot-logo-box">S</span>

          <span>
            MY<span>SOCIALS</span>
          </span>
        </a>

        <a href="/signin" className="forgot-back">
          ← Back to sign in
        </a>
      </header>

      {/* Center */}
      <section className="forgot-container">
        <motion.div
          className="forgot-card"
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
          }}
        >
          {!submitted ? (
            <>
              {/* Icon */}
              <motion.div
                className="forgot-icon"
                animate={{
                  y: [-3, 3, -3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span>↻</span>
              </motion.div>

              {/* Header */}
              <div className="forgot-header">
                <h1>Forgot your password?</h1>

                <p>
                  No worries. Enter your email address and we'll send you a link
                  to reset your password.
                </p>
              </div>

              {/* Form */}
              <form className="forgot-form" onSubmit={handleSubmit}>
                <div className="forgot-field">
                  <label htmlFor="forgot-email">Email address</label>

                  <div className="forgot-input-wrapper">
                    <span className="forgot-input-icon">@</span>

                    <input
                      id="forgot-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="forgot-submit"
                  whileHover={{
                    scale: 1.01,
                    y: -1,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <span>Send reset link</span>

                  <span className="forgot-arrow">→</span>
                </motion.button>
              </form>

              {/* Back */}
              <a href="/signin" className="forgot-signin">
                ← Back to sign in
              </a>
            </>
          ) : (
            /* Success State */
            <motion.div
              className="forgot-success"
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
            >
              <div className="success-icon">✓</div>

              <h1>Check your inbox</h1>

              <p>We've sent a password reset link to</p>

              <strong>{email}</strong>

              <p className="success-small">
                Didn't receive the email? Check your spam folder or try again.
              </p>

              <button
                type="button"
                className="forgot-resend"
                onClick={() => setSubmitted(false)}
              >
                Try another email
              </button>

              <a href="/signin" className="forgot-success-back">
                ← Back to sign in
              </a>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="forgot-footer">
        <span>© 2026 MySocials</span>

        <div>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
        </div>
      </footer>
    </main>
  );
}
