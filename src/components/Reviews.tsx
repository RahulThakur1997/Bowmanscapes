import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { REVIEWS } from '../data/mockData';

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

  return (
    <section
      id="reviews"
      className="py-24 sm:py-32 bg-[#123B2A] text-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#6FAF45]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Overall Rating Pill */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#83C656] text-xs font-bold tracking-wide uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WHAT HOMEOWNERS SAY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
              4.9 Stars.{' '}
              <span className="text-[#6FAF45] block sm:inline">And a Lot of Happy Lawns.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              The goal isn’t simply to cut the grass. It’s to make lawn care one less thing you have to worry about.
            </p>
          </div>

          {/* Social Proof Aggregate Badge */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 shadow-xl flex items-center gap-6 shrink-0">
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#6FAF45] text-[#6FAF45]" />
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-white font-display">4.9</span>
                <span className="text-sm text-white/70">/ 5.0 Rating</span>
              </div>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <span className="block text-2xl font-bold text-[#83C656] font-display">42+</span>
              <span className="text-xs text-white/70 uppercase tracking-wider font-semibold">Local Reviews</span>
            </div>
          </div>
        </div>

        {/* Carousel Showcase */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Active Review Card */}
          <div className="bg-white text-[#123B2A] rounded-3xl p-8 sm:p-12 shadow-2xl relative border-2 border-[#6FAF45]/30 min-h-[280px] flex flex-col justify-between">
            {/* Quote watermark */}
            <Quote className="w-16 h-16 text-[#6FAF45]/15 absolute top-6 right-8 pointer-events-none" />

            <div>
              {/* Star rating */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#6FAF45] text-[#6FAF45]" />
                ))}
                <span className="ml-2 text-xs font-bold uppercase tracking-wider text-[#6FAF45] bg-[#6FAF45]/10 px-2.5 py-0.5 rounded-md">
                  {REVIEWS[currentIndex].date}
                </span>
              </div>

              {/* Quote Copy */}
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#111512] leading-snug tracking-tight font-display italic">
                {REVIEWS[currentIndex].quote}
              </p>
            </div>

            {/* Author Footer */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#123B2A] text-white flex items-center justify-center font-bold text-lg">
                  {REVIEWS[currentIndex].author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#123B2A]">
                    {REVIEWS[currentIndex].author}
                  </h4>
                  <p className="text-xs text-[#667067]">
                    {REVIEWS[currentIndex].location} • {REVIEWS[currentIndex].serviceUsed}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#123B2A] bg-[#FAFBF8] px-3 py-1.5 rounded-full border border-gray-200">
                <ShieldCheck className="w-4 h-4 text-[#6FAF45]" />
                <span>Verified Fort Bend Client</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2.5">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-[#6FAF45]'
                      : 'w-2.5 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
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
                className="w-11 h-11 rounded-full bg-[#6FAF45] hover:bg-[#5F993A] text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
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
