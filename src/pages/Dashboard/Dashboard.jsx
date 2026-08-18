
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
    <div className="min-h-screen bg-[#050908] text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-[35%] w-[500px] h-[400px] bg-emerald-400/[0.04] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main */}
      <main className="relative z-10 p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-400/70 mb-3">
              Monday, August 17
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Good morning, <span className="text-emerald-400">Roshani</span>
            </h1>

            <p className="text-sm text-white/40 mt-2">
              Here's what's happening across your social channels.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="
                flex items-center gap-2
                px-4 py-2.5
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                text-sm text-white/70
                hover:bg-white/[0.06]
                transition
              "
            >
              Last 30 days
            </button>

            <button
              className="
                flex items-center gap-2
                px-5 py-2.5
                rounded-xl
                bg-emerald-400
                text-black
                font-semibold
                text-sm
                hover:bg-emerald-300
                transition
                shadow-[0_0_25px_rgba(72,255,174,0.15)]
              "
            >
              <Plus size={17} />
              Create Post
            </button>
          </div>
        </div>

        {/* Stats */}
        <StatsCards stats={stats} />

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr_280px] gap-5 mt-5">
          {/* Upcoming */}
          <UpcomingPosts posts={upcomingPosts} />

          {/* Accounts */}
          <ConnectedAccounts accounts={accounts} />

          {/* Quick Actions */}
          <QuickActions />
        </div>

        {/* Bottom Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
          <PerformanceChart />

          <RecentActivity />
        </div>
      </main>
    </div>
  );
}

/* -------------------------------- */
/* QUICK ACTIONS */
/* -------------------------------- */

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
      className="
        rounded-2xl
        border border-white/[0.08]
        bg-white/[0.025]
        p-5
      "
    >
      <div className="mb-5">
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
          Quick Actions
        </p>

        <h2 className="text-base font-medium mt-2">
          What would you like to do?
        </h2>
      </div>

      <div className="space-y-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="
                group
                w-full
                flex items-center gap-3
                p-3
                rounded-xl
                border border-transparent
                hover:border-emerald-400/20
                hover:bg-emerald-400/[0.04]
                text-left
                transition
              "
            >
              <div
                className="
                  w-9 h-9
                  shrink-0
                  rounded-lg
                  bg-emerald-400/10
                  border border-emerald-400/10
                  flex items-center justify-center
                  text-emerald-400
                "
              >
                <Icon size={17} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-white/80">
                  {action.title}
                </p>

                <p className="text-[10px] text-white/30 mt-1">
                  {action.description}
                </p>
              </div>

              <ArrowUpRight
                size={14}
                className="
                  text-white/20
                  group-hover:text-emerald-400
                  transition
                "
              />
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

/* -------------------------------- */
/* PERFORMANCE CHART */
/* -------------------------------- */

function PerformanceChart() {
  const bars = [38, 48, 42, 65, 55, 72, 62, 82, 70, 90, 78, 96];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="
        rounded-2xl
        border border-white/[0.08]
        bg-white/[0.025]
        p-5
      "
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            Performance
          </p>

          <h2 className="text-lg font-medium mt-2">Audience growth</h2>
        </div>

        <button className="text-[11px] text-emerald-400">View all</button>
      </div>

      <div className="h-52 flex items-end gap-2">
        {bars.map((height, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{
              duration: 0.8,
              delay: index * 0.05,
            }}
            className="
              flex-1
              rounded-t-md
              bg-emerald-400/30
              hover:bg-emerald-400/60
              transition
            "
          />
        ))}
      </div>

      <div className="flex justify-between mt-3 text-[9px] text-white/20">
        <span>Aug 1</span>
        <span>Aug 7</span>
        <span>Aug 14</span>
        <span>Today</span>
      </div>
    </motion.div>
  );
}

/* -------------------------------- */
/* RECENT ACTIVITY */
/* -------------------------------- */

function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="
        rounded-2xl
        border border-white/[0.08]
        bg-white/[0.025]
        p-5
      "
    >
      <div className="flex justify-between items-center mb-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            Activity
          </p>

          <h2 className="text-lg font-medium mt-2">Recent activity</h2>
        </div>

        <MoreHorizontal size={18} className="text-white/30" />
      </div>

      <div className="space-y-4">
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

function Activity({ title, description, time }) {
  return (
    <div className="flex gap-3">
      <div
        className="
          w-2 h-2
          mt-2
          rounded-full
          bg-emerald-400
          shadow-[0_0_10px_rgba(72,255,174,0.7)]
          shrink-0
        "
      />

      <div className="flex-1">
        <div className="flex justify-between gap-3">
          <p className="text-xs font-medium text-white/75">{title}</p>

          <span className="text-[9px] text-white/20 whitespace-nowrap">
            {time}
          </span>
        </div>

        <p className="text-[10px] text-white/30 mt-1">{description}</p>
      </div>
    </div>
  );
}
