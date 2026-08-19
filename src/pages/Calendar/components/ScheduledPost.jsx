import { Clock3 } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const platformConfig = {
  Instagram: {
    icon: FaInstagram,
    className: "instagram",
  },

  LinkedIn: {
    icon: FaLinkedin,
    className: "linkedin",
  },

  Facebook: {
    icon: FaFacebook,
    className: "facebook",
  },
};

export default function ScheduledPost({ post }) {
  const config = platformConfig[post.platform] || platformConfig.Facebook;

  const PlatformIcon = config.icon;

  return (
    <div className={`scheduled-post-card ${config.className}`}>
      <div className="scheduled-post-top">
        <div className="scheduled-platform">
          <div className="scheduled-platform-icon">
            <PlatformIcon size={13} />
          </div>

          <span>{post.platform}</span>
        </div>

        <Clock3 size={12} className="scheduled-clock" />
      </div>

      <p className="scheduled-post-title">{post.title}</p>

      <p className="scheduled-post-time">{post.time}</p>
    </div>
  );
}
