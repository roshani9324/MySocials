import { motion } from "framer-motion";

export default function StatsCards({ stats }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className="
              group
              relative
              rounded-2xl
              border border-white/[0.08]
              bg-white/[0.025]
              p-5
              overflow-hidden
              hover:border-emerald-400/20
              transition
            "
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-400/[0.04] blur-2xl" />

            <div className="relative">
              <div className="flex justify-between items-start">
                <div
                  className="
                    w-9 h-9
                    rounded-lg
                    bg-emerald-400/10
                    border border-emerald-400/10
                    flex items-center justify-center
                    text-emerald-400
                  "
                >
                  <Icon size={17} />
                </div>

                <span className="text-[10px] text-emerald-400">
                  ↗ {stat.change}
                </span>
              </div>

              <p className="text-[10px] text-white/30 mt-5">{stat.title}</p>

              <h3 className="text-2xl font-semibold mt-1 tracking-tight">
                {stat.value}
              </h3>

              <p className="text-[9px] text-white/20 mt-2">
                vs. previous 30 days
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
