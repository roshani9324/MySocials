import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const previews = {
  Instagram: {
    icon: FaInstagram,
    username: "@roshani",
    label: "Instagram",
  },
  YouTube: {
    icon: FaYoutube,
    username: "Roshani",
    label: "YouTube",
  },
  LinkedIn: {
    icon: FaLinkedin,
    username: "Roshani Maurya",
    label: "LinkedIn",
  },
};

export default function PostPreview() {
  const [platform, setPlatform] = useState("Instagram");

  const current = previews[platform];
  const PlatformIcon = current.icon;

  return (
    <div
      className="
        rounded-2xl
        border border-white/[0.08]
        bg-white/[0.025]
        overflow-hidden
      "
    >
      {/* Header */}
      <div className="p-5 border-b border-white/[0.06]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-400/70">
          Preview
        </p>

        <div className="flex items-center justify-between mt-1">
          <h2 className="text-base font-medium">Your post</h2>

          <div className="flex items-center gap-1">
            {Object.keys(previews).map((item) => {
              const Icon = previews[item].icon;

              return (
                <button
                  key={item}
                  onClick={() => setPlatform(item)}
                  className={`
                    w-8 h-8
                    rounded-lg
                    flex items-center justify-center
                    transition
                    ${
                      platform === item
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "text-white/25 hover:text-white/60"
                    }
                  `}
                  title={item}
                >
                  <Icon size={15} />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="p-5">
        <motion.div
          key={platform}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            rounded-2xl
            border border-white/[0.08]
            bg-[#090d0b]
            overflow-hidden
          "
        >
          {/* Account */}
          <div className="flex items-center gap-3 p-4">
            <div
              className="
                w-9 h-9
                rounded-full
                bg-emerald-400/10
                border border-emerald-400/20
                flex items-center justify-center
                text-emerald-400
              "
            >
              <PlatformIcon size={17} />
            </div>

            <div className="flex-1">
              <p className="text-xs font-medium text-white/80">
                {current.username}
              </p>

              <p className="text-[9px] text-white/25">{current.label}</p>
            </div>

            <MoreHorizontal size={17} className="text-white/30" />
          </div>

          {/* Media */}
          <div
            className="
              aspect-square
              bg-gradient-to-br
              from-emerald-400/[0.15]
              via-white/[0.03]
              to-black
              flex items-center justify-center
            "
          >
            <div className="text-center">
              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  bg-emerald-400/10
                  border border-emerald-400/10
                  flex items-center justify-center
                  mx-auto
                  text-emerald-400/50
                "
              >
                <PlatformIcon size={25} />
              </div>

              <p className="text-[10px] text-white/20 mt-3">Media preview</p>
            </div>
          </div>

          {/* Actions */}
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Heart size={18} className="text-white/60" />
                <MessageCircle size={18} className="text-white/60" />
                <Send size={18} className="text-white/60" />
              </div>

              <Bookmark size={18} className="text-white/60" />
            </div>

            <p className="text-[10px] font-medium text-white/50 mt-3">
              0 likes
            </p>

            <p className="text-[11px] text-white/60 mt-2 leading-5">
              Your caption will appear here...
            </p>

            <p className="text-[9px] text-white/20 mt-2">Just now</p>
          </div>
        </motion.div>
      </div>

      {/* Preview Info */}
      <div className="px-5 pb-5">
        <div className="rounded-xl bg-white/[0.025] border border-white/[0.05] p-3">
          <p className="text-[10px] text-white/30 leading-4">
            This is a preview of how your content may appear on{" "}
            <span className="text-emerald-400/70">{current.label}</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
