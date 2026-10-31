import { homeFaqs } from './homeFaqs.js';
import { pageSeo } from './pageSeo.js';
import { newsArticles } from './newsArticles.js';
import { stories } from './storyContent.js';

const socialProfiles = [
  'https://www.linkedin.com/in/samuel-asongo',
  'https://www.instagram.com/samuel.asongo',
  'https://github.com/samuelasongo',
];

export const getPersonSchema = (siteUrl) => ({
  '@type': 'Person',
  name: 'Samuel Asongo',
  jobTitle: 'Artist and Music Educator',
  description:
    'Samuel Asongo is an artist, music educator, full-stack developer, and community impact leader based in Kakuma, Kenya.',
  url: `${siteUrl}/`,
  image: `${siteUrl}/og-image.jpg`,
  sameAs: socialProfiles,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kakuma',
    addressCountry: 'KE',
  },
  knowsAbout: ['Music Education', 'African Art', 'Visual Arts'],
  affiliation: {
    '@type': 'Organization',
    name: 'Art and Unity for Vulnerable Development',
    alternateName: 'AUVD',
    url: `${siteUrl}/auvd`,
  },
});

export const getOrganizationSchema = (siteUrl) => ({
  '@type': 'Organization',
  name: 'Art and Unity for Vulnerable Development',
  alternateName: 'AUVD',
  description:
    'A community organization supporting creative arts, music education, and development programs in Kakuma, Kenya.',
  url: `${siteUrl}/auvd`,
  areaServed: {
    '@type': 'Place',
    name: 'Kakuma, Kenya',
  },
});

export const getHomeFaqSchema = () => ({
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
});

export const getStoryCreativeWorkSchema = (siteUrl) => ({
  '@type': 'ItemList',
  name: 'Stories by Samuel Asongo',
  itemListElement: stories.map((story, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'CreativeWork',
      name: story.title,
      creator: { '@type': 'Person', name: 'Samuel Asongo' },
      description: story.excerpt,
      url: `${siteUrl}/stories#${story.slug}`,
    },
  })),
});

const getLocalBusinessSchema = (siteUrl) => ({
  '@type': 'LocalBusiness',
  name: 'Samuel Asongo',
  description: 'Artist and music educator in Kakuma',
  url: `${siteUrl}/`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: 'Kakuma',
    addressRegion: 'Turkana County',
    addressCountry: 'KE',
  },
  telephone: null,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 3.7167,
    longitude: 34.85,
  },
  openingHours: 'Mo-Fr 08:00-17:00',
  priceRange: '$$',
});

const getArticleSchema = (siteUrl, article) => ({
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  articleBody: article.paragraphs.join('\n\n'),
  author: {
    '@type': 'Person',
    name: 'Samuel Asongo',
    url: `${siteUrl}/`,
  },
  image: `${siteUrl}/og-image.jpg`,
  mainEntityOfPage: `${siteUrl}${article.path}`,
  publisher: {
    '@type': 'Organization',
    name: 'Samuel Asongo',
    url: `${siteUrl}/`,
  },
});

const getContactPageSchema = (siteUrl) => ({
  '@type': 'ContactPage',
  name: 'Contact Samuel Asongo',
  url: `${siteUrl}/contact`,
  mainEntity: {
    '@type': 'Person',
    name: 'Samuel Asongo',
    email: 'samuelaasongoinfoo@gmail.com',
  },
});

export const getPageSchema = (siteUrl, pathname) => {
  const article = newsArticles.find((item) => item.path === pathname);
  const breadcrumb = pathname === '/'
    ? null
    : {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
          ...(article
            ? [
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'News',
                  item: `${siteUrl}/news`,
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: article.title,
                  item: `${siteUrl}${pathname}`,
                },
              ]
            : [{
                '@type': 'ListItem',
                position: 2,
                name:
                  Object.values(pageSeo).find((page) => page.path === pathname)?.label ||
                  pathname.slice(1).replaceAll('-', ' '),
                item: `${siteUrl}${pathname}`,
              }]),
        ],
      };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', name: 'Samuel Asongo', url: `${siteUrl}/` },
      getPersonSchema(siteUrl),
      getOrganizationSchema(siteUrl),
      ...(pathname === '/' ? [getLocalBusinessSchema(siteUrl)] : []),
      ...(breadcrumb ? [breadcrumb] : []),
      ...(pathname === '/' ? [getHomeFaqSchema()] : []),
      ...(pathname === '/stories' ? [getStoryCreativeWorkSchema(siteUrl)] : []),
      ...(article ? [getArticleSchema(siteUrl, article)] : []),
      ...(pathname === '/contact' ? [getContactPageSchema(siteUrl)] : []),
    ],
  };
};
