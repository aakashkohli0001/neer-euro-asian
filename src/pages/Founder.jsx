
import { motion } from "framer-motion";
import { ArrowRight, Target, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import "./Founder.css";

const values = [
  {
    icon: Target,
    title: "Our Vision",
    text: "To build lasting business relationships through quality bakery products and international trade.",
  },
  {
    icon: Heart,
    title: "Our Philosophy",
    text: "A thoughtful approach to product selection, quality and customer relationships.",
  },
  {
    icon: Globe,
    title: "Our Ambition",
    text: "To connect bakery products with business opportunities across markets.",
  },
];

export default function Founder() {
  return (
    <main className="founder-page">
      <section className="founder-hero">
        <div className="container founder-grid">
          <motion.div
            className="founder-photo-wrap"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/founder.jpg"
              alt="Company founder"
              onError={(e) => {
                e.currentTarget.style.visibility = "hidden";
              }}
            />
            <div className="photo-placeholder">
              <span>FOUNDER PORTRAIT</span>
              <p>Add founder.jpg to public/images</p>
            </div>
          </motion.div>

          <motion.div
            className="founder-intro"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">The Person Behind the Vision</p>
            <h1 className="section-title">
              Building a vision
              <br />
              beyond borders.
            </h1>

            <p className="founder-role">
              Founder & Leadership
            </p>

            <p>
              At Neer Euro Asian, our ambition is to bring
              quality bakery products and business
              opportunities together. Our journey is guided
              by a focus on quality, relationships and
              responsible business growth.
            </p>

            <p>
              Our founder's story, experience and personal
              message will be featured here.
            </p>

            <Link to="/contact" className="primary-btn">
              Connect With Us <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="founder-section-heading">
            <p className="eyebrow">What Guides Us</p>
            <h2 className="section-title">Our Purpose & Values</h2>
          </div>

          <div className="founder-values">
            {values.map(({ icon: Icon, title, text }, i) => (
              <motion.article
                key={title}
                className="founder-value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <Icon size={30} />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-quote">
        <div className="container">
          <p className="eyebrow">Our Commitment</p>
          <h2>
            Quality in every product.
            <br />
            Trust in every relationship.
          </h2>
        </div>
      </section>
    </main>
  );
}
