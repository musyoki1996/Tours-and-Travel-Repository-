import React, { useState } from 'react';
import { SAFARI_PACKAGES } from '../data/safariData';
import { SafariPackage } from '../types';
import { Calendar, Users, MapPin, Check, ArrowRight, Compass, Filter } from 'lucide-react';

interface SafariPackagesSectionProps {
  onSelectPackage: (pkg: SafariPackage) => void;
  onRequestQuote: (pkg: SafariPackage) => void;
  onViewAll?: () => void;
  isFullPage?: boolean;
  initialFilters?: { destination?: string; duration?: string; month?: string };
}

export const SafariPackagesSection: React.FC<SafariPackagesSectionProps> = ({
  onSelectPackage,
  onRequestQuote,
  onViewAll,
  isFullPage = false,
  initialFilters
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [selectedDuration, setSelectedDuration] = useState<string>(
    initialFilters?.duration && initialFilters.duration !== 'Any Duration' ? initialFilters.duration : 'All'
  );

  const categories = [
    'All',
    'Luxury',
    'Migration',
    'Wildlife Photography',
    'Honeymoon',
    'Adventure'
  ];

  const filteredPackages = SAFARI_PACKAGES.filter((pkg) => {
    // Category match
    if (selectedCategory !== 'All' && pkg.category !== selectedCategory) {
      return false;
    }
    // Country match
    if (selectedCountry !== 'All' && pkg.country !== selectedCountry) {
      return false;
    }
    // Duration match
    if (selectedDuration === '1-4' && (pkg.durationDays < 1 || pkg.durationDays > 4)) {
      return false;
    }
    if (selectedDuration === '5-7' && (pkg.durationDays < 5 || pkg.durationDays > 7)) {
      return false;
    }
    if (selectedDuration === '8+' && pkg.durationDays < 8) {
      return false;
    }
    return true;
  });

  const displayPackages = isFullPage ? filteredPackages : filteredPackages.slice(0, 6);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080907] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#B96829] font-semibold mb-2">
              Curated Safari Journeys · Kenya & Tanzania
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Popular Safari Packages
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl font-light leading-relaxed">
              Every itinerary is thoughtfully balanced for wildlife immersion, photographic vantage points, 
              and authentic comfort. Handcrafted with your personal safari buddy.
            </p>
          </div>

          {/* Category Filter Pills (Functional Buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#B96829] text-white shadow-sm font-semibold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {cat === 'All' ? 'All Packages' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Extended Filter Bar (for Full Page view) */}
        {isFullPage && (
          <div className="mb-10 p-4 bg-white/5 border border-white/10 rounded-xl flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-2 text-[#E9DFC9] font-medium">
              <Filter className="w-4 h-4 text-[#B96829]" />
              <span>Filter Itineraries:</span>
            </div>

            {/* Country selector */}
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="bg-[#080907] text-white border border-white/20 rounded px-3 py-1.5 focus:outline-none focus:border-[#B96829]"
            >
              <option value="All">All Regions (Kenya, Tanzania & Uganda)</option>
              <option value="Kenya">Kenya Safaris</option>
              <option value="Tanzania">Tanzania Safaris</option>
              <option value="Uganda">Uganda Primates</option>
            </select>

            {/* Duration selector */}
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="bg-[#080907] text-white border border-white/20 rounded px-3 py-1.5 focus:outline-none focus:border-[#B96829]"
            >
              <option value="All">Any Duration</option>
              <option value="1-4">Short Break (1–4 Days)</option>
              <option value="5-7">Classic Safari (5–7 Days)</option>
              <option value="8+">Grand Expedition (8+ Days)</option>
            </select>

            {(selectedCategory !== 'All' || selectedCountry !== 'All' || selectedDuration !== 'All') && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedCountry('All');
                  setSelectedDuration('All');
                }}
                className="text-xs text-[#B96829] hover:underline ml-auto"
              >
                Reset Filters
              </button>
            )}
          </div>
        )}

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-[#242522]/60 border border-white/10 hover:border-[#B96829]/60 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image & Header Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={pkg.featuredImage}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080907] via-transparent to-black/40" />

                {/* Duration & Country Text Metadata */}
                <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between text-xs text-white/90 font-medium drop-shadow">
                  <span className="bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-semibold text-[#E9DFC9]">
                    {pkg.durationText}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-white/80">
                    {pkg.country}
                  </span>
                </div>

                {/* Bottom title in media frame */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-lg font-serif font-bold text-white line-clamp-1 group-hover:text-[#E9DFC9] transition-colors">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#B96829] font-medium mt-0.5">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{pkg.destination}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-white/70 leading-relaxed line-clamp-2 mb-4 font-light">
                    {pkg.shortDescription}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 mb-5 border-t border-white/10 pt-3">
                    {pkg.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/85">
                        <Check className="w-3.5 h-3.5 text-[#52650B] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Action Buttons */}
                <div className="border-t border-white/10 pt-4 mt-auto">
                  <div className="mb-3">
                    <div className="text-[11px] uppercase tracking-wider text-white/50">
                      Indicative Rate
                    </div>
                    <div className="text-base font-serif font-bold text-[#E9DFC9]">
                      {pkg.indicativePrice}
                    </div>
                    <div className="text-[10px] text-white/40 italic">
                      {pkg.priceNote}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="py-2.5 px-3 text-xs font-semibold text-[#E9DFC9] hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded transition-colors text-center"
                    >
                      View Itinerary
                    </button>
                    <button
                      onClick={() => onRequestQuote(pkg)}
                      className="py-2.5 px-3 text-xs font-semibold text-white bg-[#B96829] hover:bg-[#a0561e] rounded transition-all text-center flex items-center justify-center gap-1 shadow"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="py-16 text-center text-white/60">
            <Compass className="w-10 h-10 mx-auto text-[#B96829] mb-3" />
            <h4 className="text-base font-serif font-semibold text-white">No packages matching these filters</h4>
            <p className="text-xs text-white/50 mt-1">Try selecting "All Packages" or contact us for a custom bespoke journey.</p>
          </div>
        )}

        {/* View All Packages button on home page */}
        {!isFullPage && onViewAll && (
          <div className="mt-14 text-center">
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B96829] hover:bg-[#a0561e] text-white text-xs font-semibold uppercase tracking-widest rounded transition-all shadow-lg"
            >
              <span>View All Safari Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
