import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Flame } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    const el = document.getElementById('home-intro');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-10 overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background Hero Imagery with Cinematic Dark Tint & Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=85"
          alt="Ember and Spice contemporary dining ambience and open hearth"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse-gentle transition-transform duration-1000"
          fetchPriority="high"
          loading="eager"
        />
        {/* Layered cinematic scrim gradients to guarantee text legibility without harsh flat dark blocks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/75 to-[#0A0A0C]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0A0A0C]/60 to-[#0A0A0C]" />
        {/* Subtle warm ember glow overlay in top center */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#C89347]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto flex flex-col items-center">
        {/* Editorial Subtitle Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16181D]/80 border border-[#C89347]/30 text-[#C89347] text-[11px] sm:text-xs font-medium tracking-[0.25em] uppercase mb-5 sm:mb-6 backdrop-blur-sm shadow-lg">
          <Flame className="w-3.5 h-3.5 text-[#DFA85B]" />
          <span>Contemporary Malaysian Gastronomy • Bangsar, KL</span>
        </div>

        {/* Restaurant Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#EDE6D8] font-medium leading-[1.08] mb-5 sm:mb-6">
          Malaysian flavours, <br />
          <span className="italic font-light text-[#C89347] drop-shadow-md">
            reimagined.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="max-w-2xl text-xs sm:text-base md:text-lg text-[#EDE6D8]/80 font-light leading-relaxed mb-8 sm:mb-10 tracking-wide">
          Centuries of Malay, Peranakan, and indigenous heritage recipes forged over open mangrove charcoal hearths. Where heirloom spice pastes meet contemporary culinary precision.
        </p>

        {/* Dual Call-To-Action Buttons using React Router */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md">
          <Link
            to="/reservations"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 text-xs font-semibold tracking-[0.2em] uppercase bg-[#C89347] text-[#0A0A0C] hover:bg-[#DFA85B] transition-all duration-300 rounded-sm shadow-xl hover:shadow-[#C89347]/20 active:scale-95 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89347]"
          >
            Reserve a Table
          </Link>

          <Link
            to="/menu"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#EDE6D8] border border-white/20 hover:border-[#C89347] hover:text-[#C89347] bg-[#16181D]/40 backdrop-blur-sm transition-all duration-300 rounded-sm active:scale-95 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89347]"
          >
            Explore Our Menu
          </Link>
        </div>
      </div>

      {/* Highlights Bar & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 sm:mt-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 py-3 sm:py-3.5 px-4 sm:px-6 rounded-sm bg-[#14161A]/70 backdrop-blur-md border border-white/5 text-[11px] sm:text-xs text-[#A39E93]">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C89347] shrink-0" />
            <span className="text-[#EDE6D8]/90 font-medium tracking-wide">Open Charcoal Hearth</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C89347] shrink-0" />
            <span className="text-[#EDE6D8]/90 font-medium tracking-wide">Pork-Free • Halal Meats</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C89347] shrink-0" />
            <span className="text-[#EDE6D8]/90 font-medium tracking-wide">Jalan Telawi, Bangsar</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C89347] shrink-0" />
            <span className="text-[#EDE6D8]/90 font-medium tracking-wide">Lunch & Dinner Service</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-4">
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center gap-0.5 text-[#A39E93] hover:text-[#C89347] transition-colors focus:outline-none"
            aria-label="Scroll down to explore page"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase font-sans">Discover More</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#C89347]" />
          </button>
        </div>
      </div>
    </section>
  );
}
