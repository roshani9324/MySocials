import React from "react";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Database,
  Eye,
  UserCheck,
  Trash2,
  Cookie,
  ChevronRight,
  Clock3,
  Mail,
  ExternalLink,
} from "lucide-react";

import "./Privacy.css";

const Privacy = () => {
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "information", label: "Information We Collect" },
    { id: "usage", label: "How We Use Your Information" },
    { id: "sharing", label: "Third-Party Services & Sharing" },
    { id: "security", label: "Data Protection & Security" },
    { id: "retention", label: "Data Retention & Deletion" },
    { id: "cookies", label: "Cookies" },
    { id: "rights", label: "Your Rights" },
    { id: "changes", label: "Changes to This Policy" },
    { id: "contact", label: "Contact & Grievance Officer" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="privacy-page legal-page">
      {/* Background Effects */}
      <div className="privacy-glow privacy-glow-one" />
      <div className="privacy-glow privacy-glow-two" />

      <div className="privacy-container legal-container">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <header className="privacy-header legal-header">
          <div className="privacy-heading-wrapper legal-heading-wrapper">
            <button
              type="button"
              className="privacy-back-button legal-back-button"
              onClick={() => window.history.back()}
              aria-label="Go back"
            >
              <ArrowLeft size={17} />
            </button>

            <div>
              <div className="privacy-eyebrow legal-eyebrow">
                <span />
                PRIVACY
              </div>

              <h1>Privacy Policy</h1>

              <p>How we collect, use, and protect your personal information.</p>
            </div>
          </div>

          <div className="privacy-updated legal-updated">
            <Clock3 size={14} />

            <div>
              <span>Last updated</span>
              <strong>13 August 2026</strong>
            </div>
          </div>
        </header>

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="privacy-hero legal-hero">
          <div className="privacy-hero-icon legal-hero-icon">
            <ShieldCheck size={24} />
          </div>

          <div>
            <h2>Your privacy is important to us.</h2>

            <p>
              This Privacy Policy explains what personal information Socials
              collects, how we use it, how we protect it, and the rights
              available to you.
            </p>
          </div>
        </section>

        {/* =====================================================
            MAIN LAYOUT
        ====================================================== */}

        <div className="privacy-layout legal-layout">
          {/* ===================================================
              LEFT NAVIGATION
          ==================================================== */}

          <aside className="privacy-navigation legal-navigation">
            <div className="privacy-navigation-card legal-navigation-card">
              <div className="legal-navigation-title">
                <span>ON THIS PAGE</span>
              </div>

              <nav>
                {sections.map((section, index) => (
                  <button
                    type="button"
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                  >
                    <span className="legal-nav-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="legal-nav-label">{section.label}</span>

                    <ChevronRight size={13} />
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* ===================================================
              CONTENT
          ==================================================== */}

          <main className="privacy-content legal-content">
            {/* =================================================
                01. OVERVIEW
            ================================================== */}

            <section id="overview" className="privacy-section legal-section">
              <div className="legal-section-number">01</div>

              <div>
                <h2>Overview</h2>

                <p>
                  Socials ("we", "our", or "us") is a social media scheduling
                  and cross-posting platform. This Privacy Policy explains what
                  personal information we collect, how we use it, and your
                  rights regarding that information.
                </p>

                <p>
                  By creating an account or using Socials, you agree to the
                  practices described in this policy.
                </p>
              </div>
            </section>

            {/* =================================================
                02. INFORMATION WE COLLECT
            ================================================== */}

            <section id="information" className="privacy-section legal-section">
              <div className="legal-section-number">02</div>

              <div>
                <h2>Information We Collect</h2>

                <div className="privacy-data-grid">
                  <div className="privacy-data-card">
                    <div className="privacy-data-icon">
                      <UserCheck size={15} />
                    </div>

                    <strong>Account information</strong>

                    <span>
                      Your name, email address, and password. Passwords are
                      stored as bcrypt hashes - we never store your plain-text
                      password.
                    </span>
                  </div>

                  <div className="privacy-data-card">
                    <div className="privacy-data-icon">
                      <Lock size={15} />
                    </div>

                    <strong>Social platform tokens</strong>

                    <span>
                      When you connect a social account (LinkedIn, Twitter/X,
                      Instagram, Facebook, YouTube, Reddit), we store the OAuth
                      access tokens issued by those platforms. These tokens are
                      encrypted at rest using AES-256 before being written to
                      our database.
                    </span>
                  </div>

                  <div className="privacy-data-card">
                    <div className="privacy-data-icon">
                      <Database size={15} />
                    </div>

                    <strong>Post content</strong>

                    <span>
                      Text, images, videos, and scheduling metadata you create
                      inside Socials in order to publish them on your behalf.
                    </span>
                  </div>
                </div>

                <div className="privacy-detail-list">
                  <div className="privacy-detail-item">
                    <h3>Writing-style data (optional, consent-based)</h3>

                    <p>
                      If you enable Brand DNA, we analyze the captions of your
                      published posts to derive a structured description of your
                      writing style. You choose this at signup (or later in
                      settings) and can withdraw it at any time, which stops the
                      learning and lets you delete the derived profile and
                      stored samples.
                    </p>
                  </div>

                  <div className="privacy-detail-item">
                    <h3>Consent records</h3>

                    <p>
                      When you accept our Terms and Privacy Policy (and when you
                      grant or withdraw optional consents such as Brand DNA), we
                      record the event with a timestamp, the policy version, and
                      how it was given, so we can demonstrate your consent as
                      required by law. We deliberately do not attach your IP
                      address or browser details to these records.
                    </p>
                  </div>

                  <div className="privacy-detail-item">
                    <h3>Usage data</h3>

                    <p>
                      Post publish status, platform-level engagement data
                      returned by social platform APIs, and basic request counts
                      used for rate limiting and plan quotas. Rate limiting
                      briefly processes your IP address in memory.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                03. HOW WE USE
            ================================================== */}

            <section id="usage" className="privacy-section legal-section">
              <div className="legal-section-number">03</div>

              <div>
                <h2>How We Use Your Information</h2>

                <ul className="legal-list">
                  <li>
                    <ShieldCheck size={15} />
                    <span>
                      Authenticate you and maintain your session securely using
                      short-lived JWT access tokens (15 minutes) and rotating
                      refresh tokens.
                    </span>
                  </li>

                  <li>
                    <ShieldCheck size={15} />
                    <span>
                      Publish and schedule posts to the social platforms you
                      have connected, acting strictly on your instructions.
                    </span>
                  </li>

                  <li>
                    <ShieldCheck size={15} />
                    <span>
                      Display analytics data pulled from your connected platform
                      accounts back to you.
                    </span>
                  </li>

                  <li>
                    <ShieldCheck size={15} />
                    <span>
                      Send transactional emails (e.g. email verification,
                      password reset). We do not send marketing email without
                      your explicit consent.
                    </span>
                  </li>

                  <li>
                    <ShieldCheck size={15} />
                    <span>
                      Process payments for paid plans via our payment partners
                      (PayU, Pine Labs, Razorpay). We do not store card details
                      - all payment data is handled directly by our payment
                      partners.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* =================================================
                04. THIRD PARTY
            ================================================== */}

            <section id="sharing" className="privacy-section legal-section">
              <div className="legal-section-number">04</div>

              <div>
                <h2>Third-Party Services and Data Sharing</h2>

                <p>
                  Socials shares data with the following categories of external
                  services, strictly to provide the functionality you use. We
                  never sell your personal data, and we never share it for
                  advertising:
                </p>

                <div className="privacy-provider-list">
                  <div className="privacy-provider">
                    <strong>
                      Social platforms - Meta (Instagram, Facebook, Threads),
                      Google (YouTube), X/Twitter, LinkedIn, Bluesky
                    </strong>

                    <p>
                      For OAuth authentication, publishing the posts you
                      schedule, and retrieving your analytics, via their
                      official APIs. The content you publish is transferred to
                      the platforms you select.
                    </p>
                  </div>

                  <div className="privacy-provider">
                    <strong>Google and Apple</strong>

                    <p>
                      For "Sign in with Google" and "Sign in with Apple"
                      authentication.
                    </p>
                  </div>

                  <div className="privacy-provider">
                    <strong>
                      Payment partners (PayU, Pine Labs, Razorpay)
                    </strong>

                    <p>
                      For payment processing. We never see or store your card
                      details; each partner's own privacy policy governs the
                      payment data they handle.
                    </p>
                  </div>

                  <div className="privacy-provider">
                    <strong>NVIDIA (NIM API)</strong>

                    <p>
                      Powers AI features: caption suggestions and, if you opted
                      in, Brand DNA writing-style analysis. The text you submit
                      to AI features and, for Brand DNA, the captions of your
                      published posts are processed by NVIDIA's API to generate
                      the result. They are used only to serve your request.
                    </p>
                  </div>

                  <div className="privacy-provider">
                    <strong>Infrastructure</strong>

                    <p>
                      Our servers are hosted with Hetzner (EU); transactional
                      email (verification codes, notifications) is delivered via
                      Google Workspace SMTP.
                    </p>
                  </div>
                </div>

                <div className="privacy-note-box">
                  <ShieldCheck size={17} />

                  <p>
                    Some of these providers process data outside your country
                    (for example, NVIDIA and Google operate in the United
                    States). Where required, we rely on the provider's standard
                    contractual safeguards for such transfers.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                05. SECURITY
            ================================================== */}

            <section id="security" className="privacy-section legal-section">
              <div className="legal-section-number">05</div>

              <div>
                <h2>Data Protection & Security</h2>

                <p>
                  Socials protects the sensitive information we collect -
                  including OAuth tokens for connected social platforms, Google
                  user data received via the YouTube Data API and Sign in with
                  Google, account credentials, and post content - with the
                  following technical and organisational measures:
                </p>

                <div className="privacy-security-grid">
                  <div className="privacy-security-item">
                    <Lock size={15} />

                    <div>
                      <strong>Encryption in transit</strong>

                      <p>
                        All traffic uses HTTPS (TLS 1.2+). HSTS is enabled;
                        unencrypted connections are rejected.
                      </p>
                    </div>
                  </div>

                  <div className="privacy-security-item">
                    <Lock size={15} />

                    <div>
                      <strong>Encryption at rest</strong>

                      <p>
                        OAuth access tokens, refresh tokens, and platform
                        credentials are AES-256 encrypted (Fernet) before being
                        written to the database. Encryption keys live in an
                        isolated secrets store - never in source control, never
                        logged, never sent to clients.
                      </p>
                    </div>
                  </div>

                  <div className="privacy-security-item">
                    <ShieldCheck size={15} />

                    <div>
                      <strong>Password hashing</strong>

                      <p>
                        Passwords are stored as per-password-salted bcrypt
                        hashes. Plain-text passwords are never persisted or
                        logged.
                      </p>
                    </div>
                  </div>

                  <div className="privacy-security-item">
                    <Lock size={15} />

                    <div>
                      <strong>Session security</strong>

                      <p>
                        15-minute JWT access tokens + rotating refresh tokens
                        via HttpOnly, Secure, SameSite cookies. A CSRF header
                        guards every refresh. Sessions can be revoked
                        server-side at any time.
                      </p>
                    </div>
                  </div>

                  <div className="privacy-security-item">
                    <Database size={15} />

                    <div>
                      <strong>Database isolation</strong>

                      <p>
                        The production database is on a private network,
                        reachable only from the Socials API service. Backups are
                        encrypted and access-controlled.
                      </p>
                    </div>
                  </div>

                  <div className="privacy-security-item">
                    <UserCheck size={15} />

                    <div>
                      <strong>Principle of least privilege</strong>

                      <p>
                        Production access is limited to a small set of named
                        operators behind SSH key + MFA. Access is audit-logged.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="privacy-security-text">
                  <h3>Google user data - Limited Use</h3>

                  <p>
                    Our handling of Google user data (including YouTube data)
                    complies with the{" "}
                    <a
                      href="https://developers.google.com/terms/api-services-user-data-policy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Google API Services User Data Policy
                      <ExternalLink size={11} />
                    </a>
                    , including Limited Use. We use it solely to deliver the
                    features the user explicitly initiated. We never transfer it
                    to third parties, never use it for advertising, and never
                    allow humans to read it except for security investigations,
                    abuse prevention, or to comply with law, with the user's
                    explicit consent.
                  </p>

                  <h3>Token scope minimisation</h3>

                  <p>
                    Each social platform OAuth integration requests the
                    narrowest set of scopes required for the user's chosen
                    features.
                  </p>

                  <h3>Incident response</h3>

                  <p>
                    Affected users are notified without undue delay following
                    any breach involving their personal data, and supervisory
                    authorities are notified where required by law.
                  </p>

                  <h3>Sub-processors</h3>

                  <p>
                    Hosting, payment (our payment partners: PayU, Pine Labs,
                    Razorpay), and transactional email providers are bound by
                    data-processing agreements requiring equivalent security
                    standards.
                  </p>
                </div>

                <div className="privacy-warning-box">
                  <ShieldCheck size={17} />

                  <div>
                    <strong>No system is perfectly secure.</strong>

                    <p>
                      We recommend a unique, strong password and two-factor
                      authentication on every connected social platform. Report
                      suspected vulnerabilities to{" "}
                      <a href="mailto:security@mysocials.in">
                        security@mysocials.in
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                06. RETENTION
            ================================================== */}

            <section id="retention" className="privacy-section legal-section">
              <div className="legal-section-number">06</div>

              <div>
                <h2>Data Retention and Deletion</h2>

                <p>
                  We retain your data for as long as your account is active. You
                  can delete your account yourself from Settings. On deletion
                  your account is deactivated immediately and enters a 90-day
                  recovery window (so you can undo an accidental deletion by
                  signing back in); after that window your OAuth tokens, post
                  content, analytics, Brand DNA data, and personal information
                  are permanently and irreversibly purged. Minimal billing
                  records may be retained longer where tax or accounting law
                  requires it.
                </p>

                <p>
                  You can revoke Socials' access to any connected social account
                  at any time through that platform's own security settings, in
                  addition to disconnecting it inside Socials.
                </p>
              </div>
            </section>

            {/* =================================================
                06A. COOKIES
            ================================================== */}

            <section id="cookies" className="privacy-section legal-section">
              <div className="legal-section-number">06A</div>

              <div>
                <h2>Cookies</h2>

                <div className="privacy-cookie-box">
                  <div className="privacy-cookie-icon">
                    <Cookie size={18} />
                  </div>

                  <div>
                    <p>
                      Socials uses a single strictly-necessary cookie: an
                      HttpOnly session-refresh cookie that keeps you signed in.
                      We do not use advertising, analytics, or tracking cookies,
                      and we do not load third-party trackers. Because we use no
                      non-essential cookies, no cookie-consent banner is
                      required; if that ever changes, we will ask for your
                      consent first.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                07. RIGHTS
            ================================================== */}

            <section id="rights" className="privacy-section legal-section">
              <div className="legal-section-number">07</div>

              <div>
                <h2>Your Rights</h2>

                <p>
                  Depending on your jurisdiction (including the Indian DPDP Act
                  2023, the EU/UK GDPR, and the California CCPA/ CPRA), you have
                  the right to:
                </p>

                <ul className="legal-list">
                  <li>
                    <UserCheck size={15} />
                    <span>
                      <strong>Access and export</strong> the personal data we
                      hold about you. You can download a copy of your data
                      anytime from Settings ("Download my data"), or by emailing
                      us.
                    </span>
                  </li>

                  <li>
                    <UserCheck size={15} />
                    <span>
                      <strong>Correct</strong> inaccurate data (your profile is
                      editable in Settings).
                    </span>
                  </li>

                  <li>
                    <Trash2 size={15} />
                    <span>
                      <strong>Delete</strong> your account and data. Account
                      deletion is self-serve in Settings; see Section 6 for
                      timelines.
                    </span>
                  </li>

                  <li>
                    <ShieldCheck size={15} />
                    <span>
                      <strong>Withdraw consent</strong> as easily as you gave it
                      - for example, turning off Brand DNA learning in your
                      profile stops the writing-style analysis immediately.
                    </span>
                  </li>

                  <li>
                    <ShieldCheck size={15} />
                    <span>
                      <strong>Object to or restrict</strong> certain processing
                      of your data.
                    </span>
                  </li>

                  <li>
                    <Mail size={15} />
                    <span>
                      <strong>Grievance redressal (India):</strong> raise a
                      complaint with our Grievance Officer (see our Contact
                      page). We acknowledge grievances within 24 hours and
                      resolve them within 15 days.
                    </span>
                  </li>

                  <li>
                    <ShieldCheck size={15} />
                    <span>
                      <strong>Complain to a supervisory authority</strong> - the
                      Data Protection Board of India, your EU/UK data protection
                      authority, or the California Attorney General, as
                      applicable.
                    </span>
                  </li>
                </ul>

                <div className="privacy-california-box">
                  <strong>California residents</strong>

                  <p>
                    We do not sell or share personal information as defined by
                    the CCPA/CPRA, and we do not use it for cross-context
                    behavioural advertising.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                08. CHANGES
            ================================================== */}

            <section id="changes" className="privacy-section legal-section">
              <div className="legal-section-number">08</div>

              <div>
                <h2>Changes to This Policy</h2>

                <p>
                  We may update this policy from time to time. If we make
                  material changes, we will notify you by email or by posting a
                  notice in the app before the changes take effect. Continued
                  use of Socials after changes are posted constitutes your
                  acceptance of the updated policy.
                </p>
              </div>
            </section>

            {/* =================================================
                09. CONTACT
            ================================================== */}

            <section id="contact" className="privacy-section legal-section">
              <div className="legal-section-number">09</div>

              <div>
                <h2>Contact and Grievance Officer</h2>

                <p>
                  For privacy-related questions or to exercise your data rights,
                  contact us at{" "}
                  <a
                    className="privacy-email-link"
                    href="mailto:support@mysocials.in"
                  >
                    support@mysocials.in
                  </a>
                  .
                </p>

                <p>
                  Security reports go to{" "}
                  <a
                    className="privacy-email-link"
                    href="mailto:security@mysocials.in"
                  >
                    security@mysocials.in
                  </a>
                  .
                </p>

                <div className="privacy-contact-box">
                  <Mail size={17} />

                  <div>
                    <strong>Grievance Officer</strong>

                    <p>
                      Our Grievance Officer's details, as required under Indian
                      law, are published on our{" "}
                      <a
                        href="https://www.mysocials.in/contact"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Contact page
                        <ExternalLink size={11} />
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                SECURITY POLICY LINK
            ================================================== */}

            <a
              className="privacy-security-link"
              href="https://www.mysocials.in/security"
              target="_blank"
              rel="noreferrer"
            >
              <ShieldCheck size={16} />

              <span>View Security Policy</span>

              <ExternalLink size={13} />
            </a>

            {/* FOOTER */}
            <div className="privacy-footer-note legal-footer-note">
              <ShieldCheck size={17} />

              <div>
                <strong>© 2026 Socials. All rights reserved.</strong>

                <p>
                  This Privacy Policy explains how Socials collects, uses,
                  protects, and manages your personal information.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
