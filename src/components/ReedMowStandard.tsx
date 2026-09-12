import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Award } from 'lucide-react';

interface ReedMowStandardProps {
  onOpenQuote: () => void;
}

export const ReedMowStandard: React.FC<ReedMowStandardProps> = ({ onOpenQuote }) => {
  const standards = [
    { title: 'Mowing at the right height', desc: 'Calibrated for St. Augustine, Bermuda, and Zoysia turf to preserve root moisture' },
    { title: 'Clean, crisp edging', desc: 'Razor-sharp vertical lines along concrete driveways, walkways, and street curbs' },
    { title: 'Professional trimming', desc: 'String trimming around all fences, trees, and landscape borders without scalping' },
    { title: 'Blowing hard surfaces clean', desc: 'Driveways, patios, pool decks, and sidewalks blown 100% spotless before departure' },
    { title: 'Checking the gate latch', desc: 'Backyard gates closed and physically tested twice to keep dogs and families secure' },
    { title: 'Moving packages out of sight', desc: 'Front porch Amazon boxes tucked behind pillars or away from street visibility' },
    { title: 'Noticing lawn-health issues', desc: 'Proactive alerts for fungus spots, chinch bug damage, or irrigation dry zones' },
    { title: 'Text notification when done', desc: 'Automated completion ping with a quick recap so you always know your yard is handled' }
  ];

  return (
    <section id="the-standard" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#6FAF45]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Photography & Quality Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#123B2A]/10 aspect-4/5 bg-[#123B2A]/5 group">
              <img
                src="https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNmE5NzAwN2VhYjc4ODE5MWFiMmM1MzQyOTI1NDhiNjk6c2VkaW1lbnQ6Ly84Y2JlNDY4NjFhNTUxZjIjZmlsZV8wMDAwMDAwMGJmYTQ4MjA3OWQwMjRjYmE0OGUxMDE4ZCN1bmZ1cmwiLCJnaXptb19pZCI6bnVsbCwid2lkIjpudWxsLCJvaWQiOm51bGwsInNpZCI6bnVsbCwiY3MiOm51bGwsImZuIjpudWxsLCJjZCI6bnVsbCwidHMiOiIyMDY5NyIsInAiOiJweWkiLCJjaWQiOiIxIiwic2lnIjoiMmE2Mzc1ZThkODY1MmNhYjkxZGYzN2MwMzllODY5NWNmOWFkOGM1N2M2ZmI5OGVlOGY2YWE2MTdmYzA5ZTkyZCIsInYiOiIwIiwiY2RuIjpudWxsLCJjcCI6bnVsbCwibWEiOm51bGx9"
                alt="The ReedMow Standard - Precision Lawn Maintenance and Detail Checklist"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123B2A]/85 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#123B2A] text-white flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-[#6FAF45]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#123B2A]">
                      The 8-Point Detail Checklist
                    </h4>
                    <p className="text-xs text-[#667067]">
                      Performed on every single visit — standard, not an extra fee.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div className="absolute -top-4 -left-4 bg-[#123B2A] text-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 border border-[#6FAF45]/30">
              <ShieldCheck className="w-4 h-4 text-[#6FAF45]" />
              <span className="text-xs font-bold">100% Quality Guaranteed</span>
            </div>
          </div>

          {/* Right Column: Copy & Detailed Checklist */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123B2A]/8 border border-[#123B2A]/15 text-[#123B2A] text-xs font-bold tracking-wide uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#6FAF45]" />
                <span>THE REEDMOW STANDARD</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#123B2A] tracking-tight font-display">
                A Lawn Service Built Around the Details.
              </h2>
              
              <p className="mt-4 text-base sm:text-lg text-[#667067] leading-relaxed">
                Anyone can mow grass. ReedMow is built around everything that happens before, during and after the mower leaves.
              </p>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {standards.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#FAFBF8] border border-gray-100 hover:border-[#6FAF45]/40 hover:bg-[#6FAF45]/5 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-[#6FAF45]/15 text-[#123B2A] group-hover:bg-[#6FAF45] group-hover:text-white p-1 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#6FAF45] group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#123B2A] leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#667067] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                id="reedmow-standard-cta"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#123B2A] hover:bg-[#1B4E38] text-white text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Get Started with the ReedMow Standard</span>
                <ArrowRight className="w-5 h-5 text-[#6FAF45] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
