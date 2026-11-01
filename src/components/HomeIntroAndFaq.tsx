import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/safariData';
import { ChevronDown } from 'lucide-react';

interface HomeIntroAndFaqProps {
  onOpenBooking: () => void;
  onExplorePackages: () => void;
}

export const HomeIntroAndFaq: React.FC<HomeIntroAndFaqProps> = ({ onOpenBooking, onExplorePackages }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <>
      {/* Introduction: Welcome to Twiga Trails Safaris */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#080907] border-b border-[#E9DFC9]/60 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-widest text-[#52650B] font-semibold">
                Welcome to Twiga Trails Safaris
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#080907] dark:text-white tracking-tight leading-tight">
                Authentic African Journeys Guided by Passion and Heritage
              </h2>
              <div className="h-0.5 w-16 bg-[#B96829]" />
            </div>

            <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#242522]/85 dark:text-[#E9DFC9]/85 leading-relaxed font-light">
              <p>
                From the thunderous hooves of over a million wildebeest traversing the Mara River to 
                the tranquil sight of giant tusked elephants moving in the shadow of Mount Kilimanjaro, 
                East Africa is a land of rare, heart-stirring wonder.
              </p>
              <p>
                At <strong>Twiga Trails Safaris</strong>, we consider ourselves more than tour operators—we are 
                <strong> Your Travel Buddies</strong>. We design journeys tailored to your rhythm, whether you seek 
                an intimate family holiday, a high-end photographic safari, a romantic honeymoon retreat, or an adrenaline-fueled trek.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
                <button
                  onClick={onExplorePackages}
                  className="py-3 px-6 bg-[#080907] dark:bg-white/10 hover:bg-[#242522] dark:hover:bg-white/20 text-[#E9DFC9] dark:text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors border border-transparent dark:border-white/10"
                >
                  Explore Our Packages
                </button>
                <button
                  onClick={onOpenBooking}
                  className="py-3 px-6 bg-[#B96829] hover:bg-[#a0561e] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow"
                >
                  Request a Quotation
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F5EE] dark:bg-[#0c0d0a] transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-widest text-[#52650B] font-semibold mb-2">
              Safari Planning Essentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#080907] dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#242522]/75 dark:text-[#E9DFC9]/75 font-normal">
              Practical guidance to ensure you step into the African wilderness with confidence.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#181a15] border border-[#E9DFC9] dark:border-[#34451C] rounded-xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F8F5EE]/50 dark:hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-serif font-bold text-[#080907] dark:text-white">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#B96829] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-[#242522]/80 dark:text-[#E9DFC9]/80 leading-relaxed font-light border-t border-[#E9DFC9]/40 dark:border-white/10">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
};
