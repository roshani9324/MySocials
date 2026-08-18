import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BackgroundGlow from "../components/Background/BackgroundGlow";
import GridBackground from "../components/Background/GridBackground";
import CursorGlow from "../components/Background/CursorGlow";

function PublicLayout({ children }) {
  return (
    <div className="app">
      <BackgroundGlow />
      <GridBackground />
      <CursorGlow />

      <Navbar />

      {children}

      <Footer />
    </div>
  );
}

export default PublicLayout;
