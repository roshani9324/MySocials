import { motion } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  ShieldCheck,
  UserRound,
  Scale,
  LifeBuoy,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Contact.css";

const contacts = [
  {
    number: "01",
    title: "Support and Billing",
    icon: LifeBuoy,
    label: "GENERAL SUPPORT",
    content: (
      <>
        <p>
          For product help, account issues, billing, cancellations, and refunds:{" "}
          <a href="mailto:support@mysocials.in">support@mysocials.in</a>
        </p>

        <p>
          We acknowledge support emails within 24 hours on business days. You
          can also reach support from inside the app (Help section).
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Privacy and Data Rights",
    icon: ShieldCheck,
    label: "PRIVACY",
    content: (
      <>
        <p>
          To access, export, correct, or delete your data, or to withdraw
          consent:{" "}
          <a href="mailto:support@mysocials.in">support@mysocials.in</a> (most
          of these are also self-serve in Settings). Details of what we collect
          and your rights are in our <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Security Reports",
    icon: ShieldCheck,
    label: "SECURITY",
    content: (
      <>
        <p>
          Found a vulnerability? Please report it responsibly to{" "}
          <a href="mailto:security@mysocials.in">security@mysocials.in</a>. We
          read these with priority and will not take legal action against
          good-faith research. See our{" "}
          <Link to="/security">Security Policy</Link>.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Grievance Officer (India)",
    icon: Scale,
    label: "GRIEVANCE REDRESSAL",
    content: (
      <>
        <p>
          In accordance with the Information Technology Act 2000, the IT
          (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021,
          and the Digital Personal Data Protection Act 2023, the Grievance
          Officer for Socials (mysocials.in) is:
        </p>

        <div className="grievance-details">
          <div>
            <span>Name</span>
            <strong>Arvind Abraham</strong>
          </div>

          <div>
            <span>Email</span>
            <a href="mailto:support@mysocials.in">support@mysocials.in</a>
          </div>

          <div>
            <span>Registered address</span>
            <strong>available on written request to the email above.</strong>
          </div>
        </div>

        <p>
          Grievances are acknowledged within 24 hours and resolved within 15
          days of receipt. If you are not satisfied with the resolution, you may
          escalate to the Data Protection Board of India or the applicable
          authority in your jurisdiction.
        </p>
      </>
    ),
  },
];

export default function Contact() {
  return (
    <div className="contact-page policy-page">
      <div className="contact-glow contact-glow-one" />
      <div className="contact-glow contact-glow-two" />

      <main className="contact-container policy-container">
        <Link to="/" className="policy-back-link">
          <ArrowLeft size={15} />
          Back to Home
        </Link>

        <motion.header
          className="contact-hero policy-hero"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="policy-hero-icon">
            <Mail size={25} />
          </div>

          <div>
            <p className="policy-label">GET IN TOUCH</p>

            <h1>
              Contact
              <span> Us</span>
            </h1>

            <p className="policy-subtitle">
              Support, billing, privacy, security, and grievance redressal
            </p>

            <p className="policy-updated">
              We reply to every message from a real inbox
            </p>
          </div>
        </motion.header>

        <section className="contact-intro">
          <div className="contact-intro-icon">
            <UserRound size={18} />
          </div>

          <div>
            <p>CONTACT SOCIALS</p>
            <h2>We're here to help.</h2>
            <span>
              Choose the right channel below and we'll get back to you.
            </span>
          </div>
        </section>

        <div className="contact-grid">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <motion.article
                key={contact.number}
                className={`contact-card ${
                  contact.number === "04" ? "contact-card-wide" : ""
                }`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
              >
                <div className="contact-card-top">
                  <span className="contact-number">{contact.number}</span>

                  <div className="contact-icon">
                    <Icon size={18} />
                  </div>
                </div>

                <p className="contact-card-label">{contact.label}</p>

                <h2>{contact.title}</h2>

                <div className="contact-card-content">{contact.content}</div>
              </motion.article>
            );
          })}
        </div>

        <section className="contact-links">
          <div className="contact-links-heading">
            <p>QUICK LINKS</p>
            <h2>Helpful resources</h2>
          </div>

          <div className="contact-link-grid">
            <Link to="/privacy" className="contact-link-card">
              <ShieldCheck size={17} />
              <span>
                <strong>Privacy Policy</strong>
                <small>Data and privacy information</small>
              </span>
              <ExternalLink size={14} />
            </Link>

            <Link to="/terms" className="contact-link-card">
              <Scale size={17} />
              <span>
                <strong>Terms of Service</strong>
                <small>Rules governing your use of Socials</small>
              </span>
              <ExternalLink size={14} />
            </Link>

            <Link to="/refunds" className="contact-link-card">
              <Mail size={17} />
              <span>
                <strong>Refunds</strong>
                <small>Billing and cancellation policy</small>
              </span>
              <ExternalLink size={14} />
            </Link>

            <Link to="/security" className="contact-link-card">
              <ShieldCheck size={17} />
              <span>
                <strong>Security Policy</strong>
                <small>How we protect the platform</small>
              </span>
              <ExternalLink size={14} />
            </Link>
          </div>
        </section>

        <footer className="policy-footer">
          <span>© 2026 Socials. All rights reserved.</span>

          <div>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/refunds">Refunds</Link>
            <Link to="/security">Security</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
