import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import DishImage from '../components/DishImage';
import { fullMenu, restaurantInfo, tastingMenus } from '../data/restaurantData';
import { Flame, AlertCircle, X, ChefHat, ArrowRight } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Small Plates");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedDish, setSelectedDish] = useState(null);

  const categories = ["Small Plates", "Mains", "From the Grill", "Desserts", "Drinks"];
  const filters = ["All", "Chef's Picks", "Seafood", "Vegetarian", "Spicy", "Contains Nuts"];

  const currentCategoryData = fullMenu.find((c) => c.category === activeCategory) || fullMenu[0];

  // Count items per category for tab labels
  const getCategoryCount = (cat) => {
    const found = fullMenu.find((c) => c.category === cat);
    return found ? found.items.length : 0;
  };

  // Secondary filtering
  const filteredItems = currentCategoryData.items.filter((item) => {
    if (activeFilter === "Chef's Picks") return item.isChefPick;
    if (activeFilter === "Seafood") return item.dietary.some((d) => d.toLowerCase().includes("seafood"));
    if (activeFilter === "Vegetarian") return item.dietary.some((d) => d.toLowerCase().includes("veg"));
    if (activeFilter === "Spicy") return item.spicy > 0;
    if (activeFilter === "Contains Nuts") return item.dietary.some((d) => d.toLowerCase().includes("nut"));
    return true;
  });

  return (
    <div className="pt-28 pb-16 sm:pb-20 bg-[#0A0A0C]">
      {/* Header Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 text-center">
        <SectionHeader
          eyebrow="À La Carte Gastronomy"
          title="The Culinary Anthology"
          description="Every dish is seasoned with fresh granite-ground rempah and wood-fired over cured mangrove coals. Prices in Malaysian Ringgit (RM)."
        />
      </div>

      {/* Tasting Menu Invitation Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative rounded-sm bg-[#16181D] border border-[#C89347]/30 overflow-hidden">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#C89347]/5 rounded-bl-full pointer-events-none" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 sm:p-6">
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#C89347]/15 border border-[#C89347]/30 shrink-0">
              <ChefHat className="w-5 h-5 text-[#C89347]" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C89347] font-semibold block mb-0.5">
                Curated Degustation Experiences
              </span>
              <p className="text-sm text-[#EDE6D8] font-serif font-medium">
                Prefer a curated journey?{' '}
                <span className="text-[#EDE6D8]/80 font-light font-sans text-xs">
                  Explore our {tastingMenus.length} tasting menus — from the 4-course{' '}
                  <em className="text-[#C89347]">Ember Journey</em> to the full 8-course{' '}
                  <em className="text-[#C89347]">Chef's Degustation</em>.
                </span>
              </p>
            </div>
            <Link
              to="/experience"
              className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#C89347] hover:text-[#DFA85B] transition-colors group"
            >
              <span>View Tasting Menus</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        {/* Category Navigation Tabs with Item Counts */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pb-4 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveFilter("All");
              }}
              className={`px-4 sm:px-5 py-2 rounded-sm text-xs sm:text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89347] ${
                activeCategory === cat
                  ? 'bg-[#1E2027] text-[#C89347] border border-[#C89347]/40 shadow-lg'
                  : 'text-[#EDE6D8]/60 hover:text-[#EDE6D8] hover:bg-[#14161A]'
              }`}
            >
              {cat}
              <span className={`ml-1.5 text-[10px] font-normal ${activeCategory === cat ? 'text-[#C89347]/70' : 'text-[#A39E93]/60'}`}>
                ({getCategoryCount(cat)})
              </span>
            </button>
          ))}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          <span className="text-[11px] text-[#A39E93] tracking-widest uppercase mr-1 hidden sm:inline-block">Filter:</span>
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
      </div>

      {/* Food Photography Rich Menu Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 text-[#A39E93] font-light italic">
            No dishes in this category match the "{activeFilter}" filter.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredItems.map((dish) => (
              <article
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                className="group p-4 sm:p-5 rounded-sm bg-[#121316] hover:bg-[#16181D] border border-white/5 hover:border-[#C89347]/40 transition-all duration-300 flex flex-col sm:flex-row gap-4 sm:gap-5 cursor-pointer shadow-lg hover:shadow-xl"
              >
                {/* Dish Photography Thumbnail */}
                <div className="sm:w-44 h-40 sm:h-auto shrink-0 relative rounded-sm overflow-hidden bg-[#0A0A0C]">
                  <DishImage
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {dish.isChefPick && (
                    <div className="absolute top-2 left-2 bg-[#C89347] text-[#0A0A0C] text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-xs shadow">
                      Signature
                    </div>
                  )}
                </div>

                {/* Dish Information Content */}
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-serif text-base sm:text-lg text-[#EDE6D8] font-medium group-hover:text-[#C89347] transition-colors truncate">
                        {dish.name}
                      </h3>
                      <div className="shrink-0 flex items-baseline">
                        <span className="text-[10px] text-[#A39E93] mr-0.5">RM</span>
                        <span className="font-serif text-base font-bold text-[#EDE6D8]">
                          {dish.price}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs font-serif italic text-[#C89347]/80 mt-0.5 mb-1.5">
                      {dish.malayName}
                    </div>

                    <p className="text-xs text-[#EDE6D8]/70 line-clamp-2 leading-relaxed font-light mb-3">
                      {dish.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px]">
                    <div className="flex flex-wrap gap-1.5">
                      {dish.dietary.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] uppercase tracking-wider text-[#A39E93] bg-[#0A0A0C] px-2 py-0.5 rounded-xs border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {dish.spicy > 0 && (
                      <div className="flex items-center gap-0.5" title={`Spice level: ${dish.spicy}/3`}>
                        {Array.from({ length: dish.spicy }).map((_, i) => (
                          <Flame key={i} className="w-3 h-3 text-[#C89347] fill-[#C89347]" />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Dietary & Service Footnote */}
        <div className="mt-12 p-5 rounded-sm bg-[#14161A] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs text-[#A39E93]">
          <AlertCircle className="w-5 h-5 text-[#C89347] shrink-0" />
          <div>
            <span className="text-[#EDE6D8] font-medium block">Dietary Transparency</span>
            <span className="font-light">
              {restaurantInfo.dietaryNote} Inquiries regarding tasting menus or allergen modifications can be submitted in advance with your reservation.
            </span>
          </div>
        </div>
      </div>

      {/* Dish Inspection Detail Modal */}
      {selectedDish && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setSelectedDish(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-lg w-full bg-[#14161A] border border-[#C89347]/40 rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-[#0A0A0C]/80 text-[#EDE6D8] hover:text-[#C89347] transition-colors focus:outline-none"
              aria-label="Close dish details modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] overflow-hidden bg-black">
              <DishImage
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            <div className="p-6">
              <div className="flex items-baseline justify-between gap-2 mb-1">
                <h3 className="font-serif text-xl text-[#EDE6D8] font-medium">
                  {selectedDish.name}
                </h3>
                <div className="text-right shrink-0">
                  <span className="text-xs text-[#A39E93] mr-1">RM</span>
                  <span className="font-serif text-xl font-bold text-[#C89347]">
                    {selectedDish.price}
                  </span>
                </div>
              </div>

              <span className="block text-xs font-serif italic text-[#C89347] mb-3">
                {selectedDish.malayName}
              </span>

              <p className="text-xs sm:text-sm text-[#EDE6D8]/80 leading-relaxed font-light mb-4">
                {selectedDish.description}
              </p>

              <div className="flex flex-wrap gap-2 pb-4 border-b border-white/5 mb-5">
                {selectedDish.dietary.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider text-[#A39E93] bg-[#0A0A0C] px-2.5 py-1 rounded-sm border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
                {selectedDish.spicy > 0 && (
                  <span className="text-[10px] text-[#C89347] flex items-center gap-1 bg-[#0A0A0C] px-2.5 py-1 rounded-sm border border-white/5">
                    <Flame className="w-3 h-3 fill-[#C89347]" />
                    <span>Spice Level {selectedDish.spicy}/3</span>
                  </span>
                )}
              </div>

              <div className="flex gap-3">
                <Link
                  to="/reservations"
                  onClick={() => setSelectedDish(null)}
                  className="flex-1 py-3 text-center text-xs font-semibold tracking-wider uppercase bg-[#C89347] hover:bg-[#DFA85B] text-[#0A0A0C] rounded-sm transition-colors shadow-lg"
                >
                  Reserve a Table to Taste
                </Link>
                <button
                  onClick={() => setSelectedDish(null)}
                  className="px-4 py-3 text-xs uppercase tracking-wider text-[#EDE6D8] border border-white/10 hover:border-white/30 rounded-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
