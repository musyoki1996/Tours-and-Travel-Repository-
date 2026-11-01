import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/safariData';
import { GalleryItem } from '../types';
import { X, MapPin, Maximize2, ArrowRight } from 'lucide-react';

interface GallerySectionProps {
  onOpenBooking: (subject?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { key: 'all', label: 'All Photographs' },
    { key: 'wildlife', label: 'Wildlife' },
    { key: 'landscapes', label: 'Landscapes & Dawn' },
    { key: 'vehicles', label: 'Safari Fleet' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080907] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-[#B96829] font-semibold mb-2">
            Visual Safari Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Untamed Beauty in Every Frame
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/70 font-light leading-relaxed">
            A window into the dramatic wildlife encounters, vast golden horizons, and custom 4x4 safaris captured across Kenya and East Africa.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  selectedCategory === cat.key
                    ? 'bg-[#B96829] text-white shadow-md'
                    : 'bg-white/5 text-white/70 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-black/60 border border-white/10 cursor-pointer hover:border-[#B96829] transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-sm rounded-full text-white/70 group-hover:text-white transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#B96829]">
                  {item.categoryLabel}
                </span>
                <h3 className="text-base font-serif font-bold text-white group-hover:text-[#E9DFC9] transition-colors mt-0.5">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-white/60 mt-1">
                  <MapPin className="w-3 h-3 text-[#52650B]" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-[#080907] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 p-2.5 bg-black/70 hover:bg-black text-white/80 hover:text-white rounded-full transition-colors border border-white/20"
                aria-label="Close photo modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Display */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-black overflow-hidden flex items-center justify-center">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption & Location Details */}
              <div className="p-6 bg-[#080907] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#B96829] font-medium">
                    {activeItem.categoryLabel}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs text-white/70 mt-1 max-w-xl">
                    {activeItem.caption}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-white/50 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-[#52650B]" />
                    <span>{activeItem.location}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const title = activeItem.title;
                    setActiveItem(null);
                    onOpenBooking(`Experience like: ${title}`);
                  }}
                  className="py-2.5 px-6 bg-[#B96829] hover:bg-[#a0561e] text-white text-xs font-semibold uppercase tracking-wider rounded transition-all shrink-0 flex items-center gap-2 shadow"
                >
                  <span>Experience This</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
