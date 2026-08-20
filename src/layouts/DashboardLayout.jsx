import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  PlusSquare,
  CalendarDays,
  FileText,
  BarChart3,
  CircleHelp,
  Users,
  Settings,
  Menu,
  X,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  Sparkles,
  Clock3,
} from "lucide-react";
import { useState } from "react";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import { useEffect, useRef } from "react";
import NotificationDropdown from "../components/Notifications/NotificationDropdown";
import UserMenu from "../components/UserMenu/UserMenu";

const navigation = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Create Post",
    path: "/create-post",
    icon: PlusSquare,
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: CalendarDays,
  },
  {
    name: "Content",
    path: "/content",
    icon: FileText,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    name: "History",
    path: "/history",
    icon: Clock3,
  },
  {
    name: "Accounts",
    path: "/accounts",
    icon: Users,
  },
];

export default function DashboardLayout() {
const [notificationsOpen, setNotificationsOpen] =
  useState(false);

const notificationRef = useRef(null);

useEffect(() => {
  const handleOutsideClick = (event) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setNotificationsOpen(false);
    }
  };

  document.addEventListener(
    "mousedown",
    handleOutsideClick
  );

  return () => {
    document.removeEventListener(
      "mousedown",
      handleOutsideClick
    );
  };
}, []);




  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isSettingsActive = location.pathname === "/settings";

  return (
    <div className="app-shell">
      {/* =========================
          BACKGROUND EFFECTS
      ========================= */}

      <div className="grid-background" />

      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      {/* =========================
          MOBILE OVERLAY
      ========================= */}

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* =========================
          SIDEBAR
      ========================= */}

      <aside
        className={`
          sidebar
          ${collapsed ? "sidebar-collapsed" : ""}
          ${mobileOpen ? "mobile-sidebar-open" : ""}
        `}
      >
        {/* Logo */}

        <div className="sidebar-logo">
          <NavLink
            to="/dashboard"
            className="flex items-center gap-2"
            onClick={() => setMobileOpen(false)}
          >
            <div className="logo-box">M</div>

            {!collapsed && <span>MySocials</span>}
          </NavLink>

          {/* Mobile Close */}

          <button
            onClick={() => setMobileOpen(false)}
            className="mobile-close-button"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Workspace */}

        {!collapsed && (
          <div className="workspace">
            <p>MY WORKSPACE</p>

            <span>Personal Workspace</span>
          </div>
        )}

        {/* Navigation */}

        <nav className="sidebar-nav">
          {!collapsed && <p className="nav-label">WORKSPACE</p>}

          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""} ${
                    collapsed ? "collapsed-link" : ""
                  }`
                }
                title={collapsed ? item.name : undefined}
              >
                <Icon size={17} strokeWidth={1.8} />

                {!collapsed && <span>{item.name}</span>}
              </NavLink>
            );
          })}

          {/* Account section */}

          {!collapsed && <p className="nav-label account-label">ACCOUNT</p>}
          <NavLink to="/help" className="sidebar-link">
            <CircleHelp size={18} />
            <span>Help</span>
          </NavLink>
          <NavLink
            to="/settings"
            onClick={() => setMobileOpen(false)}
            className={`sidebar-link ${
              isSettingsActive ? "active" : ""
            } ${collapsed ? "collapsed-link" : ""}`}
            title={collapsed ? "Settings" : undefined}
          >
            <Settings size={17} strokeWidth={1.8} />

            {!collapsed && <span>Settings</span>}
          </NavLink>
        </nav>

        {/* =========================
            SIDEBAR BOTTOM
        ========================= */}

        <div className="sidebar-bottom">
          {/* Upgrade */}

          {!collapsed && (
            <div className="upgrade-box">
              <div className="flex items-center gap-2">
                <div className="upgrade-icon">
                  <Sparkles size={13} />
                </div>

                <p>Upgrade your workspace</p>
              </div>

              <span>
                Unlock more features and grow your social presence faster.
              </span>

              <button onClick={() => navigate("/settings")}>
                View plans →
              </button>
            </div>
          )}

          {/* User */}

          <div className="user-box">
            <div className="user-avatar">RM</div>

            {!collapsed && (
              <div>
                <strong>Roshani Maurya</strong>
                <span>Personal workspace</span>
              </div>
            )}
          </div>

          {/* Logout */}

          <button
            className={`
              sidebar-link logout-button
              ${collapsed ? "collapsed-link" : ""}
            `}
            title={collapsed ? "Logout" : undefined}
            onClick={() => {
              // Add logout logic here later
            }}
          >
            <LogOut size={17} strokeWidth={1.8} />

            {!collapsed && <span>Logout</span>}
          </button>
        </div>

        {/* Collapse */}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="collapse-button"
          aria-label="Toggle sidebar"
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </aside>

      {/* =========================
          MAIN AREA
      ========================= */}

      <div
        className={`
          dashboard-area
          ${collapsed ? "dashboard-area-collapsed" : ""}
        `}
      >
        {/* =========================
            HEADER
        ========================= */}

        <header className="dashboard-header">
          {/* Mobile */}

          <div className="mobile-header-left">
            <button
              onClick={() => setMobileOpen(true)}
              className="mobile-menu-button"
              aria-label="Open menu"
            >
              <Menu size={21} />
            </button>

            <div className="mobile-brand">
              <div className="logo-box">M</div>

              <span>MySocials</span>
            </div>
          </div>

          {/* Search */}

          <div className="search-box">
            <Search size={14} />

            <input type="text" placeholder="Search anything..." />

            <kbd>⌘ K</kbd>
          </div>

          {/* Header Actions */}

          <div className="header-actions">
            <button className="notification-btn" aria-label="Notifications">
              <div
                className="notification-trigger-wrapper"
                ref={notificationRef}
              >
                <button
                  type="button"
                  className="header-icon-button"
                  onClick={() => setNotificationsOpen((current) => !current)}
                  aria-label="Notifications"
                  aria-expanded={notificationsOpen}
                >
                  <Bell size={19} />

                  <span className="notification-header-dot" />
                </button>

                {notificationsOpen && (
                  <NotificationDropdown
                    onClose={() => setNotificationsOpen(false)}
                  />
                )}
              </div>

              <span className="notification-dot" />
            </button>

            <div className="header-actions">
              <ThemeSwitcher />

              {/* Existing notification/profile buttons */}
            </div>
            <button
              className="header-create"
              onClick={() => navigate("/create-post")}
            >
              <PlusSquare size={14} />

              <span>Create Post</span>
            </button>

            <UserMenu
              name="Roshani Maurya"
              workspace="Personal workspace"
              initials="RM"
            />
          </div>
        </header>

        {/* =========================
            PAGE CONTENT
        ========================= */}

        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
