import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://raywerthi.com';
const PHONE = '+374 91 553 822';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl = `${SITE_URL}/`,
  ogImage = `${SITE_URL}/og-image.jpg`,
}) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Raywerthi Solutions Hub',
        description:
          'Премиальные солнцезащитные, фасадные и моторизованные системы HELLA, WAREMA, Silent Gliss.',
        url: SITE_URL,
        telephone: PHONE,
        areaServed: ['Armenia', 'Georgia', 'Caucasus'],
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        name: 'Raywerthi Solutions Hub',
        description:
          'Премиальные солнцезащитные, фасадные и моторизованные системы HELLA, WAREMA, Silent Gliss.',
        url: SITE_URL,
        telephone: PHONE,
        areaServed: ['Armenia', 'Georgia', 'Caucasus'],
        priceRange: '$$$',
        image: ogImage,
      },
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      <link rel="alternate" hrefLang="ru" href={`${SITE_URL}/`} />
      <link rel="alternate" hrefLang="hy" href={`${SITE_URL}/`} />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}/`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />

      <meta property="og:site_name" content="Raywerthi" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEO;
