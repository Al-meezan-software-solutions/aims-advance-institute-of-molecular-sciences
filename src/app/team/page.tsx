import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { HexLattice, PetriRings, MolecularGraph } from '@/components/SvgMotifs';

export const metadata: Metadata = {
  title: 'Our Team — AIMS-PAGE',
  description:
    'Meet the multidisciplinary team of scientists, researchers, and diagnostics experts at AIMS-PAGE driving innovation in Agri-Biotech, Pharma, and Environmental sectors.',
};

const TEAM_MEMBERS = [
  {
    name: 'Dr. Tariq Zaman',
    title: 'Director & Principal Investigator',
    credentials: 'Ph.D. in Molecular Biology',
    bio: 'Over 20 years of research leadership in molecular genetics. Dr. Zaman oversees AIMS-PAGE’s research strategic direction and coordinates interdisciplinary partnerships with global and local industrial stakeholders.',
    unit: 'Executive Leadership',
    avatarColor: 'linear-gradient(135deg, #0B3450 0%, #2BB7C4 100%)',
    initials: 'TZ',
    tags: ['Strategic Leadership', 'Molecular Genetics', 'R&D Management'],
  },
  {
    name: 'Dr. Aisha Khan',
    title: 'Head of Bio-Pharma Testing Unit',
    credentials: 'Ph.D. in Pharmaceutical Chemistry',
    bio: 'Specialist in analytical characterisation of APIs and finished dosage forms. Dr. Khan lead stability testing and release assays, aligning processes with strict WHO and ICH regulatory guidelines.',
    unit: 'Bio-Pharma Testing (Unit 02)',
    avatarColor: 'linear-gradient(135deg, #2F6FB0 0%, #0096C7 100%)',
    initials: 'AK',
    tags: ['HPLC / UHPLC', 'ICH Stability', 'Method Validation'],
  },
  {
    name: 'Dr. Faisal Shah',
    title: 'Head of Agri-Biotechnology Testing Unit',
    credentials: 'Ph.D. in Plant Genomics',
    bio: 'Pioneered several molecular diagnostics assays for crop viral pathogen detection. Dr. Shah guides agricultural clients through GMO quantification, soil health profiling, and export safety certifications.',
    unit: 'Agri-Biotechnology (Unit 01)',
    avatarColor: 'linear-gradient(135deg, #5E8C3A 0%, #80B93C 100%)',
    initials: 'FS',
    tags: ['ddPCR', 'Plant Pathology', 'GMO Screening'],
  },
  {
    name: 'Dr. Sarah Ahmed',
    title: 'Head of Environmental & Toxicology Unit',
    credentials: 'Ph.D. in Environmental Toxicology',
    bio: 'Dedicated to assessing trace level chemical and biological pollution impact. Dr. Ahmed specializes in high-resolution GC-MS and ICP-MS testing for heavy metals and persistent organic pollutants.',
    unit: 'Env. & Tox. Testing (Unit 03)',
    avatarColor: 'linear-gradient(135deg, #9C7349 0%, #D7B594 100%)',
    initials: 'SA',
    tags: ['ICP-MS', 'Ecotoxicology', 'PFAS Analysis'],
  },
  {
    name: 'Dr. Bilal Qureshi',
    title: 'Head of Bioinformatics Unit',
    credentials: 'Ph.D. in Computational Biology',
    bio: 'Expert in designing workflow automation pipelines for NGS and metagenomic community profiling. Dr. Qureshi manages our private high-performance computing cluster and custom tool integration.',
    unit: 'Bioinformatics (Unit 05)',
    avatarColor: 'linear-gradient(135deg, #6750A4 0%, #B39DDB 100%)',
    initials: 'BQ',
    tags: ['RNA-Seq', 'QIIME 2', 'Snakemake / Nextflow'],
  },
  {
    name: 'Ms. Zainab Malik',
    title: 'Quality Assurance Lead',
    credentials: 'M.S. in Quality Management Systems',
    bio: 'Maintains institutional compliance, laboratory audits, and calibration protocols. Ms. Malik is the custodian of the ISO 17025 quality management standard across all seven testing units.',
    unit: 'Quality Assurance',
    avatarColor: 'linear-gradient(135deg, #6B7A8D 0%, #94A3B8 100%)',
    initials: 'ZM',
    tags: ['ISO 17025', 'Audit Auditing', 'GLP Standards'],
  },
];

export default function TeamPage() {
  return (
    <>
      {/* ── Hero Banner ────────────────────────────────────────── */}
      <section
        id="team-hero"
        aria-labelledby="team-hero-heading"
        className="relative py-20 lg:py-28 bg-[#0B3450] text-white overflow-hidden"
      >
        {/* Background motifs */}
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
              <span className="eyebrow text-[#2BB7C4]">Scientific Excellence</span>
              <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
            </div>
            <h1
              id="team-hero-heading"
              className="section-title mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}
            >
              Meet Our Team
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-sm lg:text-base">
              A multidisciplinary synergy of world-class molecular biologists, analytical chemists, 
              bioinformaticians, and quality assurance specialists leading AIMS-PAGE.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Intro Section ──────────────────────────────────────── */}
      <section aria-labelledby="team-intro-heading" className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h2
              id="team-intro-heading"
              className="section-title text-[#0B3450] mb-6"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)' }}
            >
              Bridging Molecular Precision with Real-World Impact
            </h2>
            <div className="text-[#6B7A8D] leading-relaxed text-base space-y-6 text-justify sm:text-center">
              <p>
                At AIMS-PAGE, we believe that scientific excellence is built on collaborative expertise. 
                Our team is a diverse, multidisciplinary assembly of leading scientists, experienced 
                researchers, and meticulous laboratory technicians. 
              </p>
              <p>
                Representing domains from pharmaceutical formulation and analytical chemistry to agricultural 
                genomics and computational biology, our experts work under a unified quality system to 
                translate complex molecular data into actionable, real-world solutions. Whether validating a 
                novel bio-pharmaceutical assay or screening environmental matrices for trace pollutants, we 
                apply the same rigorous standards of scientific integrity.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Team Grid ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#F6FAFB] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 65}>
                <article
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-lift h-full flex flex-col relative"
                  style={{ boxShadow: '0 2px 16px rgba(11,52,80,0.04)' }}
                >
                  {/* Decorative side accent */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1"
                    style={{ background: member.avatarColor }}
                    aria-hidden="true"
                  />

                  <div className="p-7 flex flex-col flex-1 pl-8">
                    {/* Header: Avatar + Title info */}
                    <div className="flex items-center gap-4 mb-5">
                      {/* Gradient initials avatar */}
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-inner shrink-0"
                        style={{ background: member.avatarColor, fontFamily: 'var(--font-mono)' }}
                        aria-hidden="true"
                      >
                        {member.initials}
                      </div>
                      <div>
                        <h3
                          className="text-[#0B3450] font-bold leading-tight"
                          style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem' }}
                        >
                          {member.name}
                        </h3>
                        <div className="text-slate-500 text-xs font-medium mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>
                          {member.credentials}
                        </div>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="mb-4">
                      <span
                        className="eyebrow px-2.5 py-0.5 rounded text-[0.62rem] font-semibold tracking-wider inline-block"
                        style={{
                          background: 'rgba(11, 52, 80, 0.05)',
                          color: '#0B3450',
                        }}
                      >
                        {member.unit}
                      </span>
                    </div>

                    {/* Bio */}
                    <p className="text-[#6B7A8D] text-sm leading-relaxed mb-6 flex-1">
                      {member.bio}
                    </p>

                    {/* Specialty tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-100">
                      {member.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[0.7rem] font-medium bg-slate-100 text-slate-650"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {tag}
                        </span>
                      ))}
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
        <div className="absolute -bottom-20 -right-20 opacity-[0.04]" aria-hidden="true">
          <MolecularGraph color="#0B3450" size={480} />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="section-title text-[#0B3450] mb-4" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
              Work with Our Specialists
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              Have specific testing protocols, analytical validations, or research collaborations in mind? 
              Our team is ready to consult with you.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0B3450] hover:bg-[#164e78] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Contact Our Team
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-slate-350 hover:border-slate-400 text-slate-700 font-medium px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
