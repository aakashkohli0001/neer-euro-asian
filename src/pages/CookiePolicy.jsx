
import LegalPage from "./LegalPage";

export default function CookiePolicy() {
  return (
    <LegalPage
      title="Cookie Policy"
      subtitle="Information about cookies and similar technologies that may be used when visiting our website."
      updated="25 October 2026"
      sections={[
        {
          heading: "What Are Cookies?",
          text: "Cookies are small text files that websites may store on your device. Similar technologies can help a website remember preferences, support functionality or understand how visitors use its pages."
        },
        {
          heading: "How Cookies May Be Used",
          items: [
            "Essential functions, such as maintaining security or basic website operation.",
            "Remembering preferences where that functionality is enabled.",
            "Understanding website performance if analytics tools are installed.",
            "Supporting embedded third-party content if it is used on a page."
          ]
        },
        {
          heading: "Technologies Actually in Use",
          text: "The cookies and technologies used depend on the website configuration and any third-party services enabled. We do not claim that analytics, advertising or optional tracking cookies are active unless they have actually been implemented."
        },
        {
          heading: "Third-Party Services",
          text: "Embedded content or third-party services may set their own cookies or collect technical information under their own policies. Review the relevant provider's privacy information when using those services."
        },
        {
          heading: "Managing Cookies",
          text: "You can generally review, block or delete cookies through your browser settings. Blocking certain cookies may affect how parts of a website work. Where consent is legally required for non-essential cookies, the website should obtain consent before using them."
        },
        {
          heading: "Changes to This Policy",
          text: "We may update this policy if website functionality, cookie use or applicable requirements change. Please check this page periodically for the latest version."
        }
      ]}
    />
  );
}
