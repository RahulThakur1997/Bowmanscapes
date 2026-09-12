import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenQuote: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuote }) => {
  return (
    <section id="final-cta" className="relative py-28 sm:py-36 overflow-hidden bg-[#123B2A] text-white">
      {/* Background Image with Deep Contrast Dark Overlay */}
      <img
        src="https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=1800&q=80"
        alt="Lush green lawn in Fort Bend County neighborhood"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-20 filter brightness-90"
        referrerPolicy="no-referrer"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B241A] via-[#123B2A]/90 to-[#123B2A]/95" />

      {/* Decorative radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6FAF45]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#83C656] text-xs font-bold tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SUGAR LAND • MISSOURI CITY • STAFFORD • MEADOWS PLACE</span>
        </div>

        {/* Big Bold Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-display leading-[1.1]">
          Your Weekend Is Better Spent{' '}
          <span className="text-[#6FAF45] block mt-1 sm:inline sm:mt-0">
            Doing Something Else.
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl font-medium text-white/90 font-display">
          Let ReedMow handle the lawn.
        </p>

        {/* Supporting copy */}
        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          Professional lawn care. Predictable pricing. No contracts. No hassle.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenQuote}
            id="final-cta-primary-btn"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#6FAF45] hover:bg-[#5F993A] text-white text-base font-extrabold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>Get My Lawn Taken Care Of</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <a
            href="tel:8324043736"
            id="final-cta-call-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/25 text-white text-base font-bold backdrop-blur-md transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-[#6FAF45]" />
            <span>Call (832) 404-3736</span>
          </a>
        </div>

        {/* Bottom Pricing & Assurance Pill */}
        <div className="pt-6">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-2.5 rounded-full bg-black/40 border border-white/10 text-xs font-semibold text-white/80">
            <span className="text-[#83C656] font-bold">Starting at $50 / visit for lawns under ½ acre</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>Zero Contracts</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>Closed Gate Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
};
