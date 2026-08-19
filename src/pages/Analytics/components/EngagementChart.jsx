import { Activity, TrendingUp } from "lucide-react";

const engagementData = [42, 55, 48, 72, 64, 82, 68, 91, 76, 88, 95, 84];

const followerData = [35, 42, 38, 48, 44, 56, 52, 62, 58, 72, 68, 82];

export default function EngagementChart() {
  return (
    <div className="analytics-chart-grid">
      {/* ENGAGEMENT OVERVIEW */}
      <div className="analytics-panel engagement-panel">
        <div className="analytics-panel-header">
          <div>
            <div className="analytics-section-title">
              <div className="analytics-section-icon">
                <Activity size={16} />
              </div>

              <h2>Engagement Overview</h2>
            </div>

            <p>Track how your audience interacts with your content.</p>
          </div>

          <div className="analytics-chart-legend">
            <span />
            Engagement
          </div>
        </div>

        <div className="engagement-chart">
          {/* Y AXIS */}
          <div className="chart-y-axis">
            <span>100K</span>
            <span>75K</span>
            <span>50K</span>
            <span>25K</span>
            <span>0</span>
          </div>

          {/* CHART AREA */}
          <div className="chart-area">
            <div className="chart-grid-lines">
              {[1, 2, 3, 4, 5].map((line) => (
                <div key={line} />
              ))}
            </div>

            <div className="chart-bars">
              {engagementData.map((height, index) => (
                <div key={index} className="chart-bar-wrapper">
                  <div
                    className="chart-bar"
                    style={{
                      height: `${height}%`,
                    }}
                  >
                    <span>{height}K</span>
                  </div>
                </div>
              ))}
            </div>

            {/* X AXIS */}
            <div className="chart-x-axis">
              <span>1 Aug</span>
              <span>5 Aug</span>
              <span>10 Aug</span>
              <span>15 Aug</span>
              <span>20 Aug</span>
              <span>25 Aug</span>
              <span>30 Aug</span>
            </div>
          </div>
        </div>
      </div>

      {/* FOLLOWER GROWTH */}
      <div className="analytics-panel follower-panel">
        <div className="analytics-section-title">
          <div className="analytics-section-icon">
            <TrendingUp size={16} />
          </div>

          <h2>Follower Growth</h2>
        </div>

        <p className="analytics-panel-description">
          Growth across all platforms.
        </p>

        <div className="follower-total">
          <strong>18,942</strong>

          <span>+8.4% this month</span>
        </div>

        <div className="follower-chart">
          {followerData.map((height, index) => (
            <div
              key={index}
              className="follower-bar"
              style={{
                height: `${height}%`,
              }}
            />
          ))}
        </div>

        <div className="follower-axis">
          <span>Week 1</span>
          <span>Week 2</span>
          <span>Week 3</span>
          <span>Week 4</span>
        </div>
      </div>
    </div>
  );
}
