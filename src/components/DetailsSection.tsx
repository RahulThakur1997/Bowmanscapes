import React from 'react';
import { Layers, Droplets, Sparkles, CheckCircle2, Brush } from 'lucide-react';

export const DetailsSection: React.FC = () => {
  const detailCards = [
    {
      id: 'prep',
      icon: Layers,
      title: 'GROUND PREPARATION',
      subtitle: 'Set up properly.',
      desc: 'A lasting finish starts with the ground being prepared properly before the visible work goes in.',
      image: '/images/detail-prep.jpg',
      badge: 'Foundation'
    },
    {
      id: 'drainage',
      icon: Droplets,
      title: 'DRAINAGE & LEVELS',
      subtitle: 'Water in the right place.',
      desc: 'Levels and drainage are considered so water has somewhere to go and the finished surface sits correctly.',
      image: '/images/svc-drainage.jpg',
      badge: 'Practical'
    },
    {
      id: 'finish',
      icon: Sparkles,
      title: 'FINISHING DETAILS',
      subtitle: 'The last 10%.',
      desc: 'Edges, joints, cuts and matching details are part of the job — not an afterthought.',
      image: '/images/svc-patios.jpg',
      badge: 'Detail'
    },
    {
      id: 'tidy',
      icon: Brush,
      title: 'CLEAN & TIDY WORK',
      subtitle: 'Left as it should be.',
      desc: 'The site is kept respectful during the work and left clean and tidy when the job is complete.',
      image: '/images/feat-after.jpg',
      badge: 'Site Care'
    }
  ];

  return (
    <section id="details" className="py-24 sm:py-32 bg-[#F7F7F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-[#000000] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d7393e]" />
            <span>THE DETAILS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000000] tracking-tight font-display">
            The Details Make The Difference.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
            The finish people notice is built on preparation, levels, care on site and a tidy completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {detailCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-3xl overflow-hidden border border-black/8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={card.image}
                    alt={`${card.title} - ${card.subtitle}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3.5 left-3.5 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#000000] shadow-sm">
                    <Icon className="w-5 h-5 text-[#d7393e]" />
                  </div>
                  <div className="absolute top-3.5 right-3.5 bg-[#d7393e] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-xs">
                    {card.badge}
                  </div>
                  <div className="absolute bottom-3.5 left-4 right-4">
                    <span className="text-xs uppercase tracking-wider font-semibold text-white/80 block">
                      {card.title}
                    </span>
                    <h3 className="text-xl font-bold text-white font-display leading-none mt-0.5">
                      {card.subtitle}
                    </h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {card.desc}
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#000000]">
                    <CheckCircle2 className="w-4 h-4 text-[#d7393e]" />
                    <span>Part of every project</span>
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
