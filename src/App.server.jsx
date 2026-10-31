import AppContent from './AppContent';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Creative from './pages/Creative/Creative';
import Music from './pages/Music/Music';
import Development from './pages/Development/Development';
import Projects from './pages/Projects/Projects';
import Impact from './pages/Impact/Impact';
import AUVD from './pages/AUVD/AUVD';
import Ambassador from './pages/Ambassador/Ambassador';
import Experience from './pages/Experience/Experience';
import Stories from './pages/Stories/Stories';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';

export default function ServerAppContent() {
  return (
    <AppContent
      pages={{
        Home,
        About,
        Creative,
        Music,
        Development,
        Projects,
        Impact,
        AUVD,
        Ambassador,
        Experience,
        Stories,
        Contact,
        News,
      }}
    />
  );
}
