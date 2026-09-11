import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_STUDIO_NAME, SITE_URL } from '../config/siteMode';

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
      <meta name="theme-color" content="#173E5C" />
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
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name,
          url: SITE_URL,
          description,
        })}
      </script>
    </Helmet>
  );
}
