import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="/" className="logo">
          <span className="logo-box">S</span>
          <span>MYSOCIALS</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#product" onClick={closeMenu}>
            Product
          </a>

          <a href="#features" onClick={closeMenu}>
            Features
          </a>

          <a href="#pricing" onClick={closeMenu}>
            Pricing
          </a>
        </nav>

        <div className="navbar-actions">
          <a href="/signin" className="signin-link">
            Sign in
          </a>

          <a href="#pricing" className="nav-button">
            Get started for free
          </a>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
