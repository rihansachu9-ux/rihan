/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MenuItem, CartItem } from './types/restaurant';
import { MENU_ITEMS, SPECIAL_OFFER } from './data/restaurantData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { ShawayaMenuSection } from './components/ShawayaMenuSection';
import { Menu } from './components/Menu';
import { SpecialOffer } from './components/SpecialOffer';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CTASection } from './components/CTASection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Add an item to the shopping cart
  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.menuItem.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.menuItem.id === item.id
            ? { ...ci, quantity: ci.quantity + 1 }
            : ci
        );
      }
      return [...prev, { menuItem: item, quantity: 1 }];
    });
  };

  // Add the Special Offer Combo to cart
  const handleAddSpecialCombo = () => {
    const specialItem: MenuItem = {
      id: 'special-mega-feast-combo',
      name: SPECIAL_OFFER.title,
      category: 'special',
      description: SPECIAL_OFFER.description,
      price: SPECIAL_OFFER.offerPrice,
      currency: SPECIAL_OFFER.currency,
      dietary: 'non-veg',
      image: SPECIAL_OFFER.image,
      portion: 'Serves 4-6 Family',
    };
    handleAddToCart(specialItem);
    setIsCartOpen(true);
  };

  // Update item quantity in cart
  const handleUpdateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      setCartItems((prev) => prev.filter((ci) => ci.menuItem.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((ci) =>
          ci.menuItem.id === id ? { ...ci, quantity: newQty } : ci
        )
      );
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Total items count in cart
  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  // Smooth scroll helpers
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col selection:bg-[#FFD21F] selection:text-black">
      
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOrderNowClick={() => {
          if (cartItems.length > 0) {
            setIsCartOpen(true);
          } else {
            scrollToSection('menu');
          }
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero / Overview Section */}
        <Hero
          onOrderNowClick={() => scrollToSection('menu')}
          onViewMenuClick={() => scrollToSection('menu')}
        />

        {/* 3. Quick Highlights (4 feature cards) */}
        <Highlights />

        {/* 4. Dedicated Signature Shawaya Menu */}
        <ShawayaMenuSection onAddToCart={handleAddToCart} />

        {/* 5. Complete Food Menu (with all categories) */}
        <Menu onAddToCart={handleAddToCart} />

        {/* 5. Special Offer Section */}
        <SpecialOffer onOrderSpecial={handleAddSpecialCombo} />

        {/* 6. Reviews Section */}
        <Reviews />

        {/* 7. Photos / Gallery Section */}
        <Gallery />

        {/* 8. About Section */}
        <About />

        {/* 9. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 10. Call-To-Action (CTA) Section */}
        <CTASection
          onOrderNowClick={() => scrollToSection('menu')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 11. Contact Section */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
