
import { motion } from "framer-motion";
import SEO from "../seo/SEO";
import "./PrivacyPolicy.css";

const sections = [
  {
    title: "1. Who We Are",
    paragraphs: [
      "This Privacy Policy explains how Neer Euro Asian Trading collects, uses and protects personal information when you visit our website or contact us about bakery products, wholesale requirements or international trading opportunities.",
      "Our website is intended to support business communication and product enquiries from India and international markets."
    ]
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "When you submit our Contact or Business Enquiry Form, we may collect the following information that you choose to provide:",
    ],
    bullets: [
      "Full name",
      "Company or business name",
      "Business email address",
      "Phone number, including country code",
      "Country or destination market",
      "Product of interest",
      "Required quantity",
      "Your message and business requirements"
    ],
    after: "Please do not submit passwords, payment card details or other sensitive information through the enquiry form."
  },
  {
    title: "3. How We Use Your Information",
    paragraphs: [
      "We use enquiry information only for relevant and legitimate business purposes, including:"
    ],
    bullets: [
      "Responding to product and wholesale enquiries",
      "Understanding your product, quantity and destination requirements",
      "Discussing potential supply, import and export opportunities",
      "Following up on a request you have submitted",
      "Maintaining business correspondence and enquiry records",
      "Protecting the website against spam, misuse and security incidents",
      "Meeting applicable legal obligations"
    ]
  },
  {
    title: "4. How Enquiry Emails Are Processed",
    paragraphs: [
      "Our website uses EmailJS to send information submitted through the enquiry form to the configured business email service. The information you enter may be processed by EmailJS and the connected email provider to deliver the enquiry.",
      "These providers may process certain technical information associated with a request. Their own privacy policies, security practices and service terms also apply.",
      "For more information, please read the EmailJS Privacy Policy at https://www.emailjs.com/legal/privacy-policy/."
    ]
  },
  {
    title: "5. Sharing of Information",
    paragraphs: [
      "We do not sell personal information collected through our enquiry form.",
      "We may share relevant information with service providers needed to deliver enquiry emails, operate or secure the website, or support a business transaction you have requested. Information may also be disclosed where required by applicable law or a valid legal request.",
      "We aim to limit information shared with service providers to what is reasonably necessary for the relevant purpose."
    ]
  },
  {
    title: "6. International Data Processing",
    paragraphs: [
      "Because our business enquiries may involve international markets, information may be handled by service providers operating in other countries. For example, EmailJS states in its privacy policy that personal information processed through its service may be transferred to the United States.",
      "Where applicable, we will handle personal information in accordance with relevant legal requirements for its processing and transfer."
    ]
  },
  {
    title: "7. Data Retention",
    paragraphs: [
      "We retain enquiry information only for as long as reasonably necessary to respond to your request, manage relevant business communications, maintain appropriate records, address disputes or meet legal obligations.",
      "The actual retention period may depend on the nature of the enquiry, business records and applicable law. Copies may remain in email accounts or service-provider systems according to their retention and deletion practices."
    ]
  },
  {
    title: "8. Cookies and Website Analytics",
    paragraphs: [
      "Our website may use essential technical features needed for its operation. Additional cookies or analytics technologies may be used if they are enabled on the website.",
      "We do not describe optional analytics or advertising cookies as active unless they are actually configured. If such tools are added, this policy and any required consent controls should be updated accordingly.",
      "You can review your browser settings to manage cookies. Disabling certain cookies may affect website functionality."
    ]
  },
  {
    title: "9. Data Security",
    paragraphs: [
      "We take reasonable steps to protect enquiry information against unauthorized access, misuse, loss or disclosure. However, no website, email service or method of transmitting information over the internet can be guaranteed to be completely secure.",
      "Please contact us if you believe that information you submitted through our website has been mishandled."
    ]
  },
  {
    title: "10. Your Privacy Choices and Rights",
    paragraphs: [
      "Subject to applicable law, you may contact us to request access to, correction of or deletion of personal information you have provided, or to withdraw consent where processing is based on consent.",
      "We may need to verify your identity before acting on a request. Some information may need to be retained where required by law or for legitimate record-keeping purposes.",
      "To make a privacy request or raise a concern, use the official contact details provided on our Contact page. We will handle the request in accordance with applicable law."
    ]
  },
  {
    title: "11. Children's Privacy",
    paragraphs: [
      "This website is intended for business and commercial enquiries, not specifically for children. Please do not knowingly submit a child's personal information through the business enquiry form."
    ]
  },
  {
    title: "12. Third-Party Websites",
    paragraphs: [
      "Our website may contain links to external websites or third-party services. We are not responsible for the privacy practices or content of websites that we do not operate. Please review their privacy policies before providing personal information."
    ]
  },
  {
    title: "13. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy when our website, services, data practices or applicable legal requirements change. The updated version will be published on this page with a revised date."
    ]
  }
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Neer Euro Asian Trading"
        description="Read how Neer Euro Asian Trading handles personal information submitted through its bakery product, wholesale and international business enquiry forms."
        path="/privacy-policy"
      />

      <main className="privacy-page">
        <section className="privacy-hero">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="privacy-eyebrow">YOUR PRIVACY MATTERS</span>
            <h1>Privacy Policy</h1>
            <p>
              How we collect, use and protect information
              when you contact us for business enquiries.
            </p>
          </motion.div>
        </section>

        <article className="privacy-content">
          <p className="privacy-updated">
            Last updated: 25 October 2026
          </p>

          <p className="privacy-intro">
            This policy applies to information collected
            through our website and business enquiry
            communications. Please read it to understand
            what information you provide and how it is used.
          </p>

          {sections.map((section) => (
            <section className="privacy-section" key={section.title}>
              <h2>{section.title}</h2>

              {section.paragraphs?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              {section.bullets && (
                <ul>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {section.after && <p>{section.after}</p>}
            </section>
          ))}

          <section className="privacy-contact">
            <h2>14. Contact Us About Privacy</h2>
            <p>
              For questions about this Privacy Policy or
              requests concerning your personal information,
              please visit our Contact page.
            </p>
            <a href="/contact">Contact Us</a>
          </section>

          <p className="privacy-disclaimer">
            This policy must be checked against the company's
            actual data practices and legal details before
            publication. It is not a legal compliance
            certification.
          </p>
        </article>
      </main>
    </>
  );
}
