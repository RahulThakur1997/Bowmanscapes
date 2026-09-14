import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { COMPANY_INFO, FAQS } from '../data/mockData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-[#000000] text-xs font-bold tracking-wide uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#d7393e]" />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000000] tracking-tight font-display">
            Questions Homeowners Usually Ask
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
            Coverage, quotes, services and how to get in touch.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#d7393e] bg-[#F7F7F7] shadow-sm'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#000000] font-display">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#d7393e] text-white rotate-180'
                        : 'bg-gray-100 text-[#000000]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#555555] leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-6 rounded-2xl bg-[#F7F7F7] border border-black/8 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <span className="text-sm font-semibold text-[#000000]">
            Have a question about a specific project?
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#000000] hover:text-[#d7393e] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#d7393e]" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#555555] hover:text-[#000000] transition-colors"
            >
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
