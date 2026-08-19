import { useState } from "react";
import {
  User,
  Mail,
  AtSign,
  CalendarDays,
  ShieldCheck,
  Crown,
  CheckCircle2,
  CreditCard,
  BarChart3,
  FileText,
  Users,
  Database,
  Edit3,
  Save,
  Camera,
  Lock,
  LogOut,
  Trash2,
  AlertTriangle,
  ChevronRight,
  Download,
  Settings2,
} from "lucide-react";

import "./Account.css";

const accountMenu = [
  {
    id: "overview",
    label: "Overview",
    description: "Account summary",
    icon: User,
  },
  {
    id: "personal",
    label: "Personal Information",
    description: "Profile details",
    icon: Edit3,
  },
  {
    id: "plan",
    label: "Plan & Billing",
    description: "Subscription details",
    icon: CreditCard,
  },
  {
    id: "activity",
    label: "Account Activity",
    description: "Usage and activity",
    icon: BarChart3,
  },
];

function AccountStat({ icon: Icon, label, value, description }) {
  return (
    <div className="account-stat-card">
      <div className="account-stat-icon">
        <Icon size={18} />
      </div>

      <div className="account-stat-content">
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{description}</small>
      </div>
    </div>
  );
}

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="account-info-item">
      <div className="account-info-icon">
        <Icon size={16} />
      </div>

      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="account-section-header">
      <div>
        <span className="account-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
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
    <div className="account-field">
      <label htmlFor={name}>{label}</label>

      <div className="account-input-wrapper">
        {type === "email" && <Mail className="account-input-icon" size={16} />}

        {name === "username" && (
          <AtSign className="account-input-icon" size={16} />
        )}

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={type === "email" || name === "username" ? "has-icon" : ""}
        />
      </div>
    </div>
  );
}

export default function Account() {
  const [activeSection, setActiveSection] = useState("overview");

  const [profile, setProfile] = useState({
    name: "Roshani Maurya",
    username: "roshani",
    email: "roshani@example.com",
    phone: "+91 98765 43210",
    bio: "Social media creator and digital enthusiast.",
  });

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

  const renderOverview = () => (
    <div className="account-content-panel">
      <SectionHeader
        eyebrow="ACCOUNT OVERVIEW"
        title="Your Account"
        description="View and manage your MySocials account information."
      />

      <div className="account-content-body">
        {/* Profile Hero */}
        <div className="account-profile-hero">
          <div className="account-avatar">
            <span>RM</span>

            <button
              className="account-avatar-edit"
              title="Change profile photo"
            >
              <Camera size={13} />
            </button>
          </div>

          <div className="account-profile-main">
            <div className="account-name-row">
              <h3>{profile.name}</h3>

              <span className="account-verified">
                <CheckCircle2 size={12} />
                Verified
              </span>
            </div>

            <p>@{profile.username}</p>

            <div className="account-member-info">
              <span>
                <CalendarDays size={13} />
                Member since January 2026
              </span>

              <span>
                <ShieldCheck size={13} />
                Account protected
              </span>
            </div>
          </div>

          <button
            className="account-outline-button"
            onClick={() => setActiveSection("personal")}
          >
            <Edit3 size={15} />
            Edit Profile
          </button>
        </div>

        {/* Stats */}
        <div className="account-stats-grid">
          <AccountStat
            icon={Users}
            label="Connected Accounts"
            value="4"
            description="Social platforms"
          />

          <AccountStat
            icon={FileText}
            label="Total Posts"
            value="128"
            description="Published content"
          />

          <AccountStat
            icon={BarChart3}
            label="Engagement"
            value="24.8K"
            description="Total interactions"
          />

          <AccountStat
            icon={Database}
            label="Storage Used"
            value="1.8 GB"
            description="Of 5 GB available"
          />
        </div>

        {/* Account Information */}
        <div className="account-subsection">
          <div className="account-subsection-heading">
            <div>
              <h3>Account Information</h3>
              <p>Your primary account details.</p>
            </div>

            <button
              className="account-text-button"
              onClick={() => setActiveSection("personal")}
            >
              Edit
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="account-info-grid">
            <InfoItem icon={User} label="Full Name" value={profile.name} />

            <InfoItem
              icon={AtSign}
              label="Username"
              value={`@${profile.username}`}
            />

            <InfoItem icon={Mail} label="Email Address" value={profile.email} />

            <InfoItem
              icon={ShieldCheck}
              label="Account Status"
              value="Active"
            />
          </div>
        </div>

        {/* Plan */}
        <div className="account-plan-card">
          <div className="account-plan-left">
            <div className="account-plan-icon">
              <Crown size={19} />
            </div>

            <div>
              <span>CURRENT PLAN</span>
              <h3>Free Plan</h3>
              <p>Perfect for getting started with MySocials.</p>
            </div>
          </div>

          <button
            className="account-upgrade-button"
            onClick={() => setActiveSection("plan")}
          >
            Upgrade Plan
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );

  const renderPersonal = () => (
    <div className="account-content-panel">
      <SectionHeader
        eyebrow="PROFILE"
        title="Personal Information"
        description="Update your personal information and profile details."
      />

      <div className="account-content-body">
        {/* Profile Picture */}
        <div className="account-picture-section">
          <div className="account-large-avatar">
            <span>RM</span>
          </div>

          <div className="account-picture-details">
            <h3>Profile Picture</h3>
            <p>This image will be displayed on your profile and dashboard.</p>

            <div className="account-picture-actions">
              <button className="account-secondary-button">
                <Camera size={15} />
                Change Photo
              </button>

              <span>JPG, PNG or WEBP • Max 2MB</span>
            </div>
          </div>
        </div>

        <div className="account-divider" />

        {/* Form */}
        <div className="account-form-grid">
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
            placeholder="Enter email address"
          />

          <InputField
            label="Phone Number"
            name="phone"
            value={profile.phone}
            onChange={handleProfileChange}
            placeholder="Enter phone number"
          />
        </div>

        <div className="account-field account-full-field">
          <label htmlFor="account-bio">Bio</label>

          <textarea
            id="account-bio"
            name="bio"
            value={profile.bio}
            onChange={handleProfileChange}
            rows={5}
            placeholder="Tell us about yourself..."
          />
        </div>

        <div className="account-form-actions">
          <button className="account-primary-button" onClick={handleSave}>
            {saved ? <CheckCircle2 size={16} /> : <Save size={16} />}
            {saved ? "Changes Saved" : "Save Changes"}
          </button>
        </div>

        {/* Email Verification */}
        <div className="verification-card">
          <div className="verification-icon">
            <Mail size={17} />
          </div>

          <div className="verification-content">
            <div>
              <h3>Email Address</h3>
              <p>{profile.email}</p>
            </div>

            <span className="verified-status">
              <CheckCircle2 size={13} />
              Verified
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPlan = () => (
    <div className="account-content-panel">
      <SectionHeader
        eyebrow="SUBSCRIPTION"
        title="Plan & Billing"
        description="Manage your current plan and subscription preferences."
      />

      <div className="account-content-body">
        {/* Current Plan */}
        <div className="current-plan-card">
          <div className="current-plan-header">
            <div className="current-plan-title">
              <div className="current-plan-icon">
                <Crown size={20} />
              </div>

              <div>
                <span>CURRENT PLAN</span>
                <h3>Free</h3>
              </div>
            </div>

            <span className="plan-status">
              <span />
              Active
            </span>
          </div>

          <div className="plan-price">
            <strong>₹0</strong>
            <span>/ month</span>
          </div>

          <p className="plan-description">
            Get started with essential tools for managing your social media
            presence.
          </p>

          <div className="plan-features">
            <div>
              <CheckCircle2 size={15} />
              <span>5 social accounts</span>
            </div>

            <div>
              <CheckCircle2 size={15} />
              <span>50 scheduled posts</span>
            </div>

            <div>
              <CheckCircle2 size={15} />
              <span>Basic analytics</span>
            </div>

            <div>
              <CheckCircle2 size={15} />
              <span>5 GB storage</span>
            </div>
          </div>

          <button className="account-upgrade-large">
            <Crown size={16} />
            Upgrade to Pro
          </button>
        </div>

        {/* Usage */}
        <div className="account-usage-section">
          <div className="account-subsection-heading">
            <div>
              <h3>Plan Usage</h3>
              <p>Track your current resource usage.</p>
            </div>
          </div>

          <div className="usage-list">
            <div className="usage-item">
              <div className="usage-header">
                <span>Connected Accounts</span>
                <strong>4 / 5</strong>
              </div>

              <div className="usage-bar">
                <span style={{ width: "80%" }} />
              </div>
            </div>

            <div className="usage-item">
              <div className="usage-header">
                <span>Scheduled Posts</span>
                <strong>32 / 50</strong>
              </div>

              <div className="usage-bar">
                <span style={{ width: "64%" }} />
              </div>
            </div>

            <div className="usage-item">
              <div className="usage-header">
                <span>Storage</span>
                <strong>1.8 GB / 5 GB</strong>
              </div>

              <div className="usage-bar">
                <span style={{ width: "36%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Billing */}
        <div className="billing-card">
          <div className="billing-icon">
            <CreditCard size={18} />
          </div>

          <div>
            <h3>Billing Information</h3>
            <p>
              You are currently using the Free plan. No payment method is
              required.
            </p>
          </div>

          <ChevronRight size={17} />
        </div>
      </div>
    </div>
  );

  const renderActivity = () => (
    <div className="account-content-panel">
      <SectionHeader
        eyebrow="ACTIVITY"
        title="Account Activity"
        description="Review your account usage and recent activity."
      />

      <div className="account-content-body">
        <div className="activity-summary-grid">
          <AccountStat
            icon={FileText}
            label="Posts Published"
            value="128"
            description="All time"
          />

          <AccountStat
            icon={CalendarDays}
            label="Posts Scheduled"
            value="32"
            description="Currently scheduled"
          />

          <AccountStat
            icon={Users}
            label="Accounts"
            value="4"
            description="Connected platforms"
          />
        </div>

        <div className="account-subsection activity-section">
          <div className="account-subsection-heading">
            <div>
              <h3>Recent Activity</h3>
              <p>Your latest account actions.</p>
            </div>
          </div>

          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-item-icon">
                <FileText size={15} />
              </div>

              <div>
                <h4>New post published</h4>
                <p>Your Instagram post was successfully published.</p>
              </div>

              <span>2 hours ago</span>
            </div>

            <div className="activity-item">
              <div className="activity-item-icon">
                <Link2Icon />
              </div>

              <div>
                <h4>Facebook account connected</h4>
                <p>A new social account was connected to MySocials.</p>
              </div>

              <span>Yesterday</span>
            </div>

            <div className="activity-item">
              <div className="activity-item-icon">
                <Settings2 size={15} />
              </div>

              <div>
                <h4>Profile updated</h4>
                <p>Your account profile information was updated.</p>
              </div>

              <span>3 days ago</span>
            </div>

            <div className="activity-item">
              <div className="activity-item-icon">
                <ShieldCheck size={15} />
              </div>

              <div>
                <h4>Security check completed</h4>
                <p>Your account security status was checked.</p>
              </div>

              <span>5 days ago</span>
            </div>
          </div>
        </div>

        <div className="activity-export-card">
          <div className="activity-export-icon">
            <Download size={18} />
          </div>

          <div>
            <h3>Download Account Data</h3>
            <p>Export your account activity and data for your records.</p>
          </div>

          <button className="account-secondary-button">
            <Download size={15} />
            Export Data
          </button>
        </div>

        <div className="account-danger-zone">
          <div className="danger-zone-title">
            <div className="danger-zone-icon">
              <AlertTriangle size={17} />
            </div>

            <div>
              <h3>Danger Zone</h3>
              <p>Permanent account actions.</p>
            </div>
          </div>

          <div className="logout-delete-row">
            <div>
              <h4>Sign out of all devices</h4>
              <p>
                Sign out from all devices currently connected to your account.
              </p>
            </div>

            <button className="logout-button">
              <LogOut size={15} />
              Sign Out
            </button>
          </div>

          <div className="logout-delete-row delete-row">
            <div>
              <h4>Delete account</h4>
              <p>Permanently delete your account and all associated data.</p>
            </div>

            <button className="account-delete-button">
              <Trash2 size={15} />
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return renderOverview();

      case "personal":
        return renderPersonal();

      case "plan":
        return renderPlan();

      case "activity":
        return renderActivity();

      default:
        return renderOverview();
    }
  };

  return (
    <div className="account-page">
      <div className="account-bg-glow account-glow-one" />
      <div className="account-bg-glow account-glow-two" />

      <div className="account-container">
        {/* Header */}
        <header className="account-page-header">
          <div>
            <div className="account-heading-label">
              <span className="account-heading-dot" />
              Account Management
            </div>

            <h1>Account</h1>

            <p>Manage your account information, plan and activity.</p>
          </div>

          <button
            className="account-header-button"
            onClick={() => setActiveSection("personal")}
          >
            <Edit3 size={16} />
            Edit Account
          </button>
        </header>

        {/* Layout */}
        <div className="account-layout">
          {/* Sidebar */}
          <aside className="account-sidebar">
            <div className="account-sidebar-title">
              <span>ACCOUNT</span>
            </div>

            <nav>
              {accountMenu.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    className={`account-nav-item ${isActive ? "active" : ""}`}
                    onClick={() => setActiveSection(item.id)}
                  >
                    <span className="account-nav-icon">
                      <Icon size={16} />
                    </span>

                    <span className="account-nav-text">
                      <strong>{item.label}</strong>
                      <small>{item.description}</small>
                    </span>

                    <ChevronRight className="account-nav-arrow" size={14} />
                  </button>
                );
              })}
            </nav>

            <div className="account-sidebar-footer">
              <div className="account-mini-avatar">RM</div>

              <div>
                <strong>{profile.name}</strong>
                <span>Free Account</span>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="account-main">{renderContent()}</main>
        </div>
      </div>
    </div>
  );
}

/* Small helper so the activity item doesn't depend
   on another social icon library. */
function Link2Icon() {
  return <Link2 size={15} />;
}
