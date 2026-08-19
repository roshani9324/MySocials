import { useState } from "react";
import {
  User,
  Bell,
  Shield,
  Link2,
  Palette,
  Save,
  Camera,
  Mail,
  Lock,
  Check,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    id: "profile",
    label: "Profile",
    icon: User,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
  },
  {
    id: "connected",
    label: "Connected Accounts",
    icon: Link2,
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
  },
  {
    id: "appearance",
    label: "Appearance",
    icon: Palette,
  },
];

export default function Settings() {
  const [activeSection, setActiveSection] = useState("profile");

  const [profile, setProfile] = useState({
    name: "Roshani Maurya",
    email: "roshani@example.com",
    bio: "Social media creator and digital enthusiast.",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    scheduled: true,
    engagement: true,
    updates: false,
  });

  const [appearance, setAppearance] = useState("light");

  const handleProfileChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Settings
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage your account, preferences and connected services.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr]">
        {/* Settings Navigation */}
        <div className="h-fit rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          {sections.map((section) => {
            const Icon = section.icon;
            const active = activeSection === section.id;

            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`mb-1 flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} />
                  {section.label}
                </span>

                <ChevronRight
                  size={16}
                  className={active ? "opacity-100" : "opacity-0"}
                />
              </button>
            );
          })}
        </div>

        {/* Settings Content */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* PROFILE */}
          {activeSection === "profile" && (
            <div>
              <div className="border-b border-slate-100 p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  Profile Settings
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Update your personal information and profile details.
                </p>
              </div>

              <div className="space-y-7 p-6">
                {/* Profile Picture */}
                <div>
                  <label className="mb-3 block text-sm font-medium text-slate-700">
                    Profile Picture
                  </label>

                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-600">
                      RM
                    </div>

                    <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                      <Camera size={16} />
                      Change Photo
                    </button>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleProfileChange}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                      className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Bio
                  </label>

                  <textarea
                    name="bio"
                    value={profile.bio}
                    onChange={handleProfileChange}
                    rows="4"
                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
                  <Save size={17} />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS */}
          {activeSection === "notifications" && (
            <div>
              <div className="border-b border-slate-100 p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  Notification Settings
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Choose which notifications you want to receive.
                </p>
              </div>

              <div className="divide-y divide-slate-100">
                {[
                  {
                    key: "email",
                    title: "Email Notifications",
                    description:
                      "Receive important updates and account notifications.",
                  },
                  {
                    key: "scheduled",
                    title: "Scheduled Post Reminders",
                    description:
                      "Get notified before your scheduled posts are published.",
                  },
                  {
                    key: "engagement",
                    title: "Engagement Alerts",
                    description:
                      "Receive updates about likes, comments and interactions.",
                  },
                  {
                    key: "updates",
                    title: "Product Updates",
                    description:
                      "Receive information about new features and improvements.",
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between gap-4 p-6"
                  >
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {item.description}
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        setNotifications((prev) => ({
                          ...prev,
                          [item.key]: !prev[item.key],
                        }))
                      }
                      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                        notifications[item.key]
                          ? "bg-indigo-600"
                          : "bg-slate-200"
                      }`}
                    >
                      <span
                        className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                          notifications[item.key] ? "left-6" : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CONNECTED ACCOUNTS */}
          {activeSection === "connected" && (
            <div>
              <div className="border-b border-slate-100 p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  Connected Accounts
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Manage the social media accounts connected to your workspace.
                </p>
              </div>

              <div className="space-y-4 p-6">
                {[
                  {
                    name: "Instagram",
                    username: "@roshani",
                    connected: true,
                    icon: "IG",
                  },
                  {
                    name: "Facebook",
                    username: "Roshani Maurya",
                    connected: true,
                    icon: "f",
                  },
                  {
                    name: "LinkedIn",
                    username: "Roshani Maurya",
                    connected: false,
                    icon: "in",
                  },
                  {
                    name: "X",
                    username: "Not connected",
                    connected: false,
                    icon: "X",
                  },
                ].map((account) => (
                  <div
                    key={account.name}
                    className="flex flex-col gap-4 rounded-xl border border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-700">
                        {account.icon}
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {account.name}
                        </h3>

                        <p className="text-sm text-slate-500">
                          {account.username}
                        </p>
                      </div>
                    </div>

                    {account.connected ? (
                      <button className="flex items-center justify-center gap-2 rounded-xl border border-red-100 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50">
                        Disconnect
                      </button>
                    ) : (
                      <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
                        Connect
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECURITY */}
          {activeSection === "security" && (
            <div>
              <div className="border-b border-slate-100 p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  Security
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Manage your password and account security.
                </p>
              </div>

              <div className="space-y-6 p-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Current Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="password"
                      placeholder="Enter current password"
                      className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    New Password
                  </label>

                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Confirm New Password
                  </label>

                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
                  <Shield size={17} />
                  Update Password
                </button>
              </div>
            </div>
          )}

          {/* APPEARANCE */}
          {activeSection === "appearance" && (
            <div>
              <div className="border-b border-slate-100 p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  Appearance
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Customize how the dashboard looks.
                </p>
              </div>

              <div className="p-6">
                <h3 className="text-sm font-semibold text-slate-900">Theme</h3>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {[
                    {
                      id: "light",
                      title: "Light",
                      description: "Clean and bright",
                    },
                    {
                      id: "dark",
                      title: "Dark",
                      description: "Easy on the eyes",
                    },
                    {
                      id: "system",
                      title: "System",
                      description: "Follow device settings",
                    },
                  ].map((theme) => {
                    const selected = appearance === theme.id;

                    return (
                      <button
                        key={theme.id}
                        onClick={() => setAppearance(theme.id)}
                        className={`relative rounded-xl border p-4 text-left transition ${
                          selected
                            ? "border-indigo-500 bg-indigo-50"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {selected && (
                          <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white">
                            <Check size={12} />
                          </div>
                        )}

                        <div
                          className={`mb-4 h-20 rounded-lg border ${
                            theme.id === "dark"
                              ? "border-slate-700 bg-slate-900"
                              : "border-slate-200 bg-white"
                          }`}
                        />

                        <h4 className="text-sm font-semibold text-slate-900">
                          {theme.title}
                        </h4>

                        <p className="mt-1 text-xs text-slate-500">
                          {theme.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
