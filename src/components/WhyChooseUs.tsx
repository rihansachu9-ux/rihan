import React from 'react';
import { Flame, Award, Sparkles, ShieldCheck, HeartHandshake, Coins } from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data/restaurantData';

const ICONS_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame,
  Award,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Coins,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0B0B] text-white border-t border-[#C0C0C0]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181818] border border-[#FFD21F]/30 text-xs font-semibold text-[#FFD21F] tracking-widest uppercase mb-3">
            The Gold Standard
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            WHY <span className="text-[#FFD21F]">YAMAMA SHAWAYA</span>?
          </h2>

          <p className="text-base sm:text-lg text-[#C0C0C0] max-w-2xl mx-auto">
            From flame rotisserie to your plate, here is what sets our kitchen apart.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US_DATA.map((item, idx) => {
            const Icon = ICONS_MAP[item.icon] || Flame;
            return (
              <div
                key={item.id}
                className="group relative p-7 rounded-2xl bg-[#141414] hover:bg-[#181818] border border-[#C0C0C0]/15 hover:border-[#FFD21F]/40 transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0B0B0B] border border-[#C0C0C0]/20 flex items-center justify-center text-[#FFD21F] group-hover:scale-110 group-hover:bg-[#E21B23] group-hover:text-white group-hover:border-[#E21B23] transition-all duration-300 shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#C0C0C0]/30">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[#FFD21F] transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#C0C0C0] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C0C0C0]/10 flex items-center gap-2 text-xs font-semibold text-[#FFD21F] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Guaranteed Standards</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD21F]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
