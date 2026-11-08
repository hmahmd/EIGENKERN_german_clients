/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { EigenkernLogo } from './EigenkernLogo.js';
import { 
  ChevronDown, ArrowRight, Menu, X, 
  HardDrive, Server, ShieldCheck, FileCheck, 
  Briefcase, Stethoscope, Hammer, Scale, GraduationCap, Building2,
  Lock
} from 'lucide-react';
import { AppRoute } from '../types/index.js';

interface HeaderProps {
  onOpenConsultation: (industry?: string, deployment?: 'local' | 'server' | 'hybrid') => void;
  onRouteChange?: (route: AppRoute) => void;
  currentRoute?: AppRoute;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenConsultation,
  onRouteChange,
  currentRoute = '/' 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'loesungen' | 'branchen' | 'technologie' | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<'loesungen' | 'branchen' | 'technologie' | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: 'loesungen' | 'branchen' | 'technologie') => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (currentRoute !== '/') {
      if (onRouteChange) {
        onRouteChange('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
      return;
    }

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDeepDiveRoute = (route: AppRoute) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (onRouteChange) {
      onRouteChange(route);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F4F7F8]/95 backdrop-blur-md border-b border-[#D7E0E4]/80 transition-all duration-200">
      <div 
        ref={navRef} 
        className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4 lg:gap-8"
      >
        
        {/* LEFT: EIGENKERN Brand Logo */}
        <div 
          onClick={() => onRouteChange ? onRouteChange('/') : null}
          className="cursor-pointer shrink-0 transition-opacity hover:opacity-90 flex items-center"
        >
          <EigenkernLogo size="md" />
        </div>

        {/* CENTER: Desktop Clean Dropdown Navigation (Modeled directly after Inspiration Image 2) */}
        <nav 
          aria-label="Hauptnavigation" 
          className="hidden lg:flex items-center gap-7 xl:gap-9 text-[14px] font-sans font-medium text-[#122635]"
        >
          {/* Item 1: Lösungen ▾ */}
          <div 
            className="relative py-4"
            onMouseEnter={() => handleMouseEnter('loesungen')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === 'loesungen' ? null : 'loesungen')}
              className={`flex items-center gap-1.5 py-1.5 transition-colors cursor-pointer group select-none ${
                activeDropdown === 'loesungen' ? 'text-[#087F83]' : 'hover:text-[#087F83]'
              }`}
            >
              <span>Lösungen</span>
              <ChevronDown 
                className={`w-3.5 h-3.5 text-[#586B76] group-hover:text-[#087F83] transition-transform duration-200 ${
                  activeDropdown === 'loesungen' ? 'rotate-180 text-[#087F83]' : ''
                }`} 
              />
            </button>

            {/* Dropdown Menu: Lösungen */}
            {activeDropdown === 'loesungen' && (
              <div 
                className="absolute top-full left-0 pt-1 w-84 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
              >
                <div className="bg-white border border-[#D7E0E4] shadow-xl p-3 space-y-1">
                  <button
                    type="button"
                    onClick={() => handleNavClick('#loesung')}
                    className="w-full p-2.5 text-left flex items-start gap-3 hover:bg-[#F4F7F8] border border-transparent hover:border-[#D7E0E4] transition-colors cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-none bg-[#E9F0F2] text-[#087F83] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#087F83] group-hover:text-white transition-colors">
                      <HardDrive className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#122635] flex items-center justify-between">
                        <span>01. Lokale KI im Büro</span>
                        <span className="text-[10px] font-mono text-[#087F83]">ON-PREM</span>
                      </div>
                      <div className="text-[11px] text-[#586B76] mt-0.5 leading-snug">
                        Physischer Server in Ihren eigenen Räumlichkeiten. 100% autark.
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNavClick('#loesung')}
                    className="w-full p-2.5 text-left flex items-start gap-3 hover:bg-[#F4F7F8] border border-transparent hover:border-[#D7E0E4] transition-colors cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-none bg-[#E9F0F2] text-[#087F83] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#087F83] group-hover:text-white transition-colors">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#122635] flex items-center justify-between">
                        <span>02. Eigener Server</span>
                        <span className="text-[10px] font-mono text-[#586B76]">RZ DEUTSCHLAND</span>
                      </div>
                      <div className="text-[11px] text-[#586B76] mt-0.5 leading-snug">
                        Dediziertes Rechenzentrum in Frankfurt/Berlin nach ISO 27001.
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNavClick('#waechter')}
                    className="w-full p-2.5 text-left flex items-start gap-3 hover:bg-[#E6F3F4] border border-[#087F83]/30 transition-colors cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-none bg-[#087F83] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#087F83] flex items-center justify-between">
                        <span>03. Wächter Hybrid-Modus</span>
                        <span className="text-[10px] font-mono bg-white px-1.5 py-0.2 border border-[#087F83]/30">INNOVATIV</span>
                      </div>
                      <div className="text-[11px] text-[#586B76] mt-0.5 leading-snug">
                        Pseudonymisierte Schattenkopie. Reale Namen verlassen Ihr Haus nie.
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Item 2: Branchen ▾ */}
          <div 
            className="relative py-4"
            onMouseEnter={() => handleMouseEnter('branchen')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === 'branchen' ? null : 'branchen')}
              className={`flex items-center gap-1.5 py-1.5 transition-colors cursor-pointer group select-none ${
                activeDropdown === 'branchen' ? 'text-[#087F83]' : 'hover:text-[#087F83]'
              }`}
            >
              <span>Branchen</span>
              <ChevronDown 
                className={`w-3.5 h-3.5 text-[#586B76] group-hover:text-[#087F83] transition-transform duration-200 ${
                  activeDropdown === 'branchen' ? 'rotate-180 text-[#087F83]' : ''
                }`} 
              />
            </button>

            {/* Dropdown Menu: Branchen */}
            {activeDropdown === 'branchen' && (
              <div 
                className="absolute top-full left-0 pt-1 w-[380px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
              >
                <div className="bg-white border border-[#D7E0E4] shadow-xl p-3 grid grid-cols-2 gap-1.5">
                  {[
                    { name: 'Steuerberater', icon: <Briefcase className="w-3.5 h-3.5" />, desc: 'Mandantenakten & Fristen' },
                    { name: 'Arztpraxen', icon: <Stethoscope className="w-3.5 h-3.5" />, desc: 'Patientendaten & Befunde' },
                    { name: 'Kanzleien', icon: <Scale className="w-3.5 h-3.5" />, desc: 'Schriftsätze & Urteile' },
                    { name: 'Handwerk', icon: <Hammer className="w-3.5 h-3.5" />, desc: 'Kalkulation & DIN-Normen' },
                    { name: 'Schulen', icon: <GraduationCap className="w-3.5 h-3.5" />, desc: 'Lehrpläne & Verordnungen' },
                    { name: 'Kommunen', icon: <Building2 className="w-3.5 h-3.5" />, desc: 'Satzungen & Bürgeranfragen' },
                  ].map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => {
                        handleNavClick('#branchen');
                        onOpenConsultation(item.name);
                      }}
                      className="p-2 text-left hover:bg-[#F4F7F8] border border-transparent hover:border-[#D7E0E4] transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-2 font-semibold text-xs text-[#122635] group-hover:text-[#087F83]">
                        <span className="text-[#087F83]">{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                      <div className="text-[10px] text-[#586B76] mt-0.5 truncate font-sans">
                        {item.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Item 3: Technologie ▾ */}
          <div 
            className="relative py-4"
            onMouseEnter={() => handleMouseEnter('technologie')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === 'technologie' ? null : 'technologie')}
              className={`flex items-center gap-1.5 py-1.5 transition-colors cursor-pointer group select-none ${
                activeDropdown === 'technologie' ? 'text-[#087F83]' : 'hover:text-[#087F83]'
              }`}
            >
              <span>Technologie</span>
              <ChevronDown 
                className={`w-3.5 h-3.5 text-[#586B76] group-hover:text-[#087F83] transition-transform duration-200 ${
                  activeDropdown === 'technologie' ? 'rotate-180 text-[#087F83]' : ''
                }`} 
              />
            </button>

            {/* Dropdown Menu: Technologie */}
            {activeDropdown === 'technologie' && (
              <div 
                className="absolute top-full left-0 pt-1 w-84 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
              >
                <div className="bg-white border border-[#D7E0E4] shadow-xl p-3 space-y-1">
                  <button
                    type="button"
                    onClick={() => handleDeepDiveRoute('/waechter')}
                    className="w-full p-2.5 text-left flex items-start gap-3 hover:bg-[#E6F3F4] border border-[#087F83]/30 transition-colors cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-none bg-[#087F83] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#087F83] flex items-center justify-between">
                        <span>Wächter-Architektur</span>
                        <span className="text-[10px] font-mono text-[#087F83]">LIVE-DEMO</span>
                      </div>
                      <div className="text-[11px] text-[#586B76] mt-0.5 leading-snug">
                        Interaktiver Teststand für Pseudonymisierung & Schattenkopie.
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNavClick('#quellen')}
                    className="w-full p-2.5 text-left flex items-start gap-3 hover:bg-[#F4F7F8] border border-transparent hover:border-[#D7E0E4] transition-colors cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-none bg-[#E9F0F2] text-[#087F83] flex items-center justify-center shrink-0 mt-0.5">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#122635]">
                        Antworten mit Quellenangabe
                      </div>
                      <div className="text-[11px] text-[#586B76] mt-0.5 leading-snug">
                        Revisionssichere Belegführung mit 1-Klick-Fundstellenprüfung.
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeepDiveRoute('/style')}
                    className="w-full p-2.5 text-left flex items-start gap-3 hover:bg-[#F4F7F8] border border-transparent hover:border-[#D7E0E4] transition-colors cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-none bg-[#E9F0F2] text-[#087F83] flex items-center justify-center shrink-0 mt-0.5">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[#122635]">
                        DSGVO Art. 28 & § 203 StGB
                      </div>
                      <div className="text-[11px] text-[#586B76] mt-0.5 leading-snug">
                        Konzipiert für Berufsgeheimnisträger und strengste Auditierbarkeit.
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Item 4: Preise */}
          <button
            type="button"
            onClick={() => handleNavClick('#kosten')}
            className="py-1.5 hover:text-[#087F83] transition-colors cursor-pointer select-none"
          >
            Preise
          </button>

          {/* Item 5: FAQ */}
          <button
            type="button"
            onClick={() => handleNavClick('#faq')}
            className="py-1.5 hover:text-[#087F83] transition-colors cursor-pointer select-none"
          >
            FAQ
          </button>
        </nav>

        {/* RIGHT: High-End Pill CTA "Jetzt beraten lassen →" (Directly inspired by Image 2, compact on mobile) */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenConsultation()}
            className="px-2.5 sm:px-5 lg:px-6 py-1.5 sm:py-2.5 bg-[#102A3A] hover:bg-[#087F83] text-white text-[11px] sm:text-[13px] font-sans font-medium rounded-full flex items-center gap-1 sm:gap-2 transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer group whitespace-nowrap h-7.5 sm:h-10 shrink-0"
          >
            <span className="hidden md:inline">Jetzt beraten lassen</span>
            <span className="hidden min-[380px]:inline md:hidden">Beraten lassen</span>
            <span className="min-[380px]:hidden">Beraten</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 shrink-0" />
          </button>

          {/* Mobile & Tablet Hamburger Toggle - Proportionate on mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 text-[#122635] hover:bg-[#E9F0F2] transition-colors cursor-pointer flex items-center justify-center border border-[#D7E0E4] rounded-lg shrink-0"
            aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {mobileMenuOpen ? <X className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#122635]" /> : <Menu className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#122635]" />}
          </button>
        </div>

      </div>

      {/* MOBILE / TABLET EXPANDED DRAWER */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 top-[72px] sm:top-[80px] bg-[#102A3A]/60 backdrop-blur-xs z-30 lg:hidden animate-in fade-in duration-150"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-40 lg:hidden border-b border-[#D7E0E4] bg-white px-5 py-6 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col gap-2 font-sans text-sm text-[#122635]">
              
              {/* Accordion 1: Lösungen */}
              <div className="border-b border-[#E9F0F2] pb-2">
                <button
                  type="button"
                  onClick={() => setMobileAccordion(mobileAccordion === 'loesungen' ? null : 'loesungen')}
                  className="w-full py-2.5 flex items-center justify-between text-base font-semibold text-[#122635]"
                >
                  <span>Lösungen</span>
                  <ChevronDown className={`w-4 h-4 text-[#586B76] transition-transform ${mobileAccordion === 'loesungen' ? 'rotate-180 text-[#087F83]' : ''}`} />
                </button>
                {mobileAccordion === 'loesungen' && (
                  <div className="pl-3 py-2 space-y-2 text-xs text-[#586B76] bg-[#F4F7F8] p-3 border border-[#E9F0F2]">
                    <button type="button" onClick={() => handleNavClick('#loesung')} className="block text-left py-1 hover:text-[#087F83]">
                      • 01. Lokale KI (Im Büro / On-Premise)
                    </button>
                    <button type="button" onClick={() => handleNavClick('#loesung')} className="block text-left py-1 hover:text-[#087F83]">
                      • 02. Eigener Server (Rechenzentrum DE)
                    </button>
                    <button type="button" onClick={() => handleNavClick('#waechter')} className="block text-left py-1 font-semibold text-[#087F83]">
                      • 03. Wächter Hybrid-Modus (Schattenkopie)
                    </button>
                  </div>
                )}
              </div>

              {/* Accordion 2: Branchen */}
              <div className="border-b border-[#E9F0F2] pb-2">
                <button
                  type="button"
                  onClick={() => setMobileAccordion(mobileAccordion === 'branchen' ? null : 'branchen')}
                  className="w-full py-2.5 flex items-center justify-between text-base font-semibold text-[#122635]"
                >
                  <span>Branchen</span>
                  <ChevronDown className={`w-4 h-4 text-[#586B76] transition-transform ${mobileAccordion === 'branchen' ? 'rotate-180 text-[#087F83]' : ''}`} />
                </button>
                {mobileAccordion === 'branchen' && (
                  <div className="pl-3 py-2 grid grid-cols-2 gap-2 text-xs text-[#586B76] bg-[#F4F7F8] p-3 border border-[#E9F0F2]">
                    {['Steuerberater', 'Arztpraxen', 'Kanzleien', 'Handwerk', 'Schulen', 'Kommunen'].map((b) => (
                      <button 
                        key={b} 
                        type="button"
                        onClick={() => {
                          handleNavClick('#branchen');
                          onOpenConsultation(b);
                        }} 
                        className="text-left py-1 hover:text-[#087F83]"
                      >
                        • {b}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Accordion 3: Technologie */}
              <div className="border-b border-[#E9F0F2] pb-2">
                <button
                  type="button"
                  onClick={() => setMobileAccordion(mobileAccordion === 'technologie' ? null : 'technologie')}
                  className="w-full py-2.5 flex items-center justify-between text-base font-semibold text-[#122635]"
                >
                  <span>Technologie</span>
                  <ChevronDown className={`w-4 h-4 text-[#586B76] transition-transform ${mobileAccordion === 'technologie' ? 'rotate-180 text-[#087F83]' : ''}`} />
                </button>
                {mobileAccordion === 'technologie' && (
                  <div className="pl-3 py-2 space-y-2 text-xs text-[#586B76] bg-[#F4F7F8] p-3 border border-[#E9F0F2]">
                    <button type="button" onClick={() => handleDeepDiveRoute('/waechter')} className="block text-left py-1 text-[#087F83] font-semibold">
                      • Wächter-Architektur & Teststand
                    </button>
                    <button type="button" onClick={() => handleNavClick('#quellen')} className="block text-left py-1 hover:text-[#087F83]">
                      • Antworten mit Quellenangabe
                    </button>
                    <button type="button" onClick={() => handleDeepDiveRoute('/style')} className="block text-left py-1 hover:text-[#087F83]">
                      • DSGVO & Corporate Design System
                    </button>
                  </div>
                )}
              </div>

              {/* Item 4 & 5 */}
              <button
                type="button"
                onClick={() => handleNavClick('#kosten')}
                className="text-left py-2.5 text-base font-medium text-[#122635] hover:text-[#087F83] border-b border-[#E9F0F2]"
              >
                Preise
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#faq')}
                className="text-left py-2.5 text-base font-medium text-[#122635] hover:text-[#087F83] border-b border-[#E9F0F2]"
              >
                FAQ
              </button>

              {/* Mobile CTA */}
              <div className="pt-4 space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3.5 bg-[#102A3A] hover:bg-[#087F83] text-white rounded-full text-sm font-medium font-sans flex items-center justify-center gap-2 cursor-pointer shadow-md transition-colors"
                >
                  <span>Jetzt beraten lassen</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-center font-mono text-[11px] text-[#586B76] pt-1">
                  kontakt@eigenkern.de · +49 30 284729-0
                </div>
              </div>

            </nav>
          </div>
        </>
      )}
    </header>
  );
};

