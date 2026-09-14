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
      className="py-20 sm:py-28 bg-[#111111] text-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d7393e]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/50 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#d7393e] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE BOWMANSCAPES DIFFERENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            Not Just Another Landscaper.{' '}
            <span className="text-[#d7393e] block sm:inline">The Bowmanscapes Difference.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Reliable local service, professional workmanship, and a wide range of landscaping and general building work across Malton and the surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 max-w-5xl mx-auto">
          {[
            { src: '/images/svc-patios.jpg', label: 'Patios' },
            { src: '/images/svc-driveways.jpg', label: 'Driveways' },
            { src: '/images/svc-fencing.jpg', label: 'Fencing' },
            { src: '/images/svc-decking.jpg', label: 'Decking' },
          ].map((item) => (
            <div key={item.label} className="relative rounded-2xl overflow-hidden border border-white/15 aspect-4/3 bg-black/40">
              <img src={item.src} alt="" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-2.5 left-2.5 bg-[#d7393e] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="min-w-[760px] lg:min-w-full">
            <div className="grid grid-cols-12 gap-4 items-end mb-4 px-4">
              <div className="col-span-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                What You Can Expect
              </div>
              <div className="col-span-3 bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 block">Typical</span>
                <h3 className="text-base font-bold text-white mt-1">Casual Trader</h3>
                <span className="text-xs text-gray-400">Limited or inconsistent</span>
              </div>
              <div className="col-span-3 bg-white text-[#111111] rounded-2xl p-5 text-center shadow-2xl relative border-2 border-[#d7393e] -translate-y-2">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d7393e] text-white text-[11px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md">
                  Local Standard
                </div>
                <div className="flex items-center justify-center gap-1.5 mt-1">
                  <h3 className="text-2xl font-black text-[#111111] font-display">
                    Bowman<span className="text-[#d7393e]">scapes</span>
                  </h3>
                </div>
                <span className="text-xs font-bold text-gray-600">Malton & Surrounding Areas</span>
              </div>
              <div className="col-span-3 bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 block">National</span>
                <h3 className="text-base font-bold text-white mt-1">Large Firm</h3>
                <span className="text-xs text-gray-400">Remote and subcontracted</span>
              </div>
            </div>

            <div className="space-y-3">
              {COMPARISON_DATA.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 items-center bg-white/5 hover:bg-white/8 rounded-2xl p-4 border border-white/10 transition-colors"
                >
                  <div className="col-span-3">
                    <span className="text-sm font-bold text-white block">{row.feature}</span>
                  </div>
                  <div className="col-span-3 text-xs sm:text-sm text-gray-300 flex items-start gap-2 bg-black/20 p-3 rounded-xl min-h-[60px] items-center">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{row.soloGuy}</span>
                  </div>
                  <div className="col-span-3 text-xs sm:text-sm font-bold text-[#111111] flex items-start gap-2.5 bg-white p-3.5 rounded-xl min-h-[60px] items-center shadow-md border-l-4 border-[#d7393e]">
                    <CheckCircle2 className="w-5 h-5 text-[#d7393e] shrink-0" />
                    <span className="leading-snug">{row.bowmanscapes}</span>
                  </div>
                  <div className="col-span-3 text-xs sm:text-sm text-gray-300 flex items-start gap-2 bg-black/20 p-3 rounded-xl min-h-[60px] items-center">
                    <X className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{row.nationalChains}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-[#1A1A1A] via-[#111111] to-[#1A1A1A] p-6 sm:p-8 rounded-3xl border border-[#d7393e]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center md:text-left">
                <div className="w-12 h-12 rounded-2xl bg-[#d7393e] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-white font-display">
                    Ready to get the job done properly?
                  </h4>
                  <p className="text-sm text-gray-300 font-medium mt-0.5">
                    Call {COMPANY_INFO.phone} for a free quote.
                  </p>
                </div>
              </div>
              <button
                onClick={onOpenQuote}
                id="comparison-cta-btn"
                className="shrink-0 px-8 py-3.5 rounded-2xl bg-[#d7393e] hover:bg-[#bf2f34] text-white font-black text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center gap-2"
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
