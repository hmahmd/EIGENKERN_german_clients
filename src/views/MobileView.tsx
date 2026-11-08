/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EigenkernLogo } from '../components/EigenkernLogo.js';
import { 
  Menu, X, ArrowRight, ShieldCheck, MapPin, HardDrive, 
  Server, Smartphone, Check, ChevronRight 
} from 'lucide-react';

interface MobileViewProps {
  onOpenConsultation: () => void;
  onSelectIndustry: (ind: string) => void;
}

export const MobileView: React.FC<MobileViewProps> = ({ 
  onOpenConsultation,
  onSelectIndustry 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'device' | 'fluid'>('device');

  const industries = [
    { name: 'Steuerberater', desc: 'Mandantenwissen und Fristen in Sekunden sicher durchsuchen.' },
    { name: 'Arztpraxen', desc: 'Informationen in medizinischen Dokumenten datenschutzkonform finden.' },
    { name: 'Handwerk', desc: 'Angebote, Normen und technische Unterlagen sofort zur Hand.' },
    { name: 'Rechtsanwälte', desc: 'Schriftsätze und Akten verlässlich auswerten.' },
    { name: 'Schulen', desc: 'Verordnungen und interne Regeln schnell beantworten.' },
    { name: 'Kommunen', desc: 'Satzungen und Vorgaben für die Verwaltung recherchieren.' },
  ];

  const content = (
    <div className="w-full bg-[#F4F7F8] text-[#122635] font-sans antialiased selection:bg-[#087F83] selection:text-white pb-16">
      
      {/* Mobile Header (Sticky) */}
      <header className="sticky top-0 z-40 bg-[#F4F7F8]/95 backdrop-blur-md border-b border-[#D7E0E4] px-4 py-3.5 flex items-center justify-between">
        <EigenkernLogo size="sm" />
        
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenConsultation}
            className="px-3 py-1.5 bg-[#087F83] text-white text-xs font-medium font-sans cursor-pointer whitespace-nowrap"
          >
            Beratung
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#122635] hover:bg-[#E9F0F2] transition-colors"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="bg-white border-b border-[#D7E0E4] px-5 py-4 space-y-3 font-sans text-sm animate-in slide-in-from-top-1">
          <a 
            href="#mobile-loesung" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#586B76] hover:text-[#122635] border-b border-[#E9F0F2]"
          >
            Lösung & Architekturen
          </a>
          <a 
            href="#mobile-branchen" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#586B76] hover:text-[#122635] border-b border-[#E9F0F2]"
          >
            Branchen
          </a>
          <a 
            href="#mobile-waechter" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#586B76] hover:text-[#122635] border-b border-[#E9F0F2]"
          >
            Wächter-Technologie
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 bg-[#102A3A] text-white text-xs font-medium text-center"
            >
              Beratung anfragen
            </button>
          </div>
        </div>
      )}

      {/* Complete Hero Composition (Thoughtfully mobile-optimized) */}
      <section className="px-5 pt-8 pb-10 border-b border-[#D7E0E4] relative overflow-hidden">
        {/* Technical eyebrow */}
        <div className="flex items-center gap-1.5 mb-3">
          <span className="w-1.5 h-1.5 bg-[#087F83]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#586B76] font-medium">
            LOKALE KI. VOLLE DATENKONTROLLE.
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl font-sans font-semibold text-[#122635] tracking-tight leading-[1.15] mb-4">
          Ihre eigene KI.<br />
          <span className="text-[#102A3A]">In Ihrem Haus.</span>
        </h1>

        {/* Supporting text */}
        <p className="text-sm text-[#586B76] leading-relaxed mb-6">
          Eine lokale KI für Ihre Kanzlei, Praxis oder Verwaltung. Ihre Daten bleiben bei Ihnen. Keine Kosten pro Frage, keine Kosten pro Nutzer.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mb-8">
          <button
            onClick={onOpenConsultation}
            className="w-full py-3 bg-[#087F83] text-white text-xs font-medium font-sans flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Beratung anfragen</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <a
            href="#mobile-loesung"
            className="w-full py-3 bg-white border border-[#D7E0E4] text-[#122635] text-xs font-medium font-sans text-center"
          >
            So funktioniert's
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-2 pt-5 border-t border-[#D7E0E4] text-center font-mono">
          <div className="p-2 bg-white border border-[#D7E0E4]">
            <div className="font-semibold text-sm text-[#122635]">0 €</div>
            <div className="text-[10px] text-[#586B76] mt-0.5">pro Frage</div>
          </div>
          <div className="p-2 bg-white border border-[#D7E0E4]">
            <div className="font-semibold text-sm text-[#122635]">0 €</div>
            <div className="text-[10px] text-[#586B76] mt-0.5">pro Nutzer</div>
          </div>
          <div className="p-2 bg-white border border-[#D7E0E4]">
            <div className="font-semibold text-sm text-[#087F83]">100%</div>
            <div className="text-[10px] text-[#586B76] mt-0.5">Kontrolle</div>
          </div>
        </div>

        {/* Prominent Physical Product Visual (Mobile-Stacked) */}
        <div className="mt-8 bg-white border border-[#D7E0E4] p-3 shadow-sm">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#586B76] pb-2 mb-2 border-b border-[#E9F0F2]">
            <span>EIGENKERN SERVER APPLIANCE</span>
            <span className="text-[#087F83]">AUTARK AKTIV</span>
          </div>

          <div className="relative aspect-4/3 bg-[#0E1B24] overflow-hidden">
            <img
              src="/assets/eigenkern-server-appliance.png"
              alt="EIGENKERN Server"
              className="w-full h-full object-cover object-center"
            />
            {/* Location callout */}
            <div className="absolute top-2.5 left-2.5 bg-[#102A3A]/90 text-white px-2.5 py-1.5 text-[10px] font-mono flex items-center gap-1.5 border border-[#087F83]/50">
              <MapPin className="w-3 h-3 text-[#087F83]" />
              <span>Standort: Ihr Büro, Deutschland</span>
            </div>
          </div>

          <div className="mt-2 text-[10px] font-mono text-[#788B95] text-center">
            Gehäuse: Eloxiertes Aluminium · Flüsterleise (&lt; 19 dB)
          </div>
        </div>
      </section>

      {/* Industry Introduction & Six Industry Cards */}
      <section id="mobile-branchen" className="px-5 py-10 bg-white border-b border-[#D7E0E4]">
        <div className="mb-6">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-1.5 h-1.5 bg-[#087F83]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#586B76]">
              FÜR VIELE BRANCHEN
            </span>
          </div>
          <h2 className="text-2xl font-sans font-semibold text-[#122635] tracking-tight">
            Eine Lösung. Viele Branchen.
          </h2>
          <p className="text-xs text-[#586B76] mt-2 leading-relaxed">
            Dieselbe geprüfte Technik, angepasst an die Dokumente und Abläufe Ihrer Branche.
          </p>
        </div>

        {/* 6 Industry Cards */}
        <div className="space-y-3">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              onClick={() => onSelectIndustry(ind.name)}
              className="p-4 bg-[#F4F7F8] border border-[#D7E0E4] active:border-[#087F83] transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="font-sans font-semibold text-base text-[#122635]">
                  {ind.name}
                </h3>
                <span className="text-[#087F83] text-xs font-mono font-medium">
                  Mehr erfahren →
                </span>
              </div>
              <p className="text-xs text-[#586B76] leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Three-Way Solution Introduction */}
      <section id="mobile-loesung" className="px-5 py-10 bg-[#F4F7F8] border-b border-[#D7E0E4]">
        <div className="mb-6">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-1.5 h-1.5 bg-[#087F83]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#586B76]">
              BEREITSTELLUNG
            </span>
          </div>
          <h2 className="text-2xl font-sans font-semibold text-[#122635] tracking-tight">
            Drei Wege zu Ihrer KI
          </h2>
          <p className="text-xs text-[#586B76] mt-2 leading-relaxed">
            Sie entscheiden, wo Ihre KI arbeitet. Welche Architektur zu Ihnen passt, hängt von Ihren Anforderungen ab.
          </p>
        </div>

        {/* 3 Solutions Stacked */}
        <div className="space-y-4">
          {/* Solution A */}
          <div className="p-5 bg-white border border-[#D7E0E4]">
            <div className="flex justify-between items-center text-[10px] font-mono text-[#586B76] mb-2">
              <span>OPTION A</span>
              <span className="bg-[#E9F0F2] text-[#122635] px-2 py-0.5">ON-PREMISE</span>
            </div>
            <h3 className="text-lg font-sans font-semibold text-[#122635] mb-1">
              Lokal im Büro
            </h3>
            <p className="text-xs text-[#586B76] mb-3">
              Ihre KI läuft direkt auf einem Gerät in Ihren eigenen Räumen.
            </p>
            <div className="text-[11px] text-[#122635] space-y-1.5 font-sans pt-2 border-t border-[#E9F0F2]">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#087F83]" />
                <span>Vollständige Datenkontrolle</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#087F83]" />
                <span>Keine laufenden Cloud-Abfragen</span>
              </div>
            </div>
          </div>

          {/* Solution B */}
          <div className="p-5 bg-white border border-[#D7E0E4]">
            <div className="flex justify-between items-center text-[10px] font-mono text-[#586B76] mb-2">
              <span>OPTION B</span>
              <span className="bg-[#E9F0F2] text-[#122635] px-2 py-0.5">RECHENZENTRUM DE</span>
            </div>
            <h3 className="text-lg font-sans font-semibold text-[#122635] mb-1">
              Eigener Server in Deutschland
            </h3>
            <p className="text-xs text-[#586B76] mb-3">
              Ein dedizierter Server in einem deutschen Rechenzentrum.
            </p>
            <div className="text-[11px] text-[#122635] space-y-1.5 font-sans pt-2 border-t border-[#E9F0F2]">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#087F83]" />
                <span>Betrieb in Deutschland</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#087F83]" />
                <span>Skalierbar für mehrere Standorte</span>
              </div>
            </div>
          </div>

          {/* Solution C — Hybrid */}
          <div className="p-5 bg-white border-2 border-[#087F83]">
            <div className="flex justify-between items-center text-[10px] font-mono text-[#087F83] mb-2 font-semibold">
              <span>OPTION C</span>
              <span className="bg-[#E6F3F4] text-[#087F83] px-2 py-0.5">HYBRID MIT WÄCHTER</span>
            </div>
            <h3 className="text-lg font-sans font-semibold text-[#122635] mb-1">
              Hybrid mit Wächter
            </h3>
            <p className="text-xs text-[#586B76] mb-3">
              Lokale Datenverarbeitung kombiniert mit einer pseudonymisierten Cloud-KI.
            </p>
            <div className="text-[11px] text-[#122635] space-y-1.5 font-sans pt-2 border-t border-[#087F83]/20">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#087F83]" />
                <span>Pseudonymisierte Datenübertragung</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#087F83]" />
                <span>Keine echten Namen in der Cloud</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 text-center">
          <button
            onClick={onOpenConsultation}
            className="w-full py-3.5 bg-[#087F83] text-white text-xs font-medium font-sans flex items-center justify-center gap-2"
          >
            <span>Passende Lösung anfragen</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Mobile Footer */}
      <footer className="bg-[#102A3A] text-white p-6 text-center space-y-3 font-mono text-xs">
        <div className="font-sans font-semibold text-sm">EIGENKERN Technologies GmbH</div>
        <div className="text-[#BAC8D0] text-[11px]">
          kontakt@eigenkern.de · +49 30 284729-0<br />Berlin, Deutschland
        </div>
        <div className="pt-2 text-[10px] text-[#788B95]">
          © 2026 EIGENKERN · 100% DSGVO-konform
        </div>
      </footer>

    </div>
  );

  return (
    <div className="min-h-screen bg-[#E5ECEF] py-8 px-4 flex flex-col items-center">
      {/* Top Device / Fluid Toggle */}
      <div className="mb-6 flex flex-wrap items-center justify-center gap-2 bg-white border border-[#D7E0E4] p-2 text-xs font-mono">
        <span className="text-[#586B76] px-1 font-medium">Mobile Ansichtsmodus:</span>
        <button
          onClick={() => setViewMode('device')}
          className={`px-3 py-1.5 text-xs cursor-pointer min-h-[36px] transition-colors ${
            viewMode === 'device' ? 'bg-[#102A3A] text-white font-medium' : 'text-[#586B76] hover:text-[#122635]'
          }`}
        >
          390px Smartphone-Rahmen
        </button>
        <button
          onClick={() => setViewMode('fluid')}
          className={`px-3 py-1.5 text-xs cursor-pointer min-h-[36px] transition-colors ${
            viewMode === 'fluid' ? 'bg-[#102A3A] text-white font-medium' : 'text-[#586B76] hover:text-[#122635]'
          }`}
        >
          Volle Breite (Responsive)
        </button>
      </div>

      {viewMode === 'device' ? (
        /* Realistic 390px mobile device mockup container */
        <div className="w-[390px] max-w-full bg-[#102A3A] p-3 rounded-[40px] shadow-2xl border-4 border-[#224458] relative">
          {/* Top speaker & dynamic island slot */}
          <div className="w-28 h-4 bg-black rounded-full mx-auto mb-3" />
          
          {/* Screen Content */}
          <div className="w-full bg-[#F4F7F8] rounded-[28px] overflow-hidden max-h-[820px] overflow-y-auto">
            {content}
          </div>
          
          {/* Home indicator bar */}
          <div className="w-32 h-1 bg-white/40 rounded-full mx-auto mt-3" />
        </div>
      ) : (
        <div className="w-full max-w-md bg-white border border-[#D7E0E4] shadow-lg">
          {content}
        </div>
      )}
    </div>
  );
};
