import ScrollReveal from "../../../components/Animation/ScrollReveal";
import SocialOrbit from "./SocialOrbit";

function CrossPlatform() {
  return (
    <section className="cross-platform" id="features">
      <div className="cross-container">
        <ScrollReveal className="cross-content">
          <span className="section-label">CROSS-PLATFORM PUBLISHING</span>

          <h2>
            One dashboard.
            <br />
            Every social channel.
          </h2>

          <p>
            Compose once. Ship to Instagram, YouTube, X, Facebook, LinkedIn, and
            Threads—without juggling six tabs.
          </p>
        </ScrollReveal>

        <SocialOrbit />
      </div>
    </section>
  );
}

export default CrossPlatform;
