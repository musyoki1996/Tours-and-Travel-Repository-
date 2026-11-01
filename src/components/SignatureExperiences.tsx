import React from 'react';
import { SIGNATURE_EXPERIENCES } from '../data/safariData';
import { Experience } from '../types';
import { Sparkles, Compass, Check, ArrowRight, MessageSquare } from 'lucide-react';

interface SignatureExperiencesProps {
  onOpenBooking: (experienceTitle?: string) => void;
  onViewAll?: () => void;
  isFullPage?: boolean;
}

export const SignatureExperiences: React.FC<SignatureExperiencesProps> = ({
  onOpenBooking,
  onViewAll,
  isFullPage = false
}) => {
  const experiences = isFullPage ? SIGNATURE_EXPERIENCES : SIGNATURE_EXPERIENCES.slice(0, 4);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080907] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#B96829] font-semibold mb-2">
            Signature Wildlife Encounters
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Extraordinary African Experiences
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/70 font-light leading-relaxed">
            From floating in a hot air balloon over waking savannahs to sharing quiet campfire stories 
            under the Southern Cross with Maasai elders.
          </p>
        </div>

        {/* Alternate Editorial Row Cards */}
        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={exp.id}
                className={`p-6 sm:p-8 bg-[#242522]/50 border border-white/10 rounded-2xl flex flex-col ${
                  isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-8 items-center hover:border-[#B96829]/50 transition-all duration-300`}
              >
                {/* Media Column */}
                <div className="w-full lg:w-1/2 relative aspect-[16/10] rounded-xl overflow-hidden bg-black shrink-0">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-[11px] font-semibold text-[#E9DFC9]">
                    {exp.category}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs text-[#E9DFC9] italic font-serif">
                      "{exp.tagline}"
                    </p>
                  </div>
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                      {exp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light mb-6">
                      {exp.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-2 mb-6">
                      {exp.keyHighlights.map((point, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-white/90">
                          <Check className="w-4 h-4 text-[#52650B] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Meta tags as clean unboxed text */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/60 mb-6">
                      <div>
                        <strong className="text-[#E9DFC9]">Prime Locations:</strong> {exp.bestLocations.join(', ')}
                      </div>
                      <span>·</span>
                      <div>
                        <strong className="text-[#E9DFC9]">Duration:</strong> {exp.recommendedDuration}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenBooking(exp.title)}
                      className="py-2.5 px-6 bg-[#B96829] hover:bg-[#a0561e] text-white text-xs font-semibold uppercase tracking-wider rounded transition-all shadow flex items-center gap-2"
                    >
                      <span>Inquire About This Experience</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={`https://wa.me/254700000000?text=${encodeURIComponent(`Hello Twiga Trails Safaris, I would like to include the "${exp.title}" in my safari itinerary.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 bg-white/5 hover:bg-white/10 text-[#E9DFC9] border border-white/15 text-xs font-medium rounded transition-colors flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All button if on Home */}
        {!isFullPage && onViewAll && (
          <div className="mt-14 text-center">
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-[#E9DFC9] hover:text-white text-xs font-semibold uppercase tracking-widest rounded transition-all border border-white/20"
            >
              <span>Explore All Safari Experiences</span>
              <ArrowRight className="w-4 h-4 text-[#B96829]" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
