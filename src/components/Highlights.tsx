import React from 'react';
import { Sparkles, Flame, Clock, ShieldCheck } from 'lucide-react';

const HIGHLIGHTS = [
  {
    title: 'Fresh Ingredients',
    description: 'Fresh and quality ingredients prepared daily.',
    icon: Sparkles,
    accentColor: '#FFD21F',
  },
  {
    title: 'Authentic Taste',
    description: 'Rich and flavorful shawaya-inspired dishes.',
    icon: Flame,
    accentColor: '#E21B23',
  },
  {
    title: 'Fast Service',
    description: 'Fresh food served quickly and efficiently.',
    icon: Clock,
    accentColor: '#FFD21F',
  },
  {
    title: 'Quality & Hygiene',
    description: 'Prepared with attention to cleanliness and quality.',
    icon: ShieldCheck,
    accentColor: '#C0C0C0',
  },
];

export const Highlights: React.FC = () => {
  return (
    <section className="py-16 bg-[#0B0B0B] border-b border-[#C0C0C0]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-[#141414] hover:bg-[#181818] border border-[#C0C0C0]/15 hover:border-[#FFD21F]/40 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex flex-col"
              >
                {/* Subtle Glow Corner on Hover */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-tr-2xl bg-gradient-to-bl from-[#FFD21F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                />

                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl bg-[#0B0B0B] border border-[#C0C0C0]/20 flex items-center justify-center group-hover:scale-110 group-hover:border-[#FFD21F]/50 transition-all duration-300"
                    style={{ color: item.accentColor }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-[#C0C0C0]/40 font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#FFD21F] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#C0C0C0] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
