/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Lock, Cloud, ShieldCheck, RefreshCw, CheckCircle2, FileText, ArrowDown } from 'lucide-react';
import { pseudonymizeDocument, restoreIdentities, DEFAULT_WAECHTER_MAPPINGS } from '../utils/waechter.js';

interface WaechterViewProps {
  onOpenConsultation: () => void;
}

export const WaechterView: React.FC<WaechterViewProps> = ({ onOpenConsultation }) => {
  const [selectedPreset, setSelectedPreset] = useState<'tax' | 'medical' | 'legal'>('tax');
  const [inputText, setInputText] = useState(
    'Akte Dr. Müller: Steuerliche Prüfung von Mandantendaten und Interne Informationen gemäß § 35a EStG.'
  );

  const presets = {
    tax: 'Akte Dr. Müller: Steuerliche Prüfung von Mandantendaten und Interne Informationen gemäß § 35a EStG.',
    medical: 'Patientenakte Dr. med. Thomas Weber: Patientendaten und Diagnose: Chronische Lumbalgie.',
    legal: 'Schriftsatz Kanzlei Schmidt & Partner: Aktenzeichen: 42 O 118/25 mit Zeugenvernehmung Dr. Müller.',
  };

  const handlePresetChange = (type: 'tax' | 'medical' | 'legal') => {
    setSelectedPreset(type);
    setInputText(presets[type]);
  };

  const transformation = pseudonymizeDocument(inputText);
  const cloudGeneratedAnswer = `Empfehlung für ${transformation.pseudonymized.includes('Person A') ? 'Person A' : 'den Datensatz'}: Alle Nachweise zu ${transformation.pseudonymized.includes('Datensatz B') ? 'Datensatz B' : 'den Unterlagen'} sind formal ordnungsgemäß erbracht.`;
  const restoredAnswer = restoreIdentities(cloudGeneratedAnswer, transformation.mappings);

  return (
    <div className="min-h-screen bg-[#F4F7F8] py-8 sm:py-12 px-4 sm:px-6 lg:px-16 font-sans">
      <div className="max-w-[1400px] mx-auto space-y-8 sm:space-y-12">
        
        {/* Header */}
        <div className="border-b border-[#D7E0E4] pb-6 sm:pb-8 max-w-4xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#087F83]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#087F83] font-semibold">
              TECHNOLOGIE-ARCHITEKTUR
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-sans font-medium text-[#122635] tracking-tight leading-tight">
            Das Wächter-Prinzip im Detail
          </h1>
          <p className="text-sm sm:text-base text-[#586B76] mt-3 leading-relaxed">
            Wie die EIGENKERN Hybrid-Technologie reale Identitäten schützt: Die Cloud-KI verarbeitet ausschließlich eine pseudonymisierte Schattenkopie. Reale Namen verlassen Ihre Umgebung nicht.
          </p>
        </div>

        {/* PRIMARY VISUAL ELEMENT: The Master Technical Flow Diagram */}
        <div className="bg-white border-2 border-[#087F83] p-4 sm:p-6 lg:p-10 shadow-md relative overflow-hidden">
          
          {/* Top Boundary Bar indicating Local vs Cloud */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 pb-4 sm:pb-6 mb-6 sm:mb-8 border-b border-[#D7E0E4] text-xs font-mono">
            
            {/* Local Security Zone (Cols 1 to 6) */}
            <div className="sm:col-span-2 lg:col-span-6 bg-[#E6F3F4] border border-[#087F83]/40 p-3 sm:p-3.5 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-[#102A3A]">
                <Lock className="w-4 h-4 text-[#087F83] shrink-0" />
                <span className="font-semibold uppercase tracking-wider text-[11px] sm:text-[12px]">
                  Lokale Sicherheitszone (Ihr Büro / Server DE)
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-[#087F83] font-bold bg-white px-2 py-0.5 border border-[#087F83]/30">
                STRENG VERTRAULICH
              </span>
            </div>

            {/* External Cloud Ingestion Zone (Cols 7 to 9) */}
            <div className="lg:col-span-3 bg-[#102A3A] text-white p-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-[#087F83]" />
                <span className="font-semibold uppercase tracking-wider text-[12px]">
                  Cloud-Inferenz
                </span>
              </div>
              <span className="text-[10px] text-[#BAC8D0] bg-[#16384d] px-2 py-0.5">
                NUR SCHATTENKOPIE
              </span>
            </div>

            {/* Local Return Zone (Cols 10 to 12) */}
            <div className="lg:col-span-3 bg-[#E6F3F4] border border-[#087F83]/40 p-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#102A3A]">
                <ShieldCheck className="w-4 h-4 text-[#087F83]" />
                <span className="font-semibold uppercase tracking-wider text-[12px]">
                  Lokale Rückzuordnung
                </span>
              </div>
              <span className="text-[11px] text-[#087F83] font-bold bg-white px-2 py-0.5 border border-[#087F83]/30">
                KLARNAMEN
              </span>
            </div>

          </div>

          {/* Four Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* STAGE 01 — ORIGINAL */}
            <div className="bg-[#F4F7F8] border border-[#D7E0E4] p-6 flex flex-col justify-between relative">
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-[#586B76] font-bold">01 / ORIGINAL</span>
                  <span className="text-[10px] text-[#122635] bg-white border border-[#D7E0E4] px-1.5 py-0.5">
                    LOKALES NETZ
                  </span>
                </div>

                <h3 className="text-xl font-sans font-semibold text-[#122635] mb-2">
                  Originaldokument
                </h3>

                <p className="text-xs text-[#586B76] leading-relaxed mb-4">
                  Enthält schutzbedürftige Echtnamen, sensible Mandanten- oder Patientendaten.
                </p>

                {/* Excerpt Box */}
                <div className="bg-white border border-red-200 p-4 font-mono text-xs space-y-2 text-[#122635] shadow-xs">
                  <div className="text-[10px] uppercase text-red-600 font-semibold border-b border-red-100 pb-1 flex justify-between">
                    <span>Echtdaten</span>
                    <span>§ 203 StGB</span>
                  </div>
                  <div className="text-red-700 font-bold bg-red-50 p-1.5 border border-red-200">
                    "Dr. Müller"
                  </div>
                  <div className="text-red-700 font-bold bg-red-50 p-1.5 border border-red-200">
                    "Patientendaten"
                  </div>
                  <div className="text-red-700 font-bold bg-red-50 p-1.5 border border-red-200">
                    "Interne Informationen"
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-[#D7E0E4] text-[11px] font-mono text-[#586B76]">
                Klartext verlässt den lokalen Server zu keinem Zeitpunkt.
              </div>
            </div>

            {/* STAGE 02 — SCHATTENKOPIE */}
            <div className="bg-[#E6F3F4]/70 border-2 border-[#087F83] p-6 flex flex-col justify-between relative shadow-xs">
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-[#087F83] font-bold">02 / TRANSFORMATION</span>
                  <span className="text-[10px] text-[#087F83] bg-white border border-[#087F83]/30 px-1.5 py-0.5 font-bold">
                    WÄCHTER MODUL
                  </span>
                </div>

                <h3 className="text-xl font-sans font-semibold text-[#122635] mb-2">
                  Schattenkopie
                </h3>

                <p className="text-xs text-[#586B76] leading-relaxed mb-4">
                  Der lokale Wächter ersetzt alle sensiblen Entitäten durch kryptografisch isolierte Platzhalter.
                </p>

                {/* Transformed Box */}
                <div className="bg-white border border-[#087F83]/40 p-4 font-mono text-xs space-y-2 text-[#122635] shadow-xs">
                  <div className="text-[10px] uppercase text-[#087F83] font-semibold border-b border-[#087F83]/20 pb-1 flex justify-between">
                    <span>Pseudonymisiert</span>
                    <span>Token-Mapping</span>
                  </div>
                  <div className="text-[#087F83] font-bold bg-[#E6F3F4] p-1.5 border border-[#087F83]/30">
                    "Person A"
                  </div>
                  <div className="text-[#087F83] font-bold bg-[#E6F3F4] p-1.5 border border-[#087F83]/30">
                    "Datensatz B"
                  </div>
                  <div className="text-[#087F83] font-bold bg-[#E6F3F4] p-1.5 border border-[#087F83]/30">
                    "Information C"
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-[#087F83]/20 text-[11px] font-mono text-[#087F83] font-medium">
                Mapping-Schlüssel verbleibt in Ihrem lokalen Arbeitsspeicher.
              </div>
            </div>

            {/* STAGE 03 — CLOUD-KI */}
            <div className="bg-[#102A3A] border border-[#224458] text-white p-6 flex flex-col justify-between relative">
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-[#BAC8D0] font-bold">03 / INFERENZ</span>
                  <span className="text-[10px] text-white bg-[#16384d] px-1.5 py-0.5">
                    EXTERNER RECHNER
                  </span>
                </div>

                <h3 className="text-xl font-sans font-semibold text-white mb-2">
                  Cloud-KI
                </h3>

                <p className="text-xs text-[#BAC8D0] leading-relaxed mb-4">
                  Das externe Sprachmodell verarbeitet nur die entkernten Platzhalter und semantischen Zusammenhänge.
                </p>

                {/* Cloud Box */}
                <div className="bg-[#0b1b25] border border-[#224458] p-4 font-mono text-xs space-y-2 text-[#BAC8D0]">
                  <div className="text-[10px] uppercase text-[#087F83] font-semibold border-b border-[#224458] pb-1 flex justify-between">
                    <span>Inferenz-Sitzung</span>
                    <span>Zero Klarnamen</span>
                  </div>
                  <div className="text-white text-xs">
                    Input: Person A, Datensatz B
                  </div>
                  <div className="text-[#087F83] text-[11px]">
                    → Sprachverständnis & Logik
                  </div>
                  <div className="text-[#BAC8D0] text-xs">
                    Output: Analyse für Person A
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-[#224458] text-[11px] font-mono text-[#BAC8D0]">
                Kein Training der KI mit Ihren vertraulichen Mandantendaten.
              </div>
            </div>

            {/* STAGE 04 — ANTWORT MIT ECHTEN NAMEN */}
            <div className="bg-[#F4F7F8] border border-[#D7E0E4] p-6 flex flex-col justify-between relative hover:border-[#087F83] transition-colors">
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-[#586B76] font-bold">04 / RESTORIERUNG</span>
                  <span className="text-[10px] text-[#087F83] bg-white border border-[#D7E0E4] px-1.5 py-0.5 font-bold">
                    LOKALES ENDGERÄT
                  </span>
                </div>

                <h3 className="text-xl font-sans font-semibold text-[#122635] mb-2">
                  Antwort mit echten Namen
                </h3>

                <p className="text-xs text-[#586B76] leading-relaxed mb-4">
                  Der lokale Wächter tauscht vor der Anzeige alle Platzhalter wieder gegen die Originaldaten aus.
                </p>

                {/* Final Restored Box */}
                <div className="bg-white border border-emerald-300 p-4 font-mono text-xs space-y-2 text-[#122635] shadow-xs">
                  <div className="text-[10px] uppercase text-[#087F83] font-semibold border-b border-emerald-100 pb-1 flex justify-between">
                    <span>Für Sie lesbar</span>
                    <span>Reale Identität</span>
                  </div>
                  <div className="text-[#102A3A] font-bold bg-emerald-50 p-1.5 border border-emerald-200">
                    "Dr. Müller ..."
                  </div>
                  <div className="text-xs text-[#586B76]">
                    Patientendaten zugeordnet
                  </div>
                  <div className="text-[11px] text-[#087F83] font-medium">
                    Beleg: Seite 4 · § 35a EStG
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-[#D7E0E4] text-[11px] font-mono text-[#122635] font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#087F83]" />
                <span>Nahtlos für Kanzlei & Praxis</span>
              </div>
            </div>

          </div>

          {/* Bottom Technical Guarantee Stamp */}
          <div className="mt-8 pt-6 border-t border-[#D7E0E4] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-3 text-[#122635]">
              <span className="w-2.5 h-2.5 bg-[#087F83]" />
              <span className="font-bold text-sm tracking-tight">
                Reale Identitäten verlassen Ihre Umgebung nicht.
              </span>
            </div>
            <div className="text-[#586B76]">
              Zertifizierbare Trennung nach BSI IT-Grundschutz & DSGVO Art. 32
            </div>
          </div>

        </div>

        {/* INTERACTIVE PSEUDONYMIZATION SANDBOX */}
        <section className="bg-white border border-[#D7E0E4] p-4 sm:p-8 space-y-6">
          <div className="border-b border-[#E9F0F2] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#087F83] uppercase tracking-wider font-semibold">
                INTERAKTIVER TESTSTAND
              </span>
              <h2 className="text-xl sm:text-2xl font-sans font-semibold text-[#122635] mt-1">
                Live-Datentransformation testen
              </h2>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-[#586B76] mr-1">Beispiel wählen:</span>
              <button
                onClick={() => handlePresetChange('tax')}
                className={`px-2.5 py-1.5 border transition-colors cursor-pointer min-h-[36px] ${
                  selectedPreset === 'tax' ? 'bg-[#087F83] text-white border-[#087F83]' : 'bg-[#F4F7F8] text-[#122635] border-[#D7E0E4]'
                }`}
              >
                Steuerrecht
              </button>
              <button
                onClick={() => handlePresetChange('medical')}
                className={`px-2.5 py-1.5 border transition-colors cursor-pointer min-h-[36px] ${
                  selectedPreset === 'medical' ? 'bg-[#087F83] text-white border-[#087F83]' : 'bg-[#F4F7F8] text-[#122635] border-[#D7E0E4]'
                }`}
              >
                Medizin
              </button>
              <button
                onClick={() => handlePresetChange('legal')}
                className={`px-2.5 py-1.5 border transition-colors cursor-pointer min-h-[36px] ${
                  selectedPreset === 'legal' ? 'bg-[#087F83] text-white border-[#087F83]' : 'bg-[#F4F7F8] text-[#122635] border-[#D7E0E4]'
                }`}
              >
                Kanzlei
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Step 1: Local Input */}
            <div className="space-y-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-[#586B76]">
                1. Lokale Original-Eingabe (Ihr Gerät)
              </label>
              <textarea
                rows={4}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full p-3 font-mono text-xs bg-[#F4F7F8] border border-[#D7E0E4] text-[#122635] focus:outline-hidden focus:border-[#087F83]"
              />
              <div className="text-[11px] font-mono text-[#586B76]">
                Enthält Klarnamen wie Dr. Müller, Aktenzeichen etc.
              </div>
            </div>

            {/* Step 2: Shadow Copy (Sent to Cloud) */}
            <div className="space-y-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-[#087F83] font-semibold">
                2. Schattenkopie (An Cloud übermittelt)
              </label>
              <div className="p-3 font-mono text-xs bg-[#E6F3F4] border border-[#087F83]/40 text-[#122635] min-h-[96px] leading-relaxed break-words">
                {transformation.pseudonymized}
              </div>
              <div className="text-[11px] font-mono text-[#087F83]">
                {transformation.mappings.length} sensitive Entitäten maskiert
              </div>
            </div>

            {/* Step 3: Local Restored Output */}
            <div className="space-y-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-[#122635] font-semibold">
                3. Lokale Anzeige (Restorierte Antwort)
              </label>
              <div className="p-3 font-mono text-xs bg-[#F4F7F8] border border-[#D7E0E4] text-[#122635] min-h-[96px] leading-relaxed break-words">
                {restoredAnswer}
              </div>
              <div className="text-[11px] font-mono text-[#087F83] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Echtnamen nahtlos für den Berater wiederhergestellt</span>
              </div>
            </div>

          </div>

          {/* Action CTA */}
          <div className="pt-6 border-t border-[#E9F0F2] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <span className="text-xs text-[#586B76]">
              Interessiert an der Wächter-Technologie für Ihre Organisation?
            </span>
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-6 py-3 min-h-[44px] bg-[#087F83] hover:bg-[#06676a] text-white text-xs font-medium font-sans flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Wächter-Beratung anfragen</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
