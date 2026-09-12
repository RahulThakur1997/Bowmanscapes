import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, Phone } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123B2A]/8 border border-[#123B2A]/15 text-[#123B2A] text-xs font-bold tracking-wide uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#6FAF45]" />
            <span>COMMON QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#123B2A] tracking-tight font-display">
            Questions Homeowners Usually Ask
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#667067] leading-relaxed">
            Everything you need to know about our flat-rate pricing, scheduling, and service standards.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#6FAF45] bg-[#FAFBF8] shadow-sm'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#123B2A] font-display">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#6FAF45] text-white rotate-180'
                        : 'bg-gray-100 text-[#123B2A]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#667067] leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#F6F7F2] border border-[#123B2A]/10 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <span className="text-sm font-semibold text-[#123B2A]">
            Have a question about a specific yard condition or slope?
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:8324043736"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#123B2A] hover:text-[#6FAF45] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#6FAF45]" />
              <span>Call Trav: (832) 404-3736</span>
            </a>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <a
              href="mailto:trav@reedmow.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#667067] hover:text-[#123B2A] transition-colors"
            >
              <span>trav@reedmow.com</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
