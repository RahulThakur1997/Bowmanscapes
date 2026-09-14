import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { ReedMowStandard } from './components/ReedMowStandard';
import { ComparisonTable } from './components/ComparisonTable';
import { DetailsSection } from './components/DetailsSection';
import { Projects } from './components/Projects';
import { Reviews } from './components/Reviews';
import { FounderStory } from './components/FounderStory';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { QualificationModal } from './components/QualificationModal';
import { Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from './data/mockData';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);

  const handleOpenQuote = (service?: string) => {
    setModalService(service);
    setModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    const heroForm = document.getElementById('qualification-form-container');
    if (heroForm) {
      const rect = heroForm.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        heroForm.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    handleOpenQuote(serviceName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F7] selection:bg-[#d7393e]/30 selection:text-[#000000]">
      <Header onOpenQuote={handleOpenQuote} />

      <main className="flex-1">
        <Hero onOpenQuote={handleOpenQuote} />
        <TrustBar />
        <Services onSelectService={handleSelectService} />
        <ReedMowStandard onOpenQuote={handleOpenQuote} />
        <ComparisonTable onOpenQuote={handleOpenQuote} />
        <DetailsSection />
        <Projects onOpenQuote={handleOpenQuote} />
        <Reviews />
        <FounderStory onOpenQuote={handleOpenQuote} />
        <FAQ />
        <FinalCTA onOpenQuote={handleOpenQuote} />
      </main>

      <Footer onSelectService={handleSelectService} />

      <QualificationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={modalService}
      />

      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 bg-white/95 backdrop-blur-lg p-2.5 rounded-2xl shadow-2xl border border-black/10 flex items-center gap-2">
        <a
          href={`tel:${COMPANY_INFO.phoneClean}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#F7F7F7] border border-black/15 text-[#111111] text-xs font-bold"
        >
          <Phone className="w-3.5 h-3.5 text-[#d7393e]" />
          <span>Call {COMPANY_INFO.phone}</span>
        </a>
        <button
          onClick={() => handleOpenQuote()}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#d7393e] text-white text-xs font-bold shadow-md cursor-pointer"
        >
          <span>Free Quote</span>
          <ArrowRight className="w-3.5 h-3.5 text-white" />
        </button>
      </div>
    </div>
  );
}
