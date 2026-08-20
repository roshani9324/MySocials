import { useState } from "react";
import {
  User,
  Bell,
  Link2,
  Shield,
  Palette,
  Save,
  Camera,
  Mail,
  Lock,
  Check,
  ChevronRight,
  Globe,
  Moon,
  Monitor,
  Sun,
  KeyRound,
  Trash2,
  Download,
  CheckCircle2,
  AlertTriangle,
  CreditCard,
} from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";
import BillingSection from "./BillingSection";
import { useSearchParams } from "react-router-dom";
import "./Settings.css";

const settingsNavigation = [
  {
    id: "profile",
    label: "Profile",
    description: "Personal information",
    icon: User,
  },
  {
    id: "notifications",
    label: "Notifications",
    description: "Alerts and updates",
    icon: Bell,
  },
  {
    id: "connected",
    label: "Connected Accounts",
    description: "Social platforms",
    icon: Link2,
  },
  {
    id: "security",
    label: "Security",
    description: "Password and protection",
    icon: Shield,
  },
  {
    id: "Billing & Subscription ",
    label: "Billing & Subscription ",
    description: "Billing & Subscription ",
    icon: CreditCard,
  },
  {
    id: "appearance",
    label: "Appearance",
    description: "Theme and layout",
    icon: Palette,
  },
];

const socialAccounts = [
  {
    id: "instagram",
    name: "Instagram",
    username: "@roshani",
    initials: "IG",
    connected: true,
    icon: FaInstagram,
  },
  {
    id: "facebook",
    name: "Facebook",
    username: "Roshani Maurya",
    initials: "FB",
    connected: true,
    icon: FaFacebook,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    username: "Not connected",
    initials: "IN",
    connected: false,
    icon: FaLinkedin,
  },
  {
    id: "youtube",
    name: "YouTube",
    username: "Not connected",
    initials: "YT",
    connected: false,
    icon: FaYoutube,
  },
];

function Toggle({ enabled, onChange }) {
  return (
    <button
      type="button"
      className={`settings-toggle ${enabled ? "active" : ""}`}
      onClick={onChange}
      aria-pressed={enabled}
    >
      <span className="settings-toggle-knob" />
    </button>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="settings-section-header">
      <div>
        {eyebrow && <span className="settings-eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

function SettingRow({ icon: Icon, title, description, children }) {
  return (
    <div className="setting-row">
      <div className="setting-row-left">
        {Icon && (
          <div className="setting-row-icon">
            <Icon size={18} />
          </div>
        )}

        <div className="setting-row-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

      <div className="setting-row-control">{children}</div>
    </div>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div className="settings-field">
      <label htmlFor={name}>{label}</label>

      <div className="settings-input-wrapper">
        {type === "email" && <Mail className="settings-input-icon" size={17} />}

        {type === "password" && (
          <Lock className="settings-input-icon" size={17} />
        )}

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={type === "text" ? "" : "has-icon"}
        />
      </div>
    </div>
  );
}

export default function Settings() {
  const [activeSection, setActiveSection] = useState("profile");

  const [profile, setProfile] = useState({
    name: "Roshani Maurya",
    email: "roshani@example.com",
    username: "roshani",
    bio: "Social media creator and digital enthusiast.",
  });
const [searchParams] = useSearchParams();

const [activeTab, setActiveTab] = useState(
  searchParams.get("tab") || "general",
);
  const [notifications, setNotifications] = useState({
    email: true,
    scheduled: true,
    engagement: true,
    product: false,
    security: true,
  });

  const [accounts, setAccounts] = useState(
    socialAccounts.reduce((result, account) => {
      result[account.id] = account.connected;
      return result;
    }, {}),
  );

  const [appearance, setAppearance] = useState("dark");
  const [compactMode, setCompactMode] = useState(false);
  const [animations, setAnimations] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  const [saved, setSaved] = useState(false);

  const handleProfileChange = (event) => {
    const { name, value } = event.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const toggleNotification = (key) => {
    setNotifications((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  const toggleAccount = (id) => {
    setAccounts((previous) => ({
      ...previous,
      [id]: !previous[id],
    }));
  };

  const renderProfile = () => (
    <div className="settings-panel">
      <SectionHeader
        eyebrow="ACCOUNT"
        title="Profile Settings"
        description="Manage your personal information and public profile details."
      />

      <div className="settings-panel-body">
        <div className="profile-picture-section">
          <div className="profile-picture">
            <span>RM</span>
          </div>

          <div className="profile-picture-info">
            <h3>Profile Picture</h3>
            <p>Your profile picture appears across your MySocials workspace.</p>

            <div className="profile-picture-actions">
              <button className="settings-secondary-button">
                <Camera size={16} />
                Change Photo
              </button>

              <span>PNG, JPG or WEBP • Max 2MB</span>
            </div>
          </div>
        </div>

        <div className="settings-divider" />

        <div className="settings-form-grid">
          <InputField
            label="Full Name"
            name="name"
            value={profile.name}
            onChange={handleProfileChange}
            placeholder="Enter your name"
          />

          <InputField
            label="Username"
            name="username"
            value={profile.username}
            onChange={handleProfileChange}
            placeholder="Enter username"
          />

          <InputField
            label="Email Address"
            name="email"
            type="email"
            value={profile.email}
            onChange={handleProfileChange}
            placeholder="Enter email"
          />

          <div className="settings-field">
            <label htmlFor="timezone">Timezone</label>

            <div className="settings-input-wrapper">
              <Globe className="settings-input-icon" size={17} />

              <select id="timezone" className="has-icon" defaultValue="IST">
                <option value="IST">(GMT+05:30) India Standard Time</option>
                <option value="UTC">
                  (GMT+00:00) Coordinated Universal Time
                </option>
                <option value="EST">(GMT-05:00) Eastern Time</option>
                <option value="PST">(GMT-08:00) Pacific Time</option>
              </select>
            </div>
          </div>
        </div>

        <div className="settings-field settings-full-field">
          <label htmlFor="bio">Bio</label>

          <textarea
            id="bio"
            name="bio"
            value={profile.bio}
            onChange={handleProfileChange}
            placeholder="Tell us something about yourself..."
            rows={5}
          />

          <span className="field-hint">Keep your bio short and simple.</span>
        </div>

        <div className="settings-actions">
          <button className="settings-primary-button" onClick={handleSave}>
            {saved ? <CheckCircle2 size={17} /> : <Save size={17} />}
            {saved ? "Changes Saved" : "Save Profile"}
          </button>
        </div>
      </div>
    </div>
  );
  {
    activeTab === "billing" && <BillingSection />;
  }

  const renderNotifications = () => (
    <div className="settings-panel">
      <SectionHeader
        eyebrow="PREFERENCES"
        title="Notifications"
        description="Choose what notifications you want to receive from MySocials."
      />

      <div className="settings-panel-body settings-list">
        <SettingRow
          icon={Mail}
          title="Email Notifications"
          description="Receive important account and activity notifications."
        >
          <Toggle
            enabled={notifications.email}
            onChange={() => toggleNotification("email")}
          />
        </SettingRow>

        <SettingRow
          icon={Bell}
          title="Scheduled Post Reminders"
          description="Get notified before your scheduled posts are published."
        >
          <Toggle
            enabled={notifications.scheduled}
            onChange={() => toggleNotification("scheduled")}
          />
        </SettingRow>

        <SettingRow
          icon={CheckCircle2}
          title="Engagement Alerts"
          description="Receive updates about likes, comments and interactions."
        >
          <Toggle
            enabled={notifications.engagement}
            onChange={() => toggleNotification("engagement")}
          />
        </SettingRow>

        <SettingRow
          icon={Globe}
          title="Product Updates"
          description="Receive information about new features and improvements."
        >
          <Toggle
            enabled={notifications.product}
            onChange={() => toggleNotification("product")}
          />
        </SettingRow>

        <SettingRow
          icon={Shield}
          title="Security Alerts"
          description="Get notified about important account security events."
        >
          <Toggle
            enabled={notifications.security}
            onChange={() => toggleNotification("security")}
          />
        </SettingRow>
      </div>
    </div>
  );

  const renderConnectedAccounts = () => (
    <div className="settings-panel">
      <SectionHeader
        eyebrow="SOCIAL ACCOUNTS"
        title="Connected Accounts"
        description="Connect your social media accounts to manage them from one place."
      />

      <div className="settings-panel-body">
        <div className="connected-account-list">
          {socialAccounts.map((account) => {
            const isConnected = accounts[account.id];

            return (
              <div
                className={`connected-account-card ${
                  isConnected ? "connected" : ""
                }`}
                key={account.id}
              >
                <div className="connected-account-left">
                  <div className="social-platform-icon">{account.initials}</div>

                  <div className="connected-account-info">
                    <div className="account-title-row">
                      <h3>{account.name}</h3>

                      {isConnected && (
                        <span className="connected-badge">
                          <span />
                          Connected
                        </span>
                      )}
                    </div>

                    <p>
                      {isConnected ? account.username : "No account connected"}
                    </p>
                  </div>
                </div>

                <button
                  className={
                    isConnected ? "disconnect-button" : "connect-button"
                  }
                  onClick={() => toggleAccount(account.id)}
                >
                  {isConnected ? "Disconnect" : "Connect"}
                </button>
              </div>
            );
          })}
        </div>

        <div className="info-box">
          <div className="info-box-icon">
            <Link2 size={17} />
          </div>

          <div>
            <h4>Why connect your accounts?</h4>
            <p>
              Connect your social platforms to schedule, publish and monitor
              your content from one centralized dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="settings-panel">
      <SectionHeader
        eyebrow="PROTECTION"
        title="Security"
        description="Protect your account and manage your security preferences."
      />

      <div className="settings-panel-body">
        <div className="security-card">
          <div className="security-card-header">
            <div className="security-card-icon">
              <KeyRound size={19} />
            </div>

            <div>
              <h3>Change Password</h3>
              <p>Choose a strong password that you do not use anywhere else.</p>
            </div>
          </div>

          <div className="password-grid">
            <InputField
              label="Current Password"
              name="currentPassword"
              type="password"
              placeholder="Enter current password"
            />

            <InputField
              label="New Password"
              name="newPassword"
              type="password"
              placeholder="Enter new password"
            />

            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm new password"
            />
          </div>

          <div className="security-card-actions">
            <button className="settings-primary-button">
              <Lock size={16} />
              Update Password
            </button>
          </div>
        </div>

        <div className="settings-divider" />

        <SettingRow
          icon={Shield}
          title="Two-Factor Authentication"
          description="Add an extra layer of protection to your account."
        >
          <Toggle
            enabled={twoFactor}
            onChange={() => setTwoFactor((previous) => !previous)}
          />
        </SettingRow>

        <div className="settings-divider" />

        <div className="danger-zone">
          <div className="danger-zone-header">
            <div className="danger-icon">
              <AlertTriangle size={18} />
            </div>

            <div>
              <h3>Danger Zone</h3>
              <p>These actions can permanently affect your account.</p>
            </div>
          </div>

          <div className="danger-action">
            <div>
              <h4>Delete Account</h4>
              <p>Permanently delete your account and all associated data.</p>
            </div>

            <button className="delete-button">
              <Trash2 size={16} />
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAppearance = () => (
    <div className="settings-panel">
      <SectionHeader
        eyebrow="CUSTOMIZATION"
        title="Appearance"
        description="Customize how your MySocials dashboard looks and behaves."
      />

      <div className="settings-panel-body">
        <div className="appearance-section">
          <div className="subsection-heading">
            <h3>Theme</h3>
            <p>Select the appearance you prefer.</p>
          </div>

          <div className="theme-grid">
            <button
              className={`theme-card ${
                appearance === "light" ? "selected" : ""
              }`}
              onClick={() => setAppearance("light")}
            >
              <div className="theme-preview light-preview">
                <Sun size={24} />
              </div>

              <div className="theme-card-content">
                <div>
                  <h4>Light</h4>
                  <p>Clean and bright</p>
                </div>

                {appearance === "light" && (
                  <span className="theme-check">
                    <Check size={13} />
                  </span>
                )}
              </div>
            </button>

            <button
              className={`theme-card ${
                appearance === "dark" ? "selected" : ""
              }`}
              onClick={() => setAppearance("dark")}
            >
              <div className="theme-preview dark-preview">
                <Moon size={24} />
              </div>

              <div className="theme-card-content">
                <div>
                  <h4>Dark</h4>
                  <p>Recommended</p>
                </div>

                {appearance === "dark" && (
                  <span className="theme-check">
                    <Check size={13} />
                  </span>
                )}
              </div>
            </button>

            <button
              className={`theme-card ${
                appearance === "system" ? "selected" : ""
              }`}
              onClick={() => setAppearance("system")}
            >
              <div className="theme-preview system-preview">
                <Monitor size={24} />
              </div>

              <div className="theme-card-content">
                <div>
                  <h4>System</h4>
                  <p>Follow device settings</p>
                </div>

                {appearance === "system" && (
                  <span className="theme-check">
                    <Check size={13} />
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>

        <div className="settings-divider" />

        <div className="settings-list">
          <SettingRow
            icon={Palette}
            title="Compact Dashboard"
            description="Reduce spacing between dashboard cards and sections."
          >
            <Toggle
              enabled={compactMode}
              onChange={() => setCompactMode((previous) => !previous)}
            />
          </SettingRow>

          <SettingRow
            icon={Monitor}
            title="Animations"
            description="Enable smooth transitions and interface animations."
          >
            <Toggle
              enabled={animations}
              onChange={() => setAnimations((previous) => !previous)}
            />
          </SettingRow>
        </div>

        <div className="settings-divider" />

        <div className="appearance-actions">
          <button className="utility-card">
            <div className="utility-card-icon">
              <Download size={18} />
            </div>

            <div>
              <h4>Export Preferences</h4>
              <p>Download your current settings.</p>
            </div>

            <ChevronRight size={17} />
          </button>

          <button className="utility-card">
            <div className="utility-card-icon">
              <Palette size={18} />
            </div>

            <div>
              <h4>Reset Appearance</h4>
              <p>Restore default appearance settings.</p>
            </div>

            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return renderProfile();

      case "notifications":
        return renderNotifications();

      case "connected":
        return renderConnectedAccounts();

      case "security":
        return renderSecurity();

      case "appearance":
        return renderAppearance();

      default:
        return renderProfile();
    }
  };

  return (
    <div className="settings-page">
      <div className="settings-background-glow glow-one" />
      <div className="settings-background-glow glow-two" />

      <div className="settings-container">
        {/* Page Header */}
        <header className="settings-page-header">
          <div className="settings-heading">
            <div className="settings-heading-label">
              <span className="heading-dot" />
              Account Settings
            </div>

            <h1>Settings</h1>

            <p>
              Manage your profile, connected accounts and dashboard preferences.
            </p>
          </div>

          <button className="settings-header-save" onClick={handleSave}>
            {saved ? <CheckCircle2 size={17} /> : <Save size={17} />}
            {saved ? "Saved" : "Save Changes"}
          </button>
        </header>

        {/* Main Layout */}
        <div className="settings-layout">
          {/* Navigation */}
          <aside className="settings-navigation">
            <div className="settings-navigation-title">
              <span>SETTINGS</span>
            </div>

            <nav>
              {settingsNavigation.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    className={`settings-nav-item ${isActive ? "active" : ""}`}
                    onClick={() => setActiveSection(item.id)}
                  >
                    <span className="settings-nav-icon">
                      <Icon size={17} />
                    </span>

                    <span className="settings-nav-text">
                      <strong>{item.label}</strong>
                      <small>{item.description}</small>
                    </span>

                    <ChevronRight size={15} className="settings-nav-arrow" />
                  </button>
                );
              })}
            </nav>

            <div className="settings-sidebar-footer">
              <div className="mini-avatar">RM</div>

              <div>
                <strong>Roshani Maurya</strong>
                <span>Free Account</span>
              </div>
            </div>
          </aside>

          {/* Active Settings Content */}
          <main className="settings-main">{renderContent()}</main>
        </div>
      </div>
    </div>
  );
}
