import React, { useState } from 'react';
import { Maximize2, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types/restaurant';
import { LightboxModal } from './LightboxModal';

export const Gallery: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleOpen = (idx: number) => {
    setSelectedIdx(idx);
  };

  const handleClose = () => {
    setSelectedIdx(null);
  };

  const handlePrev = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  const handleNext = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % GALLERY_ITEMS.length);
  };

  return (
    <section id="photos" className="py-20 bg-[#0B0B0B] text-white border-t border-[#C0C0C0]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181818] border border-[#FFD21F]/30 text-xs font-semibold text-[#FFD21F] tracking-widest uppercase mb-3">
            <Camera className="w-3.5 h-3.5 text-[#FFD21F]" /> Visual Story
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            OUR FOOD &amp; <span className="text-[#FFD21F]">MOMENTS</span>
          </h2>

          <p className="text-base sm:text-lg text-[#C0C0C0]">
            A glimpse into our kitchen, fiery grills, and welcoming dining atmosphere.
          </p>
        </div>

        {/* Gallery Grid (Responsive layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item: GalleryItem, idx: number) => (
            <div
              key={item.id}
              onClick={() => handleOpen(idx)}
              className="group relative rounded-2xl overflow-hidden bg-[#141414] border border-[#C0C0C0]/15 hover:border-[#FFD21F]/50 aspect-[4/3] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Overlay with subtle blur & gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                
                {/* Expand Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-[#0B0B0B]/80 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <Maximize2 className="w-4 h-4 text-[#FFD21F]" />
                </div>

                <span className="text-[11px] font-bold text-[#FFD21F] uppercase tracking-wider mb-1">
                  {item.category}
                </span>

                <h3 className="font-display text-lg font-bold text-white group-hover:text-[#FFD21F] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#C0C0C0] line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modern Lightbox */}
      <LightboxModal
        isOpen={selectedIdx !== null}
        item={selectedIdx !== null ? GALLERY_ITEMS[selectedIdx] : null}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
        currentIndex={selectedIdx ?? 0}
        totalCount={GALLERY_ITEMS.length}
      />
    </section>
  );
};
