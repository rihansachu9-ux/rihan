import React from 'react';
import { ArrowRight, Flame, Clock, Users, Tag } from 'lucide-react';
import { SPECIAL_OFFER } from '../data/restaurantData';

interface SpecialOfferProps {
  onOrderSpecial: () => void;
}

export const SpecialOffer: React.FC<SpecialOfferProps> = ({ onOrderSpecial }) => {
  return (
    <section className="py-20 bg-[#0B0B0B] relative overflow-hidden border-t border-b border-[#C0C0C0]/15">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#FFD21F]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#E21B23]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E21B23]/15 border border-[#E21B23]/40 text-xs font-bold text-[#E21B23] tracking-widest uppercase mb-3">
            <Flame className="w-3.5 h-3.5 fill-[#E21B23]" /> Limited Time Celebration
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
            YAMAMA <span className="text-[#FFD21F]">SPECIAL</span>
          </h2>

          <p className="text-base sm:text-lg text-[#FFD21F] font-semibold tracking-wide">
            Taste more. Enjoy more.
          </p>
        </div>

        {/* Big Promotional Banner Card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#181818] via-[#141414] to-[#0E0E0E] border-2 border-[#FFD21F]/40 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Left: Image Showcase with Discount Tag */}
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[460px] overflow-hidden group">
              <img
                src={SPECIAL_OFFER.image}
                alt={SPECIAL_OFFER.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#181818]" />
              
              {/* Discount Tag */}
              <div className="absolute top-5 left-5 bg-[#E21B23] text-white px-4 py-2 rounded-xl font-display font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-xl flex items-center gap-1.5 border border-[#FFD21F]/40 animate-pulse">
                <Tag className="w-4 h-4" />
                <span>{SPECIAL_OFFER.discountText}</span>
              </div>
            </div>

            {/* Right: Offer Details, Pricing & Order Action */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                
                {/* Meta Row */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#C0C0C0] mb-4">
                  <span className="flex items-center gap-1 text-[#FFD21F]">
                    <Users className="w-4 h-4" /> Serves 4-6 Family
                  </span>
                  <span className="text-[#C0C0C0]/30">•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> Freshly Grilled to Order
                  </span>
                </div>

                {/* Offer Title */}
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                  {SPECIAL_OFFER.title}
                </h3>

                {/* Offer Description */}
                <p className="text-sm sm:text-base text-[#C0C0C0] leading-relaxed mb-6">
                  {SPECIAL_OFFER.description}
                </p>

                {/* What's Included Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 text-xs sm:text-sm text-[#C0C0C0]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD21F]" />
                    <span>1x Whole Spiced Shawaya Chicken</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD21F]" />
                    <span>Large Bukhari Spiced Rice Tray</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD21F]" />
                    <span>2x Classic Chicken Shawarma Rolls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD21F]" />
                    <span>Hummus, Garlic Toum &amp; Drinks</span>
                  </div>
                </div>

              </div>

              {/* Price & CTA Action */}
              <div className="pt-6 border-t border-[#C0C0C0]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#C0C0C0]/70 font-semibold block mb-0.5">
                    Special Combo Price
                  </span>
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-mono tabular-nums text-3xl sm:text-4xl font-extrabold text-[#FFD21F]">
                      {SPECIAL_OFFER.offerPrice} {SPECIAL_OFFER.currency}
                    </span>
                    <span className="text-base text-[#C0C0C0]/60 line-through font-mono">
                      {SPECIAL_OFFER.regularPrice} {SPECIAL_OFFER.currency}
                    </span>
                  </div>
                </div>

                <button
                  onClick={onOrderSpecial}
                  className="px-8 py-4 rounded-xl bg-[#E21B23] hover:bg-[#c91219] text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-xl shadow-[#E21B23]/30 border border-[#FFD21F]/30 flex items-center justify-center gap-2 cursor-pointer group active:scale-95"
                >
                  <span>ORDER NOW</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
