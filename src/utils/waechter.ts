/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PseudonymizationRule {
  pattern: RegExp | string;
  replacement: string;
  category: 'person' | 'record' | 'internal' | 'location';
}

export interface TransformationResult {
  original: string;
  pseudonymized: string;
  mappings: { original: string; pseudonym: string; category: string }[];
}

export const DEFAULT_WAECHTER_MAPPINGS: { original: string; pseudonym: string; category: 'person' | 'record' | 'internal' }[] = [
  { original: 'Dr. Müller', pseudonym: 'Person A', category: 'person' },
  { original: 'Dr. med. Thomas Weber', pseudonym: 'Person B', category: 'person' },
  { original: 'Kanzlei Schmidt & Partner', pseudonym: 'Organisation X', category: 'internal' },
  { original: 'Patientendaten', pseudonym: 'Datensatz B', category: 'record' },
  { original: 'Mandantendaten', pseudonym: 'Datensatz M', category: 'record' },
  { original: 'Interne Informationen', pseudonym: 'Information C', category: 'internal' },
  { original: 'Umsatzsteuer-ID: DE298492019', pseudonym: 'Steuerreferenz [ANON-01]', category: 'internal' },
  { original: 'Diagnose: Chronische Lumbalgie', pseudonym: 'Klassifikation [ICD-ANON-99]', category: 'record' },
  { original: 'Aktenzeichen: 42 O 118/25', pseudonym: 'Verfahrens-ID [CASE-ALPHA]', category: 'internal' },
];

/**
 * Transforms sensitive data into pseudonymized shadow representation
 */
export function pseudonymizeDocument(
  text: string, 
  customMappings = DEFAULT_WAECHTER_MAPPINGS
): TransformationResult {
  let transformed = text;
  const appliedMappings: { original: string; pseudonym: string; category: string }[] = [];

  for (const item of customMappings) {
    if (transformed.includes(item.original)) {
      // Replace all occurrences safely
      transformed = transformed.split(item.original).join(item.pseudonym);
      appliedMappings.push(item);
    }
  }

  return {
    original: text,
    pseudonymized: transformed,
    mappings: appliedMappings,
  };
}

/**
 * Restores pseudonymized response back to original identities locally
 */
export function restoreIdentities(
  pseudonymizedText: string,
  mappings: { original: string; pseudonym: string }[]
): string {
  let restored = pseudonymizedText;
  for (const item of mappings) {
    restored = restored.split(item.pseudonym).join(item.original);
  }
  return restored;
}

export interface InquiryFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  industry: string;
  deploymentType: 'local' | 'server' | 'hybrid';
  message?: string;
  privacyAccepted: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateInquiryForm(data: Partial<InquiryFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Bitte geben Sie Ihren vollständigen Namen an.';
  }

  if (!data.company || data.company.trim().length < 2) {
    errors.company = 'Bitte geben Sie Ihre Kanzlei, Praxis oder Organisation an.';
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Bitte geben Sie eine gültige geschäftliche E-Mail-Adresse an.';
  }

  if (!data.industry) {
    errors.industry = 'Bitte wählen Sie Ihre Branche aus.';
  }

  if (!data.privacyAccepted) {
    errors.privacyAccepted = 'Bitte bestätigen Sie die Datenschutzerklärung.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
