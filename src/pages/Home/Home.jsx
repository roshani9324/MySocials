import Hero from "./components/Hero";
import CrossPlatform from "./components/CrossPlatform";
import SignInSection from "./components/SignInSection";
import Pricing from "./components/Pricing";

function Home() {
  return (
    <main>
      <Hero />

      <CrossPlatform />

      <SignInSection />

      <Pricing />
    </main>
  );
}

export default Home;
