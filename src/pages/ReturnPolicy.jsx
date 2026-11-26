
import LegalPage from "./LegalPage";

export default function ReturnPolicy() {
  return (
    <LegalPage
      title="Return & Refund Policy"
      subtitle="How product concerns and return or refund requests are handled for business transactions."
      updated="25 October 2026"
      sections={[
        {
          heading: "Enquiry-Only Website",
          text: "This website does not sell products through online checkout and does not collect purchase payments through a shopping cart. Submitting an enquiry or receiving a quotation does not, by itself, create a completed sale."
        },
        {
          heading: "When a Transaction Is Confirmed",
          text: "If a business transaction is agreed separately, return, replacement, cancellation and refund arrangements will be governed by the written quotation, purchase order, sales contract or other confirmed terms, subject to applicable law."
        },
        {
          heading: "Reporting a Product Concern",
          text: "If products supplied under a confirmed transaction appear damaged, incorrect, short in quantity or inconsistent with agreed specifications, contact us promptly using the details provided in your transaction documents or our Contact page."
        },
        {
          heading: "Information to Provide",
          items: [
            "Your company name and contact details.",
            "The relevant quotation, invoice or purchase order reference, if available.",
            "Product name, quantity and batch or shipment details, where applicable.",
            "A description of the concern and supporting photographs or documents, if available."
          ]
        },
        {
          heading: "Assessment and Resolution",
          text: "We will review the information and may request inspection, documents or other reasonable evidence. Any accepted remedy, including replacement, credit or refund, will be determined under the agreed transaction terms and applicable law."
        },
        {
          heading: "Cancellation Requests",
          text: "Please submit cancellation requests in writing as soon as possible. Whether cancellation is possible, and whether any costs apply, depends on the stage of the transaction and the applicable written agreement."
        },
        {
          heading: "No Automatic Refund Promise",
          text: "A return or refund is not automatically guaranteed merely because a request is submitted. Nothing in this policy is intended to remove consumer or business rights that cannot lawfully be excluded."
        }
      ]}
    />
  );
}
