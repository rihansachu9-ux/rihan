import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, ShoppingBag, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOrderNowClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOrderNowClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Shawaya Menu', href: '#shawaya-menu' },
    { name: 'Full Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Photos', href: '#photos' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#C0C0C0]/20 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#0B0B0B]/95 via-[#0B0B0B]/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Official Brand Logo & Wordmark */}
          <a
            href="#overview"
            className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD21F] rounded-xl p-1"
          >
            <YamamaLogo size="sm" />
          </a>

          {/* Zone 2: Navigation Links (Clean text links with hover underline) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#C0C0C0] hover:text-[#FFD21F] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#FFD21F] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Cart & Primary CTA Button) */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Quick Call icon for rapid orders */}
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="hidden sm:flex items-center gap-1.5 text-xs text-[#C0C0C0] hover:text-[#FFD21F] transition-colors px-2 py-1.5"
              title="Call restaurant"
            >
              <Phone className="w-4 h-4 text-[#FFD21F]" />
              <span className="hidden xl:inline">{RESTAURANT_INFO.phoneDisplay}</span>
            </a>

            {/* Shopping Cart Trigger */}
            <button
              onClick={onOpenCart}
              aria-label={`View order bag with ${cartCount} items`}
              className="relative p-2.5 rounded-xl bg-[#181818] border border-[#C0C0C0]/25 text-[#FFFFFF] hover:border-[#FFD21F] hover:text-[#FFD21F] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD21F]"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#E21B23] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0B0B0B] animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Prominent Order Now CTA Button */}
            <button
              onClick={onOrderNowClick}
              className="px-4 sm:px-6 py-2.5 rounded-xl bg-[#E21B23] hover:bg-[#c91219] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#E21B23]/25 hover:shadow-[#E21B23]/40 active:scale-95 transition-all duration-200 whitespace-nowrap cursor-pointer border border-[#FFD21F]/30"
            >
              ORDER NOW
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-xl text-[#C0C0C0] hover:text-white bg-[#181818] border border-[#C0C0C0]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD21F]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0B]/98 border-b border-[#C0C0C0]/20 px-6 py-6 mt-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#C0C0C0] hover:text-[#FFD21F] py-2 border-b border-[#1F1F1F] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOrderNowClick();
                }}
                className="w-full py-3 rounded-xl bg-[#E21B23] text-white font-semibold text-sm tracking-wide text-center shadow-lg shadow-[#E21B23]/30"
              >
                ORDER NOW
              </button>
              <div className="flex items-center justify-between text-xs text-[#C0C0C0] pt-2">
                <span>Direct Hotline:</span>
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-[#FFD21F] font-semibold">
                  {RESTAURANT_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
