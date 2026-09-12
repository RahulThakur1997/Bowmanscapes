import React from 'react';
import { ArrowRight, Phone, Star, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { QualificationForm } from './QualificationForm';
import { COMPANY_INFO } from '../data/mockData';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section
      id="hero-section"
      className="relative pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-[#111512]"
    >
      {/* 1. High-Quality Landscape Architecture Visual Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=2000&q=85"
          alt="Bowmanscapes professional porcelain patio and landscaping in North Yorkshire"
          className="w-full h-full object-cover object-center scale-105"
        />

        {/* 2. Sophisticated High-Contrast Dark Overlay ensuring crisp readability */}
        <div className="absolute inset-0 bg-[#0d110e]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d110e]/95 via-[#0d110e]/85 to-[#0d110e]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d110e]/90 via-transparent to-[#111512]" />
        
        {/* Subtle architectural red accent ambiance */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d7393e]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 3. Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-5 lg:space-y-6 pt-1 sm:pt-2">
            
            {/* Location & Service Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-[13px] font-bold tracking-wide uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#d7393e] animate-pulse" />
              <span>LANDSCAPING & GENERAL BUILDING • MALTON & NORTH YORKSHIRE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black text-white leading-[1.05] tracking-tight font-display drop-shadow-sm">
              Landscaping.{' '}
              <span className="text-[#d7393e] block sm:inline">
                Done Properly.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl font-normal leading-relaxed drop-shadow-xs">
              Professional landscaping and general building for homeowners across Malton and surrounding areas. From porcelain patios and driveways to fencing, decking, and garden brickwork.
            </p>

            {/* 4 Quick Value Highlights */}
            <div className="p-3.5 rounded-2xl bg-[#111512]/90 backdrop-blur-md border border-white/15 shadow-lg max-w-xl">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-bold text-white">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d7393e] shrink-0" />
                  <span>Patios & Driveways</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d7393e] shrink-0" />
                  <span>Fencing & Decking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d7393e] shrink-0" />
                  <span>Free Detailed Quotes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d7393e] shrink-0" />
                  <span>Malton & Surrounds</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-0.5">
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

            {/* Social Proof & Google Review Trust */}
            <div className="pt-2 border-t border-white/15 max-w-xl">
              <div className="flex flex-wrap items-center gap-4">
                {/* 5.0 Star Rating */}
                <a 
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 group hover:opacity-90 transition-opacity"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                  <span className="ml-1 text-sm font-black text-white">5.0 / 5.0</span>
                  <span className="text-xs text-gray-300 ml-1 underline decoration-dotted">50 Google Reviews</span>
                </a>

                <span className="hidden sm:inline text-white/30">•</span>

                {/* Local Area Verification */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#d7393e]/20 border border-[#d7393e]/40 flex items-center justify-center text-[#d7393e]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-medium text-gray-200">
                    Trusted Malton independent business • 100% 5-Star rated
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Free Quote Request Form Card */}
          <div className="lg:col-span-5 relative">
            {/* Top Right Area Tag */}
            <div className="absolute -top-6 -right-2 hidden sm:flex items-center gap-2 bg-[#111512]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-white/20 z-20">
              <MapPin className="w-3.5 h-3.5 text-[#d7393e]" />
              <span className="text-xs font-bold text-white">Covering Malton & Surrounding Areas</span>
            </div>

            <QualificationForm />

            {/* Real Project Visual Preview */}
            <div className="mt-4 rounded-2xl overflow-hidden shadow-xl border border-white/15 relative group">
              <img
                src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=900&q=80"
                alt="Bowmanscapes porcelain paving and garden landscaping"
                className="w-full h-44 sm:h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-3.5 pointer-events-none">
                <div className="flex items-center justify-between w-full text-white">
                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    <ShieldCheck className="w-4 h-4 text-[#d7393e]" />
                    <span>Real Work. Proper Ground Prep.</span>
                  </div>
                  <span className="text-[11px] text-white bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-xs font-medium border border-white/15">
                    Patios • Fencing • Turfing
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

