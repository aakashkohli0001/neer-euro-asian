
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  MessageCircle,
  Globe,
} from "lucide-react";

import SEO from "../seo/SEO";
import "./Contact.css";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const selectedProduct = searchParams.get("product") || "";

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product: selectedProduct,
    quantity: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (sending) return;

    setSending(true);
    setError("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError(
        "Email configuration missing hai. Apni .env file check karo."
      );
      setSending(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          country: form.country,
          product: form.product,
          quantity: form.quantity,
          message: form.message,
        },
        {
          publicKey,
        }
      );

      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);

      setError(
        "Enquiry send nahi hui. EmailJS settings check karke dobara try karo."
      );
    } finally {
      setSending(false);
    }
  }

  function resetForm() {
    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      product: "",
      quantity: "",
      message: "",
    });

    setSubmitted(false);
    setError("");
  }

  return (
    <>
      <SEO
        title="Contact Us | Neer Euro Asian Trading"
        description="Contact Neer Euro Asian Trading for bakery product enquiries, wholesale requirements and international business opportunities."
        path="/contact"
      />

      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-overlay" />

          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="contact-eyebrow">
              LET'S CONNECT
            </span>

            <h1>
              Let's Build Something
              <br />
              <span>Great Together.</span>
            </h1>

            <p>
              Have a product enquiry or wholesale requirement?
              Tell us about your business needs.
            </p>
          </motion.div>
        </section>

        <section className="contact-main">
          <div className="contact-info">
            <span className="contact-label">GET IN TOUCH</span>

            <h2>
              Start a Business
              <br />
              Conversation.
            </h2>

            <p className="contact-description">
              Share your requirements with us. Our team can
              review your enquiry and discuss the next steps.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={21} />
                </div>

                <div>
                  <h3>Email</h3>
                  <p>Contact us for business enquiries</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={21} />
                </div>

                <div>
                  <h3>Phone</h3>
                  <p>Discuss your business requirements</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Globe size={21} />
                </div>

                <div>
                  <h3>Business Enquiries</h3>
                  <p>Wholesale and international trade</p>
                </div>
              </div>
            </div>

            <div className="contact-note">
              <MessageCircle size={22} />

              <p>
                For faster assistance, include your product,
                required quantity and destination country.
              </p>
            </div>
          </div>

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-form-heading">
              <span className="contact-label">ENQUIRY FORM</span>
              <h2>Tell Us What You Need</h2>
              <p>Fields marked with * are required.</p>
            </div>

            {submitted ? (
              <div className="contact-success">
                <div className="success-icon">
                  <Send size={27} />
                </div>

                <h3>Enquiry Sent Successfully!</h3>

                <p>
                  Thank you for contacting us. Your enquiry
                  has been submitted successfully.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="contact-submit-btn"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form
                className="business-enquiry-form"
                onSubmit={handleSubmit}
              >
                <div className="contact-field-row">
                  <div className="contact-field">
                    <label htmlFor="name">Full Name *</label>

                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="company">Company Name</label>

                    <input
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div className="contact-field-row">
                  <div className="contact-field">
                    <label htmlFor="email">Business Email *</label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="phone">Phone Number</label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Include country code"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="contact-field-row">
                  <div className="contact-field">
                    <label htmlFor="country">
                      Country / Destination *
                    </label>

                    <input
                      id="country"
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      placeholder="Enter country"
                      autoComplete="country-name"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="product">
                      Product of Interest *
                    </label>

                    <input
                      id="product"
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      placeholder="Which product?"
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="quantity">
                    Required Quantity
                  </label>

                  <input
                    id="quantity"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    placeholder="Enter quantity and unit, if known"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="message">
                    Your Requirements *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    required
                  />
                </div>

                {error && (
                  <p className="contact-error" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={sending}
                >
                  {sending ? "Sending Enquiry..." : "Submit Enquiry"}

                  {!sending && <Send size={17} />}
                </button>

                <p className="contact-privacy-note">
                  Your information will be used to respond to
                  your business enquiry.
                </p>
              </form>
            )}
          </motion.div>
        </section>
      </main>
    </>
  );
}
