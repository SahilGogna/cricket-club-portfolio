import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home, About, Achievements, Gallery, Sponsorship, SocialHub, Contact } from './pages';
import './styles/index.css';
import './pages/pages.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="sponsorship" element={<Sponsorship />} />
          <Route path="social" element={<SocialHub />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
