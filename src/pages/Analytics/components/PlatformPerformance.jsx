import { ArrowUpRight, BarChart3 } from "lucide-react";

import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";

const platforms = [
  {
    name: "Instagram",
    icon: FaInstagram,
    followers: "12.8K",
    engagement: "8.4%",
    posts: 86,
    className: "instagram",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    followers: "4.2K",
    engagement: "6.8%",
    posts: 64,
    className: "facebook",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    followers: "1.9K",
    engagement: "9.2%",
    posts: 52,
    className: "linkedin",
  },
];

export default function PlatformPerformance() {
  return (
    <div className="analytics-panel platform-panel">
      {/* HEADER */}
      <div className="platform-header">
        <div>
          <div className="analytics-section-title">
            <div className="analytics-section-icon">
              <BarChart3 size={16} />
            </div>

            <h2>Platform Performance</h2>
          </div>

          <p>Compare your performance across social platforms.</p>
        </div>
      </div>

      {/* PLATFORM CARDS */}
      <div className="platform-grid">
        {platforms.map((platform) => {
          const Icon = platform.icon;

          return (
            <div
              key={platform.name}
              className={`platform-card ${platform.className}`}
            >
              <div className="platform-card-top">
                <div className="platform-identity">
                  <div className="platform-icon">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3>{platform.name}</h3>

                    <p>{platform.posts} posts</p>
                  </div>
                </div>

                <div className="platform-arrow">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <div className="platform-metrics">
                <div className="platform-metric">
                  <span>Followers</span>

                  <strong>{platform.followers}</strong>
                </div>

                <div className="platform-metric">
                  <span>Engagement</span>

                  <strong>{platform.engagement}</strong>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
