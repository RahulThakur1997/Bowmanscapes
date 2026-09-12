import React from 'react';
import { X, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPARISON_DATA, COMPANY_INFO } from '../data/mockData';

interface ComparisonTableProps {
  onOpenQuote: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onOpenQuote }) => {
  return (
    <section
      id="why-bowmanscapes"
      className="py-20 sm:py-28 bg-[#111512] text-white relative overflow-hidden"
    >
      {/* Background subtle textures */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d7393e]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/50 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#d7393e] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE BOWMANSCAPES STANDARD</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            Built to Last.{' '}
            <span className="text-[#d7393e] block sm:inline">The Honest Way to Build.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Proper depths, full sub-bases, premium mortar mixes, and an owner who takes pride in every stone laid across Malton and North Yorkshire.
          </p>
        </div>

        {/* 3-Column Comparison Grid Table */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[760px] lg:min-w-full">
            
            {/* Table Header Row */}
            <div className="grid grid-cols-12 gap-4 items-end mb-4 px-4">
              <div className="col-span-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                Workmanship Standard
              </div>

              {/* Casual Tradesman Column Header */}
              <div className="col-span-3 bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 block">Typical</span>
                <h3 className="text-base font-bold text-white mt-1">Cheap 'Fly-By' Trader</h3>
                <span className="text-xs text-gray-400">Rushed prep & cut corners</span>
              </div>

              {/* Bowmanscapes Dominant Column Header */}
              <div className="col-span-3 bg-white text-[#111512] rounded-2xl p-5 text-center shadow-2xl relative border-2 border-[#d7393e] -translate-y-2">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d7393e] text-white text-[11px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md">
                  Recommended Local Standard
                </div>
                <div className="flex items-center justify-center gap-1.5 mt-1">
                  <h3 className="text-2xl font-black text-[#111512] font-display">
                    Bowman<span className="text-[#d7393e]">scapes</span>
                  </h3>
                </div>
                <span className="text-xs font-bold text-gray-600">Matt Bowman • Master Landscaper</span>
              </div>

              {/* Massive Subcontracting Firms */}
              <div className="col-span-3 bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 block">National Agency</span>
                <h3 className="text-base font-bold text-white mt-1">Subcontracted Firm</h3>
                <span className="text-xs text-gray-400">High markup & disconnected sales</span>
              </div>
            </div>

            {/* Table Body Rows */}
            <div className="space-y-3">
              {COMPARISON_DATA.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 items-center bg-white/5 hover:bg-white/8 rounded-2xl p-4 border border-white/10 transition-colors"
                >
                  {/* Feature Label */}
                  <div className="col-span-3">
                    <span className="text-sm font-bold text-white block">{row.feature}</span>
                  </div>

                  {/* Casual Column */}
                  <div className="col-span-3 text-xs sm:text-sm text-gray-300 flex items-start gap-2 bg-black/20 p-3 rounded-xl min-h-[60px] items-center">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{row.soloGuy}</span>
                  </div>

                  {/* Bowmanscapes Dominant Column */}
                  <div className="col-span-3 text-xs sm:text-sm font-bold text-[#111512] flex items-start gap-2.5 bg-white p-3.5 rounded-xl min-h-[60px] items-center shadow-md border-l-4 border-[#d7393e]">
                    <CheckCircle2 className="w-5 h-5 text-[#d7393e] shrink-0" />
                    <span className="leading-snug">{row.bowmanscapes}</span>
                  </div>

                  {/* National Agency Column */}
                  <div className="col-span-3 text-xs sm:text-sm text-gray-300 flex items-start gap-2 bg-black/20 p-3 rounded-xl min-h-[60px] items-center">
                    <X className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{row.nationalChains}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Dominant Banner Summary */}
            <div className="mt-8 bg-gradient-to-r from-[#1b221d] via-[#111512] to-[#1b221d] p-6 sm:p-8 rounded-3xl border border-[#d7393e]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center md:text-left">
                <div className="w-12 h-12 rounded-2xl bg-[#d7393e] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-white font-display">
                    Ready to build properly?
                  </h4>
                  <p className="text-sm text-gray-300 font-medium mt-0.5">
                    Call Matt directly on {COMPANY_INFO.phone} for honest guidance and free quotes.
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenQuote}
                id="comparison-cta-btn"
                className="shrink-0 px-8 py-3.5 rounded-2xl bg-[#d7393e] hover:bg-[#be2e33] text-white font-black text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

