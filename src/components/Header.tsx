import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X, Star } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeaderProps {
  onOpenQuote: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Bowmanscapes', href: '#why-bowmanscapes' },
    { name: 'Our Work', href: '#projects' },
    { name: 'The Details', href: '#details' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About', href: '#story' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3.5 border-b border-gray-200'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            id="header-logo"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#d7393e] rounded-lg p-1"
          >
            {/* Architectural Paving & Landscape Geometric Mark */}
            <div className="w-10 h-10 rounded-xl bg-[#111111] flex items-center justify-center text-white shadow-md group-hover:bg-black transition-colors border border-white/10">
              <svg
                viewBox="0 0 28 28"
                className="w-6 h-6"
                fill="none"
              >
                {/* Clean geometric paving stone layers with red signature terrace */}
                <rect x="3" y="4" width="13" height="9" rx="1.5" stroke="#FFFFFF" strokeWidth="2" />
                <rect x="18" y="4" width="7" height="9" rx="1.5" stroke="#FFFFFF" strokeWidth="2" />
                <rect x="3" y="15" width="8" height="9" rx="1.5" stroke="#FFFFFF" strokeWidth="2" />
                <rect x="13" y="15" width="12" height="9" rx="1.5" fill="#d7393e" stroke="#d7393e" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-black tracking-tight leading-none font-display ${
                isScrolled ? 'text-[#111111]' : 'text-white'
              }`}>
                Bowman<span className="text-[#d7393e]">scapes</span>
              </span>
              <span className={`text-[10px] tracking-wider uppercase font-bold mt-0.5 ${
                isScrolled ? 'text-[#555555]' : 'text-white/80'
              }`}>
                Landscaping & General Building • Malton
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[15px] font-medium transition-colors relative py-1 hover:font-semibold ${
                  isScrolled
                    ? 'text-[#111111]/80 hover:text-[#d7393e]'
                    : 'text-white/90 hover:text-[#d7393e] drop-shadow-xs'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              id="header-call-btn"
              className={`flex items-center gap-2 text-sm font-semibold transition-colors py-2 px-3 rounded-lg ${
                isScrolled
                  ? 'text-[#111111] hover:text-[#d7393e] hover:bg-gray-100'
                  : 'text-white hover:text-[#d7393e] hover:bg-white/10'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                isScrolled ? 'bg-[#d7393e]/10 text-[#d7393e]' : 'bg-white/20 text-white'
              }`}>
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className={`block text-[11px] font-medium leading-none ${
                  isScrolled ? 'text-[#555555]' : 'text-white/70'
                }`}>Call Matt</span>
                <span className={`text-sm font-bold ${
                  isScrolled ? 'text-[#111111]' : 'text-white'
                }`}>{COMPANY_INFO.phone}</span>
              </div>
            </a>

            <button
              id="header-cta-btn"
              onClick={() => onOpenQuote()}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#d7393e] hover:bg-[#bf2f34] text-white text-sm font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>Free Quote</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              aria-label="Call Bowmanscapes"
              className="p-2.5 rounded-xl bg-[#d7393e]/10 text-[#d7393e] hover:bg-[#d7393e]/20 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white border border-gray-200 text-[#111111] shadow-sm hover:bg-gray-50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d7393e] bg-[#d7393e]/10 px-3 py-1.5 rounded-full w-fit">
            <Star className="w-3.5 h-3.5 fill-[#d7393e]" />
            <span>5.0 Google Rating • Malton & Surrounding Areas</span>
          </div>

          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold text-[#111111] hover:text-[#d7393e] py-1 border-b border-gray-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#d7393e] text-white font-semibold text-base shadow-md cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#F7F7F7] text-[#111111] font-semibold text-sm border border-gray-200"
            >
              <Phone className="w-4 h-4 text-[#d7393e]" />
              <span>Call Matt: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
