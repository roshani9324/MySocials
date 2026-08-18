import { useState } from "react";
import {
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
  AtSign,
  Check,
} from "lucide-react";

const platforms = [
  {
    id: "instagram",
    name: "Instagram",
    icon: Instagram,
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: Youtube,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: Linkedin,
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: Facebook,
  },
  {
    id: "threads",
    name: "Threads",
    icon: AtSign,
  },
];

export default function PlatformSelector() {
  const [selected, setSelected] = useState([
    "instagram",
    "linkedin",
  ]);

  const togglePlatform = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0a100e]/80 backdrop-blur-xl p-5">

      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-sm font-semibold text-white">
            Publish to
          </p>

          <p className="text-xs text-gray-500 mt-1">
            Select the social channels for this post.
          </p>
        </div>

        <span className="text-xs text-emerald-400">
          {selected.length} selected
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          const isSelected = selected.includes(platform.id);

          return (
            <button
              key={platform.id}
              onClick={() => togglePlatform(platform.id)}
              className={`
                relative
                flex flex-col
                items-center
                justify-center
                gap-2
                h-24
                rounded-xl
                border
                transition-all
                ${
                  isSelected
                    ? "border-emerald-400/50 bg-emerald-400/[0.08] text-emerald-300"
                    : "border-white/10 bg-white/[0.02] text-gray-500 hover:text-gray-300 hover:bg-white/[0.05]"
                }
              `}
            >
              {isSelected && (
                <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-emerald-400 text-black flex items-center justify-center">
                  <Check size={10} />
                </span>
              )}

              <div
                className={`
                  w-9 h-9 rounded-lg flex items-center justify-center
                  ${
                    isSelected
                      ? "bg-emerald-400/15"
                      : "bg-white/[0.04]"
                  }
                `}
              >
                <Icon size={19} />
              </div>

              <span className="text-xs">
                {platform.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}