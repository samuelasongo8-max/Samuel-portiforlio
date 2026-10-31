import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ShareButtons from '../../components/ShareButtons';
import { newsArticles } from '../../utils/newsArticles';
import { pageSeo } from '../../utils/pageSeo';
import { setPageMeta } from '../../utils/seo';
import './News.css';

export default function News() {
  const { slug } = useParams();
  const article = newsArticles.find((item) => item.slug === slug);
  const seoKey = article
    ? Object.keys(pageSeo).find((key) => pageSeo[key].path === article.path)
    : 'news';

  useEffect(() => {
    setPageMeta(seoKey);
  }, [seoKey]);

  if (slug && !article) {
    return (
      <section className="news-page news-not-found">
        <div className="container">
          <h1>Article not found</h1>
          <p>That article is not available. Browse the latest news and articles.</p>
          <Link to="/news">View news and articles</Link>
        </div>
      </section>
    );
  }

  if (article) {
    return (
      <article className="news-page news-article">
        <header className="news-hero">
          <div className="container">
            <p className="news-kicker"><Link to="/news">News and Articles</Link></p>
            <h1>{article.title}</h1>
            <p className="subtitle">{article.description}</p>
          </div>
        </header>
        <div className="container news-article-body">
          {article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <ShareButtons title={article.title} />
          <p><Link to="/news">Read more articles</Link></p>
        </div>
      </article>
    );
  }

  return (
    <div className="news-page">
      <header className="news-hero">
        <div className="container">
          <h1>News and Articles</h1>
          <p className="subtitle">
            Perspectives on music education, visual arts, and community work in
            Kakuma, Kenya.
          </p>
        </div>
      </header>
      <section className="news-list container" aria-label="Articles">
        {newsArticles.map((item) => (
          <article className="news-card" key={item.slug}>
            <h2><Link to={item.path}>{item.title}</Link></h2>
            <p>{item.description}</p>
            <Link to={item.path}>Read the article</Link>
          </article>
        ))}
        <ShareButtons title="News and articles by Samuel Asongo" />
      </section>
    </div>
  );
}
