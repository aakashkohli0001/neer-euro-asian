
import LegalPage from "./LegalPage";

export default function CopyrightPolicy() {
  return (
    <LegalPage
      title="Copyright Policy"
      subtitle="Guidance on the use and protection of content published on our website."
      updated="25 October 2026"
      sections={[
        {
          heading: "Ownership of Website Content",
          text: "Unless otherwise stated, website text, original graphics, page layouts, branding and other original materials are owned by or used with permission by their respective rights holders. All rights remain subject to applicable law."
        },
        {
          heading: "Permitted Use",
          text: "You may browse the website and share links to its publicly accessible pages for lawful informational purposes. This does not grant permission to reproduce or commercially exploit our content."
        },
        {
          heading: "Restricted Activities",
          items: [
            "Copying or republishing website content without permission.",
            "Using our name, logo or branding in a way that suggests an unauthorised association.",
            "Removing copyright notices or misrepresenting the ownership of content."
          ]
        },
        {
          heading: "Product Images and Third-Party Materials",
          text: "Some product images, logos, names or other materials may belong to manufacturers, suppliers or other third parties. Their inclusion does not necessarily mean that we own or endorse those materials."
        },
        {
          heading: "Requesting Permission",
          text: "If you wish to reproduce or use material from this website, contact us through the Contact page and identify the content, intended use and where it will appear. Permission must be obtained where required."
        },
        {
          heading: "Reporting a Copyright Concern",
          text: "If you believe material on this website infringes your copyright, please send a detailed notice through our Contact page. Include the material's location, a description of the work, your contact details and information reasonably establishing your rights."
        },
        {
          heading: "Review and Removal",
          text: "We may review properly supported reports and take appropriate action where warranted. Submitting a report does not guarantee removal, and we may request further information before acting."
        }
      ]}
    />
  );
}
