import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  SiteLayout  from './components/SiteLayout.jsx';
import  Home  from './pages/Home.jsx';
import  About  from './pages/About.jsx';
import  Services  from './pages/Services.jsx';
import  Portfolio  from './pages/Portfolio.jsx';
import { Contact } from './pages/Contact.jsx';
import ImageProtection from './components/ImageProtection.jsx';

export default function App() {
  return (
    <>
      <ImageProtection />

      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/" element={<div>Hello World</div>} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
