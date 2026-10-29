import  SiteLayout  from './components/SiteLayout.jsx';
import  Home  from './pages/Home.jsx';
import  About  from './pages/About.jsx';
import  Services  from './pages/Services.jsx';
import  Portfolio  from './pages/Portfolio.jsx';
import { Contact } from './pages/Contact.jsx';
import ImageProtection from './components/ImageProtection.jsx';
import Packages from './components/Packages.jsx';
import Loader from './components/Loader.jsx';

import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function AppContent() {
 const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {loading && <Loader />}

      <ImageProtection />

      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

