import React from 'react';
import { ArrowRight, Utensils, Star, ShieldCheck } from 'lucide-react';
import heroShawayaImg from '../assets/images/new_authentic_arabic_shawaya_1790147881765.jpg';
import officialLogoImg from '../assets/images/yamama_shawaya_official_badge_1790147658289.jpg';

interface HeroProps {
  onOrderNowClick: () => void;
  onViewMenuClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNowClick, onViewMenuClick }) => {
  return (
    <section id="overview" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B0B0B]">
      {/* Background Image with Dark Vignette Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroShawayaImg}
          alt="Freshly roasted golden shawaya chicken over hot charcoal"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered cinematic overlays ensuring 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/85 to-[#0B0B0B]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/70" />
        {/* Subtle warm amber/golden rim spotlight in center */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFD21F]/10 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#E21B23]/10 blur-[130px] pointer-events-none rounded-full" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headings & Conversion */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Official Mascot & Slogan Kicker */}
            <div className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-full bg-[#181818]/90 border border-[#FFD21F]/30 backdrop-blur-md shadow-xl mb-6">
              <img
                src={officialLogoImg}
                alt="YAMAMA SHAWAYA Mascot - Refill Your Energy"
                className="w-9 h-9 rounded-full border border-[#FFD21F] object-cover shrink-0"
              />
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#FFD21F] tracking-wide uppercase">
                  REFILL YOUR ENERGY
                </span>
                <span className="text-[#C0C0C0]/40 font-bold hidden sm:inline" aria-hidden="true">•</span>
                <span className="text-xs text-[#C0C0C0] font-medium hidden sm:inline">
                  Authentic Shawaya &amp; Grills
                </span>
              </div>
            </div>

            {/* Main Brand Title */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white mb-4 text-balance">
              YAMAMA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD21F] via-[#FFE479] to-[#FFD21F]">SHAWAYA</span>
            </h1>

            {/* Supporting Headline */}
            <h2 className="text-xl sm:text-3xl font-semibold text-[#FFD21F] mb-5 tracking-tight font-display text-balance">
              Fresh. Juicy. Grilled to Perfection.
            </h2>

            {/* Additional Text */}
            <p className="text-base sm:text-lg text-[#C0C0C0] max-w-2xl mb-8 leading-relaxed font-normal text-balance">
              Experience delicious shawaya, juicy grilled chicken, and flavorful meals prepared fresh for you every day with authentic heritage Arabic spices.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto mb-10">
              <button
                onClick={onOrderNowClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#E21B23] hover:bg-[#c4131b] active:scale-95 text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-xl shadow-[#E21B23]/30 border border-[#FFD21F]/30 flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <span>ORDER NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onViewMenuClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#181818]/90 hover:bg-[#222222] active:scale-95 text-white hover:text-[#FFD21F] font-semibold text-sm tracking-wider uppercase transition-all duration-200 border border-[#C0C0C0]/30 hover:border-[#FFD21F]/60 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Utensils className="w-4 h-4 text-[#FFD21F]" />
                <span>VIEW MENU</span>
              </button>
            </div>

            {/* Trust Statement */}
            <div className="pt-6 border-t border-[#C0C0C0]/15 w-full flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#C0C0C0] font-medium">
              <span className="text-[#FFD21F] font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FFD21F]" /> Fresh Ingredients
              </span>
              <span className="text-[#C0C0C0]/40 font-bold" aria-hidden="true">•</span>
              <span>Authentic Flavours</span>
              <span className="text-[#C0C0C0]/40 font-bold" aria-hidden="true">•</span>
              <span>Made Fresh Daily</span>
            </div>

          </div>

          {/* Right Column: Featured Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#E21B23] via-[#FFD21F]/60 to-[#C0C0C0]/20 opacity-70 blur-md" />

              {/* Main Visual Card */}
              <div className="relative rounded-2xl overflow-hidden bg-[#181818] border border-[#C0C0C0]/20 shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <img
                    src={heroShawayaImg}
                    alt="Signature YAMAMA Charcoal Shawaya"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/20 to-transparent" />
                  
                  {/* Floating Highlight Badge */}
                  <div className="absolute top-4 right-4 bg-[#0B0B0B]/90 backdrop-blur-md border border-[#FFD21F]/40 px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
                    <Star className="w-4 h-4 fill-[#FFD21F] text-[#FFD21F]" />
                    <span className="text-xs font-bold text-white tracking-wide">Signature Recipe</span>
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#FFD21F] font-bold">House Special</span>
                        <h3 className="text-lg font-bold text-white font-display">Golden Whole Shawaya</h3>
                      </div>
                      <span className="font-mono tabular-nums text-xl font-bold text-[#FFD21F]">
                        36 SAR
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Sub-Banner with Quick Order Trigger */}
                <div className="p-4 bg-[#141414] flex items-center justify-between border-t border-[#C0C0C0]/15">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-[#C0C0C0]">Hot &amp; Ready in 15 mins</span>
                  </div>
                  <button
                    onClick={onOrderNowClick}
                    className="text-xs font-bold text-[#FFD21F] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    Quick Add <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFD21F]/30 to-transparent" />
    </section>
  );
};
