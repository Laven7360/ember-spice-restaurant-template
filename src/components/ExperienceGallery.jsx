import React, { useState } from 'react';
import { galleryImages } from '../data/restaurantData';
import { Maximize2, X } from 'lucide-react';

export default function ExperienceGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#111215] relative overflow-hidden" aria-label="Restaurant Experience Gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            <span className="w-6 h-px bg-[#C89347]" />
            <span>Atmosphere & Artistry</span>
            <span className="w-6 h-px bg-[#C89347]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#EDE6D8] font-medium tracking-tight">
            The Dining Experience
          </h2>
          <p className="text-sm text-[#A39E93] mt-3 max-w-xl font-light">
            Intimate amber luminescence, the aroma of burning mangrove wood, and the choreographed dance of our hearth kitchen in Bangsar.
          </p>
        </div>

        {/* Dynamic Editorial Masonry Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => {
            // Apply varied heights for an editorial masonry feel
            const isTall = index === 0 || index === 4;
            const isWide = index === 1;

            return (
              <div
                key={img.title}
                onClick={() => setSelectedImage(img)}
                className={`group relative rounded-sm overflow-hidden bg-[#0A0A0C] border border-white/5 hover:border-[#C89347]/40 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl ${
                  isTall ? 'sm:row-span-2 min-h-[420px] sm:min-h-[520px]' : 'min-h-[280px] sm:min-h-[320px]'
                } ${isWide ? 'sm:col-span-2' : ''}`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Overlay Caption & Expand Icon */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#C89347] font-medium block mb-1">
                      {img.subtitle}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-[#EDE6D8] font-medium">
                      {img.title}
                    </h3>
                  </div>

                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0A0A0C]/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[#EDE6D8] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4 text-[#C89347]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center bg-[#111215] border border-white/10 rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#0A0A0C]/80 text-[#EDE6D8] hover:text-[#C89347] transition-colors focus:outline-none"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Preview */}
            <div className="w-full max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="w-full p-6 bg-[#16181D] flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/10">
              <div>
                <h4 className="font-serif text-xl text-[#EDE6D8] font-medium">
                  {selectedImage.title}
                </h4>
                <p className="text-xs text-[#C89347] uppercase tracking-wider mt-0.5">
                  {selectedImage.subtitle}
                </p>
              </div>
              <span className="text-xs text-[#A39E93] tracking-widest font-sans">
                Ember & Spice • Bangsar KL
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
