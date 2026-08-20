import React, { useMemo, useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaReddit,
} from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import {
  Search,
  Filter,
  CalendarDays,
  MoreHorizontal,
  Eye,
  ExternalLink,
  CheckCircle2,
  XCircle,
  Clock3,
  FileText,
  ChevronDown,
} from "lucide-react";
import "./History.css";

const historyData = [
  {
    id: 1,
    title: "Summer campaign is live! ☀️",
    description:
      "A fresh look at our latest campaign and everything we have been working on.",
    platform: "Instagram",
    status: "Published",
    date: "19 Aug 2026",
    time: "10:30 AM",
    type: "Image",
  },
  {
    id: 2,
    title: "New product announcement",
    description:
      "We are excited to share our latest product updates with our community.",
    platform: "Facebook",
    status: "Published",
    date: "18 Aug 2026",
    time: "04:15 PM",
    type: "Image",
  },
  {
    id: 3,
    title: "How our platform works",
    description:
      "A quick look at how Socials helps you manage your social media content.",
    platform: "YouTube",
    status: "Published",
    date: "17 Aug 2026",
    time: "01:00 PM",
    type: "Video",
  },
  {
    id: 4,
    title: "Building a stronger digital presence",
    description:
      "Tips and ideas for creating a consistent social media presence.",
    platform: "LinkedIn",
    status: "Failed",
    date: "16 Aug 2026",
    time: "11:45 AM",
    type: "Text",
  },
  {
    id: 5,
    title: "Weekly community update",
    description: "Here is everything happening in our community this week.",
    platform: "X",
    status: "Scheduled",
    date: "20 Aug 2026",
    time: "09:00 AM",
    type: "Text",
  },
  {
    id: 6,
    title: "Behind the scenes",
    description:
      "A small behind-the-scenes look at our team and creative process.",
    platform: "Threads",
    status: "Published",
    date: "15 Aug 2026",
    time: "06:30 PM",
    type: "Image",
  },
  {
    id: 7,
    title: "Social media tips for creators",
    description: "Five simple ideas to make your social media workflow easier.",
    platform: "Reddit",
    status: "Published",
    date: "14 Aug 2026",
    time: "03:20 PM",
    type: "Text",
  },
];

const platformConfig = {
  Instagram: {
    icon: FaInstagram,
    className: "instagram",
  },
  Facebook: {
    icon: FaFacebook,
    className: "facebook",
  },
  YouTube: {
    icon: FaYoutube,
    className: "youtube",
  },
  LinkedIn: {
    icon: FaLinkedin,
    className: "linkedin",
  },
  X: {
    icon: FaXTwitter,
    className: "x-twitter",
  },
  Threads: {
    icon: FaThreads,
    className: "threads",
  },
  Reddit: {
    icon: FaReddit,
    className: "reddit",
  },
};

const statusConfig = {
  Published: {
    icon: CheckCircle2,
    className: "published",
  },
  Failed: {
    icon: XCircle,
    className: "failed",
  },
  Scheduled: {
    icon: Clock3,
    className: "scheduled",
  },
  Draft: {
    icon: FileText,
    className: "draft",
  },
};

function PlatformIcon({ platform }) {
  const config = platformConfig[platform];

  if (!config) {
    return <FileText size={18} />;
  }

  const Icon = config.icon;

  return <Icon className={`history-platform-icon ${config.className}`} />;
}

function StatusBadge({ status }) {
  const config = statusConfig[status] || statusConfig.Draft;
  const Icon = config.icon;

  return (
    <span className={`history-status ${config.className}`}>
      <Icon size={14} />
      {status}
    </span>
  );
}

function History() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [platformFilter, setPlatformFilter] = useState("All Platforms");

  const filteredHistory = useMemo(() => {
    return historyData.filter((post) => {
      const matchesStatus =
        activeFilter === "All" || post.status === activeFilter;

      const matchesPlatform =
        platformFilter === "All Platforms" || post.platform === platformFilter;

      const search = searchTerm.trim().toLowerCase();

      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search) ||
        post.description.toLowerCase().includes(search) ||
        post.platform.toLowerCase().includes(search);

      return matchesStatus && matchesPlatform && matchesSearch;
    });
  }, [activeFilter, searchTerm, platformFilter]);

  const statusFilters = [
    { label: "All", count: historyData.length },
    {
      label: "Published",
      count: historyData.filter((post) => post.status === "Published").length,
    },
    {
      label: "Scheduled",
      count: historyData.filter((post) => post.status === "Scheduled").length,
    },
    {
      label: "Failed",
      count: historyData.filter((post) => post.status === "Failed").length,
    },
    {
      label: "Draft",
      count: historyData.filter((post) => post.status === "Draft").length,
    },
  ];

  return (
    <div className="history-page">
      <div className="history-container">
        {/* Header */}
        <header className="history-header">
          <div className="history-heading">
            <div className="history-title-row">
              <div className="history-title-icon">
                <Clock3 size={22} />
              </div>

              <div>
                <h1>History</h1>
                <p>View and manage your previous social media activity.</p>
              </div>
            </div>
          </div>

          <div className="history-header-actions">
            <div className="history-search">
              <Search size={17} />
              <input
                type="text"
                placeholder="Search history..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button className="history-filter-button">
              <Filter size={17} />
              Filter
            </button>
          </div>
        </header>

        {/* Stats */}
        <section className="history-stats">
          <div className="history-stat-card">
            <div className="history-stat-icon total">
              <FileText size={19} />
            </div>

            <div>
              <span>Total Posts</span>
              <strong>{historyData.length}</strong>
            </div>
          </div>

          <div className="history-stat-card">
            <div className="history-stat-icon success">
              <CheckCircle2 size={19} />
            </div>

            <div>
              <span>Published</span>
              <strong>
                {
                  historyData.filter((post) => post.status === "Published")
                    .length
                }
              </strong>
            </div>
          </div>

          <div className="history-stat-card">
            <div className="history-stat-icon pending">
              <Clock3 size={19} />
            </div>

            <div>
              <span>Scheduled</span>
              <strong>
                {
                  historyData.filter((post) => post.status === "Scheduled")
                    .length
                }
              </strong>
            </div>
          </div>

          <div className="history-stat-card">
            <div className="history-stat-icon error">
              <XCircle size={19} />
            </div>

            <div>
              <span>Failed</span>
              <strong>
                {historyData.filter((post) => post.status === "Failed").length}
              </strong>
            </div>
          </div>
        </section>

        {/* History Card */}
        <section className="history-content-card">
          <div className="history-card-header">
            <div>
              <h2>Post History</h2>
              <p>Keep track of your published, scheduled and failed posts.</p>
            </div>

            <div className="history-platform-select">
              <CalendarDays size={16} />

              <select
                value={platformFilter}
                onChange={(e) => setPlatformFilter(e.target.value)}
              >
                <option>All Platforms</option>
                <option>Instagram</option>
                <option>Facebook</option>
                <option>YouTube</option>
                <option>LinkedIn</option>
                <option>X</option>
                <option>Threads</option>
                <option>Reddit</option>
              </select>

              <ChevronDown size={15} className="select-arrow" />
            </div>
          </div>

          {/* Tabs */}
          <div className="history-tabs">
            {statusFilters.map((filter) => (
              <button
                key={filter.label}
                className={
                  activeFilter === filter.label
                    ? "history-tab active"
                    : "history-tab"
                }
                onClick={() => setActiveFilter(filter.label)}
              >
                {filter.label}
                <span>{filter.count}</span>
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="history-table-wrapper">
            <table className="history-table">
              <thead>
                <tr>
                  <th>POST</th>
                  <th>PLATFORM</th>
                  <th>STATUS</th>
                  <th>DATE</th>
                  <th>TYPE</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {filteredHistory.map((post) => (
                  <tr key={post.id}>
                    <td>
                      <div className="history-post-cell">
                        <div className="history-post-preview">
                          <FileText size={19} />
                        </div>

                        <div className="history-post-info">
                          <h3>{post.title}</h3>
                          <p>{post.description}</p>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="history-platform">
                        <div className="history-platform-circle">
                          <PlatformIcon platform={post.platform} />
                        </div>

                        <span>{post.platform}</span>
                      </div>
                    </td>

                    <td>
                      <StatusBadge status={post.status} />
                    </td>

                    <td>
                      <div className="history-date">
                        <strong>{post.date}</strong>
                        <span>{post.time}</span>
                      </div>
                    </td>

                    <td>
                      <span className="history-type">{post.type}</span>
                    </td>

                    <td>
                      <div className="history-row-actions">
                        <button
                          type="button"
                          title="View post"
                          className="history-action-button"
                        >
                          <Eye size={17} />
                        </button>

                        <button
                          type="button"
                          title="Open"
                          className="history-action-button"
                        >
                          <ExternalLink size={16} />
                        </button>

                        <button
                          type="button"
                          title="More options"
                          className="history-action-button"
                        >
                          <MoreHorizontal size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredHistory.length === 0 && (
              <div className="history-empty-state">
                <div className="history-empty-icon">
                  <Search size={23} />
                </div>

                <h3>No history found</h3>

                <p>We couldn't find any posts matching your current filters.</p>

                <button
                  onClick={() => {
                    setSearchTerm("");
                    setPlatformFilter("All Platforms");
                    setActiveFilter("All");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          {filteredHistory.length > 0 && (
            <div className="history-card-footer">
              <span>
                Showing <strong>{filteredHistory.length}</strong> of{" "}
                <strong>{historyData.length}</strong> posts
              </span>

              <div className="history-pagination">
                <button disabled>Previous</button>
                <button className="active-page">1</button>
                <button disabled>Next</button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default History;
