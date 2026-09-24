import React, { useState } from 'react';
import { Flame, Plus, Check, Sparkles, UtensilsCrossed, Users, ShieldCheck } from 'lucide-react';
import { MenuItem } from '../types/restaurant';
import newAuthenticShawayaImg from '../assets/images/new_authentic_arabic_shawaya_1790147881765.jpg';
import newShawayaPlatterImg from '../assets/images/new_shawaya_platter_dish_1790147902037.jpg';
import shawayaFeastTrayImg from '../assets/images/shawaya_rice_tray_feast_1790148076642.jpg';
import grilledRiceMealImg from '../assets/images/grilled_chicken_rice_meal_1790147150436.jpg';

interface ShawayaMenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

interface ShawayaDish {
  id: string;
  name: string;
  arabicName: string;
  categoryType: 'rice' | 'bread' | 'family';
  description: string;
  includes: string[];
  price: number;
  portion: string;
  spicyLevel: 0 | 1 | 2 | 3;
  isBestseller?: boolean;
  image: string;
  badge?: string;
}

const SHAWAYA_ITEMS: ShawayaDish[] = [
  {
    id: 'shawaya-bukhari-whole',
    name: 'Whole Shawaya with Bukhari Rice',
    arabicName: 'شواية كاملة مع رز بخاري فاخر',
    categoryType: 'rice',
    description: 'Our #1 signature dish! Whole rotisserie roasted chicken spiced with aromatic cloves, cardamom, and cumin, served atop long-grain Bukhari rice garnished with caramelized carrots and fried sultanas.',
    includes: ['Whole Shawaya Chicken', 'Large Bukhari Spiced Rice', 'Garlic Toum Dip', 'Spicy Daqoos Salsa', '2x Hot Kuboos'],
    price: 44,
    portion: 'Serves 2–3 Persons',
    spicyLevel: 1,
    isBestseller: true,
    badge: 'House #1 Special',
    image: newShawayaPlatterImg,
  },
  {
    id: 'shawaya-mandi-half',
    name: 'Half Shawaya with Mandi Rice',
    arabicName: 'نصف دجاج شواية مع رز مندي',
    categoryType: 'rice',
    description: 'Juicy half roasted chicken with crispy herb skin, served with fragrant yellow Mandi rice infused with saffron water and dried black limes.',
    includes: ['Half Shawaya Chicken', 'Mandi Saffron Rice', 'Garlic Toum Dip', 'Red Chili Chutney', 'Hot Kuboos'],
    price: 24,
    portion: 'Serves 1 Person',
    spicyLevel: 1,
    isBestseller: true,
    image: grilledRiceMealImg,
  },
  {
    id: 'shawaya-faham-charcoal-meal',
    name: 'Charcoal Faham Shawaya Meal',
    arabicName: 'شواية فحم ملكية مع الرز',
    categoryType: 'rice',
    description: 'Fire-grilled whole chicken basted with Yemeni Maraq spices and natural coconut charcoals for an unforgettable deep smokiness.',
    includes: ['Whole Faham Shawaya', 'Fragrant Spiced Rice', 'Smoked Garlic Cream', 'Fiery Green Chili Salsa', 'Pickles'],
    price: 46,
    portion: 'Serves 2–3 Persons',
    spicyLevel: 2,
    badge: 'Charcoal Smoked',
    image: newAuthenticShawayaImg,
  },
  {
    id: 'shawaya-bread-only-whole',
    name: 'Whole Shawaya with Kuboos & Fries',
    arabicName: 'شواية دجاج كاملة بالخبز والبطاطس',
    categoryType: 'bread',
    description: 'For bread lovers: Whole crispy rotisserie chicken served with golden salted French fries, double garlic sauce, hot kuboos bread, and pickled turnips.',
    includes: ['Whole Shawaya Chicken', 'Crispy French Fries', '2x Garlic Toum', '4x Saj & Kuboos Bread', 'Fresh Salad'],
    price: 38,
    portion: 'Serves 2 Persons',
    spicyLevel: 0,
    image: newAuthenticShawayaImg,
  },
  {
    id: 'shawaya-spicy-pepper-meal',
    name: 'Spicy Black Pepper Shawaya Meal',
    arabicName: 'شواية حراق بالفلفل الأسود والرز',
    categoryType: 'rice',
    description: 'Whole chicken rubbed with freshly crushed Tellicherry black peppercorns and fiery bird’s eye chili glaze. Served with red spiced rice.',
    includes: ['Whole Pepper Shawaya', 'Spiced Kabsa Rice', 'Spicy Toum Dip', 'Hot Daqoos', '2x Kuboos'],
    price: 45,
    portion: 'Serves 2–3 Persons',
    spicyLevel: 3,
    badge: 'Extra Spicy 3x',
    image: newShawayaPlatterImg,
  },
  {
    id: 'shawaya-green-herb-meal',
    name: 'Green Chili & Herb Shawaya',
    arabicName: 'شواية بالأعشاب والكزبرة الخضراء',
    categoryType: 'rice',
    description: 'Whole chicken slow-roasted in a zesty marinade of crushed coriander, spearmint, lime juice, and green chilies. Light, aromatic, and deeply flavorful.',
    includes: ['Whole Green Herb Shawaya', 'Aromatic White Basmati Rice', 'Mint Toum Dip', 'Pickles', 'Kuboos'],
    price: 45,
    portion: 'Serves 2–3 Persons',
    spicyLevel: 2,
    image: newShawayaPlatterImg,
  },
  {
    id: 'shawaya-quarter-express-lunch',
    name: 'Quarter Shawaya Express Meal',
    arabicName: 'وجبة ربع شواية السريعة',
    categoryType: 'bread',
    description: 'Quarter roasted chicken (choice of leg or breast) served with spiced fries, garlic dip, kuboos bread, and a cold soft drink.',
    includes: ['Quarter Shawaya Piece', 'French Fries', 'Garlic Toum', 'Fresh Kuboos Bread', 'Soft Drink Can'],
    price: 16,
    portion: 'Single Express Meal',
    spicyLevel: 1,
    image: grilledRiceMealImg,
  },
  {
    id: 'shawaya-royal-family-tray',
    name: 'Royal Shawaya Family Feast Tray',
    arabicName: 'صينية الشواية الملكية العائلية',
    categoryType: 'family',
    description: 'Grand communal dining tray: TWO full whole shawaya chickens on a massive bed of mixed Bukhari and Mandi rice, with toasted almonds, fried onions, roasted tomatoes, 4 dips, 6 breads, and a 2.25L Pepsi.',
    includes: ['2x Whole Shawaya Chickens', 'Grand Mixed Rice Platter', '4x Garlic & Daqoos Dips', '6x Fresh Kuboos', 'Large 2.25L Drink'],
    price: 89,
    portion: 'Serves 5–7 Family',
    spicyLevel: 1,
    isBestseller: true,
    badge: 'Mega Family Tray',
    image: shawayaFeastTrayImg,
  },
];

export const ShawayaMenuSection: React.FC<ShawayaMenuSectionProps> = ({ onAddToCart }) => {
  const [filterType, setFilterType] = useState<'all' | 'rice' | 'bread' | 'family'>('all');
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleAdd = (dish: ShawayaDish) => {
    const menuItem: MenuItem = {
      id: dish.id,
      name: dish.name,
      arabicName: dish.arabicName,
      category: 'shawaya',
      description: dish.description,
      price: dish.price,
      currency: 'SAR',
      dietary: 'non-veg',
      image: dish.image,
      portion: dish.portion,
      spicyLevel: dish.spicyLevel,
      isPopular: dish.isBestseller,
    };
    onAddToCart(menuItem);

    setAddedIds((prev) => ({ ...prev, [dish.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [dish.id]: false }));
    }, 1500);
  };

  const filteredDishes = SHAWAYA_ITEMS.filter((dish) => {
    if (filterType === 'all') return true;
    return dish.categoryType === filterType;
  });

  return (
    <section id="shawaya-menu" className="py-24 bg-[#0E0E0E] text-white relative overflow-hidden border-t border-b border-[#C0C0C0]/20">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#FFD21F]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#E21B23]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#FFD21F]/40 text-xs font-bold text-[#FFD21F] tracking-widest uppercase mb-3 shadow-lg">
            <Flame className="w-4 h-4 text-[#E21B23] animate-pulse" />
            <span>Rotisserie &amp; Charcoal Specialists</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 text-balance">
            SHAWAYA <span className="text-[#FFD21F]">MENU</span>
          </h2>

          <p className="text-base sm:text-lg text-[#C0C0C0] font-medium max-w-2xl mx-auto text-balance">
            قائمة الشواية الملكية • Fire-roasted whole &amp; half chicken meals served with fragrant Bukhari, Mandi, or Kabsa rice and house-made dips.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'All Shawaya Meals' },
            { id: 'rice', label: 'With Spiced Rice' },
            { id: 'bread', label: 'With Kuboos & Fries' },
            { id: 'family', label: 'Family Trays' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterType(cat.id as any)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer border ${
                filterType === cat.id
                  ? 'bg-[#FFD21F] text-black border-[#FFD21F] shadow-lg shadow-[#FFD21F]/25 scale-105'
                  : 'bg-[#141414] text-[#C0C0C0] border-[#C0C0C0]/20 hover:border-[#FFD21F]/50 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Big Tray Spotlight Banner */}
        <div className="mb-14 rounded-3xl overflow-hidden bg-gradient-to-r from-[#161616] via-[#1a1a1a] to-[#121212] border-2 border-[#FFD21F]/40 shadow-2xl p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] group">
              <img
                src={shawayaFeastTrayImg}
                alt="Royal Shawaya Family Feast Tray"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#E21B23] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>Family Feast Tray</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#FFD21F] uppercase tracking-wider block mb-1">
                  COMMUNAL GATHERING TRAY
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Royal Shawaya Family Feast Tray
                </h3>
                <p className="text-xs text-[#FFD21F] font-semibold mb-3">
                  صينية الشواية الملكية العائلية
                </p>
                <p className="text-xs sm:text-sm text-[#C0C0C0] leading-relaxed mb-4">
                  Two whole roasted golden shawaya chickens served on a massive round tray of Bukhari and Mandi rice, garnished with toasted almonds, fried onions, and roasted tomatoes.
                </p>

                {/* Items in tray */}
                <div className="space-y-1.5 mb-6 text-xs text-[#C0C0C0]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD21F]" />
                    <span>2x Whole Fire-Roasted Shawaya Chickens</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD21F]" />
                    <span>Grand Bed of Bukhari &amp; Mandi Rice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD21F]" />
                    <span>4x Garlic Toum, Spicy Daqoos &amp; Tahini</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD21F]" />
                    <span>6x Fresh Arabian Kuboos + 2.25L Soft Drink</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#C0C0C0]/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-[#C0C0C0] block">Special Tray Price</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-mono text-3xl font-extrabold text-[#FFD21F]">89</span>
                    <span className="text-xs font-bold text-white">SAR</span>
                  </div>
                </div>

                <button
                  onClick={() => handleAdd(SHAWAYA_ITEMS[7])}
                  className="px-6 py-3 rounded-xl bg-[#E21B23] hover:bg-[#c91219] text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-xl shadow-[#E21B23]/30 flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  {addedIds['shawaya-royal-family-tray'] ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>ADDED TO ORDER</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 stroke-[3]" />
                      <span>ORDER THIS TRAY</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Shawaya Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDishes.map((dish) => {
            const isAdded = addedIds[dish.id];

            return (
              <div
                key={dish.id}
                className="group relative rounded-2xl bg-[#141414] hover:bg-[#181818] border border-[#C0C0C0]/15 hover:border-[#FFD21F]/40 transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30 pointer-events-none" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      {dish.badge ? (
                        <div className="px-2.5 py-1 rounded-md bg-[#FFD21F] text-black text-[10px] font-extrabold uppercase tracking-wider shadow">
                          {dish.badge}
                        </div>
                      ) : (
                        <div className="px-2.5 py-1 rounded-md bg-[#0B0B0B]/80 text-[#C0C0C0] text-[10px] font-semibold backdrop-blur-sm">
                          {dish.portion}
                        </div>
                      )}

                      {dish.spicyLevel > 0 && (
                        <div className="flex items-center gap-0.5 px-2 py-1 rounded-md bg-[#0B0B0B]/85 text-[#E21B23] text-[10px] font-bold border border-[#E21B23]/40 backdrop-blur-sm">
                          <Flame className="w-3 h-3 fill-[#E21B23]" />
                          <span>{dish.spicyLevel}x Hot</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold text-[#FFD21F] uppercase tracking-wider">
                        Shawaya Special
                      </span>
                      <span className="text-xs text-[#C0C0C0]/70 font-normal dir-rtl">
                        {dish.arabicName}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white group-hover:text-[#FFD21F] transition-colors mb-2 leading-snug">
                      {dish.name}
                    </h3>

                    <p className="text-xs text-[#C0C0C0] leading-relaxed mb-4 line-clamp-2">
                      {dish.description}
                    </p>

                    {/* What's Included Pills */}
                    <div className="pt-3 border-t border-[#C0C0C0]/10 mb-2">
                      <span className="text-[10px] uppercase font-bold text-[#C0C0C0]/60 block mb-1.5">
                        Meal Includes:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {dish.includes.map((inc, i) => (
                          <span
                            key={i}
                            className="text-[11px] px-2 py-0.5 rounded bg-[#1e1e1e] text-[#C0C0C0] border border-[#C0C0C0]/15"
                          >
                            {inc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Pricing & CTA */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-[#C0C0C0]/15 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#C0C0C0]/60 block">Price</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-mono tabular-nums text-xl font-bold text-[#FFD21F]">
                          {dish.price}
                        </span>
                        <span className="text-xs font-semibold text-white">SAR</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAdd(dish)}
                      className={`px-4 py-2.5 rounded-xl font-bold text-xs tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-md active:scale-95 ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#E21B23] hover:bg-[#c91219] text-white hover:shadow-[#E21B23]/30'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>ADDED</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 stroke-[3]" />
                          <span>ADD MEAL</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Fresh Grilling Guarantee Strip */}
        <div className="mt-14 p-5 rounded-2xl bg-[#141414] border border-[#FFD21F]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E21B23]/20 text-[#E21B23] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">The YAMAMA Shawaya Freshness Promise</h4>
              <p className="text-xs text-[#C0C0C0]">
                Every single chicken is slow-roasted fresh daily over charcoal. We never reheat or compromise on crispness.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-[#1e1e1e] hover:bg-[#282828] text-[#FFD21F] border border-[#FFD21F]/40 text-xs font-bold uppercase tracking-wider whitespace-nowrap"
          >
            Order Hot Delivery
          </a>
        </div>

      </div>
    </section>
  );
};
