import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { PetriRings } from '@/components/SvgMotifs';

export const metadata: Metadata = {
  title: 'Human Diagnostics — AIMS-PAGE',
  description:
    'Comprehensive human molecular and clinical diagnostics. Professional screening panels including hematology, chemistry, molecular assays, and cancer marker testing.',
};

const HUMAN_DIAGNOSTICS = [
  {
    title: 'Hematology Diagnostics',
    description: 'Routine and specialized hematological evaluations to assess cellular blood components, screen for hematological disorders, and monitor general physiological health.',
    tests: ['Complete Blood Count (CBC)', 'Erythrocyte Sedimentation Rate (ESR)', 'Platelet Count'],
  },
  {
    title: 'Routine Chemistry Tests',
    description: 'Essential biochemical assays assessing organ functions, metabolic processes, and diabetic indicators for routine clinical evaluation.',
    tests: ['Liver Function Tests (LFT)', 'Renal Function Tests (RFT)', 'Electrolytes Panel', 'HbA1c (Glycated Hemoglobin)'],
  },
  {
    title: 'Special Chemistry Tests',
    description: 'Specialized endocrinology assays, viral pathogen profiling, and acute-phase inflammatory protein quantification.',
    tests: ['Thyroid Panel (T3, T4, TSH, TT3, TT4)', 'Hormonal Assays (Prolactin, HCG)', 'Inflammatory Markers (CRP)', 'Infectious Disease Screening (HIV, HCV, HBV)'],
  },
  {
    title: 'Molecular Diagnostics',
    description: 'Highly sensitive DNA/RNA assays utilizing PCR amplification and genotyping methodologies to identify pathogen markers and target genetic mutations.',
    tests: ['Real-Time qPCR Pathogen Detection', 'Conventional PCR Assays', 'Genetic Mutation Analysis'],
  },
  {
    title: 'Microbiology & Infectious Disease Testing',
    description: 'Culture-based and microbiological assays to identify bacterial, fungal, and viral pathogens, alongside antimicrobial susceptibility profiling.',
    tests: ['Bacterial Culture & Susceptibility (AST)', 'Staining & Microscopy (Gram, AFB, Wet Mount)', 'Fungal Culture & Identification', 'Viral Serology Panels'],
  },
  {
    title: 'Histopathology & Immunohistochemistry',
    description: 'Diagnostic tissue morphology evaluations and specific immunohistochemical antigen staining markers for tumor identification and disease staging.',
    tests: ['Routine Histopathology (H&E Staining)', 'Immunohistochemistry (IHC) (ER, PR, HER2, Ki-67)', 'Fine Needle Aspiration Cytology (FNAC) & Pap Smears', 'Special Histochemical Staining (PAS, Reticulin)'],
  },
  {
    title: 'Cancer Marker Testing',
    description: 'Quantitative profiling of key serum tumor markers to support screening, therapeutic monitoring, and recurrence surveillance of malignancies.',
    tests: ['Carcinoembryonic Antigen (CEA)', 'Alpha-Fetoprotein (AFP)', 'Cancer Antigen 125 (CA-125)', 'Prostate-Specific Antigen (PSA)'],
  },
];

export default function HumanDiagnosticsPage() {
  return (
    <>
      {/* ── Hero Banner ────────────────────────────────────────── */}
      <section
        id="human-hero"
        aria-labelledby="human-heading"
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
              <span className="eyebrow text-[#0D9488]">Human Health</span>
              <span className="w-6 h-px bg-[#0D9488]" aria-hidden="true" />
            </div>
            <h1
              id="human-heading"
              className="section-title mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}
            >
              Human Diagnostics
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-sm lg:text-base">
              Providing fast, precise, and quality-assured molecular testing across Human Diagnostics 
              domains, utilizing certified WHO/ISO-aligned protocols.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Main Diagnostics Section ──────────────────────────── */}
      <section
        id="human-panels"
        aria-label="Human diagnostics testing panels"
        className="py-24 lg:py-28 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            
            {/* Sidebar Intro */}
            <div className="lg:col-span-1">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-6 h-px bg-[#0D9488]" aria-hidden="true" />
                  <span className="eyebrow text-[#0D9488]">Precision Medicine</span>
                </div>
                <h2
                  className="section-title text-[#0B3450] mb-5"
                  style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)' }}
                >
                  Diagnostic Suite &amp; Assays
                </h2>
                <p className="text-[#6B7A8D] leading-relaxed mb-6" style={{ fontSize: '0.97rem' }}>
                  Our human diagnostics services focus on translation molecular research and pathogen 
                  assays. Using high-sensitivity platforms like real-time qPCR and digital PCR, we detect 
                  trace targets and genomic variants with unmatched accuracy.
                </p>
                <div className="p-4 rounded-xl border border-teal-100 bg-teal-50/30 flex items-start gap-3">
                  <svg className="shrink-0 text-[#0D9488] mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  <p className="text-slate-650 text-xs leading-relaxed">
                    All human assays are conducted in restricted biosafety level 2 (BSL-2) areas 
                    under rigorous clinical validation criteria.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Cards Grid */}
            <div className="lg:col-span-2 space-y-6">
              {HUMAN_DIAGNOSTICS.map((item, idx) => (
                <ScrollReveal key={item.title} delay={idx * 75}>
                  <div
                    className="p-6 lg:p-8 bg-[#F6FAFB] border border-gray-100 rounded-2xl card-lift flex flex-col sm:flex-row gap-6 relative"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0D9488] rounded-l-2xl" aria-hidden="true" />
                    <div className="flex-1">
                      <h3
                        className="font-bold text-[#0B3450] mb-2"
                        style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-slate-550 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2" aria-label={`${item.title} tests`}>
                        {item.tests.map(test => (
                          <li key={test} className="flex gap-2 items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" aria-hidden="true" />
                            <span className="text-[#2D3748] text-xs font-medium">{test}</span>
                          </li>
                        ))}
                      </ul>
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
              Enquire About Human Diagnostics Panels
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              Do you require custom diagnostic assays, clinical validation support, or bulk sampling grids? 
              Our analytical leads are ready to coordinate with you.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0B3450] hover:bg-[#164e78] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Get Diagnostic Support
              </Link>
              <Link
                href="/instruments"
                className="inline-flex items-center gap-2 border border-slate-350 hover:border-slate-400 text-slate-700 font-medium px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                View Instruments
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
