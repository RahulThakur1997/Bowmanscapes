import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_INFO, SERVICES, SERVICE_AREAS } from '../data/mockData';

interface FooterProps {
  onSelectService: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-28 md:pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-14 border-b border-white/10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white border border-[#d7393e]/40 shadow-sm">
                <svg viewBox="0 0 28 28" className="w-6 h-6" fill="none">
                  <rect x="3" y="4" width="13" height="9" rx="1.5" stroke="#FFFFFF" strokeWidth="2" />
                  <rect x="18" y="4" width="7" height="9" rx="1.5" stroke="#FFFFFF" strokeWidth="2" />
                  <rect x="3" y="15" width="8" height="9" rx="1.5" stroke="#FFFFFF" strokeWidth="2" />
                  <rect x="13" y="15" width="12" height="9" rx="1.5" fill="#d7393e" stroke="#d7393e" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="text-3xl font-extrabold tracking-tight text-white font-display">
                Bowman<span className="text-[#d7393e]">scapes</span>
              </span>
            </div>
            <p className="text-base text-gray-400 font-medium max-w-md font-display">
              Landscaping & General Building
            </p>
            <p className="text-sm text-gray-400">
              Malton & Surrounding Areas
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#d7393e]" />
              <span>{COMPANY_INFO.phone}</span>
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-white/10 text-sm">
          <div>
            <h4 className="font-bold uppercase tracking-wider text-xs mb-4 text-[#d7393e]">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s.name)}
                    className="text-gray-400 hover:text-[#d7393e] transition-colors cursor-pointer text-left"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-xs mb-4 text-[#d7393e]">
              Service Areas
            </h4>
            <ul className="space-y-2.5 text-gray-400">
              {SERVICE_AREAS.map((area) => (
                <li key={area.name} className="flex items-center justify-between gap-2">
                  <span>{area.name}</span>
                  <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-gray-400">
                    {area.tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-xs mb-4 text-[#d7393e]">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#why-bowmanscapes" className="text-gray-400 hover:text-[#d7393e] transition-colors">
                  Why Bowmanscapes
                </a>
              </li>
              <li>
                <a href="#the-standard" className="text-gray-400 hover:text-[#d7393e] transition-colors">
                  The Bowmanscapes Approach
                </a>
              </li>
              <li>
                <a href="#details" className="text-gray-400 hover:text-[#d7393e] transition-colors">
                  The Details
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-[#d7393e] transition-colors">
                  Recent Work
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-[#d7393e] transition-colors">
                  Google Reviews (5.0)
                </a>
              </li>
              <li>
                <a href="#story" className="text-gray-400 hover:text-[#d7393e] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-[#d7393e] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-wider text-xs mb-4 text-[#d7393e]">
              Contact
            </h4>
            <div className="space-y-2 text-gray-300">
              <p className="font-bold text-white">Bowmanscapes</p>
              <p className="text-xs text-gray-400">Landscaping & General Building</p>
              <div className="pt-2 space-y-2 text-xs">
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-[#d7393e] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d7393e]" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-[#d7393e] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#d7393e]" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-[#d7393e]" />
                  <span>Malton & Surrounding Areas</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-3.5 h-3.5 text-[#d7393e]" />
                  <span>Mon–Sat 8:00am–4:00pm</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-gray-300 hover:text-[#d7393e] transition-colors"
              >
                Facebook
              </a>
              <span className="text-white/20">•</span>
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-gray-300 hover:text-[#d7393e] transition-colors"
              >
                Instagram
              </a>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#d7393e] shrink-0" />
              <span>5.0 Google Rating • 50 Google Reviews</span>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Bowmanscapes. All Rights Reserved. Malton & Surrounding Areas.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#d7393e] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#d7393e] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
