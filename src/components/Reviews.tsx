import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle2, Quote } from 'lucide-react';
import { Review } from '../types/restaurant';
import { REVIEWS_DATA } from '../data/restaurantData';
import { ReviewModal } from './ReviewModal';

export const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_DATA);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleAddReview = (newReview: Review) => {
    setReviews([newReview, ...reviews]);
  };

  return (
    <section id="reviews" className="py-20 bg-[#0B0B0B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181818] border border-[#FFD21F]/30 text-xs font-semibold text-[#FFD21F] tracking-widest uppercase mb-3">
              Verified Dining Reviews
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              WHAT OUR <span className="text-[#FFD21F]">CUSTOMERS SAY</span>
            </h2>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="self-start md:self-auto px-6 py-3 rounded-xl bg-[#141414] hover:bg-[#1c1c1c] text-[#FFD21F] hover:text-white border border-[#FFD21F]/50 hover:border-[#FFD21F] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-md"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#FFD21F]" />
            <span>WRITE A REVIEW</span>
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => {
            // Get initials for customer avatar
            const initials = rev.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase()
              .slice(0, 2);

            return (
              <div
                key={rev.id}
                className="relative rounded-2xl bg-[#141414] border border-[#C0C0C0]/15 hover:border-[#FFD21F]/30 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                <div>
                  {/* Rating Stars & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < rev.rating
                              ? 'fill-[#FFD21F] text-[#FFD21F]'
                              : 'text-neutral-700'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-[#C0C0C0]/50 font-mono">
                      {rev.date}
                    </span>
                  </div>

                  {/* Review Text */}
                  <div className="relative mb-6">
                    <Quote className="w-6 h-6 text-[#FFD21F]/20 absolute -top-2 -left-1 pointer-events-none" />
                    <p className="text-sm text-[#C0C0C0] leading-relaxed pl-4 italic">
                      "{rev.text}"
                    </p>
                  </div>
                </div>

                {/* Customer Meta & Avatar */}
                <div className="pt-4 border-t border-[#C0C0C0]/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#181818] to-[#252525] border border-[#C0C0C0]/20 flex items-center justify-center text-xs font-bold text-[#FFD21F] shadow-sm">
                      {initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-white leading-tight">
                          {rev.name}
                        </span>
                        {rev.verified && (
                          <span title="Verified diner">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          </span>
                        )}
                      </div>
                      {rev.dishRecommended && (
                        <span className="text-[11px] text-[#FFD21F]/80">
                          Recommended: {rev.dishRecommended}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on editable sample reviews */}
        <p className="mt-8 text-center text-xs text-[#C0C0C0]/40">
          Customer reviews and ratings can be updated in real time.
        </p>

      </div>

      {/* Review Submission Modal */}
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitReview={handleAddReview}
      />
    </section>
  );
};
