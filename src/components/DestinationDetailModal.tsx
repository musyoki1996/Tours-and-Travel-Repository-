import React from 'react';
import { Destination } from '../types';
import { X, Calendar, MapPin, Compass, ArrowRight, ShieldCheck, Mountain, Trees, MessageSquare } from 'lucide-react';

interface DestinationDetailModalProps {
  destination: Destination | null;
  onClose: () => void;
  onEnquire: (destName: string) => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destination,
  onClose,
  onEnquire
}) => {
  if (!destination) return null;

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

        {/* Media Frame */}
        <div className="relative aspect-[21/9] sm:aspect-[21/8] overflow-hidden bg-black">
          <img
            src={destination.featuredImage}
            alt={destination.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080907] via-[#080907]/50 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#B96829] mb-1">
              Destination Guide · {destination.country}
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              {destination.name}
            </h2>
            <p className="text-sm text-[#E9DFC9] mt-1 font-light italic">
              {destination.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Key Facts Quick Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-white/5 border border-white/10 rounded-xl text-xs">
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-[#B96829] shrink-0 mt-0.5" />
              <div>
                <span className="block text-white/50 uppercase text-[10px] tracking-wider">Best Time to Visit</span>
                <span className="text-white font-medium">{destination.bestTimeToVisit}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mountain className="w-4 h-4 text-[#52650B] shrink-0 mt-0.5" />
              <div>
                <span className="block text-white/50 uppercase text-[10px] tracking-wider">Altitude</span>
                <span className="text-white font-medium">{destination.altitude}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Trees className="w-4 h-4 text-[#E9DFC9] shrink-0 mt-0.5" />
              <div>
                <span className="block text-white/50 uppercase text-[10px] tracking-wider">Terrain</span>
                <span className="text-white font-medium">{destination.landscapeType}</span>
              </div>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-2">About {destination.name}</h3>
            <p className="text-sm text-white/80 leading-relaxed font-light">
              {destination.description}
            </p>
          </div>

          {/* Wildlife Highlights */}
          <div>
            <h3 className="text-base font-serif font-bold text-white mb-3">
              Wildlife Sightings & Ecosystem Highlights
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {destination.wildlifeHighlights.map((animal, idx) => (
                <div key={idx} className="p-3 bg-white/5 border border-white/10 rounded-lg flex items-center gap-2 text-xs text-white/90">
                  <span className="w-2 h-2 rounded-full bg-[#B96829]" />
                  <span>{animal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Activities */}
          <div>
            <h3 className="text-base font-serif font-bold text-white mb-3">
              Recommended Safari Activities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {destination.suggestedActivities.map((act, idx) => (
                <div key={idx} className="p-3.5 bg-white/5 border border-white/10 rounded-lg flex items-start gap-3 text-xs text-white/90">
                  <Compass className="w-4 h-4 text-[#52650B] shrink-0 mt-0.5" />
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href={`https://wa.me/254700000000?text=${encodeURIComponent(`Hello Twiga Trails Safaris, I would like to plan a visit to ${destination.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-2.5 px-5 bg-[#34451C] hover:bg-[#52650B] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Ask on WhatsApp</span>
            </a>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none py-2.5 px-5 text-xs text-[#E9DFC9] hover:text-white transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onEnquire(destination.name);
                }}
                className="flex-1 sm:flex-none py-3 px-8 bg-[#B96829] hover:bg-[#a0561e] text-white text-xs font-semibold uppercase tracking-wider rounded transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Enquire About {destination.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
