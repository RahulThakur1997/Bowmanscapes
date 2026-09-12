import React from 'react';
import { Lock, Package, Wind, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';

export const DetailsSection: React.FC = () => {
  const detailCards = [
    {
      id: 'gate',
      icon: Lock,
      title: 'Gate',
      subtitle: 'Double-checked.',
      desc: 'We physically latch, push, and confirm your backyard gate is locked before we pull away so your dogs and kids stay safe inside.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
      badge: 'Zero Escape Policy'
    },
    {
      id: 'packages',
      icon: Package,
      title: 'Packages',
      subtitle: 'Tucked away.',
      desc: 'If deliveries arrive while we work, we tuck porch boxes out of street view behind pillars or planters to deter porch pirates.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
      badge: 'Neighborhood Care'
    },
    {
      id: 'cleanup',
      icon: Wind,
      title: 'Cleanup',
      subtitle: 'Blown clean.',
      desc: 'Clippings never linger on walkways, pool decks, mulch beds, or cars. We blow down every hard surface to a spotless finish.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwSdcBaN6_wD-TJWpETBCC_nhFX_QQpNsnJ7DNmS0e7w&s=10',
      badge: '100% Debris-Free'
    },
    {
      id: 'communication',
      icon: MessageSquare,
      title: 'Communication',
      subtitle: 'You know when we’re done.',
      desc: 'Receive an automated text when our crew finishes so you never have to guess whether your lawn was serviced while you were at work.',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=600&q=80',
      badge: 'Real-Time Text'
    }
  ];

  return (
    <section id="details" className="py-24 sm:py-32 bg-[#F6F7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123B2A]/8 border border-[#123B2A]/15 text-[#123B2A] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#6FAF45]" />
            <span>THE REEDMOW DIFFERENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#123B2A] tracking-tight font-display">
            The Little Things Are Kind of a Big Deal.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#667067] leading-relaxed">
            Your lawn isn’t just another stop on a route. That’s why we double-check the gate, keep hard surfaces clean, tuck packages out of sight and let you know when we’re done.
          </p>
        </div>

        {/* 4 Large Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {detailCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#123B2A]/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Visual Image Header */}
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={card.image}
                    alt={`${card.title} - ${card.subtitle}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-3.5 left-3.5 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#123B2A] shadow-sm">
                    <Icon className="w-5 h-5 text-[#123B2A]" />
                  </div>

                  {/* Pill badge */}
                  <div className="absolute top-3.5 right-3.5 bg-[#6FAF45] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-xs">
                    {card.badge}
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-3.5 left-4 right-4">
                    <span className="text-xs uppercase tracking-wider font-semibold text-white/80 block">
                      {card.title}
                    </span>
                    <h3 className="text-xl font-bold text-white font-display leading-none mt-0.5">
                      {card.subtitle}
                    </h3>
                  </div>
                </div>

                {/* Body description */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <p className="text-sm text-[#667067] leading-relaxed">
                    {card.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#123B2A]">
                    <CheckCircle2 className="w-4 h-4 text-[#6FAF45]" />
                    <span>Included in every visit</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
