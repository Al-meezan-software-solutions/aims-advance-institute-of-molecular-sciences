import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { PetriRings, HelixRibbon } from '@/components/SvgMotifs';

export const metadata: Metadata = {
  title: 'Clinical Diagnostic Services — AIMS-PAGE',
  description:
    'Advanced molecular diagnostics covering Human Diagnostics and Veterinary Diagnostics. Fast, precise, and quality-assured DNA/RNA pathogen testing.',
};

export default function ClinicalDiagnosticsPage() {
  return (
    <>
      {/* ── Hero Banner ────────────────────────────────────────── */}
      <section
        id="diagnostics-hero"
        aria-labelledby="diagnostics-heading"
        className="relative py-20 lg:py-28 bg-[#0B3450] text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(13,148,136,0.15),transparent_60%)]" aria-hidden="true" />
        <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-[0.04] hex-motif" aria-hidden="true">
          <PetriRings color="#ffffff" size={360} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#0D9488]" aria-hidden="true" />
              <span className="eyebrow text-[#0D9488]">Molecular &amp; Clinical Diagnostics</span>
              <span className="w-6 h-px bg-[#0D9488]" aria-hidden="true" />
            </div>
            <h1
              id="diagnostics-heading"
              className="section-title mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}
            >
              Clinical Diagnostic Services
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-sm lg:text-base">
              Delivering authoritative diagnostic testing using certified, WHO/ISO-aligned protocols 
              under rigorous biosafety and quality-assurance systems.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Selection Portal ────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F6FAFB] border-b border-gray-150">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Human Diagnostics Card */}
            <ScrollReveal>
              <div
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm card-lift h-full flex flex-col relative p-8 lg:p-10"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0D9488]" aria-hidden="true" />
                <div className="absolute top-6 right-6 opacity-[0.03]" aria-hidden="true">
                  <PetriRings color="#0D9488" size={150} />
                </div>
                
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="w-5 h-px bg-[#0D9488]" aria-hidden="true" />
                    <span className="eyebrow text-[#0D9488]">Human Health</span>
                  </div>
                  <h2
                    className="font-bold text-[#0B3450] mb-4"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem' }}
                  >
                    Human Diagnostics
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    Comprehensive testing suites supporting patient care, pathogen screening, and personalized medicine. 
                    Includes Hematology, Routine Chemistry, Special Chemistry, Molecular Diagnostics, 
                    Microbiology, Histopathology, and Cancer Marker Testing.
                  </p>
                </div>

                <Link
                  href="/clinical-diagnostics/human"
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-sm"
                  style={{ backgroundColor: '#0D9488', fontFamily: 'var(--font-body)' }}
                >
                  Explore Human Diagnostics
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            {/* Veterinary Diagnostics Card */}
            <ScrollReveal delay={80}>
              <div
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm card-lift h-full flex flex-col relative p-8 lg:p-10"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#5E8C3A]" aria-hidden="true" />
                <div className="absolute top-6 right-6 opacity-[0.03]" aria-hidden="true">
                  <HelixRibbon color="#5E8C3A" size={150} />
                </div>

                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="w-5 h-px bg-[#5E8C3A]" aria-hidden="true" />
                    <span className="eyebrow text-[#5E8C3A]">Animal Health</span>
                  </div>
                  <h2
                    className="font-bold text-[#0B3450] mb-4"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem' }}
                  >
                    Veterinary Diagnostics
                  </h2>
                  <p className="text-slate-550 text-sm leading-relaxed mb-8">
                    Rapid, high-accuracy molecular diagnostics to screen pathogens, support biosafety audits, 
                    and protect avian, livestock, companion animal, and aquaculture health.
                  </p>
                </div>

                <Link
                  href="/clinical-diagnostics/veterinary"
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-sm"
                  style={{ backgroundColor: '#5E8C3A', fontFamily: 'var(--font-body)' }}
                >
                  Explore Veterinary Diagnostics
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── Contact CTA ────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="section-title text-[#0B3450] mb-4" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
              Need Assistance with Diagnostics Assays?
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              If you require custom testing panels, regulatory compliance consultation, or research support, 
              our laboratory managers are ready to assist.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0B3450] hover:bg-[#164e78] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Contact Diagnostics Lab
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
