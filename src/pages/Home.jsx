
import { motion } from "framer-motion";
import { ArrowRight, Globe2, ShieldCheck, Wheat } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Croissants",
    description: "Butter, mini and speciality croissants.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Danish Pastries",
    description: "Delicate pastries with delicious fillings.",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=85",
  },
{
  title: "Artisan Bread",
  description: "Bread, rolls and classic bakery favourites.",
  image:
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=85",
},
];

const revealUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16 },
  },
};

export default function Home() {
  return (
    <main className="home-page">
      {/* HERO */}
      <section className="hero">
        <motion.div
          className="hero-image"
          initial={{ scale: 1.13, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="hero-overlay" />
        <div className="hero-grain" />

        <div className="container hero-content">
          <motion.div
            className="hero-main"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p className="eyebrow" variants={revealUp}>
              <span className="eyebrow-dot" />
              Quality · Craft · Global Reach
            </motion.p>

            <motion.h1 variants={revealUp}>
              Bringing the
              <br />
              <span>Art of Baking</span>
              <br />
              to the World.
            </motion.h1>

            <motion.p
              className="hero-description"
              variants={revealUp}
            >
              Discover a curated range of bakery products,
              crafted for quality and made for businesses
              around the world.
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={revealUp}
            >
              <Link to="/products" className="primary-btn">
                Explore Products <ArrowRight size={17} />
              </Link>

              <Link to="/about" className="outline-btn">
                Discover Our Story
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-note"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            BAKERY PRODUCTS <span /> INTERNATIONAL TRADE
          </motion.div>

          <motion.div
            className="hero-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <span className="scroll-line" />
            SCROLL TO DISCOVER
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section-padding intro-section">
        <div className="container">
          <div className="intro-grid">
            <motion.div
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <p className="eyebrow">
                Welcome to Neer Euro Asian
              </p>

              <h2 className="section-title">
                A passion for baking.
                <br />
                <span>A vision beyond borders.</span>
              </h2>
            </motion.div>

            <motion.div
              className="intro-copy"
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.15 }}
            >
              <p>
                We bring bakery products and business
                opportunities together through a focus on
                product quality, thoughtful sourcing and
                international trade.
              </p>

              <Link to="/about" className="text-link">
                Learn About Us <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="values-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.article
              className="value-card"
              variants={revealUp}
              whileHover={{ y: -9 }}
            >
              <div className="value-icon">
                <Wheat size={27} />
              </div>
              <span className="value-number">01</span>
              <h3>Product Quality</h3>
              <p>Carefully presented bakery selections.</p>
              <div className="value-bottom-line" />
            </motion.article>

            <motion.article
              className="value-card"
              variants={revealUp}
              whileHover={{ y: -9 }}
            >
              <div className="value-icon">
                <ShieldCheck size={27} />
              </div>
              <span className="value-number">02</span>
              <h3>Quality Focus</h3>
              <p>A commitment to clear product information.</p>
              <div className="value-bottom-line" />
            </motion.article>

            <motion.article
              className="value-card"
              variants={revealUp}
              whileHover={{ y: -9 }}
            >
              <div className="value-icon">
                <Globe2 size={27} />
              </div>
              <span className="value-number">03</span>
              <h3>Global Ambition</h3>
              <p>Connecting bakery products with businesses.</p>
              <div className="value-bottom-line" />
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section-padding products-section">
        <div className="container">
          <motion.div
            className="products-heading"
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div>
              <p className="eyebrow">Explore Our Collection</p>
              <h2 className="section-title">
                Our Bakery Selection
              </h2>
            </div>

            <Link to="/products" className="text-link">
              View All Products <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            className="product-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {products.map((product, index) => (
              <motion.article
                className="product-card"
                key={product.title}
                variants={revealUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/products"
                  className="product-image-wrap"
                  aria-label={`Explore ${product.title}`}
                >
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.65 }}
                  />

                  <span className="product-index">
                    0{index + 1}
                  </span>

                  <span className="product-image-arrow">
                    <ArrowRight size={19} />
                  </span>
                </Link>

                <div className="product-card-copy">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>

                  <Link to="/products" className="text-link">
                    Discover <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section className="section-padding enquiry-section">
        <motion.div
          className="container enquiry-banner"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="enquiry-decoration">
            <Globe2 size={150} strokeWidth={0.55} />
          </div>

          <div className="enquiry-content">
            <p className="eyebrow">Let's Work Together</p>

            <h2 className="section-title">
              Looking for bakery products
              <br />
              <span>for your business?</span>
            </h2>

            <p>
              Connect with us to discuss your product
              requirements and business enquiry.
            </p>

            <Link to="/contact" className="primary-btn">
              Send an Enquiry <ArrowRight size={17} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
