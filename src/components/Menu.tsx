import React, { useState, useMemo } from 'react';
import { Search, Flame, Sparkles } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types/restaurant';
import { MenuCard } from './MenuCard';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

export const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [recentAddedId, setRecentAddedId] = useState<string | null>(null);
  const [showAllItems, setShowAllItems] = useState(false);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setRecentAddedId(item.id);
    setTimeout(() => {
      setRecentAddedId(null);
    }, 1500);
  };

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;

      // Dietary filter
      const matchesDietary =
        dietaryFilter === 'all' || item.dietary === dietaryFilter;

      // Search query
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.arabicName && item.arabicName.includes(searchQuery)) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  // Display limited items on initial view unless toggled or filtered
  const visibleItems = useMemo(() => {
    if (showAllItems || activeCategory !== 'all' || searchQuery !== '' || dietaryFilter !== 'all') {
      return filteredItems;
    }
    return filteredItems.slice(0, 9);
  }, [filteredItems, showAllItems, activeCategory, searchQuery, dietaryFilter]);

  return (
    <section id="menu" className="py-20 bg-[#0B0B0B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181818] border border-[#FFD21F]/30 text-xs font-semibold text-[#FFD21F] tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD21F]" /> Hand-Crafted Recipes
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3 text-balance">
            OUR <span className="text-[#FFD21F]">MENU</span>
          </h2>

          <p className="text-base sm:text-lg text-[#C0C0C0] font-normal text-balance">
            Delicious flavours made fresh for you.
          </p>
        </div>

        {/* Filter Controls Bar (Search + Dietary + Category Buttons) */}
        <div className="mb-10 flex flex-col gap-6">
          
          {/* Top row: Search and Dietary filters */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#C0C0C0] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search shawaya, shawarma, rice..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#141414] border border-[#C0C0C0]/20 text-white placeholder-[#C0C0C0]/50 text-sm focus:outline-none focus:border-[#FFD21F] focus:ring-1 focus:ring-[#FFD21F] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#C0C0C0] hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Preference Segmented Buttons */}
            <div className="flex items-center gap-1 p-1 bg-[#141414] border border-[#C0C0C0]/15 rounded-xl w-full sm:w-auto justify-center">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  dietaryFilter === 'all'
                    ? 'bg-[#FFD21F] text-black shadow-sm'
                    : 'text-[#C0C0C0] hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-[#E21B23] text-white shadow-sm'
                    : 'text-[#C0C0C0] hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-400" /> Non-Veg
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  dietaryFilter === 'veg'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-[#C0C0C0] hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-300" /> Veg Only
              </button>
            </div>
          </div>

          {/* Category Tabs: Scrollable on mobile, elegant wrapped on desktop */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setShowAllItems(true);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-[#FFD21F] text-black border-[#FFD21F] shadow-lg shadow-[#FFD21F]/20 font-bold'
                      : 'bg-[#141414] text-[#C0C0C0] border-[#C0C0C0]/15 hover:border-[#FFD21F]/50 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Menu Items Grid */}
        {visibleItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visibleItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                onAddToCart={handleAdd}
                isAdded={recentAddedId === item.id}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-2xl bg-[#141414] border border-[#C0C0C0]/15">
            <Flame className="w-10 h-10 text-[#FFD21F] mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-white mb-1">No items found</h3>
            <p className="text-sm text-[#C0C0C0] mb-4">
              Try adjusting your search query or switching category filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="px-4 py-2 rounded-xl bg-[#FFD21F] text-black font-semibold text-xs tracking-wider uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View Full Menu Button */}
        {!showAllItems && activeCategory === 'all' && searchQuery === '' && dietaryFilter === 'all' && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowAllItems(true)}
              className="px-8 py-3.5 rounded-xl bg-[#181818] hover:bg-[#222222] text-[#FFD21F] hover:text-white font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 border border-[#FFD21F]/50 hover:border-[#FFD21F] shadow-lg hover:shadow-[#FFD21F]/20 cursor-pointer active:scale-95"
            >
              VIEW FULL MENU ({filteredItems.length} ITEMS)
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
