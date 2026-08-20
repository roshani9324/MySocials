import { useEffect, useRef, useState } from "react";
import {
  User,
  Settings,
  CreditCard,
  CircleHelp,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./UserMenu.css";

function UserMenu({
  name = "Roshani Maurya",
  workspace = "Personal workspace",
  initials = "RM",
}) {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  const handleNavigation = (path) => {
    closeMenu();
    navigate(path);
  };

  const handleLogout = () => {
    closeMenu();

    /*
      IMPORTANT:
      Existing authentication logic ko yahan connect karna hai.

      Agar localStorage/sessionStorage mein auth data
      stored hai, wahi clear karna.

      Example:

      localStorage.removeItem("token");
      localStorage.removeItem("user");
    */

    navigate("/login");
  };

  return (
    <div className="user-menu-wrapper" ref={menuRef}>
      <button
        type="button"
        className={`user-menu-trigger ${
          open ? "user-menu-trigger-active" : ""
        }`}
        onClick={() => setOpen((current) => !current)}
        aria-label="Open profile menu"
        aria-expanded={open}
      >
        <span className="user-menu-avatar">{initials}</span>

        <span className="user-menu-user-info">
          <strong>{name}</strong>
          <small>{workspace}</small>
        </span>

        <ChevronDown
          size={15}
          className={`user-menu-chevron ${open ? "rotate" : ""}`}
        />
      </button>

      {open && (
        <div className="user-menu-dropdown">
          {/* User identity */}

          <div className="user-menu-profile">
            <div className="user-menu-large-avatar">{initials}</div>

            <div>
              <strong>{name}</strong>
              <span>{workspace}</span>
            </div>
          </div>

          <div className="user-menu-divider" />

          {/* Profile */}

          <button
            type="button"
            className="user-menu-item"
            onClick={() => handleNavigation("/accounts")}
          >
            <span className="user-menu-item-icon">
              <User size={16} />
            </span>

            <span>
              <strong>Profile</strong>
              <small>Manage your profile</small>
            </span>
          </button>

          {/* Settings */}

          <button
            type="button"
            className="user-menu-item"
            onClick={() => handleNavigation("/settings")}
          >
            <span className="user-menu-item-icon">
              <Settings size={16} />
            </span>

            <span>
              <strong>Settings</strong>
              <small>Workspace preferences</small>
            </span>
          </button>

          {/* Billing */}

          <button
            type="button"
            className="user-menu-item"
            onClick={() => handleNavigation("/settings?tab=billing")}
          >
            <span className="user-menu-item-icon">
              <CreditCard size={16} />
            </span>

            <span>
              <strong>Billing</strong>
              <small>Plan & subscription</small>
            </span>
          </button>

          {/* Help */}

          <button
            type="button"
            className="user-menu-item"
            onClick={() => handleNavigation("/help")}
          >
            <span className="user-menu-item-icon">
              <CircleHelp size={16} />
            </span>

            <span>
              <strong>Help</strong>
              <small>Get help with Socials</small>
            </span>
          </button>

          <div className="user-menu-divider" />

          {/* Logout */}

          <button
            type="button"
            className="user-menu-item user-menu-logout"
            onClick={handleLogout}
          >
            <span className="user-menu-item-icon">
              <LogOut size={16} />
            </span>

            <span>
              <strong>Logout</strong>
              <small>Sign out of your account</small>
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
