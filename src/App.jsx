
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Main pages
import Home from "./pages/Home";
import Founder from "./pages/Founder";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Legal pages
import Terms from "./pages/Terms";
import CopyrightPolicy from "./pages/CopyrightPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Disclaimer from "./pages/Disclaimer";
import Grievance from "./pages/Grievance";

// Global CSS
import "./index.css";

// Main page CSS
import "./pages/Home.css";
import "./pages/Founder.css";
import "./pages/Products.css";
import "./pages/About.css";
import "./pages/Contact.css";
import "./pages/PrivacyPolicy.css";

// =====================================================
// 404 PAGE
// =====================================================

function NotFound() {
  return (
    <main className="container section-padding placeholder-page">
      <p className="eyebrow">404 — PAGE NOT FOUND</p>

      <h1 className="section-title">
        This page has wandered off.
      </h1>

      <p className="placeholder-description">
        The page you are looking for does not exist or may
        have been moved.
      </p>

      <Link to="/" className="primary-btn">
        Return to Home
      </Link>
    </main>
  );
}

// =====================================================
// MAIN APP
// =====================================================

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          {/* MAIN PAGES */}

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/founder" element={<Founder />} />

          <Route path="/products" element={<Products />} />

          <Route path="/contact" element={<Contact />} />

          {/* PRIVACY POLICY */}

          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          {/* TERMS & CONDITIONS */}

          <Route
            path="/terms"
            element={<Terms />}
          />

          {/* COPYRIGHT POLICY */}

          <Route
            path="/copyright-policy"
            element={<CopyrightPolicy />}
          />

          {/* RETURN & REFUND POLICY */}

          <Route
            path="/return-policy"
            element={<ReturnPolicy />}
          />

          {/* SHIPPING & DELIVERY POLICY */}

          <Route
            path="/shipping-policy"
            element={<ShippingPolicy />}
          />

          {/* COOKIE POLICY */}

          <Route
            path="/cookie-policy"
            element={<CookiePolicy />}
          />

          {/* DISCLAIMER */}

          <Route
            path="/disclaimer"
            element={<Disclaimer />}
          />

          {/* GRIEVANCE & COMPLAINTS */}

          <Route
            path="/grievance"
            element={<Grievance />}
          />

          {/* ALTERNATE URL REDIRECTS */}

          <Route
            path="/founders"
            element={<Navigate to="/founder" replace />}
          />

          <Route
            path="/products-catalogue"
            element={<Navigate to="/products" replace />}
          />

          {/* 404 — UNKNOWN URL */}

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
