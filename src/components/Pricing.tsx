/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingProps {
  onOpenConsultation: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenConsultation }) => {
  return (
    <section id="kosten" className="py-14 sm:py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D7E0E4]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#087F83]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#586B76]">
              TRANSPARENTE INVESTITION
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-sans font-medium text-[#122635] tracking-tight">
            Keine Kosten pro Frage. Keine Kosten pro Nutzer.
          </h2>
          <p className="text-sm sm:text-base text-[#586B76] mt-3 leading-relaxed">
            Transparente Preisstruktur: eine feste Bereitstellung, ein optionaler Betrieb.
          </p>
        </div>

        {/* Three Clean Pricing Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* 01 — EINMALIG */}
          <div className="bg-[#F4F7F8] border border-[#D7E0E4] p-5 sm:p-8 flex flex-col justify-between relative hover:border-[#102A3A] transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D7E0E4]">
                <span className="font-mono text-xs font-semibold text-[#586B76] uppercase tracking-wider">
                  01 — EINMALIG
                </span>
                <span className="text-[11px] font-mono text-[#122635] bg-white px-2 py-0.5 border border-[#D7E0E4]">
                  Bereitstellung
                </span>
              </div>

              {/* Price placeholder */}
              <div className="mb-4">
                <div className="font-mono font-medium text-3xl sm:text-4xl text-[#122635] tracking-tight">
                  ab X.XXX €
                </div>
                <div className="text-xs font-mono text-[#586B76] mt-1">
                  Feste Einmalinvestition
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#586B76] leading-relaxed mb-6 pb-6 border-b border-[#D7E0E4]">
                Gerät oder Server, Einrichtung und erste Dokumente.
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-[#122635]">
                  <Check className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                  <span>Individuelle Einrichtung.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#122635]">
                  <Check className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                  <span>Integration in Ihre Umgebung.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#122635]">
                  <Check className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                  <span>Einweisung Ihres Teams.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#D7E0E4]">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3 min-h-[44px] bg-white hover:bg-[#E9F0F2] border border-[#D7E0E4] text-[#122635] text-xs font-mono font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Einrichtung anfragen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 02 — LAUFEND */}
          <div className="bg-[#F4F7F8] border border-[#D7E0E4] p-5 sm:p-8 flex flex-col justify-between relative hover:border-[#102A3A] transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D7E0E4]">
                <span className="font-mono text-xs font-semibold text-[#586B76] uppercase tracking-wider">
                  02 — LAUFEND
                </span>
                <span className="text-[11px] font-mono text-[#122635] bg-white px-2 py-0.5 border border-[#D7E0E4]">
                  Betrieb & Support
                </span>
              </div>

              {/* Price placeholder */}
              <div className="mb-4">
                <div className="font-mono font-medium text-3xl sm:text-4xl text-[#122635] tracking-tight">
                  XXX € <span className="text-base text-[#586B76] font-normal">/ Monat</span>
                </div>
                <div className="text-xs font-mono text-[#586B76] mt-1">
                  Optionaler Vollservice
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#586B76] leading-relaxed mb-6 pb-6 border-b border-[#D7E0E4]">
                Optionaler Betrieb, Support und regelmäßige Wartung.
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-[#122635]">
                  <Check className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                  <span>Updates und Wartung.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#122635]">
                  <Check className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                  <span>Technischer Support.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#122635]">
                  <Check className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                  <span>Transparente laufende Kosten.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#D7E0E4]">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3 min-h-[44px] bg-white hover:bg-[#E9F0F2] border border-[#D7E0E4] text-[#122635] text-xs font-mono font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Wartungsdetails anfragen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 03 — OPTIONAL */}
          <div className="bg-[#F4F7F8] border border-[#D7E0E4] p-5 sm:p-8 flex flex-col justify-between relative hover:border-[#087F83] transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D7E0E4]">
                <span className="font-mono text-xs font-semibold text-[#087F83] uppercase tracking-wider">
                  03 — OPTIONAL
                </span>
                <span className="text-[11px] font-mono text-[#087F83] bg-[#E6F3F4] px-2 py-0.5 border border-[#087F83]/30">
                  Wächter-Modus
                </span>
              </div>

              {/* Price placeholder */}
              <div className="mb-4">
                <div className="font-mono font-medium text-3xl sm:text-4xl text-[#087F83] tracking-tight">
                  XX € <span className="text-base text-[#586B76] font-normal">/ Monat</span>
                </div>
                <div className="text-xs font-mono text-[#586B76] mt-1">
                  Flexible Hybrid-Erweiterung
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#586B76] leading-relaxed mb-6 pb-6 border-b border-[#D7E0E4]">
                Wächtermodus für pseudonymisierte Cloud-Verarbeitung.
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-[#122635]">
                  <Check className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                  <span>Pseudonymisierte Verarbeitung.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#122635]">
                  <Check className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                  <span>Kontrollierte Datenübertragung.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#122635]">
                  <Check className="w-4 h-4 text-[#087F83] shrink-0 mt-0.5" />
                  <span>Jederzeit abschaltbar.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#D7E0E4]">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3 min-h-[44px] bg-[#087F83] hover:bg-[#06676a] text-white text-xs font-mono font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                <span>Wächter-Option anfragen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Pricing Guarantee Strip */}
        <div className="mt-8 sm:mt-10 p-4 bg-[#F4F7F8] border border-[#D7E0E4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-[#586B76]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#087F83] shrink-0" />
            <span className="text-[#122635] font-medium">Volle Kostensicherheit für Ihr Budget</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px]">
            <span>Keine Token-Abrechnung</span>
            <span>·</span>
            <span>Keine versteckten API-Gebühren</span>
            <span>·</span>
            <span>Unbegrenzte Abfragen für Ihr gesamtes Team</span>
          </div>
        </div>

      </div>
    </section>
  );
};
