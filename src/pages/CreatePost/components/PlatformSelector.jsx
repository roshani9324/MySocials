import { Check, ChevronDown } from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./PlatformSelector.css";
const platforms = [
  {
    name: "Instagram",
    username: "@roshani",
    icon: FaInstagram,
    iconClass: "platform-instagram",
  },
  {
    name: "YouTube",
    username: "@roshani",
    icon: FaYoutube,
    iconClass: "platform-youtube",
  },
  {
    name: "X",
    username: "@roshani",
    icon: FaXTwitter,
    iconClass: "platform-x",
  },
  {
    name: "Facebook",
    username: "Roshani Maurya",
    icon: FaFacebook,
    iconClass: "platform-facebook",
  },
  {
    name: "LinkedIn",
    username: "Roshani Maurya",
    icon: FaLinkedin,
    iconClass: "platform-linkedin",
  },
  {
    name: "Threads",
    username: "@roshani",
    icon: FaInstagram,
    iconClass: "platform-threads",
  },
];

export default function PlatformSelector({
  selectedPlatforms = [],
  setSelectedPlatforms,
}) {
  /*
   * Keep compatibility if this component is ever used
   * without the parent state.
   */
  const selected = Array.isArray(selectedPlatforms) ? selectedPlatforms : [];

  const togglePlatform = (name) => {
    if (!setSelectedPlatforms) return;

    setSelectedPlatforms((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name],
    );
  };

  const toggleAllPlatforms = () => {
    if (!setSelectedPlatforms) return;

    const allPlatformNames = platforms.map((platform) => platform.name);

    const allSelected = allPlatformNames.every((name) =>
      selected.includes(name),
    );

    setSelectedPlatforms(allSelected ? [] : allPlatformNames);
  };

  const allSelected =
    platforms.length > 0 &&
    platforms.every((platform) => selected.includes(platform.name));

  return (
    <div className="platform-selector">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="platform-selector-header">
        <div>
          <p className="platform-selector-eyebrow">Platforms</p>

          <h2 className="platform-selector-title">Publish to</h2>
        </div>

        <button
          type="button"
          onClick={toggleAllPlatforms}
          className="platform-select-all"
        >
          {allSelected ? "Deselect all" : "Select all"}

          <ChevronDown size={13} />
        </button>
      </div>

      {/* =====================================================
          PLATFORM GRID
      ====================================================== */}

      <div className="platform-grid">
        {platforms.map((platform) => {
          const Icon = platform.icon;

          const isSelected = selected.includes(platform.name);

          return (
            <button
              key={platform.name}
              type="button"
              onClick={() => togglePlatform(platform.name)}
              aria-pressed={isSelected}
              className={`platform-item ${isSelected ? "selected" : ""}`}
            >
              {/* =================================================
                  ICON
              ================================================== */}

              <div
                className={`platform-icon ${platform.iconClass} ${
                  isSelected ? "active" : ""
                }`}
              >
                <Icon size={19} />
              </div>

              {/* =================================================
                  PLATFORM INFO
              ================================================== */}

              <div className="platform-info">
                <p className="platform-name">{platform.name}</p>

                <p className="platform-username">{platform.username}</p>
              </div>

              {/* =================================================
                  CHECK
              ================================================== */}

              <div className={`platform-check ${isSelected ? "checked" : ""}`}>
                {isSelected && <Check size={10} strokeWidth={3} />}
              </div>
            </button>
          );
        })}
      </div>

      {/* =====================================================
          SELECTED COUNT
      ====================================================== */}

      <div className="platform-selector-footer">
        <span>Select one or more platforms to publish your content.</span>

        {selected.length > 0 && <strong>{selected.length}/6 selected</strong>}
      </div>
    </div>
  );
}
