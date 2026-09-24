import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types/restaurant';
import { RESTAURANT_INFO } from '../data/restaurantData';
import officialLogoImg from '../assets/images/yamama_shawaya_official_badge_1790147658289.jpg';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, curr) => acc + curr.menuItem.price * curr.quantity,
    0
  );
  const deliveryFee = orderType === 'delivery' && subtotal > 0 && subtotal < 100 ? 10 : 0;
  const grandTotal = subtotal + deliveryFee;

  // Prepare WhatsApp order text
  const generateWhatsAppMessage = () => {
    const itemList = items
      .map(
        (it) =>
          `• ${it.quantity}x ${it.menuItem.name} (${it.menuItem.price * it.quantity} SAR)`
      )
      .join('%0A');

    const message = `Hello YAMAMA SHAWAYA! 🍗%0AI would like to place an order:%0A%0A${itemList}%0A%0ASubtotal: ${subtotal} SAR%0AOrder Type: ${orderType.toUpperCase()}%0ATotal: ${grandTotal} SAR%0A%0ACustomer: ${customerName || 'Guest'} (${customerPhone || 'Not specified'})`;
    return `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${message}`;
  };

  const handleConfirmDirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;
    setOrderConfirmed(true);
    setTimeout(() => {
      onClearCart();
      setOrderConfirmed(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Backdrop click to close */}
      <div className="flex-grow hidden sm:block" onClick={onClose} />

      {/* Drawer Body */}
      <div className="relative w-full max-w-md bg-[#121212] border-l border-[#C0C0C0]/20 text-white h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-[#C0C0C0]/15 flex items-center justify-between bg-[#141414]">
          <div className="flex items-center gap-3">
            <img
              src={officialLogoImg}
              alt="YAMAMA SHAWAYA Mascot"
              className="w-9 h-9 rounded-full border border-[#FFD21F] object-cover shrink-0 shadow"
            />
            <div>
              <h3 className="font-display text-base font-bold text-white">Your Order</h3>
              <span className="text-[11px] text-[#C0C0C0]">
                {items.length} item{items.length !== 1 ? 's' : ''} in cart
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#C0C0C0] hover:text-white hover:bg-[#202020] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-grow overflow-y-auto p-5 space-y-4">
          
          {orderConfirmed ? (
            <div className="py-16 text-center">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4 animate-bounce" />
              <h4 className="font-display text-2xl font-bold text-white mb-2">
                Order Received!
              </h4>
              <p className="text-sm text-[#C0C0C0] max-w-xs mx-auto mb-4">
                Thank you, {customerName}! We have dispatched your ticket to the kitchen.
              </p>
              <div className="p-3 rounded-xl bg-[#181818] border border-emerald-500/30 text-xs text-emerald-400 font-mono">
                Estimated preparation: 15–20 minutes
              </div>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center">
              <ShoppingBag className="w-12 h-12 text-[#C0C0C0]/30 mx-auto mb-3" />
              <h4 className="text-base font-bold text-white mb-1">Your cart is empty</h4>
              <p className="text-xs text-[#C0C0C0] mb-6">
                Explore our menu to add golden shawaya, fresh shawarma, and tasty sides.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#FFD21F] text-black font-bold text-xs tracking-wider uppercase"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {/* Delivery vs Takeaway Switch */}
              <div className="flex items-center p-1 bg-[#181818] rounded-xl border border-[#C0C0C0]/15">
                <button
                  onClick={() => setOrderType('delivery')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    orderType === 'delivery'
                      ? 'bg-[#FFD21F] text-black shadow-sm font-bold'
                      : 'text-[#C0C0C0] hover:text-white'
                  }`}
                >
                  Delivery
                </button>
                <button
                  onClick={() => setOrderType('takeaway')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    orderType === 'takeaway'
                      ? 'bg-[#FFD21F] text-black shadow-sm font-bold'
                      : 'text-[#C0C0C0] hover:text-white'
                  }`}
                >
                  Takeaway / Pickup
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {items.map((cartItem) => (
                  <div
                    key={cartItem.menuItem.id}
                    className="p-3.5 rounded-xl bg-[#181818] border border-[#C0C0C0]/15 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={cartItem.menuItem.image}
                        alt={cartItem.menuItem.name}
                        className="w-14 h-14 rounded-lg object-cover bg-neutral-800 shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="min-w-0">
                        <h5 className="text-xs sm:text-sm font-bold text-white truncate">
                          {cartItem.menuItem.name}
                        </h5>
                        <span className="text-[11px] font-mono text-[#FFD21F]">
                          {cartItem.menuItem.price} SAR
                        </span>
                      </div>
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() =>
                          onUpdateQuantity(
                            cartItem.menuItem.id,
                            cartItem.quantity - 1
                          )
                        }
                        className="w-7 h-7 rounded-lg bg-[#222222] hover:bg-[#2c2c2c] text-[#C0C0C0] hover:text-white flex items-center justify-center transition-colors"
                        aria-label="Decrease quantity"
                      >
                        {cartItem.quantity === 1 ? (
                          <Trash2 className="w-3.5 h-3.5 text-red-400" />
                        ) : (
                          <Minus className="w-3 h-3" />
                        )}
                      </button>

                      <span className="font-mono text-xs font-bold w-4 text-center">
                        {cartItem.quantity}
                      </span>

                      <button
                        onClick={() =>
                          onUpdateQuantity(
                            cartItem.menuItem.id,
                            cartItem.quantity + 1
                          )
                        }
                        className="w-7 h-7 rounded-lg bg-[#222222] hover:bg-[#2c2c2c] text-[#C0C0C0] hover:text-white flex items-center justify-center transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer Quick Details */}
              <div className="p-4 rounded-xl bg-[#161616] border border-[#C0C0C0]/15 space-y-3 mt-4">
                <span className="text-[11px] font-bold text-[#FFD21F] uppercase tracking-wider block">
                  Contact Information
                </span>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#0B0B0B] border border-[#C0C0C0]/20 text-xs text-white placeholder-[#C0C0C0]/40 focus:outline-none focus:border-[#FFD21F]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp Number *"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#0B0B0B] border border-[#C0C0C0]/20 text-xs text-white placeholder-[#C0C0C0]/40 focus:outline-none focus:border-[#FFD21F]"
                  />
                </div>
              </div>
            </>
          )}

        </div>

        {/* Footer Pricing & Action */}
        {items.length > 0 && !orderConfirmed && (
          <div className="p-5 border-t border-[#C0C0C0]/20 bg-[#141414] space-y-3">
            
            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-[#C0C0C0]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono tabular-nums text-white">{subtotal} SAR</span>
              </div>
              {orderType === 'delivery' && (
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-mono tabular-nums text-white">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-400 font-semibold">FREE (Over 100 SAR)</span>
                    ) : (
                      `${deliveryFee} SAR`
                    )}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-[#C0C0C0]/15">
                <span>Total Amount</span>
                <span className="font-mono tabular-nums text-lg text-[#FFD21F]">
                  {grandTotal} SAR
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {/* WhatsApp Express Checkout */}
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 text-center shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order via WhatsApp</span>
              </a>

              {/* Direct Instant Confirmation */}
              <button
                onClick={handleConfirmDirect}
                disabled={!customerName || !customerPhone}
                className="py-3 px-3 rounded-xl bg-[#E21B23] hover:bg-[#c91219] disabled:opacity-50 text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-[#E21B23]/25 cursor-pointer disabled:cursor-not-allowed"
              >
                <span>Confirm Order</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            {(!customerName || !customerPhone) && (
              <p className="text-[10px] text-center text-[#FFD21F]">
                * Please enter your name and phone above to confirm
              </p>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
