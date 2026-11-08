/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';
import { validateInquiryForm, InquiryFormData } from '../utils/waechter.js';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultIndustry?: string;
  defaultDeployment?: 'local' | 'server' | 'hybrid';
}

export const ConsultationModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  defaultIndustry = '',
  defaultDeployment = 'local',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: defaultIndustry,
    deploymentType: defaultDeployment,
    message: '',
    privacyAccepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateInquiryForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    const randomTicket = `EK-${Math.floor(1000 + Math.random() * 9000)}-DE`;
    setTicketId(randomTicket);
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#102A3A]/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-none border border-[#D7E0E4] w-full max-w-xl max-h-[92vh] overflow-y-auto shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D7E0E4] bg-[#F4F7F8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#087F83] inline-block" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#586B76]">
              Vertrauliche Fachberatung
            </span>
          </div>
          <button
            onClick={resetAndClose}
            className="text-[#586B76] hover:text-[#122635] p-1 transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          {submitted ? (
            <div className="py-4 sm:py-6 text-center space-y-4">
              <div className="w-12 h-12 bg-[#E6F3F4] text-[#087F83] flex items-center justify-center mx-auto border border-[#087F83]/30">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-sans font-medium text-[#122635]">
                Vielen Dank für Ihre Anfrage
              </h2>
              <p className="text-xs sm:text-sm text-[#586B76] max-w-md mx-auto leading-relaxed">
                Ihre Anfrage ist eingegangen. Ein EIGENKERN-Systemberater wird sich innerhalb eines Werktages persönlich bei Ihnen melden, um die technischen Rahmenbedingungen zu besprechen.
              </p>
              
              <div className="bg-[#F4F7F8] border border-[#D7E0E4] p-3 sm:p-4 text-left max-w-md mx-auto font-mono text-xs text-[#122635] space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#586B76]">Referenznummer:</span>
                  <span className="font-semibold">{ticketId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#586B76]">Organisation:</span>
                  <span className="truncate max-w-[180px]">{formData.company}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#586B76]">Gewählte Architektur:</span>
                  <span>
                    {formData.deploymentType === 'local' ? 'Lokal im Büro' : formData.deploymentType === 'server' ? 'Dedizierter Server DE' : 'Hybrid mit Wächter'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#586B76]">Datenschutzstatus:</span>
                  <span className="text-[#087F83]">DSGVO / § 203 StGB</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="w-full sm:w-auto px-6 py-2.5 min-h-[44px] bg-[#102A3A] text-white hover:bg-[#16384d] transition-colors text-sm font-medium font-sans cursor-pointer"
                >
                  Zurück zur Website
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-5 sm:mb-6">
                <h2 id="modal-title" className="text-xl sm:text-2xl font-sans font-semibold text-[#122635] tracking-tight">
                  Beratung anfragen
                </h2>
                <p className="text-xs sm:text-sm text-[#586B76] mt-1 leading-relaxed">
                  Lassen Sie uns gemeinsam herausfinden, welche lokale KI-Architektur optimal zu Ihren Dokumenten und Sicherheitsanforderungen passt.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#122635] mb-1">
                      Ihr Name *
                    </label>
                    <input
                      type="text"
                      placeholder="z.B. Dr. Thomas Weber"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3 py-2 text-base sm:text-sm bg-white border font-sans text-[#122635] focus:outline-hidden focus:border-[#087F83] ${
                        errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#D7E0E4]'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#122635] mb-1">
                      Kanzlei / Praxis / Unternehmen *
                    </label>
                    <input
                      type="text"
                      placeholder="z.B. Steuerkanzlei Weber"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={`w-full px-3 py-2 text-base sm:text-sm bg-white border font-sans text-[#122635] focus:outline-hidden focus:border-[#087F83] ${
                        errors.company ? 'border-red-500 bg-red-50/20' : 'border-[#D7E0E4]'
                      }`}
                    />
                    {errors.company && <p className="text-xs text-red-600 mt-1">{errors.company}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#122635] mb-1">
                      Geschäftliche E-Mail *
                    </label>
                    <input
                      type="email"
                      placeholder="weber@kanzlei-weber.de"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3 py-2 text-base sm:text-sm bg-white border font-sans text-[#122635] focus:outline-hidden focus:border-[#087F83] ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#D7E0E4]'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#122635] mb-1">
                      Telefonnummer (optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+49 89 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-base sm:text-sm bg-white border border-[#D7E0E4] font-sans text-[#122635] focus:outline-hidden focus:border-[#087F83]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#122635] mb-1">
                      Branche *
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className={`w-full px-3 py-2 text-base sm:text-sm bg-white border font-sans text-[#122635] focus:outline-hidden focus:border-[#087F83] ${
                        errors.industry ? 'border-red-500' : 'border-[#D7E0E4]'
                      }`}
                    >
                      <option value="">Bitte auswählen...</option>
                      <option value="Steuerberater">Steuerberater</option>
                      <option value="Arztpraxen">Arztpraxen / Kliniken</option>
                      <option value="Handwerk">Handwerksbetrieb</option>
                      <option value="Rechtsanwälte">Rechtsanwaltskanzlei</option>
                      <option value="Schulen">Schulen & Bildungsträger</option>
                      <option value="Kommunen">Kommunen & Öffentliche Verwaltung</option>
                      <option value="Anderes Gewerbe">Mittelständisches Unternehmen</option>
                    </select>
                    {errors.industry && <p className="text-xs text-red-600 mt-1">{errors.industry}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#122635] mb-1">
                      Bevorzugte Architektur
                    </label>
                    <select
                      value={formData.deploymentType}
                      onChange={(e) => setFormData({ ...formData, deploymentType: e.target.value as any })}
                      className="w-full px-3 py-2 text-base sm:text-sm bg-white border border-[#D7E0E4] font-sans text-[#122635] focus:outline-hidden focus:border-[#087F83]"
                    >
                      <option value="local">Lokal im Büro (Physisches Gerät)</option>
                      <option value="server">Dedizierter Server (Rechenzentrum DE)</option>
                      <option value="hybrid">Hybrid mit Wächter (Schattenkopie)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#122635] mb-1">
                    Ihre Anforderungen / Dokumentenarten (optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="z.B. Recherche in PDF-Akten, Anbindung an lokales Netzlaufwerk..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-base sm:text-sm bg-white border border-[#D7E0E4] font-sans text-[#122635] focus:outline-hidden focus:border-[#087F83]"
                  />
                </div>

                <div className="pt-1">
                  <label className="flex items-start gap-2.5 text-xs text-[#586B76] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.privacyAccepted}
                      onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                      className="mt-0.5 rounded-none border-[#D7E0E4] text-[#087F83] focus:ring-0 shrink-0"
                    />
                    <span className="leading-tight">
                      Ich habe die Datenschutzhinweise zur Kenntnis genommen. Meine Daten werden ausschließlich zur Bearbeitung meiner Anfrage vertraulich in Deutschland verarbeitet.
                    </span>
                  </label>
                  {errors.privacyAccepted && (
                    <p className="text-xs text-red-600 mt-1">{errors.privacyAccepted}</p>
                  )}
                </div>

                <div className="pt-3 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-[#D7E0E4]">
                  <span className="text-[11px] font-mono text-[#586B76] text-center sm:text-left">
                    Verschlüsselt via TLS 1.3
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 min-h-[44px] bg-[#087F83] hover:bg-[#06676a] text-white text-sm font-medium font-sans flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Beratung anfordern</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
