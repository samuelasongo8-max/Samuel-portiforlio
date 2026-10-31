import { useLocation } from 'react-router-dom';
import './ShareButtons.css';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://samuel-portiforlio.vercel.app';

export default function ShareButtons({ title }) {
  const { pathname } = useLocation();
  const shareUrl = new URL(pathname, siteUrl).href;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: 'Share on X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      label: 'Share on Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: 'Share on WhatsApp',
      href: `https://wa.me/?text=${encodeURIComponent(`${title} ${shareUrl}`)}`,
    },
    {
      label: 'Share on LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  return (
    <nav className="share-buttons" aria-label="Share this page">
      <span>Share:</span>
      {links.map(({ label, href }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ))}
    </nav>
  );
}
