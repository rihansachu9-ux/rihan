import React from 'react';
import { Instagram, Facebook, MessageCircle, Youtube, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Photos', href: '#photos' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0B0B0B] text-white border-t border-[#C0C0C0]/20 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C0C0C0]/15">
          
          {/* Brand Info & Mission */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#overview" className="mb-4 group">
              <YamamaLogo size="md" />
            </a>

            <p className="text-sm text-[#FFD21F] font-semibold mb-2">
              Fresh flavours. Quality food. Great moments.
            </p>

            <p className="text-xs text-[#C0C0C0] leading-relaxed max-w-sm mb-6">
              Authentic charcoal rotisserie chicken, premium hand-rolled shawarma wraps, and aromatic spiced rice platters prepared fresh every single day.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-[#141414] border border-[#C0C0C0]/20 hover:border-[#FFD21F] hover:text-[#FFD21F] text-[#C0C0C0] flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={RESTAURANT_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-[#141414] border border-[#C0C0C0]/20 hover:border-[#FFD21F] hover:text-[#FFD21F] text-[#C0C0C0] flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={RESTAURANT_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-[#141414] border border-[#C0C0C0]/20 hover:border-[#FFD21F] hover:text-emerald-400 text-[#C0C0C0] flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={RESTAURANT_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-[#141414] border border-[#C0C0C0]/20 hover:border-[#FFD21F] hover:text-[#E21B23] text-[#C0C0C0] flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Quick Links */}
          <div className="md:col-span-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#C0C0C0] hover:text-[#FFD21F] transition-colors py-1.5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Hours & Contact Note */}
          <div className="md:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Kitchen Hours
            </h4>
            <p className="text-xs text-[#C0C0C0] mb-2 leading-relaxed">
              Open 7 days a week:
              <br />
              <strong className="text-white font-mono">{RESTAURANT_INFO.openingHours}</strong>
            </p>
            <p className="text-xs text-[#C0C0C0] mb-4">
              Takeaway &amp; Express Delivery available until closing.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="text-xs font-bold text-[#FFD21F] hover:underline"
              >
                Call: {RESTAURANT_INFO.phoneDisplay}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C0C0C0]/60">
          <div>
            &copy; 2026 YAMAMA SHAWAYA. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Fresh Ingredients • Authentic Taste • Fast Service</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#141414] hover:bg-[#1f1f1f] text-[#C0C0C0] hover:text-[#FFD21F] transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
