import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { testimonials } from '../data/restaurantData';
import { Star, Quote, Flame, Leaf, Heart, Users } from 'lucide-react';

const philosophyPillars = [
  {
    icon: Flame,
    title: "The Open Hearth",
    desc: "Every protein is finished over cured mangrove charcoal from Kuala Sepetang. Fire is not technique — it is identity."
  },
  {
    icon: Leaf,
    title: "Hyper-Local Provenance",
    desc: "From Pahang botanicals to Pulau Ketam seafood, we source directly from Malaysian smallholders with full supply-chain transparency."
  },
  {
    icon: Heart,
    title: "Granite-Ground Rempah",
    desc: "No electric blades touch our spice pastes. Every rempah base is hand-pounded daily on inherited granite mortars — unhurried, by design."
  },
  {
    icon: Users,
    title: "Muhibbah Hospitality",
    desc: "Malaysian dining is generous, communal, and warm. We extend that same spirit to every guest who crosses our threshold in Bangsar."
  }
];

export default function Reviews() {
  return (
    <div className="pt-28 pb-16 sm:pb-20 bg-[#0A0A0C]">
      {/* Header Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 text-center">
        <SectionHeader
          eyebrow="Guest & Critic Voices"
          title="Words of Praise"
          description="Reflections from culinary journalists, food essayists, and the patrons who have shared our table in Bangsar."
        />
      </div>

      {/* Review Cards Grid – All 8 Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((review) => (
            <article
              key={review.author}
              className="relative p-7 sm:p-8 rounded-sm bg-[#14161A] border border-white/5 hover:border-[#C89347]/30 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <Quote className="w-8 h-8 text-[#C89347]/15 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#C89347] fill-[#C89347]" />
                  ))}
                </div>

                {/* Highlight Snippet */}
                <span className="inline-block text-xs uppercase tracking-wider text-[#C89347] font-semibold mb-2.5">
                  "{review.highlight}"
                </span>

                {/* Main Quote */}
                <p className="font-serif text-sm sm:text-base text-[#EDE6D8]/85 italic leading-relaxed font-light mb-6">
                  "{review.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-white/5">
                <h3 className="font-serif text-sm text-[#EDE6D8] font-semibold">
                  {review.author}
                </h3>
                <p className="text-xs text-[#A39E93] font-light">
                  {review.role}
                </p>
                <span className="text-[10px] text-[#C89347] tracking-wider uppercase block mt-1">
                  {review.source}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* ─── Culinary Philosophy Banner ─────────────────────────────────────────── */}
        <div className="mt-16 sm:mt-20 rounded-sm bg-[#111215] border border-white/5 overflow-hidden">
          {/* Top accent line */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#C89347]/50 to-transparent" />

          <div className="p-8 sm:p-12">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
                <span className="w-5 h-px bg-[#C89347]" />
                <span>Our Dining Philosophy</span>
                <span className="w-5 h-px bg-[#C89347]" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#EDE6D8] font-medium tracking-tight mb-3">
                The Principles Behind Every Plate
              </h2>
              <p className="text-xs sm:text-sm text-[#A39E93] max-w-2xl mx-auto font-light leading-relaxed">
                At Ember & Spice, every decision — from the sourcing of our galangal to the sequencing of a tasting menu — is guided by a set of convictions about what Malaysian gastronomy is capable of, and what it deserves.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {philosophyPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="group pt-5 border-t border-white/10 hover:border-[#C89347]/50 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#16181D] border border-[#C89347]/20 flex items-center justify-center text-[#C89347] mb-3 group-hover:bg-[#C89347] group-hover:text-[#0A0A0C] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-base text-[#EDE6D8] font-medium mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#A39E93] leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Chef's closing quote */}
            <div className="mt-10 pt-8 border-t border-white/5 text-center">
              <p className="font-serif text-base sm:text-lg text-[#C89347] italic max-w-2xl mx-auto">
                "We are not trying to be the finest restaurant in Malaysia. We are trying to make Malaysian cuisine impossible to ignore."
              </p>
              <span className="text-xs text-[#A39E93] font-light mt-2 block">
                — Harith Iskandar Tan, Executive Chef & Co-Founder
              </span>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#C89347]/50 to-transparent" />
        </div>

        {/* Reserve CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/reservations"
            className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold tracking-widest uppercase bg-[#C89347] hover:bg-[#DFA85B] text-[#0A0A0C] transition-colors rounded-sm shadow-xl"
          >
            Reserve Your Evening Table
          </Link>
        </div>
      </div>
    </div>
  );
}
