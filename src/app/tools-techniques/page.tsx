import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { HexLattice, MolecularGraph } from '@/components/SvgMotifs';

export const metadata: Metadata = {
  title: 'Tools & Techniques Used — AIMS-PAGE',
  description:
    'Explore the scientific tools, protocols, and molecular techniques used at AIMS-PAGE, featuring image demonstrations of gel electrophoresis and qPCR systems.',
};

const TECHNIQUES = [
  {
    category: 'Genomics & PCR Platforms',
    description: 'Absolute quantification and genetic mapping using gold-standard amplification systems.',
    methods: [
      'Digital Droplet PCR (ddPCR) for ultra-sensitive trace gene target profiling',
      'Real-Time quantitative PCR (qPCR) for standard diagnostic pathogen screening',
      'Conventional Multiplex PCR for broad-spectrum comparative pathogen detection',
      'High-throughput robotic automated nucleic acid extraction systems',
    ],
  },
  {
    category: 'Chromatography & Mass Spectrometry',
    description: 'High-resolution separation and chemical characterisation of compound matrices.',
    methods: [
      'Liquid Chromatography-Tandem Mass Spectrometry (LC-MS/MS) for pesticides and mycotoxins',
      'Gas Chromatography-Tandem Mass Spectrometry (GC-MS/MS) for VOCs and organic pollutants',
      'High-Performance Liquid Chromatography (HPLC-UV/FLD) for API assay and dissolution testing',
      'ICP-Mass Spectrometry (ICP-MS) for absolute trace elemental analysis and heavy metals',
    ],
  },
  {
    category: 'Cell Biology & Culture systems',
    description: 'BSL-2 cell-line development, gene editing validation, and potency assays.',
    methods: [
      'CRISPR-Cas9 validation panels and transfection efficiency screens',
      'BSL-2 mammalian cell-line maintenance, expansion, and cryopreservation',
      'Multi-parameter Flow Cytometry (16-colour capable) for cell immunophenotyping',
      '3-D spheroid and organoid culture configurations for advanced cytotoxicity studies',
    ],
  },
];

export default function ToolsTechniquesPage() {
  return (
    <>
      {/* ── Hero Banner ────────────────────────────────────────── */}
      <section
        id="tools-hero"
        aria-labelledby="tools-heading"
        className="relative py-20 lg:py-28 bg-[#0B3450] text-white overflow-hidden"
      >
        <div className="absolute top-1/2 left-8 -translate-y-1/2 opacity-[0.06] hex-motif" aria-hidden="true">
          <HexLattice color="#ffffff" size={340} />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
              <span className="eyebrow text-[#2BB7C4]">Analytical Methodologies</span>
              <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
            </div>
            <h1
              id="tools-heading"
              className="section-title mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}
            >
              Tools &amp; Techniques Used
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-sm lg:text-base">
              Explore the advanced instrumentation suite, laboratory protocols, and diagnostic validation 
              mechanisms driving our molecular analysis pipelines.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Main Techniques List ────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {TECHNIQUES.map((tech, idx) => (
              <ScrollReveal key={tech.category} delay={idx * 65}>
                <article className="bg-[#F6FAFB] border border-gray-100 rounded-2xl p-7 flex flex-col h-full card-lift relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#2BB7C4] rounded-t-2xl" aria-hidden="true" />
                  <h3
                    className="text-[#0B3450] font-bold mb-2 pt-2"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem' }}
                  >
                    {tech.category}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-5">
                    {tech.description}
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {tech.methods.map((method, mi) => (
                      <li key={mi} className="flex gap-2.5 items-start">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#2BB7C4] shrink-0" aria-hidden="true" />
                        <span className="text-slate-700 text-xs leading-relaxed">{method}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Test with Images Section ───────────────────────────── */}
      <section
        id="images"
        aria-labelledby="images-heading"
        className="scroll-mt-20 py-20 lg:py-24 bg-[#F6FAFB] border-t border-gray-150 relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 opacity-[0.04]" aria-hidden="true">
          <MolecularGraph color="#0B3450" size={440} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
                <span className="eyebrow text-[#2BB7C4]">Image Demonstrations</span>
                <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
              </div>
              <h2
                id="images-heading"
                className="section-title text-[#0B3450]"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}
              >
                Test with Images
              </h2>
              <p className="text-[#6B7A8D] leading-relaxed text-sm mt-3">
                Visualizing molecular processes. Below are real-world illustrations of our primary 
                methodological screenings under lab transilluminators and qPCR curves.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Image Card 1 */}
            <ScrollReveal delay={80}>
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm card-lift">
                <div className="relative h-64 lg:h-72 w-full bg-slate-100">
                  <Image
                    src="/gel_electrophoresis.png"
                    alt="Agarose Gel Electrophoresis under UV light displaying sharp fluorescent DNA bands"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6">
                  <span
                    className="eyebrow px-2.5 py-0.5 rounded text-[0.62rem] font-semibold tracking-wider bg-teal-50 text-teal-700"
                  >
                    Genomics Division
                  </span>
                  <h3
                    className="font-bold text-[#0B3450] mt-3 mb-2"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}
                  >
                    Agarose Gel Electrophoresis
                  </h3>
                  <p className="text-[#6B7A8D] text-xs leading-relaxed">
                    Visual verification of DNA fragments post-amplification. Used for verification of 
                    plant pathogens, GMO target markers, and sizing of vector products under controlled 
                    wavelength UV emission transilluminators.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Image Card 2 */}
            <ScrollReveal delay={160}>
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm card-lift">
                <div className="relative h-64 lg:h-72 w-full bg-slate-100">
                  <Image
                    src="/molecular_analyzer.png"
                    alt="Real-time qPCR Analyzer screen showing beautiful molecular amplification curves"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6">
                  <span
                    className="eyebrow px-2.5 py-0.5 rounded text-[0.62rem] font-semibold tracking-wider bg-purple-50 text-purple-700"
                  >
                    Diagnostics Division
                  </span>
                  <h3
                    className="font-bold text-[#0B3450] mt-3 mb-2"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}
                  >
                    Real-Time qPCR Amplification Curves
                  </h3>
                  <p className="text-[#6B7A8D] text-xs leading-relaxed">
                    Quantitative analysis of target pathogen loads. Our molecular diagnostics 
                    systems track absolute copy numbers in real-time, providing immediate 
                    cycle threshold (Ct) values for rapid infectious diagnostics.
                  </p>
                </div>
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
              Discuss Custom Assay Design
            </h2>
            <p className="text-slate-650 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              Do you require custom diagnostic assays, specialized electrophoresis screening, or chromatography 
              method development? Reach out to our analytical specialists.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0B3450] hover:bg-[#164e78] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Contact Our Lab
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
