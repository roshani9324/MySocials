import { Eye, Heart, Users, FileText, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Reach",
    value: "128.4K",
    change: "+12.8%",
    icon: Eye,
    type: "reach",
  },
  {
    title: "Engagement",
    value: "24.6K",
    change: "+18.2%",
    icon: Heart,
    type: "engagement",
  },
  {
    title: "Followers",
    value: "18.9K",
    change: "+8.4%",
    icon: Users,
    type: "followers",
  },
  {
    title: "Total Posts",
    value: "248",
    change: "+14.5%",
    icon: FileText,
    type: "posts",
  },
];

export default function AnalyticsStats() {
  return (
    <div className="analytics-stats-grid">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div key={stat.title} className={`analytics-stat-card ${stat.type}`}>
            <div className="analytics-stat-top">
              <div className="analytics-stat-info">
                <p>{stat.title}</p>

                <h3>{stat.value}</h3>
              </div>

              <div className="analytics-stat-icon">
                <Icon size={20} strokeWidth={1.8} />
              </div>
            </div>

            <div className="analytics-stat-change">
              <TrendingUp size={14} strokeWidth={2} />

              <span>{stat.change}</span>

              <small>vs last period</small>
            </div>
          </div>
        );
      })}
    </div>
  );
}
