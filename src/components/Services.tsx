import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ADDITIONAL_SERVICES, SERVICES } from '../data/mockData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F7F7F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-[#000000] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d7393e]" />
            <span>WHAT WE DO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000000] tracking-tight font-display">
            Landscaping & General Building.{' '}
            <span className="text-[#d7393e] block sm:inline">Done Properly.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
            From patios and driveways to fencing, turf, decking and outdoor building work across Malton and the surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.name)}
              className="group bg-white rounded-3xl overflow-hidden border border-black/8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#d7393e] opacity-0 group-hover:opacity-100 transition-opacity z-20" />

              <div className="relative h-48 sm:h-52 overflow-hidden bg-[#F3F3F3]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xl text-xs font-extrabold text-[#000000] shadow-xs">
                  {service.number}
                </div>
                {service.tag && (
                  <div className="absolute top-3.5 right-3.5 bg-[#d7393e] text-white px-2.5 py-1 rounded-xl text-[11px] font-bold shadow-xs">
                    {service.tag}
                  </div>
                )}
                <div className="absolute bottom-3.5 left-4 right-4">
                  <h3 className="text-xl font-bold text-white font-display leading-tight drop-shadow-xs">
                    {service.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <p className="text-sm text-[#555555] leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#000000] group-hover:text-[#d7393e] transition-colors">
                    Get Service Quote
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/5 group-hover:bg-[#d7393e] group-hover:text-white text-[#000000] flex items-center justify-center transition-all duration-200">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ADDITIONAL_SERVICES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectService(item.name)}
              className="text-left bg-white rounded-2xl overflow-hidden border border-black/8 shadow-sm hover:shadow-md hover:border-[#d7393e]/30 transition-all cursor-pointer"
            >
              <div className="relative h-28 overflow-hidden bg-[#F3F3F3]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h4 className="text-sm font-bold text-[#000000] font-display">{item.name}</h4>
                <p className="text-xs text-[#555555] mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 bg-[#111111] rounded-3xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold font-display">
              Not sure which service fits your property?
            </h4>
            <p className="text-sm text-gray-300 max-w-xl">
              Send a few details through the quote form or call for a straightforward conversation about the work.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Not Sure Yet')}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#d7393e] hover:bg-[#bf2f34] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
