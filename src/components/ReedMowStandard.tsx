import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Award } from 'lucide-react';

interface ReedMowStandardProps {
  onOpenQuote: () => void;
}

export const ReedMowStandard: React.FC<ReedMowStandardProps> = ({ onOpenQuote }) => {
  const standards = [
    { title: '01 Proper Preparation', desc: 'The groundwork is set up properly before the visible work begins.' },
    { title: '02 Quality Materials', desc: 'Materials chosen to suit the job and the finish you want to live with.' },
    { title: '03 Careful Installation', desc: 'Work carried out with care rather than rushed to get off site.' },
    { title: '04 Clear Communication', desc: 'Straightforward updates from the first quote through to completion.' },
    { title: '05 Professional Finish', desc: 'Edges, levels and details treated as part of the job, not an extra.' },
    { title: '06 Respect For Your Property', desc: 'Access, neighbouring spaces and the site itself treated with care.' },
    { title: '07 Reliable Service', desc: 'A local business that turns up and sees the work through.' },
    { title: '08 Clean & Tidy Completion', desc: 'The site is left clean and tidy when the job is finished.' }
  ];

  return (
    <section id="the-standard" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#d7393e]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/8 aspect-4/5 bg-[#F3F3F3] group">
              <img
                src="/images/svc-patios.jpg"
                alt="The Bowmanscapes approach to landscaping"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#111111] text-white flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-[#d7393e]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#000000]">
                      The Bowmanscapes Approach
                    </h4>
                    <p className="text-xs text-[#555555]">
                      Plan it, prepare it, build it, finish it — properly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 bg-[#111111] text-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 border border-[#d7393e]/40">
              <ShieldCheck className="w-4 h-4 text-[#d7393e]" />
              <span className="text-xs font-bold">Landscaping. Done Properly.</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-[#000000] text-xs font-bold tracking-wide uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#d7393e]" />
                <span>THE BOWMANSCAPES APPROACH</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000000] tracking-tight font-display">
                Built Around The Details.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
                A landscaping and general building job is only as good as the way it is prepared, built and finished.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {standards.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#F7F7F7] border border-gray-100 hover:border-[#d7393e]/40 hover:bg-[#d7393e]/5 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-[#d7393e]/15 text-[#000000] group-hover:bg-[#d7393e] group-hover:text-white p-1 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#d7393e] group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#000000] leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#555555] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                id="bowmanscapes-approach-cta"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#111111] hover:bg-black text-white text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 text-[#d7393e] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
