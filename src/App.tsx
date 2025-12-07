import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import CounsellingButton from './components/CounsellingButton.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Chapters from './pages/Chapters.tsx';
import Programmes from './pages/Programmes.tsx';
import Resources from './pages/Resources.tsx';
import MediaGallery from './pages/MediaGallery.tsx';
import Donate from './pages/Donate.tsx';
import Contact from './pages/Contact.tsx';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/media" element={<MediaGallery />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <CounsellingButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
