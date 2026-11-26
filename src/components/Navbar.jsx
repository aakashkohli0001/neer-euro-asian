
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Founder", path: "/founder" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nea-header">
      <div className="nea-nav-inner">
        <Link
          to="/"
          className="nea-brand"
          aria-label="Neer Euro Asian Trading home"
          onClick={closeMenu}
        >
          <span className="nea-brand-mark">N</span>
          <span className="nea-brand-text">
            <strong>NEER EURO ASIAN</strong>
            <small>TRADING · BAKERY SOURCING</small>
          </span>
        </Link>

        <button
          type="button"
          className="nea-menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav
          className={`nea-nav-links ${menuOpen ? "nea-nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `nea-nav-link ${isActive ? "nea-nav-active" : ""}`
              }
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="nea-nav-cta"
            onClick={closeMenu}
          >
            Let's Talk <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
