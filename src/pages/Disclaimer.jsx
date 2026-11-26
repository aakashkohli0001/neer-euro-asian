
import LegalPage from "./LegalPage";

export default function Disclaimer() {
  return (
    <LegalPage
      title="Disclaimer"
      subtitle="Important information about website content, product enquiries and business communications."
      updated="25 October 2026"
      sections={[
        {
          heading: "General Information",
          text: "The content on this website is provided for general informational purposes. Although reasonable care may be taken when preparing content, we do not guarantee that every page is always complete, current or free from errors."
        },
        {
          heading: "No Automatic Offer or Order",
          text: "Product descriptions and other website content are not, by themselves, a binding offer, confirmation of availability or acceptance of an order. A quotation or business transaction becomes effective only as established by the applicable written communications and agreement."
        },
        {
          heading: "Product Specifications",
          text: "Product images, descriptions and examples may be illustrative. Buyers should confirm exact specifications, ingredients, allergen information, packaging, shelf life, certifications, quantity and suitability in writing where relevant before committing to a transaction."
        },
        {
          heading: "Prices and Availability",
          text: "Prices, quantities, specifications and availability may change and may depend on the destination, volume, currency, taxes, freight and other commercial conditions. The relevant written quotation or agreement should be consulted for confirmed details."
        },
        {
          heading: "Import and Export Requirements",
          text: "Regulatory requirements differ by country and product. Parties to a transaction should independently confirm applicable licensing, food-safety, labelling, customs, import and export requirements. No certification, licence or regulatory approval should be assumed unless expressly documented."
        },
        {
          heading: "External Links",
          text: "Links to third-party websites are provided for convenience only. We do not control or guarantee the accuracy, security or availability of external websites."
        },
        {
          heading: "Limitation of Responsibility",
          text: "To the extent permitted by applicable law, we disclaim warranties that may lawfully be disclaimed in relation to general website information. Nothing in this disclaimer excludes liability or legal rights that cannot lawfully be excluded."
        },
        {
          heading: "Contact",
          text: "If you identify an error or need clarification about information on this website, please contact us through the Contact page."
        }
      ]}
    />
  );
}
