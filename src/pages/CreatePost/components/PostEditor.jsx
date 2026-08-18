import { useState } from "react";
import {
  Image as ImageIcon,
  Video,
  Smile,
  Hash,
  AtSign,
  Link,
  WandSparkles,
} from "lucide-react";

export default function PostEditor() {
  const [content, setContent] = useState(
    "Excited to share what's coming next! 🚀\n\nStay tuned for something special.",
  );

  const [media, setMedia] = useState(null);

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0a100e]/80 backdrop-blur-xl overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">Post content</p>

          <p className="text-xs text-gray-500 mt-1">
            Write something engaging for your audience.
          </p>
        </div>

        <button
          className="
            flex items-center gap-2
            text-xs
            text-emerald-400
            hover:text-emerald-300
          "
        >
          <WandSparkles size={14} />
          AI Assist
        </button>
      </div>

      {/* Text Area */}
      <div className="p-5">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What would you like to share?"
          className="
            w-full
            min-h-[220px]
            resize-none
            bg-transparent
            outline-none
            text-[15px]
            leading-7
            text-gray-200
            placeholder:text-gray-600
          "
        />

        {/* Media Preview */}
        {media && (
          <div className="relative mt-3 rounded-xl overflow-hidden border border-white/10">
            <img
              src={media}
              alt="Uploaded"
              className="w-full max-h-[280px] object-cover"
            />

            <button
              onClick={() => setMedia(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white"
            >
              ×
            </button>
          </div>
        )}

        {/* Toolbar */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1">
            <button className="editor-tool">
              <ImageIcon size={17} />
            </button>

            <button className="editor-tool">
              <Video size={17} />
            </button>

            <button className="editor-tool">
              <Smile size={17} />
            </button>

            <button className="editor-tool">
              <Hash size={17} />
            </button>

            <button className="editor-tool">
              <AtSign size={17} />
            </button>

            <button className="editor-tool">
              <Link size={17} />
            </button>
          </div>

          <span className="text-xs text-gray-600">{content.length}/280</span>
        </div>
      </div>

      <style>{`
        .editor-tool {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          transition: all .2s;
        }

        .editor-tool:hover {
          color: #6ee7b7;
          background: rgba(110,231,183,.08);
        }
      `}</style>
    </div>
  );
}
