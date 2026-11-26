
import { Helmet } from "react-helmet-async";
import siteConfig from "./siteConfig";

export default function SEO({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.logo,
  type = "website",
  noIndex = false,
  schema,
}) {
  const canonicalUrl = new URL(path, siteConfig.url).href;
  const imageUrl = new URL(image, siteConfig.url).href;

  return (
    <Helmet>
      <title>{title} | {siteConfig.name}</title>

      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta
        name="robots"
        content={
          noIndex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large"
        }
      />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={`${title} | ${siteConfig.name}`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${siteConfig.name}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
