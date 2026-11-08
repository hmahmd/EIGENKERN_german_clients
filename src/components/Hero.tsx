/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Cpu, Server, HardDrive, ShieldCheck, Check, Sparkles, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onScrollToMechanism: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenConsultation, 
  onScrollToMechanism 
}) => {
  const [showTechDetails, setShowTechDetails] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#F4F7F8] border-b border-[#D7E0E4] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-24">
      {/* Subtle German engineering technical grid background */}
      <div className="absolute inset-0 technical-grid pointer-events-none opacity-40" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column (5 cols on lg): Headline & CTAs (Order 1 on mobile and desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-1">
            {/* Small technical eyebrow */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-2 h-2 bg-[#087F83] shrink-0" />
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#586B76] font-medium">
                LOKALE KI. VOLLE DATENKONTROLLE.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-sans font-medium text-[#122635] tracking-tight leading-[1.12] sm:leading-[1.08] text-balance mb-4 sm:mb-6">
              Ihre eigene KI.<br />
              <span className="font-semibold text-[#102A3A]">In Ihrem Haus.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-lg text-[#586B76] leading-relaxed mb-6 sm:mb-8 max-w-xl">
              Eine lokale KI für Ihre Kanzlei, Praxis oder Verwaltung. Ihre Daten bleiben bei Ihnen. Keine Kosten pro Frage, keine Kosten pro Nutzer.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#087F83] hover:bg-[#06676a] text-white text-sm font-medium font-sans flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs min-h-[44px]"
              >
                <span>Beratung anfragen</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToMechanism}
                className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-[#E9F0F2] text-[#122635] border border-[#D7E0E4] text-sm font-medium font-sans flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[44px]"
              >
                <span>So funktioniert's</span>
              </button>
            </div>

            {/* Three compact technical trust indicators */}
            <div className="pt-5 sm:pt-6 border-t border-[#D7E0E4] grid grid-cols-3 gap-2 sm:gap-4">
              <div className="bg-white/60 sm:bg-transparent p-2 sm:p-0 border border-[#D7E0E4] sm:border-0 text-center sm:text-left">
                <div className="font-mono font-medium text-base sm:text-xl text-[#122635] tabular-nums">
                  0 €
                </div>
                <div className="text-[10px] sm:text-xs text-[#586B76] font-mono mt-0.5">
                  pro Frage
                </div>
              </div>

              <div className="bg-white/60 sm:bg-transparent p-2 sm:p-0 border border-[#D7E0E4] sm:border-0 text-center sm:text-left">
                <div className="font-mono font-medium text-base sm:text-xl text-[#122635] tabular-nums">
                  0 €
                </div>
                <div className="text-[10px] sm:text-xs text-[#586B76] font-mono mt-0.5">
                  pro Nutzer
                </div>
              </div>

              <div className="bg-white/60 sm:bg-transparent p-2 sm:p-0 border border-[#D7E0E4] sm:border-0 text-center sm:text-left">
                <div className="font-mono font-medium text-base sm:text-xl text-[#087F83] tabular-nums">
                  100 %
                </div>
                <div className="text-[10px] sm:text-xs text-[#586B76] font-mono mt-0.5">
                  Datenkontrolle
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Physical Server Appliance Visual (Order 2 on mobile and desktop) */}
          <div className="lg:col-span-7 relative order-2 lg:order-2">
            <div className="relative bg-white border border-[#D7E0E4] p-2.5 sm:p-4 shadow-sm group">
              
              {/* Top technical coordinate HUD with robust gap and badge */}
              <div className="flex items-center justify-between gap-2 pb-2 sm:pb-3 mb-2 border-b border-[#E9F0F2] text-[10px] sm:text-xs font-mono text-[#586B76]">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-[#087F83] inline-block animate-pulse shrink-0" />
                  <span className="font-medium text-[#122635] truncate">EIGENKERN APPLIANCE v2</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden sm:inline text-[#788B95]">AUTARK LOKAL ·</span>
                  <span className="text-[#087F83] font-semibold bg-[#E6F3F4] px-1.5 py-0.5 border border-[#087F83]/30">BEREIT</span>
                </div>
              </div>

              {/* Main product visual container */}
              <div className="relative aspect-16/10 sm:aspect-16/9 bg-[#0E1B24] overflow-hidden flex items-center justify-center">
                
                {/* High-end hardware product visual showing authentic EIGENKERN appliance on executive office desk */}
                <img
                  src="/assets/eigenkern-server-appliance.png"
                  alt="EIGENKERN Lokaler KI-Server im Büro auf Schreibtisch"
                  className="w-full h-full object-cover object-center scale-[1.01] transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="eager"
                />

                {/* Technical HUD Overlay: "Standort: Ihr Büro, Deutschland" with connection line */}
                <div className="absolute top-2.5 left-2.5 sm:top-6 sm:left-6 z-20 pointer-events-none max-w-[85%]">
                  <div className="bg-[#102A3A]/90 backdrop-blur-md border border-[#087F83]/50 text-white px-2.5 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-mono flex items-center gap-2 shadow-lg">
                    <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#087F83] shrink-0" />
                    <div>
                      <div className="text-[9px] sm:text-[10px] uppercase text-[#BAC8D0] leading-none">Standort</div>
                      <div className="font-medium text-white text-[11px] sm:text-[12px] mt-0.5">Ihr Büro, Deutschland</div>
                    </div>
                  </div>
                  {/* Subtle technical hair-thin connector line */}
                  <div className="w-[1px] h-4 sm:h-12 bg-[#087F83]/60 ml-3 sm:ml-4" />
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full border border-[#087F83] bg-[#087F83]/40 ml-2.5 sm:ml-3" />
                </div>

                {/* Right-bottom button: Tech specs toggle */}
                <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 z-20">
                  <button
                    onClick={() => setShowTechDetails(!showTechDetails)}
                    className="bg-[#102A3A]/90 hover:bg-[#102A3A] backdrop-blur-md text-[#BAC8D0] hover:text-white border border-[#224458] text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-1 sm:py-1.5 flex items-center gap-1.5 sm:gap-2 transition-colors cursor-pointer min-h-[32px]"
                  >
                    <Cpu className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#087F83]" />
                    <span>{showTechDetails ? 'Schließen' : 'Hardware-Daten'}</span>
                  </button>
                </div>
              </div>

              {/* Technical Footnote Banner below hardware visual */}
              <div className="mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-[#E9F0F2] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-[11px] sm:text-xs text-[#586B76] font-mono">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#087F83] shrink-0" />
                  <span>Keine Datenübertragung an Dritte</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#788B95]">
                  Aluminium-Gehäuse · &lt; 19 dB
                </div>
              </div>

              {/* Expandable Technical Specs drawer */}
              {showTechDetails && (
                <div className="mt-3 p-3 sm:p-4 bg-[#F4F7F8] border border-[#D7E0E4] text-[11px] sm:text-xs font-mono text-[#122635] space-y-2 animate-in fade-in duration-150">
                  <div className="font-sans font-semibold text-xs sm:text-sm mb-2 text-[#102A3A]">
                    Hardware-Spezifikationen EIGENKERN Appliance
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] sm:text-[11px]">
                    <div className="flex justify-between border-b border-[#D7E0E4] pb-1">
                      <span className="text-[#586B76]">KI-Recheneinheit:</span>
                      <span className="font-medium">Dedizierter NPU Accelerator</span>
                    </div>
                    <div className="flex justify-between border-b border-[#D7E0E4] pb-1">
                      <span className="text-[#586B76]">Speicher:</span>
                      <span className="font-medium">64 GB / 128 GB Unified Memory</span>
                    </div>
                    <div className="flex justify-between border-b border-[#D7E0E4] pb-1">
                      <span className="text-[#586B76]">Betriebssystem:</span>
                      <span className="font-medium">Gehärtetes EIGENKERN Linux OS</span>
                    </div>
                    <div className="flex justify-between border-b border-[#D7E0E4] pb-1">
                      <span className="text-[#586B76]">Netzwerk:</span>
                      <span className="font-medium">Air-Gapped fähig</span>
                    </div>
                    <div className="flex justify-between border-b border-[#D7E0E4] pb-1">
                      <span className="text-[#586B76]">Leistungsaufnahme:</span>
                      <span className="font-medium">35 W Idle / 140 W Last</span>
                    </div>
                    <div className="flex justify-between border-b border-[#D7E0E4] pb-1">
                      <span className="text-[#586B76]">Abmessungen:</span>
                      <span className="font-medium">210 × 160 × 280 mm</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
