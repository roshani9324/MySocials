import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaThreads,
  FaYoutube,
} from "react-icons/fa6";
import { SiX } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-box">S</span>
            <span>MYSOCIALS</span>
          </div>

          <p>Post once. Reach everywhere.</p>

          <div className="footer-socials">
            <FaInstagram />
            <FaYoutube />
            <SiX />
            <FaLinkedinIn />
            <FaFacebookF />
            <FaThreads />
          </div>
        </div>

        <div className="footer-column">
          <h4>Product</h4>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#product">Product</a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="#top">About us</a>
          <a href="#top">Careers</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <a href="/privacy">Privacy policy</a>
          <a href="/terms">Terms of service</a>
          <a href="/security">Security Policy</a>
          <a href="/refunds">Refund and Cancellation Policy</a>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <a href="#top">Help center</a>
          <a href="#top">Community</a>
          <a href="#top">Blog</a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 MySocials. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
