import { motion } from "framer-motion";
import {
  ArrowLeft,
  LockKeyhole,
  KeyRound,
  ShieldCheck,
  Server,
  Database,
  UserRoundCheck,
  Bug,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Security.css";

const sections = [
  {
    number: "01",
    title: "Authentication & Session Management",
    icon: LockKeyhole,
    content: (
      <ul>
        <li>
          Passwords are hashed using <strong>bcrypt</strong> with a cost factor
          designed to resist brute-force attacks. Plain-text passwords are never
          stored or logged.
        </li>
        <li>
          Sessions are managed with{" "}
          <strong>short-lived JWT access tokens (15-minute expiry)</strong>{" "}
          paired with rotating refresh tokens (7-day expiry) stored securely
          server-side.
        </li>
        <li>
          All tokens are signed with a secret key that is never exposed to the
          client or included in any API response.
        </li>
        <li>
          New accounts require <strong>email verification</strong> before access
          is granted. Password resets are handled via time-limited, single-use
          OTP links sent to the verified email address.
        </li>
      </ul>
    ),
  },
  {
    number: "02",
    title: "OAuth Token Security",
    icon: KeyRound,
    content: (
      <ul>
        <li>
          OAuth access tokens from connected social platforms (LinkedIn,
          Twitter/X, Instagram, Facebook, YouTube, Reddit) are{" "}
          <strong>
            encrypted at rest using AES-256 (Fernet symmetric encryption)
          </strong>{" "}
          with a server-managed encryption key before being written to the
          database.
        </li>
        <li>
          Tokens are decrypted only in memory, only at the moment they are
          needed to make an API call, and are never returned to the client.
        </li>
        <li>
          If you disconnect a social account, its stored token is immediately
          deleted from our database.
        </li>
      </ul>
    ),
  },
  {
    number: "03",
    title: "Data in Transit",
    icon: ShieldCheck,
    content: (
      <ul>
        <li>
          All communication between your browser and our servers is encrypted
          using <strong>HTTPS/TLS</strong>. Plain HTTP connections are not
          accepted.
        </li>
        <li>
          All outbound API calls from Socials to third-party platforms are also
          made over HTTPS.
        </li>
      </ul>
    ),
  },
  {
    number: "04",
    title: "Data at Rest",
    icon: Database,
    content: (
      <ul>
        <li>
          Our database (PostgreSQL) is not exposed to the public internet. It is
          only accessible from backend services within our private network.
        </li>
        <li>
          Sensitive fields (OAuth tokens) are encrypted at the application layer
          in addition to any infrastructure-level encryption.
        </li>
        <li>
          Media files uploaded to Socials are stored in an isolated directory
          with access restricted to the backend service.
        </li>
      </ul>
    ),
  },
  {
    number: "05",
    title: "Infrastructure Security",
    icon: Server,
    content: (
      <ul>
        <li>
          All services run in isolated Docker containers. The database and Redis
          instances are not exposed on public ports.
        </li>
        <li>
          Redis (used for task queuing and caching) is password-protected and
          accessible only within the internal service network.
        </li>
        <li>
          Secret keys, API credentials, and encryption keys are managed via
          environment variables and are never committed to source control.
        </li>
      </ul>
    ),
  },
  {
    number: "06",
    title: "Access Control",
    icon: UserRoundCheck,
    content: (
      <ul>
        <li>
          All API endpoints that operate on user data require a valid, unexpired
          JWT. Requests without a valid token receive a 401 response.
        </li>
        <li>
          Users can only access their own posts, accounts, and analytics.
          Cross-user data access is not possible by design.
        </li>
        <li>
          The admin panel is a separate service protected by its own credentials
          and JWT secret, entirely independent from the user-facing API.
        </li>
      </ul>
    ),
  },
  {
    number: "07",
    title: "Vulnerability Disclosure",
    icon: Bug,
    content: (
      <p>
        We take security reports seriously. If you discover a vulnerability in
        Socials, please report it responsibly before public disclosure to give
        us time to address it.
        <br />
        Contact us at{" "}
        <a href="mailto:security@socials.app">security@socials.app</a> with a
        description of the issue, steps to reproduce, and potential impact. We
        will acknowledge your report within 48 hours.
      </p>
    ),
  },
  {
    number: "08",
    title: "Limitations",
    icon: AlertTriangle,
    content: (
      <p>
        No system is completely secure. While we implement industry-standard
        controls, we cannot guarantee that our platform will be immune to all
        attacks. In the event of a confirmed breach affecting your personal
        data, we will notify affected users within a reasonable timeframe as
        required by applicable law.
      </p>
    ),
  },
];

export default function Security() {
  return (
    <div className="security-page policy-page">
      <div className="security-glow security-glow-one" />
      <div className="security-glow security-glow-two" />

      <main className="security-container policy-container">
        <Link to="/" className="policy-back-link">
          <ArrowLeft size={15} />
          Back to Home
        </Link>

        <motion.header
          className="security-hero policy-hero"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="policy-hero-icon">
            <ShieldCheck size={25} />
          </div>

          <div>
            <p className="policy-label">PLATFORM SECURITY</p>

            <h1>
              Security
              <span> Policy</span>
            </h1>

            <p className="policy-subtitle">
              How we build, operate, and maintain a secure platform
            </p>

            <p className="policy-updated">Last updated: March 2026</p>
          </div>
        </motion.header>

        <div className="policy-layout">
          <aside className="policy-sidebar">
            <p>ON THIS PAGE</p>

            <nav>
              {sections.map((section) => (
                <a key={section.number} href={`#security-${section.number}`}>
                  <span>{section.number}</span>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="policy-content">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <motion.section
                  key={section.number}
                  id={`security-${section.number}`}
                  className="policy-section"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.03,
                  }}
                >
                  <div className="policy-section-number">{section.number}</div>

                  <div className="policy-section-body">
                    <div className="policy-section-heading">
                      <div className="policy-section-icon">
                        <Icon size={17} />
                      </div>

                      <h2>{section.title}</h2>
                    </div>

                    <div className="policy-text">{section.content}</div>
                  </div>
                </motion.section>
              );
            })}

            <div className="security-related">
              <ShieldCheck size={17} />

              <div>
                <p>Related policy</p>

                <Link to="/privacy">View Privacy Policy →</Link>
              </div>
            </div>

            <footer className="policy-footer">
              <span>© 2026 Socials. All rights reserved.</span>

              <div>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms</Link>
                <Link to="/refunds">Refunds</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
