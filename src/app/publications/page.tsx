import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { HexLattice, PetriRings } from '@/components/SvgMotifs';

export const metadata: Metadata = {
  title: 'Projects & Publications — AIMS-PAGE',
  description:
    'Browse ongoing research initiatives, institutional projects, and recent peer-reviewed scientific publications from the Advanced Institute of Molecular Sciences.',
};

const PROJECTS = [
  {
    title: 'Lipid Nanoparticle (LNP) Delivery Optimisation',
    description: 'Developing high-stability, target-specific lipid nanoparticle carriers for messenger RNA (mRNA) vaccine and therapeutics delivery.',
    lead: 'Dr. Aisha Khan (Bio-Pharma Testing Unit)',
    status: 'Active',
    timeline: '2025 – 2027',
  },
  {
    title: 'Regional Soil Microbiome Mapping & Metagenomics',
    description: 'Metagenomic profiling of agricultural soils across regional basins to catalog microbial biodiversity, nitrogen-fixing pathways, and predict pathogen outbreaks.',
    lead: 'Dr. Faisal Shah (Agri-Biotech Unit)',
    status: 'Active',
    timeline: '2024 – 2026',
  },
  {
    title: 'Biomarker Screening Panels for Environmental Toxins',
    description: 'Validating multiplex ELISA panels to detect early-stage heavy metal exposure biomarkers in regional wildlife and livestock populations.',
    lead: 'Dr. Sarah Ahmed (Env. & Tox. Testing Unit)',
    status: 'Completed',
    timeline: '2023 – 2025',
  },
];

const PUBLICATIONS = [
  {
    title: 'High-Resolution Impurity Profiling of Bio-Similar Therapeutics using Tandem Mass Spectrometry',
    journal: 'Journal of Pharmaceutical and Biomedical Analysis',
    authors: 'Khan, A., Zaman, T., & Qureshi, B.',
    year: '2025',
    volume: 'Vol. 248, Art. 116290',
    doi: '10.1016/j.jpba.2025.116290',
  },
  {
    title: 'Metagenomic Community Profiling of Arid Soil Microbiomes under Custom Bio-Stimulant Treatment',
    journal: 'Applied Soil Ecology',
    authors: 'Shah, F., Zaman, T., & Ahmed, S.',
    year: '2024',
    volume: 'Vol. 195, pp. 105-118',
    doi: '10.1016/j.apsoil.2024.105118',
  },
  {
    title: 'Trace-Level PFAS Bioaccumulation in Freshwater Reservoirs: A Multi-Year Biomarker Analysis',
    journal: 'Environmental Pollution & Toxicology',
    authors: 'Ahmed, S., Khan, A., & Malik, Z.',
    year: '2024',
    volume: 'Vol. 312, Art. 120114',
    doi: '10.1016/j.envpol.2024.120114',
  },
  {
    title: 'Optimizing CRISPR-Cas9 Efficiency in Crop Genomes: Comparative Metagenomic Assessment of Guide RNA Delivery Systems',
    journal: 'Genomics & Plant Biotechnology',
    authors: 'Shah, F. & Qureshi, B.',
    year: '2023',
    volume: 'Vol. 88, pp. 412-428',
    doi: '10.1007/s11103-023-01340-x',
  },
];

export default function PublicationsPage() {
  return (
    <>
      {/* ── Hero Banner ────────────────────────────────────────── */}
      <section
        id="publications-hero"
        aria-labelledby="publications-heading"
        className="relative py-20 lg:py-28 bg-[#0B3450] text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(94,140,58,0.1),transparent_60%)]" aria-hidden="true" />
        <div className="absolute top-1/2 left-8 -translate-y-1/2 opacity-[0.06] hex-motif" aria-hidden="true">
          <HexLattice color="#ffffff" size={320} />
        </div>
        <div className="absolute right-12 top-10 opacity-[0.04] hex-motif" aria-hidden="true">
          <PetriRings color="#ffffff" size={440} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
              <span className="eyebrow text-[#2BB7C4]">Scientific Contributions</span>
              <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
            </div>
            <h1
              id="publications-heading"
              className="section-title mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}
            >
              Projects &amp; Publications
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-sm lg:text-base">
              Explore our active research projects and peer-reviewed publications published in high-impact 
              journals, reflecting AIMS-PAGE’s core dedication to scientific rigor.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Active Projects ────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="max-w-2xl mb-14">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
                <span className="eyebrow text-[#2BB7C4]">Ongoing Research</span>
              </div>
              <h2
                className="section-title text-[#0B3450] mb-4"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}
              >
                Key Research Projects
              </h2>
              <p className="text-[#6B7A8D] leading-relaxed text-sm">
                Each project brings together cross-disciplinary teams from our five core research units, 
                blending molecular biology, genomics, chemistry, and computation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((proj, idx) => (
              <ScrollReveal key={proj.title} delay={idx * 65}>
                <article
                  className="bg-[#F6FAFB] border border-gray-100 rounded-2xl p-7 flex flex-col h-full card-lift relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#2BB7C4] rounded-t-2xl" aria-hidden="true" />
                  
                  <div className="flex items-center justify-between mb-4 pt-2">
                    <span
                      className={`px-2.5 py-0.5 rounded text-[0.62rem] font-semibold tracking-wider ${
                        proj.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {proj.status}
                    </span>
                    <span className="text-slate-400 text-xs font-semibold">{proj.timeline}</span>
                  </div>

                  <h3
                    className="text-[#0B3450] font-bold mb-3"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem' }}
                  >
                    {proj.title}
                  </h3>
                  
                  <p className="text-[#6B7A8D] text-xs leading-relaxed mb-6 flex-1">
                    {proj.description}
                  </p>

                  <div className="pt-4 border-t border-slate-200/60 text-[0.72rem] text-slate-500">
                    <span className="font-semibold text-slate-700">Project Lead:</span> {proj.lead}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── Publications List ──────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#F6FAFB] border-t border-gray-150 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="max-w-2xl mb-14">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-px bg-[#80B93C]" aria-hidden="true" />
                <span className="eyebrow text-[#80B93C]">Peer-Reviewed Articles</span>
              </div>
              <h2
                className="section-title text-[#0B3450] mb-4"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}
              >
                Recent Publications
              </h2>
              <p className="text-[#6B7A8D] leading-relaxed text-sm">
                Our scientific findings are published in reputable peer-reviewed academic journals, 
                supporting international knowledge-sharing and clinical validity.
              </p>
            </div>
          </ScrollReveal>

          {/* Publications Index */}
          <div className="space-y-4">
            {PUBLICATIONS.map((pub, idx) => (
              <ScrollReveal key={pub.title} delay={idx * 65}>
                <article
                  className="bg-white border border-gray-100 p-6 lg:p-8 rounded-2xl shadow-sm card-lift flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#80B93C]/10 text-[#80B93C] font-bold text-sm">
                    {pub.year}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-[#0B3450] font-bold text-base mb-1.5 hover:text-[#164e78] transition-colors"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {pub.title}
                    </h3>
                    <div className="text-slate-500 text-xs font-semibold mb-3">
                      {pub.authors} &mdash; <span className="italic text-[#80B93C]">{pub.journal}</span> ({pub.volume})
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-slate-405 font-medium">DOI:</span>
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2BB7C4] hover:underline"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {pub.doi}
                      </a>
                    </div>
                  </div>
                </article>
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
              Collaborate on Academic Initiatives
            </h2>
            <p className="text-slate-650 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              Are you an academic institution, research agency, or clinical entity interested in co-authoring 
              or launching joint research grants? Contact our Principal Investigator.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0B3450] hover:bg-[#164e78] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Enquire About Partnerships
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
