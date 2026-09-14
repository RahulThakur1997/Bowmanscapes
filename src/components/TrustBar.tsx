import React from 'react';
import { Star, FileCheck, MapPin, MessageSquare } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      id: 'rating',
      icon: Star,
      title: '5.0 Google Rating',
      subtitle: 'Consistently 5-star feedback',
      color: 'bg-[#d7393e]/10 text-[#d7393e]'
    },
    {
      id: 'reviews',
      icon: MessageSquare,
      title: '50 Google Reviews',
      subtitle: 'Local homeowners',
      color: 'bg-[#d7393e]/10 text-[#d7393e]'
    },
    {
      id: 'quotes',
      icon: FileCheck,
      title: 'Free Quotes',
      subtitle: 'No obligation',
      color: 'bg-[#d7393e]/10 text-[#d7393e]'
    },
    {
      id: 'local',
      icon: MapPin,
      title: 'Malton & Surrounding Areas',
      subtitle: 'Local landscaping & building',
      color: 'bg-[#d7393e]/10 text-[#d7393e]'
    }
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="trust-bar">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-black/8">
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
                    <span className="text-base sm:text-lg font-bold text-[#000000] tracking-tight font-display">
                      {item.title}
                    </span>
                  </div>
                  <span className="block text-xs sm:text-sm text-[#555555] font-medium truncate">
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
