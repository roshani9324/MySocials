import { motion } from "framer-motion";

export default function StatsCards({ stats }) {
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
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
              transition
            "
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/[0.04] blur-3xl" />

            <div className="relative">
              <div className="flex justify-between items-start">
                <div
                  className="
                    w-10 h-10
                    rounded-xl
                    bg-emerald-400/[0.07]
                    border border-emerald-400/[0.11]
                    flex items-center justify-center
                    text-emerald-400
                  "
                >
                  <Icon size={18} strokeWidth={1.8} />
                </div>

                <span className="text-[9px] font-semibold text-emerald-400">
                  ↗ {stat.change}
                </span>
              </div>

              <p className="text-[9px] text-white/35 mt-6">{stat.title}</p>

              <h3 className="text-[25px] font-semibold mt-1 tracking-tight text-white/90">
                {stat.value}
              </h3>

              <p className="text-[8px] text-white/20 mt-2">
                vs. previous 30 days
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
