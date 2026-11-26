
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Globe,
  Mail,
  MoveUpRight,
} from "lucide-react";
import "./Footer.css";

const exploreLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Founder", to: "/founder" },
  { label: "Our Products", to: "/products" },
  { label: "Contact Us", to: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Copyright Policy", to: "/copyright-policy" },
  { label: "Return & Refund Policy", to: "/return-policy" },
  { label: "Shipping & Delivery", to: "/shipping-policy" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "Disclaimer", to: "/disclaimer" },
  { label: "Grievance & Complaints", to: "/grievance" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top-line" />

      <div className="container footer-main">
        <div className="footer-grid">
          {/* BRAND */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-mark">
                <Globe size={25} strokeWidth={1.6} />
              </span>

              <span className="footer-logo-text">
                <strong>NEER EURO ASIAN</strong>
                <small>TRADING</small>
              </span>
            </Link>

            <p className="footer-brand-description">
              Connecting bakery products with business
              opportunities through thoughtful trade,
              meaningful partnerships and a commitment
              to quality.
            </p>

            <Link to="/about" className="footer-learn-link">
              Discover Our Company
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* EXPLORE */}
          <nav className="footer-column" aria-label="Explore">
            <h3 className="footer-heading">Explore</h3>

            <ul className="footer-link-list">
              {exploreLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* LEGAL */}
          <nav
            className="footer-column footer-legal-column"
            aria-label="Legal information"
          >
            <h3 className="footer-heading">
              Legal Information
            </h3>

            <ul className="footer-link-list">
              {legalLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTACT */}
          <div className="footer-column footer-business">
            <h3 className="footer-heading">
              Business Enquiries
            </h3>

            <div className="footer-business-icon">
              <Mail size={22} strokeWidth={1.7} />
            </div>

            <p>
              Looking for bakery products or exploring
              wholesale and international trading
              opportunities?
            </p>

            <Link
              to="/contact"
              className="footer-contact-button"
            >
              <span>Send An Enquiry</span>
              <MoveUpRight size={17} />
            </Link>

            <span className="footer-business-note">
              We welcome business enquiries.
            </span>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Neer Euro Asian Trading.
            All rights reserved.
          </p>

          <p className="footer-bottom-tagline">
            Built around quality and craftsmanship.
          </p>

          <Link to="/privacy-policy" className="footer-bottom-link">
            Your Privacy Matters
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
