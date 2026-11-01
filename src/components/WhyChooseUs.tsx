import React from 'react';
import { ShieldCheck, Compass, HeartHandshake, Eye, Radio, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      index: '01',
      title: 'Certified KPSGA Guides & Local Companions',
      desc: 'Our driver-guides are Kenya Professional Safari Guides Association (KPSGA) certified. More than drivers, they are your safari buddies—passionate naturalists with sharp eyes for wildlife behaviour and stories of the land.',
      icon: Award
    },
    {
      index: '02',
      title: 'Heavy-Duty 4x4 Land Cruisers with Pop-up Roofs',
      desc: 'Custom-engineered specifically for African bush terrain. Fitted with large pop-up photographic roofs, heavy-duty suspension, inverter charging sockets for cameras, cooler boxes, and VHF communication radios.',
      icon: Compass
    },
    {
      index: '03',
      title: '100% Guaranteed Window Seat for Every Guest',
      desc: 'We never overcrowd our safari vehicles. Every traveller enjoys their own window seat with unobstructed 360-degree views, ample camera gear space, and personal beanbag rests for steady telephoto lens shooting.',
      icon: Eye
    },
    {
      index: '04',
      title: 'Your Pace, Your Africa – Truly Bespoke',
      desc: 'No rushed timetables or rigid schedules. If a lion pride is stalking near a watering hole at dusk, we stay and wait with you. Our itineraries are built around what you cherish most.',
      icon: HeartHandshake
    },
    {
      index: '05',
      title: 'Ethical Tourism & Conservation Pledge',
      desc: 'We strictly observe low-impact wildlife viewing etiquette—maintaining respectful distances, never harassing animals, supporting local community conservancies, and sourcing eco-certified wilderness camps.',
      icon: ShieldCheck
    },
    {
      index: '06',
      title: '24/7 Operations & Flying Doctors Cover Included',
      desc: 'Every Twiga Trails safari client is automatically covered by AMREF Flying Doctors emergency medical evacuation insurance, backed by continuous 24/7 dispatch coordination in Nairobi and Arusha.',
      icon: Radio
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F5EE] dark:bg-[#080907] border-t border-[#E9DFC9]/60 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#52650B] font-semibold mb-2">
            The Twiga Trails Difference
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#080907] dark:text-white tracking-tight">
            Why Travel With Your Safari Buddies?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#242522]/80 dark:text-[#E9DFC9]/80 font-normal leading-relaxed">
            A safari is not just a holiday—it is an encounter that stays in your soul. 
            Here is how we ensure your East African experience is seamless, ethical, and unforgettable.
          </p>
        </div>

        {/* 6-Pillar Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.index}
                className="p-7 bg-white dark:bg-[#181a15] rounded-xl border border-[#E9DFC9] dark:border-[#34451C] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-serif font-bold text-[#B96829]">
                      {item.index}.
                    </span>
                    <div className="p-2.5 rounded-lg bg-[#52650B]/10 dark:bg-[#52650B]/20 text-[#52650B]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#080907] dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#242522]/75 dark:text-[#E9DFC9]/75 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E9DFC9]/50 dark:border-white/10 flex items-center gap-2 text-[11px] font-semibold text-[#52650B] uppercase tracking-wider">
                  <span>Twiga Trails Quality Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
