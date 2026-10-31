import { BrowserRouter } from 'react-router-dom';
import AppContent from './AppContent';
import { pages } from './routePages';

export default function App({ initialPage }) {
  const initialPages = initialPage
    ? { ...pages, [initialPage.name]: initialPage.component }
    : pages;

  return (
    <BrowserRouter>
      <AppContent pages={initialPages} />
    </BrowserRouter>
  );
}
