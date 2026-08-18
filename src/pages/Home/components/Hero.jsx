import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Button from "../../../components/Button/Button";
import HeroScene from "./HeroScene";

function Hero() {
  return (
    <section className="hero" id="product">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <Sparkles size={13} />
            The all-in-one social media platform
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
          >
            post once.
            <br />
            reach <span>everywhere.</span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            Compose, schedule, and analyse across Instagram, YouTube, X,
            LinkedIn, Facebook, and Threads—all from one simple dashboard.
          </motion.p>

          <motion.div
            className="hero-button-wrapper"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
          >
            <Button href="#pricing" showArrow>
              Get started for free
            </Button>
          </motion.div>

          <div className="hero-benefits">
            <span>
              <Check size={14} />
              No credit card required
            </span>

            <span>
              <Check size={14} />
              Free forever
            </span>
          </div>
        </div>

        <HeroScene />
      </div>
    </section>
  );
}

export default Hero;
