
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import "./LegalPage.css";

export default function LegalPage({ title, subtitle, updated, sections }) {
  return (
    <main className="legal-page">
      <div className="legal-hero">
        <div className="legal-hero-inner">
          <span className="legal-eyebrow">
            <ShieldCheck size={15} /> NEER EURO ASIAN TRADING
          </span>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <span className="legal-updated">Last updated: {updated}</span>
        </div>
      </div>

      <div className="legal-container">
        <Link to="/" className="legal-back">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <article className="legal-card">
          <p className="legal-intro">
            This page explains the terms and information relevant to using
            our website and contacting us about our products and business
            opportunities.
          </p>

          {sections.map((section, index) => (
            <section className="legal-section" key={section.heading}>
              <span className="legal-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2>{section.heading}</h2>
                {section.text && <p>{section.text}</p>}
                {section.items && (
                  <ul>
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          <div className="legal-contact">
            <h2>Questions or concerns?</h2>
            <p>
              Please contact us through our website's Contact page for
              enquiries related to this policy.
            </p>
            <Link to="/contact" className="legal-contact-link">
              Contact Us <span>↗</span>
            </Link>
          </div>
        </article>

        <p className="legal-footnote">
          This page is intended as general website information and should be
          reviewed against the company's actual business practices.
        </p>
      </div>
    </main>
  );
}
