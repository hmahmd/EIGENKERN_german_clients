/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AppRoute } from './types/index.js';
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { Industries } from './components/Industries.js';
import { ThreeWays } from './components/ThreeWays.js';
import { WaechterSection } from './components/WaechterSection.js';
import { AnswersWithSources } from './components/AnswersWithSources.js';
import { Pricing } from './components/Pricing.js';
import { TrustSecurity } from './components/TrustSecurity.js';
import { Faq } from './components/Faq.js';
import { FinalCta } from './components/FinalCta.js';
import { Footer } from './components/Footer.js';
import { ConsultationModal } from './components/ConsultationModal.js';

// Route Views
import { MobileView } from './views/MobileView.js';
import { StyleGuideView } from './views/StyleGuideView.js';
import { WaechterView } from './views/WaechterView.js';
import { OdooView } from './views/OdooView.js';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>('/');
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationIndustry, setConsultationIndustry] = useState('');
  const [consultationDeployment, setConsultationDeployment] = useState<'local' | 'server' | 'hybrid'>('local');

  // Sync route with URL path
  useEffect(() => {
    const normalizePath = (path: string): AppRoute => {
      if (path.startsWith('/mobile')) return '/mobile';
      if (path.startsWith('/style')) return '/style';
      if (path.startsWith('/waechter')) return '/waechter';
      if (path.startsWith('/odoo')) return '/odoo';
      return '/';
    };

    const handleLocationChange = () => {
      setCurrentRoute(normalizePath(window.location.pathname));
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleRouteChange = (route: AppRoute) => {
    setCurrentRoute(route);
    window.history.pushState({}, '', route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (industry = '', deployment: 'local' | 'server' | 'hybrid' = 'local') => {
    setConsultationIndustry(industry);
    setConsultationDeployment(deployment);
    setConsultationOpen(true);
  };

  const scrollToMechanism = () => {
    const el = document.querySelector('#waechter') || document.querySelector('#loesung');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWaechter = () => {
    const el = document.querySelector('#waechter');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleRouteChange('/waechter');
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7F8] text-[#122635] flex flex-col font-sans">

      {/* Conditional Route Rendering */}
      {currentRoute === '/mobile' && (
        <MobileView
          onOpenConsultation={() => handleOpenConsultation()}
          onSelectIndustry={(ind) => handleOpenConsultation(ind)}
        />
      )}

      {currentRoute === '/style' && (
        <>
          <Header
            onOpenConsultation={() => handleOpenConsultation()}
            onRouteChange={handleRouteChange}
            currentRoute={currentRoute}
          />
          <main className="flex-1">
            <StyleGuideView />
          </main>
          <Footer
            onRouteChange={handleRouteChange}
            onSelectIndustry={(ind) => handleOpenConsultation(ind)}
          />
        </>
      )}

      {currentRoute === '/waechter' && (
        <>
          <Header
            onOpenConsultation={() => handleOpenConsultation()}
            onRouteChange={handleRouteChange}
            currentRoute={currentRoute}
          />
          <main className="flex-1">
            <WaechterView
              onOpenConsultation={() => handleOpenConsultation('', 'hybrid')}
            />
          </main>
          <Footer
            onRouteChange={handleRouteChange}
            onSelectIndustry={(ind) => handleOpenConsultation(ind)}
          />
        </>
      )}

      {currentRoute === '/odoo' && (
        <>
          <Header
            onOpenConsultation={() => handleOpenConsultation()}
            onRouteChange={handleRouteChange}
            currentRoute={currentRoute}
          />
          <main className="flex-1">
            <OdooView />
          </main>
          <Footer
            onRouteChange={handleRouteChange}
            onSelectIndustry={(ind) => handleOpenConsultation(ind)}
          />
        </>
      )}

      {currentRoute === '/' && (
        <>
          {/* SECTION 01 — HEADER */}
          <Header
            onOpenConsultation={() => handleOpenConsultation()}
            onRouteChange={handleRouteChange}
            currentRoute={currentRoute}
          />

          <main className="flex-1">
            {/* SECTION 02 — HERO */}
            <Hero
              onOpenConsultation={() => handleOpenConsultation()}
              onScrollToMechanism={scrollToMechanism}
            />

            {/* SECTION 03 — INDUSTRIES */}
            <Industries
              onSelectIndustryForConsultation={(ind) => handleOpenConsultation(ind)}
            />

            {/* SECTION 04 — THREE WAYS TO YOUR AI */}
            <ThreeWays
              onSelectDeployment={(dept) => handleOpenConsultation('', dept)}
              onScrollToWaechter={scrollToWaechter}
            />

            {/* SECTION 05 — THE WÄCHTER TECHNOLOGY */}
            <WaechterSection
              onLearnMoreDeepDive={() => handleRouteChange('/waechter')}
            />

            {/* SECTION 06 — ANSWERS WITH SOURCES */}
            <AnswersWithSources />

            {/* SECTION 07 — PRICING */}
            <Pricing
              onOpenConsultation={() => handleOpenConsultation()}
            />

            {/* SECTION 08 — TRUST AND SECURITY */}
            <TrustSecurity />

            {/* SECTION 09 — FAQ */}
            <Faq />

            {/* SECTION 10 — FINAL CTA */}
            <FinalCta
              onOpenConsultation={() => handleOpenConsultation()}
            />
          </main>

          {/* SECTION 11 — FOOTER */}
          <Footer
            onRouteChange={handleRouteChange}
            onSelectIndustry={(ind) => handleOpenConsultation(ind)}
          />
        </>
      )}

      {/* Consultation Request Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultIndustry={consultationIndustry}
        defaultDeployment={consultationDeployment}
      />
    </div>
  );
}
