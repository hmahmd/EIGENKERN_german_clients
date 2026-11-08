/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Lock, Cloud, ShieldCheck, RefreshCw, CheckCircle2 } from 'lucide-react';
import { pseudonymizeDocument, restoreIdentities } from '../utils/waechter.js';

interface WaechterSectionProps {
  onLearnMoreDeepDive?: () => void;
}

export const WaechterSection: React.FC<WaechterSectionProps> = ({ onLearnMoreDeepDive }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [customInput, setCustomInput] = useState<string>(
    'Rechtsgutachten Dr. Müller: Mandantendaten und Interne Informationen bezüglich Steuerprüfung.'
  );

  const demoTransformation = pseudonymizeDocument(customInput);
  const restoredDemo = restoreIdentities(
    'Ergebnis für Person A: Datensatz M und Information C sind vollständig konform.',
    demoTransformation.mappings
  );

  return (
    <section id="waechter" className="py-14 sm:py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D7E0E4] relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 technical-grid pointer-events-none opacity-30" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#087F83]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#087F83] font-semibold">
              WÄCHTER-TECHNOLOGIE · PSEUDONYMISIERTE HYBRID-KI
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-sans font-medium text-[#122635] tracking-tight">
            Die Cloud-KI arbeitet. Ihre Daten bleiben zu Hause.
          </h2>
          <p className="text-sm sm:text-base text-[#586B76] mt-3 leading-relaxed">
            Der Wächter erstellt eine pseudonymisierte Schattenkopie Ihrer Daten. Die Cloud-KI verarbeitet nur diese Kopie. Ihre echten Namen und sensiblen Originaldaten bleiben geschützt.
          </p>
        </div>

        {/* 4-Stage Horizontal Technical Process Diagram */}
        <div className="bg-[#F4F7F8] border border-[#D7E0E4] p-4 sm:p-6 lg:p-8 mb-10 shadow-sm">
          
          {/* Top Environment Boundary Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 pb-4 mb-6 border-b border-[#D7E0E4] text-xs font-mono">
            {/* Local protected zone (Cols 1 to 6) */}
            <div className="sm:col-span-2 lg:col-span-6 flex flex-wrap items-center justify-between gap-2 bg-white/80 border border-[#D7E0E4] px-3 sm:px-4 py-2">
              <div className="flex items-center gap-2 text-[#102A3A]">
                <Lock className="w-3.5 h-3.5 text-[#087F83] shrink-0" />
                <span className="font-semibold uppercase tracking-wider text-[11px] sm:text-xs">Geschützte Lokale Umgebung (Ihr Büro)</span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-[#087F83] font-semibold">100% DSGVO-ISOLIERT</span>
            </div>

            {/* External cloud zone (Cols 7 to 9) */}
            <div className="lg:col-span-3 flex items-center justify-between bg-[#102A3A] text-white px-3 sm:px-4 py-2">
              <div className="flex items-center gap-2">
                <Cloud className="w-3.5 h-3.5 text-[#087F83] shrink-0" />
                <span className="font-semibold uppercase tracking-wider text-[11px] sm:text-xs">Externe Cloud-KI</span>
              </div>
              <span className="text-[10px] text-[#BAC8D0]">NUR SCHATTENKOPIE</span>
            </div>

            {/* Return restoration zone (Cols 10 to 12) */}
            <div className="lg:col-span-3 flex items-center justify-between bg-white/80 border border-[#D7E0E4] px-4 py-2">
              <div className="flex items-center gap-2 text-[#102A3A]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#087F83]" />
                <span className="font-semibold uppercase tracking-wider">Lokale Rekonstruktion</span>
              </div>
              <span className="text-[11px] text-[#087F83]">ORIGINAL-IDENTITÄT</span>
            </div>
          </div>

          {/* Diagram Flow Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            
            {/* STAGE 01 — ORIGINAL */}
            <div className="bg-white border border-[#D7E0E4] p-5 flex flex-col justify-between relative group hover:border-[#102A3A] transition-colors">
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-[#586B76] font-semibold">STAGE 01</span>
                  <span className="text-[11px] bg-[#E9F0F2] text-[#122635] px-2 py-0.5 font-medium">LOKAL</span>
                </div>
                
                <h3 className="font-sans font-semibold text-base text-[#122635] mb-2">
                  Original
                </h3>

                <p className="text-xs text-[#586B76] mb-4">
                  Dokument auf Ihrem lokalen Server enthält unzensierte Klardaten.
                </p>

                {/* Document excerpt box */}
                <div className="p-3 bg-[#F4F7F8] border border-[#D7E0E4] font-mono text-xs space-y-1.5 text-[#122635]">
                  <div className="text-[11px] text-[#586B76] border-b border-[#E9F0F2] pb-1 flex justify-between">
                    <span>Akte_2026.pdf</span>
                    <span className="text-red-600">Vertraulich</span>
                  </div>
                  <div className="text-red-700 font-medium">"Dr. Müller"</div>
                  <div className="text-red-700 font-medium">"Patientendaten"</div>
                  <div className="text-red-700 font-medium">"Interne Informationen"</div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E9F0F2] text-[11px] font-mono text-[#586B76]">
                Identität verbleibt im Haus
              </div>
            </div>

            {/* STAGE 02 — SCHATTENKOPIE */}
            <div className="bg-white border-2 border-[#087F83] p-5 flex flex-col justify-between relative group shadow-xs">
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-[#087F83] font-semibold">STAGE 02</span>
                  <span className="text-[11px] bg-[#E6F3F4] text-[#087F83] px-2 py-0.5 font-semibold">WÄCHTER</span>
                </div>
                
                <h3 className="font-sans font-semibold text-base text-[#122635] mb-2">
                  Schattenkopie
                </h3>

                <p className="text-xs text-[#586B76] mb-4">
                  Lokales Wächter-Modul ersetzt alle Klarnamen durch Pseudonyme.
                </p>

                {/* Transformed document box */}
                <div className="p-3 bg-[#E6F3F4]/50 border border-[#087F83]/30 font-mono text-xs space-y-1.5 text-[#122635]">
                  <div className="text-[11px] text-[#087F83] border-b border-[#087F83]/20 pb-1 flex justify-between font-medium">
                    <span>Schattenkopie.tmp</span>
                    <span className="text-[#087F83]">Pseudonymisiert</span>
                  </div>
                  <div className="text-[#087F83] font-semibold">"Person A"</div>
                  <div className="text-[#087F83] font-semibold">"Datensatz B"</div>
                  <div className="text-[#087F83] font-semibold">"Information C"</div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#087F83]/20 text-[11px] font-mono text-[#087F83]">
                Mapping-Tabelle bleibt lokal
              </div>
            </div>

            {/* STAGE 03 — CLOUD-KI */}
            <div className="bg-[#102A3A] border border-[#224458] text-white p-5 flex flex-col justify-between relative group">
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-[#BAC8D0] font-semibold">STAGE 03</span>
                  <span className="text-[11px] bg-[#16384d] text-[#BAC8D0] px-2 py-0.5">ISOLIERTE CLOUD</span>
                </div>
                
                <h3 className="font-sans font-semibold text-base text-white mb-2">
                  Cloud-KI
                </h3>

                <p className="text-xs text-[#BAC8D0] mb-4">
                  Großes Sprachmodell verarbeitet syntaktische Logik ohne Personenbezug.
                </p>

                {/* Cloud processing box */}
                <div className="p-3 bg-[#0c202d] border border-[#224458] font-mono text-xs space-y-1.5 text-[#BAC8D0]">
                  <div className="text-[11px] text-[#7d95a3] border-b border-[#224458] pb-1 flex justify-between">
                    <span>LLM-Inferenz</span>
                    <span className="text-emerald-400">0 Klarnamen</span>
                  </div>
                  <div className="text-white">Input: Person A, Datensatz B</div>
                  <div className="text-emerald-400 font-mono text-[11px]">→ Reasoning über Information C</div>
                  <div className="text-[#9bb0bc]">Output: Analyse für Person A</div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#224458] text-[11px] font-mono text-[#BAC8D0]">
                Kein Training mit Ihren Daten
              </div>
            </div>

            {/* STAGE 04 — ANTWORT */}
            <div className="bg-white border border-[#D7E0E4] p-5 flex flex-col justify-between relative group hover:border-[#087F83] transition-colors">
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-[#586B76] font-semibold">STAGE 04</span>
                  <span className="text-[11px] bg-[#E9F0F2] text-[#087F83] px-2 py-0.5 font-medium">LOKAL RESTORIERT</span>
                </div>
                
                <h3 className="font-sans font-semibold text-base text-[#122635] mb-2">
                  Antwort
                </h3>

                <p className="text-xs text-[#586B76] mb-4">
                  Der lokale Wächter setzt die echten Namen wieder in die Antwort ein.
                </p>

                {/* Final answer box */}
                <div className="p-3 bg-[#F4F7F8] border border-[#D7E0E4] font-mono text-xs space-y-1.5 text-[#122635]">
                  <div className="text-[11px] text-[#586B76] border-b border-[#E9F0F2] pb-1 flex justify-between">
                    <span>Ergebnis.view</span>
                    <span className="text-[#087F83]">Vollständig</span>
                  </div>
                  <div className="font-medium text-[#122635]">"Dr. Müller ..."</div>
                  <div className="text-xs text-[#586B76]">Patientendaten zugeordnet</div>
                  <div className="text-[11px] text-[#087F83]">Inklusive Quellennachweis</div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E9F0F2] text-[11px] font-mono text-[#122635] font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#087F83]" />
                <span>Für Nutzer nahtlos</span>
              </div>
            </div>

          </div>

          {/* Bottom technical guarantee callout */}
          <div className="mt-6 pt-4 border-t border-[#D7E0E4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#122635]">
              <span className="w-2 h-2 bg-[#087F83] shrink-0" />
              <span className="font-semibold text-xs sm:text-sm">
                Reale Identitäten verlassen Ihre Umgebung nicht.
              </span>
            </div>

            {onLearnMoreDeepDive && (
              <button
                onClick={onLearnMoreDeepDive}
                className="text-[#087F83] hover:text-[#06676a] font-medium hover:underline flex items-center gap-1.5 cursor-pointer py-2 min-h-[44px] text-xs"
              >
                <span>Detailliertes Wächter-Architekturdiagramm öffnen</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
