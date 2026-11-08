/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, X, FileText, Check } from 'lucide-react';
import { IndustryItem } from '../types/index.js';

interface IndustriesProps {
  onSelectIndustryForConsultation: (industry: string) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onSelectIndustryForConsultation }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem | null>(null);

  const industries: IndustryItem[] = [
    {
      id: 'steuerberater',
      name: 'Steuerberater',
      description: 'Mandantenwissen und Fristen in Sekunden sicher durchsuchen.',
      icon: 'scales',
      sampleDocs: ['BWA & Jahresabschlüsse', 'Datev-Exportberichte', 'Steuerbescheide & Einsprüche', 'Kommentierte Richtlinien (EStG, UStG)'],
      complianceNotes: 'Vollständige Einhaltung von § 203 StGB (Berufsgeheimnisträger) und berufsrechtlichen Vorgaben der Bundessteuerberaterkammer.',
    },
    {
      id: 'arztpraxen',
      name: 'Arztpraxen',
      description: 'Informationen in medizinischen Dokumenten datenschutzkonform finden.',
      icon: 'stethoscope',
      sampleDocs: ['Arztbriefe & Epikrisen', 'Laborbefunde & Diagnosen', 'Therapie- und Leitlinienberichte', 'Praxishandbuch & QM-Dokumente'],
      complianceNotes: 'Verarbeitung von Patientendaten gemäß DSGVO Art. 9 (Besondere Kategorien personenbezogener Daten) ohne Cloud-Übertragung.',
    },
    {
      id: 'handwerk',
      name: 'Handwerk',
      description: 'Angebote, Normen und technische Unterlagen sofort zur Hand.',
      icon: 'wrench',
      sampleDocs: ['DIN- & VDE-Normen', 'VOB/B Regelwerke', 'Ausschreibungsunterlagen & LV', 'Hersteller-Datenblätter & Montageanleitungen'],
      complianceNotes: 'Schneller Baustellenzugriff über das interne Firmennetzwerk ohne teure Lizenzgebühren pro Monteur oder Meister.',
    },
    {
      id: 'rechtsanwaelte',
      name: 'Rechtsanwälte',
      description: 'Schriftsätze und Akten verlässlich auswerten.',
      icon: 'gavel',
      sampleDocs: ['Umfangreiche Ermittlungsakten', 'Gerichtliche Schriftsätze', 'Gutachten & Zeugenaussagen', 'Vertragswerke & AGB-Analysen'],
      complianceNotes: 'Keine Speicherung im Ausland. Absolute Anwaltsgeheimnis-Sicherheit ohne Drittzugriff nach BRAO.',
    },
    {
      id: 'schulen',
      name: 'Schulen',
      description: 'Verordnungen und interne Regeln schnell beantworten.',
      icon: 'graduation',
      sampleDocs: ['Schulgesetze & Erlasse', 'Interne Prüfungsordnungen', 'Lehrpläne & Förderrichtlinien', 'Sicherheitskonzepte & Hausordnungen'],
      complianceNotes: 'Schutz von Schüler- und Lehrerdaten entsprechend den Vorgaben der Landesdatenschutzbeauftragten für Schulen.',
    },
    {
      id: 'kommunen',
      name: 'Kommunen',
      description: 'Satzungen und Vorgaben für die Verwaltung recherchieren.',
      icon: 'building',
      sampleDocs: ['Gemeindesatzungen & Bebauungspläne', 'Rats- und Ausschussbeschlüsse', 'Verwaltungsvorschriften & Erlasse', 'Bürgeranfragen-Archive'],
      complianceNotes: 'Souveräne Datenhaltung für die öffentliche Hand. Erfüllt Anforderungen des BSI und der Landesverwaltung.',
    },
  ];

  // Custom 1.5px stroke minimal icons
  const renderIcon = (type: string) => {
    switch (type) {
      case 'scales':
        return (
          <svg className="w-7 h-7 text-[#087F83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="3" x2="12" y2="21" />
            <path d="M4 7l8-4 8 4" />
            <path d="M2 13l4-6 4 6" />
            <path d="M14 13l4-6 4 6" />
            <path d="M2 13h8" />
            <path d="M14 13h8" />
            <path d="M10 21h4" />
          </svg>
        );
      case 'stethoscope':
        return (
          <svg className="w-7 h-7 text-[#087F83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 3v5a4.5 4.5 0 0 0 9 0V3" />
            <path d="M9 12.5v3.5a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4V12" />
            <circle cx="18" cy="10" r="2" />
            <line x1="4.5" y1="3" x2="3" y2="3" />
            <line x1="13.5" y1="3" x2="15" y2="3" />
          </svg>
        );
      case 'wrench':
        return (
          <svg className="w-7 h-7 text-[#087F83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        );
      case 'gavel':
        return (
          <svg className="w-7 h-7 text-[#087F83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 13l-7.5 7.5a2.12 2.12 0 1 1-3-3L11 10" />
            <path d="M16 16l6-6" />
            <path d="M8 8l6-6" />
            <path d="M9 7l7 7" />
            <path d="M15 1l7 7" />
          </svg>
        );
      case 'graduation':
        return (
          <svg className="w-7 h-7 text-[#087F83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        );
      case 'building':
      default:
        return (
          <svg className="w-7 h-7 text-[#087F83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="2" y1="21" x2="22" y2="21" />
            <line x1="4" y1="11" x2="4" y2="21" />
            <line x1="9" y1="11" x2="9" y2="21" />
            <line x1="15" y1="11" x2="15" y2="21" />
            <line x1="20" y1="11" x2="20" y2="21" />
            <path d="M2 11l10-7 10 7" />
            <circle cx="12" cy="7" r="1" />
          </svg>
        );
    }
  };

  return (
    <section id="branchen" className="py-14 sm:py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D7E0E4]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-14">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-2 h-2 bg-[#087F83]" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#586B76]">
              FÜR VIELE BRANCHEN
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-sans font-medium text-[#122635] tracking-tight">
            Eine Lösung. Viele Branchen.
          </h2>
          <p className="text-sm sm:text-base text-[#586B76] mt-2 sm:mt-3 leading-relaxed">
            Dieselbe geprüfte Technik, angepasst an die Dokumente und Abläufe Ihrer Branche.
          </p>
        </div>

        {/* 6 Industry Cards Grid (1 col on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="bg-[#F4F7F8] border border-[#D7E0E4] p-5 sm:p-8 flex flex-col justify-between transition-all hover:border-[#087F83] hover:shadow-xs group cursor-pointer active:bg-[#E9F0F2]"
              onClick={() => setSelectedIndustry(ind)}
            >
              <div>
                {/* Custom 1.5px stroke icon */}
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white border border-[#D7E0E4] flex items-center justify-center mb-4 sm:mb-6 group-hover:border-[#087F83] transition-colors">
                  {renderIcon(ind.icon)}
                </div>

                {/* Industry Name */}
                <h3 className="text-lg sm:text-xl font-sans font-semibold text-[#122635] mb-2 tracking-tight">
                  {ind.name}
                </h3>

                {/* One-line description */}
                <p className="text-xs sm:text-sm text-[#586B76] leading-relaxed mb-4 sm:mb-6">
                  {ind.description}
                </p>
              </div>

              {/* Small text link */}
              <div className="pt-3 sm:pt-4 border-t border-[#D7E0E4]/60 flex items-center justify-between min-h-[36px]">
                <span className="text-xs font-mono font-medium text-[#087F83] group-hover:text-[#06676a] flex items-center gap-1.5 transition-colors">
                  <span>Mehr erfahren</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-[#788B95] uppercase">
                  Details
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Industry Detail Modal */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#102A3A]/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white border border-[#D7E0E4] w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#D7E0E4] bg-[#F4F7F8] sticky top-0 z-10">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-6 sm:w-7 h-6 sm:h-7 bg-white border border-[#D7E0E4] flex items-center justify-center shrink-0">
                  {renderIcon(selectedIndustry.icon)}
                </div>
                <h3 className="font-sans font-semibold text-base sm:text-lg text-[#122635] truncate">
                  EIGENKERN für {selectedIndustry.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedIndustry(null)}
                className="text-[#586B76] hover:text-[#122635] p-2 min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
              <p className="text-xs sm:text-sm text-[#122635] leading-relaxed font-medium">
                {selectedIndustry.description}
              </p>

              <div>
                <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#586B76] mb-2">
                  Typisch verarbeitete Dokumentarten:
                </h4>
                <div className="space-y-1.5 sm:space-y-2">
                  {selectedIndustry.sampleDocs.map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#122635] bg-[#F4F7F8] p-2 border border-[#E9F0F2]">
                      <FileText className="w-3.5 h-3.5 text-[#087F83] shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-[#E9F0F2] border border-[#D7E0E4] text-xs text-[#122635] space-y-1">
                <span className="font-mono text-[10px] uppercase text-[#087F83] font-semibold block">
                  Rechtliche Rahmenbedingungen
                </span>
                <p className="text-[#586B76] leading-relaxed text-[11px] sm:text-xs">
                  {selectedIndustry.complianceNotes}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedIndustry(null)}
                  className="px-4 py-2.5 border border-[#D7E0E4] text-xs font-mono text-[#586B76] hover:bg-[#F4F7F8] cursor-pointer text-center min-h-[40px]"
                >
                  Zurück
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const ind = selectedIndustry.name;
                    setSelectedIndustry(null);
                    onSelectIndustryForConsultation(ind);
                  }}
                  className="px-5 py-2.5 bg-[#087F83] hover:bg-[#06676a] text-white text-xs font-sans font-medium flex items-center justify-center gap-2 cursor-pointer min-h-[40px]"
                >
                  <span>Anfrage für {selectedIndustry.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
