import { motion } from "framer-motion";
import { ArrowLeft, Save, Send, Sparkles } from "lucide-react";

import PostEditor from "./components/PostEditor";
import PlatformSelector from "./components/PlatformSelector";
import PostPreview from "./components/PostPreview";
import SchedulePicker from "./components/SchedulePicker";

export default function CreatePost() {
  return (
    <div className="min-h-screen bg-[#050908] text-white px-4 sm:px-6 lg:px-8 py-6">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] rounded-full bg-emerald-400/[0.06] blur-[140px]" />
        <div className="absolute bottom-[-200px] left-[20%] w-[450px] h-[450px] rounded-full bg-emerald-500/[0.04] blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7"
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.history.back()}
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white/[0.07] transition"
            >
              <ArrowLeft size={18} />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-semibold">
                  Create Post
                </h1>

                <Sparkles size={18} className="text-emerald-400" />
              </div>

              <p className="text-sm text-gray-500 mt-1">
                Create, customize and schedule your social media content.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="
                flex items-center gap-2
                px-4 py-2.5
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                text-sm text-gray-300
                hover:bg-white/[0.07]
                transition
              "
            >
              <Save size={16} />
              Save Draft
            </button>

            <button
              className="
                flex items-center gap-2
                px-5 py-2.5
                rounded-xl
                bg-emerald-400
                text-black
                text-sm font-semibold
                hover:bg-emerald-300
                transition
                shadow-[0_0_25px_rgba(72,255,174,0.15)]
              "
            >
              <Send size={16} />
              Publish
            </button>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_430px] gap-6">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {/* Platform */}
            <PlatformSelector />

            {/* Editor */}
            <PostEditor />

            {/* Schedule */}
            <SchedulePicker />
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="xl:sticky xl:top-6 h-fit"
          >
            <PostPreview />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
