import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import DishImage from '../components/DishImage';
import { diningExperiences, tastingMenus } from '../data/restaurantData';
import { Maximize2, X, ArrowRight, Users, Clock, Leaf } from 'lucide-react';

export default function Experience() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="pt-28 pb-16 sm:pb-20 bg-[#0A0A0C]">
      {/* Header Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 text-center">
        <SectionHeader
          eyebrow="Spaces & Atmosphere"
          title="The Dining Experience"
          description="From front-row counter seats facing live mangrove embers to secluded private alcoves, explore our dining settings in Bangsar."
        />
      </div>

      {/* Editorial Dining Experiences Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {diningExperiences.map((exp) => (
            <article
              key={exp.id}
              className="group rounded-sm bg-[#14161A] border border-white/5 hover:border-[#C89347]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image Container with Zoom & Lightbox Trigger */}
                <div
                  onClick={() => setSelectedItem(exp)}
                  className="relative aspect-[16/11] overflow-hidden bg-[#0A0A0C] cursor-pointer"
                >
                  <DishImage
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14161A] via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0A0A0C]/70 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[#EDE6D8] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C89347]" />
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C89347] font-semibold block mb-1">
                    {exp.subtitle}
                  </span>
                  <h3 className="font-serif text-xl text-[#EDE6D8] font-medium mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A39E93] font-light leading-relaxed mb-4">
                    {exp.desc}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] uppercase tracking-wider text-[#A39E93] bg-[#0A0A0C] px-2 py-0.5 rounded-xs border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/reservations"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#C89347] hover:text-[#DFA85B] transition-colors group"
                >
                  <span>Reserve this Ambience</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Private Dining Inquiry Card */}
        <div className="mt-14 p-8 rounded-sm bg-[#16181D] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl text-[#EDE6D8] font-medium">
              Private Events & Bespoke Tasting Menus
            </h3>
            <p className="text-xs sm:text-sm text-[#A39E93] font-light max-w-xl">
              Our Private Heritage Alcove is available for executive dinners, anniversaries, and curated multi-course wine pairings (up to 12 guests).
            </p>
          </div>
          <Link
            to="/reservations"
            className="px-6 py-3.5 text-xs font-semibold tracking-widest uppercase bg-[#C89347] hover:bg-[#DFA85B] text-[#0A0A0C] transition-colors rounded-sm shrink-0"
          >
            Inquire for Private Dining
          </Link>
        </div>
      </div>

      {/* ─── Tasting Menu Packages Section ──────────────────────────────────────── */}
      <section className="mt-20 sm:mt-24 py-16 sm:py-20 bg-[#111215] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase mb-2">
                <span className="w-5 h-px bg-[#C89347]" />
                <span>Curated Degustation Experiences</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#EDE6D8] font-medium tracking-tight">
                The Tasting Table
              </h2>
            </div>
            <p className="text-xs text-[#A39E93] max-w-sm font-light leading-relaxed">
              Surrender the decision to the kitchen. Our tasting menus are Chef Harith's most considered expression of the hearth — composed, sequenced, and served in full.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {tastingMenus.map((menu, index) => (
              <div
                key={menu.id}
                className={`relative rounded-sm border transition-all duration-300 flex flex-col overflow-hidden shadow-xl ${
                  index === 2
                    ? 'bg-[#1A1510] border-[#C89347]/40 shadow-[0_0_40px_rgba(200,147,71,0.08)]'
                    : 'bg-[#14161A] border-white/5 hover:border-[#C89347]/30'
                }`}
              >
                {/* Featured badge for degustation */}
                {index === 2 && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C89347] to-transparent" />
                )}

                <div className="p-6 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="mb-5">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#C89347] font-semibold block mb-1">
                          {menu.courses}-Course Menu
                        </span>
                        <h3 className="font-serif text-xl text-[#EDE6D8] font-medium leading-tight">
                          {menu.name}
                        </h3>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-[10px] text-[#A39E93] block">From</span>
                        <span className="font-serif text-xl font-bold text-[#C89347]">
                          RM {menu.pricePerPerson}
                        </span>
                        <span className="text-[10px] text-[#A39E93] block">per person</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#C89347]/80 italic font-serif">{menu.subtitle}</p>
                  </div>

                  <p className="text-xs text-[#A39E93] leading-relaxed font-light mb-5">
                    {menu.description}
                  </p>

                  {/* Course Highlights */}
                  <div className="mb-5 flex-1">
                    <span className="text-[10px] uppercase tracking-wider text-[#EDE6D8]/40 font-semibold block mb-3">
                      Course Highlights
                    </span>
                    <ul className="space-y-2">
                      {menu.courseHighlights.map((course, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] text-[#A39E93] font-light">
                          <span className="w-1 h-1 rounded-full bg-[#C89347] mt-1.5 shrink-0" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Beverage Pairing Note */}
                  <div className="flex items-start gap-2 p-3 rounded-sm bg-[#0A0A0C]/60 border border-white/5 mb-5">
                    <Leaf className="w-3.5 h-3.5 text-[#C89347] mt-0.5 shrink-0" />
                    <span className="text-[11px] text-[#A39E93] font-light leading-snug">
                      {menu.beveragePairing}
                    </span>
                  </div>

                  {/* Meta info */}
                  <div className="space-y-1.5 text-[11px] text-[#A39E93] mb-5">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#C89347]" />
                      <span>{menu.availability}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#C89347]" />
                      <span className="italic">{menu.note}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <Link
                    to="/reservations"
                    className={`block w-full py-3 text-center text-xs font-semibold tracking-widest uppercase rounded-sm transition-all ${
                      index === 2
                        ? 'bg-[#C89347] hover:bg-[#DFA85B] text-[#0A0A0C]'
                        : 'bg-[#1E2027] hover:bg-[#252831] text-[#EDE6D8] border border-white/10 hover:border-[#C89347]/30'
                    }`}
                  >
                    Enquire & Reserve
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[11px] text-[#A39E93] font-light mt-8 italic">
            All tasting menus are subject to availability and require advance reservation. Prices are per person excluding service charge.
          </p>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-[#14161A] border border-[#C89347]/30 rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#0A0A0C]/80 text-[#EDE6D8] hover:text-[#C89347] transition-colors focus:outline-none"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
              <DishImage
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>

            <div className="p-6 bg-[#16181D] border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C89347] font-semibold block mb-0.5">
                  {selectedItem.subtitle}
                </span>
                <h4 className="font-serif text-xl text-[#EDE6D8] font-medium">
                  {selectedItem.title}
                </h4>
                <p className="text-xs text-[#A39E93] mt-1 font-light max-w-xl">
                  {selectedItem.desc}
                </p>
              </div>

              <Link
                to="/reservations"
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#C89347] hover:bg-[#DFA85B] text-[#0A0A0C] rounded-sm transition-colors text-center shrink-0"
              >
                Book Table
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
