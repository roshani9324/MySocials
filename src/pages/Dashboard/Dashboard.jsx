import {
  Eye,
  Heart,
  Users,
  TrendingUp,
  Plus,
  CalendarDays,
  BarChart3,
  MoreHorizontal,
  ArrowUpRight,
} from "lucide-react";

import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";

import StatsCards from "./components/StatsCards";
import UpcomingPosts from "./components/UpcomingPosts";
import ConnectedAccounts from "./components/ConnectedAccounts";

import "./Dashboard.css";

const stats = [
  {
    title: "Total Reach",
    value: "48.7K",
    change: "+18.4%",
    icon: Eye,
  },
  {
    title: "Engagement",
    value: "12.8K",
    change: "+12.6%",
    icon: Heart,
  },
  {
    title: "Followers",
    value: "8,426",
    change: "+6.8%",
    icon: Users,
  },
  {
    title: "Engagement Rate",
    value: "7.42%",
    change: "+2.7%",
    icon: TrendingUp,
  },
];

const upcomingPosts = [
  {
    title: "New brand feature",
    platform: "Instagram",
    time: "Today · 10:00 AM",
    icon: FaInstagram,
  },
  {
    title: "Behind the scenes",
    platform: "YouTube",
    time: "Today · 4:00 PM",
    icon: FaYoutube,
  },
  {
    title: "Product update",
    platform: "LinkedIn",
    time: "Tomorrow · 11:30 AM",
    icon: FaLinkedin,
  },
  {
    title: "Weekly inspiration",
    platform: "Instagram",
    time: "Aug 18 · 8:00 PM",
    icon: FaInstagram,
  },
];

const accounts = [
  {
    name: "Instagram",
    username: "@roshani",
    followers: "4.2K",
    icon: FaInstagram,
  },
  {
    name: "YouTube",
    username: "@roshani",
    followers: "2.8K",
    icon: FaYoutube,
  },
  {
    name: "LinkedIn",
    username: "Roshani Maurya",
    followers: "1.4K",
    icon: FaLinkedin,
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      {/* BACKGROUND */}
      <div className="dashboard-background">
        <div className="dashboard-glow dashboard-glow-one" />
        <div className="dashboard-glow dashboard-glow-two" />

        <div className="dashboard-grid-pattern" />
      </div>

      <main className="dashboard-container">
        {/* =================================================
            HEADER
        ================================================= */}

        <header className="dashboard-header">
          <div className="dashboard-welcome">
            <p className="dashboard-date">Monday, August 17</p>

            <h1>
              Good morning, <span>Roshani</span>
            </h1>

            <p className="dashboard-description">
              Here's what's happening across your social channels.
            </p>
          </div>

          <div className="dashboard-header-actions">
            <select className="dashboard-date-filter" defaultValue="30">
              <option value="7">Last 7 days</option>

              <option value="30">Last 30 days</option>

              <option value="90">Last 90 days</option>
            </select>

            <button className="dashboard-create-button">
              <Plus size={17} />
              Create Post
            </button>
          </div>
        </header>

        {/* =================================================
            STATS
        ================================================= */}

        <section className="dashboard-stats-section">
          <StatsCards stats={stats} />
        </section>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <section className="dashboard-main-grid">
          <UpcomingPosts posts={upcomingPosts} />

          <ConnectedAccounts accounts={accounts} />

          <QuickActions />
        </section>

        {/* =================================================
            BOTTOM CONTENT
        ================================================= */}

        <section className="dashboard-bottom-grid">
          <PerformanceChart />

          <RecentActivity />
        </section>
      </main>
    </div>
  );
}

/* =========================================================
   QUICK ACTIONS
========================================================= */

function QuickActions() {
  const actions = [
    {
      title: "Create a post",
      description: "Share something new",
      icon: Plus,
    },
    {
      title: "Schedule content",
      description: "Plan your upcoming posts",
      icon: CalendarDays,
    },
    {
      title: "View analytics",
      description: "Check your social performance",
      icon: BarChart3,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="dashboard-card quick-actions-card"
    >
      <div className="dashboard-card-header">
        <div>
          <p className="dashboard-eyebrow">QUICK ACTIONS</p>

          <h2>What would you like to do?</h2>
        </div>
      </div>

      <div className="quick-actions-list">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button key={action.title} className="quick-action">
              <div className="quick-action-icon">
                <Icon size={17} />
              </div>

              <div className="quick-action-content">
                <p>{action.title}</p>

                <span>{action.description}</span>
              </div>

              <ArrowUpRight size={15} className="quick-action-arrow" />
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

/* =========================================================
   PERFORMANCE CHART
========================================================= */

function PerformanceChart() {
  const bars = [38, 48, 42, 65, 55, 72, 62, 82, 70, 90, 78, 96];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="dashboard-card performance-card"
    >
      <div className="performance-header">
        <div>
          <p className="dashboard-eyebrow">PERFORMANCE</p>

          <h2>Audience growth</h2>

          <p className="performance-description">
            Your audience growth over the selected period.
          </p>
        </div>

        <button className="dashboard-view-all">
          View all
          <ArrowUpRight size={13} />
        </button>
      </div>

      <div className="performance-value">
        <strong>18.9K</strong>

        <span>+8.4%</span>
      </div>

      <div className="performance-chart">
        <div className="performance-grid-lines">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="performance-bars">
          {bars.map((height, index) => (
            <motion.div
              key={index}
              className="performance-bar"
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{
                duration: 0.75,
                delay: index * 0.04,
              }}
            />
          ))}
        </div>
      </div>

      <div className="performance-labels">
        <span>Aug 1</span>

        <span>Aug 7</span>

        <span>Aug 14</span>

        <span>Today</span>
      </div>
    </motion.div>
  );
}

/* =========================================================
   RECENT ACTIVITY
========================================================= */

function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="dashboard-card activity-card"
    >
      <div className="activity-header">
        <div>
          <p className="dashboard-eyebrow">ACTIVITY</p>

          <h2>Recent activity</h2>
        </div>

        <button className="activity-menu">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="activity-list">
        <Activity
          title="New post published"
          description="Your Instagram post is now live."
          time="10 min ago"
        />

        <Activity
          title="Engagement increased"
          description="Instagram engagement is up 12.5%."
          time="1 hour ago"
        />

        <Activity
          title="Post scheduled"
          description="Product update scheduled for tomorrow."
          time="3 hours ago"
        />

        <Activity
          title="Account connected"
          description="LinkedIn account connected successfully."
          time="Yesterday"
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   ACTIVITY ITEM
========================================================= */

function Activity({ title, description, time }) {
  return (
    <div className="activity-item">
      <div className="activity-dot" />

      <div className="activity-content">
        <div className="activity-title-row">
          <p>{title}</p>

          <span>{time}</span>
        </div>

        <small>{description}</small>
      </div>
    </div>
  );
}
