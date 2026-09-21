import React from 'react';

export default function AboutStory() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0A0A0C] relative overflow-hidden" aria-label="About Ember & Spice">
      {/* Subtle ambient gradient */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#C89347]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            <span className="w-6 h-px bg-[#C89347]" />
            <span>Our Heritage & Vision</span>
            <span className="w-6 h-px bg-[#C89347]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#EDE6D8] font-medium tracking-tight">
            Where Ancient Rempah Meets Modern Fire
          </h2>
          <div className="w-16 h-0.5 bg-[#C89347]/40 mt-6" />
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-lg sm:text-xl font-serif text-[#C89347] italic leading-relaxed">
              "Malaysian cuisine does not need reinvention to earn reverence. It simply demands the same rigorous culinary patience we bestow upon the world’s grandest culinary traditions."
            </p>

            <p className="text-sm sm:text-base text-[#EDE6D8]/80 font-light leading-relaxed">
              Founded in Kuala Lumpur’s vibrant Bangsar enclave, <strong className="text-[#EDE6D8] font-medium">Ember & Spice</strong> was born out of a profound love for the rich, layered aromatics of Malaysian culinary history—the slow simmer of Kelantanese santan, the fierce sting of Malaccan asam pedas, and the perfume of scorched banana leaves over charcoal.
            </p>

            <p className="text-sm sm:text-base text-[#EDE6D8]/80 font-light leading-relaxed">
              We reject electric shortcuts. Our foundation rests on heirloom spice pastes (<em className="text-[#C89347]">rempah</em>) pounded fresh daily on heavy granite mortar, cured mangrove wood charcoal from Kuala Sepetang, and pristine ingredients sourced directly from smallholder farmers across Perak, Pahang, and Sabah.
            </p>

            {/* Chef Signature / Quote Box */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <h4 className="font-serif text-base text-[#EDE6D8] font-semibold">Harith Iskandar Tan</h4>
                <p className="text-xs text-[#C89347] tracking-wider uppercase font-sans">Executive Chef & Co-Founder</p>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-[#A39E93] uppercase tracking-widest block">Accolade</span>
                <span className="text-xs font-serif text-[#EDE6D8] italic">Michelin Selected Guide KL 2024</span>
              </div>
            </div>

            {/* Editorial Metric Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-sm bg-[#14161A] border border-white/5 text-center">
                <span className="block font-serif text-2xl sm:text-3xl text-[#C89347] font-semibold">48h</span>
                <span className="text-[10px] text-[#A39E93] tracking-widest uppercase mt-1 block">Wagyu Braise</span>
              </div>
              <div className="p-4 rounded-sm bg-[#14161A] border border-white/5 text-center">
                <span className="block font-serif text-2xl sm:text-3xl text-[#C89347] font-semibold">100%</span>
                <span className="text-[10px] text-[#A39E93] tracking-widest uppercase mt-1 block">Mangrove Hearth</span>
              </div>
              <div className="p-4 rounded-sm bg-[#14161A] border border-white/5 text-center">
                <span className="block font-serif text-2xl sm:text-3xl text-[#C89347] font-semibold">14+</span>
                <span className="text-[10px] text-[#A39E93] tracking-widest uppercase mt-1 block">Wild Ulam Herbs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              {/* Primary Large Image: Chef at the Hearth */}
              <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=80"
                  alt="Executive Chef preparing skewers over open charcoal grill at Ember & Spice"
                  className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C89347] bg-[#0A0A0C]/80 px-2.5 py-1 rounded-sm backdrop-blur-sm">
                    Open Fire Hearth Kitchen
                  </span>
                </div>
              </div>

              {/* Overlapping Secondary Image: Fresh Rempah Preparation */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-56 h-56 rounded-sm overflow-hidden border-2 border-[#C89347]/40 shadow-2xl bg-[#0A0A0C] z-20 group">
                <img
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"
                  alt="Heirloom fresh spices including lemongrass, star anise, and chilies"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C]/90 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-center">
                  <span className="text-[9px] uppercase tracking-wider text-[#EDE6D8] font-medium">
                    Hand-Ground Rempah
                  </span>
                </div>
              </div>

              {/* Subtle Decorative Golden Border Frame Accent */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-[#C89347]/20 rounded-sm -z-10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
