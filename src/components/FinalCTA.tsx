import React from 'react';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface FinalCTAProps {
  onOpenQuote: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuote }) => {
  return (
    <section id="final-cta" className="relative py-28 sm:py-36 overflow-hidden bg-[#111111] text-white">
      <img
        src="/images/hero-bg.jpg"
        alt="Outdoor landscaping and patio work"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-20 filter brightness-90"
        referrerPolicy="no-referrer"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#111111]/90 to-[#111111]/95" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d7393e]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#d7393e] text-xs font-bold tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>MALTON & SURROUNDING AREAS</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-display leading-[1.1]">
          Ready To Transform{' '}
          <span className="text-[#d7393e] block mt-1 sm:inline sm:mt-0">
            Your Outdoor Space?
          </span>
        </h2>

        <p className="text-xl sm:text-2xl font-medium text-white/90 font-display">
          Landscaping. Done Properly.
        </p>

        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          Patios, driveways, fencing, turf, decking and general building — with a free quote and no obligation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenQuote}
            id="final-cta-primary-btn"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#d7393e] hover:bg-[#bf2f34] text-white text-base font-extrabold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>GET A FREE QUOTE</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            id="final-cta-call-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/25 text-white text-base font-bold backdrop-blur-md transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-[#d7393e]" />
            <span>CALL {COMPANY_INFO.phone}</span>
          </a>
        </div>

        <div className="pt-6">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-2.5 rounded-full bg-black/40 border border-white/10 text-xs font-semibold text-white/80">
            <span className="text-[#d7393e] font-bold">Free Quotes</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>5.0 Google Rating</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>50 Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};
