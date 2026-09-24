import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types/restaurant';

interface LightboxModalProps {
  isOpen: boolean;
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalCount: number;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  item,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalCount,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar Controls */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
        <span className="text-xs font-mono text-[#C0C0C0] bg-black/60 px-3 py-1.5 rounded-lg border border-[#C0C0C0]/20 pointer-events-auto">
          {currentIndex + 1} / {totalCount}
        </span>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-black/70 hover:bg-neutral-800 text-white border border-[#C0C0C0]/30 transition-colors pointer-events-auto focus:outline-none"
          aria-label="Close photo preview"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-neutral-800 text-white border border-[#C0C0C0]/30 transition-colors z-20 focus:outline-none hidden sm:flex"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-neutral-800 text-white border border-[#C0C0C0]/30 transition-colors z-20 focus:outline-none hidden sm:flex"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[72vh] max-w-full object-contain rounded-xl shadow-2xl border border-[#C0C0C0]/20"
          referrerPolicy="no-referrer"
        />

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#FFD21F] text-black text-[10px] font-extrabold uppercase tracking-wider mb-1.5">
            {item.category}
          </div>
          <h3 className="font-display text-lg sm:text-xl font-bold text-white">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#C0C0C0] mt-1">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};
