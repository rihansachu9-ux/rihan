import React from 'react';
import { Flame, Award } from 'lucide-react';
import restaurantAmbianceImg from '../assets/images/restaurant_ambiance_grill_1790147168771.jpg';
import officialLogoImg from '../assets/images/yamama_shawaya_official_badge_1790147658289.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0B0B0B] text-white border-t border-[#C0C0C0]/15 relative overflow-hidden">
      
      {/* Decorative Warm Spotlights */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#FFD21F]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E21B23]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Decorative Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#C0C0C0]/20 shadow-2xl bg-[#141414]">
              
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden group">
                <img
                  src={restaurantAmbianceImg}
                  alt="YAMAMA SHAWAYA stylish restaurant interior and dining area"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
              </div>

              {/* Floating Official Mascot Seal */}
              <div className="absolute top-4 right-4 p-2 rounded-2xl bg-[#0B0B0B]/90 backdrop-blur-md border border-[#FFD21F]/40 shadow-xl flex items-center gap-2.5">
                <img
                  src={officialLogoImg}
                  alt="Official Logo Seal"
                  className="w-12 h-12 rounded-full border border-[#FFD21F] object-cover"
                />
                <div className="pr-1 text-left hidden sm:block">
                  <span className="text-[10px] font-extrabold text-[#FFD21F] block uppercase tracking-wider">
                    Original Recipe
                  </span>
                  <span className="text-[11px] font-bold text-white block">
                    Refill Your Energy
                  </span>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0B0B0B]/90 backdrop-blur-md border border-[#FFD21F]/30 flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E21B23] flex items-center justify-center text-white">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-display">Wood &amp; Charcoal Grilling</h4>
                    <p className="text-xs text-[#C0C0C0]">Signature Arabic marinade daily</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-mono text-lg font-bold text-[#FFD21F]">100%</span>
                  <span className="block text-[10px] text-[#C0C0C0] uppercase">Fresh Poultry</span>
                </div>
              </div>

            </div>

            {/* Decorative Gold Accent Corner */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#FFD21F] rounded-tl-xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#E21B23] rounded-br-xl pointer-events-none" />
          </div>

          {/* Right Column: Content & 3 Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#FFD21F]/30 text-xs font-semibold text-[#FFD21F] tracking-widest uppercase mb-4 w-fit">
              <Award className="w-3.5 h-3.5" /> Our Culinary Heritage
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              ABOUT <span className="text-[#FFD21F]">YAMAMA SHAWAYA</span>
            </h2>

            {/* Core Brand Manifesto */}
            <p className="text-base sm:text-lg text-[#FFFFFF] font-medium leading-relaxed mb-8 border-l-2 border-[#E21B23] pl-4">
              YAMAMA SHAWAYA is built around a simple idea — serve delicious, fresh and satisfying food with great flavour and quality. From juicy shawaya and shawarma to grilled favourites, every meal is prepared with care and served fresh.
            </p>

            {/* 3 Story Sections */}
            <div className="space-y-6">
              
              {/* Our Story */}
              <div className="p-5 rounded-2xl bg-[#141414] border border-[#C0C0C0]/15 hover:border-[#FFD21F]/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-[#FFD21F]/20 text-[#FFD21F] flex items-center justify-center font-bold text-xs">
                    01
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">
                    Our Story
                  </h3>
                </div>
                <p className="text-sm text-[#C0C0C0] leading-relaxed pl-10">
                  Founded with a deep passion for Middle Eastern charcoal rotisserie tradition, YAMAMA SHAWAYA was created to bring authentic, richly spiced shawaya and shawarma into a clean, modern, and energetic dining environment.
                </p>
              </div>

              {/* Our Food */}
              <div className="p-5 rounded-2xl bg-[#141414] border border-[#C0C0C0]/15 hover:border-[#FFD21F]/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-[#E21B23]/20 text-[#E21B23] flex items-center justify-center font-bold text-xs">
                    02
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">
                    Our Food
                  </h3>
                </div>
                <p className="text-sm text-[#C0C0C0] leading-relaxed pl-10">
                  We slow-roast each bird to seal in natural juices while achieving that irresistible crispy spiced exterior. Paired with aromatic long-grain rice, fresh daily dips, and thin Saj flatbreads, every plate is an authentic feast.
                </p>
              </div>

              {/* Our Commitment */}
              <div className="p-5 rounded-2xl bg-[#141414] border border-[#C0C0C0]/15 hover:border-[#FFD21F]/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-[#C0C0C0]/20 text-[#C0C0C0] flex items-center justify-center font-bold text-xs">
                    03
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">
                    Our Commitment
                  </h3>
                </div>
                <p className="text-sm text-[#C0C0C0] leading-relaxed pl-10">
                  Absolute freshness, immaculate kitchen hygiene, honest pricing, and fast, respectful hospitality. When you choose YAMAMA SHAWAYA, you are guaranteed wholesome food that nourishes and delights.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
