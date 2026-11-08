/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HardDrive, Server, ShieldCheck, Check, ArrowRight } from 'lucide-react';

interface ThreeWaysProps {
  onSelectDeployment: (deployment: 'local' | 'server' | 'hybrid') => void;
  onScrollToWaechter: () => void;
}

export const ThreeWays: React.FC<ThreeWaysProps> = ({ 
  onSelectDeployment, 
  onScrollToWaechter 
}) => {
  return (
    <section id="loesung" className="py-14 sm:py-20 lg:py-28 bg-[#F4F7F8] border-b border-[#D7E0E4]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-14">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-2 h-2 bg-[#087F83]" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#586B76]">
              ARCHITEKTUR & BEREITSTELLUNG
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-sans font-medium text-[#122635] tracking-tight">
            Drei Wege zu Ihrer KI
          </h2>
          <p className="text-sm sm:text-base text-[#586B76] mt-2 sm:mt-3 leading-relaxed">
            Sie entscheiden, wo Ihre KI arbeitet. Welche Architektur zu Ihnen passt, hängt von Ihren Anforderungen ab.
          </p>
        </div>

        {/* 3 Distinctive Comparison Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* OPTION A — Lokal im Büro */}
          <div className="bg-white border border-[#D7E0E4] p-5 sm:p-8 flex flex-col justify-between relative hover:border-[#102A3A] transition-colors">
            <div>
              <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-[#E9F0F2]">
                <span className="font-mono text-xs text-[#586B76] uppercase tracking-wider">
                  Option 01
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-[#122635] bg-[#E9F0F2] px-2 py-0.5">
                  100% On-Premise
                </span>
              </div>

              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#F4F7F8] border border-[#D7E0E4] flex items-center justify-center mb-4 sm:mb-6 text-[#102A3A]">
                <HardDrive className="w-5 sm:w-6 h-5 sm:h-6 stroke-[1.5]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-sans font-semibold text-[#122635] mb-2 tracking-tight">
                Lokal im Büro
              </h3>

              <p className="text-xs sm:text-sm text-[#586B76] leading-relaxed mb-4 sm:mb-6">
                Ihre KI läuft direkt auf einem Gerät in Ihren eigenen Räumen.
              </p>

              {/* Für wen */}
              <div className="mb-4 sm:mb-6 p-3 bg-[#F4F7F8] border border-[#E9F0F2]">
                <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#586B76] mb-1">
                  Für wen:
                </span>
                <span className="text-xs font-sans text-[#122635] font-medium">
                  Kleine Kanzleien, Praxen und Unternehmen.
                </span>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                <div className="flex items-start gap-2.5 text-xs text-[#122635]">
                  <Check className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                  <span>Vollständige Datenkontrolle.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#122635]">
                  <Check className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                  <span>Keine laufenden Cloud-Abfragen.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#122635]">
                  <Check className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                  <span>Direkter Zugriff im eigenen Netzwerk.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-[#E9F0F2]">
              <button
                onClick={() => onSelectDeployment('local')}
                className="w-full py-3 sm:py-2.5 bg-white hover:bg-[#F4F7F8] border border-[#D7E0E4] text-[#122635] text-xs font-mono font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer min-h-[44px]"
              >
                <span>Option A wählen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* OPTION B — Eigener Server in Deutschland */}
          <div className="bg-white border border-[#D7E0E4] p-5 sm:p-8 flex flex-col justify-between relative hover:border-[#102A3A] transition-colors">
            <div>
              <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-[#E9F0F2]">
                <span className="font-mono text-xs text-[#586B76] uppercase tracking-wider">
                  Option 02
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-[#122635] bg-[#E9F0F2] px-2 py-0.5">
                  Rechenzentrum DE
                </span>
              </div>

              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#F4F7F8] border border-[#D7E0E4] flex items-center justify-center mb-4 sm:mb-6 text-[#102A3A]">
                <Server className="w-5 sm:w-6 h-5 sm:h-6 stroke-[1.5]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-sans font-semibold text-[#122635] mb-2 tracking-tight">
                Eigener Server in Deutschland
              </h3>

              <p className="text-xs sm:text-sm text-[#586B76] leading-relaxed mb-4 sm:mb-6">
                Ein dedizierter Server in einem deutschen Rechenzentrum.
              </p>

              {/* Für wen */}
              <div className="mb-4 sm:mb-6 p-3 bg-[#F4F7F8] border border-[#E9F0F2]">
                <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#586B76] mb-1">
                  Für wen:
                </span>
                <span className="text-xs font-sans text-[#122635] font-medium">
                  Unternehmen mit mehreren Standorten oder höheren Anforderungen.
                </span>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                <div className="flex items-start gap-2.5 text-xs text-[#122635]">
                  <Check className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                  <span>Betrieb in Deutschland.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#122635]">
                  <Check className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                  <span>Zentral verwaltete Infrastruktur.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#122635]">
                  <Check className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                  <span>Skalierbar für mehrere Nutzer.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-[#E9F0F2]">
              <button
                onClick={() => onSelectDeployment('server')}
                className="w-full py-3 sm:py-2.5 bg-white hover:bg-[#F4F7F8] border border-[#D7E0E4] text-[#122635] text-xs font-mono font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer min-h-[44px]"
              >
                <span>Option B wählen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* OPTION C — Hybrid mit Wächter */}
          <div className="bg-white border-2 border-[#087F83] p-5 sm:p-8 flex flex-col justify-between relative shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-[#087F83]/20">
                <span className="font-mono text-xs text-[#087F83] uppercase tracking-wider font-semibold">
                  Option 03 · Hybrid
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-[#087F83] bg-[#E6F3F4] px-2 py-0.5 font-medium">
                  Empfohlen für Skalierung
                </span>
              </div>

              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#E6F3F4] border border-[#087F83]/30 flex items-center justify-center mb-4 sm:mb-6 text-[#087F83]">
                <ShieldCheck className="w-5 sm:w-6 h-5 sm:h-6 stroke-[1.5]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-sans font-semibold text-[#122635] mb-2 tracking-tight">
                Hybrid mit Wächter
              </h3>

              <p className="text-xs sm:text-sm text-[#586B76] leading-relaxed mb-4 sm:mb-6">
                Lokale Datenverarbeitung kombiniert mit einer pseudonymisierten Cloud-KI.
              </p>

              {/* Für wen */}
              <div className="mb-4 sm:mb-6 p-3 bg-[#E6F3F4]/60 border border-[#087F83]/20">
                <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#087F83] mb-1 font-semibold">
                  Für wen:
                </span>
                <span className="text-xs font-sans text-[#122635] font-medium">
                  Organisationen mit komplexeren KI-Anforderungen.
                </span>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                <div className="flex items-start gap-2.5 text-xs text-[#122635]">
                  <Check className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                  <span>Pseudonymisierte Datenübertragung.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#122635]">
                  <Check className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                  <span>Keine echten Namen in der Cloud.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#122635]">
                  <Check className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                  <span>Rückzuordnung der Antworten.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-[#087F83]/20 flex flex-col gap-2">
              <button
                onClick={() => onSelectDeployment('hybrid')}
                className="w-full py-3 sm:py-2.5 bg-[#087F83] hover:bg-[#06676a] text-white text-xs font-mono font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer min-h-[44px]"
              >
                <span>Option C wählen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              
              <button
                onClick={onScrollToWaechter}
                className="text-center text-[11px] font-mono text-[#087F83] hover:underline pt-1 cursor-pointer min-h-[32px] flex items-center justify-center"
              >
                Wächter-Technologie im Detail ansehen ↓
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
