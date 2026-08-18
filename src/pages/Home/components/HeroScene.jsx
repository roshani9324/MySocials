import { motion } from "framer-motion";
import { SiInstagram, SiYoutube, SiFacebook, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

import "./HeroScene.css";

const socialPlatforms = [
  {
    name: "Instagram",
    Icon: SiInstagram,
    className: "instagram",
  },
  {
    name: "LinkedIn",
    Icon: FaLinkedinIn,
    className: "linkedin",
  },
  {
    name: "YouTube",
    Icon: SiYoutube,
    className: "youtube",
  },
  {
    name: "Facebook",
    Icon: SiFacebook,
    className: "facebook",
  },
  {
    name: "X",
    Icon: SiX,
    className: "x",
  },
];

const chartData = [35, 50, 42, 70, 58, 82, 95];

const sidebarItems = ["Home", "Posts", "Calendar", "Analytics", "Inbox"];

const upcomingPosts = [
  ["New brand feature", "Today · 10:00 AM"],
  ["Behind the scenes", "Today · 4:00 PM"],
  ["Product update", "Tomorrow"],
];

export default function HeroScene() {
  return (
    <div className="hero-scene">
      {/* Glow */}

      <div className="hero-glow" />
      <div className="hero-glow-small" />

      {/* Orbit */}

      <motion.div
        className="hero-orbit"
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="hero-orbit second"
        animate={{ rotate: -360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Dashboard */}

      <motion.div
        className="hero-dashboard"
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [-7, 7, -7],
          rotateX: [0, 2, 0],
          rotateY: [-1, 1, -1],
        }}
        transition={{
          opacity: {
            duration: 0.8,
          },
          scale: {
            duration: 0.8,
          },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotateX: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotateY: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        {/* Header */}

        <div className="hero-window-header">
          <div className="hero-dots">
            <span className="hero-dot red" />
            <span className="hero-dot yellow" />
            <span className="hero-dot green" />
          </div>

          <button className="hero-create-button">Create Post</button>
        </div>

        {/* Body */}

        <div className="hero-dashboard-body">
          <div className="hero-dashboard-main">
            {/* Sidebar */}

            <div className="hero-sidebar">
              {sidebarItems.map((item, index) => (
                <div
                  key={item}
                  className={`hero-sidebar-item ${index === 0 ? "active" : ""}`}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Content */}

            <div className="hero-dashboard-content">
              <p className="hero-dashboard-title">Analytics Overview</p>

              {/* Stats */}

              <div className="hero-stats">
                <div className="hero-stat-card">
                  <p className="hero-stat-label">Reach</p>

                  <p className="hero-stat-value">7.4K</p>

                  <span className="hero-stat-growth">+12.5%</span>
                </div>

                <div className="hero-stat-card">
                  <p className="hero-stat-label">Engagement</p>

                  <p className="hero-stat-value">5.2K</p>

                  <span className="hero-stat-growth">+8.1%</span>
                </div>
              </div>

              {/* Chart */}

              <div className="hero-chart">
                {chartData.map((height, index) => (
                  <motion.div
                    key={index}
                    className="hero-chart-bar"
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: `${height}%`,
                    }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.8,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Posts */}

          <div className="hero-upcoming">
            <p className="hero-upcoming-title">Upcoming Posts</p>

            {upcomingPosts.map(([title, time]) => (
              <div key={title} className="hero-upcoming-item">
                <span className="hero-post-name">{title}</span>

                <span className="hero-post-time">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Social Icons */}

      {socialPlatforms.map(({ name, Icon, className }, index) => (
        <motion.div
          key={name}
          className={`hero-social ${className}`}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: {
              delay: index * 0.15,
            },
            scale: {
              delay: index * 0.15,
              type: "spring",
              stiffness: 160,
            },
            y: {
              duration: 3 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Icon size={23} />
        </motion.div>
      ))}

      {/* Bottom glow */}

      <motion.div
        className="hero-bottom-glow"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scaleX: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
