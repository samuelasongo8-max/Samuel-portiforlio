/**
 * SEO Utility Functions
 * Helps manage meta tags and structured data for each page
 */

export const setPageMeta = (title, description, keywords, image = '/images/profile/samuel-portrait.png', path = '/') => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://www.refugepoint.org';
  const canonicalUrl = `${siteUrl}${path === '/' ? '' : path}`;

  document.title = title;
  
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);

  // Update keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', keywords);

  updateOrCreateMeta('og:title', title);
  updateOrCreateMeta('og:description', description);
  updateOrCreateMeta('og:image', image.startsWith('http') ? image : `${siteUrl}${image}`);
  updateOrCreateMeta('og:type', 'website');
  updateOrCreateMeta('og:url', canonicalUrl);

  updateOrCreateMeta('twitter:card', 'summary_large_image');
  updateOrCreateMeta('twitter:title', title);
  updateOrCreateMeta('twitter:description', description);
  updateOrCreateMeta('twitter:image', image.startsWith('http') ? image : `${siteUrl}${image}`);
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', canonicalUrl);
};

const updateOrCreateMeta = (property, content) => {
  let meta = document.querySelector(`meta[property="${property}"]`) || 
             document.querySelector(`meta[name="${property}"]`);
  
  if (!meta) {
    meta = document.createElement('meta');
    const isProperty = property.startsWith('og:') || property.startsWith('twitter:');
    if (isProperty) {
      meta.setAttribute('property', property);
    } else {
      meta.setAttribute('name', property);
    }
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

export const addStructuredData = (schema) => {
  const existing = document.querySelector('script[type="application/ld+json"]');
  if (existing) {
    existing.remove();
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

export const getPersonSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Samuel Asongo',
    jobTitle: [
      'Chief Executive Officer',
      'Artist',
      'Music Educator',
      'Full-Stack Web Developer',
      'Social Impact Leader'
    ],
    image: '/images/profile/samuel-portrait.png',
    sameAs: [
      'https://www.linkedin.com/in/samuel-asongo',
      'https://www.instagram.com/samuel.asongo',
      'https://github.com/samuelasongo'
    ],
    affiliation: [
      {
        '@type': 'Organization',
        name: 'Art and Unity for Vulnerable Development (AUVD)'
      },
      {
        '@type': 'Organization',
        name: 'Transylvanian Symphony Foundation'
      }
    ],
    location: {
      '@type': 'Place',
      name: 'Kakuma Refugee Camp, Kenya'
    }
  };
};

export const getOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Art and Unity for Vulnerable Development',
    alternateName: 'AUVD',
    url: 'https://www.auvd.org',
    logo: '/images/profile/samuel-portrait.png',
    description: 'Creating through art. Educating through music. Building through technology.',
    founder: 'Samuel Asongo',
    location: {
      '@type': 'Place',
      name: 'Kakuma Refugee Camp, Kenya'
    }
  };
};

export const getWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Samuel Asongo',
    url: 'https://www.refugepoint.org',
    description: 'Personal portfolio and digital brand of Samuel Asongo - Artist, Music Educator, Full-Stack Developer, and Social Impact Leader'
  };
};
