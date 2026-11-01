import React from 'react';
import { SafariPackage } from '../types';
import { X, Check, AlertCircle, Calendar, MapPin, Users, Clock, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';

interface PackageDetailModalProps {
  pkg: SafariPackage | null;
  onClose: () => void;
  onRequestQuote: (pkg: SafariPackage) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  pkg,
  onClose,
  onRequestQuote
}) => {
  if (!pkg) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-[#080907] text-[#E9DFC9] border border-[#34451C] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-white/70 hover:text-white bg-black/60 hover:bg-black/90 rounded-full transition-colors border border-white/20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Hero */}
        <div className="relative aspect-[21/9] sm:aspect-[21/8] overflow-hidden bg-black">
          <img
            src={pkg.featuredImage}
            alt={pkg.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080907] via-[#080907]/50 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#B96829] mb-1">
              {pkg.categoryLabel} · {pkg.country}
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              {pkg.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/80 mt-2">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#B96829]" />
                {pkg.durationText}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#52650B]" />
                {pkg.destination}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Overview & Pricing Strip */}
          <div className="p-5 bg-white/5 border border-white/10 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-white/50">Indicative Investment</div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-[#E9DFC9]">
                {pkg.indicativePrice}
              </div>
              <p className="text-[11px] text-white/60 italic mt-0.5">{pkg.priceNote}</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/254700000000?text=${encodeURIComponent(`Hello Twiga Trails Safaris, I would like to enquire about the "${pkg.title}".`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 bg-[#34451C] hover:bg-[#52650B] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  onRequestQuote(pkg);
                }}
                className="py-2.5 px-6 bg-[#B96829] hover:bg-[#a0561e] text-white text-xs font-semibold uppercase tracking-wider rounded transition-all flex items-center gap-1.5 shadow"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Short Narrative */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-2">Itinerary Overview</h3>
            <p className="text-sm text-white/80 leading-relaxed font-light">
              {pkg.shortDescription}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-base font-serif font-bold text-white mb-3 flex items-center gap-2">
              <span>Safari Highlights</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {pkg.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs text-white/90">
                  <Check className="w-4 h-4 text-[#52650B] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Day-by-Day Itinerary Accordion / List */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">
              Day-by-Day Journey
            </h3>
            <div className="space-y-4">
              {pkg.itinerary.map((day) => (
                <div
                  key={day.day}
                  className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#B96829]/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 bg-[#52650B] text-white text-xs font-bold rounded">
                        Day {day.day}
                      </span>
                      <h4 className="text-base font-serif font-semibold text-white">
                        {day.title}
                      </h4>
                    </div>
                    <span className="text-xs text-[#B96829] font-medium">{day.location}</span>
                  </div>
                  
                  <p className="text-xs text-white/75 leading-relaxed font-light mt-2 mb-3">
                    {day.description}
                  </p>

                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-4 text-[11px] text-white/60">
                    <div>
                      <strong className="text-[#E9DFC9]">Meals:</strong> {day.meals}
                    </div>
                    <div>
                      <strong className="text-[#E9DFC9]">Stay:</strong> {day.accommodation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#52650B] mb-3 flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>What’s Included</span>
              </h4>
              <ul className="space-y-2 text-xs text-white/80">
                {pkg.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#52650B] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#B96829] mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>What’s Excluded</span>
              </h4>
              <ul className="space-y-2 text-xs text-white/80">
                {pkg.exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#B96829] font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Twiga Trails Safari Fleet Guarantee */}
          <div className="p-5 bg-[#34451C]/30 border border-[#52650B]/60 rounded-xl flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-[#52650B] shrink-0 mt-1" />
            <div className="text-xs text-white/80 leading-relaxed">
              <strong className="text-white block font-serif text-sm mb-1">The Twiga Trails Safari Guarantee</strong>
              Guaranteed window seat for all passengers, custom pop-up roof for unobstructed 360° photographic viewing, 
              complimentary AMREF Flying Doctors emergency medical evacuation cover, and full-time dedicated safari guidance.
            </div>
          </div>

          {/* Footer Modal CTA */}
          <div className="pt-4 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="py-2.5 px-5 text-xs text-[#E9DFC9] hover:text-white transition-colors"
            >
              Close Window
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(pkg);
              }}
              className="py-3 px-8 bg-[#B96829] hover:bg-[#a0561e] text-white text-xs font-semibold uppercase tracking-wider rounded transition-all shadow-lg flex items-center gap-2"
            >
              <span>Customise & Book This Package</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
