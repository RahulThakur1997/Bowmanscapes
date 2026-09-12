import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import { SERVICES, SERVICE_AREAS } from '../data/mockData';

interface FooterProps {
  onSelectService: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111512] text-white pt-20 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row with Big Logo & Brand Statement */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-14 border-b border-white/10">
          <div className="space-y-3">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#123B2A] flex items-center justify-center text-white border border-[#6FAF45]/40 shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-none stroke-current"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22V8" stroke="#6FAF45" />
                  <path d="M12 8C12 4.5 9 2 5 2C5 6.5 8 10 12 11" stroke="#6FAF45" />
                  <path d="M12 13C15 13 19 10 19 6C15 6 13 9 12 13" stroke="#FFFFFF" />
                </svg>
              </div>
              <span className="text-3xl font-extrabold tracking-tight text-white font-display">
                Reed<span className="text-[#6FAF45]">Mow</span>
              </span>
            </div>
            <p className="text-base text-gray-400 font-medium max-w-md font-display">
              Professional lawn care for busy homeowners.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:8324043736"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#6FAF45]" />
              <span>(832) 404-3736</span>
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 4 Main Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-white/10 text-sm">
          
          {/* Column 1: Services */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4 text-[#6FAF45]">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s.name)}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Service Areas */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4 text-[#6FAF45]">
              Service Areas (TX)
            </h4>
            <ul className="space-y-2.5 text-gray-400">
              {SERVICE_AREAS.map((area) => (
                <li key={area.name} className="flex items-center justify-between">
                  <span>{area.name}</span>
                  <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-gray-400">
                    {area.tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4 text-[#6FAF45]">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#why-reedmow" className="text-gray-400 hover:text-white transition-colors">
                  Why ReedMow
                </a>
              </li>
              <li>
                <a href="#the-standard" className="text-gray-400 hover:text-white transition-colors">
                  The ReedMow Standard
                </a>
              </li>
              <li>
                <a href="#details" className="text-gray-400 hover:text-white transition-colors">
                  The Details That Matter
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Recent Work & Projects
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-white transition-colors">
                  Client Reviews (4.9 ★)
                </a>
              </li>
              <li>
                <a href="#story" className="text-gray-400 hover:text-white transition-colors">
                  Founder’s Story
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4 text-[#6FAF45]">
              Contact & Direct Line
            </h4>
            
            <div className="space-y-2 text-gray-300">
              <p className="font-bold text-white">ReedMow Lawn Care</p>
              <p className="text-xs text-gray-400">Trav Reed — Founder & Operator</p>
              
              <div className="pt-2 space-y-2 text-xs">
                <a
                  href="tel:8324043736"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#6FAF45] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#6FAF45]" />
                  <span>(832) 404-3736</span>
                </a>
                <a
                  href="mailto:trav@reedmow.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#6FAF45] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#6FAF45]" />
                  <span>trav@reedmow.com</span>
                </a>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-[#6FAF45]" />
                  <span>Sugar Land, TX 77479</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#6FAF45] shrink-0" />
              <span>Licensed & Insured Local Operator</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 ReedMow. All Rights Reserved. Sugar Land, Texas.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Service Standards</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
