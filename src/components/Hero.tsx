import React, { useState } from 'react';
import { HERO_IMAGE, BRAND_LOGO } from '../data/safariData';
import { PageRoute } from '../types';
import { Compass, Calendar, Users, MapPin, ChevronDown, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: () => void;
  onQuickSearch: (filters: { destination: string; duration: string; month: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenBooking, onQuickSearch }) => {
  const [selectedDest, setSelectedDest] = useState('All Destinations');
  const [selectedDuration, setSelectedDuration] = useState('Any Duration');
  const [selectedMonth, setSelectedMonth] = useState('Any Month');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickSearch({
      destination: selectedDest,
      duration: selectedDuration,
      month: selectedMonth
    });
    onNavigate('packages');
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between text-white overflow-hidden bg-[#080907]">
      {/* Background Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Cinematic African Safari savannah at sunrise with giraffes and elephants"
          className="w-full h-full object-cover object-center transform scale-102 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Layered cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080907] via-[#080907]/45 to-black/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#080907]/20 to-[#080907]/80" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          
          {/* Subtle brand kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-md border border-[#B96829]/40 text-[#E9DFC9] text-xs uppercase tracking-widest rounded-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#B96829]" />
            <span>Twiga Trails Safaris · Your Travel Buddies</span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight mb-6">
            DISCOVER AFRICA.<br />
            <span className="text-[#E9DFC9] italic font-normal">EXPERIENCE THE EXTRAORDINARY.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light mb-8 max-w-2xl">
            From breathtaking wildlife encounters to unforgettable African adventures, 
            let Twiga Trails Safaris take you closer to the experiences that make every journey extraordinary.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={() => onNavigate('packages')}
              className="px-8 py-3.5 bg-[#B96829] hover:bg-[#a0561e] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              <span>Explore Safari Experiences</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onNavigate('bespoke')}
              className="px-8 py-3.5 bg-black/40 hover:bg-black/60 text-[#E9DFC9] hover:text-white border border-[#E9DFC9]/40 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded transition-all backdrop-blur-sm flex items-center justify-center"
            >
              Plan Your Journey
            </button>
          </div>

          {/* Trust badges strip */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-white/80 border-t border-white/15 pt-5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#52650B]" />
              <span>Certified KPSGA Safari Guides</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-white/30">·</span>
              <span>100% Window Seat Guarantee</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-white/30">·</span>
              <span>Custom 4x4 Pop-up Cruisers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Safari Finder Strip (Bottom of Hero) */}
      <div className="relative z-10 bg-[#080907]/90 backdrop-blur-md border-t border-[#34451C]/60 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            
            {/* Destination Selector */}
            <div className="relative bg-white/5 border border-white/15 rounded p-2.5 hover:border-[#B96829] transition-colors">
              <label className="block text-[10px] uppercase font-semibold text-[#E9DFC9] tracking-wider mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B96829]" />
                Destination
              </label>
              <select
                value={selectedDest}
                onChange={(e) => setSelectedDest(e.target.value)}
                className="w-full bg-transparent text-white text-xs font-medium focus:outline-none cursor-pointer"
              >
                <option value="All Destinations" className="bg-[#080907] text-white">All Destinations (Kenya & Tanzania)</option>
                <option value="Maasai Mara" className="bg-[#080907] text-white">Maasai Mara National Reserve</option>
                <option value="Amboseli" className="bg-[#080907] text-white">Amboseli National Park</option>
                <option value="Serengeti" className="bg-[#080907] text-white">Serengeti National Park</option>
                <option value="Ngorongoro" className="bg-[#080907] text-white">Ngorongoro Crater</option>
                <option value="Samburu" className="bg-[#080907] text-white">Samburu & Northern Frontier</option>
                <option value="Diani" className="bg-[#080907] text-white">Bush to Beach (Diani / Zanzibar)</option>
                <option value="Uganda" className="bg-[#080907] text-white">Uganda Gorilla Trekking</option>
              </select>
            </div>

            {/* Duration Selector */}
            <div className="relative bg-white/5 border border-white/15 rounded p-2.5 hover:border-[#B96829] transition-colors">
              <label className="block text-[10px] uppercase font-semibold text-[#E9DFC9] tracking-wider mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#B96829]" />
                Duration
              </label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full bg-transparent text-white text-xs font-medium focus:outline-none cursor-pointer"
              >
                <option value="Any Duration" className="bg-[#080907] text-white">Any Duration</option>
                <option value="1-4" className="bg-[#080907] text-white">1 - 4 Days (Short Break)</option>
                <option value="5-7" className="bg-[#080907] text-white">5 - 7 Days (Classic Safari)</option>
                <option value="8+" className="bg-[#080907] text-white">8+ Days (Grand Expedition)</option>
              </select>
            </div>

            {/* Travel Month Selector */}
            <div className="relative bg-white/5 border border-white/15 rounded p-2.5 hover:border-[#B96829] transition-colors">
              <label className="block text-[10px] uppercase font-semibold text-[#E9DFC9] tracking-wider mb-1 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#B96829]" />
                When Are You Travelling?
              </label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full bg-transparent text-white text-xs font-medium focus:outline-none cursor-pointer"
              >
                <option value="Any Month" className="bg-[#080907] text-white">Any Month / Flexible</option>
                <option value="Jul-Oct" className="bg-[#080907] text-white">July - October (Great Migration)</option>
                <option value="Jan-Mar" className="bg-[#080907] text-white">January - March (Calving Season)</option>
                <option value="Dec" className="bg-[#080907] text-white">December (Festive Season)</option>
                <option value="Apr-Jun" className="bg-[#080907] text-white">April - June (Green Season Specials)</option>
              </select>
            </div>

            {/* Search Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-[#52650B] hover:bg-[#435209] text-white font-semibold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 shadow"
              >
                <Compass className="w-4 h-4 text-[#E9DFC9]" />
                <span>Find Safari Packages</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="hidden lg:flex absolute bottom-24 right-10 flex-col items-center gap-1 text-white/50 text-[10px] tracking-widest uppercase">
        <span className="rotate-90 origin-right translate-y-3">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#B96829]" />
      </div>
    </section>
  );
};
