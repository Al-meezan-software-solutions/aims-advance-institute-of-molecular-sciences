import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { HexLattice, PetriRings, MolecularGraph } from '@/components/SvgMotifs';

export const metadata: Metadata = {
  title: 'Our Team — AIMS-PAGE',
  description:
    'Meet Dr. Muhammad Tahir Shehzad, Senior Scientific Consultant at AIMS-PAGE specializing in environmental analysis, contaminant remediation, and analytical instrumentation.',
};

const EXPERTISE = [
  'Trace Metal Analysis',
  'Heavy Metal Dynamics',
  'Contaminant Remediation',
  'Environmental Risk Assessment',
  'ICP-OES / AAS / GC-MS',
  'Soil–Water–Plant Systems',
  'Spatial Analysis',
  'Multivariate Statistics',
];

const METRICS = [
  { value: '>350', label: 'Citations', note: 'Google Scholar' },
  { value: '10', label: 'h-Index', note: 'Google Scholar' },
  { value: '>60', label: 'Cumulative IF', note: 'Impact Factor' },
  { value: '23', label: 'Journal Papers', note: '17 peer-reviewed' },
  { value: '5', label: 'Book Chapters', note: 'Published / in press' },
];

const JOURNAL_PUBLICATIONS = [
  {
    authors: 'Shehzad, M.T.*, M. Sabir, Saifullah, A.B. Siddique, M.M. Rahman and R. Naidu.',
    year: '2022',
    title:
      'Impact of water regimes on minimizing the accumulation of arsenic in rice (Oryza sativa L.).',
    journal: 'Water, Air, and Soil Pollution',
    citation: '233(9):1-12',
    doi: 'https://doi.org/10.1007/s11270-022-05856-7',
    if: '3.0',
  },
  {
    authors: 'Shehzad, M.T.*, M. Sabir, M. Zia-ur-Rehman, M.A. Zia and R. Naidu.',
    year: '2022',
    title:
      'Arsenic concentrations in soil, water and rice grains of rice growing areas of Punjab-Pakistan: Multivariate statistical analysis.',
    journal: 'Environmental Monitoring and Assessment',
    citation: '194(5):1-16',
    doi: 'https://doi.org/10.1007/s10661-022-09852-z',
    if: '3.0',
  },
  {
    authors:
      'Bashir, M.H., A. Rehman, H.R. Ahmad, A. Hedfi, M.B. Ali, F. Boufahja, K. Elmnasri, E. Mahmoudi and M.T. Shehzad*.',
    year: '2024',
    title:
      "Dust trace metals implications on school's indoor air quality linked to human health risk at Khurianwala (Pakistan).",
    journal: 'Atmospheric Environment',
    citation: '339:120889',
    doi: 'https://doi.org/10.1016/j.atmosenv.2024.120889',
    if: '4.2',
  },
  {
    authors:
      'Rahman, M.M., M.T. Shehzad, A.K. Nayak, S. Sharma, M. Yeasmin, S. Samanta, R. Correll and R. Naidu.',
    year: '2020',
    title:
      'Health risks from trace elements in muscles of some commonly available fish in Australia and India.',
    journal: 'Environmental Science and Pollution Research',
    citation: '27(17):21000-21012',
    doi: 'https://doi.org/10.1007/s11356-020-08535-6',
    if: '5.190',
  },
  {
    authors:
      'Wang, S., L. Wei, L. Zhang, M.T. Shehzad, M.A. Hameed, H. Bashir, Q. Ali, M.Z. Hashmi and M.M. Hussain.',
    year: '2025',
    title:
      'Tillage-regulated impacts of engineered Fe/Zn-humic complexes on lead toxicity and soil biochemical health.',
    journal: 'International Journal of Phytoremediation',
    citation: '28:1-12',
    doi: 'https://doi.org/10.1080/15226514.2025.2579150',
    if: '4.003',
  },
  {
    authors: 'Bashir, M.H., M. Farhan, T. Samreen and M.T. Shehzad*.',
    year: '2024',
    title:
      'Effectiveness of constructed wetland technology-treated industrial wastewater on the spinach (Spinacia oleracea) health risks and biochar efficiency.',
    journal: 'Environmental Geochemistry and Health',
    citation: '46:469',
    doi: 'https://doi.org/10.1007/s10653-024-02254-2',
    if: '3.8',
  },
];

const BOOK_CHAPTERS = [
  {
    authors: 'Shehzad, M.T.*, H. Ghazanfar, M. Hussain, Z. Farooqi, M.M. Hussain and H. Bashir.',
    year: '2025',
    title: 'Drought stress influence on tomato: a brief understanding.',
    book: 'Drought Stress: Review and Recommendations',
    publisher: 'Springer Nature',
    doi: 'https://doi.org/10.1007/978-3-031-80610-0_8',
  },
  {
    authors: 'Ali, M., M.Z. Ur Rehman, A. Jamil, M.A. Ayub and M.T. Shehzad.',
    year: '2023',
    title: 'Silicon in Soil, Plants, and Environment.',
    book: 'Beneficial Chemical Elements of Plants: Recent Developments and Future Prospects',
    publisher: 'John Wiley & Sons',
    doi: 'https://doi.org/10.1002/9781119691419.ch10',
  },
  {
    authors: 'Farooqi, Z.U.R., A. Kareem, M.A. Ayub, M.M. Hussain, N. Zeeshan and M.T. Shehzad.',
    year: '2020',
    title: 'Use of pesticides in agriculture: impacts on soil, plant, and human health.',
    book: 'Pesticide Contamination in Freshwater and Soil Environs: Impacts, Threats, and Sustainable Remediation',
    publisher: 'Apple Academic Press',
    doi: null,
  },
];

const CREDENTIALS = [
  {
    degree: 'Ph.D. in Environmental Science',
    year: '2022',
    institution: 'Institute of Soil and Environmental Sciences, University of Agriculture Faisalabad',
    detail:
      'Thesis: Assessment and management of arsenic in rice in Punjab-Pakistan. Foreign research at the Global Centre for Environmental Remediation (GCER), University of Newcastle, Australia.',
  },
  {
    degree: 'M.Phil. in Environmental Science',
    year: '2014',
    institution: 'PMAS-Arid Agriculture University, Rawalpindi',
    detail: 'Thesis: Assessment of heavy metals in soils of urban areas of Rawalpindi.',
  },
  {
    degree: 'B.Sc. (Hons.) Agriculture / Soil Science',
    year: '2012',
    institution: 'University of Agriculture Faisalabad',
    detail: null,
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
        <div className="absolute top-1/2 left-8 -translate-y-1/2 opacity-[0.06] hex-motif" aria-hidden="true">
          <HexLattice color="#ffffff" size={320} />
        </div>
        <div className="absolute right-12 top-10 opacity-[0.04] hex-motif" aria-hidden="true">
          <PetriRings color="#ffffff" size={440} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#80B93C]" aria-hidden="true" />
              <span className="eyebrow text-[#80B93C]">Scientific Excellence</span>
              <span className="w-6 h-px bg-[#80B93C]" aria-hidden="true" />
            </div>
            <h1
              id="team-hero-heading"
              className="section-title mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}
            >
              Meet Our Team
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-sm lg:text-base">
              International expertise in environmental analysis, contaminant remediation, and
              analytical precision — guiding AIMS-PAGE clients with rigorous scientific consultancy.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Featured Profile ───────────────────────────────────── */}
      <section
        aria-labelledby="profile-heading"
        className="py-16 lg:py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 opacity-[0.035]" aria-hidden="true">
          <PetriRings color="#0B3450" size={420} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[minmax(0,280px)_1fr] gap-10 lg:gap-14 items-start">
            <ScrollReveal direction="left">
              <div className="lg:sticky lg:top-28">
                <div
                  className="relative aspect-[4/5] w-full max-w-[280px] mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-[#F6FAFB]"
                  style={{ boxShadow: '0 8px 32px rgba(11,52,80,0.10)' }}
                >
                  <Image
                    src="/team/dr-muhammad-tahir-shehzad.png"
                    alt="Portrait of Dr. Muhammad Tahir Shehzad"
                    fill
                    sizes="280px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="mt-5 text-center lg:text-left">
                  <span
                    className="eyebrow px-2.5 py-0.5 rounded text-[0.62rem] font-semibold tracking-wider inline-block"
                    style={{ background: 'rgba(128, 185, 60, 0.12)', color: '#5E8C3A' }}
                  >
                    Environmental &amp; Toxicology
                  </span>
                  <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-3 text-xs">
                    <a
                      href="https://orcid.org/0000-0002-7365-3147"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2F6FB0] hover:underline"
                    >
                      ORCID
                    </a>
                    <span className="text-slate-300" aria-hidden="true">
                      ·
                    </span>
                    <a
                      href="/team/selected-bibliography-dr-tahir.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2F6FB0] hover:underline"
                    >
                      Full bibliography (PDF)
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2
                  id="profile-heading"
                  className="text-[#0B3450] font-bold leading-tight mb-2"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)' }}
                >
                  Dr. Muhammad Tahir Shehzad
                </h2>
                <p
                  className="text-[#80B93C] font-semibold mb-1"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem' }}
                >
                  Senior Scientific Consultant
                </p>
                <p className="text-[#6B7A8D] text-sm mb-6">
                  Ph.D. in Environmental Science · Research experience at GCER, University of
                  Newcastle, Australia
                </p>

                <div className="space-y-4 text-[#6B7A8D] leading-relaxed text-sm lg:text-[0.95rem]">
                  <p>
                    Dr. Muhammad Tahir Shehzad is a senior scientific consultant specializing in
                    advanced environmental analysis, contaminant remediation, and analytical
                    instrumentation calibration. Holding a Ph.D. in Environmental Science and having
                    conducted extensive research at the Global Centre for Environmental Remediation
                    (GCER) in Australia, he brings high-level international expertise to the testing
                    industry.
                  </p>
                  <p>
                    Dr. Shehzad offers specialized technical consultancy in trace metal analysis,
                    utilizing state-of-the-art analytical equipment such as Atomic Absorption
                    Spectrometer, ICP-OES and GC-MS. His services include advising on heavy metal
                    dynamics, environmental risk assessments, and soil–water–plant experimental
                    systems, backed by advanced capabilities in spatial analysis and multivariate
                    statistics to ensure the highest standards of data accuracy and analytical
                    precision.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-7">
                  {EXPERTISE.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-[0.72rem] font-medium bg-[#F6FAFB] text-[#0B3450] border border-slate-100"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Scholarly Metrics ──────────────────────────────────── */}
      <section
        aria-labelledby="metrics-heading"
        className="py-14 lg:py-16 bg-[#F6FAFB] border-y border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="metrics-heading" className="sr-only">
              Scholarly metrics
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
              {METRICS.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div
                    className="text-[#0B3450] font-bold tabular-nums"
                    style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2rem)' }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-[#0B3450] text-sm font-semibold mt-1">{metric.label}</div>
                  <div className="text-[#6B7A8D] text-xs mt-0.5">{metric.note}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Education ──────────────────────────────────────────── */}
      <section aria-labelledby="education-heading" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#80B93C]" aria-hidden="true" />
              <span className="eyebrow text-[#80B93C]">Academic Credentials</span>
            </div>
            <h2
              id="education-heading"
              className="section-title text-[#0B3450] mb-10"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
            >
              Education &amp; Training
            </h2>
          </ScrollReveal>

          <div className="space-y-6 max-w-3xl">
            {CREDENTIALS.map((item, i) => (
              <ScrollReveal key={item.degree} delay={i * 50}>
                <div className="flex gap-4">
                  <div className="shrink-0 w-16 pt-0.5">
                    <span
                      className="text-[#80B93C] font-semibold text-sm tabular-nums"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <div className="pb-6 border-b border-slate-100 flex-1">
                    <h3
                      className="text-[#0B3450] font-bold"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
                    >
                      {item.degree}
                    </h3>
                    <p className="text-[#6B7A8D] text-sm mt-1">{item.institution}</p>
                    {item.detail && (
                      <p className="text-[#6B7A8D] text-sm mt-2 leading-relaxed">{item.detail}</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={160}>
            <p className="mt-8 text-sm text-[#6B7A8D] max-w-3xl leading-relaxed">
              Additional appointments and fellowships include an IRSIP research fellowship at the
              University of Newcastle (Australia), DAAD international training on greenhouse gases
              (Geisenheim University, Germany), and service as Review Editor for{' '}
              <em>Frontiers in Plant-Soil Interactions</em>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Selected Bibliography ──────────────────────────────── */}
      <section
        aria-labelledby="bibliography-heading"
        className="py-16 lg:py-24 bg-[#F6FAFB] border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-px bg-[#80B93C]" aria-hidden="true" />
                  <span className="eyebrow text-[#80B93C]">Peer-Reviewed Work</span>
                </div>
                <h2
                  id="bibliography-heading"
                  className="section-title text-[#0B3450]"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
                >
                  Selected Bibliography
                </h2>
              </div>
              <a
                href="/team/selected-bibliography-dr-tahir.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3450] hover:text-[#164e78] transition-colors"
              >
                Download PDF
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </ScrollReveal>

          <h3
            className="text-[#0B3450] font-bold mb-5"
            style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}
          >
            Journal Publications
          </h3>
          <ol className="space-y-5 mb-12">
            {JOURNAL_PUBLICATIONS.map((pub, i) => (
              <ScrollReveal key={pub.doi} delay={Math.min(i * 40, 200)}>
                <li className="flex gap-4 bg-white rounded-xl border border-gray-100 p-5 lg:p-6">
                  <span
                    className="shrink-0 text-[#80B93C] font-semibold text-sm tabular-nums w-6"
                    style={{ fontFamily: 'var(--font-mono)' }}
                    aria-hidden="true"
                  >
                    {i + 1}.
                  </span>
                  <div className="min-w-0">
                    <p className="text-[#0B3450] text-sm leading-relaxed">
                      <span className="text-[#6B7A8D]">{pub.authors} </span>
                      <span className="font-semibold">{pub.year}. </span>
                      {pub.title}{' '}
                      <em>{pub.journal}</em>. {pub.citation}.
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs">
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2F6FB0] hover:underline break-all"
                      >
                        {pub.doi.replace('https://doi.org/', 'DOI: ')}
                      </a>
                      <span className="text-slate-400">IF {pub.if}</span>
                    </div>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>

          <h3
            className="text-[#0B3450] font-bold mb-5"
            style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}
          >
            Book Chapters
          </h3>
          <ol className="space-y-5">
            {BOOK_CHAPTERS.map((ch, i) => (
              <ScrollReveal key={ch.title} delay={Math.min(i * 40, 160)}>
                <li className="flex gap-4 bg-white rounded-xl border border-gray-100 p-5 lg:p-6">
                  <span
                    className="shrink-0 text-[#80B93C] font-semibold text-sm tabular-nums w-6"
                    style={{ fontFamily: 'var(--font-mono)' }}
                    aria-hidden="true"
                  >
                    {i + 1}.
                  </span>
                  <div className="min-w-0">
                    <p className="text-[#0B3450] text-sm leading-relaxed">
                      <span className="text-[#6B7A8D]">{ch.authors} </span>
                      <span className="font-semibold">{ch.year}. </span>
                      {ch.title} In: <em>{ch.book}</em>. {ch.publisher}.
                    </p>
                    {ch.doi && (
                      <a
                        href={ch.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-xs text-[#2F6FB0] hover:underline break-all"
                      >
                        {ch.doi.replace('https://doi.org/', 'DOI: ')}
                      </a>
                    )}
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Contact CTA ────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 opacity-[0.04]" aria-hidden="true">
          <MolecularGraph color="#0B3450" size={480} />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h2
              className="section-title text-[#0B3450] mb-4"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}
            >
              Consult with Our Specialist
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              Need guidance on trace metal analysis, environmental risk assessment, or instrumentation
              calibration? Our scientific consultant is ready to discuss your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0B3450] hover:bg-[#164e78] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Contact Our Team
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 font-medium px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
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
