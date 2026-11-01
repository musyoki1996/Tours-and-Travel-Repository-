import React from 'react';
import { MAASAI_MARA_IMAGE } from '../data/safariData';
import { Compass, Heart, Leaf, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutUsSectionProps {
  onOpenBooking: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-[#F8F5EE] dark:bg-[#080907] py-16 sm:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Hero Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#52650B] font-semibold mb-2">
              Our Story & Heritage · Twiga Trails Safaris
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#080907] dark:text-white tracking-tight leading-tight mb-6">
              Your Travel Buddies in the Wild Heart of Africa
            </h1>
            <p className="text-sm sm:text-base text-[#242522]/85 dark:text-[#E9DFC9]/85 leading-relaxed font-light mb-4">
              Twiga Trails Safaris was founded with a singular conviction: that experiencing Africa’s raw wilderness 
              should be personal, respectful, and deeply enriching. In Swahili, <em className="font-serif">"Twiga"</em> means giraffe—the graceful sentinel of the savannah who sees far across the horizon.
            </p>
            <p className="text-sm sm:text-base text-[#242522]/85 dark:text-[#E9DFC9]/85 leading-relaxed font-light mb-6">
              Our brand signature, <strong>"Your Travel Buddies"</strong>, reflects how we work. We are not a faceless corporate booking portal. 
              We are experienced safari companions, born and raised in East Africa, who accompany you through the vast plains of the Maasai Mara, 
              the elephant kingdoms of Amboseli, and the endless horizons of the Serengeti.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E9DFC9] dark:border-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#080907] dark:text-white">
                <CheckCircle className="w-4 h-4 text-[#52650B]" />
                <span>Locally Owned & Headquartered in Nairobi</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#080907] dark:text-white">
                <CheckCircle className="w-4 h-4 text-[#52650B]" />
                <span>KPSGA Certified Field Guides</span>
              </div>
            </div>
          </div>

          {/* Media Collage */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-black">
              <img
                src={MAASAI_MARA_IMAGE}
                alt="Pride of lions in Maasai Mara"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] uppercase tracking-wider text-[#E9DFC9]">Maasai Mara National Reserve</span>
                <p className="text-xs font-serif italic text-white/90">"Preserving wildlife corridors for generations to come."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, and Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white dark:bg-[#181a15] border border-[#E9DFC9] dark:border-[#34451C] rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-[#52650B]/10 dark:bg-[#52650B]/20 text-[#52650B] rounded-xl flex items-center justify-center mb-5">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#080907] dark:text-white mb-2">Our Mission</h3>
            <p className="text-xs text-[#242522]/80 dark:text-[#E9DFC9]/75 leading-relaxed font-normal">
              To deliver unforgettable, intimate, and secure safari journeys across East Africa, matching discerning travellers 
              with exceptional local wildlife guides, bespoke vehicles, and vetted eco-lodges that celebrate Africa’s natural majesty.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-[#181a15] border border-[#E9DFC9] dark:border-[#34451C] rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-[#B96829]/10 dark:bg-[#B96829]/20 text-[#B96829] rounded-xl flex items-center justify-center mb-5">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#080907] dark:text-white mb-2">Our Vision</h3>
            <p className="text-xs text-[#242522]/80 dark:text-[#E9DFC9]/75 leading-relaxed font-normal">
              To be the most trusted, warm, and highly recommended safari partner in East Africa, distinguished by the warmth 
              of genuine friendship, flawless logistics, and unyielding dedication to wildlife conservation.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-[#181a15] border border-[#E9DFC9] dark:border-[#34451C] rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-[#34451C]/10 dark:bg-[#34451C]/30 text-[#34451C] dark:text-emerald-400 rounded-xl flex items-center justify-center mb-5">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#080907] dark:text-white mb-2">Responsible Tourism</h3>
            <p className="text-xs text-[#242522]/80 dark:text-[#E9DFC9]/75 leading-relaxed font-normal">
              Tourism must directly protect the lands and communities it touches. We enforce strict low-impact game drive etiquette, 
              support community conservancies, and contribute directly to ranger and habitat protection initiatives.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-[#080907] text-white rounded-2xl p-8 sm:p-14 border border-[#34451C]/60">
          <div className="max-w-3xl mb-10">
            <div className="text-xs uppercase tracking-widest text-[#B96829] font-semibold mb-2">
              Guiding Principles
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
              The Values That Steer Every Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t border-white/15 pt-4">
              <span className="text-[#B96829] font-serif text-lg font-bold">01.</span>
              <h4 className="text-base font-serif font-semibold text-white mt-1 mb-2">Authentic Companionship</h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                We treat every guest not as an itinerary number, but as a valued friend being welcomed into our home continent.
              </p>
            </div>
            <div className="border-t border-white/15 pt-4">
              <span className="text-[#B96829] font-serif text-lg font-bold">02.</span>
              <h4 className="text-base font-serif font-semibold text-white mt-1 mb-2">Zero Hidden Fees</h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Transparent proposals with explicit park conservation fees, accommodation rates, and emergency cover included upfront.
              </p>
            </div>
            <div className="border-t border-white/15 pt-4">
              <span className="text-[#B96829] font-serif text-lg font-bold">03.</span>
              <h4 className="text-base font-serif font-semibold text-white mt-1 mb-2">Safety & Precision</h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Meticulously serviced 4WD vehicles, daily safety checks, VHF radio links, and AMREF Flying Doctors coverage on all safaris.
              </p>
            </div>
            <div className="border-t border-white/15 pt-4">
              <span className="text-[#B96829] font-serif text-lg font-bold">04.</span>
              <h4 className="text-base font-serif font-semibold text-white mt-1 mb-2">Wildlife Respect</h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                We never harass or crowd wild animals. Our ethical viewing protocols ensure wildlife can thrive undisturbed in their sanctuary.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="p-8 sm:p-12 bg-[#E9DFC9]/40 dark:bg-[#181a15] border border-[#E9DFC9] dark:border-[#34451C] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif font-bold text-[#080907] dark:text-white mb-1">
              Ready to meet your safari buddies?
            </h3>
            <p className="text-xs sm:text-sm text-[#242522]/80 dark:text-[#E9DFC9]/80">
              Let us tailor an unforgettable journey across Kenya, Tanzania, or Uganda for your family or group.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="py-3.5 px-8 bg-[#B96829] hover:bg-[#a0561e] text-white text-xs font-semibold uppercase tracking-wider rounded transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            <span>Plan Your Safari With Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
