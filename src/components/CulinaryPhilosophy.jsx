import React from 'react';
import { storyMilestones } from '../data/restaurantData';
import { Flame, Compass, HeartHandshake, Leaf } from 'lucide-react';

export default function CulinaryPhilosophy() {
  const icons = [Flame, Compass, Leaf, HeartHandshake];

  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#0A0A0C] border-y border-white/5 relative overflow-hidden" aria-label="Our Culinary Philosophy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            <span className="w-6 h-px bg-[#C89347]" />
            <span>The Guiding Tenets</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#EDE6D8] font-medium tracking-tight leading-tight">
            Craftsmanship Rooted in Terroir, Fire, and Generosity
          </h2>
          <p className="text-sm sm:text-base text-[#A39E93] mt-4 font-light leading-relaxed">
            At Ember & Spice, luxury is not born from gold leaf or aloof formality. It is found in uncompromised technique, hours of watchful simmering, and the genuine spirit of Malaysian hospitality.
          </p>
        </div>

        {/* 4 Pillars in Editorial Grid - Not generic corporate cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {storyMilestones.map((pillar, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={pillar.title}
                className="group relative pt-6 border-t border-white/10 hover:border-[#C89347] transition-all duration-500"
              >
                {/* Number & Icon Treatment */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl text-white/20 group-hover:text-[#C89347] transition-colors font-light">
                    0{index + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#16181D] flex items-center justify-center text-[#C89347] group-hover:bg-[#C89347] group-hover:text-[#0A0A0C] transition-colors duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Subtitle / Category */}
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C89347] font-semibold block mb-1">
                  {pillar.year}
                </span>

                {/* Title */}
                <h3 className="font-serif text-xl text-[#EDE6D8] font-medium mb-3 group-hover:text-[#C89347] transition-colors">
                  {pillar.title}
                </h3>

                {/* Narrative */}
                <p className="text-xs text-[#A39E93] leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Editorial Pullquote Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-sm bg-[#14161A] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C89347]/5 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C89347] font-medium block mb-2">
              The Malaysian Dining Ethos
            </span>
            <blockquote className="font-serif text-xl sm:text-2xl text-[#EDE6D8] font-normal leading-relaxed italic">
              "We do not cook to impress other chefs; we cook to evoke the deep memory of our grandmothers' kitchens, executed with the precision of contemporary culinary art."
            </blockquote>
            <p className="text-xs text-[#A39E93] uppercase tracking-widest mt-4 font-sans">
              Kitchen Brigade • Ember & Spice Kuala Lumpur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
