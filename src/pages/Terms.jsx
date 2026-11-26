
import LegalPage from "./LegalPage";

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      subtitle="The terms that apply when you browse our website or submit a business enquiry."
      updated="25 October 2026"
      sections={[
        {
          heading: "Website Purpose",
          text: "This website provides general information about Neer Euro Asian Trading and its products and business activities. It is intended primarily for business enquiries and quotation requests, not direct online purchases."
        },
        {
          heading: "Enquiries and Quotations",
          text: "Submitting an enquiry does not constitute an order or guarantee product availability. Quotations, minimum quantities, specifications, prices, validity periods and other conditions must be confirmed in writing."
        },
        {
          heading: "Product Information",
          text: "Product descriptions, photographs and other materials are provided for general information. Specifications, packaging, availability and suitability should be confirmed with us before any commercial commitment."
        },
        {
          heading: "Pricing and Payment",
          text: "No online checkout or payment is offered through this website. Payment terms, currency, taxes, duties and other charges, if applicable, will be stated in the relevant quotation or written agreement."
        },
        {
          heading: "International Trade",
          text: "Any export or import transaction is subject to the agreed contract and applicable laws, regulations, customs requirements and trade restrictions. Country-specific requirements should be confirmed before a transaction."
        },
        {
          heading: "Intellectual Property",
          text: "Website text, design, branding, graphics and other content may be protected by intellectual property laws. You may not copy, reproduce, republish or commercially use protected content without permission, except where permitted by law."
        },
        {
          heading: "Acceptable Use",
          items: [
            "Provide accurate information when submitting an enquiry.",
            "Do not attempt to disrupt, damage or gain unauthorised access to the website.",
            "Do not use the website for unlawful, fraudulent or misleading purposes."
          ]
        },
        {
          heading: "Third-Party Websites",
          text: "Links to external websites may be provided for convenience. We do not control those websites and are not responsible for their content, availability or privacy practices."
        },
        {
          heading: "Liability and Changes",
          text: "To the extent permitted by applicable law, website information is provided on an informational basis and may change without notice. These terms do not exclude any liability or rights that cannot lawfully be excluded. We may update these terms from time to time."
        },
        {
          heading: "Applicable Law and Contact",
          text: "Applicable law and dispute-resolution arrangements for a commercial transaction should be determined by the relevant written agreement and mandatory applicable law. For website-related questions, please use our Contact page."
        }
      ]}
    />
  );
}
