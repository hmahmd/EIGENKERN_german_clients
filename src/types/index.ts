/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppRoute = '/' | '/mobile' | '/style' | '/waechter' | '/odoo';

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  sampleDocs: string[];
  complianceNotes: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
