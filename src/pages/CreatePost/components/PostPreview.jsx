import {
  Instagram,
  MoreHorizontal,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
} from "lucide-react";

export default function PostPreview() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0a100e]/80 backdrop-blur-xl overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-white/10">
        <p className="text-sm font-semibold">Post Preview</p>

        <p className="text-xs text-gray-500 mt-1">
          Preview how your post will appear.
        </p>
      </div>

      {/* Preview */}
      <div className="p-5">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#080c0b]">
          {/* Profile */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-300 to-emerald-600 flex items-center justify-center text-black font-semibold">
                R
              </div>

              <div>
                <p className="text-xs font-semibold">Roshani</p>

                <p className="text-[10px] text-gray-500">@roshani</p>
              </div>
            </div>

            <MoreHorizontal size={17} className="text-gray-500" />
          </div>

          {/* Image */}
          <div
            className="
            aspect-square
            bg-gradient-to-br
            from-emerald-950
            via-[#0c211b]
            to-black
            relative
            overflow-hidden
          "
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="
                w-36
                h-36
                rounded-full
                bg-emerald-400/10
                blur-2xl
              "
              />

              <div
                className="
                absolute
                w-24
                h-24
                rounded-3xl
                border
                border-emerald-400/20
                rotate-12
              "
              />

              <Instagram size={48} className="text-emerald-300 relative" />
            </div>

            <div
              className="
              absolute
              inset-x-5
              bottom-5
              p-4
              rounded-xl
              bg-black/40
              backdrop-blur-md
              border border-white/10
            "
            >
              <p className="text-sm font-semibold">
                Something special is coming.
              </p>

              <p className="text-xs text-gray-400 mt-1">Stay tuned 🚀</p>
            </div>
          </div>

          {/* Actions */}
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Heart size={19} />

                <MessageCircle size={19} />

                <Send size={19} />
              </div>

              <Bookmark size={19} />
            </div>

            <p className="text-xs font-semibold mt-4">248 likes</p>

            <p className="text-xs text-gray-300 mt-2 leading-5">
              Excited to share what's coming next! 🚀
            </p>

            <p className="text-[10px] text-gray-600 mt-3">Just now</p>
          </div>
        </div>

        {/* Preview Platforms */}
        <div className="mt-5">
          <p className="text-xs text-gray-500 mb-3">Previewing for</p>

          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center">
              <Instagram size={16} className="text-emerald-400" />
            </div>

            <span className="text-xs text-gray-400">Instagram</span>
          </div>
        </div>
      </div>
    </div>
  );
}
