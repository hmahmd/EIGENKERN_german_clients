/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types/index.js';

export const Faq: React.FC = () => {
  // First question expanded by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FaqItem[] = [
    {
      question: 'Wo liegen meine Daten?',
      answer:
        'Ihre Daten verlassen niemals Ihre Kontrolle. Bei der lokalen Lösung liegen alle Dokumente, Vektordatenbanken und KI-Modelle auf einem physischen Gerät in Ihren eigenen Büroräumen (On-Premise). Bei der Server-Option wird ein dedizierter Server in einem nach ISO/IEC 27001 zertifizierten deutschen Rechenzentrum betrieben. Es erfolgt keinerlei unkontrollierte Datenübertragung an US-Cloudanbieter oder fremde Server.',
    },
    {
      question: 'Was kostet das?',
      answer:
        'Die Preisstruktur ist transparent und verlässlich kalkulierbar: Sie zahlen eine einmalige Bereitstellung (ab X.XXX €) für das geprüfte Systemgerät, die schlüsselfertige Netzwerkintegration und die Einweisung Ihres Teams. Für kontinuierliche Modell-Updates, Sicherheitspatches und Support steht ein optionaler Monatsservice (XXX € / Monat) zur Verfügung. Es fallen zu keinem Zeitpunkt Gebühren pro gestellte Frage oder pro Nutzer an.',
    },
    {
      question: 'Was ist der Wächter?',
      answer:
        'Der Wächter ist eine eigenentwickelte, patentfähige Hybrid-Technologie. Möchten Sie komplexe Fragestellungen über externe Hochleistungsmodelle berechnen lassen, erstellt das Wächter-Modul auf Ihrer lokalen Hardware zuvor eine pseudonymisierte Schattenkopie Ihrer Dokumente. Reale Klarnamen und geschützte Identitäten werden durch neutrale Platzhalter (z.B. Person A, Datensatz B) ersetzt. Erst die empfangene Antwort wird lokal wieder mit Ihren Echtdaten zusammengeführt. Reale Namen verlassen Ihr Büro nicht.',
    },
    {
      question: 'Welche Dokumente kann die KI lesen?',
      answer:
        'Das System verarbeitet alle gängigen Berufsformate: PDF-Dokumente (inklusive gescannter Akten durch integrierte, lokale OCR-Texterkennung), Microsoft Word, Excel, PowerPoint, E-Mail-Archive (MSG, EML) sowie strukturierte Textdateien. Auch Schnittstellen zu Netzlaufwerken, Kanzleisoftware (z.B. Datev-Exporte, RA-Micro) und Praxisverwaltungssystemen können nahtlos angebunden werden.',
    },
    {
      question: 'Wie lange dauert die Einrichtung?',
      answer:
        'Die betriebsbereite Integration vor Ort erfolgt typischerweise innerhalb weniger Stunden. Unsere Techniker konfigurieren die Netzwerkeinstellungen, binden die gewünschten Dokumentenordner ein und initialisieren die sichere Verschlüsselung. Nach einer rund 45-minütigen Praxisschulung kann Ihre gesamte Kanzlei oder Praxis unmittelbar mit der Recherche beginnen.',
    },
    {
      question: 'Brauche ich IT-Kenntnisse?',
      answer:
        'Keinerlei Vorkenntnisse erforderlich. Die Nutzung erfolgt über eine selbsterklärende, aufgeräumte Weboberfläche in Ihrem normalen Browser. Die Hardware arbeitet lautlos, wartungsarm und führt interne Prüfroutinen automatisch aus. Sollten Sie Fragen haben, steht unser deutschsprachiger technischer Support per Telefon und Fernwartung zur Verfügung.',
    },
  ];

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D7E0E4]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#087F83]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#586B76]">
              FRAGEN & ANTWORTEN
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-sans font-medium text-[#122635] tracking-tight">
            Häufige Fragen
          </h2>
          <p className="text-sm sm:text-base text-[#586B76] mt-3 leading-relaxed">
            Ihre Fragen zur lokalen KI und Wächter-Technologie.
          </p>
        </div>

        {/* Elegant Accordion */}
        <div className="max-w-3xl border-t border-[#D7E0E4]">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="border-b border-[#D7E0E4] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  className="w-full py-4 sm:py-6 min-h-[48px] text-left flex items-center justify-between gap-4 cursor-pointer hover:text-[#087F83] transition-colors group"
                >
                  <span className="font-sans font-medium text-base sm:text-lg text-[#122635] group-hover:text-[#087F83] transition-colors">
                    {item.question}
                  </span>
                  
                  <div className={`w-8 h-8 rounded-none border border-[#D7E0E4] flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#087F83] text-white border-[#087F83]' : 'bg-[#F4F7F8] text-[#586B76] group-hover:border-[#087F83]'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[1.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[1.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-4 sm:pr-12 text-sm text-[#586B76] leading-relaxed font-sans animate-in fade-in duration-150">
                    <p className="text-pretty">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
