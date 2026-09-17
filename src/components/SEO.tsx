import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_STUDIO_NAME, SITE_URL, SALES_EMAIL, INDIA_CONTACT, CANADA_CONTACT } from '../config/siteMode';

interface SEOProps {
  title?: string;
  description: string;
  name?: string;
  type?: string;
  image?: string;
  url?: string;
  robots?: string;
}

export default function SEO({
  title,
  description,
  name = SITE_STUDIO_NAME,
  type = 'website',
  image = '/images/modular-capsule-desert-retreat-hero.png',
  url,
  robots = 'index, follow'
}: SEOProps) {
  const location = useLocation();
  const canonicalUrl = url ?? `${SITE_URL}${location.pathname}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const fullTitle = title ? `${name} — ${title}` : name;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={robots} />
      <meta name="theme-color" content="#FFFFFF" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <script type="application/ld+json">
        {JSON.stringify([
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name,
            url: SITE_URL,
            description,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name,
            url: SITE_URL,
            logo: `${SITE_URL}/images/rp-logo-full.png`,
            email: SALES_EMAIL,
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+91-98290-50002',
                contactType: 'customer service',
                areaServed: ['IN'],
                availableLanguage: ['en', 'hi'],
              },
              {
                '@type': 'ContactPoint',
                telephone: '+1-416-948-2577',
                contactType: 'customer service',
                areaServed: ['CA', 'US'],
                availableLanguage: ['en'],
              },
            ],
            address: [
              {
                '@type': 'PostalAddress',
                streetAddress: 'R55 NRI Colony',
                addressLocality: 'Jaipur',
                addressRegion: 'Rajasthan',
                addressCountry: 'IN',
              },
              {
                '@type': 'PostalAddress',
                streetAddress: '215 Port Darlington Rd',
                addressLocality: 'Bowmanville',
                addressRegion: 'ON',
                addressCountry: 'CA',
              },
            ],
          },
        ])}
      </script>
    </Helmet>
  );
}
