import React, { useState } from 'react';
import { X, Star, CheckCircle } from 'lucide-react';
import { Review } from '../types/restaurant';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (newReview: Review) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  onSubmitReview,
}) => {
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [dishRecommended, setDishRecommended] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      rating,
      text: text.trim(),
      date: 'Just now',
      dishRecommended: dishRecommended.trim() || undefined,
      verified: true,
    };

    onSubmitReview(newReview);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setText('');
      setDishRecommended('');
      setRating(5);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#141414] border border-[#C0C0C0]/20 shadow-2xl p-6 sm:p-8 text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#C0C0C0] hover:text-white rounded-lg hover:bg-[#1f1f1f] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-14 h-14 text-emerald-400 mx-auto mb-4 animate-bounce" />
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Thank You for Your Feedback!
            </h3>
            <p className="text-sm text-[#C0C0C0]">
              Your review has been shared with the YAMAMA SHAWAYA team.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="text-xs font-semibold text-[#FFD21F] uppercase tracking-wider">
                Customer Testimonial
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">
                Share Your Experience
              </h3>
              <p className="text-xs text-[#C0C0C0] mt-1">
                Tell us about your visit, favourite dishes, or food quality.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Star Rating Selector */}
              <div>
                <label className="block text-xs font-medium text-[#C0C0C0] mb-1.5">
                  Your Overall Rating
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 focus:outline-none transition-transform hover:scale-110"
                      aria-label={`Rate ${star} stars`}
                    >
                      <Star
                        className={`w-7 h-7 ${
                          (hoverRating || rating) >= star
                            ? 'fill-[#FFD21F] text-[#FFD21F]'
                            : 'text-[#333333]'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-3 text-sm font-bold text-[#FFD21F]">
                    {rating} of 5 Stars
                  </span>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-medium text-[#C0C0C0] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Al-Mansoor"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0B0B] border border-[#C0C0C0]/20 text-white text-sm focus:outline-none focus:border-[#FFD21F]"
                />
              </div>

              {/* Favorite Dish (Optional) */}
              <div>
                <label className="block text-xs font-medium text-[#C0C0C0] mb-1">
                  Favourite Dish (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Whole Chicken Shawaya, Special Shawarma"
                  value={dishRecommended}
                  onChange={(e) => setDishRecommended(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0B0B] border border-[#C0C0C0]/20 text-white text-sm focus:outline-none focus:border-[#FFD21F]"
                />
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-xs font-medium text-[#C0C0C0] mb-1">
                  Your Review *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="How was the taste, freshness, and hospitality?"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0B0B] border border-[#C0C0C0]/20 text-white text-sm focus:outline-none focus:border-[#FFD21F] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-[#C0C0C0] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#E21B23] hover:bg-[#c91219] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-lg shadow-[#E21B23]/25 cursor-pointer"
                >
                  Post Review
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
