
import LegalPage from "./LegalPage";

export default function Grievance() {
  return (
    <LegalPage
      title="Grievance & Complaints"
      subtitle="A clear process for raising concerns about our website, communications or confirmed business transactions."
      updated="25 October 2026"
      sections={[
        {
          heading: "Our Approach",
          text: "We aim to handle complaints professionally and fairly. If you experience an issue with our website, a business enquiry or a separately confirmed transaction, please let us know so it can be reviewed."
        },
        {
          heading: "What You Can Raise",
          items: [
            "Website errors or inaccessible information.",
            "Concerns about how a business enquiry was handled.",
            "Questions about a quotation or confirmed transaction.",
            "Product, shipment or documentation concerns relating to a confirmed agreement.",
            "Privacy or other website-related concerns."
          ]
        },
        {
          heading: "How to Submit a Complaint",
          text: "Use the Contact page on our website. Clearly describe the issue and state that your message is a complaint or grievance. If the matter relates to a transaction, include the relevant quotation, invoice, purchase order or shipment reference where available."
        },
        {
          heading: "Information to Include",
          items: [
            "Your name and preferred contact details.",
            "Your company name, if the complaint is business-related.",
            "A clear description of the concern and relevant dates.",
            "Supporting documents or correspondence, where available.",
            "The resolution you are requesting, if known."
          ]
        },
        {
          heading: "Review Process",
          text: "We will review the information provided and may contact you for clarification or supporting documents. We aim to respond within a reasonable period, but a specific response deadline is not guaranteed by this policy. Complex matters may take longer to assess."
        },
        {
          heading: "Privacy and Confidentiality",
          text: "Please provide only the information necessary to assess your complaint. Information submitted will be handled in accordance with our Privacy Policy and applicable law."
        },
        {
          heading: "If the Matter Remains Unresolved",
          text: "If you are dissatisfied with the response, you may explain why and request a further review through the same Contact page. Any statutory rights or available remedies under applicable law remain unaffected."
        },
        {
          heading: "Grievance Contact Details",
          text: "Please use the Contact page until the company publishes a dedicated grievance contact. Do not assume that a specific grievance officer, email address or response deadline exists unless it has been formally provided by the company."
        }
      ]}
    />
  );
}
