import React, { useState } from 'react';
import { BRAND_LOGO } from '../data/safariData';
import { PageRoute } from '../types';
import { Mail, Phone, MapPin, Send, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const navItems: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Destinations', page: 'destinations' },
    { label: 'Safari Packages', page: 'packages' },
    { label: 'Signature Experiences', page: 'experiences' },
    { label: 'Bespoke Safari Planner', page: 'bespoke' },
    { label: 'Photography Gallery', page: 'gallery' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const topDestinations = [
    'Maasai Mara National Reserve',
    'Amboseli National Park',
    'Serengeti National Park',
    'Ngorongoro Crater',
    'Samburu National Reserve',
    'Ol Pejeta Conservancy',
    'Diani Beach & Indian Ocean',
    'Bwindi Gorilla Sanctuary'
  ];

  return (
    <footer className="bg-[#080907] text-[#E9DFC9] border-t border-[#34451C]/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Newsletter & Brand Banner Strip */}
        <div className="p-8 sm:p-10 bg-[#242522]/60 border border-white/10 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-[#B96829] font-semibold block mb-1">
              Stay Connected With East Africa
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Twiga Trails Safari Journal
            </h3>
            <p className="text-xs text-white/70 mt-2 font-light leading-relaxed">
              Subscribe for seasonal wildlife updates, migration movement alerts, photography tips, and exclusive safari offers.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="p-3 bg-[#52650B]/20 border border-[#52650B] text-emerald-200 text-xs rounded-lg text-center font-medium">
                ✓ Karibu! You are subscribed to Twiga Trails Safari Journal.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-2.5 w-full max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full sm:w-72 p-3 bg-black/60 border border-white/20 rounded text-xs text-white focus:outline-none focus:border-[#B96829]"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto py-3 px-6 bg-[#B96829] hover:bg-[#a0561e] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shrink-0 flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main 4-Column Footer Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Lockup & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => onNavigate('home')} 
              className="cursor-pointer inline-block"
            >
              <img
                src={BRAND_LOGO}
                alt="Twiga Trails Safaris - Your Travel Buddies"
                className="h-14 sm:h-16 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/public/assets/aistudio/Twiga-Trails-Safaris-Logo2_facc5b60.png';
                }}
              />
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm font-light">
              Twiga Trails Safaris is a premier tour and safari operator in Kenya and East Africa. 
              We curate authentic, ethical wildlife experiences and luxury holidays with personal dedication.
            </p>

            <div className="pt-2 text-xs text-[#E9DFC9] font-medium italic">
              "Explore Africa. Travel Beyond Ordinary."
            </div>

            <div className="flex items-center gap-3 text-xs text-white/60 pt-2">
              <span className="p-1.5 rounded bg-white/5 border border-white/10 hover:text-white cursor-pointer">Instagram</span>
              <span className="p-1.5 rounded bg-white/5 border border-white/10 hover:text-white cursor-pointer">Facebook</span>
              <span className="p-1.5 rounded bg-white/5 border border-white/10 hover:text-white cursor-pointer">YouTube</span>
              <span className="p-1.5 rounded bg-white/5 border border-white/10 hover:text-white cursor-pointer">TripAdvisor</span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              {navItems.map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => {
                      onNavigate(item.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-white/70 hover:text-[#B96829] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Top Destinations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Destinations
            </h4>
            <ul className="space-y-2 text-xs">
              {topDestinations.map((dest, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      onNavigate('destinations');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-white/70 hover:text-[#52650B] transition-colors text-left"
                  >
                    {dest}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Head Office & Direct Contacts */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Nairobi Head Office
            </h4>
            <div className="space-y-3 text-xs text-white/75 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B96829] shrink-0 mt-0.5" />
                <span>Nairobi Tourism Hub, Karen / Westlands, Kenya</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#52650B] shrink-0 mt-0.5" />
                <span>+254 700 000 000 (Placeholder)</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#E9DFC9] shrink-0 mt-0.5" />
                <span>info@twigatrailssafaris.com</span>
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-3 bg-[#B96829] hover:bg-[#a0561e] text-white font-semibold text-[11px] uppercase tracking-wider rounded transition-colors text-center"
                >
                  Book Your Safari
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Conservation & Legal Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <div>
            © {new Date().getFullYear()} Twiga Trails Safaris. All rights reserved. Brand signature: TWIGA TRAILS SAFARIS — YOUR TRAVEL BUDDIES.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#52650B]" />
              <span>Certified Wildlife Safety</span>
            </span>
            <span>·</span>
            <span>AMREF Flying Doctors Medical Cover</span>
            <span>·</span>
            <span>Responsible Tourism Kenya</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
