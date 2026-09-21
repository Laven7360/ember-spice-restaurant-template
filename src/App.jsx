import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PageTransition from './components/PageTransition';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Page Views
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Experience from './pages/Experience';
import Reviews from './pages/Reviews';
import Reservations from './pages/Reservations';
import Visit from './pages/Visit';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0A0A0C] text-[#EDE6D8] font-sans selection:bg-[#C89347] selection:text-[#0A0A0C] flex flex-col justify-between relative overflow-x-hidden">
        {/* Persistent Sticky Navigation Header */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main id="main-content" className="flex-grow">
          <PageTransition>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="*" element={<NotFound />} />
          </PageTransition>
        </main>

        {/* Persistent Concierge Floating Button */}
        <FloatingWhatsApp />

        {/* Shared Site Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
