import { motion } from "framer-motion";
import { MoreHorizontal } from "lucide-react";

export default function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="
        rounded-2xl
        border border-white/[0.08]
        bg-white/[0.025]
        p-5
      "
    >
      <div className="flex justify-between items-center mb-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            Activity
          </p>

          <h2 className="text-lg font-medium mt-2">Recent activity</h2>
        </div>

        <MoreHorizontal size={18} className="text-white/30" />
      </div>

      <div className="space-y-4">
        <Activity
          title="New post published"
          description="Your Instagram post is now live."
          time="10 min ago"
        />

        <Activity
          title="Engagement increased"
          description="Instagram engagement is up 12.5%."
          time="1 hour ago"
        />

        <Activity
          title="Post scheduled"
          description="Product update scheduled for tomorrow."
          time="3 hours ago"
        />

        <Activity
          title="Account connected"
          description="LinkedIn account connected successfully."
          time="Yesterday"
        />
      </div>
    </motion.div>
  );
}

function Activity({ title, description, time }) {
  return (
    <div className="flex gap-3">
      <div
        className="
          w-2 h-2
          mt-2
          rounded-full
          bg-emerald-400
          shadow-[0_0_10px_rgba(72,255,174,0.7)]
          shrink-0
        "
      />

      <div className="flex-1">
        <div className="flex justify-between gap-3">
          <p className="text-xs font-medium text-white/75">{title}</p>

          <span className="text-[9px] text-white/20 whitespace-nowrap">
            {time}
          </span>
        </div>

        <p className="text-[10px] text-white/30 mt-1">{description}</p>
      </div>
    </div>
  );
}
