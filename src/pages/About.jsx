
import "./About.css";

const values = [
  {
    number: "01",
    title: "Quality First",
    description:
      "We focus on product quality, consistency and clear communication throughout the business relationship.",
  },
  {
    number: "02",
    title: "Global Connections",
    description:
      "We aim to connect bakery products with businesses and customers across markets.",
  },
  {
    number: "03",
    title: "Long-Term Partnerships",
    description:
      "We value trust, transparency and reliable cooperation with our business partners.",
  },
];

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="eyebrow">OUR STORY & APPROACH</p>
          <h1>
            Bringing the world
            <br />
            <span>closer through bakery.</span>
          </h1>
          <p>
            Neer Euro Asian Trading is focused on bakery-related
            trading and building meaningful business connections.
          </p>
          <a href="/products" className="primary-btn">
            Explore Our Products
          </a>
        </div>

        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1100&q=85"
            alt="Freshly baked artisan bread"
          />
          <div className="about-image-label">
            <span>BAKERY</span>
            <strong>Made for business</strong>
          </div>
        </div>
      </section>

      <section className="about-intro container">
        <div>
          <p className="eyebrow">WHO WE ARE</p>
          <h2>
            A business built around
            <span> bakery and connections.</span>
          </h2>
        </div>

        <div className="about-intro-text">
          <p>
            Neer Euro Asian Trading aims to develop business
            relationships in the bakery trading sector through
            professional communication and a quality-focused approach.
          </p>
          <p>
            We believe successful trading is built on understanding
            product requirements, maintaining transparency and creating
            long-term relationships with our partners.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="about-section-heading">
            <p className="eyebrow">WHAT GUIDES US</p>
            <h2>Our core values</h2>
            <p>
              The principles that shape our approach to business.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => (
              <article className="about-value-card" key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta container">
        <div>
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Have a bakery business enquiry?</h2>
          <p>
            Tell us about your requirements and our team can discuss
            the next steps with you.
          </p>
        </div>

        <a href="/contact" className="primary-btn">
          Contact Our Team
        </a>
      </section>
    </main>
  );
}
