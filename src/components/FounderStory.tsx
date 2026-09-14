import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface FounderStoryProps {
  onOpenQuote: () => void;
}

export const FounderStory: React.FC<FounderStoryProps> = ({ onOpenQuote }) => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#F7F7F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-black/8 aspect-4/5 bg-gray-100 relative group">
              <img
                src="/images/feat-after.jpg"
                alt="Bowmanscapes landscaping and outdoor building work"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/50 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#000000] font-display">
                      Bowmanscapes
                    </h3>
                    <p className="text-xs text-[#555555] font-medium">
                      Landscaping & General Building • Malton
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#d7393e]/15 text-[#000000] flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5 text-[#d7393e]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#111111] text-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 border border-[#d7393e]/40">
              <ShieldCheck className="w-4 h-4 text-[#d7393e]" />
              <span className="text-xs font-bold">Local Malton Business</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-[#000000] text-xs font-bold tracking-wide uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#d7393e]" />
                <span>THE PROMISE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000000] tracking-tight font-display">
                One Local Business.{' '}
                One Simple Promise.{' '}
                <span className="text-[#d7393e] block">Do The Job Right.</span>
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#555555] leading-relaxed">
              <p>
                Bowmanscapes is a local landscaping and general building business serving homeowners in Malton and the surrounding areas.
              </p>
              <p>
                The idea is simple: plan the work properly, prepare it properly, build it properly, and finish it properly.
              </p>
              <p className="text-[#000000] font-semibold">
                Landscaping. Done Properly.
              </p>
              <p>
                Whether it is a patio, driveway, fence, turf, decking, gate or a piece of outdoor building work, the aim is the same — a job you can live with and be proud of.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-6">
              <div>
                <span className="font-serif italic text-2xl font-bold text-[#000000] tracking-tight block">
                  Bowmanscapes
                </span>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#555555]">
                  Landscaping & General Building
                </span>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#000000] font-semibold">
                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    className="inline-flex items-center gap-1.5 hover:text-[#d7393e] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#d7393e]" />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                  <span className="text-gray-300">•</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="inline-flex items-center gap-1.5 hover:text-[#d7393e] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#d7393e]" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </div>
              </div>
              <button
                onClick={onOpenQuote}
                id="founder-story-cta"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#111111] hover:bg-black text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-[#d7393e] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
