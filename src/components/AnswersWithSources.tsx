/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FileText, ExternalLink, Search, Check, ZoomIn, ZoomOut, Bookmark, ShieldCheck } from 'lucide-react';

export const AnswersWithSources: React.FC = () => {
  const [highlightActive, setHighlightActive] = useState(true);

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-[#F4F7F8] border-b border-[#D7E0E4]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#087F83]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#586B76]">
              NACHVOLLZIEHBARKEIT & BELEGFÜHRUNG
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-sans font-medium text-[#122635] tracking-tight">
            Antworten mit Quellenangabe
          </h2>
          <p className="text-sm sm:text-base text-[#586B76] mt-3 leading-relaxed">
            Jede Antwort verweist auf die Stelle in Ihren eigenen Dokumenten. Sie prüfen in einem Klick.
          </p>
        </div>

        {/* 2-Column Demonstration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Realistic German Business Document Viewer (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white border border-[#D7E0E4] shadow-sm">
            {/* Viewer Header Toolbar */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-3 bg-[#E9F0F2] border-b border-[#D7E0E4] text-xs font-mono text-[#586B76]">
              <div className="flex items-center gap-2 text-[#122635] font-medium truncate">
                <FileText className="w-4 h-4 text-[#087F83] shrink-0" />
                <span className="font-sans font-semibold text-xs sm:text-sm truncate">Mandantenhandbuch_2026.pdf</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] shrink-0">
                <span className="hidden sm:inline">Seite 4 von 142</span>
                <span className="hidden sm:inline">·</span>
                <span className="text-[#087F83] font-medium">INDEXIERT LOKAL</span>
              </div>
            </div>

            {/* Document Content Page */}
            <div className="p-4 sm:p-8 lg:p-10 font-sans text-sm text-[#122635] leading-relaxed relative bg-white min-h-[380px]">
              
              {/* Document Header Line */}
              <div className="border-b border-[#D7E0E4] pb-3 mb-5 flex flex-col sm:flex-row justify-between items-baseline gap-1 text-xs text-[#586B76] font-mono">
                <span>KAPITEL 2: STEUERLICHE PRAXISFÄLLE</span>
                <span className="text-[11px]">STAND: JANUAR 2026</span>
              </div>

              <h4 className="text-sm sm:text-base font-semibold text-[#102A3A] mb-3">
                2.3 Steuerliche Behandlung und Aufbewahrungspflichten bei Handwerkerleistungen
              </h4>

              <p className="text-[#586B76] mb-4 text-xs leading-relaxed">
                Gemäß den aktuellen Vorgaben der Finanzverwaltung sind Aufwendungen für Renovierungs-, Erhaltungs- und Modernisierungsmaßnahmen im privaten Haushalt gesondert nachzuweisen. Die Inanspruchnahme der Steuerermäßigung setzt zwingend voraus, dass die Rechnung die Arbeitskosten getrennt ausweist.
              </p>

              {/* The Highlighted Sentence */}
              <div 
                className={`p-3 my-4 transition-all duration-300 border-l-2 ${
                  highlightActive 
                    ? 'bg-[#E6F3F4] border-[#087F83] text-[#102A3A] shadow-xs' 
                    : 'bg-transparent border-transparent text-[#122635]'
                }`}
              >
                <p className="font-medium text-sm leading-relaxed">
                  "Für Handwerkerleistungen gelten die gesetzlichen Voraussetzungen gemäß § 35a EStG. Die entsprechenden Nachweise sind vollständig zu dokumentieren."
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-[#087F83]">
                  <span>§ 35a Abs. 3 EStG · Belegnachweis</span>
                  <span>Abschnitt 2.3</span>
                </div>
              </div>

              <p className="text-[#586B76] text-xs leading-relaxed">
                Barzahlungen werden von den Finanzämtern grundsätzlich nicht anerkannt. Die Zahlung muss zwingend unbar über ein Kreditinstitut auf das Konto des Handwerksbetriebs erfolgt sein. Entsprechende Kontoauszüge oder Überweisungsbelege sind zusammen mit der ordnungsgemäßen Originalrechnung aufzubewahren.
              </p>

              {/* Page Number Footer */}
              <div className="border-t border-[#E9F0F2] pt-4 mt-8 flex justify-between text-[11px] font-mono text-[#788B95]">
                <span>Mandantenhandbuch 2026 — Vertraulich</span>
                <span>Seite 4</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Professional Research Result Panel (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <div className="bg-white border border-[#D7E0E4] p-6 sm:p-7 shadow-sm">
              {/* Question Box */}
              <div className="mb-6 pb-5 border-b border-[#E9F0F2]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 bg-[#087F83]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[#586B76]">
                    Benutzeranfrage
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-lg text-[#122635] leading-snug">
                  "Welche Angaben müssen wir bei Handwerkerleistungen aufbewahren?"
                </h3>
              </div>

              {/* Answer Content */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#087F83] font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verifizierte Dokumenten-Antwort</span>
                  </span>
                  <span className="text-[11px] font-mono text-[#586B76] bg-[#E9F0F2] px-2 py-0.5">
                    100% Belegt
                  </span>
                </div>

                <div className="p-4 bg-[#F4F7F8] border border-[#D7E0E4] text-sm text-[#122635] leading-relaxed font-sans">
                  Rechnungen und Zahlungsbelege sind vollständig aufzubewahren. Die entsprechenden Nachweise müssen die erbrachten Leistungen eindeutig dokumentieren.
                </div>
              </div>

              {/* Source Reference & Direct Jump */}
              <div className="pt-4 border-t border-[#E9F0F2]">
                <div className="text-xs font-mono text-[#586B76] mb-2 uppercase tracking-wider">
                  Fundstelle im Originaldokument:
                </div>
                
                <button
                  onClick={() => setHighlightActive(true)}
                  className="w-full p-3 min-h-[44px] bg-white hover:bg-[#E6F3F4] border border-[#D7E0E4] hover:border-[#087F83] transition-colors text-left flex items-center justify-between gap-2 group cursor-pointer"
                >
                  <div className="space-y-0.5 truncate">
                    <div className="font-mono text-xs font-semibold text-[#122635] group-hover:text-[#087F83] flex items-center gap-1.5 truncate">
                      <FileText className="w-3.5 h-3.5 text-[#087F83] shrink-0" />
                      <span className="truncate">Quelle: Mandantenhandbuch_2026.pdf</span>
                    </div>
                    <div className="font-mono text-[11px] text-[#586B76]">
                      Seite 4 · Abschnitt 2.3
                    </div>
                  </div>

                  <span className="text-xs font-mono text-[#087F83] font-medium flex items-center gap-1 shrink-0">
                    <span className="hidden sm:inline">Zur Textstelle</span>
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </button>
              </div>

              {/* Reassurance note */}
              <div className="mt-4 pt-3 border-t border-[#E9F0F2] text-[11px] font-mono text-[#586B76] flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#087F83]" />
                <span>Keine Halluzination: Ausschließlich auf Grundlage Ihrer Akten.</span>
              </div>
            </div>

            {/* Additional Trust Card */}
            <div className="bg-[#102A3A] text-white p-5 border border-[#224458]">
              <h4 className="font-sans font-semibold text-sm mb-1 text-white">
                Revisionssichere Quellenverfolgung
              </h4>
              <p className="text-xs text-[#BAC8D0] leading-relaxed">
                Jedes Zitat, jede Frist und jede Zahl wird mit exaktem PDF-Koordinaten-Marker belegt. Ihr Team spart bis zu 85% der manuellen Recherchezeit.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
