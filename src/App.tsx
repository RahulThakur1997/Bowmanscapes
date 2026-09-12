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
import { Phone, ArrowRight, Sparkles } from 'lucide-react';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);

  const handleOpenQuote = (service?: string) => {
    setModalService(service);
    setModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    // Check if hero form is in view, if so scroll to it or open modal
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
    <div className="min-h-screen flex flex-col bg-[#F6F7F2] selection:bg-[#6FAF45]/30 selection:text-[#123B2A]">
      {/* Main Header */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* 2. Trust Bar */}
        <TrustBar />

        {/* 3. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 4. The ReedMow Standard */}
        <ReedMowStandard onOpenQuote={handleOpenQuote} />

        {/* 5. Why ReedMow / Comparison Table */}
        <ComparisonTable onOpenQuote={handleOpenQuote} />

        {/* 6. The Details Matter Section */}
        <DetailsSection />

        {/* 7. Projects & Before/After Slider */}
        <Projects onOpenQuote={handleOpenQuote} />

        {/* 8. Homeowner Reviews */}
        <Reviews />

        {/* 9. Founder Story */}
        <FounderStory onOpenQuote={handleOpenQuote} />

        {/* 10. FAQ */}
        <FAQ />

        {/* 11. Final CTA */}
        <FinalCTA onOpenQuote={handleOpenQuote} />
      </main>

      {/* Footer */}
      <Footer onSelectService={handleSelectService} />

      {/* Interactive Modal Quote Form */}
      <QualificationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={modalService}
      />

      {/* Floating Mobile Sticky Quick-Action Bar */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 bg-white/95 backdrop-blur-lg p-2.5 rounded-2xl shadow-2xl border border-[#123B2A]/15 flex items-center gap-2">
        <a
          href="tel:8324043736"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#FAFBF8] border border-[#123B2A]/20 text-[#123B2A] text-xs font-bold"
        >
          <Phone className="w-3.5 h-3.5 text-[#6FAF45]" />
          <span>Call (832) 404-3736</span>
        </a>
        <button
          onClick={() => handleOpenQuote()}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#123B2A] text-white text-xs font-bold shadow-md cursor-pointer"
        >
          <span>Get Service</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#6FAF45]" />
        </button>
      </div>
    </div>
  );
}
