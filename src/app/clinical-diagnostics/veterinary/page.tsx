import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { HelixRibbon } from '@/components/SvgMotifs';

export const metadata: Metadata = {
  title: 'Veterinary Diagnostics — AIMS-PAGE',
  description:
    'Comprehensive molecular diagnostics for animal health. Pathogen surveillance, screening, and assay profiling for livestock, companion animals, aquaculture, and poultry.',
};

const VET_DIAGNOSTICS = [
  {
    title: 'Pedigree & Genetic Profiling',
    description: 'DNA-based parentage verification, breed purity certification, and genetic health screening for livestock, equine, and companion animals.',
    tests: ['DNA Profiling & Parentage Verification', 'Breed Purity & Ancestry Analysis', 'Inherited Disease & Genetic Screening', 'Genetic Trait & Phenotype Profiling'],
  },
  {
    title: 'Livestock Pathogen Surveillance',
    description: 'High-accuracy screening protocols for major infectious diseases in sheep, cattle, goats, and poultry to support herd management and export security.',
    tests: ['Foot-and-Mouth Disease (FMD) Screening', 'Brucellosis Molecular Diagnostics', 'Avian Influenza Genotype Assays', 'Mastitis Pathogen qPCR Panels'],
  },
  {
    title: 'Companion Animal Diagnostics',
    description: 'PCR-based screening panels for dogs and cats, offering early and precise pathogen identification compared to traditional culture methods.',
    tests: ['Canine Parvovirus & Coronavirus qPCR', 'Feline Leukemia Virus (FeLV) / FIV Molecular Assay', 'Tick-Borne Pathogen Multiplex Screen', 'Respiratory and Gastrointestinal PCR Panels'],
  },
  {
    title: 'Aquaculture & Avian Health',
    description: 'Diagnostics for shrimp, fish, and avian species, addressing critical pathogens that impact high-value livestock and aquaculture sectors.',
    tests: ['White Spot Syndrome Virus (WSSV) in Shrimp', 'Tilapia Lake Virus qPCR', 'Newcastle Disease Virus (NDV) Screening', 'Marek’s Disease Virus (MDV) Genotyping'],
  },
  {
    title: 'Animal Hematology & Parasitology',
    description: 'General cellular blood profiling and targeted screening of bloodborne and intestinal parasites in livestock and companion animals.',
    tests: ['Animal Complete Blood Count (CBC)', 'Blood Parasite Test', 'Fecal Parasite Examination'],
  },
  {
    title: 'Veterinary Biochemistry & Organ Profiles',
    description: 'Key biochemical metrics for assessing liver and kidney health, lipid metabolism, and overall cellular antioxidant status.',
    tests: ['Liver Function Test (LFT)', 'Renal Function Test (RFT)', 'Lipid Profile (LDL, HDL, VLDL)', 'Total Antioxidant, SOD, GPx Assays'],
  },
  {
    title: 'Veterinary Endocrinology & Special Chemistry',
    description: 'Quantitative screening panels for thyroid hormones and other special biochemical markers in animal serum.',
    tests: ['Special Chemistry Test (T3, T4, TSH, Prolactin, HCG, TT3, TT4)'],
  },
  {
    title: 'Animal Microbiology & Mycology',
    description: 'Bacterial culture, antimicrobial sensitivity testing, ear swab microscopy, and dermatological fungal scraping analysis.',
    tests: ['Skin Scraping for Fungus (KOH Microscopy)', 'Ear Swab for Gram Stain', 'Bacterial Culture & Sensitivity'],
  },
  {
    title: 'Veterinary Pathology & Molecular Diagnostics',
    description: 'Pathological tissue evaluations and high-sensitivity PCR assays for clinical veterinary disease diagnosis.',
    tests: ['Biopsy for Histopathology', 'PCR-Based Disease Detection'],
  },
];

export default function VeterinaryDiagnosticsPage() {
  return (
    <>
      {/* ── Hero Banner ────────────────────────────────────────── */}
      <section
        id="veterinary-hero"
        aria-labelledby="veterinary-heading"
        className="relative py-20 lg:py-28 bg-[#0B3450] text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(94,140,58,0.15),transparent_60%)]" aria-hidden="true" />
        <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-[0.04] hex-motif" aria-hidden="true">
          <HelixRibbon color="#ffffff" size={360} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#5E8C3A]" aria-hidden="true" />
              <span className="eyebrow text-[#5E8C3A]">Animal Health</span>
              <span className="w-6 h-px bg-[#5E8C3A]" aria-hidden="true" />
            </div>
            <h1
              id="veterinary-heading"
              className="section-title mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}
            >
              Veterinary Diagnostics
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-sm lg:text-base">
              Protecting herd dynamics and companion animals with highly sensitive molecular diagnostics 
              aligned to veterinary and agricultural regulatory requirements.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Veterinary Diagnostics Section ────────────────────── */}
      <section
        id="veterinary-panels"
        aria-labelledby="vet-panels-heading"
        className="scroll-mt-20 py-24 lg:py-28 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            
            {/* Sidebar Intro */}
            <div className="lg:col-span-1">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-6 h-px bg-[#5E8C3A]" aria-hidden="true" />
                  <span className="eyebrow text-[#5E8C3A]">Pathogen Control</span>
                </div>
                <h2
                  id="vet-panels-heading"
                  className="section-title text-[#0B3450] mb-5"
                  style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)' }}
                >
                  Diagnostic Suite &amp; Screens
                </h2>
                <p className="text-[#6B7A8D] leading-relaxed mb-6" style={{ fontSize: '0.97rem' }}>
                  Protecting livestock yields, poultry health, and companion animals. Our molecular 
                  veterinary assays offer rapid turnaround times to help farmers, veterinarians, and 
                  regulators identify pathogens early and control disease transmission.
                </p>
                <div className="p-4 rounded-xl border border-[#5E8C3A]/20 bg-[#5E8C3A]/05 flex items-start gap-3">
                  <svg className="shrink-0 text-[#5E8C3A] mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  <p className="text-slate-650 text-xs leading-relaxed">
                    Our veterinary screens are designed for rapid deployment, allowing diagnostic screening 
                    directly from serum, blood, tissue, or environmental swabs.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Cards Grid */}
            <div className="lg:col-span-2 space-y-6">
              {VET_DIAGNOSTICS.map((item, idx) => (
                <ScrollReveal key={item.title} delay={idx * 75}>
                  <div
                    className="p-6 lg:p-8 bg-[#F6FAFB] border border-gray-100 rounded-2xl card-lift flex flex-col sm:flex-row gap-6 relative"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#5E8C3A] rounded-l-2xl" aria-hidden="true" />
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
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5E8C3A]" aria-hidden="true" />
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
              Enquire About Veterinary Panels
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              Do you require custom diagnostic assays, validation support, or bulk surveillance programs? 
              Our analytical leads are ready to coordinate with you.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0B3450] hover:bg-[#164e78] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Get Veterinary Support
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
