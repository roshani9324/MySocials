import {
  MoreHorizontal,
  CalendarDays,
  Heart,
  MessageCircle,
  Eye,
  Clock3,
} from "lucide-react";

import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const platformConfig = {
  Instagram: {
    icon: FaInstagram,
    className: "instagram",
  },

  Facebook: {
    icon: FaFacebook,
    className: "facebook",
  },

  LinkedIn: {
    icon: FaLinkedin,
    className: "linkedin",
  },

  X: {
    className: "x-platform",
  },
};

const statusClass = {
  Published: "published",
  Scheduled: "scheduled",
  Draft: "draft",
};

export default function ContentCard({ post }) {
  const platform = platformConfig[post.platform] || platformConfig.X;

  const PlatformIcon = platform.icon;

  return (
    <article className={`content-post-card ${platform.className}`}>
      {/* PREVIEW */}
      <div className="content-card-preview">
        <div className="content-preview-decoration">
          <span />
          <span />
          <span />
        </div>

        <div className="content-preview-content">
          {PlatformIcon ? (
            <div className="content-preview-platform-icon">
              <PlatformIcon size={25} />
            </div>
          ) : (
            <div className="content-preview-platform-x">X</div>
          )}

          <p>{post.title}</p>
        </div>

        {/* STATUS */}
        <div className={`content-status-badge ${statusClass[post.status]}`}>
          <span className="content-status-dot" />
          {post.status}
        </div>

        {/* MENU */}
        <button className="content-card-menu" aria-label="More options">
          <MoreHorizontal size={17} />
        </button>
      </div>

      {/* CARD BODY */}
      <div className="content-card-body">
        {/* PLATFORM */}
        <div className="content-card-meta-top">
          <div className="content-platform">
            <div className="content-platform-icon">
              {PlatformIcon ? (
                <PlatformIcon size={14} />
              ) : (
                <span className="x-small-icon">X</span>
              )}
            </div>

            <span>{post.platform}</span>
          </div>

          <span className="content-post-type">{post.type}</span>
        </div>

        {/* DESCRIPTION */}
        <p className="content-card-description">{post.description}</p>

        {/* DATE */}
        <div className="content-card-date">
          {post.status === "Scheduled" ? (
            <Clock3 size={14} />
          ) : (
            <CalendarDays size={14} />
          )}

          <span>{post.date}</span>
        </div>

        {/* STATS */}
        {post.status === "Published" && (
          <div className="content-card-stats">
            <div className="content-stat">
              <Eye size={14} />
              <span>{post.reach}</span>
            </div>

            <div className="content-stat">
              <Heart size={14} />
              <span>{post.likes}</span>
            </div>

            <div className="content-stat">
              <MessageCircle size={14} />
              <span>{post.comments}</span>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
