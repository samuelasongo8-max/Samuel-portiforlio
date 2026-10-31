import { Link, useLocation } from 'react-router-dom';
import './RelatedPages.css';

const relatedPages = {
  '/': [
    { to: '/news', label: 'Read news and articles about Samuel’s work' },
    { to: '/music', label: 'Explore music education in Kakuma' },
    { to: '/contact', label: 'Discuss a collaboration with Samuel' },
  ],
  '/about': [
    { to: '/creative', label: 'Explore Samuel’s creative arts portfolio' },
    { to: '/music', label: 'Learn about music education in Kakuma' },
    { to: '/experience', label: 'Review Samuel’s professional experience' },
  ],
  '/creative': [
    { to: '/projects', label: 'Browse creative and technology projects' },
    { to: '/music', label: 'Explore music education programs' },
    { to: '/stories', label: 'Read stories about art and community' },
  ],
  '/music': [
    { to: '/ambassador', label: 'Learn about Samuel’s TSF ambassador work' },
    { to: '/impact', label: 'See community impact in Kakuma' },
    { to: '/creative', label: 'Explore creative arts and visual storytelling' },
    { to: '/news', label: 'Read articles about music and community work' },
  ],
  '/development': [
    { to: '/projects', label: 'Browse Samuel’s portfolio projects' },
    { to: '/impact', label: 'See technology in community initiatives' },
    { to: '/contact', label: 'Discuss a web development collaboration' },
  ],
  '/projects': [
    { to: '/creative', label: 'Explore creative arts projects' },
    { to: '/development', label: 'See web development work' },
    { to: '/impact', label: 'Learn about community impact projects' },
  ],
  '/impact': [
    { to: '/auvd', label: 'Learn about AUVD programs' },
    { to: '/music', label: 'Explore music education in Kakuma' },
    { to: '/projects', label: 'Browse projects supporting communities' },
  ],
  '/auvd': [
    { to: '/impact', label: 'Explore community impact work' },
    { to: '/music', label: 'Learn about AUVD music education' },
    { to: '/ambassador', label: 'Read about music education outreach' },
  ],
  '/ambassador': [
    { to: '/music', label: 'Explore music education programs' },
    { to: '/impact', label: 'Learn about community development work' },
    { to: '/contact', label: 'Contact Samuel about a partnership' },
  ],
  '/experience': [
    { to: '/about', label: 'Read Samuel’s background and approach' },
    { to: '/projects', label: 'Browse selected portfolio projects' },
    { to: '/contact', label: 'Discuss a collaboration with Samuel' },
  ],
  '/stories': [
    { to: '/creative', label: 'Explore Samuel’s creative arts work' },
    { to: '/news', label: 'Read news and articles' },
    { to: '/music', label: 'Learn about music education programs' },
    { to: '/impact', label: 'See community impact initiatives' },
  ],
  '/contact': [
    { to: '/about', label: 'Learn more about Samuel Asongo' },
    { to: '/projects', label: 'Browse projects before reaching out' },
    { to: '/music', label: 'Explore music education partnerships' },
  ],
  '/news': [
    { to: '/stories', label: 'Read stories about art and community' },
    { to: '/music', label: 'Explore music education programs' },
    { to: '/creative', label: 'Browse visual arts and creative work' },
  ],
};

export default function RelatedPages() {
  const { pathname } = useLocation();
  const links =
    relatedPages[pathname] ||
    (pathname.startsWith('/news/')
      ? [
          { to: '/news', label: 'Browse all news and articles' },
          { to: '/stories', label: 'Read Samuel’s stories and reflections' },
          { to: '/music', label: 'Explore music education in Kakuma' },
        ]
      : null);

  if (!links) return null;

  return (
    <nav className="related-pages" aria-labelledby="related-pages-title">
      <h2 id="related-pages-title">Explore Related Pages</h2>
      <ul>
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
