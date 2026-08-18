import { motion } from "framer-motion";
import { MoreHorizontal, CalendarDays } from "lucide-react";

export default function UpcomingPosts({ posts }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        rounded-2xl
        border border-white/[0.08]
        bg-white/[0.025]
        p-5
      "
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            Content
          </p>

          <h2 className="text-lg font-medium mt-2">Upcoming posts</h2>
        </div>

        <button className="text-[11px] text-emerald-400">View all</button>
      </div>

      <div className="space-y-1">
        {posts.map((post, index) => {
          const Icon = post.icon;

          return (
            <div
              key={index}
              className="
                flex items-center gap-3
                p-3
                rounded-xl
                hover:bg-white/[0.03]
                transition
              "
            >
              <div
                className="
                  w-9 h-9
                  rounded-lg
                  bg-white/[0.04]
                  border border-white/[0.07]
                  flex items-center justify-center
                  text-white/70
                "
              >
                <Icon size={17} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs text-white/75 truncate">{post.title}</p>

                <p className="text-[9px] text-white/25 mt-1">{post.platform}</p>
              </div>

              <div className="text-right">
                <p className="text-[9px] text-white/40">{post.time}</p>

                <div className="flex items-center justify-end gap-1 mt-1">
                  <CalendarDays size={10} className="text-emerald-400/60" />
                  <span className="text-[8px] text-emerald-400/60">
                    Scheduled
                  </span>
                </div>
              </div>

              <MoreHorizontal size={15} className="text-white/20" />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
