import { motion } from "framer-motion";
import { Plus, CheckCircle2 } from "lucide-react";

export default function ConnectedAccounts({ accounts }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 }}
      className="
        rounded-2xl
        border border-white/[0.08]
        bg-white/[0.025]
        p-5
      "
    >
      <div className="flex justify-between items-start mb-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            Social Channels
          </p>

          <h2 className="text-lg font-medium mt-2">Connected accounts</h2>
        </div>

        <button
          className="
            flex items-center gap-1
            px-2.5 py-1.5
            rounded-lg
            border border-emerald-400/20
            bg-emerald-400/[0.06]
            text-[10px]
            text-emerald-400
          "
        >
          <Plus size={12} />
          Connect
        </button>
      </div>

      <div className="space-y-2">
        {accounts.map((account) => {
          const Icon = account.icon;

          return (
            <div
              key={account.name}
              className="
                flex items-center gap-3
                p-3
                rounded-xl
                border border-white/[0.05]
                bg-white/[0.015]
              "
            >
              <div
                className="
                  w-9 h-9
                  rounded-lg
                  bg-white/[0.04]
                  flex items-center justify-center
                  text-white/70
                "
              >
                <Icon size={18} />
              </div>

              <div className="flex-1">
                <p className="text-xs font-medium text-white/75">
                  {account.name}
                </p>

                <p className="text-[9px] text-white/25 mt-1">
                  {account.username}
                </p>
              </div>

              <div className="text-right">
                <p className="text-[10px] text-white/50">{account.followers}</p>

                <CheckCircle2
                  size={11}
                  className="text-emerald-400 ml-auto mt-1"
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
