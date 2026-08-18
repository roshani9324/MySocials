import { motion } from "framer-motion";
import { BarChart3, ChevronDown } from "lucide-react";

const chartData = [35, 48, 42, 60, 53, 68, 58, 76, 67, 84, 73, 91];

const months = [
  "Jul 20",
  "Jul 23",
  "Jul 26",
  "Jul 29",
  "Aug 1",
  "Aug 4",
  "Aug 7",
  "Aug 10",
  "Aug 13",
];

export default function PerformanceChart() {
  return (
    <motion.div
      className="performance-card"
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
    >
      <div className="card-header">
        <div>
          <span className="section-label">PERFORMANCE</span>

          <h3>Audience growth</h3>
        </div>

        <button className="chart-filter">
          Reach
          <ChevronDown size={13} />
        </button>
      </div>

      <div className="chart-summary">
        <strong>48.7K</strong>

        <span>+18.4%</span>
      </div>

      <div className="chart-area">
        <div className="chart-y-axis">
          <span>50K</span>
          <span>40K</span>
          <span>30K</span>
          <span>20K</span>
          <span>10K</span>
          <span>0</span>
        </div>

        <div className="chart">
          <div className="chart-lines">
            {[0, 1, 2, 3, 4].map((line) => (
              <span key={line} />
            ))}
          </div>

          <div className="chart-bars">
            {chartData.map((height, index) => (
              <motion.div
                key={index}
                className="chart-bar"
                initial={{
                  height: 0,
                }}
                animate={{
                  height: `${height}%`,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          <div className="chart-labels">
            {months.map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
