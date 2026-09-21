import React from 'react';
import { Flame, ArrowRight } from 'lucide-react';
import { featuredDishes } from '../data/restaurantData';
import DishImage from './DishImage';

export default function SignatureShowcase() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="featured" className="py-24 bg-[#111215] relative overflow-hidden" aria-label="Featured Signature Dishes">
      {/* Texture accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              <span className="w-6 h-px bg-[#C89347]" />
              <span>Gastronomic Highlights</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#EDE6D8] font-medium tracking-tight">
              Signatures of Ember & Spice
            </h2>
            <p className="text-sm text-[#A39E93] mt-3 max-w-xl font-light">
              Crafted in limited daily quantities. Every dish is an homage to Malaysia's terroir and woodfire mastery.
            </p>
          </div>

          <button
            onClick={() => scrollTo('menu')}
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#C89347] hover:text-[#DFA85B] transition-colors group self-start md:self-auto focus:outline-none"
          >
            <span>View Complete Menu</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Featured Dish Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <article
              key={dish.id}
              className="group rounded-sm bg-[#16181D] border border-white/5 hover:border-[#C89347]/40 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-black/60"
            >
              <div>
                {/* Dish Image Container with Zoom & Badge */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0A0A0C]">
                  <DishImage
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16181D] via-transparent to-transparent opacity-80" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-[#0A0A0C] bg-[#C89347] px-2.5 py-1 rounded-sm shadow-md">
                      {dish.badge}
                    </span>
                  </div>

                  {/* Price in Malaysian Ringgit (RM) */}
                  <div className="absolute bottom-3 right-3 bg-[#0A0A0C]/90 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-sm">
                    <span className="text-xs text-[#A39E93] mr-1">RM</span>
                    <span className="font-serif text-lg font-bold text-[#EDE6D8]">{dish.price}</span>
                  </div>
                </div>

                {/* Dish Details */}
                <div className="p-6">
                  {/* Category & Spice Rating */}
                  <div className="flex items-center justify-between text-xs text-[#A39E93] mb-2">
                    <span className="tracking-wider uppercase text-[10px] text-[#C89347] font-medium">
                      {dish.category}
                    </span>

                    {dish.spiciness > 0 && (
                      <div className="flex items-center gap-1" title={`Spice Level: ${dish.spiciness}/3`}>
                        {Array.from({ length: 3 }).map((_, i) => (
                          <Flame
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < dish.spiciness ? 'text-[#C89347] fill-[#C89347]' : 'text-white/15'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Title & Malay Subtitle */}
                  <h3 className="font-serif text-xl text-[#EDE6D8] font-medium group-hover:text-[#C89347] transition-colors leading-snug">
                    {dish.name}
                  </h3>
                  <span className="block text-xs font-serif italic text-[#A39E93] mt-0.5 mb-3">
                    {dish.malayName}
                  </span>

                  {/* Culinary Description */}
                  <p className="text-xs text-[#EDE6D8]/70 leading-relaxed font-light mb-4">
                    {dish.description}
                  </p>

                  {/* Sommelier / Pairing Note */}
                  <div className="pt-3 border-t border-white/5 text-[11px] text-[#A39E93] italic">
                    <span className="text-[#C89347] not-italic font-medium mr-1">Note:</span>
                    {dish.pairing}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 mt-2">
                <button
                  onClick={() => scrollTo('reservation')}
                  className="w-full py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium text-[#EDE6D8] bg-[#1E2027] hover:bg-[#C89347] hover:text-[#0A0A0C] border border-white/10 hover:border-[#C89347] transition-all duration-300 rounded-sm"
                >
                  Reserve Table to Taste
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
