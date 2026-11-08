/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EigenkernLogo } from './EigenkernLogo.js';
import { Mail, Phone, MapPin, X } from 'lucide-react';
import { AppRoute } from '../types/index.js';

interface FooterProps {
  onRouteChange?: (route: AppRoute) => void;
  onSelectIndustry?: (industry: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange, onSelectIndustry }) => {
  const [legalModal, setLegalModal] = useState<'impressum' | 'datenschutz' | 'agb' | null>(null);

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#102A3A] text-white pt-12 sm:pt-16 pb-12 border-t border-[#224458] font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Four Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-14 border-b border-[#224458]">
          
          {/* Column 1 — EIGENKERN (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <EigenkernLogo variant="dark" size="md" />

            <p className="text-sm text-[#BAC8D0] leading-relaxed max-w-sm">
              Lokale KI für Unternehmen, die ihre Daten selbst kontrollieren möchten.
            </p>

            {/* Contact Placeholders */}
            <div className="space-y-2.5 pt-2 text-xs font-mono text-[#BAC8D0]">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#087F83] shrink-0" />
                <a href="mailto:kontakt@eigenkern.de" className="hover:text-white transition-colors">
                  kontakt@eigenkern.de
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#087F83] shrink-0" />
                <a href="tel:+49302847290" className="hover:text-white transition-colors">
                  +49 30 284729-0
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#087F83] shrink-0" />
                <span>Berlin, Deutschland</span>
              </div>
            </div>
          </div>

          {/* Column 2 — LÖSUNG (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-semibold mb-4">
              LÖSUNG
            </h4>
            <ul className="space-y-2.5 text-xs text-[#BAC8D0]">
              <li>
                <button 
                  onClick={() => handleLinkClick('#loesung')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Lokal im Büro
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('#loesung')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Eigener Server
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onRouteChange ? onRouteChange('/waechter') : handleLinkClick('#waechter')} 
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Wächter</span>
                  <span className="text-[10px] text-[#087F83] font-mono">Hybrid</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('#quellen')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Quellenangabe
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 — BRANCHEN (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-semibold mb-4">
              BRANCHEN
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-[#BAC8D0]">
              <li>
                <button 
                  onClick={() => {
                    handleLinkClick('#branchen');
                    if (onSelectIndustry) onSelectIndustry('Steuerberater');
                  }} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Steuerberater
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleLinkClick('#branchen');
                    if (onSelectIndustry) onSelectIndustry('Arztpraxen');
                  }} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Arztpraxen
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleLinkClick('#branchen');
                    if (onSelectIndustry) onSelectIndustry('Handwerk');
                  }} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Handwerk
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleLinkClick('#branchen');
                    if (onSelectIndustry) onSelectIndustry('Rechtsanwälte');
                  }} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Rechtsanwälte
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleLinkClick('#branchen');
                    if (onSelectIndustry) onSelectIndustry('Schulen');
                  }} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Schulen
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleLinkClick('#branchen');
                    if (onSelectIndustry) onSelectIndustry('Kommunen');
                  }} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Kommunen
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 — RECHTLICHES (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-semibold mb-4">
              RECHTLICHES
            </h4>
            <ul className="space-y-2.5 text-xs text-[#BAC8D0]">
              <li>
                <button 
                  onClick={() => setLegalModal('impressum')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Impressum
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLegalModal('datenschutz')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Datenschutz
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLegalModal('agb')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  AGB
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Subtle Copyright Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7d95a3]">
          <div>
            © 2026 EIGENKERN Technologies GmbH · www.eigenkern.de · Alle Rechte vorbehalten.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>100% DSGVO-konform</span>
            <span>·</span>
            <span>Serverstandort Deutschland</span>
            <span>·</span>
            <span>§ 203 StGB konform</span>
          </div>
        </div>

      </div>

      {/* Legal Notice Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#102A3A]/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white text-[#122635] border border-[#D7E0E4] w-full max-w-xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D7E0E4]">
              <h3 className="font-sans font-semibold text-xl capitalize">
                {legalModal === 'impressum' ? 'Impressum (§ 5 DDG)' : legalModal === 'datenschutz' ? 'Datenschutzerklärung' : 'Allgemeine Geschäftsbedingungen (AGB)'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="text-[#586B76] hover:text-[#122635] p-1 cursor-pointer"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs font-sans text-[#586B76] leading-relaxed">
              {legalModal === 'impressum' && (
                <>
                  <p className="font-semibold text-[#122635]">EIGENKERN Technologies GmbH</p>
                  <p>Musterstraße 42<br />10115 Berlin, Deutschland</p>
                  <p>Vertreten durch die Geschäftsführung: Dipl.-Ing. H. Kern</p>
                  <p>Registergericht: Amtsgericht Charlottenburg (Berlin)<br />Registernummer: HRB 249102 B</p>
                  <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE382910481</p>
                  <p>Kontakt: kontakt@eigenkern.de · Tel: +49 30 284729-0</p>
                </>
              )}

              {legalModal === 'datenschutz' && (
                <>
                  <p className="font-semibold text-[#122635]">Datenschutz bei EIGENKERN</p>
                  <p>Wir nehmen den Schutz Ihrer persönlichen und berufsbezogenen Daten sehr ernst. Bei der Nutzung unserer lokalen KI-Systeme verbleiben alle Dokumente, Indizes und Anfragen auf Ihrer eigenen lokalen Hardware.</p>
                  <p>Im optionalen Wächter-Modus werden Daten vor jeder Übermittlung an Rechenzentren lokal pseudonymisiert. Reale Personen- oder Mandantennamen verlassen zu keinem Zeitpunkt Ihre lokale IT-Infrastruktur.</p>
                  <p>Hosting der Unternehmenswebsite erfolgt ausschließlich auf nach ISO/IEC 27001 zertifizierten Servern in Deutschland.</p>
                </>
              )}

              {legalModal === 'agb' && (
                <>
                  <p className="font-semibold text-[#122635]">AGB für Geschäftskunden (B2B)</p>
                  <p>Geltungsbereich für Lieferungen und Leistungen der EIGENKERN Technologies GmbH an Unternehmer, juristische Personen des öffentlichen Rechts oder öffentlich-rechtliche Sondervermögen.</p>
                  <p>Die Bereitstellung der lokalen Hardware erfolgt schlüsselfertig. Keine Abrechnung nach Token oder Fragekontingenten.</p>
                </>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-[#D7E0E4] text-right">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 bg-[#102A3A] text-white text-xs font-mono hover:bg-[#16384d] transition-colors cursor-pointer"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
