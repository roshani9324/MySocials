import React from "react";
import {
  ArrowLeft,
  FileText,
  ShieldCheck,
  UserCheck,
  Link2,
  FileCheck,
  Ban,
  CreditCard,
  UserX,
  AlertTriangle,
  Scale,
  Mail,
  ChevronRight,
  ExternalLink,
  Clock3,
} from "lucide-react";

import "./Terms.css";

const Terms = () => {
  const sections = [
    { id: "agreement", label: "Agreement to These Terms" },
    { id: "what-socials-does", label: "What Socials Does" },
    { id: "eligibility", label: "Eligibility" },
    { id: "account", label: "Your Account" },
    { id: "third-party", label: "Third-Party Platforms" },
    { id: "content", label: "Your Content" },
    { id: "acceptable-use", label: "Acceptable Use" },
    { id: "billing", label: "Plans, Billing, and Refunds" },
    { id: "termination", label: "Suspension and Termination" },
    { id: "disclaimers", label: "Disclaimers" },
    { id: "liability", label: "Limitation of Liability" },
    { id: "law", label: "Governing Law" },
    { id: "contact", label: "Contact" },
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
    <div className="terms-page legal-page">
      {/* Background Effects */}
      <div className="terms-glow terms-glow-one" />
      <div className="terms-glow terms-glow-two" />

      <div className="terms-container legal-container">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <header className="terms-header legal-header">
          <div className="terms-heading-wrapper legal-heading-wrapper">
            <button
              type="button"
              className="terms-back-button legal-back-button"
              onClick={() => window.history.back()}
              aria-label="Go back"
            >
              <ArrowLeft size={17} />
            </button>

            <div>
              <div className="terms-eyebrow legal-eyebrow">
                <span />
                TERMS
              </div>

              <h1>Terms of Service</h1>

              <p>The rules that govern your use of Socials.</p>
            </div>
          </div>

          <div className="terms-updated legal-updated">
            <Clock3 size={14} />

            <div>
              <span>Last updated</span>
              <strong>April 2026</strong>
            </div>
          </div>
        </header>

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="terms-hero legal-hero">
          <div className="terms-hero-icon legal-hero-icon">
            <FileText size={24} />
          </div>

          <div>
            <h2>The rules that govern your use of Socials.</h2>

            <p>
              Please read these Terms of Service carefully before creating an
              account or using the Socials platform.
            </p>
          </div>
        </section>

        {/* =====================================================
            MAIN LAYOUT
        ====================================================== */}

        <div className="terms-layout legal-layout">
          {/* ===================================================
              LEFT NAVIGATION
          ==================================================== */}

          <aside className="terms-navigation legal-navigation">
            <div className="terms-navigation-card legal-navigation-card">
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

          <main className="terms-content legal-content">
            {/* =================================================
                01. AGREEMENT
            ================================================== */}

            <section id="agreement" className="terms-section legal-section">
              <div className="legal-section-number">01</div>

              <div>
                <h2>Agreement to These Terms</h2>

                <p>
                  These Terms of Service ("Terms") are a binding agreement
                  between you and Socials ("Socials", "we", "our", or "us") and
                  govern your access to and use of our website, mobile
                  applications, and any related services (collectively, the
                  "Service").
                </p>

                <p>
                  By creating an account, connecting a social platform, or
                  otherwise using the Service, you confirm that you have read,
                  understood, and agree to be bound by these Terms and by our{" "}
                  <a
                    href="https://www.mysocials.in/privacy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Privacy Policy
                    <ExternalLink size={11} />
                  </a>
                  . If you do not agree, you must not use the Service.
                </p>
              </div>
            </section>

            {/* =================================================
                02. WHAT SOCIALS DOES
            ================================================== */}

            <section
              id="what-socials-does"
              className="terms-section legal-section"
            >
              <div className="legal-section-number">02</div>

              <div>
                <h2>What Socials Does</h2>

                <p>
                  Socials is a social media management platform that helps
                  creators and businesses schedule, publish, and analyze content
                  across multiple third-party social networks from a single
                  dashboard. Supported networks currently include Instagram,
                  YouTube, X (formerly Twitter), Facebook, LinkedIn, and Reddit.
                </p>

                <div className="terms-info-box">
                  <ShieldCheck size={17} />

                  <p>
                    We act as a tool that executes publishing actions on your
                    behalf using the authorization you grant us through each
                    connected platform. We do not own, control, or endorse the
                    content you publish through the Service.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                03. ELIGIBILITY
            ================================================== */}

            <section id="eligibility" className="terms-section legal-section">
              <div className="legal-section-number">03</div>

              <div>
                <h2>Eligibility</h2>

                <div className="terms-highlight-card">
                  <UserCheck size={19} />

                  <div>
                    <strong>18+ requirement</strong>

                    <p>
                      You must be at least 18 years old, or the age of majority
                      in your jurisdiction, to use the Service.
                    </p>
                  </div>
                </div>

                <p>
                  By using Socials you represent and warrant that you meet this
                  age requirement and that you have the legal capacity to enter
                  into these Terms.
                </p>
              </div>
            </section>

            {/* =================================================
                04. YOUR ACCOUNT
            ================================================== */}

            <section id="account" className="terms-section legal-section">
              <div className="legal-section-number">04</div>

              <div>
                <h2>Your Account</h2>

                <p>
                  To use most features you must create an account. You agree to
                  provide accurate information, keep it current, and safeguard
                  your login credentials. You are responsible for all activity
                  that occurs under your account.
                </p>

                <div className="terms-security-box">
                  <ShieldCheck size={17} />

                  <div>
                    <strong>Unauthorized access</strong>

                    <p>
                      You must notify us immediately at{" "}
                      <a href="mailto:security@mysocials.in">
                        security@mysocials.in
                      </a>{" "}
                      if you suspect any unauthorized access to your account.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                05. THIRD PARTY
            ================================================== */}

            <section id="third-party" className="terms-section legal-section">
              <div className="legal-section-number">05</div>

              <div>
                <h2>Third-Party Platforms</h2>

                <p>
                  Socials relies on APIs provided by third-party platforms
                  (Instagram, YouTube, Facebook, X, LinkedIn, Reddit, Google,
                  and others). When you connect an account, you grant Socials
                  permission to act on your behalf within the scopes you approve
                  on that platform's consent screen.
                </p>

                <p>
                  Your use of each connected platform also remains subject to
                  that platform's own terms and policies, including:
                </p>

                <div className="terms-link-list">
                  <a
                    href="https://developers.google.com/terms/api-services-user-data-policy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Link2 size={14} />

                    <span>
                      Google API Services User Data Policy
                      <small>
                        including the Limited Use requirements for YouTube data
                      </small>
                    </span>

                    <ExternalLink size={12} />
                  </a>

                  <a
                    href="https://www.youtube.com/t/terms"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Link2 size={14} />

                    <span>YouTube Terms of Service</span>

                    <ExternalLink size={12} />
                  </a>

                  <div className="terms-static-link">
                    <Link2 size={14} />

                    <span>
                      The developer and platform terms for Meta (Instagram /
                      Facebook), X, LinkedIn, and Reddit.
                    </span>
                  </div>
                </div>

                <div className="terms-info-box">
                  <AlertTriangle size={17} />

                  <p>
                    If a third-party platform changes, restricts, or removes the
                    APIs we rely on, we may need to disable the corresponding
                    features in Socials without notice.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                06. YOUR CONTENT
            ================================================== */}

            <section id="content" className="terms-section legal-section">
              <div className="legal-section-number">06</div>

              <div>
                <h2>Your Content</h2>

                <p>
                  "Your Content" means any text, image, video, caption,
                  schedule, or other material you upload to, create in, or
                  publish through the Service. You retain all ownership rights
                  in Your Content.
                </p>

                <div className="terms-content-permission">
                  <FileCheck size={18} />

                  <div>
                    <strong>License to operate the Service</strong>

                    <p>
                      You grant Socials a worldwide, non-exclusive, royalty-free
                      license to host, store, transmit, display, and transcode
                      Your Content solely to the extent necessary to operate the
                      Service — for example, to deliver your posts to the
                      third-party platforms you have connected and to show you
                      previews and analytics inside Socials.
                    </p>
                  </div>
                </div>

                <p>
                  You are solely responsible for Your Content and represent that
                  you have all necessary rights, licenses, and permissions to
                  publish it on each connected platform.
                </p>
              </div>
            </section>

            {/* =================================================
                07. ACCEPTABLE USE
            ================================================== */}

            <section
              id="acceptable-use"
              className="terms-section legal-section"
            >
              <div className="legal-section-number">07</div>

              <div>
                <h2>Acceptable Use</h2>

                <p>You agree not to use the Service to:</p>

                <ul className="terms-list">
                  <li>
                    <Ban size={15} />
                    <span>
                      Publish unlawful, infringing, defamatory, deceptive,
                      hateful, harassing, sexually explicit, or otherwise
                      harmful content.
                    </span>
                  </li>

                  <li>
                    <Ban size={15} />
                    <span>
                      Impersonate any person or entity, or misrepresent your
                      affiliation with any person or entity.
                    </span>
                  </li>

                  <li>
                    <Ban size={15} />
                    <span>
                      Engage in spam, coordinated inauthentic behavior,
                      artificial engagement inflation, or any activity that
                      violates the terms of a connected platform.
                    </span>
                  </li>

                  <li>
                    <Ban size={15} />
                    <span>
                      Distribute malware, viruses, or other malicious code, or
                      attempt to probe, scan, or compromise the Service.
                    </span>
                  </li>

                  <li>
                    <Ban size={15} />
                    <span>
                      Use automated means to scrape or harvest data from the
                      Service beyond your own authorized access.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* =================================================
                08. BILLING
            ================================================== */}

            <section id="billing" className="terms-section legal-section">
              <div className="legal-section-number">08</div>

              <div>
                <h2>Plans, Billing, and Refunds</h2>

                <div className="terms-billing-card">
                  <CreditCard size={19} />

                  <div>
                    <strong>Plans & subscriptions</strong>

                    <p>
                      Socials offers a free plan with limited usage and one or
                      more paid plans with expanded limits and features. Paid
                      subscriptions are billed in advance on a recurring basis
                      through Razorpay.
                    </p>

                    <p>
                      You can cancel a paid subscription at any time from your
                      account settings.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                09. TERMINATION
            ================================================== */}

            <section id="termination" className="terms-section legal-section">
              <div className="legal-section-number">09</div>

              <div>
                <h2>Suspension and Termination</h2>

                <p>
                  You may stop using the Service and delete your account at any
                  time. We may suspend or terminate your access to all or part
                  of the Service if we reasonably believe you have violated
                  these Terms.
                </p>

                <div className="terms-warning-card">
                  <UserX size={18} />

                  <div>
                    <strong>Account access</strong>

                    <p>
                      You remain responsible for activity associated with your
                      account until it is deleted or terminated.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                10. DISCLAIMERS
            ================================================== */}

            <section id="disclaimers" className="terms-section legal-section">
              <div className="legal-section-number">10</div>

              <div>
                <h2>Disclaimers</h2>

                <div className="terms-legal-warning">
                  <AlertTriangle size={18} />

                  <p>
                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT
                    WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. We do
                    not warrant that the Service will be uninterrupted, secure,
                    or error-free.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                11. LIABILITY
            ================================================== */}

            <section id="liability" className="terms-section legal-section">
              <div className="legal-section-number">11</div>

              <div>
                <h2>Limitation of Liability</h2>

                <div className="terms-legal-warning">
                  <Scale size={18} />

                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, SOCIALS WILL NOT BE
                    LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                    OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                12. GOVERNING LAW
            ================================================== */}

            <section id="law" className="terms-section legal-section">
              <div className="legal-section-number">12</div>

              <div>
                <h2>Governing Law</h2>

                <div className="terms-law-card">
                  <Scale size={19} />

                  <p>
                    These Terms are governed by the laws of India. You and
                    Socials agree to submit to the exclusive jurisdiction of the
                    courts located in Bengaluru, Karnataka, India for the
                    resolution of any dispute arising out of or relating to
                    these Terms or the Service.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                13. CONTACT
            ================================================== */}

            <section id="contact" className="terms-section legal-section">
              <div className="legal-section-number">13</div>

              <div>
                <h2>Contact</h2>

                <div className="terms-contact-card">
                  <Mail size={18} />

                  <div>
                    <strong>Have questions?</strong>

                    <p>
                      If you have questions about these Terms, please contact us
                      at{" "}
                      <a href="mailto:support@mysocials.in">
                        support@mysocials.in
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                FOOTER
            ================================================== */}

            <div className="terms-footer-note legal-footer-note">
              <FileText size={17} />

              <div>
                <strong>© 2026 Socials. All rights reserved.</strong>

                <p>
                  <a
                    href="https://www.mysocials.in/privacy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Privacy Policy
                    <ExternalLink size={11} />
                  </a>
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Terms;
