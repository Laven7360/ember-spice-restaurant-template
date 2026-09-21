import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { storyMilestones, chefProfile, teamMembers } from '../data/restaurantData';
import { Flame, Compass, Leaf, HeartHandshake, MapPin, Quote } from 'lucide-react';

export default function About() {
  const icons = [Flame, Compass, Leaf, HeartHandshake];

  return (
    <div className="pt-28 pb-16 sm:pb-20 bg-[#0A0A0C]">
      {/* Top Banner Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pb-16 text-center">
        <SectionHeader
          eyebrow="Our Story & Vision"
          title="Where Ancient Rempah Meets Modern Fire"
          description="A contemporary dining sanctuary in Bangsar celebrating the depth of Malaysian culinary memory through open woodfire technique."
        />
      </div>

      {/* Main Narrative Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Narrative Content */}
          <div className="lg:col-span-6 space-y-5">
            <p className="text-base sm:text-xl font-serif text-[#C89347] italic leading-relaxed">
              "Malaysian cuisine does not need reinvention to earn reverence. It simply demands the same rigorous culinary patience we bestow upon the world's grandest culinary traditions."
            </p>

            <p className="text-xs sm:text-sm text-[#EDE6D8]/80 font-light leading-relaxed">
              Founded along Bangsar's Jalan Telawi, <strong className="text-[#EDE6D8] font-medium">Ember & Spice</strong> was born out of a profound love for the rich, multi-layered aromatics of Malaysian heritage cooking—the slow simmer of Kelantanese santan, the fierce tang of Malaccan asam pedas, and the intoxicating perfume of scorched banana leaves over charcoal.
            </p>

            <p className="text-xs sm:text-sm text-[#EDE6D8]/80 font-light leading-relaxed">
              We reject electric shortcuts. Our foundation rests on heirloom spice pastes (<em className="text-[#C89347]">rempah</em>) pounded fresh daily on heavy granite mortars, cured mangrove wood charcoal from Kuala Sepetang, and pristine produce sourced directly from smallholder farmers across Perak, Pahang, and Sabah.
            </p>

            {/* Chef Attribution & Accolade */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-base text-[#EDE6D8] font-semibold">Harith Iskandar Tan</h3>
                <p className="text-xs text-[#C89347] tracking-wider uppercase font-sans">Executive Chef & Co-Founder</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#A39E93] uppercase tracking-widest block">Recognition</span>
                <span className="text-xs font-serif text-[#EDE6D8] italic">KL Gastronomy Awards • Best Concept 2024</span>
              </div>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-sm bg-[#14161A] border border-white/5 text-center">
                <span className="block font-serif text-2xl text-[#C89347] font-semibold">48h</span>
                <span className="text-[10px] text-[#A39E93] tracking-wider uppercase mt-0.5 block">Wagyu Braise</span>
              </div>
              <div className="p-3.5 rounded-sm bg-[#14161A] border border-white/5 text-center">
                <span className="block font-serif text-2xl text-[#C89347] font-semibold">100%</span>
                <span className="text-[10px] text-[#A39E93] tracking-wider uppercase mt-0.5 block">Mangrove Hearth</span>
              </div>
              <div className="p-3.5 rounded-sm bg-[#14161A] border border-white/5 text-center">
                <span className="block font-serif text-2xl text-[#C89347] font-semibold">14+</span>
                <span className="text-[10px] text-[#A39E93] tracking-wider uppercase mt-0.5 block">Native Ulam</span>
              </div>
            </div>
          </div>

          {/* Layered Editorial Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=80"
                alt="Executive Chef preparing skewers over open charcoal grill at Ember & Spice"
                className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C89347] bg-[#0A0A0C]/80 px-2.5 py-1 rounded-sm backdrop-blur-sm">
                  Open Fire Hearth Kitchen
                </span>
              </div>
            </div>

            {/* Inset Rempah Image */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-48 h-48 rounded-sm overflow-hidden border-2 border-[#C89347]/40 shadow-2xl bg-[#0A0A0C] z-20 group">
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
          </div>
        </div>
      </section>

      {/* 4 Guiding Pillars Section */}
      <section className="py-16 bg-[#111215] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase mb-2">
              <span className="w-5 h-px bg-[#C89347]" />
              <span>The Guiding Tenets</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#EDE6D8] font-medium tracking-tight">
              Craftsmanship Rooted in Terroir, Fire & Generosity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {storyMilestones.map((pillar, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div
                  key={pillar.title}
                  className="pt-5 border-t border-white/10 hover:border-[#C89347] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-2xl text-white/20 group-hover:text-[#C89347] transition-colors">
                      0{index + 1}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#16181D] flex items-center justify-center text-[#C89347] group-hover:bg-[#C89347] group-hover:text-[#0A0A0C] transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C89347] font-semibold block mb-1">
                    {pillar.year}
                  </span>
                  <h3 className="font-serif text-lg text-[#EDE6D8] font-medium mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#A39E93] leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chef Biography Section */}
      <section className="py-16 sm:py-20 bg-[#0A0A0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase mb-10">
            <span className="w-5 h-px bg-[#C89347]" />
            <span>The Chef's Vision</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Portrait */}
            <div className="lg:col-span-4">
              <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl group">
                <img
                  src={chefProfile.image}
                  alt={`${chefProfile.name} – Executive Chef at Ember & Spice`}
                  className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-xl text-[#EDE6D8] font-semibold">{chefProfile.name}</h3>
                  <p className="text-xs text-[#C89347] tracking-wider uppercase mt-0.5">{chefProfile.title}</p>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Pull Quote */}
              <div className="relative pl-5 border-l-2 border-[#C89347]">
                <Quote className="absolute -top-1 -left-3 w-5 h-5 text-[#C89347]/40" />
                <p className="font-serif text-lg sm:text-xl text-[#C89347] italic leading-relaxed">
                  "{chefProfile.philosophy}"
                </p>
              </div>

              {/* Bio Paragraphs */}
              {chefProfile.bio.map((para, i) => (
                <p key={i} className="text-xs sm:text-sm text-[#EDE6D8]/80 font-light leading-relaxed">
                  {para}
                </p>
              ))}

              {/* Sourcing Provenance Grid */}
              <div className="pt-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C89347] font-semibold block mb-4">
                  Sourcing Provenance
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {chefProfile.sourcingFocus.map((s) => (
                    <div
                      key={s.region}
                      className="flex items-start gap-3 p-3.5 rounded-sm bg-[#14161A] border border-white/5"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#C89347] mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs font-semibold text-[#EDE6D8] block">{s.region}</span>
                        <span className="text-[11px] text-[#A39E93] font-light leading-snug">{s.produce}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Team Section */}
      <section className="py-16 bg-[#111215] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase mb-2">
                <span className="w-5 h-px bg-[#C89347]" />
                <span>Behind the Pass</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#EDE6D8] font-medium tracking-tight">
                The Kitchen Brigade
              </h2>
            </div>
            <p className="text-xs text-[#A39E93] max-w-sm font-light leading-relaxed">
              A small, disciplined team of specialists who share Chef Harith's conviction that Malaysian flavours deserve the world's finest culinary rigour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group rounded-sm bg-[#14161A] border border-white/5 hover:border-[#C89347]/40 transition-all duration-300 overflow-hidden shadow-xl"
              >
                {/* Portrait */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0A0A0C]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14161A] via-transparent to-transparent opacity-75" />
                </div>

                {/* Details */}
                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C89347] font-semibold block mb-1">
                    {member.title}
                  </span>
                  <h3 className="font-serif text-lg text-[#EDE6D8] font-medium mb-1">
                    {member.name}
                  </h3>
                  <span className="text-[11px] text-[#A39E93] italic font-light block mb-3">
                    {member.specialty}
                  </span>
                  <p className="text-xs text-[#A39E93]/80 leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="pt-16 text-center max-w-4xl mx-auto px-4">
        <h2 className="font-serif text-2xl sm:text-3xl text-[#EDE6D8] font-medium mb-3">
          Experience Contemporary Malaysian Flavours
        </h2>
        <p className="text-xs sm:text-sm text-[#A39E93] max-w-md mx-auto mb-6 font-light">
          Join us for an unhurried dinner seating or explore our complete à la carte anthology.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/reservations"
            className="px-6 py-3 text-xs font-semibold tracking-wider uppercase bg-[#C89347] text-[#0A0A0C] hover:bg-[#DFA85B] transition-colors rounded-sm"
          >
            Reserve a Table
          </Link>
          <Link
            to="/menu"
            className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#EDE6D8] border border-white/20 hover:border-[#C89347] hover:text-[#C89347] transition-colors rounded-sm"
          >
            View Full Menu
          </Link>
        </div>
      </section>
    </div>
  );
}
