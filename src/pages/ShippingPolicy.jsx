
import LegalPage from "./LegalPage";

export default function ShippingPolicy() {
  return (
    <LegalPage
      title="Shipping & Delivery Policy"
      subtitle="Information about delivery arrangements for enquiries and separately confirmed business transactions."
      updated="25 October 2026"
      sections={[
        {
          heading: "Website Enquiries",
          text: "Submitting an enquiry through this website does not book a shipment or initiate delivery. This website does not offer direct online ordering or checkout."
        },
        {
          heading: "Delivery Terms",
          text: "For confirmed transactions, delivery location, estimated schedule, shipping method, packaging, freight charges and responsibilities will be specified in the relevant quotation or written agreement."
        },
        {
          heading: "Domestic and International Shipments",
          text: "Availability and arrangements depend on the product, destination, shipment size, carrier and applicable restrictions. International shipments may require customs clearance, import permits, duties, taxes and other documentation."
        },
        {
          heading: "Delivery Estimates",
          text: "Any delivery timeline communicated during an enquiry or quotation should be treated as an estimate unless expressly confirmed otherwise in writing. Delays may occur due to carriers, customs, weather, inspections or other circumstances outside our reasonable control."
        },
        {
          heading: "Shipping Costs and Responsibilities",
          text: "Freight charges, insurance, customs duties, taxes and responsibility for shipment risks will be determined by the agreed transaction terms. Where applicable, the chosen Incoterms® rule and named place should be stated in the commercial documents."
        },
        {
          heading: "Inspection on Receipt",
          text: "Where a shipment is made, inspect the goods promptly on receipt. Record visible damage or shortages and notify the relevant contact within the time stated in the transaction documents. Preserve packaging and supporting evidence where possible."
        },
        {
          heading: "Address and Documentation",
          text: "Customers and business partners are responsible for providing accurate delivery details and documents required from them under the agreement. Incorrect or incomplete details may cause delays or additional charges."
        },
        {
          heading: "Questions About a Shipment",
          text: "For a confirmed shipment, please refer to your quotation, order confirmation or shipping documents and contact us through the details provided there."
        }
      ]}
    />
  );
}
