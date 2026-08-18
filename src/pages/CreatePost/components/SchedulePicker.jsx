import { useState } from "react";
import { CalendarDays, Clock3, Globe2, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function SchedulePicker() {
  const [mode, setMode] = useState("now");

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        rounded-2xl
        border border-white/[0.08]
        bg-white/[0.025]
        p-5
      "
    >
      {/* Header */}
      <div className="mb-5">
        <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-400/70">
          Publishing
        </p>

        <h2 className="text-base font-medium text-white mt-1">
          Schedule your post
        </h2>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Publish Now */}
        <button
          type="button"
          onClick={() => setMode("now")}
          className={`
            relative
            flex items-start gap-3
            p-4
            rounded-xl
            border
            text-left
            transition
            ${
              mode === "now"
                ? "border-emerald-400/30 bg-emerald-400/[0.06]"
                : "border-white/[0.07] bg-white/[0.015] hover:bg-white/[0.03]"
            }
          `}
        >
          <div
            className={`
              w-9 h-9
              rounded-lg
              flex items-center justify-center
              ${
                mode === "now"
                  ? "bg-emerald-400/10 text-emerald-400"
                  : "bg-white/[0.04] text-white/30"
              }
            `}
          >
            <Clock3 size={17} />
          </div>

          <div>
            <p className="text-xs font-medium text-white/80">Publish now</p>

            <p className="text-[10px] text-white/30 mt-1">
              Publish immediately
            </p>
          </div>

          {mode === "now" && (
            <div className="absolute top-3 right-3 text-emerald-400">
              <Check size={15} />
            </div>
          )}
        </button>

        {/* Schedule */}
        <button
          type="button"
          onClick={() => setMode("schedule")}
          className={`
            relative
            flex items-start gap-3
            p-4
            rounded-xl
            border
            text-left
            transition
            ${
              mode === "schedule"
                ? "border-emerald-400/30 bg-emerald-400/[0.06]"
                : "border-white/[0.07] bg-white/[0.015] hover:bg-white/[0.03]"
            }
          `}
        >
          <div
            className={`
              w-9 h-9
              rounded-lg
              flex items-center justify-center
              ${
                mode === "schedule"
                  ? "bg-emerald-400/10 text-emerald-400"
                  : "bg-white/[0.04] text-white/30"
              }
            `}
          >
            <CalendarDays size={17} />
          </div>

          <div>
            <p className="text-xs font-medium text-white/80">
              Schedule for later
            </p>

            <p className="text-[10px] text-white/30 mt-1">
              Choose a date and time
            </p>
          </div>

          {mode === "schedule" && (
            <div className="absolute top-3 right-3 text-emerald-400">
              <Check size={15} />
            </div>
          )}
        </button>
      </div>

      {/* Schedule Fields */}
      {mode === "schedule" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
        >
          {/* Date */}
          <div>
            <label className="block text-[10px] uppercase tracking-wider text-white/30 mb-2">
              Date
            </label>

            <div className="relative">
              <CalendarDays
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25"
              />

              <input
                type="date"
                defaultValue="2026-08-18"
                className="
                  w-full
                  rounded-xl
                  border border-white/[0.08]
                  bg-black/20
                  px-10
                  py-3
                  text-xs
                  text-white/70
                  outline-none
                  focus:border-emerald-400/30
                "
              />
            </div>
          </div>

          {/* Time */}
          <div>
            <label className="block text-[10px] uppercase tracking-wider text-white/30 mb-2">
              Time
            </label>

            <div className="relative">
              <Clock3
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25"
              />

              <input
                type="time"
                defaultValue="10:00"
                className="
                  w-full
                  rounded-xl
                  border border-white/[0.08]
                  bg-black/20
                  px-10
                  py-3
                  text-xs
                  text-white/70
                  outline-none
                  focus:border-emerald-400/30
                "
              />
            </div>
          </div>

          {/* Timezone */}
          <div className="sm:col-span-2 flex items-center gap-2">
            <Globe2 size={14} className="text-white/25" />

            <span className="text-[10px] text-white/30">
              Timezone: Asia/Kolkata (IST)
            </span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
