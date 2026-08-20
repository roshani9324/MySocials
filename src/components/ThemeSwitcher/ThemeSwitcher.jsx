import { useState } from "react";
import { Palette, Check, ChevronDown } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import "./ThemeSwitcher.css";

function ThemeSwitcher() {
  const { theme, themes, changeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const activeTheme = themes.find((item) => item.id === theme);

  const handleThemeChange = (themeId) => {
    changeTheme(themeId);
    setIsOpen(false);
  };

  return (
    <div className="theme-picker">
      <button
        type="button"
        className="theme-picker-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Change theme"
        aria-expanded={isOpen}
      >
        <Palette size={18} />

        <span className="theme-picker-trigger-name">
          {activeTheme?.name || "Theme"}
        </span>

        <ChevronDown
          size={16}
          className={`theme-picker-chevron ${isOpen ? "open" : ""}`}
        />
      </button>

      {isOpen && (
        <>
          <div className="theme-picker-backdrop" onClick={() => setIsOpen(false)} />

          <div className="theme-picker-menu">
            <div className="theme-picker-menu-header">
              <div>
                <h3>Choose Theme</h3>
                <p>Select your dashboard appearance</p>
              </div>
            </div>

            <div className="theme-picker-grid">
              {themes.map((item) => {
                const isActive = theme === item.id;

                return (
                  <button
                    type="button"
                    key={item.id}
                    className={`theme-picker-card ${isActive ? "active" : ""}`}
                    onClick={() => handleThemeChange(item.id)}
                  >
                    <div className="theme-picker-preview">
                      {item.colors.map((color, index) => (
                        <span
                          key={`${item.id}-${index}`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>

                    <div className="theme-picker-card-info">
                      <span className="theme-picker-name">{item.name}</span>

                      {isActive && (
                        <span className="theme-picker-check">
                          <Check size={13} />
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ThemeSwitcher;
