import React from 'react';
import officialLogoImg from '../assets/images/yamama_shawaya_official_badge_1790147658289.jpg';

interface YamamaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const YamamaLogo: React.FC<YamamaLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Mascot Circular Badge */}
      <div
        className={`relative ${sizeClasses[size]} rounded-full overflow-hidden shrink-0 border-2 border-[#FFD21F] shadow-lg shadow-[#E21B23]/20 bg-[#0B0B0B] group-hover:scale-105 transition-transform duration-200`}
      >
        <img
          src={officialLogoImg}
          alt="YAMAMA SHAWAYA Official Logo - Refill Your Energy"
          className="w-full h-full object-cover"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Subtle inner shadow overlay */}
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/30 pointer-events-none" />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display font-extrabold text-xl sm:text-2xl tracking-wider text-white leading-none">
              YAMAMA <span className="text-[#FFD21F]">SHAWAYA</span>
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] tracking-[0.2em] text-[#E21B23] font-extrabold uppercase bg-[#E21B23]/10 px-1.5 py-0.5 rounded border border-[#E21B23]/30">
              REFILL YOUR ENERGY
            </span>
            <span className="text-[10px] tracking-wider text-[#C0C0C0] font-medium hidden sm:inline">
              اليمامة شواية
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
