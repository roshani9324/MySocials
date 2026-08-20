import {
  CalendarDays,
  ChartNoAxesCombined,
  ChevronRight,
  CircleHelp,
 
  FileText,
 
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Sparkles,

} from "lucide-react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Help.css";

const platforms = [
  {
    name: "Instagram",
    icon: FaInstagram,
    className: "instagram",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    className: "youtube",
  },
  {
    name: "X",
    icon: MessageCircle,
    className: "x-platform",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    className: "facebook",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    className: "linkedin",
  },
  {
    name: "Threads",
    icon: MessageCircle,
    className: "threads",
  },
];

const helpTopics = [
  {
    icon: FileText,
    title: "What Socials does",
    description: "Compose once, publish to every connected social account.",
  },
  {
    icon: CalendarDays,
    title: "Schedule posts",
    description: "Schedule posts ahead of time with a visual calendar.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Track performance",
    description:
      "Track likes, comments, shares, views, and engagement rate across networks.",
  },
  {
    icon: Sparkles,
    title: "AI assistance",
    description:
      "Generate captions and content ideas with optional AI assistance.",
  },
];

function Help() {
  const navigate = useNavigate();

  return (
    <div className="help-page">
      {/* Hero */}
      <section className="help-hero">
        <div className="help-hero-content">
          <div className="help-eyebrow">
            <span className="help-eyebrow-icon">
              <CircleHelp size={15} />
            </span>
            Help Center
          </div>

          <h1>
            How can we
            <span> help you?</span>
          </h1>

          <p>
            Everything you need to understand Socials and manage your connected
            social accounts from one workspace.
          </p>
        </div>
      </section>

      {/* What Socials Does */}
      <section className="help-section">
        <div className="help-section-heading">
          <div>
            <span className="section-label">ABOUT SOCIALS</span>

            <h2>One dashboard. Every social channel.</h2>

            <p>
              Socials is a social media management platform that lets creators
              and businesses schedule posts, publish content across multiple
              social networks, and track performance analytics — all from one
              dashboard.
            </p>
          </div>
        </div>

        <div className="platform-row">
          {platforms.map((platform) => {
            const Icon = platform.icon;

            return (
              <div
                className={`platform-chip ${platform.className}`}
                key={platform.name}
              >
                <Icon size={19} strokeWidth={2} />
                <span>{platform.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="help-section">
        <div className="help-section-heading compact">
          <span className="section-label">WHAT SOCIALS DOES</span>

          <h2>Everything from one calm workspace.</h2>
        </div>

        <div className="help-topic-grid">
          {helpTopics.map((topic, index) => {
            const Icon = topic.icon;

            return (
              <article className="help-topic-card" key={topic.title}>
                <div className="help-topic-number">0{index + 1}</div>

                <div className="help-topic-icon">
                  <Icon size={22} />
                </div>

                <h3>{topic.title}</h3>

                <p>{topic.description}</p>

                <div className="topic-arrow">
                  <ChevronRight size={17} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Google Data */}
      <section className="help-section">
        <div className="data-card">
          <div className="data-card-top">
            <div className="data-card-icon">
              <LockKeyhole size={24} />
            </div>

            <div>
              <span className="section-label">DATA & PRIVACY</span>

              <h2>How Socials uses your Google account data</h2>
            </div>
          </div>

          <div className="data-card-content">
            <p>
              Socials uses Google Sign-In for secure, passwordless
              authentication and requests only your basic profile (name and
              email).
            </p>

            <p>
              For YouTube publishing, Socials requests permission to upload
              videos and manage your channel content on your behalf.
            </p>

            <p>
              We do not access, store, or share any other Google account data.
            </p>

            <div className="privacy-note">
              <ShieldCheck size={18} />

              <span>
                Our use of Google user data complies with the Google API
                Services User Data Policy, including the Limited Use
                requirements.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="help-footer-section">
        <div className="help-footer-card">
          <div>
            <span className="section-label">NEED MORE INFORMATION?</span>

            <h3>Explore Socials policies and security.</h3>
          </div>

          <div className="help-footer-links">
            <button type="button">Privacy Policy</button>
            <button type="button">Terms of Service</button>
            <button type="button">Security Policy</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Help;
