import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const platforms = [
  {
    name: "Instagram",
    username: "@roshani",
    icon: FaInstagram,
  },
  {
    name: "YouTube",
    username: "@roshani",
    icon: FaYoutube,
  },
  {
    name: "LinkedIn",
    username: "Roshani Maurya",
    icon: FaLinkedin,
  },
];

export default function PlatformSelector() {
  const [selected, setSelected] = useState(["Instagram"]);

  const togglePlatform = (name) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name],
    );
  };

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-400/70">
            Platforms
          </p>

          <h2 className="text-base font-medium text-white mt-1">Publish to</h2>
        </div>

        <button className="flex items-center gap-1 text-[11px] text-white/30 hover:text-white/60 transition">
          Select all
          <ChevronDown size={13} />
        </button>
      </div>

      {/* Platforms */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          const isSelected = selected.includes(platform.name);

          return (
            <button
              key={platform.name}
              type="button"
              onClick={() => togglePlatform(platform.name)}
              className={`
                relative
                flex items-center gap-3
                rounded-xl
                border
                p-3
                text-left
                transition-all
                ${
                  isSelected
                    ? "border-emerald-400/30 bg-emerald-400/[0.07]"
                    : "border-white/[0.07] bg-white/[0.015] hover:bg-white/[0.04]"
                }
              `}
            >
              {/* Icon */}
              <div
                className={`
                  w-10 h-10
                  shrink-0
                  rounded-xl
                  flex items-center justify-center
                  ${
                    isSelected
                      ? "bg-emerald-400/10 text-emerald-400"
                      : "bg-white/[0.04] text-white/40"
                  }
                `}
              >
                <Icon size={19} />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <p className="text-xs font-medium text-white/80">
                  {platform.name}
                </p>

                <p className="text-[10px] text-white/30 mt-1 truncate">
                  {platform.username}
                </p>
              </div>

              {/* Check */}
              <div
                className={`
                  absolute
                  top-3
                  right-3
                  w-4
                  h-4
                  rounded-full
                  flex items-center justify-center
                  ${
                    isSelected
                      ? "bg-emerald-400 text-black"
                      : "border border-white/10"
                  }
                `}
              >
                {isSelected && <Check size={10} strokeWidth={3} />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Info */}
      <p className="text-[10px] text-white/20 mt-4">
        Select one or more platforms to publish your content.
      </p>
    </div>
  );
}
