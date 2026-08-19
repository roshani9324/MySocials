import { useState } from "react";
import { ChevronDown, BarChart3 } from "lucide-react";

import AnalyticsStats from "./components/AnalyticsStats";
import EngagementChart from "./components/EngagementChart";
import PlatformPerformance from "./components/PlatformPerformance";

import "./Analytics.css";

export default function Analytics() {
  const [range, setRange] = useState("30 Days");

  return (
    <div className="analytics-page">
      <div className="analytics-glow analytics-glow-one" />
      <div className="analytics-glow analytics-glow-two" />

      <div className="analytics-container">
        {/* HEADER */}
        <header className="analytics-header">
          <div className="analytics-heading">
            <div className="analytics-heading-icon">
              <BarChart3 size={21} strokeWidth={1.8} />
            </div>

            <div>
              <h1>Analytics</h1>

              <p>Track your social media performance and growth.</p>
            </div>
          </div>

          {/* RANGE SELECTOR */}
          <div className="analytics-range-wrapper">
            <select
              value={range}
              onChange={(e) => setRange(e.target.value)}
              className="analytics-range-select"
            >
              <option>7 Days</option>
              <option>30 Days</option>
              <option>90 Days</option>
              <option>1 Year</option>
            </select>

            <ChevronDown size={15} className="analytics-range-chevron" />
          </div>
        </header>

        {/* STATS */}
        <section className="analytics-stats-section">
          <AnalyticsStats />
        </section>

        {/* ENGAGEMENT */}
        <section className="analytics-chart-section">
          <EngagementChart range={range} />
        </section>

        {/* PLATFORM PERFORMANCE */}
        <section className="analytics-platform-section">
          <PlatformPerformance />
        </section>
      </div>
    </div>
  );
}
