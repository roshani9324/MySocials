import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { socialPlatforms } from "../../../data/socialPlatforms";

function SocialOrbit() {
  return (
    <div className="social-orbit">
      <div className="orbit-line line-one" />
      <div className="orbit-line line-two" />
      <div className="orbit-line line-three" />

      <motion.div
        className="orbit-dashboard"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <div className="orbit-dashboard-header">
          <span>New Post</span>
          <span>•••</span>
        </div>

        <div className="orbit-textarea">What do you want to share?</div>

        <div className="orbit-actions">
          <span>◎</span>
          <span>◌</span>
          <span>◍</span>

          <button>
            <Send size={12} />
            Publish
          </button>
        </div>
      </motion.div>

      <OrbitPlatform platform={socialPlatforms[0]} position="orbit-top" />

      <OrbitPlatform platform={socialPlatforms[1]} position="orbit-right" />

      <OrbitPlatform platform={socialPlatforms[2]} position="orbit-left" />

      <OrbitPlatform
        platform={socialPlatforms[3]}
        position="orbit-bottom-left"
      />

      <OrbitPlatform
        platform={socialPlatforms[4]}
        position="orbit-bottom-right"
      />

      <OrbitPlatform platform={socialPlatforms[5]} position="orbit-bottom" />
    </div>
  );
}

function OrbitPlatform({ platform, position }) {
  const Icon = platform.icon;

  return (
    <motion.div
      className={`orbit-platform ${position}`}
      animate={{
        y: [0, -7, 0],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
      }}
    >
      <div className={`orbit-icon ${platform.className}`}>
        <Icon />
      </div>

      <span>{platform.name}</span>
    </motion.div>
  );
}

export default SocialOrbit;
