import React from 'react';
import { testimonials } from '../data/restaurantData';
import { Star, Quote } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#111215] relative overflow-hidden" aria-label="Critical Acclaim and Reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            <span className="w-6 h-px bg-[#C89347]" />
            <span>Critical Acclaim</span>
            <span className="w-6 h-px bg-[#C89347]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#EDE6D8] font-medium tracking-tight">
            Words of Praise
          </h2>
          <p className="text-sm text-[#A39E93] mt-3 max-w-xl font-light">
            Reflections from Malaysia's leading culinary publications and our cherished guests.
          </p>
        </div>

        {/* Editorial Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review) => (
            <div
              key={review.author}
              className="relative p-8 rounded-sm bg-[#16181D] border border-white/5 hover:border-[#C89347]/30 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              {/* Quote Mark Accent */}
              <Quote className="w-8 h-8 text-[#C89347]/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#C89347] fill-[#C89347]" />
                  ))}
                </div>

                {/* Highlight Snippet */}
                <span className="inline-block text-xs uppercase tracking-[0.15em] text-[#C89347] font-semibold mb-3">
                  "{review.highlight}"
                </span>

                {/* Quote Text */}
                <p className="font-serif text-sm sm:text-base text-[#EDE6D8]/85 italic leading-relaxed font-light mb-6">
                  "{review.quote}"
                </p>
              </div>

              {/* Author Attribution */}
              <div className="pt-4 border-t border-white/5">
                <h4 className="font-serif text-sm text-[#EDE6D8] font-semibold">
                  {review.author}
                </h4>
                <p className="text-xs text-[#A39E93] font-light">
                  {review.role}
                </p>
                <span className="text-[10px] text-[#C89347] tracking-wider uppercase block mt-1">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Prestigious Recognition Strip */}
        <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-xs text-[#A39E93] uppercase tracking-[0.2em]">
          <span className="text-[#EDE6D8]/80 hover:text-[#C89347] transition-colors">Tatler Dining Top 20</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C89347]" />
          <span className="text-[#EDE6D8]/80 hover:text-[#C89347] transition-colors">Michelin Selected KL</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C89347]" />
          <span className="text-[#EDE6D8]/80 hover:text-[#C89347] transition-colors">The Star Food Awards</span>
        </div>
      </div>
    </section>
  );
}
