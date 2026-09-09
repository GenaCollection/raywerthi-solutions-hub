import React from 'react';
import { Head } from 'vite-react-ssg';

const SITE_URL = 'https://raywerthi.com';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl = `${SITE_URL}/`,
  ogImage = `${SITE_URL}/og-image.jpg`,
  jsonLd,
}) => {
  // Organization/LocalBusiness JSON-LD lives once, statically, in index.html —
  // it must not be duplicated here with different data (that caused conflicting
  // NAP/name signals across the two blocks). Per-page structured data (Service,
  // ItemList, etc.) can be passed via `jsonLd`.
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      {/* No hreflang alternates: RU/HY/EN share one URL (client-side toggle only),
          so there are no distinct per-language pages to declare yet. */}

      <meta property="og:site_name" content="RayWerThi" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Head>
  );
};

export default SEO;
