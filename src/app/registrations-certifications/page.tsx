import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { HelixRibbon } from '@/components/SvgMotifs';

export const metadata: Metadata = {
  title: 'Registrations & Certifications — AIMS-PAGE',
  description:
    'Accredited molecular research and testing laboratory standards. Certified ISO/IEC 17025, ISO 9001, DRAP drug testing licensing, and EPA regulatory approvals.',
};

const CERTIFICATIONS = [
  {
    code: 'ISO/IEC 17025:2017',
    title: 'Competence of Testing & Calibration Laboratories',
    body: 'ISO/IEC 17025',
    authority: 'Pakistan National Accreditation Council (PNAC)',
    scope: 'Ensures the highest standard of technical competence, precision of calibration, and reproducible scientific analysis across all molecular, biological, and chemical testing services.',
    status: 'Accredited',
    color: '#2BB7C4',
  },
  {
    code: 'ISO 9001:2015',
    title: 'Quality Management Systems',
    body: 'ISO 9001',
    authority: 'International Organization for Standardization',
    scope: 'Validates that our organizational workflows, customer relations, document control, and continuous improvements meet standard international quality guidelines.',
    status: 'Certified',
    color: '#80B93C',
  },
  {
    code: 'DRAP Registration',
    title: 'Licensed Pharmaceutical Testing Laboratory',
    body: 'Drug Regulatory Authority of Pakistan',
    authority: 'Drug Regulatory Authority of Pakistan (DRAP)',
    scope: 'Officially registered and authorized to perform raw material assays, active pharmaceutical ingredient (API) identification, stability studies, and biopharmaceutical purity testing.',
    status: 'Licensed',
    color: '#2F6FB0',
  },
  {
    code: 'EPA License',
    title: 'Certified Environmental Analysis & Testing',
    body: 'Environmental Protection Agency',
    authority: 'Provincial Environmental Protection Agency (EPA)',
    scope: 'Accredited for air quality monitoring, microplastic characterization, effluent discharge analytics, soil contamination tracking, and industrial waste audits.',
    status: 'Approved',
    color: '#5E8C3A',
  },
  {
    code: 'BSL-2 Certification',
    title: 'Biosafety Level 2 Containment Facility',
    body: 'National Biosafety Committee / CDC Aligned',
    authority: 'National Biosafety Commission',
    scope: 'Certified containment structure for processing infectious agents, viral/bacterial pathogen genomics, and custom recombinant DNA transfections under strict security protocols.',
    status: 'Certified',
    color: '#C24E72',
  },
];

export default function RegistrationsCertificationsPage() {
  return (
    <>
      {/* ── Hero Banner ────────────────────────────────────────── */}
      <section
        id="certifications-hero"
        aria-labelledby="certifications-heading"
        className="relative py-20 lg:py-28 bg-[#0B3450] text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(43,183,196,0.15),transparent_60%)]" aria-hidden="true" />
        <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-[0.04] hex-motif" aria-hidden="true">
          <HelixRibbon color="#ffffff" size={360} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
              <span className="eyebrow text-[#2BB7C4]">Institutional Accreditations</span>
              <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
            </div>
            <h1
              id="certifications-heading"
              className="section-title mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}
            >
              Registrations &amp; Certifications
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-sm lg:text-base">
              Authorized compliance, certified standards, and independent regulatory listings 
              underpinning every molecular research analysis we publish.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Accreditations Section ────────────────────────────── */}
      <section
        id="accreditations"
        aria-labelledby="accreditations-heading"
        className="py-24 lg:py-28 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            
            {/* Left Sidebar Intro */}
            <div className="lg:col-span-1">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
                  <span className="eyebrow text-[#2BB7C4]">Compliance Standard</span>
                </div>
                <h2
                  id="accreditations-heading"
                  className="section-title text-[#0B3450] mb-5"
                  style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)' }}
                >
                  Quality Assurance &amp; Auditing
                </h2>
                <p className="text-[#6B7A8D] leading-relaxed mb-6" style={{ fontSize: '0.97rem' }}>
                  AIMS-PAGE maintains a comprehensive compliance framework aligned with domestic and 
                  international scientific benchmarks. Our operations are governed by dedicated quality 
                  managers who ensure that lab instruments, workflows, reagents, and research outputs conform 
                  strictly to standard operating procedures.
                </p>
                <div className="p-4 rounded-xl border border-[#2BB7C4]/20 bg-[#2BB7C4]/05 flex items-start gap-3">
                  <svg className="shrink-0 text-[#2BB7C4] mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <p className="text-slate-650 text-xs leading-relaxed">
                    Our laboratory calibrations, BSL-2 security parameters, and waste disposal systems are audited 
                    periodically for continuous license renewals.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Cards List */}
            <div className="lg:col-span-2 space-y-6">
              {CERTIFICATIONS.map((item, idx) => (
                <ScrollReveal key={item.code} delay={idx * 75}>
                  <div
                    className="p-6 lg:p-8 bg-[#F6FAFB] border border-gray-150 rounded-2xl card-lift flex flex-col sm:flex-row gap-6 relative"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ backgroundColor: item.color }} aria-hidden="true" />
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <h3
                          className="font-bold text-[#0B3450]"
                          style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem' }}
                        >
                          {item.code}
                        </h3>
                        <span
                          className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                          style={{ background: `${item.color}15`, color: item.color }}
                        >
                          {item.status}
                        </span>
                      </div>
                      
                      <h4 className="text-slate-700 text-sm font-semibold mb-3">
                        {item.title}
                      </h4>
                      
                      <p className="text-slate-550 text-sm leading-relaxed mb-4">
                        {item.scope}
                      </p>
                      
                      <div className="pt-3 border-t border-gray-200/60 flex items-center gap-2">
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Accrediting Body:</span>
                        <span className="text-xs font-medium text-slate-600">{item.authority}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Contact CTA ────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#F6FAFB] border-t border-gray-150 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="section-title text-[#0B3450] mb-4" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
              Audit Support &amp; Quality Inquiries
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              If you represent a regulatory body, prospective auditor, or a research partner requiring 
              detailed documentation for assay validations, please get in touch.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0B3450] hover:bg-[#164e78] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Contact Quality Manager
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
