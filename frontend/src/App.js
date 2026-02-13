import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import MandellaBoats from './pages/MandellaBoats';
import Restoration from './pages/Restoration';
import Maintenance from './pages/Maintenance';
import Interior from './pages/Interior';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mandella-boats" element={<MandellaBoats />} />
          <Route path="/restoration" element={<Restoration />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;