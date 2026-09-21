import React, { useState } from 'react';
import { fullMenu, restaurantInfo } from '../data/restaurantData';
import { Flame, Star, AlertCircle } from 'lucide-react';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Small Plates");
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["Small Plates", "Mains", "From the Grill", "Desserts", "Drinks"];
  const filters = ["All", "Chef's Picks", "Seafood", "Vegetarian"];

  const currentCategoryData = fullMenu.find((c) => c.category === activeCategory) || fullMenu[0];

  // Apply secondary filter
  const filteredItems = currentCategoryData.items.filter((item) => {
    if (activeFilter === "Chef's Picks") return item.isChefPick;
    if (activeFilter === "Seafood") return item.dietary.some((d) => d.toLowerCase().includes("seafood"));
    if (activeFilter === "Vegetarian") return item.dietary.some((d) => d.toLowerCase().includes("veg"));
    return true;
  });

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#0A0A0C] relative" aria-label="Restaurant Menu">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#C89347]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#C89347] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            <span className="w-6 h-px bg-[#C89347]" />
            <span>À La Carte Gastronomy</span>
            <span className="w-6 h-px bg-[#C89347]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#EDE6D8] font-medium tracking-tight">
            The Culinary Anthology
          </h2>
          <p className="text-sm text-[#A39E93] mt-3 max-w-xl mx-auto font-light">
            All cuts are prepared over mangrove wood fire and seasoned with heirloom rempah. Prices listed in Malaysian Ringgit (RM).
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 pb-4 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveFilter("All");
              }}
              className={`px-4 sm:px-6 py-2.5 rounded-sm text-xs sm:text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89347] ${
                activeCategory === cat
                  ? 'bg-[#1E2027] text-[#C89347] border border-[#C89347]/40 shadow-lg'
                  : 'text-[#EDE6D8]/60 hover:text-[#EDE6D8] hover:bg-[#14161A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Secondary Sub-filters */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <span className="text-[11px] text-[#A39E93] tracking-widest uppercase mr-2 hidden sm:inline-block">Filter:</span>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1 rounded-full text-[11px] tracking-wider transition-colors ${
                activeFilter === filter
                  ? 'bg-[#C89347] text-[#0A0A0C] font-semibold'
                  : 'bg-[#14161A] text-[#A39E93] hover:text-[#EDE6D8] border border-white/5'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Menu Items List */}
        <div className="space-y-8 min-h-[360px]">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 text-[#A39E93] font-light italic">
              No items in this category match the selected filter.
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.name}
                className="group p-6 rounded-sm bg-[#121316]/50 hover:bg-[#16181D] border border-white/5 hover:border-[#C89347]/30 transition-all duration-300"
              >
                {/* Top Row: Titles and Price */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-serif text-lg sm:text-xl text-[#EDE6D8] font-medium group-hover:text-[#C89347] transition-colors">
                      {item.name}
                    </h3>

                    {item.isChefPick && (
                      <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-widest bg-[#C89347]/15 text-[#C89347] px-2 py-0.5 rounded border border-[#C89347]/30">
                        <Star className="w-2.5 h-2.5 fill-[#C89347]" />
                        Signature
                      </span>
                    )}

                    {item.spicy > 0 && (
                      <span className="flex items-center gap-0.5" title={`Spice level: ${item.spicy}/3`}>
                        {Array.from({ length: item.spicy }).map((_, i) => (
                          <Flame key={i} className="w-3 h-3 text-[#C89347] fill-[#C89347]" />
                        ))}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline text-right shrink-0">
                    <span className="text-xs text-[#A39E93] mr-1">RM</span>
                    <span className="font-serif text-lg sm:text-xl font-bold text-[#EDE6D8] tracking-tight">
                      {item.price}
                    </span>
                  </div>
                </div>

                {/* Malay Name */}
                <div className="text-xs font-serif italic text-[#C89347]/80 mt-0.5 mb-2">
                  {item.malayName}
                </div>

                {/* Ingredients & Preparation Description */}
                <p className="text-xs sm:text-sm text-[#EDE6D8]/70 font-light leading-relaxed mb-3">
                  {item.description}
                </p>

                {/* Dietary Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.dietary.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-widest text-[#A39E93] bg-[#0A0A0C] px-2 py-0.5 rounded-sm border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Dietary & Service Footnote */}
        <div className="mt-16 p-6 rounded-sm bg-[#14161A] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-[#A39E93]">
          <AlertCircle className="w-5 h-5 text-[#C89347] shrink-0" />
          <div className="leading-relaxed">
            <p className="text-[#EDE6D8] font-medium">Dietary & Allergen Consideration</p>
            <p className="mt-0.5 font-light">
              {restaurantInfo.dietaryNote} Please inform our service captains of any nut, crustacean, or gluten sensitivities upon reserving. A 10% service charge and applicable SST apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
