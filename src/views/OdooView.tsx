/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { EigenkernLogo } from '../components/EigenkernLogo.js';
import { FileCode, Layers, CheckCircle2, Box, Cpu } from 'lucide-react';

export const OdooView: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F4F7F8] py-8 sm:py-12 px-4 sm:px-6 lg:px-16 font-sans">
      <div className="max-w-[1280px] mx-auto space-y-8 sm:space-y-12">
        
        {/* Header */}
        <div className="border-b border-[#D7E0E4] pb-6 sm:pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#087F83]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#586B76]">
              TECHNICAL ARCHITECTURE & CMS COMPATIBILITY
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-sans font-medium text-[#122635] tracking-tight">
            Odoo Website Builder & Bootstrap 5 Implementation Notes
          </h1>
          <p className="text-sm text-[#586B76] mt-2 max-w-2xl">
            Technical documentation for deploying and maintaining the EIGENKERN design within Odoo 17/18 Website Builder.
          </p>
        </div>

        {/* Required English Statement Block (Mandatory) */}
        <section className="bg-white border-2 border-[#087F83] p-5 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#087F83] font-semibold mb-3">
            <FileCode className="w-4 h-4 shrink-0" />
            <span>Implementation Architecture Summary</span>
          </div>
          
          <blockquote className="text-base sm:text-lg font-sans font-medium text-[#122635] leading-relaxed border-l-4 border-[#087F83] pl-4 py-1 my-2">
            "Built on Odoo's standard website builder with a custom Bootstrap 5 SCSS theme, using reusable variables for colours, typography and spacing. The design uses native Odoo building blocks such as columns, cards, tabs, accordions, banners and footer sections, allowing the EIGENKERN team to edit and maintain the website independently."
          </blockquote>

          <div className="mt-4 pt-4 border-t border-[#E9F0F2] text-xs font-mono text-[#586B76]">
            Verified compatibility: Odoo Community & Enterprise Edition (v16, v17, v18) with standard Bootstrap 5.3.x grid.
          </div>
        </section>

        {/* Odoo Building Blocks Mapping Matrix */}
        <section className="bg-white border border-[#D7E0E4] p-4 sm:p-8 space-y-6">
          <div className="border-b border-[#E9F0F2] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl font-sans font-semibold text-[#122635]">
                Native Odoo Snippet Mapping
              </h2>
              <p className="text-xs text-[#586B76] mt-1">
                Every section has been mapped 1:1 to standard Odoo Website Builder building blocks to ensure no custom backend modules or unmaintainable forks are needed.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#087F83] bg-[#E6F3F4] px-2 py-0.5 self-start sm:self-auto">
              ↔ Horizontal wischbar
            </span>
          </div>

          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <table className="w-full text-left font-sans text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#D7E0E4] bg-[#F4F7F8] text-[#122635] font-mono">
                  <th className="p-3">Section</th>
                  <th className="p-3">Odoo Snippet (XML ID)</th>
                  <th className="p-3">Bootstrap 5 Grid / Utility</th>
                  <th className="p-3">Client Maintainability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9F0F2] text-[#586B76]">
                <tr>
                  <td className="p-3 font-medium text-[#122635]">01 Header</td>
                  <td className="p-3 font-mono text-[#087F83]">website.header_standard</td>
                  <td className="p-3 font-mono">navbar navbar-expand-lg border-bottom</td>
                  <td className="p-3">Menus edited via Odoo Site Menu Editor</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-[#122635]">02 Hero</td>
                  <td className="p-3 font-mono text-[#087F83]">s_banner / s_image_text</td>
                  <td className="p-3 font-mono">row align-items-center g-5 py-5</td>
                  <td className="p-3">Inline rich text & image replacement</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-[#122635]">03 Industries</td>
                  <td className="p-3 font-mono text-[#087F83]">s_three_columns (x2)</td>
                  <td className="p-3 font-mono">row row-cols-1 row-cols-md-3 g-4</td>
                  <td className="p-3">Card icons & copy easily added or swapped</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-[#122635]">04 Three Ways</td>
                  <td className="p-3 font-mono text-[#087F83]">s_comparisons / s_columns</td>
                  <td className="p-3 font-mono">row g-4 border-2 border-teal</td>
                  <td className="p-3">Feature checklist modified via point-and-click</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-[#122635]">05 Wächter Diagram</td>
                  <td className="p-3 font-mono text-[#087F83]">s_process_steps / s_media_list</td>
                  <td className="p-3 font-mono">d-flex flex-column flex-lg-row gap-3</td>
                  <td className="p-3">Text steps & boundary containers customizable</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-[#122635]">06 Answers & Sources</td>
                  <td className="p-3 font-mono text-[#087F83]">s_text_image</td>
                  <td className="p-3 font-mono">col-lg-7 (Viewer) + col-lg-5 (Answer)</td>
                  <td className="p-3">Excerpts editable directly in the WYSIWYG block</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-[#122635]">07 Pricing</td>
                  <td className="p-3 font-mono text-[#087F83]">s_pricing / s_three_columns</td>
                  <td className="p-3 font-mono">row g-4 text-center</td>
                  <td className="p-3">Tier labels & price placeholders editable in 1 click</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-[#122635]">08 Trust & Security</td>
                  <td className="p-3 font-mono text-[#087F83]">s_features_grid</td>
                  <td className="p-3 font-mono">col-12 col-lg-4 p-4</td>
                  <td className="p-3">Legal disclaimers & compliance notes updatable</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-[#122635]">09 FAQ</td>
                  <td className="p-3 font-mono text-[#087F83]">s_faq_collapse</td>
                  <td className="p-3 font-mono">accordion accordion-flush</td>
                  <td className="p-3">Add / remove FAQ items via native Odoo Accordion</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-[#122635]">10 Final CTA</td>
                  <td className="p-3 font-mono text-[#087F83]">s_call_to_action</td>
                  <td className="p-3 font-mono">bg-dark text-white py-5</td>
                  <td className="p-3">Lead capture form links to Odoo CRM / Lead pipeline</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-[#122635]">11 Footer</td>
                  <td className="p-3 font-mono text-[#087F83]">website.footer_custom</td>
                  <td className="p-3 font-mono">footer bg-dark text-muted py-5</td>
                  <td className="p-3">Company imprint & copyright synced globally</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SCSS Theme Customization Snippet */}
        <section className="bg-white border border-[#D7E0E4] p-8 space-y-6">
          <div className="border-b border-[#E9F0F2] pb-4">
            <h2 className="text-xl font-sans font-semibold text-[#122635]">
              Odoo SCSS Variable Configuration (`primary_variables.scss`)
            </h2>
            <p className="text-xs text-[#586B76] mt-1">
              Reusable SCSS tokens drop seamlessly into `/eigenkern_theme/static/src/scss/primary_variables.scss`:
            </p>
          </div>

          <pre className="p-5 bg-[#102A3A] text-[#BAC8D0] font-mono text-xs overflow-x-auto border border-[#224458] leading-relaxed">
{`// EIGENKERN Odoo Theme Tokens (Bootstrap 5 SCSS)
$o-theme-color-palette: (
    'body-bg': #F4F7F8,
    'body-color': #122635,
    'primary': #087F83,       // Petrol accent
    'secondary': #586B76,     // Secondary text
    'dark': #102A3A,          // Deep ink blue
    'light': #E9F0F2,         // Light technical surface
    'border-color': #D7E0E4   // Fine hairline border
);

// Typography System
$font-family-base: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif;
$font-family-monospace: 'IBM Plex Mono', SFMono-Regular, Menlo, monospace;

// Industrial Geometry
$border-radius: 0px;
$border-radius-sm: 0px;
$border-radius-lg: 4px;
$btn-border-radius: 0px;
$card-border-radius: 0px;
`}
          </pre>
        </section>

        {/* Lead Capture Integration with Odoo CRM */}
        <section className="bg-white border border-[#D7E0E4] p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#E6F3F4] text-[#087F83] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-sans font-semibold text-[#122635]">
                Seamless Odoo CRM & Form Automation
              </h3>
              <p className="text-xs text-[#586B76] mt-1 leading-relaxed">
                The "Beratung anfragen" modal links directly to Odoo's standard `crm.lead` endpoint. Form submissions generate an encrypted German CRM lead with pipeline tags (e.g. <code>[Steuerberater]</code>, <code>[On-Premise]</code>) without any custom middleware or third-party Zapier webhooks.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
