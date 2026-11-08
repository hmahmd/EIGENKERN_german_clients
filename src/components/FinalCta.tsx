/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

interface FinalCtaProps {
  onOpenConsultation: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenConsultation }) => {
  return (
    <section className="bg-[#102A3A] text-white py-14 sm:py-20 lg:py-28 relative overflow-hidden border-b border-[#224458]">
      {/* Precision minimal technical blueprint decorative grid */}
      <div className="absolute inset-0 technical-grid-dark pointer-events-none opacity-40" />

      {/* Subtle engineering watermark geometry */}
      <div className="absolute -right-16 -bottom-16 w-96 h-96 pointer-events-none opacity-10">
        <svg viewBox="0 0 200 200" fill="none" stroke="#FFFFFF" strokeWidth="1">
          <circle cx="100" cy="100" r="80" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="50" />
          <polygon points="100,20 180,100 100,180 20,100" />
          <line x1="20" y1="100" x2="180" y2="100" />
          <line x1="100" y1="20" x2="100" y2="180" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#087F83]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#BAC8D0]">
              PERSÖNLICHER DIALOG · MADE IN GERMANY
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-sans font-medium text-white tracking-tight leading-tight mb-4 sm:mb-6">
            Bereit für Ihre eigene KI?
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#BAC8D0] leading-relaxed mb-8 sm:mb-10 max-w-2xl">
            Lassen Sie uns gemeinsam herausfinden, welche lokale KI-Lösung zu Ihrem Unternehmen passt.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 min-h-[48px] bg-[#087F83] hover:bg-[#06676a] text-white text-sm font-medium font-sans flex items-center justify-center gap-3 transition-colors cursor-pointer shadow-md group"
            >
              <span>Beratung anfragen</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#BAC8D0] justify-center sm:justify-start">
              <ShieldCheck className="w-4 h-4 text-[#087F83] shrink-0" />
              <span>Unverbindlich · Vertraulich nach § 203 StGB</span>
            </div>
          </div>

          {/* Minimal technical specification footer */}
          <div className="pt-8 sm:pt-10 mt-10 sm:mt-12 border-t border-[#224458] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-xs font-mono text-[#BAC8D0]">
            <div>
              <div className="text-[10px] uppercase text-[#7d95a3]">Reaktionszeit</div>
              <div className="text-white font-medium mt-0.5">Innerhalb 24 Stunden</div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-[#7d95a3]">Teststellung</div>
              <div className="text-white font-medium mt-0.5">Vor-Ort-Pilot möglich</div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-[#7d95a3]">Standortgarantie</div>
              <div className="text-[#087F83] font-medium mt-0.5">100% Bundesrepublik Deutschland</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
