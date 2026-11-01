import React from 'react';
import { TESTIMONIALS } from '../data/safariData';
import { Star, Quote, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F5EE] dark:bg-[#080907] border-t border-[#E9DFC9]/60 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#52650B] font-semibold mb-2">
            Traveller Stories & Memories
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#080907] dark:text-white tracking-tight">
            Journeys Shared with Our Safari Buddies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#242522]/80 dark:text-[#E9DFC9]/80 font-normal leading-relaxed">
            Read firsthand accounts from international guests who placed their African dreams into our hands.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 bg-white dark:bg-[#181a15] border border-[#E9DFC9] dark:border-[#34451C] rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating and Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#B96829]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#52650B]/30" />
                </div>

                <p className="text-xs sm:text-sm text-[#242522]/85 dark:text-[#E9DFC9]/85 leading-relaxed font-light italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Safari Trip Info */}
              <div className="pt-4 border-t border-[#E9DFC9]/60 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#080907] dark:bg-[#52650B] text-[#E9DFC9] dark:text-white font-serif font-bold text-xs flex items-center justify-center">
                    {t.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#080907] dark:text-white">
                      {t.clientName}
                    </h4>
                    <span className="text-xs text-[#242522]/60 dark:text-white/60">
                      {t.country} · {t.date}
                    </span>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[11px] font-semibold text-[#52650B] block">
                    Verified Journey
                  </span>
                  <span className="text-[10px] text-[#242522]/60 dark:text-white/50 line-clamp-1 max-w-[160px]">
                    {t.safariTrip}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Endorsement */}
        <div className="mt-12 text-center text-xs text-[#242522]/70 dark:text-[#E9DFC9]/70 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#52650B]" />
          <span>Real feedback from verified guests travelling across Kenya, Tanzania, and Uganda.</span>
        </div>

      </div>
    </section>
  );
};
