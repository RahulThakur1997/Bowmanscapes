import React, { useState, useRef, useCallback } from 'react';
import { ArrowRight, Sparkles, MapPin, Layers, CheckCircle2 } from 'lucide-react';
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
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123B2A]/8 border border-[#123B2A]/15 text-[#123B2A] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#6FAF45]" />
            <span>RECENT WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#123B2A] tracking-tight font-display">
            Real Lawns. Real Results.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#667067] leading-relaxed">
            A look at some of the properties we’ve helped maintain, improve and restore across Fort Bend County.
          </p>
        </div>

        {/* Featured Project Showcase with Interactive Draggable Before/After Slider */}
        <div className="bg-[#FAFBF8] rounded-3xl p-6 sm:p-10 border border-[#123B2A]/10 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Interactive Before/After Image Slider */}
            <div className="lg:col-span-7">
              <div
                ref={containerRef}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative h-72 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden shadow-md select-none cursor-ew-resize border border-[#123B2A]/10 bg-gray-900"
              >
                {/* AFTER image (Full background) */}
                <img
                  src={FEATURED_PROJECT.afterImage}
                  alt={`${FEATURED_PROJECT.title} After Lawn Care`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=1200&q=80';
                  }}
                />

                {/* BEFORE image (Hardware-accelerated clip-path) */}
                <img
                  src={FEATURED_PROJECT.beforeImage}
                  alt={`${FEATURED_PROJECT.title} Before Lawn Care`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none filter saturate-75 brightness-90"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                  }}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80';
                  }}
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-lg pointer-events-none border border-white/10 shadow-sm">
                  BEFORE
                </div>
                <div className="absolute top-4 right-4 bg-[#6FAF45] text-white text-xs font-bold px-3 py-1 rounded-lg pointer-events-none shadow-md border border-white/20">
                  AFTER
                </div>

                {/* Slider Handle Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-[#123B2A] shadow-2xl border-2 border-[#6FAF45] flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5">
                      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
                    </svg>
                  </div>
                </div>

                {/* Hint Bar at bottom */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md text-white text-[11px] font-medium px-3.5 py-1 rounded-full pointer-events-none border border-white/10">
                  ↔ Drag slider to compare transformation
                </div>
              </div>
            </div>

            {/* Right: Featured Project Story */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#6FAF45] uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{FEATURED_PROJECT.location} • {FEATURED_PROJECT.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123B2A] font-display">
                  {FEATURED_PROJECT.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#667067] leading-relaxed">
                {FEATURED_PROJECT.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#123B2A]">
                  <CheckCircle2 className="w-4 h-4 text-[#6FAF45]" />
                  <span>100% suffocating leaf layer cleared and bagged</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#123B2A]">
                  <CheckCircle2 className="w-4 h-4 text-[#6FAF45]" />
                  <span>Crisp mechanical edge lines along driveway & beds</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#123B2A]">
                  <CheckCircle2 className="w-4 h-4 text-[#6FAF45]" />
                  <span>Full hard surface blowdown & gate latch verification</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onOpenQuote('Lawn Care')}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#123B2A] hover:bg-[#1B4E38] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Request Lawn Service or Cleanup</span>
                  <ArrowRight className="w-4 h-4 text-[#6FAF45] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Additional Local Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RECENT_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#FAFBF8] rounded-2xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={proj.afterImage}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                  {proj.category}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#667067] mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#6FAF45]" />
                    <span>{proj.location}</span>
                  </div>
                  <h4 className="text-base font-bold text-[#123B2A] leading-snug">
                    {proj.title}
                  </h4>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#123B2A] group-hover:text-[#6FAF45] transition-colors">
                    Standard Route Service
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#6FAF45] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
