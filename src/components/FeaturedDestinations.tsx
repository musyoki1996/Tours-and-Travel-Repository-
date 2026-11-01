import React, { useState } from 'react';
import { DESTINATIONS } from '../data/safariData';
import { Destination } from '../types';
import { MapPin, Calendar, Compass, ArrowRight, Eye } from 'lucide-react';

interface FeaturedDestinationsProps {
  onSelectDestination: (dest: Destination) => void;
  onEnquireDestination: (destName: string) => void;
  onViewAll?: () => void;
  isFullPage?: boolean;
}

export const FeaturedDestinations: React.FC<FeaturedDestinationsProps> = ({
  onSelectDestination,
  onEnquireDestination,
  onViewAll,
  isFullPage = false
}) => {
  const [activeCountry, setActiveCountry] = useState<'All' | 'Kenya' | 'Tanzania' | 'Uganda'>('All');

  const filteredDestinations = activeCountry === 'All' 
    ? (isFullPage ? DESTINATIONS : DESTINATIONS.slice(0, 6))
    : DESTINATIONS.filter(d => d.country === activeCountry);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F5EE] dark:bg-[#080907] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#52650B] font-semibold mb-2">
              Safari Destinations · East Africa
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#080907] dark:text-white tracking-tight">
              Iconic Wilderness Landscapes
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#242522]/80 dark:text-[#E9DFC9]/80 max-w-2xl font-normal leading-relaxed">
              From the great golden savannahs of the Maasai Mara and Serengeti to the elephant kingdoms beneath Kilimanjaro. 
              Explore hand-selected ecosystems where authentic African wildlife thrives.
            </p>
          </div>

          {/* Country Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#E9DFC9]/50 dark:bg-white/10 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            {(['All', 'Kenya', 'Tanzania', 'Uganda'] as const).map((country) => (
              <button
                key={country}
                onClick={() => setActiveCountry(country)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap shrink-0 ${
                  activeCountry === country
                    ? 'bg-[#080907] dark:bg-[#B96829] text-[#E9DFC9] dark:text-white shadow-sm'
                    : 'text-[#242522]/70 dark:text-white/70 hover:text-[#080907] dark:hover:text-white'
                }`}
              >
                {country === 'All' ? 'All East Africa' : country}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white dark:bg-[#181a15] rounded-xl overflow-hidden border border-[#E9DFC9] dark:border-[#34451C] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container with subtle zoom */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#242522]">
                <img
                  src={dest.featuredImage}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Clean unboxed country kicker */}
                <div className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wider text-white/90 drop-shadow">
                  {dest.country}
                </div>

                {/* Bottom title inside image overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-serif font-bold text-white leading-snug drop-shadow-sm">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-[#E9DFC9] line-clamp-1 mt-0.5">
                    {dest.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#242522]/80 dark:text-[#E9DFC9]/80 leading-relaxed line-clamp-3 mb-4">
                    {dest.description}
                  </p>

                  {/* Wildlife highlights as clean unboxed typography */}
                  <div className="mb-4 pt-3 border-t border-[#E9DFC9]/60 dark:border-white/10">
                    <div className="text-[11px] font-semibold text-[#52650B] uppercase tracking-wider mb-1.5">
                      Wildlife Highlights
                    </div>
                    <div className="text-xs text-[#242522]/90 dark:text-white/90 flex flex-wrap gap-x-2 gap-y-1">
                      {dest.wildlifeHighlights.slice(0, 4).map((animal, i) => (
                        <span key={i} className="inline-flex items-center">
                          {i > 0 && <span className="text-[#B96829] mr-2" aria-hidden="true">·</span>}
                          {animal}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Best time to visit metadata */}
                  <div className="flex items-center gap-2 text-xs text-[#242522]/70 dark:text-white/60 mb-5">
                    <Calendar className="w-3.5 h-3.5 text-[#B96829] shrink-0" />
                    <span className="line-clamp-1">{dest.bestTimeToVisit}</span>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-[#E9DFC9]/60 dark:border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectDestination(dest)}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-[#080907] dark:text-[#E9DFC9] hover:text-[#52650B] hover:bg-[#F8F5EE] dark:hover:bg-white/5 border border-[#E9DFC9] dark:border-white/20 rounded transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Guide</span>
                  </button>
                  <button
                    onClick={() => onEnquireDestination(dest.name)}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-white bg-[#52650B] hover:bg-[#435209] rounded transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA for Homepage */}
        {!isFullPage && onViewAll && (
          <div className="mt-14 text-center">
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#080907] dark:bg-[#181a15] dark:border dark:border-[#34451C] hover:bg-[#242522] text-[#E9DFC9] hover:text-white text-xs font-semibold uppercase tracking-widest rounded transition-all shadow"
            >
              <span>Explore All East African Destinations</span>
              <ArrowRight className="w-4 h-4 text-[#B96829]" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
