import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Phone, Mail } from 'lucide-react';

interface FounderStoryProps {
  onOpenQuote: () => void;
}

export const FounderStory: React.FC<FounderStoryProps> = ({ onOpenQuote }) => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#FAFBF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Founder Photo & Badge */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#123B2A]/10 aspect-4/5 bg-gray-100 relative group">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQH8kEdoeDC6Rw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730691450351?e=1789603200&v=beta&t=l6iijl2wwatbF0jCr_OxciMkJ1TOR0H7qPMdRdTjjk8"
                alt="Trav Reed - Founder & Operator of ReedMow Lawn Care"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  // Fallback in case of network restriction
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123B2A]/85 via-transparent to-transparent pointer-events-none" />

              {/* Founder Tag */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/50 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#123B2A] font-display">
                      Trav Reed
                    </h3>
                    <p className="text-xs text-[#667067] font-medium">
                      Founder & Operator • ReedMow
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#6FAF45]/15 text-[#123B2A] flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5 text-[#6FAF45]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Local Badge */}
            <div className="absolute -top-4 -right-4 bg-[#123B2A] text-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 border border-[#6FAF45]/30">
              <ShieldCheck className="w-4 h-4 text-[#6FAF45]" />
              <span className="text-xs font-bold">Sugar Land Native</span>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123B2A]/8 border border-[#123B2A]/15 text-[#123B2A] text-xs font-bold tracking-wide uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#6FAF45]" />
                <span>THE STORY BEHIND REEDMOW</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#123B2A] tracking-tight font-display">
                One Mower. One Simple Promise.{' '}
                <span className="text-[#6FAF45] block">Do the Job Right.</span>
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#667067] leading-relaxed">
              <p>
                ReedMow started with one mower and a simple idea: show up when you say you will and do the job right.
              </p>
              <p>
                As the business grew, we saw how frustrating traditional lawn care could be for homeowners — missed appointments, confusing pricing, inconsistent work and little communication.
              </p>
              <p className="text-[#123B2A] font-semibold">
                So we built ReedMow differently.
              </p>
              <p>
                Flat-rate pricing. Reliable recurring service. Digital communication. Attention to the small details. And a standard that every ReedMow service should meet.
              </p>
              <p>
                Today, we’re building ReedMow into a trusted local resource for lawn health and outdoor aesthetics across Fort Bend County.
              </p>
            </div>

            {/* Founder Signature Area */}
            <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-6">
              <div>
                <span className="font-serif italic text-2xl font-bold text-[#123B2A] tracking-tight block">
                  Trav Reed
                </span>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#667067]">
                  Founder & Operator
                </span>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#123B2A] font-semibold">
                  <a
                    href="tel:8324043736"
                    className="inline-flex items-center gap-1.5 hover:text-[#6FAF45] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#6FAF45]" />
                    <span>(832) 404-3736</span>
                  </a>
                  <span className="text-gray-300">•</span>
                  <a
                    href="mailto:trav@reedmow.com"
                    className="inline-flex items-center gap-1.5 hover:text-[#6FAF45] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#6FAF45]" />
                    <span>trav@reedmow.com</span>
                  </a>
                </div>
              </div>

              <button
                onClick={onOpenQuote}
                id="founder-story-cta"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#123B2A] hover:bg-[#1B4E38] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Meet ReedMow</span>
                <ArrowRight className="w-4 h-4 text-[#6FAF45] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
