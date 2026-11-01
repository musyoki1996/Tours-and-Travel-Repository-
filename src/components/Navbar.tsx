import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { BRAND_LOGO } from '../data/safariData';
import { Menu, X, MessageSquare, Compass, Sun, Moon, Search, FileText } from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: (packageTitle?: string) => void;
  onOpenEnquiries: () => void;
  enquiriesCount: number;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onSetThemeMode?: (dark: boolean) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
  onOpenEnquiries,
  enquiriesCount,
  isDarkMode,
  onToggleTheme,
  onSetThemeMode,
  onOpenSearch
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Destinations', page: 'destinations' },
    { label: 'Safari Packages', page: 'packages' },
    { label: 'Experiences', page: 'experiences' },
    { label: 'Bespoke Safari', page: 'bespoke' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSetDaylight = () => {
    if (onSetThemeMode) {
      onSetThemeMode(false);
    } else if (isDarkMode) {
      onToggleTheme();
    }
  };

  const handleSetNight = () => {
    if (onSetThemeMode) {
      onSetThemeMode(true);
    } else if (!isDarkMode) {
      onToggleTheme();
    }
  };

  return (
    <>
      {/* Top subtle emergency / contact announcement strip */}
      <div className="bg-[#080907] text-[#E9DFC9] text-xs py-1.5 px-4 sm:px-8 border-b border-[#34451C]/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-3">
            <span className="text-[#B96829] font-medium tracking-wide">TWIGA TRAILS SAFARIS</span>
            <span className="hidden sm:inline text-white/40">·</span>
            <span className="hidden sm:inline text-white/70">Your Travel Buddies in Kenya & East Africa</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/254700000000?text=Hello%20Twiga%20Trails%20Safaris,%20I%20would%20like%20to%20plan%20a%20safari." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#B96829] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#52650B]" />
              <span className="hidden md:inline">WhatsApp: +254 700 000 000</span>
              <span className="md:hidden">WhatsApp</span>
            </a>
            <span className="text-white/30">|</span>
            <button 
              onClick={onOpenEnquiries}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Compass className="w-3.5 h-3.5 text-[#B96829]" />
              <span>My Enquiries ({enquiriesCount})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080907]/95 backdrop-blur-md shadow-lg border-b border-[#34451C]/60 py-2.5'
            : 'bg-[#080907]/90 backdrop-blur-sm border-b border-white/10 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4 lg:gap-6">
          
          {/* Zone 1: Logo Brand Zone */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <img
              src={BRAND_LOGO}
              alt="Twiga Trails Safaris - Your Travel Buddies"
              className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-102"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/public/assets/aistudio/Twiga-Trails-Safaris-Logo2_facc5b60.png';
              }}
            />
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-6">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-xs font-medium tracking-wider uppercase transition-colors whitespace-nowrap shrink-0 relative py-1.5 ${
                    isActive
                      ? 'text-[#B96829] font-semibold'
                      : 'text-[#E9DFC9] hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B96829] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Evenly Spaced Icons & Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            
            {/* Evenly Spaced Icons Group */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* 1. Search Icon Button */}
              <button
                onClick={onOpenSearch}
                className="w-9 h-9 sm:w-10 sm:h-10 text-[#E9DFC9] hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg transition-all flex items-center justify-center shrink-0"
                aria-label="Search destinations and packages"
                title="Search safaris (Press to open)"
              >
                <Search className="w-4 h-4 text-[#B96829]" />
              </button>

              {/* 2. Daylight (Sun) Icon Button */}
              <button
                onClick={handleSetDaylight}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg transition-all flex items-center justify-center shrink-0 border ${
                  !isDarkMode
                    ? 'bg-amber-500/20 text-amber-300 border-amber-400/60 shadow-sm'
                    : 'bg-white/5 text-[#E9DFC9]/70 hover:text-amber-300 hover:bg-white/10 border-white/15'
                }`}
                aria-label="Switch to daylight light mode"
                title="Daylight Mode (Warm Ivory)"
              >
                <Sun className={`w-4 h-4 ${!isDarkMode ? 'text-amber-300 animate-spin-slow' : 'text-[#E9DFC9]/70'}`} />
              </button>

              {/* 3. Night (Moon) Icon Button */}
              <button
                onClick={handleSetNight}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg transition-all flex items-center justify-center shrink-0 border ${
                  isDarkMode
                    ? 'bg-[#52650B]/30 text-white border-[#52650B] shadow-sm'
                    : 'bg-white/5 text-[#E9DFC9]/70 hover:text-white hover:bg-white/10 border-white/15'
                }`}
                aria-label="Switch to savannah night dark mode"
                title="Night Mode (Deep African Savannah)"
              >
                <Moon className={`w-4 h-4 ${isDarkMode ? 'text-[#E9DFC9]' : 'text-[#E9DFC9]/70'}`} />
              </button>
            </div>

            {/* Quote Button */}
            <button
              onClick={() => onOpenBooking('Safari Quotation Request')}
              className="inline-flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#52650B] hover:bg-[#435209] active:scale-98 transition-all rounded shadow-sm whitespace-nowrap gap-1.5"
              title="Request a tailored quotation"
            >
              <FileText className="w-3.5 h-3.5 hidden sm:inline" />
              <span>Get Quote</span>
            </button>

            {/* Book Your Safari Button */}
            <button
              onClick={() => onOpenBooking()}
              className="hidden lg:inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#B96829] hover:bg-[#a0561e] active:scale-98 transition-all rounded shadow-md whitespace-nowrap"
            >
              Book Your Safari
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-[#E9DFC9] hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-out Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#080907] border-b border-[#34451C] px-6 py-6 transition-all duration-300">
            <div className="flex flex-col space-y-3.5">
              
              {/* Mobile Quick Action Strip with Even Spacing */}
              <div className="flex items-center justify-between pb-3 border-b border-[#34451C]/60 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSearch();
                  }}
                  className="flex items-center gap-2 py-2 px-3 bg-white/5 border border-white/15 rounded-lg text-xs text-[#E9DFC9] hover:text-white flex-1"
                >
                  <Search className="w-3.5 h-3.5 text-[#B96829]" />
                  <span>Search Safaris...</span>
                </button>

                {/* Mobile Daylight / Moon Switch */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSetDaylight}
                    className={`p-2 rounded-lg border text-xs flex items-center gap-1 ${
                      !isDarkMode
                        ? 'bg-amber-500/20 text-amber-300 border-amber-400/60'
                        : 'bg-white/5 border-white/15 text-[#E9DFC9]'
                    }`}
                    title="Daylight Mode"
                  >
                    <Sun className="w-3.5 h-3.5 text-amber-300" />
                    <span className="text-[11px]">Day</span>
                  </button>

                  <button
                    onClick={handleSetNight}
                    className={`p-2 rounded-lg border text-xs flex items-center gap-1 ${
                      isDarkMode
                        ? 'bg-[#52650B]/30 text-white border-[#52650B]'
                        : 'bg-white/5 border-white/15 text-[#E9DFC9]'
                    }`}
                    title="Night Mode"
                  >
                    <Moon className="w-3.5 h-3.5 text-[#E9DFC9]" />
                    <span className="text-[11px]">Night</span>
                  </button>
                </div>
              </div>

              {navLinks.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.page}
                    onClick={() => handleNavClick(item.page)}
                    className={`text-left text-sm font-medium tracking-wide py-2 px-3 rounded transition-colors ${
                      isActive
                        ? 'bg-[#34451C]/50 text-[#B96829] font-semibold'
                        : 'text-[#E9DFC9] hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              
              <div className="pt-4 border-t border-[#34451C]/60 flex flex-col gap-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking('Safari Quotation Request');
                    }}
                    className="w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#52650B] hover:bg-[#435209] rounded shadow"
                  >
                    Get Quote
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#B96829] hover:bg-[#a0561e] rounded shadow"
                  >
                    Book Safari
                  </button>
                </div>

                <a
                  href="https://wa.me/254700000000?text=Hello%20Twiga%20Trails%20Safaris,%20I%20would%20like%20to%20enquire%20about%20a%20safari."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 text-xs font-medium tracking-wide text-[#E9DFC9] bg-[#34451C] hover:bg-[#52650B] rounded flex items-center justify-center gap-2 mt-1"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  Chat on WhatsApp (+254 700 000 000)
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
