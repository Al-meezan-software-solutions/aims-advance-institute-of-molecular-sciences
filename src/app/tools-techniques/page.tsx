import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { HexLattice, MolecularGraph } from '@/components/SvgMotifs';

export const metadata: Metadata = {
  title: 'Tools & Techniques Used — AIMS-PAGE',
  description:
    'Explore the scientific tools, protocols, and molecular techniques used at AIMS-PAGE, featuring image demonstrations across genomics, chromatography, cell biology, and spectroscopy.',
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

const IMAGE_DEMOS = [
  {
    src: '/gel_electrophoresis.png',
    alt: 'Agarose gel electrophoresis under UV light displaying sharp fluorescent DNA bands',
    badge: 'Genomics Division',
    badgeClass: 'bg-teal-50 text-teal-700',
    title: 'Agarose Gel Electrophoresis',
    description:
      'Visual verification of DNA fragments post-amplification. Used for verification of plant pathogens, GMO target markers, and sizing of vector products under controlled wavelength UV emission transilluminators.',
  },
  {
    src: '/molecular_analyzer.png',
    alt: 'Real-time qPCR analyzer screen showing molecular amplification curves',
    badge: 'Diagnostics Division',
    badgeClass: 'bg-purple-50 text-purple-700',
    title: 'Real-Time qPCR Amplification Curves',
    description:
      'Quantitative analysis of target pathogen loads. Our molecular diagnostics systems track absolute copy numbers in real-time, providing immediate cycle threshold (Ct) values for rapid infectious diagnostics.',
  },
  {
    src: '/lc-ms-ms.png',
    alt: 'LC-MS/MS triple quadrupole mass spectrometry system with chromatogram display',
    badge: 'Analytical Chemistry',
    badgeClass: 'bg-sky-50 text-sky-700',
    title: 'LC-MS/MS Residue Analysis',
    description:
      'High-sensitivity tandem mass spectrometry for pesticide, mycotoxin, pharmaceutical residue, and metabolite identification at ultra-trace levels across food, environmental, and bioanalytical matrices.',
  },
  {
    src: '/hplc-chromatography.png',
    alt: 'HPLC chromatography system with chromatogram peaks on monitor',
    badge: 'Pharma QC',
    badgeClass: 'bg-blue-50 text-blue-700',
    title: 'HPLC Assay & Purity Profiling',
    description:
      'Validated HPLC-UV/DAD workflows for API assay, impurity profiling, dissolution testing, and stability-indicating methods aligned to ICH and pharmacopeial standards.',
  },
  {
    src: '/ngs-sequencer.png',
    alt: 'Next-generation sequencing instrument on a genomics laboratory bench',
    badge: 'NGS Genomics',
    badgeClass: 'bg-indigo-50 text-indigo-700',
    title: 'Next-Generation Sequencing',
    description:
      'Short- and long-read sequencing platforms supporting oncology panels, whole exome/genome workflows, microbiome profiling, and pathogen surveillance programmes.',
  },
  {
    src: '/flow-cytometry.png',
    alt: 'Multiparameter flow cytometer with scatter plot analysis on screen',
    badge: 'Cell Biology',
    badgeClass: 'bg-rose-50 text-rose-700',
    title: 'Multiparameter Flow Cytometry',
    description:
      'High-dimensional immunophenotyping and cell population analysis for viability, apoptosis, surface-marker profiling, and therapeutic cell characterisation.',
  },
  {
    src: '/western-blot.png',
    alt: 'Western blot membrane showing protein bands under chemiluminescence imaging',
    badge: 'Protein Analysis',
    badgeClass: 'bg-amber-50 text-amber-700',
    title: 'Western Blot Protein Detection',
    description:
      'Antibody-based detection of target proteins for expression confirmation, recombinant product QC, and pathway validation following gene editing or transfection studies.',
  },
  {
    src: '/ftir-spectroscopy.png',
    alt: 'FTIR spectrometer with ATR sample plate and infrared spectrum on screen',
    badge: 'Spectroscopy',
    badgeClass: 'bg-cyan-50 text-cyan-700',
    title: 'FTIR Material Identification',
    description:
      'Fourier-transform infrared spectroscopy for raw-material identity, polymer characterisation, and drug–carrier interaction analysis in formulation development.',
  },
  {
    src: '/cell-culture-microscopy.png',
    alt: 'Inverted fluorescence microscope with live cell culture imaging display',
    badge: 'Cell Culture',
    badgeClass: 'bg-pink-50 text-pink-700',
    title: 'Cell Culture & Fluorescence Microscopy',
    description:
      'BSL-2 mammalian cell maintenance with phase-contrast and fluorescence imaging for cytotoxicity screens, transfection checks, and morphological assessment.',
  },
  {
    src: '/elisa-plate-reader.png',
    alt: 'ELISA microplate reader with 96-well plate and absorbance heatmap',
    badge: 'Immunology',
    badgeClass: 'bg-violet-50 text-violet-700',
    title: 'ELISA & Microplate Assays',
    description:
      'Absorbance, fluorescence, and luminescence plate reading for biomarker quantification, serological panels, and biological potency assays.',
  },
  {
    src: '/nanoparticle-dls.png',
    alt: 'Nanoparticle size and zeta potential analyser with distribution curve',
    badge: 'Nano Formulation',
    badgeClass: 'bg-fuchsia-50 text-fuchsia-700',
    title: 'Nanoparticle Size & Zeta Analysis',
    description:
      'Dynamic light scattering and related sizing methods for liposomes, polymeric nanoparticles, and colloidal drug-delivery systems including zeta potential profiling.',
  },
  {
    src: '/crispr-gene-editing.png',
    alt: 'CRISPR gene editing reagent setup with DNA sequence alignment on laptop',
    badge: 'Genetic Engineering',
    badgeClass: 'bg-red-50 text-red-700',
    title: 'CRISPR/Cas9 Gene Editing',
    description:
      'Guide RNA design, transfection, and molecular confirmation workflows for knock-out, knock-in, and functional genome-editing projects across mammalian cell systems.',
  },
  {
    src: '/sanger-sequencing.png',
    alt: 'Sanger sequencing chromatogram with colourful fluorescent base-call peaks',
    badge: 'Sequencing',
    badgeClass: 'bg-emerald-50 text-emerald-700',
    title: 'Sanger Sequencing & Genotyping',
    description:
      'Capillary electrophoresis sequencing for mutation confirmation, DNA barcoding, clone verification, and targeted variant validation supporting NGS follow-up.',
  },
  {
    src: '/icp-ms.png',
    alt: 'ICP-MS instrument for trace elemental and heavy metal analysis',
    badge: 'Elemental Analysis',
    badgeClass: 'bg-lime-50 text-lime-700',
    title: 'ICP-MS Trace Element Analysis',
    description:
      'Inductively coupled plasma mass spectrometry for multi-element quantification of heavy metals and nutrients in environmental, food, and biological matrices.',
  },
  {
    src: '/uv-vis-spectrophotometer.png',
    alt: 'UV-Vis spectrophotometer with cuvette and absorbance spectrum curve',
    badge: 'Spectrophotometry',
    badgeClass: 'bg-orange-50 text-orange-700',
    title: 'UV-Vis Spectrophotometry',
    description:
      'Quantitative absorbance assays for concentration determination, kinetic enzyme studies, and spectroscopic characterisation of formulations and biomolecules.',
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
              <span className="w-6 h-px bg-[#80B93C]" aria-hidden="true" />
              <span className="eyebrow text-[#80B93C]">Analytical Methodologies</span>
              <span className="w-6 h-px bg-[#80B93C]" aria-hidden="true" />
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
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#80B93C] rounded-t-2xl" aria-hidden="true" />
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
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#80B93C] shrink-0" aria-hidden="true" />
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
                <span className="w-6 h-px bg-[#80B93C]" aria-hidden="true" />
                <span className="eyebrow text-[#80B93C]">Image Demonstrations</span>
                <span className="w-6 h-px bg-[#80B93C]" aria-hidden="true" />
              </div>
              <h2
                id="images-heading"
                className="section-title text-[#0B3450]"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}
              >
                Test with Images
              </h2>
              <p className="text-[#6B7A8D] leading-relaxed text-sm mt-3">
                Visualizing molecular processes across {IMAGE_DEMOS.length} core laboratory techniques —
                from gel electrophoresis and qPCR to NGS, chromatography, and cell biology platforms.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {IMAGE_DEMOS.map((demo, idx) => (
              <ScrollReveal key={demo.src} delay={Math.min(idx * 40, 240)}>
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm card-lift h-full flex flex-col">
                  <div className="relative h-48 lg:h-52 w-full bg-slate-100">
                    <Image
                      src={demo.src}
                      alt={demo.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      priority={idx < 3}
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span
                      className={`eyebrow px-2.5 py-0.5 rounded text-[0.62rem] font-semibold tracking-wider w-fit ${demo.badgeClass}`}
                    >
                      {demo.badge}
                    </span>
                    <h3
                      className="font-bold text-[#0B3450] mt-3 mb-2"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
                    >
                      {demo.title}
                    </h3>
                    <p className="text-[#6B7A8D] text-xs leading-relaxed">
                      {demo.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
