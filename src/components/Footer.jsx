import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Globe, ArrowUp, Info } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-white/5 pt-12 pb-8 sm:pt-14 sm:pb-10 text-[#A39E93] relative" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 sm:pb-12 border-b border-white/5">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full bg-[#16181D] border border-[#C89347]/40 flex items-center justify-center text-[#C89347] group-hover:border-[#C89347] transition-colors">
                <Flame className="w-4 h-4 text-[#C89347]" />
              </div>
              <span className="font-serif tracking-[0.2em] text-xl font-bold uppercase text-[#EDE6D8] group-hover:text-[#C89347] transition-colors">
                Ember <span className="text-[#C89347]">&</span> Spice
              </span>
            </Link>

            <p className="text-xs sm:text-sm font-light leading-relaxed text-[#A39E93] max-w-sm">
              Contemporary Malaysian gastronomy forged over open mangrove charcoal hearths in Bangsar, Kuala Lumpur. Malaysian flavours, reimagined.
            </p>

            <div className="text-[11px] text-[#C89347] font-medium pt-1">
              {restaurantInfo.dietaryNote}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={restaurantInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#14161A] border border-white/10 flex items-center justify-center text-[#EDE6D8] hover:text-[#C89347] hover:border-[#C89347] transition-colors"
                aria-label="Instagram (Demonstration)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={restaurantInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#14161A] border border-white/10 flex items-center justify-center text-[#EDE6D8] hover:text-[#C89347] hover:border-[#C89347] transition-colors"
                aria-label="Facebook (Demonstration)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.456 5 15.58 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z" />
                </svg>
              </a>
              <a
                href={restaurantInfo.socials.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#14161A] border border-white/10 flex items-center justify-center text-[#EDE6D8] hover:text-[#C89347] hover:border-[#C89347] transition-colors"
                aria-label="TripAdvisor (Demonstration)"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#EDE6D8] font-semibold">
              Exploration
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <Link to="/" className="hover:text-[#C89347] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C89347] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#C89347] transition-colors">
                  Full Menu
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-[#C89347] transition-colors">
                  The Experience
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-[#C89347] transition-colors">
                  Reviews & Press
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-[#C89347] text-[#C89347] font-medium transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/visit" className="hover:text-[#C89347] transition-colors">
                  Visit & Hours
                </Link>
              </li>
            </ul>
          </div>

          {/* Dining Service Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#EDE6D8] font-semibold">
              Service Hours
            </h4>
            <div className="space-y-2 text-xs font-light">
              <div>
                <span className="text-[#EDE6D8] block font-medium">Tuesday – Thursday</span>
                <span className="text-[11px] block">Lunch: 12:00 PM – 3:00 PM</span>
                <span className="text-[11px] block">Dinner: 6:00 PM – 10:30 PM</span>
              </div>
              <div>
                <span className="text-[#EDE6D8] block font-medium">Friday – Sunday</span>
                <span className="text-[11px] block">Lunch: 12:00 PM – 3:30 PM</span>
                <span className="text-[11px] block">Dinner: 6:00 PM – 11:30 PM</span>
              </div>
              <div>
                <span className="text-[#EDE6D8] block font-medium">Monday</span>
                <span className="text-[11px] text-[#C89347]">Closed for Culinary R&D</span>
              </div>
            </div>
          </div>

          {/* Bangsar Address & Inquiries */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#EDE6D8] font-semibold">
              The Restaurant
            </h4>
            <address className="not-italic text-xs font-light space-y-2 leading-relaxed">
              <p>{restaurantInfo.address}</p>
              <p>
                <span className="text-[#EDE6D8] block font-medium">Phone:</span>
                <a href={restaurantInfo.phoneHref} className="hover:text-[#C89347] transition-colors">
                  {restaurantInfo.phone}
                </a>
              </p>
              <p>
                <span className="text-[#EDE6D8] block font-medium">Reservations:</span>
                <a href={`mailto:${restaurantInfo.email}`} className="hover:text-[#C89347] transition-colors">
                  {restaurantInfo.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Subtle Portfolio Project Disclaimer Box */}
        <div className="pt-6 pb-2 text-center sm:text-left">
          <p className="text-[11px] text-[#71717A] flex items-center justify-center sm:justify-start gap-1.5 font-light">
            <Info className="w-3.5 h-3.5 text-[#C89347]/70 shrink-0" />
            <span>{restaurantInfo.disclaimer}</span>
          </p>
        </div>

        {/* Bottom Bar: Copyright, Back-to-Top, and Portfolio Credit */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>© {new Date().getFullYear()} Ember & Spice. Designed for contemporary hospitality.</p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#A39E93]">
              Freelance Web Development Portfolio Project
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#14161A] hover:bg-[#1E2027] text-[#A39E93] hover:text-[#C89347] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89347]"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
