
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../seo/SEO";
import siteConfig from "../seo/siteConfig";
import "./Products.css";

const categories = [
  "All Products",
  "Croissants",
  "Danish Pastries",
  "Puff Pastries",
  "Pastry Sheets",
  "Cookies",
  "Bread & Rolls",
];

const products = [
  {
    id: "croissants",
    name: "Croissants",
    category: "Croissants",
    description:
      "Explore croissant options for bakery businesses, food service requirements and wholesale enquiries.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85",
    alt: "Croissants displayed in a bakery",
  },
  {
    id: "danish-pastries",
    name: "Danish Pastries",
    category: "Danish Pastries",
    description:
      "Discover Danish pastry selections for cafes, bakeries and other food businesses.",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=85",
    alt: "Pastries displayed for a bakery selection",
  },
  {
    id: "puff-pastries",
    name: "Puff Pastries",
    category: "Puff Pastries",
    description:
      "Enquire about puff pastry products and options suited to your business requirements.",
    image:
      "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=800&q=85",
    alt: "Golden baked pastry products",
  },
  {
    id: "pastry-sheets",
    name: "Dough & Pastry Sheets",
    category: "Pastry Sheets",
    description:
      "Discuss dough and pastry sheet requirements for professional bakery applications.",
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484df?auto=format&fit=crop&w=800&q=85",
    alt: "Bakery dough prepared for baking",
  },
  {
    id: "cookies",
    name: "Cookies",
    category: "Cookies",
    description:
      "Explore cookie product options for retail, hospitality and bakery business enquiries.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=85",
    alt: "Assorted cookies",
  },
  {
    id: "bread-rolls",
    name: "Bread & Rolls",
    category: "Bread & Rolls",
    description:
      "Enquire about bread and roll selections for your bakery or food service business.",
    image:
      "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=800&q=85",
    alt: "Freshly baked bread",
  },
];

const productsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteConfig.url}/products#collection`,
  name: "Bakery Products Catalogue",
  description:
    "Explore bakery product categories and contact Neer Euro Asian Trading for business and wholesale enquiries.",
  url: `${siteConfig.url}/products`,
  isPartOf: {
    "@id": `${siteConfig.url}/#website`,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `${siteConfig.url}/products#${product.id}`,
    })),
  },
};

export default function Products() {
  const [activeCategory, setActiveCategory] =
    useState("All Products");

  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="products-page">
      <SEO
        title="Bakery Products Catalogue | Wholesale Enquiries"
        description="Explore bakery product categories including croissants, Danish pastries, puff pastries, pastry sheets, cookies and bread. Contact Neer Euro Asian Trading for business enquiries."
        path="/products"
        schema={productsSchema}
      />

      {/* PAGE HERO */}

      <section className="catalogue-hero">
        <div className="container catalogue-hero-content">
          <p className="eyebrow">
            NEER EURO ASIAN TRADING
          </p>

          <h1>
            Our Bakery
            <br />
            <span>Product Catalogue</span>
          </h1>

          <p>
            Explore our bakery product categories and contact
            our team to discuss your business requirements,
            wholesale enquiries and potential trading
            opportunities.
          </p>

          <div className="catalogue-hero-actions">
            <a href="#product-list" className="primary-btn">
              Explore Categories
              <ArrowRight size={17} />
            </a>

            <Link to="/contact" className="outline-btn">
              Business Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT CATALOGUE */}

      <section
        id="product-list"
        className="section-padding catalogue-section"
      >
        <div className="container">
          <div className="catalogue-heading">
            <div>
              <p className="eyebrow">Explore The Range</p>

              <h2 className="section-title">
                Find Your Bakery Products
              </h2>

              <p className="catalogue-subtitle">
                Search the categories below to find products
                relevant to your business.
              </p>
            </div>
          </div>

          {/* SEARCH */}

          <div className="catalogue-search">
            <Search size={19} aria-hidden="true" />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search bakery products..."
              aria-label="Search bakery products"
            />
          </div>

          {/* CATEGORY FILTERS */}

          <div
            className="category-filters"
            aria-label="Filter product categories"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "category-filter active"
                    : "category-filter"
                }
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* RESULTS COUNT */}

          <p className="catalogue-results" aria-live="polite">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "category" : "categories"} found
          </p>

          {/* PRODUCT CARDS */}

          {filteredProducts.length > 0 ? (
            <div className="catalogue-grid">
              {filteredProducts.map((product, index) => (
                <motion.article
                  className="catalogue-card"
                  id={product.id}
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <div className="catalogue-card-image">
                    <img
                      src={product.image}
                      alt={product.alt}
                      loading="lazy"
                      decoding="async"
                    />

                    <span className="catalogue-category-label">
                      {product.category}
                    </span>
                  </div>

                  <div className="catalogue-card-content">
                    <p className="catalogue-card-eyebrow">
                      BAKERY PRODUCT CATEGORY
                    </p>

                    <h3>{product.name}</h3>

                    <p className="catalogue-card-description">
                      {product.description}
                    </p>

                    <Link
                      to={`/contact?product=${encodeURIComponent(product.name)}`}
                      className="catalogue-enquiry-link"
                    >
                      Enquire About This Product
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="catalogue-empty">
              <h3>No matching categories found</h3>

              <p>
                Try another search term or select a different category.
              </p>

              <button
                type="button"
                className="primary-btn"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All Products");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* B2B ENQUIRY */}

      <section className="section-padding">
        <div className="container catalogue-cta">
          <div className="catalogue-cta-icon">
            <MessageCircle size={27} />
          </div>

          <p className="eyebrow">FOR BUSINESS CUSTOMERS</p>

          <h2>
            Need product details or a wholesale quotation?
          </h2>

          <p>
            Tell us which products you are interested in, your
            approximate quantity and your destination market.
            Our team can review your enquiry.
          </p>

          <Link to="/contact" className="primary-btn">
            Contact Our Team
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
