/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { EigenkernLogo } from '../components/EigenkernLogo.js';
import { ArrowRight, Check, ShieldCheck, HardDrive, FileText, Lock, Copy } from 'lucide-react';

export const StyleGuideView: React.FC = () => {
  const [copiedHex, setCopiedHex] = React.useState<string | null>(null);

  const colors = [
    { name: 'Canvas Background', hex: '#F4F7F8', desc: 'Dominant 60% matte technical canvas', lightText: false },
    { name: 'Secondary Surface', hex: '#FFFFFF', desc: 'Elevated clean card surfaces', lightText: false },
    { name: 'Light Technical Surface', hex: '#E9F0F2', desc: 'Micro-containers & toolbars', lightText: false },
    { name: 'Fine Borders', hex: '#D7E0E4', desc: '1px hairline dividers & outlines', lightText: false },
    { name: 'Main Text', hex: '#122635', desc: 'High contrast display & body copy', lightText: true },
    { name: 'Secondary Text', hex: '#586B76', desc: 'Editorial metadata & descriptions', lightText: true },
    { name: 'Deep Ink Blue', hex: '#102A3A', desc: 'Footer & high-impact anchor zones', lightText: true },
    { name: 'Petrol Accent', hex: '#087F83', desc: 'Primary CTAs, status & active states', lightText: true },
  ];

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F4F7F8] py-8 sm:py-12 px-4 sm:px-6 lg:px-16 font-sans">
      <div className="max-w-[1280px] mx-auto space-y-10 sm:space-y-16">
        
        {/* Style Guide Header */}
        <div className="border-b border-[#D7E0E4] pb-6 sm:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#087F83]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#586B76]">
                EIGENKERN CORPORATE DESIGN SYSTEM
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-sans font-medium text-[#122635] tracking-tight">
              Design System & Visual Guidelines
            </h1>
            <p className="text-xs sm:text-sm text-[#586B76] mt-2 max-w-xl">
              German Industrial Engineering meets Modern Technical Documentation. Verbindliche Spezifikationen für Benutzeroberflächen und Medien.
            </p>
          </div>

          <div className="bg-white border border-[#D7E0E4] p-3 text-xs font-mono text-[#586B76] self-start md:self-auto">
            <div>Version: 2.4.0 (2026)</div>
            <div className="text-[#087F83] font-medium">Status: Freigegeben für Produktion</div>
          </div>
        </div>

        {/* 1. TYPOGRAPHY SPECIMENS */}
        <section className="bg-white border border-[#D7E0E4] p-4 sm:p-8 space-y-6 sm:space-y-8">
          <div className="border-b border-[#E9F0F2] pb-4 flex items-center justify-between">
            <div>
              <span className="font-mono text-xs text-[#087F83] uppercase tracking-wider font-semibold">01. TYPOGRAFIE</span>
              <h2 className="text-2xl font-sans font-semibold text-[#122635] mt-1">
                IBM Plex Sans & IBM Plex Mono (Self-Hosted)
              </h2>
            </div>
            <span className="text-xs font-mono text-[#586B76] bg-[#F4F7F8] px-2.5 py-1">
              Open Font License (OFL) · Kein CDN
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* IBM Plex Sans */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#586B76]">
                Primary Display & Interface: IBM Plex Sans
              </div>
              <div className="space-y-3 p-5 bg-[#F4F7F8] border border-[#D7E0E4]">
                <div>
                  <div className="text-xs text-[#586B76] font-mono">Regular 400</div>
                  <div className="text-2xl font-normal text-[#122635]">Ihre eigene KI. In Ihrem Haus.</div>
                </div>
                <div>
                  <div className="text-xs text-[#586B76] font-mono">Medium 500</div>
                  <div className="text-2xl font-medium text-[#122635]">Ihre eigene KI. In Ihrem Haus.</div>
                </div>
                <div>
                  <div className="text-xs text-[#586B76] font-mono">SemiBold 600</div>
                  <div className="text-2xl font-semibold text-[#122635]">Ihre eigene KI. In Ihrem Haus.</div>
                </div>
              </div>
              <p className="text-xs text-[#586B76] leading-relaxed">
                Verwendet für alle Überschriften, Fließtexte, Navigationslinks und Schaltflächen. Klare, sachliche Formen ohne dekorative Manierismen.
              </p>
            </div>

            {/* IBM Plex Mono */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#586B76]">
                Technical Annotation & Data: IBM Plex Mono
              </div>
              <div className="space-y-3 p-5 bg-[#102A3A] border border-[#224458] text-white font-mono">
                <div>
                  <div className="text-[11px] text-[#BAC8D0]">STATUS / TELEMETRIE</div>
                  <div className="text-lg text-[#087F83] font-medium">STANDORT: IHR BÜRO, DEUTSCHLAND</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#BAC8D0]">TABULAR NUMERALS</div>
                  <div className="text-xl tabular-nums">0 € pro Frage · 100% DSGVO-ISOLIERT</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#BAC8D0]">CODE & BELEGE</div>
                  <div className="text-xs text-[#BAC8D0]">Quelle: Mandantenhandbuch_2026.pdf · S. 4 § 35a</div>
                </div>
              </div>
              <p className="text-xs text-[#586B76] leading-relaxed">
                Verwendet für Metadaten, technische Anmerkungen, Statusindikatoren, Tabellenziffern und Systemparameter.
              </p>
            </div>
          </div>

          {/* Heading Scale Hierarchy */}
          <div className="pt-6 border-t border-[#E9F0F2] space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#586B76]">
              Hierarchie & Skalierungsstufen
            </h3>
            <div className="space-y-4 font-sans">
              <div className="flex items-baseline justify-between border-b border-[#E9F0F2] pb-2">
                <span className="text-3xl font-medium text-[#122635]">Hero Headline (H1, 48–56px, clamp)</span>
                <span className="text-xs font-mono text-[#586B76]">clamp(2.5rem, 4vw, 3.5rem)</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-[#E9F0F2] pb-2">
                <span className="text-2xl font-medium text-[#122635]">Section Headline (H2, 32–36px)</span>
                <span className="text-xs font-mono text-[#586B76]">text-3xl sm:text-4xl</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-[#E9F0F2] pb-2">
                <span className="text-xl font-semibold text-[#122635]">Card Title (H3, 20–24px)</span>
                <span className="text-xs font-mono text-[#586B76]">text-xl font-semibold</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-[#E9F0F2] pb-2">
                <span className="text-base text-[#122635]">Standard Body Copy (16px, line-height 1.6)</span>
                <span className="text-xs font-mono text-[#586B76]">text-base text-[#586B76]</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-mono text-[#586B76]">Technical Micro-Annotation (11–12px)</span>
                <span className="text-xs font-mono text-[#586B76]">text-xs font-mono uppercase</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. COLOR PALETTE WITH EXACT HEX CODES */}
        <section className="bg-white border border-[#D7E0E4] p-4 sm:p-8 space-y-6">
          <div className="border-b border-[#E9F0F2] pb-4">
            <span className="font-mono text-xs text-[#087F83] uppercase tracking-wider font-semibold">02. FARBPALETTE</span>
            <h2 className="text-xl sm:text-2xl font-sans font-semibold text-[#122635] mt-1">
              Exakte Hexadezimal-Farbwerte
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {colors.map((c) => (
              <div 
                key={c.hex} 
                onClick={() => copyToClipboard(c.hex)}
                className="border border-[#D7E0E4] p-4 flex flex-col justify-between cursor-pointer hover:border-[#087F83] transition-colors group relative"
              >
                <div 
                  className="w-full h-16 border border-black/10 mb-3 flex items-end justify-end p-2"
                  style={{ backgroundColor: c.hex }}
                >
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 ${c.lightText ? 'text-white bg-black/30' : 'text-black bg-white/70'}`}>
                    {c.hex}
                  </span>
                </div>

                <div>
                  <div className="font-sans font-semibold text-sm text-[#122635] flex items-center justify-between">
                    <span>{c.name}</span>
                    <Copy className="w-3.5 h-3.5 text-[#586B76] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="font-mono text-xs text-[#087F83] mt-0.5">{c.hex}</div>
                  <p className="text-xs text-[#586B76] mt-1.5 leading-snug">{c.desc}</p>
                </div>

                {copiedHex === c.hex && (
                  <div className="absolute top-2 right-2 bg-[#087F83] text-white text-[10px] font-mono px-2 py-0.5 shadow-sm">
                    Kopiert!
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 3. BUTTON STATES */}
        <section className="bg-white border border-[#D7E0E4] p-4 sm:p-8 space-y-6">
          <div className="border-b border-[#E9F0F2] pb-4">
            <span className="font-mono text-xs text-[#087F83] uppercase tracking-wider font-semibold">03. SCHALTFLÄCHEN</span>
            <h2 className="text-xl sm:text-2xl font-sans font-semibold text-[#122635] mt-1">
              Button-Zustände (Primary, Secondary, Disabled)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Primary Button */}
            <div className="p-4 sm:p-5 bg-[#F4F7F8] border border-[#D7E0E4] space-y-3">
              <span className="font-mono text-xs text-[#586B76] uppercase">Primary CTA</span>
              <div>
                <button className="px-5 py-3 min-h-[44px] bg-[#087F83] hover:bg-[#06676a] text-white text-sm font-medium font-sans flex items-center gap-2 cursor-pointer shadow-xs">
                  <span>Beratung anfragen</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs font-mono text-[#586B76]">
                Background: #087F83 · Hover: #06676a · Radius: 0px / 4px
              </p>
            </div>

            {/* Secondary Button */}
            <div className="p-4 sm:p-5 bg-[#F4F7F8] border border-[#D7E0E4] space-y-3">
              <span className="font-mono text-xs text-[#586B76] uppercase">Secondary Action</span>
              <div>
                <button className="px-5 py-3 min-h-[44px] bg-white hover:bg-[#E9F0F2] text-[#122635] border border-[#D7E0E4] text-sm font-medium font-sans flex items-center gap-2 cursor-pointer">
                  <span>So funktioniert's</span>
                </button>
              </div>
              <p className="text-xs font-mono text-[#586B76]">
                Background: #FFFFFF · Border: #D7E0E4 · Text: #122635
              </p>
            </div>

            {/* Disabled State */}
            <div className="p-4 sm:p-5 bg-[#F4F7F8] border border-[#D7E0E4] space-y-3">
              <span className="font-mono text-xs text-[#586B76] uppercase">Disabled State</span>
              <div>
                <button disabled className="px-5 py-3 min-h-[44px] bg-[#D7E0E4] text-[#788B95] text-sm font-medium font-sans flex items-center gap-2 cursor-not-allowed">
                  <span>Nicht verfügbar</span>
                </button>
              </div>
              <p className="text-xs font-mono text-[#586B76]">
                Background: #D7E0E4 · Text: #788B95 · Cursor: not-allowed
              </p>
            </div>
          </div>
        </section>

        {/* 4. CARD EXAMPLES & ANNOTATIONS */}
        <section className="bg-white border border-[#D7E0E4] p-4 sm:p-8 space-y-6">
          <div className="border-b border-[#E9F0F2] pb-4">
            <span className="font-mono text-xs text-[#087F83] uppercase tracking-wider font-semibold">04. KARTEN-LAYOUTS</span>
            <h2 className="text-2xl font-sans font-semibold text-[#122635] mt-1">
              Standardkarte & Wächter-Akzentkarte
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Primary Card */}
            <div className="bg-[#F4F7F8] border border-[#D7E0E4] p-6 space-y-3">
              <div className="flex justify-between text-xs font-mono text-[#586B76]">
                <span>STANDARDFORM</span>
                <span>1px BORDER #D7E0E4</span>
              </div>
              <h3 className="font-sans font-semibold text-lg text-[#122635]">
                Lokal im Büro
              </h3>
              <p className="text-xs text-[#586B76] leading-relaxed">
                Vollständige Datenkontrolle auf physischem Gerät vor Ort. Keine unkontrollierten Datenübertragungen.
              </p>
              <div className="pt-3 border-t border-[#D7E0E4] text-xs font-mono text-[#087F83]">
                Mehr erfahren →
              </div>
            </div>

            {/* Hybrid Accent Card (Petrol subtle outline) */}
            <div className="bg-white border-2 border-[#087F83] p-6 space-y-3 shadow-xs">
              <div className="flex justify-between text-xs font-mono text-[#087F83] font-semibold">
                <span>HYBRID MIT WÄCHTER</span>
                <span className="bg-[#E6F3F4] px-2 py-0.5">EMPFOHLEN</span>
              </div>
              <h3 className="font-sans font-semibold text-lg text-[#122635]">
                Pseudonymisierte Cloud-KI
              </h3>
              <p className="text-xs text-[#586B76] leading-relaxed">
                Schattenkopie schützt alle realen Identitäten. Rückzuordnung erfolgt ausschließlich lokal.
              </p>
              <div className="pt-3 border-t border-[#087F83]/20 text-xs font-mono text-[#087F83]">
                Architektur prüfen →
              </div>
            </div>
          </div>
        </section>

        {/* 5. CUSTOM 1.5PX LINE ICONS & DIVIDERS */}
        <section className="bg-white border border-[#D7E0E4] p-8 space-y-6">
          <div className="border-b border-[#E9F0F2] pb-4">
            <span className="font-mono text-xs text-[#087F83] uppercase tracking-wider font-semibold">05. ICONS & LINIEN</span>
            <h2 className="text-2xl font-sans font-semibold text-[#122635] mt-1">
              Präzise 1.5px Konturlinien
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="p-4 bg-[#F4F7F8] border border-[#D7E0E4] text-center space-y-2">
              <HardDrive className="w-8 h-8 text-[#087F83] mx-auto stroke-[1.5]" />
              <div className="text-xs font-mono text-[#122635]">Hardware / On-Prem</div>
            </div>
            <div className="p-4 bg-[#F4F7F8] border border-[#D7E0E4] text-center space-y-2">
              <ShieldCheck className="w-8 h-8 text-[#087F83] mx-auto stroke-[1.5]" />
              <div className="text-xs font-mono text-[#122635]">Wächter-Schutz</div>
            </div>
            <div className="p-4 bg-[#F4F7F8] border border-[#D7E0E4] text-center space-y-2">
              <FileText className="w-8 h-8 text-[#087F83] mx-auto stroke-[1.5]" />
              <div className="text-xs font-mono text-[#122635]">Revisionssichere Belege</div>
            </div>
            <div className="p-4 bg-[#F4F7F8] border border-[#D7E0E4] text-center space-y-2">
              <Lock className="w-8 h-8 text-[#087F83] mx-auto stroke-[1.5]" />
              <div className="text-xs font-mono text-[#122635]">§ 203 StGB Isolation</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
