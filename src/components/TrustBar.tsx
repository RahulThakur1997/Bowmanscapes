import React from 'react';
import { DollarSign, FileCheck, MapPin, Lock, ShieldCheck, Sparkles } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      id: 'price',
      icon: DollarSign,
      title: '$50 / Visit',
      subtitle: 'Flat-rate lawn care',
      badge: 'Transparent',
      color: 'bg-[#6FAF45]/15 text-[#123B2A]'
    },
    {
      id: 'contract',
      icon: FileCheck,
      title: 'No Contracts',
      subtitle: 'Simple & flexible',
      badge: 'Zero Risk',
      color: 'bg-[#123B2A]/10 text-[#123B2A]'
    },
    {
      id: 'local',
      icon: MapPin,
      title: 'Local Crew',
      subtitle: 'Fort Bend County',
      badge: 'Neighborhood',
      color: 'bg-[#6FAF45]/15 text-[#123B2A]'
    },
    {
      id: 'gate',
      icon: Lock,
      title: 'Closed Gate',
      subtitle: 'Every service, every time',
      badge: 'Guaranteed',
      color: 'bg-[#123B2A]/10 text-[#123B2A]'
    }
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="trust-bar">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-[#123B2A]/10">
        
        {/* Responsive Grid / Horizontal Scroll for Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-center gap-3.5 ${idx > 0 ? 'pt-3 sm:pt-0 sm:pl-6' : ''} group`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-105 ${item.color}`}>
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-[#123B2A] tracking-tight font-display">
                      {item.title}
                    </span>
                  </div>
                  <span className="block text-xs sm:text-sm text-[#667067] font-medium truncate">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
