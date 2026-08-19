import { useState } from "react";
import { ChevronDown } from "lucide-react";

import AnalyticsStats from "./components/AnalyticsStats";
import EngagementChart from "./components/EngagementChart";
import PlatformPerformance from "./components/PlatformPerformance";

export default function Analytics() {
  const [range, setRange] = useState("30 Days");

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Analytics
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Track your social media performance and growth.
          </p>
        </div>

        <div className="relative w-fit">
          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="appearance-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 pr-10 text-sm font-medium text-slate-700 shadow-sm outline-none transition focus:border-indigo-500"
          >
            <option>7 Days</option>
            <option>30 Days</option>
            <option>90 Days</option>
            <option>1 Year</option>
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
        </div>
      </div>

      {/* Stats */}
      <AnalyticsStats />

      {/* Charts */}
      <div className="mt-6">
        <EngagementChart range={range} />
      </div>

      {/* Platforms */}
      <div className="mt-6">
        <PlatformPerformance />
      </div>
    </div>
  );
}
