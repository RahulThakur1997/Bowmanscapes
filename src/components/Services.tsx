import React from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/mockData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F6F7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123B2A]/8 border border-[#123B2A]/15 text-[#123B2A] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#6FAF45]" />
            <span>WHAT WE DO</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#123B2A] tracking-tight font-display">
            More Than Mowing.{' '}
            <span className="text-[#6FAF45] block sm:inline">Complete Lawn Care, Done Right.</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-[#667067] leading-relaxed">
            From routine maintenance to lawn-health improvements, ReedMow takes care of the details that keep your property looking its best across Fort Bend County.
          </p>
        </div>

        {/* 8-Card Interactive Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.name)}
              className="group bg-white rounded-3xl overflow-hidden border border-[#123B2A]/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
            >
              {/* Subtle top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#6FAF45] opacity-0 group-hover:opacity-100 transition-opacity z-20" />

              {/* Service Image Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-[#123B2A]/5">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=900&q=80';
                  }}
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Number Badge */}
                <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xl text-xs font-extrabold text-[#123B2A] shadow-xs">
                  {service.number}
                </div>

                {/* Tag / Price if available */}
                {service.startingPrice ? (
                  <div className="absolute top-3.5 right-3.5 bg-[#6FAF45] text-white px-2.5 py-1 rounded-xl text-[11px] font-bold shadow-xs">
                    {service.startingPrice}
                  </div>
                ) : service.tag ? (
                  <div className="absolute top-3.5 right-3.5 bg-black/50 backdrop-blur-xs text-white px-2.5 py-1 rounded-xl text-[11px] font-medium">
                    {service.tag}
                  </div>
                ) : null}

                {/* Bottom title on photo */}
                <div className="absolute bottom-3.5 left-4 right-4">
                  <h3 className="text-xl font-bold text-white font-display leading-tight drop-shadow-xs">
                    {service.name}
                  </h3>
                </div>
              </div>

              {/* Service Description & CTA */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <p className="text-sm text-[#667067] leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#123B2A] group-hover:text-[#6FAF45] transition-colors">
                    {service.id === 'lawn-care' ? 'Explore Lawn Care' : 'Get Service Quote'}
                  </span>
                  
                  <div className="w-8 h-8 rounded-full bg-[#123B2A]/5 group-hover:bg-[#6FAF45] group-hover:text-white text-[#123B2A] flex items-center justify-center transition-all duration-200">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-16 bg-[#123B2A] rounded-3xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold font-display">
              Not sure which service fits your property?
            </h4>
            <p className="text-sm text-gray-300 max-w-xl">
              Select "Not Sure Yet" in our qualification form or call Trav directly for an honest property assessment.
            </p>
          </div>

          <button
            onClick={() => onSelectService('Not Sure Yet')}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#6FAF45] hover:bg-[#5F993A] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2"
          >
            <span>Request Property Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
