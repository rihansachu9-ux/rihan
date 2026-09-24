import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    partySize: '2 people',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', partySize: '2 people', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0B0B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181818] border border-[#FFD21F]/30 text-xs font-semibold text-[#FFD21F] tracking-widest uppercase mb-3">
            Visit &amp; Connect
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            CONTACT <span className="text-[#FFD21F]">US</span>
          </h2>

          <p className="text-base sm:text-lg text-[#C0C0C0]">
            Stop by for a hot meal, call for delivery, or book a large gathering table.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Address Card */}
          <div className="p-6 rounded-2xl bg-[#141414] border border-[#C0C0C0]/15 hover:border-[#FFD21F]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1f1f1f] border border-[#C0C0C0]/20 flex items-center justify-center text-[#FFD21F] mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display text-base font-bold text-white mb-1">Our Location</h3>
              <p className="text-xs text-[#FFD21F] font-semibold mb-1">Address:</p>
              <p className="text-xs sm:text-sm text-[#C0C0C0] leading-relaxed">
                {RESTAURANT_INFO.address}<br />
                {RESTAURANT_INFO.addressDetails}
              </p>
            </div>
            <a
              href="#map-section"
              className="mt-4 text-xs font-bold text-[#FFD21F] hover:underline"
            >
              View on Map ↓
            </a>
          </div>

          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-[#141414] border border-[#C0C0C0]/15 hover:border-[#FFD21F]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1f1f1f] border border-[#C0C0C0]/20 flex items-center justify-center text-[#E21B23] mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-display text-base font-bold text-white mb-1">Call Us</h3>
              <p className="text-xs text-[#FFD21F] font-semibold mb-1">Phone:</p>
              <p className="text-xs sm:text-sm text-[#C0C0C0] leading-relaxed">
                Direct takeaway &amp; delivery hotline available all day.
              </p>
            </div>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="mt-4 px-4 py-2 rounded-xl bg-[#E21B23] hover:bg-[#c91219] text-white text-xs font-bold tracking-wider text-center transition-colors block shadow-md"
            >
              CALL {RESTAURANT_INFO.phoneDisplay}
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-[#141414] border border-[#C0C0C0]/15 hover:border-[#FFD21F]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1f1f1f] border border-[#C0C0C0]/20 flex items-center justify-center text-emerald-400 mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-display text-base font-bold text-white mb-1">WhatsApp Chat</h3>
              <p className="text-xs text-[#FFD21F] font-semibold mb-1">WhatsApp:</p>
              <p className="text-xs sm:text-sm text-[#C0C0C0] leading-relaxed">
                Send your order list or catering query instantly via WhatsApp.
              </p>
            </div>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello%20YAMAMA%20SHAWAYA,%20I%20would%20like%20to%20place%20an%20order!`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-wider text-center transition-colors block shadow-md"
            >
              CHAT ON WHATSAPP
            </a>
          </div>

          {/* Hours & Email Card */}
          <div className="p-6 rounded-2xl bg-[#141414] border border-[#C0C0C0]/15 hover:border-[#FFD21F]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1f1f1f] border border-[#C0C0C0]/20 flex items-center justify-center text-[#FFD21F] mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display text-base font-bold text-white mb-1">Opening Hours</h3>
              <p className="text-xs text-[#FFD21F] font-semibold mb-1">Hours:</p>
              <p className="text-xs sm:text-sm text-[#C0C0C0] leading-relaxed mb-2">
                {RESTAURANT_INFO.openingHours}
              </p>
              <p className="text-xs text-[#FFD21F] font-semibold mb-0.5">Email:</p>
              <a
                href={`mailto:${RESTAURANT_INFO.email}`}
                className="text-xs text-[#C0C0C0] hover:text-[#FFD21F] truncate block"
              >
                {RESTAURANT_INFO.email}
              </a>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[11px] text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Kitchen Open Now</span>
            </div>
          </div>

        </div>

        {/* Map & Reservation / Message Form Grid */}
        <div id="map-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Map Card */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-[#141414] border border-[#C0C0C0]/20 shadow-2xl relative min-h-[380px] flex flex-col">
            <div className="p-4 bg-[#181818] border-b border-[#C0C0C0]/15 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FFD21F]" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Interactive Map &amp; Directions
                </span>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#FFD21F] hover:underline"
              >
                Open in Google Maps ↗
              </a>
            </div>
            
            {/* Embedded Responsive Map */}
            <div className="w-full flex-grow relative bg-[#1c1c1c] min-h-[340px]">
              <iframe
                title="YAMAMA SHAWAYA Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.4079813247!2d39.11728131393693!3d21.54238386348618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="w-full h-full border-0 absolute inset-0 filter invert contrast-125 opacity-85 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Quick Table Booking / Inquiries Form */}
          <div className="lg:col-span-5 rounded-2xl bg-[#141414] border border-[#C0C0C0]/20 shadow-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="mb-5">
                <span className="text-xs font-bold text-[#FFD21F] uppercase tracking-wider">
                  Fast Table &amp; Catering Inquiry
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                  Send a Message
                </h3>
                <p className="text-xs text-[#C0C0C0] mt-1">
                  Planning a family gathering or catering order? We will get back to you within 30 minutes.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h4 className="font-display text-lg font-bold text-white mb-1">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-[#C0C0C0]">
                    Our restaurant host will contact you shortly on WhatsApp or phone.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-[#C0C0C0] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Omar Khalid"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0B0B] border border-[#C0C0C0]/20 text-white text-sm focus:outline-none focus:border-[#FFD21F]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#C0C0C0] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+966 5..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0B0B] border border-[#C0C0C0]/20 text-white text-sm focus:outline-none focus:border-[#FFD21F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#C0C0C0] mb-1">
                        Party / Guests
                      </label>
                      <select
                        value={formData.partySize}
                        onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0B0B] border border-[#C0C0C0]/20 text-white text-sm focus:outline-none focus:border-[#FFD21F]"
                      >
                        <option value="2 people">2 Guests</option>
                        <option value="4 people">4 Guests</option>
                        <option value="6-8 people">6–8 Family</option>
                        <option value="10+ people">10+ Gathering</option>
                        <option value="catering">Large Catering</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#C0C0C0] mb-1">
                      Notes / Date &amp; Time
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Special requests, timing or order questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0B0B] border border-[#C0C0C0]/20 text-white text-sm focus:outline-none focus:border-[#FFD21F] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#E21B23] hover:bg-[#c91219] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-lg shadow-[#E21B23]/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#C0C0C0]/15 flex items-center justify-between text-xs text-[#C0C0C0]">
              <span>Prefer immediate call?</span>
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="font-bold text-[#FFD21F] hover:underline"
              >
                {RESTAURANT_INFO.phoneDisplay}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
