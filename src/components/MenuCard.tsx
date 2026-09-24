import React from 'react';
import { Plus, Flame, Check } from 'lucide-react';
import { MenuItem } from '../types/restaurant';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
  isAdded?: boolean;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, onAddToCart, isAdded = false }) => {
  return (
    <article className="group relative rounded-2xl bg-[#141414] hover:bg-[#181818] border border-[#C0C0C0]/15 hover:border-[#FFD21F]/40 transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full overflow-hidden">
      
      {/* Food Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1e1e1e]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Styled SVG fallback container if image fails
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />

        {/* Gradient Scrim for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30 pointer-events-none" />

        {/* Dietary & Spicy Badges (Top Row) */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {/* Veg / Non-Veg Indicator */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0B0B0B]/85 backdrop-blur-md border border-[#C0C0C0]/25 text-[11px] font-semibold">
            <span
              className={`w-2 h-2 rounded-full ${
                item.dietary === 'veg' ? 'bg-emerald-500 ring-2 ring-emerald-500/20' : 'bg-[#E21B23] ring-2 ring-[#E21B23]/20'
              }`}
            />
            <span className={item.dietary === 'veg' ? 'text-emerald-400' : 'text-[#C0C0C0]'}>
              {item.dietary === 'veg' ? 'Veg' : 'Non-Veg'}
            </span>
          </div>

          {/* Spicy Level or Popular Tag */}
          <div className="flex items-center gap-1.5">
            {item.spicyLevel && item.spicyLevel > 0 && (
              <div
                className="flex items-center gap-0.5 px-2 py-1 rounded-md bg-[#0B0B0B]/85 backdrop-blur-md border border-[#E21B23]/40 text-[#E21B23] text-[11px] font-bold"
                title={`Spicy Level: ${item.spicyLevel}/3`}
              >
                <Flame className="w-3.5 h-3.5 fill-[#E21B23]" />
                {item.spicyLevel > 1 && <span>{item.spicyLevel}x</span>}
              </div>
            )}
            {item.isPopular && (
              <div className="px-2 py-1 rounded-md bg-[#FFD21F] text-black text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                Popular
              </div>
            )}
          </div>
        </div>

        {/* Portion indicator bottom right */}
        {item.portion && (
          <div className="absolute bottom-2.5 right-3 text-[11px] text-[#C0C0C0] bg-[#0B0B0B]/80 px-2 py-0.5 rounded backdrop-blur-sm">
            {item.portion}
          </div>
        )}
      </div>

      {/* Food Details Body */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Category / Arabic Title */}
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[11px] font-semibold text-[#FFD21F] tracking-wider uppercase">
              {item.category.replace('-', ' ')}
            </span>
            {item.arabicName && (
              <span className="text-xs text-[#C0C0C0]/80 font-normal dir-rtl">
                {item.arabicName}
              </span>
            )}
          </div>

          {/* Food Title */}
          <h3 className="font-display text-lg font-bold text-white group-hover:text-[#FFD21F] transition-colors leading-snug mb-2">
            {item.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-[#C0C0C0] line-clamp-2 leading-relaxed mb-4">
            {item.description}
          </p>
        </div>

        {/* Footer: Price & Add to Order CTA */}
        <div className="pt-3 border-t border-[#C0C0C0]/15 flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-[#C0C0C0]/70 font-medium">Price</span>
            <div className="flex items-baseline gap-1">
              <span className="font-mono tabular-nums text-xl font-bold text-[#FFD21F]">
                {item.price}
              </span>
              <span className="text-xs font-semibold text-white">
                {item.currency}
              </span>
            </div>
          </div>

          <button
            onClick={() => onAddToCart(item)}
            className={`px-3.5 py-2 rounded-xl font-semibold text-xs tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-md active:scale-95 ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-[#E21B23] hover:bg-[#c91219] text-white hover:shadow-[#E21B23]/30'
            }`}
            aria-label={`Add ${item.name} to order`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>ADDED</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
                <span>ORDER</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
