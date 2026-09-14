import React, { useState, useRef, useCallback } from 'react';
import { ArrowRight, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { FEATURED_PROJECT, RECENT_PROJECTS } from '../data/mockData';

interface ProjectsProps {
  onOpenQuote: (service?: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenQuote }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <section id="projects" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-[#000000] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d7393e]" />
            <span>RECENT WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000000] tracking-tight font-display">
            Real Projects.{' '}
            <span className="text-[#d7393e]">Real Results.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
            A look at the kind of landscaping and outdoor work Bowmanscapes carries out for homeowners around Malton.
          </p>
        </div>

        <div className="bg-[#F7F7F7] rounded-3xl p-6 sm:p-10 border border-black/8 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div
                ref={containerRef}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative h-72 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden shadow-md select-none cursor-ew-resize border border-black/8 bg-gray-900"
              >
                <img
                  src={FEATURED_PROJECT.afterImage}
                  alt={`${FEATURED_PROJECT.title} after`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <img
                  src={FEATURED_PROJECT.beforeImage}
                  alt={`${FEATURED_PROJECT.title} before`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none filter saturate-75 brightness-90"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                  }}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-lg pointer-events-none border border-white/10 shadow-sm">
                  BEFORE
                </div>
                <div className="absolute top-4 right-4 bg-[#d7393e] text-white text-xs font-bold px-3 py-1 rounded-lg pointer-events-none shadow-md border border-white/20">
                  AFTER
                </div>
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-[#000000] shadow-2xl border-2 border-[#d7393e] flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5">
                      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md text-white text-[11px] font-medium px-3.5 py-1 rounded-full pointer-events-none border border-white/10">
                  ↔ Drag slider to compare
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#d7393e] uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{FEATURED_PROJECT.location} • {FEATURED_PROJECT.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000000] font-display">
                  {FEATURED_PROJECT.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                {FEATURED_PROJECT.description}
              </p>
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#000000]">
                  <CheckCircle2 className="w-4 h-4 text-[#d7393e]" />
                  <span>Patios, paving and garden levels</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#000000]">
                  <CheckCircle2 className="w-4 h-4 text-[#d7393e]" />
                  <span>Fencing, turf, decking and gates</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#000000]">
                  <CheckCircle2 className="w-4 h-4 text-[#d7393e]" />
                  <span>Clean, finished outdoor spaces</span>
                </div>
              </div>
              <div className="pt-3">
                <button
                  onClick={() => onOpenQuote('Patios')}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#111111] hover:bg-black text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#d7393e] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RECENT_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#F7F7F7] rounded-2xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={proj.afterImage}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#d7393e] text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {proj.category}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#555555] mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#d7393e]" />
                    <span>{proj.location}</span>
                  </div>
                  <h4 className="text-base font-bold text-[#000000] leading-snug">
                    {proj.title}
                  </h4>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#000000] group-hover:text-[#d7393e] transition-colors">
                    View similar work
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#d7393e] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
