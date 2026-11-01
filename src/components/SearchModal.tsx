import React, { useState, useEffect, useRef } from 'react';
import { DESTINATIONS, SAFARI_PACKAGES, SIGNATURE_EXPERIENCES } from '../data/safariData';
import { Destination, SafariPackage, Experience, PageRoute } from '../types';
import { Search, X, MapPin, Compass, Sparkles, ArrowRight, Clock } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPackage: (pkg: SafariPackage) => void;
  onSelectDestination: (dest: Destination) => void;
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: (title?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectPackage,
  onSelectDestination,
  onNavigate,
  onOpenBooking
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearchTerm('');
    }
  }, [isOpen]);

  // Global keydown escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const query = searchTerm.toLowerCase().trim();

  // Filter destinations
  const matchingDestinations = DESTINATIONS.filter(d => 
    !query ||
    d.name.toLowerCase().includes(query) ||
    d.country.toLowerCase().includes(query) ||
    d.wildlifeHighlights.some(w => w.toLowerCase().includes(query)) ||
    d.tagline.toLowerCase().includes(query)
  );

  // Filter packages
  const matchingPackages = SAFARI_PACKAGES.filter(p =>
    !query ||
    p.title.toLowerCase().includes(query) ||
    p.destination.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query) ||
    p.highlights.some(h => h.toLowerCase().includes(query))
  );

  // Filter experiences
  const matchingExperiences = SIGNATURE_EXPERIENCES.filter(e =>
    !query ||
    e.title.toLowerCase().includes(query) ||
    e.category.toLowerCase().includes(query) ||
    e.tagline.toLowerCase().includes(query)
  );

  const quickPicks = ['Maasai Mara', 'Kilimanjaro', 'Serengeti', 'Gorilla', 'Balloon Safari', 'Big Five', 'Honeymoon'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-start justify-center p-3 sm:p-6 pt-16 sm:pt-24 animate-fadeIn">
      <div 
        className="relative bg-[#080907] text-[#E9DFC9] border border-[#34451C] rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center gap-3 bg-white/5">
          <Search className="w-5 h-5 text-[#B96829] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search destinations, wildlife, packages, or experiences..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-white/40 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-white/40 hover:text-white p-1"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors border border-white/15"
            aria-label="Close search"
          >
            <span className="text-[10px] uppercase font-semibold tracking-wider px-1">ESC</span>
          </button>
        </div>

        {/* Quick Picks / Suggestions */}
        {!searchTerm && (
          <div className="p-4 bg-black/40 border-b border-white/10">
            <span className="text-[11px] font-semibold text-[#52650B] uppercase tracking-wider block mb-2">
              Popular Searches:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {quickPicks.map((pick) => (
                <button
                  key={pick}
                  onClick={() => setSearchTerm(pick)}
                  className="px-2.5 py-1 text-xs bg-white/5 hover:bg-white/15 border border-white/10 rounded-md text-white/80 transition-colors"
                >
                  {pick}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results Container */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Packages Matches */}
          {matchingPackages.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#B96829] mb-3 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>Safari Packages ({matchingPackages.length})</span>
              </div>
              <div className="space-y-2">
                {matchingPackages.slice(0, 4).map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => {
                      onClose();
                      onSelectPackage(pkg);
                    }}
                    className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#B96829]/50 rounded-xl cursor-pointer transition-all flex items-center justify-between gap-3 group"
                  >
                    <div>
                      <h4 className="text-sm font-serif font-bold text-white group-hover:text-[#E9DFC9] transition-colors">
                        {pkg.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-white/60 mt-0.5">
                        <span className="text-[#B96829] font-medium">{pkg.durationText}</span>
                        <span>·</span>
                        <span className="truncate">{pkg.destination}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Destination Matches */}
          {matchingDestinations.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#52650B] mb-3 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Wilderness Destinations ({matchingDestinations.length})</span>
              </div>
              <div className="space-y-2">
                {matchingDestinations.slice(0, 4).map((dest) => (
                  <div
                    key={dest.id}
                    onClick={() => {
                      onClose();
                      onSelectDestination(dest);
                    }}
                    className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#52650B]/60 rounded-xl cursor-pointer transition-all flex items-center justify-between gap-3 group"
                  >
                    <div>
                      <h4 className="text-sm font-serif font-bold text-white group-hover:text-[#E9DFC9] transition-colors">
                        {dest.name}
                      </h4>
                      <p className="text-xs text-white/60 line-clamp-1 mt-0.5">
                        {dest.country} · {dest.tagline}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experiences Matches */}
          {matchingExperiences.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#E9DFC9] mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B96829]" />
                <span>Signature Experiences ({matchingExperiences.length})</span>
              </div>
              <div className="space-y-2">
                {matchingExperiences.slice(0, 3).map((exp) => (
                  <div
                    key={exp.id}
                    onClick={() => {
                      onClose();
                      onNavigate('experiences');
                    }}
                    className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl cursor-pointer transition-all flex items-center justify-between gap-3 group"
                  >
                    <div>
                      <h4 className="text-sm font-serif font-bold text-white group-hover:text-[#E9DFC9] transition-colors">
                        {exp.title}
                      </h4>
                      <p className="text-xs text-white/60 line-clamp-1 mt-0.5">
                        {exp.category} · {exp.tagline}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {matchingPackages.length === 0 && matchingDestinations.length === 0 && matchingExperiences.length === 0 && (
            <div className="py-8 text-center text-white/50 space-y-3">
              <Search className="w-8 h-8 mx-auto text-[#B96829]/50" />
              <p className="text-sm text-white font-serif">No exact safari match found for "{searchTerm}"</p>
              <p className="text-xs text-white/60">
                You can submit a custom bespoke safari request and we will tailor it to your exact preferences.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onNavigate('bespoke');
                }}
                className="mt-2 py-2 px-5 bg-[#B96829] text-white text-xs font-semibold uppercase tracking-wider rounded"
              >
                Open Bespoke Planner
              </button>
            </div>
          )}

        </div>

        {/* Footer info strip */}
        <div className="p-3 bg-black/60 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50">
          <span>Click any item to view detailed itinerary & wildlife guide</span>
          <span>Twiga Trails Safaris</span>
        </div>

      </div>
    </div>
  );
};
