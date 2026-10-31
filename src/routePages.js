import { lazy } from 'react';

const pageLoaders = {
  Home: () => import('./pages/Home/Home'),
  About: () => import('./pages/About/About'),
  Creative: () => import('./pages/Creative/Creative'),
  Music: () => import('./pages/Music/Music'),
  Development: () => import('./pages/Development/Development'),
  Projects: () => import('./pages/Projects/Projects'),
  Impact: () => import('./pages/Impact/Impact'),
  AUVD: () => import('./pages/AUVD/AUVD'),
  Ambassador: () => import('./pages/Ambassador/Ambassador'),
  Experience: () => import('./pages/Experience/Experience'),
  Stories: () => import('./pages/Stories/Stories'),
  Contact: () => import('./pages/Contact/Contact'),
  News: () => import('./pages/News/News'),
};

export const pages = Object.fromEntries(
  Object.entries(pageLoaders).map(([name, loadPage]) => [name, lazy(loadPage)])
);

const routePages = {
  '/': 'Home',
  '/about': 'About',
  '/creative': 'Creative',
  '/music': 'Music',
  '/development': 'Development',
  '/projects': 'Projects',
  '/impact': 'Impact',
  '/auvd': 'AUVD',
  '/ambassador': 'Ambassador',
  '/experience': 'Experience',
  '/stories': 'Stories',
  '/contact': 'Contact',
  '/news': 'News',
};

export function preloadRoute(pathname) {
  const route = pathname.startsWith('/news/') ? '/news' : pathname;
  const pageName = routePages[route];
  return pageName
    ? pageLoaders[pageName]().then((module) => ({
        name: pageName,
        component: module.default,
      }))
    : Promise.resolve(null);
}
