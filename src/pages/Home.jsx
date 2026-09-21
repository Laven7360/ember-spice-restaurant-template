import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import DishImage from '../components/DishImage';
import { featuredDishes, testimonials, diningExperiences } from '../data/restaurantData';
import { ArrowRight, Star, Clock, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Short "Our Story" Preview */}
      <section id="home-intro" className="py-16 sm:py-20 bg-[#0A0A0C] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase">
                <span className="w-5 h-px bg-[#C89347]" />
                <span>The Hearth & Soul</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#EDE6D8] font-medium tracking-tight">
                Ancient Rempah, Forged Over Mangrove Embers
              </h2>
              <p className="text-xs sm:text-sm text-[#EDE6D8]/80 font-light leading-relaxed">
                Founded in Bangsar, Kuala Lumpur, <strong className="text-[#EDE6D8] font-medium">Ember & Spice</strong> was conceived to celebrate the slow, aromatic mastery of Malaysian cuisine. We shun electric shortcuts: our pastes are pounded on granite mortars, and every prime cut is touched by live mangrove wood coals.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C89347] hover:text-[#DFA85B] transition-colors group"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=80"
                  alt="Executive Chef preparing food over charcoal grill"
                  className="w-full h-[320px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-[#C89347] bg-[#0A0A0C]/80 backdrop-blur-sm px-3.5 py-2 rounded-sm border border-white/5">
                  <span className="uppercase tracking-wider">Chef Harith Iskandar Tan</span>
                  <span className="text-[#EDE6D8]">Open Kitchen Brigade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Signature Dishes Preview (3 featured dishes) */}
      <section className="py-16 sm:py-20 bg-[#111215] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase mb-2">
                <span className="w-5 h-px bg-[#C89347]" />
                <span>Culinary Signatures</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#EDE6D8] font-medium tracking-tight">
                Crafted in Limited Daily Quantities
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C89347] hover:text-[#DFA85B] transition-colors group self-start md:self-auto"
            >
              <span>Explore Full Menu</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredDishes.slice(0, 3).map((dish) => (
              <article
                key={dish.id}
                className="group rounded-sm bg-[#16181D] border border-white/5 hover:border-[#C89347]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#0A0A0C]">
                    <DishImage
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16181D] via-transparent to-transparent opacity-80" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] tracking-widest uppercase font-semibold text-[#0A0A0C] bg-[#C89347] px-2.5 py-0.5 rounded-sm shadow-md">
                        {dish.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#0A0A0C]/90 backdrop-blur-sm border border-white/10 px-2.5 py-0.5 rounded-sm">
                      <span className="text-xs text-[#A39E93] mr-1">RM</span>
                      <span className="font-serif text-base font-bold text-[#EDE6D8]">{dish.price}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif text-lg text-[#EDE6D8] font-medium group-hover:text-[#C89347] transition-colors">
                      {dish.name}
                    </h3>
                    <span className="block text-xs font-serif italic text-[#A39E93] mt-0.5 mb-2.5">
                      {dish.malayName}
                    </span>
                    <p className="text-xs text-[#EDE6D8]/70 leading-relaxed font-light line-clamp-2 mb-3">
                      {dish.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to="/menu"
                    className="block w-full text-center py-2 text-[11px] uppercase tracking-[0.15em] font-medium text-[#EDE6D8] bg-[#1E2027] hover:bg-[#C89347] hover:text-[#0A0A0C] border border-white/10 hover:border-[#C89347] transition-all rounded-sm"
                  >
                    View in Anthology Menu
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Dining Experience Preview */}
      <section className="py-16 sm:py-20 bg-[#0A0A0C] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase mb-2">
                <span className="w-5 h-px bg-[#C89347]" />
                <span>Atmospheric Spaces</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#EDE6D8] font-medium tracking-tight">
                Designed for Lingering Evenings
              </h2>
            </div>
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C89347] hover:text-[#DFA85B] transition-colors group self-start md:self-auto"
            >
              <span>Discover the Experience</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {diningExperiences.slice(0, 3).map((exp) => (
              <div
                key={exp.id}
                className="group relative rounded-sm overflow-hidden bg-[#14161A] border border-white/5 hover:border-[#C89347]/40 transition-all duration-300 shadow-lg"
              >
                <div className="aspect-[16/11] overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] uppercase tracking-wider text-[#C89347] font-medium block mb-1">
                    {exp.subtitle}
                  </span>
                  <h3 className="font-serif text-lg text-[#EDE6D8] font-medium mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-[#A39E93] line-clamp-2 leading-relaxed font-light">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Short Craftsmanship / Guiding Tenets Preview */}
      <section className="py-14 sm:py-16 bg-[#111215] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-sm bg-[#16181D] border border-white/5">
              <span className="font-serif text-2xl sm:text-3xl text-[#C89347] font-semibold block mb-1">48h</span>
              <span className="text-xs text-[#EDE6D8] font-medium block">Slow Wagyu Braise</span>
              <span className="text-[10px] text-[#A39E93] uppercase tracking-wider block mt-0.5">Cold-pressed santan</span>
            </div>
            <div className="p-4 rounded-sm bg-[#16181D] border border-white/5">
              <span className="font-serif text-2xl sm:text-3xl text-[#C89347] font-semibold block mb-1">100%</span>
              <span className="text-xs text-[#EDE6D8] font-medium block">Mangrove Charcoal</span>
              <span className="text-[10px] text-[#A39E93] uppercase tracking-wider block mt-0.5">Kuala Sepetang cured</span>
            </div>
            <div className="p-4 rounded-sm bg-[#16181D] border border-white/5">
              <span className="font-serif text-2xl sm:text-3xl text-[#C89347] font-semibold block mb-1">14+</span>
              <span className="text-xs text-[#EDE6D8] font-medium block">Wild Native Ulam</span>
              <span className="text-[10px] text-[#A39E93] uppercase tracking-wider block mt-0.5">Foraged in Pahang</span>
            </div>
            <div className="p-4 rounded-sm bg-[#16181D] border border-white/5">
              <span className="font-serif text-2xl sm:text-3xl text-[#C89347] font-semibold block mb-1">Pork-Free</span>
              <span className="text-xs text-[#EDE6D8] font-medium block">Halal Sourced Meats</span>
              <span className="text-[10px] text-[#A39E93] uppercase tracking-wider block mt-0.5">Certified producers</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Selected Testimonials Preview */}
      <section className="py-16 sm:py-20 bg-[#0A0A0C] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase mb-2">
                <span className="w-5 h-px bg-[#C89347]" />
                <span>Patron & Critic Acclaim</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#EDE6D8] font-medium tracking-tight">
                Words of Praise
              </h2>
            </div>
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C89347] hover:text-[#DFA85B] transition-colors group self-start md:self-auto"
            >
              <span>Read All Reviews</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.slice(0, 2).map((review) => (
              <div
                key={review.author}
                className="p-6 sm:p-7 rounded-sm bg-[#14161A] border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#C89347] fill-[#C89347]" />
                    ))}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#C89347] font-semibold block mb-2">
                    "{review.highlight}"
                  </span>
                  <p className="font-serif text-sm sm:text-base text-[#EDE6D8]/85 italic leading-relaxed font-light mb-5">
                    "{review.quote}"
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[#EDE6D8] font-medium block">{review.author}</span>
                    <span className="text-[#A39E93] text-[11px] font-light">{review.role}</span>
                  </div>
                  <span className="text-[10px] text-[#C89347] uppercase tracking-wider">
                    {review.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Reservation CTA Banner */}
      <section className="py-14 sm:py-16 bg-[#16181D] border-b border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-10 h-10 rounded-full bg-[#C89347]/15 border border-[#C89347] mx-auto flex items-center justify-center text-[#C89347] mb-3">
            <Calendar className="w-5 h-5" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#EDE6D8] font-medium tracking-tight mb-3">
            Plan Your Evening at Ember & Spice
          </h2>
          <p className="text-xs sm:text-sm text-[#A39E93] max-w-lg mx-auto font-light mb-6">
            Reserve your table for intimate dinner seatings or leisurely weekend lunches along Jalan Telawi, Bangsar.
          </p>
          <Link
            to="/reservations"
            className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase bg-[#C89347] hover:bg-[#DFA85B] text-[#0A0A0C] transition-all rounded-sm shadow-xl"
          >
            Reserve a Table Online
          </Link>
        </div>
      </section>

      {/* 8. Location & Service Hours Preview */}
      <section className="py-14 sm:py-16 bg-[#0A0A0C] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase">
                <span className="w-5 h-px bg-[#C89347]" />
                <span>Visit Bangsar</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#EDE6D8] font-medium tracking-tight">
                Conveniently Located in Bangsar Baru
              </h2>
              <p className="text-xs sm:text-sm text-[#A39E93] font-light leading-relaxed">
                28 Jalan Telawi 3, Bangsar Baru, 59100 Kuala Lumpur. Complimentary valet parking is available along Jalan Telawi from 5:30 PM onwards.
              </p>
              <div className="pt-2">
                <Link
                  to="/visit"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C89347] hover:text-[#DFA85B] transition-colors group"
                >
                  <span>Plan Your Visit & Hours</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-sm bg-[#14161A] border border-white/5 space-y-3 text-xs">
              <div className="flex items-center gap-2 text-[#EDE6D8] font-serif text-sm font-medium pb-2 border-b border-white/5">
                <Clock className="w-4 h-4 text-[#C89347]" />
                <span>Service Times</span>
              </div>
              <div className="flex justify-between text-[#A39E93]">
                <span className="text-[#EDE6D8]">Tuesday – Thursday</span>
                <span>12:00 PM – 3:00 PM | 6:00 PM – 10:30 PM</span>
              </div>
              <div className="flex justify-between text-[#A39E93]">
                <span className="text-[#EDE6D8]">Friday – Sunday</span>
                <span>12:00 PM – 3:30 PM | 6:00 PM – 11:30 PM</span>
              </div>
              <div className="flex justify-between text-[#C89347] pt-1">
                <span>Monday</span>
                <span>Closed for Private R&D</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
