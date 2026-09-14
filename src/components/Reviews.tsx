import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, REVIEWS } from '../data/mockData';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const current = REVIEWS[currentIndex];

  return (
    <section
      id="reviews"
      className="py-24 sm:py-32 bg-[#111111] text-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#d7393e]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#d7393e] text-xs font-bold tracking-wide uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WHAT HOMEOWNERS SAY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
              5.0 Stars.{' '}
              <span className="text-[#d7393e] block sm:inline">50 Google Reviews.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              Local homeowners across Malton and the surrounding areas.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 shadow-xl flex items-center gap-6 shrink-0">
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d7393e] text-[#d7393e]" />
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-white font-display">5.0</span>
                <span className="text-sm text-white/70">/ 5.0 Rating</span>
              </div>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <span className="block text-2xl font-bold text-[#d7393e] font-display">{COMPANY_INFO.reviewCount}</span>
              <span className="text-xs text-white/70 uppercase tracking-wider font-semibold">Google Reviews</span>
            </div>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white text-[#111111] rounded-3xl overflow-hidden shadow-2xl relative border-2 border-[#d7393e]/30 min-h-[280px] grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-4 relative min-h-[200px] md:min-h-full">
              <img
                src={current.projectImage}
                alt="Bowmanscapes project workmanship"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10" />
              <div className="absolute top-4 left-4 bg-[#d7393e] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                Project
              </div>
            </div>

            <div className="md:col-span-8 p-8 sm:p-12 flex flex-col justify-between relative">
              <Quote className="w-16 h-16 text-[#d7393e]/15 absolute top-6 right-8 pointer-events-none" />
              <div>
                <div className="flex items-center gap-1.5 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#d7393e] text-[#d7393e]" />
                  ))}
                  <span className="ml-2 text-xs font-bold uppercase tracking-wider text-[#d7393e] bg-[#d7393e]/10 px-2.5 py-0.5 rounded-md">
                    {current.date}
                  </span>
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#111111] leading-snug tracking-tight font-display italic">
                  {current.quote}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-lg">
                    G
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#000000]">
                      {current.author}
                    </h4>
                    <p className="text-xs text-[#555555]">
                      {current.location} • {current.serviceUsed}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#000000] bg-[#F7F7F7] px-3 py-1.5 rounded-full border border-gray-200">
                  <ShieldCheck className="w-4 h-4 text-[#d7393e]" />
                  <span>Google Reviews</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2.5">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-[#d7393e]'
                      : 'w-2.5 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous review"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/15"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next review"
                className="w-11 h-11 rounded-full bg-[#d7393e] hover:bg-[#bf2f34] text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
