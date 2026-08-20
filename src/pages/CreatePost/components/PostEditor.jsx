import { useRef, useState } from "react";
import { Image, Video, Smile, Hash, Sparkles, X, Upload } from "lucide-react";
import { motion } from "framer-motion";

const MAX_CHARACTERS = 2200;

export default function PostEditor({
  postContent = "",
  setPostContent,
  onAIAssist,
}) {
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  const fileInputRef = useRef(null);

  /*
   * ---------------------------------------------------------
   * CONTENT
   * ---------------------------------------------------------
   */

  const caption = postContent;

  const updateCaption = (value) => {
    const limitedValue = value.slice(0, MAX_CHARACTERS);

    if (setPostContent) {
      setPostContent(limitedValue);
    }
  };

  /*
   * ---------------------------------------------------------
   * MEDIA
   * ---------------------------------------------------------
   */

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const type = file.type.startsWith("video") ? "video" : "image";

    /*
     * Remove previous object URL before replacing media.
     */
    if (media?.url) {
      URL.revokeObjectURL(media.url);
    }

    setMedia({
      url: URL.createObjectURL(file),
      name: file.name,
    });

    setMediaType(type);
  };

  const removeMedia = () => {
    if (media?.url) {
      URL.revokeObjectURL(media.url);
    }

    setMedia(null);
    setMediaType(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  /*
   * ---------------------------------------------------------
   * QUICK TEXT
   * ---------------------------------------------------------
   */

  const addText = (text) => {
    updateCaption(`${caption}${text}`);
  };

  /*
   * ---------------------------------------------------------
   * AI SUGGESTION
   * ---------------------------------------------------------
   */

  const handleAISuggest = () => {
    /*
     * If CreatePost passes an AI handler,
     * open the real AI Assist component.
     *
     * Otherwise keep a small fallback suggestion.
     */
    if (onAIAssist) {
      onAIAssist();
      return;
    }

    updateCaption(
      "Excited to share something new with you! 🚀 Stay tuned for more updates. #socialmedia #contentcreator",
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        rounded-2xl
        border border-white/[0.08]
        bg-white/[0.025]
        overflow-hidden
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="px-5 py-4 border-b border-white/[0.06]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-400/70">
          Content
        </p>

        <h2 className="text-base font-medium text-white mt-1">
          Create your post
        </h2>
      </div>

      {/* =====================================================
          BODY
      ====================================================== */}

      <div className="p-5">
        {/* ===================================================
            CAPTION
        ==================================================== */}

        <div
          className="
            relative
            rounded-xl
            border border-white/[0.08]
            bg-black/20
            focus-within:border-emerald-400/30
            transition
          "
        >
          <textarea
            value={caption}
            onChange={(event) => updateCaption(event.target.value)}
            placeholder="What's on your mind?"
            maxLength={MAX_CHARACTERS}
            className="
              w-full
              min-h-[190px]
              resize-none
              bg-transparent
              px-4
              pt-4
              pb-12
              outline-none
              text-sm
              leading-6
              text-white/80
              placeholder:text-white/20
            "
          />

          <span
            className="
              absolute
              bottom-3
              right-4
              text-[10px]
              text-white/20
            "
          >
            {caption.length}/{MAX_CHARACTERS}
          </span>
        </div>

        {/* ===================================================
            TOOLBAR
        ==================================================== */}

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-between
            gap-3
            mt-3
          "
        >
          {/* Left actions */}

          <div className="flex items-center gap-1">
            {/* Image */}

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="editor-button"
              title="Add image"
              aria-label="Add image"
            >
              <Image size={17} />
            </button>

            {/* Video */}

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="editor-button"
              title="Add video"
              aria-label="Add video"
            >
              <Video size={17} />
            </button>

            {/* Emoji */}

            <button
              type="button"
              onClick={() => addText(" 😊")}
              className="editor-button"
              title="Add emoji"
              aria-label="Add emoji"
            >
              <Smile size={17} />
            </button>

            {/* Hashtag */}

            <button
              type="button"
              onClick={() => addText(" #")}
              className="editor-button"
              title="Add hashtag"
              aria-label="Add hashtag"
            >
              <Hash size={17} />
            </button>
          </div>

          {/* AI */}

          <button
            type="button"
            onClick={handleAISuggest}
            className="
              flex
              items-center
              justify-center
              gap-2
              px-3
              py-2
              rounded-lg
              border
              border-emerald-400/10
              bg-emerald-400/[0.06]
              text-[11px]
              font-medium
              text-emerald-400
              hover:bg-emerald-400/[0.1]
              transition
              whitespace-nowrap
            "
          >
            <Sparkles size={14} />
            AI Suggest
          </button>
        </div>

        {/* ===================================================
            FILE INPUT
        ==================================================== */}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* ===================================================
            MEDIA PREVIEW
        ==================================================== */}

        {media ? (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="
              relative
              mt-4
              rounded-xl
              overflow-hidden
              border
              border-white/[0.08]
              bg-black
            "
          >
            {mediaType === "image" ? (
              <img
                src={media.url}
                alt="Selected media"
                className="
                  w-full
                  max-h-[350px]
                  object-contain
                "
              />
            ) : (
              <video
                src={media.url}
                controls
                className="
                  w-full
                  max-h-[350px]
                "
              />
            )}

            {/* Remove media */}

            <button
              type="button"
              onClick={removeMedia}
              className="
                absolute
                top-3
                right-3
                w-8
                h-8
                rounded-full
                bg-black/70
                border
                border-white/10
                flex
                items-center
                justify-center
                text-white/70
                hover:text-red-400
                transition
              "
              aria-label="Remove media"
            >
              <X size={15} />
            </button>
          </motion.div>
        ) : (
          /* =================================================
             UPLOAD AREA
          ================================================== */

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="
              group
              w-full
              mt-4
              rounded-xl
              border
              border-dashed
              border-white/[0.09]
              bg-white/[0.015]
              py-7
              px-4
              flex
              flex-col
              items-center
              justify-center
              hover:border-emerald-400/30
              hover:bg-emerald-400/[0.02]
              transition
            "
          >
            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-white/[0.04]
                border
                border-white/[0.06]
                flex
                items-center
                justify-center
                text-white/30
                group-hover:text-emerald-400
                transition
              "
            >
              <Upload size={18} />
            </div>

            <p className="text-xs text-white/50 mt-3">Add photos or videos</p>

            <p className="text-[10px] text-white/20 mt-1 text-center">
              PNG, JPG, MP4 up to 50MB
            </p>
          </button>
        )}
      </div>
    </motion.div>
  );
}
