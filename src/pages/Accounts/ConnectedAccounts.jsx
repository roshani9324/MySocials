import { useState } from "react";
import {
  Check,
  ChevronRight,
  CircleHelp,
  Link2,
  Plus,
  ShieldCheck,
  Unplug,
  Users,
} from "lucide-react";
import "./ConnectedAccounts.css";

const initialAccounts = [
  {
    id: "instagram",
    name: "Instagram",
    handle: "",
    connected: false,
    colorClass: "instagram",
    description: "Publish photos, reels and posts to Instagram.",
  },
  {
    id: "youtube",
    name: "YouTube",
    handle: "",
    connected: false,
    colorClass: "youtube",
    description: "Publish and manage videos on your YouTube channel.",
  },
  {
    id: "x",
    name: "X",
    handle: "",
    connected: false,
    colorClass: "x",
    description: "Publish and manage posts on X.",
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: "",
    connected: false,
    colorClass: "facebook",
    description: "Publish content to your Facebook presence.",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "",
    connected: false,
    colorClass: "linkedin",
    description: "Publish professional content to LinkedIn.",
  },
  {
    id: "threads",
    name: "Threads",
    handle: "",
    connected: false,
    colorClass: "threads",
    description: "Publish and manage content on Threads.",
  },
];

function PlatformMark({ type }) {
  if (type === "instagram") {
    return (
      <div className="platform-mark instagram-mark">
        <span />
      </div>
    );
  }

  if (type === "youtube") {
    return (
      <div className="platform-mark youtube-mark">
        <span>▶</span>
      </div>
    );
  }

  if (type === "x") {
    return (
      <div className="platform-mark x-mark">
        <span>𝕏</span>
      </div>
    );
  }

  if (type === "facebook") {
    return (
      <div className="platform-mark facebook-mark">
        <span>f</span>
      </div>
    );
  }

  if (type === "linkedin") {
    return (
      <div className="platform-mark linkedin-mark">
        <span>in</span>
      </div>
    );
  }

  return (
    <div className="platform-mark threads-mark">
      <span>@</span>
    </div>
  );
}

function ConnectedAccounts() {
  const [accounts, setAccounts] = useState(initialAccounts);

  const connectedCount = accounts.filter((account) => account.connected).length;

  const handleConnect = (id) => {
    setAccounts((current) =>
      current.map((account) =>
        account.id === id
          ? {
              ...account,
              connected: true,
              handle: "Connected account",
            }
          : account,
      ),
    );
  };

  const handleDisconnect = (id) => {
    setAccounts((current) =>
      current.map((account) =>
        account.id === id
          ? {
              ...account,
              connected: false,
              handle: "",
            }
          : account,
      ),
    );
  };

  return (
    <div className="connected-accounts-page">
      <div className="connected-accounts-glow glow-one" />
      <div className="connected-accounts-glow glow-two" />

      <div className="connected-accounts-container">
        {/* Header */}
        <header className="connected-accounts-header">
          <div>
            <div className="accounts-eyebrow">
              <span className="accounts-eyebrow-dot" />
              SOCIAL ACCOUNTS
            </div>

            <h1>Connected Accounts</h1>

            <p>
              Connect and manage the social platforms you use with MySocials.
            </p>
          </div>

          <div className="accounts-count-card">
            <div className="accounts-count-icon">
              <Users size={18} />
            </div>

            <div>
              <span>CONNECTED</span>
              <strong>
                {connectedCount} / {accounts.length}
              </strong>
            </div>
          </div>
        </header>

        {/* Security banner */}
        <div className="accounts-security-banner">
          <div className="security-banner-icon">
            <ShieldCheck size={18} />
          </div>

          <div>
            <strong>Your accounts stay under your control</strong>
            <p>
              Connect only the platforms you want to use for publishing and
              management.
            </p>
          </div>

          <CircleHelp size={17} className="security-help-icon" />
        </div>

        {/* Accounts section */}
        <section className="accounts-section">
          <div className="accounts-section-heading">
            <div>
              <span className="accounts-section-label">YOUR PLATFORMS</span>

              <h2>Manage your social connections</h2>

              <p>
                Connect your social accounts to publish from one unified
                workspace.
              </p>
            </div>

            <span className="platform-total">{accounts.length} platforms</span>
          </div>

          <div className="accounts-grid">
            {accounts.map((account) => (
              <article
                key={account.id}
                className={`social-account-card ${
                  account.connected ? "is-connected" : ""
                }`}
              >
                <div className="social-account-top">
                  <PlatformMark type={account.id} />

                  <div
                    className={`account-status ${
                      account.connected
                        ? "status-connected"
                        : "status-disconnected"
                    }`}
                  >
                    <span className="status-dot" />

                    {account.connected ? "Connected" : "Not connected"}
                  </div>
                </div>

                <div className="social-account-content">
                  <h3>{account.name}</h3>

                  {account.connected ? (
                    <p className="connected-handle">{account.handle}</p>
                  ) : (
                    <p>{account.description}</p>
                  )}
                </div>

                <div className="social-account-footer">
                  {account.connected ? (
                    <>
                      <div className="sync-info">
                        <Check size={14} />
                        Ready to publish
                      </div>

                      <button
                        type="button"
                        className="disconnect-button"
                        onClick={() => handleDisconnect(account.id)}
                      >
                        <Unplug size={14} />
                        Disconnect
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="connect-hint">
                        Connect to get started
                      </span>

                      <button
                        type="button"
                        className="connect-button"
                        onClick={() => handleConnect(account.id)}
                      >
                        <Link2 size={14} />
                        Connect
                      </button>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Add platform */}
        <section className="accounts-info-card">
          <div className="info-card-icon">
            <Plus size={19} />
          </div>

          <div>
            <h3>One workspace for every platform</h3>

            <p>
              Socials lets you compose once and publish across your connected
              social accounts.
            </p>
          </div>

          <ChevronRight size={18} />
        </section>
      </div>
    </div>
  );
}

export default ConnectedAccounts;
