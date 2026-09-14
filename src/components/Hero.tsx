import React from 'react';
import { ArrowRight, Phone, Star, ShieldCheck, MapPin } from 'lucide-react';
import { QualificationForm } from './QualificationForm';
import { COMPANY_INFO } from '../data/mockData';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-28 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24 overflow-hidden bg-[#111111]"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero-bg.jpg"
          alt="Professional landscaping and outdoor paving"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-[#000000]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/95 via-[#000000]/85 to-[#000000]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/90 via-transparent to-[#111111]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d7393e]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          <div className="lg:col-span-7 space-y-6 lg:space-y-7 pt-8 sm:pt-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-[13px] font-bold tracking-wide uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#d7393e] animate-pulse" />
              <span>LANDSCAPING & GENERAL BUILDING • MALTON</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black text-white leading-[1.12] tracking-tight font-display drop-shadow-sm">
              Landscaping.{' '}
              <span className="text-[#d7393e] block">
                Done{' '}
                <span className="relative inline-block pb-1">
                  Properly.
                  <svg
                    className="absolute left-0 w-[108%] -bottom-[0.08em] h-[0.36em] pointer-events-none"
                    viewBox="0 0 240 18"
                    fill="none"
                    aria-hidden="true"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3 12.8C38 5.2 76 16.4 118 9.1C148 3.6 178 14.6 212 8.4C222 6.6 230 8.2 237 10.1"
                      stroke="#d7393e"
                      strokeWidth="3.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl font-normal leading-relaxed drop-shadow-xs">
              Professional landscaping and general building for homeowners across Malton and the surrounding areas.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a
                href="#qualification-form-container"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('qualification-form-container')?.scrollIntoView({ behavior: 'smooth' });
                }}
                id="hero-primary-cta"
                className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-2xl bg-[#d7393e] hover:bg-[#bf2f34] text-white text-base font-black shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-center"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-base font-bold shadow-sm transition-all duration-200 text-center"
              >
                <Phone className="w-4 h-4 text-[#d7393e]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

            <div className="pt-3 border-t border-white/15 max-w-xl">
              <div className="flex flex-col gap-3">
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-wrap items-center gap-1 group hover:opacity-90 transition-opacity w-fit"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                  <span className="ml-1 text-sm font-black text-white">5.0 / 5</span>
                  <span className="text-xs text-gray-300 ml-1">50 Google Reviews</span>
                </a>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <img
                        key={n}
                        src={`/images/avatar-${n}.jpg`}
                        alt=""
                        className="w-8 h-8 rounded-full border-2 border-white object-cover object-center shadow-sm"
                      />
                    ))}
                  </div>
                  <p className="text-xs font-medium text-gray-200">
                    Trusted Local & Independent Business
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute -top-6 -right-2 hidden sm:flex items-center gap-2 bg-[#111111]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-white/20 z-20">
              <MapPin className="w-3.5 h-3.5 text-[#d7393e]" />
              <span className="text-xs font-bold text-white">Covering Malton & Surrounding Areas</span>
            </div>

            <QualificationForm />

            <div className="mt-4 rounded-2xl overflow-hidden shadow-xl border border-white/15 relative group">
              <img
                src="/images/svc-patios.jpg"
                alt="Finished patio and landscaping project"
                className="w-full h-44 sm:h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-3.5 pointer-events-none">
                <div className="flex items-center justify-between w-full text-white">
                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    <ShieldCheck className="w-4 h-4 text-[#d7393e]" />
                    <span>Landscaping + General Building</span>
                  </div>
                  <span className="text-[11px] text-white bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-xs font-medium border border-white/15">
                    Malton & Surrounding Areas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
