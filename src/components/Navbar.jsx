import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Flame, Phone, Clock, MapPin } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll state for frosted background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Experience', path: '/experience' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Visit', path: '/visit' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0C]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-[#0A0A0C]/90 via-[#0A0A0C]/50 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Crest */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89347] rounded-sm"
          aria-label="Ember & Spice — Return to Home"
        >
          <div className="w-10 h-10 rounded-full bg-[#16181D] border border-[#C89347]/40 flex items-center justify-center text-[#C89347] transition-transform duration-300 group-hover:scale-105 group-hover:border-[#C89347]">
            <Flame className="w-5 h-5 transition-colors duration-300 group-hover:text-[#DFA85B]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.2em] text-lg sm:text-xl font-bold uppercase text-[#EDE6D8] group-hover:text-[#C89347] transition-colors">
              Ember <span className="text-[#C89347] font-normal">&</span> Spice
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#A39E93] uppercase font-sans">
              Kuala Lumpur
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.2em] transition-all duration-200 relative py-1 focus:outline-none focus-visible:text-[#C89347] ${
                  isActive
                    ? 'text-[#C89347] font-semibold'
                    : 'text-[#EDE6D8]/80 hover:text-[#EDE6D8]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C89347] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action Button & Reservation CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={restaurantInfo.phoneHref}
            className="hidden xl:flex items-center gap-2 text-xs text-[#A39E93] hover:text-[#EDE6D8] transition-colors"
            title="Restaurant Direct Desk"
          >
            <Phone className="w-3.5 h-3.5 text-[#C89347]" />
            <span>{restaurantInfo.phone}</span>
          </a>

          <Link
            to="/reservations"
            className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase text-[#0A0A0C] bg-[#C89347] hover:bg-[#DFA85B] transition-all duration-300 rounded-sm shadow-md hover:shadow-[#C89347]/20 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C89347] focus-visible:ring-offset-[#0A0A0C]"
          >
            Reserve a Table
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex sm:hidden items-center gap-2.5">
          <Link
            to="/reservations"
            className="px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#0A0A0C] bg-[#C89347] rounded-sm"
          >
            Reserve
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#EDE6D8] hover:text-[#C89347] transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89347]"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-x-0 top-[58px] bg-[#0A0A0C]/95 backdrop-blur-xl border-b border-white/10 px-6 pt-5 pb-8 transition-all duration-300 sm:hidden ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto shadow-2xl'
            : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-base font-serif tracking-widest transition-colors py-2 border-b border-white/5 flex items-center justify-between ${
                  isActive ? 'text-[#C89347] font-semibold' : 'text-[#EDE6D8] hover:text-[#C89347]'
                }`
              }
            >
              <span>{link.name}</span>
              <span className="text-xs text-[#C89347] font-sans">→</span>
            </NavLink>
          ))}

          <div className="pt-4 flex flex-col gap-3">
            <Link
              to="/reservations"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-xs font-semibold tracking-widest uppercase bg-[#C89347] text-[#0A0A0C] rounded-sm hover:bg-[#DFA85B] transition-colors"
            >
              Reserve a Table
            </Link>

            <div className="flex items-center justify-between text-[11px] text-[#A39E93] pt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C89347]" />
                Bangsar, Kuala Lumpur
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C89347]" />
                Lunch & Dinner
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
