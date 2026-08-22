import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
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

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navigation />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/creative" element={<Creative />} />
            <Route path="/music" element={<Music />} />
            <Route path="/development" element={<Development />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/auvd" element={<AUVD />} />
            <Route path="/ambassador" element={<Ambassador />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
 
