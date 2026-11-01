import React from 'react';
import { TRAVEL_ARTICLES } from '../data/safariData';
import { Clock, ArrowRight } from 'lucide-react';

interface TravelArticlesSectionProps {
  onOpenBooking: (topic?: string) => void;
}

export const TravelArticlesSection: React.FC<TravelArticlesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F5EE] dark:bg-[#0c0d0a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#52650B] font-semibold mb-2">
              Safari Journal & Insights
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#080907] dark:text-white tracking-tight">
              African Travel Inspiration
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#242522]/80 dark:text-[#E9DFC9]/80 max-w-2xl font-normal leading-relaxed">
              Expert guides written by our senior safari buddies to help you prepare for the Great Migration, 
              pack effectively, and choose the right parks.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAVEL_ARTICLES.map((art) => (
            <div
              key={art.id}
              className="p-7 bg-white dark:bg-[#181a15] border border-[#E9DFC9] dark:border-[#34451C] rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#242522]/60 dark:text-white/60 mb-3">
                  <span className="text-[#52650B] font-semibold uppercase tracking-wider">{art.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#B96829]" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-[#080907] dark:text-white mb-3 leading-snug">
                  {art.title}
                </h3>
                
                <p className="text-xs text-[#242522]/75 dark:text-[#E9DFC9]/75 leading-relaxed mb-6 font-light">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E9DFC9]/60 dark:border-white/10">
                <button
                  onClick={() => onOpenBooking(`Inquiry related to: ${art.title}`)}
                  className="text-xs font-semibold text-[#B96829] hover:text-[#a0561e] flex items-center gap-1.5 transition-colors group"
                >
                  <span>Plan an Itinerary Around This</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
