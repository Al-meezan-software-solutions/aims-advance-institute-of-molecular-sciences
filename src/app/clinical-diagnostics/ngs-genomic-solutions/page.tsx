import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { HelixRibbon } from '@/components/SvgMotifs';

export const metadata: Metadata = {
  title: 'NGS Based Genomic Solutions — AIMS-PAGE',
  description:
    'Advancing precision across clinical, microbial, food, and environmental genomics with next-generation sequencing applications.',
};

const NGS_APPLICATIONS = [
  {
    title: 'Oncology',
    tests: [
      'Solid tumor profiling',
      'Hematological malignancies',
      'Comprehensive genomic profiling',
      'Somatic mutation profiling',
      'Germline cancer risk',
      'TMB',
      'MSI',
      'HRD',
      'CNV',
      'Gene fusions',
      'RNA fusion detection',
      'Liquid biopsy / ctDNA research',
      'MRD research',
      'Cancer hotspot panels',
      'Custom oncology panels',
    ],
  },
  {
    title: 'Hereditary Genetics',
    tests: [
      'Hereditary cancer',
      'BRCA1 / BRCA2',
      'Rare disease',
      'Whole exome sequencing',
      'Whole genome sequencing',
      'Mitochondrial sequencing',
    ],
  },
  {
    title: 'Pharmacogenomics',
    tests: [
      'PGx panels',
      'Drug-response variants',
      'HLA / immune genetics',
    ],
  },
  {
    title: 'RNA Genomics',
    tests: [
      'RNA-seq',
      'Gene expression',
      'Fusion detection',
      'Transcriptome profiling',
      'RNA exome',
    ],
  },
  {
    title: 'Infectious Disease',
    tests: [
      'Viral sequencing',
      'Respiratory pathogens',
      'SARS-CoV-2 surveillance',
      'Bacterial sequencing',
      'Fungal genomics',
      'Parasite genomics',
      'AMR detection',
      'Pathogen surveillance',
      'Multiplex pathogen detection',
    ],
  },
  {
    title: 'Microbiology',
    tests: [
      'Bacterial WGS',
      '16S microbiome',
      'Shotgun metagenomics',
      'Microbial identification',
      'Microbial strain typing',
      'Outbreak investigation',
      'Microbial comparative genomics',
    ],
  },
  {
    title: 'Food Genomics',
    tests: [
      'Food pathogen detection',
      'Food microbiome',
      'Species identification',
      'Meat authentication',
      'Food fraud',
      'GMO detection',
      'Allergen research',
    ],
  },
  {
    title: 'Environmental',
    tests: [
      'Environmental DNA / eDNA',
      'Environmental microbiome',
      'Water microbiology',
      'Wastewater surveillance',
      'Soil microbiome',
      'Marine microbiome',
      'Pathogen surveillance',
    ],
  },
  {
    title: 'Agrigenomics',
    tests: [
      'Plant genomics',
      'Animal genomics',
      'Crop breeding',
      'Plant pathogen detection',
      'Livestock genomics',
      'Population genomics',
      'GWAS',
    ],
  },
  {
    title: 'Population Genetics',
    tests: [
      'Genotyping',
      'Ancestry / population diversity',
    ],
  },
  {
    title: 'Epigenomics',
    tests: [
      'DNA methylation',
      'Methylation biomarkers',
    ],
  },
  {
    title: 'Immunogenomics',
    tests: [
      'TCR sequencing',
      'BCR sequencing',
      'Immune repertoire',
    ],
  },
  {
    title: 'Reproductive Genomics',
    tests: [
      'NIPT research',
      'Carrier screening',
      'PGT research',
    ],
  },
];

export default function NgsGenomicSolutionsPage() {
  return (
    <>
      {/* ── Hero Banner ────────────────────────────────────────── */}
      <section
        id="ngs-hero"
        aria-labelledby="ngs-heading"
        className="relative py-20 lg:py-28 bg-[#0B3450] text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(79,70,229,0.18),transparent_60%)]" aria-hidden="true" />
        <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-[0.04] hex-motif" aria-hidden="true">
          <HelixRibbon color="#ffffff" size={360} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#4F46E5]" aria-hidden="true" />
              <span className="eyebrow text-[#A5B4FC]">Next-Generation Sequencing</span>
              <span className="w-6 h-px bg-[#4F46E5]" aria-hidden="true" />
            </div>
            <h1
              id="ngs-heading"
              className="section-title mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)' }}
            >
              NGS Based Genomic Solutions
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-sm lg:text-base">
              Advancing precision across clinical, microbial, food &amp; environmental genomics.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Major Applications ─────────────────────────────────── */}
      <section
        id="ngs-applications"
        aria-label="Major NGS application areas"
        className="py-24 lg:py-28 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">

            {/* Sidebar Intro */}
            <div className="lg:col-span-1 lg:sticky lg:top-36">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-6 h-px bg-[#4F46E5]" aria-hidden="true" />
                  <span className="eyebrow text-[#4F46E5]">Major Applications</span>
                </div>
                <h2
                  className="section-title text-[#0B3450] mb-5"
                  style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)' }}
                >
                  Genomic Application Suite
                </h2>
                <p className="text-[#6B7A8D] leading-relaxed mb-6" style={{ fontSize: '0.97rem' }}>
                  End-to-end next-generation sequencing solutions spanning oncology, hereditary
                  genetics, infectious disease, microbiome, food authenticity, environmental
                  surveillance, and reproductive genomics.
                </p>
                <div className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/40 flex items-start gap-3">
                  <svg className="shrink-0 text-[#4F46E5] mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  <p className="text-slate-650 text-xs leading-relaxed">
                    Custom panels and research-use workflows available across clinical, agri,
                    and environmental genomic programmes.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Application Cards */}
            <div className="lg:col-span-2 space-y-6">
              {NGS_APPLICATIONS.map((item, idx) => (
                <ScrollReveal key={item.title} delay={Math.min(idx * 40, 200)}>
                  <div className="p-6 lg:p-8 bg-[#F6FAFB] border border-gray-100 rounded-2xl card-lift relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4F46E5] rounded-l-2xl" aria-hidden="true" />
                    <h3
                      className="font-bold text-[#0B3450] mb-4"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem' }}
                    >
                      {item.title}
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-2" aria-label={`${item.title} applications`}>
                      {item.tests.map(test => (
                        <li key={test} className="flex gap-2 items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] shrink-0" aria-hidden="true" />
                          <span className="text-[#2D3748] text-xs font-medium">{test}</span>
                        </li>
                      ))}
                    </ul>
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
              Enquire About NGS Genomic Solutions
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              Need a custom oncology panel, microbiome survey, or research sequencing programme?
              Our genomics team is ready to coordinate with you.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0B3450] hover:bg-[#164e78] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Get Genomic Support
              </Link>
              <Link
                href="/clinical-diagnostics"
                className="inline-flex items-center gap-2 border border-slate-350 hover:border-slate-400 text-slate-700 font-medium px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                All Diagnostic Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
