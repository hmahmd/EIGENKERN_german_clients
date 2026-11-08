/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, MapPin, FileCheck2 } from 'lucide-react';

export const TrustSecurity: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-[#F4F7F8] border-b border-[#D7E0E4]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#087F83]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#586B76]">
              SICHERHEIT & COMPLIANCE
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-sans font-medium text-[#122635] tracking-tight">
            Gebaut für Berufe mit Schweigepflicht
          </h2>
          <p className="text-sm sm:text-base text-[#586B76] mt-3 leading-relaxed">
            Konzipiert für Berufsgeheimnisträger nach § 203 StGB und Organisationen mit höchsten Anforderungen an Vertraulichkeit und Datenschutz.
          </p>
        </div>

        {/* Three Strong Trust Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* 01 — DSGVO-konform */}
          <div className="bg-white border border-[#D7E0E4] p-5 sm:p-8 flex flex-col justify-between hover:border-[#087F83] transition-colors shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E9F0F2]">
                <span className="font-mono text-xs font-semibold text-[#586B76] uppercase tracking-wider">
                  Säule 01
                </span>
                <span className="text-[11px] font-mono text-[#087F83] bg-[#E6F3F4] px-2 py-0.5">
                  Art. 28 DSGVO
                </span>
              </div>

              <div className="w-12 h-12 bg-[#F4F7F8] border border-[#D7E0E4] flex items-center justify-center mb-6 text-[#087F83]">
                <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
              </div>

              <h3 className="text-xl font-sans font-semibold text-[#122635] mb-3 tracking-tight">
                01 — DSGVO-konform
              </h3>

              <p className="text-sm text-[#586B76] leading-relaxed">
                Verarbeitung ohne unkontrollierte Datenübertragung. Ihre Anforderungen bleiben im Mittelpunkt.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E9F0F2] text-xs font-mono text-[#586B76] space-y-1">
              <div>Keine US-Cloud-Abhängigkeit</div>
              <div className="text-[11px] text-[#788B95]">Vollständig auditierbare Verarbeitungsprotokolle</div>
            </div>
          </div>

          {/* 02 — Daten bleiben in Deutschland */}
          <div className="bg-white border border-[#D7E0E4] p-5 sm:p-8 flex flex-col justify-between hover:border-[#087F83] transition-colors shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E9F0F2]">
                <span className="font-mono text-xs font-semibold text-[#586B76] uppercase tracking-wider">
                  Säule 02
                </span>
                <span className="text-[11px] font-mono text-[#122635] bg-[#E9F0F2] px-2 py-0.5">
                  Standortgarantie
                </span>
              </div>

              <div className="w-12 h-12 bg-[#F4F7F8] border border-[#D7E0E4] flex items-center justify-center mb-6 text-[#087F83]">
                <MapPin className="w-6 h-6 stroke-[1.5]" />
              </div>

              <h3 className="text-xl font-sans font-semibold text-[#122635] mb-3 tracking-tight">
                02 — Daten bleiben in Deutschland
              </h3>

              <p className="text-sm text-[#586B76] leading-relaxed">
                Ihr lokaler Betrieb oder ein dedizierter Server in einem deutschen Rechenzentrum.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E9F0F2] text-xs font-mono text-[#586B76] space-y-1">
              <div>Physischer Gerätestandort: Ihr Büro</div>
              <div className="text-[11px] text-[#788B95]">Optional: ISO/IEC 27001 zertifiziertes RZ in Frankfurt/Berlin</div>
            </div>
          </div>

          {/* 03 — Quellen nachvollziehbar */}
          <div className="bg-white border border-[#D7E0E4] p-5 sm:p-8 flex flex-col justify-between hover:border-[#087F83] transition-colors shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E9F0F2]">
                <span className="font-mono text-xs font-semibold text-[#586B76] uppercase tracking-wider">
                  Säule 03
                </span>
                <span className="text-[11px] font-mono text-[#122635] bg-[#E9F0F2] px-2 py-0.5">
                  Verifizierbar
                </span>
              </div>

              <div className="w-12 h-12 bg-[#F4F7F8] border border-[#D7E0E4] flex items-center justify-center mb-6 text-[#087F83]">
                <FileCheck2 className="w-6 h-6 stroke-[1.5]" />
              </div>

              <h3 className="text-xl font-sans font-semibold text-[#122635] mb-3 tracking-tight">
                03 — Quellen nachvollziehbar
              </h3>

              <p className="text-sm text-[#586B76] leading-relaxed">
                Jede Antwort nennt Dokument, Seite und Abschnitt. Nichts bleibt unbelegt.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E9F0F2] text-xs font-mono text-[#586B76] space-y-1">
              <div>1-Klick-Überprüfung im Original</div>
              <div className="text-[11px] text-[#788B95]">Verlässliche Grundlage für Haftung und Beratung</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
