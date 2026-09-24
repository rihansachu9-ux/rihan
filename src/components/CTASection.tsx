import React from 'react';
import { ArrowRight, PhoneCall, Flame } from 'lucide-react';

interface CTASectionProps {
  onOrderNowClick: () => void;
  onContactClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onOrderNowClick,
  onContactClick,
}) => {
  return (
    <section className="py-24 bg-[#0B0B0B] text-white relative overflow-hidden border-t border-b border-[#C0C0C0]/20">
      
      {/* Background Lighting Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,210,31,0.15),rgba(226,27,35,0.08),rgba(11,11,11,1))]" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Flame Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181818] border border-[#FFD21F]/40 text-xs font-bold text-[#FFD21F] tracking-widest uppercase mb-6 shadow-xl">
          <Flame className="w-4 h-4 text-[#E21B23] animate-pulse" />
          <span>Craving Fresh Charcoal Flavour?</span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 text-balance">
          HUNGRY? <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD21F] via-[#FFE376] to-[#FFD21F]">LET&apos;S MAKE IT DELICIOUS.</span>
        </h2>

        {/* Supporting Text */}
        <p className="text-lg sm:text-xl text-[#C0C0C0] max-w-2xl mx-auto mb-10 text-balance font-normal">
          Order your favourite YAMAMA SHAWAYA meal today.
        </p>

        {/* Two CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onOrderNowClick}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#E21B23] hover:bg-[#c91219] text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-2xl shadow-[#E21B23]/40 border border-[#FFD21F]/30 flex items-center justify-center gap-2.5 cursor-pointer group active:scale-95"
          >
            <span>ORDER NOW</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onContactClick}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#141414] hover:bg-[#1f1f1f] text-white hover:text-[#FFD21F] font-semibold text-sm tracking-wider uppercase transition-all duration-200 border border-[#C0C0C0]/30 hover:border-[#FFD21F]/60 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <PhoneCall className="w-4 h-4 text-[#FFD21F]" />
            <span>CONTACT US</span>
          </button>
        </div>

        {/* Delivery / Dine-in reminder */}
        <div className="mt-8 text-xs text-[#C0C0C0]/60 flex items-center justify-center gap-3">
          <span>Dine-In</span>
          <span>•</span>
          <span>Takeaway</span>
          <span>•</span>
          <span>Fast Delivery Available</span>
        </div>

      </div>
    </section>
  );
};
