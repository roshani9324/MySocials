import { useState } from "react";
import { CalendarDays, Clock3, ChevronDown } from "lucide-react";

export default function SchedulePicker() {
  const [mode, setMode] = useState("now");

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0a100e]/80 backdrop-blur-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-sm font-semibold">Publishing</p>

          <p className="text-xs text-gray-500 mt-1">
            Choose when your post should go live.
          </p>
        </div>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          onClick={() => setMode("now")}
          className={`
            p-4 rounded-xl border text-left transition
            ${
              mode === "now"
                ? "border-emerald-400/50 bg-emerald-400/[0.07]"
                : "border-white/10 bg-white/[0.02]"
            }
          `}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center">
              <Clock3 size={17} className="text-emerald-400" />
            </div>

            <div>
              <p className="text-sm font-medium">Publish now</p>

              <p className="text-xs text-gray-500 mt-1">Post immediately</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => setMode("schedule")}
          className={`
            p-4 rounded-xl border text-left transition
            ${
              mode === "schedule"
                ? "border-emerald-400/50 bg-emerald-400/[0.07]"
                : "border-white/10 bg-white/[0.02]"
            }
          `}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center">
              <CalendarDays size={17} className="text-emerald-400" />
            </div>

            <div>
              <p className="text-sm font-medium">Schedule</p>

              <p className="text-xs text-gray-500 mt-1">Choose date and time</p>
            </div>
          </div>
        </button>
      </div>

      {/* Date & Time */}
      {mode === "schedule" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          <div>
            <label className="text-xs text-gray-500 block mb-2">Date</label>

            <div className="relative">
              <CalendarDays
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="date"
                defaultValue="2026-08-18"
                className="
                  w-full
                  bg-white/[0.03]
                  border border-white/10
                  rounded-xl
                  px-10 py-3
                  text-sm
                  text-gray-300
                  outline-none
                  focus:border-emerald-400/40
                "
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-500 block mb-2">Time</label>

            <div className="relative">
              <Clock3
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="time"
                defaultValue="10:00"
                className="
                  w-full
                  bg-white/[0.03]
                  border border-white/10
                  rounded-xl
                  px-10 py-3
                  text-sm
                  text-gray-300
                  outline-none
                  focus:border-emerald-400/40
                "
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
