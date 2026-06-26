import type { Metadata } from 'next';
import Link from 'next/link';
import { STATS, SERVICES, UNITS_ACCENT, CORE_VALUES, TRAINING_COURSES, INSTRUMENT_GROUPS, RESEARCH_UNITS } from '@/lib/data';
import { HelixRibbon, HexLattice } from '@/components/SvgMotifs';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'AIMS-PAGE — Advanced Institute of Molecular Sciences',
  description:
    'Your Partner in Growth! Multidisciplinary research and testing across Pharma, Agri & Environmental domains.',
};

/* ── Small reusable section-card shell ──────────────────────────────────────── */
function SectionCard({
  eyebrow,
  title,
  description,
  href,
  accentColor = '#2BB7C4',
  children,
  delay = 0,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  accentColor?: string;
  children?: React.ReactNode;
  delay?: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <article
        className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-lift flex flex-col h-full"
        style={{ boxShadow: '0 2px 16px rgba(11,52,80,0.06)' }}
      >
        {/* Top accent bar */}
        <div className="h-1 w-full" style={{ background: accentColor }} aria-hidden="true" />

        <div className="p-7 flex flex-col flex-1">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px" style={{ background: accentColor }} aria-hidden="true" />
            <span className="eyebrow" style={{ color: accentColor }}>{eyebrow}</span>
          </div>

          {/* Title */}
          <h3
            className="text-[#0B3450] font-bold mb-3 leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem' }}
          >
            {title}
          </h3>

          {/* Description */}
          <p className="text-[#6B7A8D] leading-relaxed mb-5 flex-1" style={{ fontSize: '0.9rem' }}>
            {description}
          </p>

          {/* Optional preview content slot */}
          {children && <div className="mb-6">{children}</div>}

          {/* CTA */}
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-150 group/cta focus-visible:outline-2 focus-visible:outline-[#2BB7C4] rounded"
            style={{ color: accentColor, fontFamily: 'var(--font-body)' }}
          >
            Explore
            <svg
              width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"
              className="transition-transform duration-200 group-hover/cta:translate-x-1"
            >
              <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z" />
            </svg>
          </Link>
        </div>
      </article>
    </ScrollReveal>
  );
}

/* ── Pill tag ─────────────────────────────────────────────────────────────── */
function Pill({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span
      className="px-2.5 py-1 rounded-full text-xs font-medium"
      style={{ background: `${color}18`, color, fontFamily: 'var(--font-body)' }}
    >
      {children}
    </span>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════ */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-white"
        style={{ minHeight: 'calc(100vh - 104px)' }}
      >
        {/* Left navy panel */}
        <div
          className="absolute inset-y-0 left-0 w-full lg:w-[55%] xl:w-[52%]"
          style={{ background: 'linear-gradient(145deg, #0B3450 0%, #0e3d5c 60%, #103050 100%)' }}
          aria-hidden="true"
        />
        {/* Diagonal divider */}
        <div
          className="absolute inset-y-0 hidden lg:block"
          style={{
            left: 'calc(55% - 80px)', width: '160px',
            background: 'linear-gradient(145deg, #0B3450 0%, #0e3d5c 60%, #103050 100%)',
            clipPath: 'polygon(0 0, 100% 0, 0 100%)', zIndex: 1,
          }}
          aria-hidden="true"
        />
        {/* Right side — light grey */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[50%]" style={{ background: '#F6FAFB' }} aria-hidden="true" />

        {/* Decorative elements */}
        <div className="absolute top-12 left-8 opacity-[0.06]" aria-hidden="true">
          <HexLattice color="#ffffff" size={340} />
        </div>
        <div className="absolute bottom-0 right-8 opacity-[0.15]" aria-hidden="true">
          <HexLattice color="#0B3450" size={280} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-0 min-h-[calc(100vh-104px)]">

          {/* Left: text */}
          <div className="flex flex-col justify-center py-20 lg:py-28 pr-0 lg:pr-16">
            <div className="inline-flex items-center gap-2 mb-8 w-fit">
              <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
              <span className="eyebrow text-[#2BB7C4]">Pharma · Agri · Environmental</span>
            </div>

            <h1
              id="hero-heading"
              className="text-white mb-6 section-title"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              Advanced Institute of<br />
              <span className="text-[#2BB7C4]">Molecular Sciences</span>
            </h1>

            <p
              className="text-white/60 mb-3"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: 500, letterSpacing: '0.02em' }}
            >
              Your Partner in Growth!
            </p>

            <p className="text-white/55 mb-10 leading-relaxed max-w-lg" style={{ fontSize: '0.97rem' }}>
              A multidisciplinary research and testing laboratory delivering authoritative
              molecular analyses across pharmaceutical, agricultural, and environmental domains.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[#2BB7C4] hover:bg-[#1e9aa6] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-white text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Our Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/70 text-white/80 hover:text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#2BB7C4] text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right: stat cards */}
          <div id="highlights" className="flex flex-col justify-center py-20 lg:py-28 pl-8 lg:pl-20">
            <div className="flex justify-center mb-10" aria-hidden="true">
              <HelixRibbon color="#0B3450" size={200} className="opacity-30" />
            </div>
            <div className="grid grid-cols-2 gap-4" role="list" aria-label="Key statistics">
              {STATS.map((stat, i) => (
                <div key={stat.label} role="listitem" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-lift">
                  <div className="stat-num text-[#0B3450] mb-2" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
                    {stat.value}
                  </div>
                  <div className="text-[#6B7A8D] leading-snug" style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500 }}>
                    {stat.label}
                  </div>
                  <div
                    className="mt-3 w-6 h-1 rounded-full"
                    style={{ background: ['#2BB7C4','#80B93C','#5E8C3A','#2F6FB0'][i % 4] }}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION PREVIEWS
      ════════════════════════════════════════════════════ */}

      {/* ── About ─────────────────────────────────────────── */}
      <section aria-label="About preview" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
                  <span className="eyebrow text-[#2BB7C4]">About AIMS-PAGE</span>
                </div>
                <h2 className="section-title text-[#0B3450]" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
                  Where molecular precision meets real-world impact
                </h2>
              </div>
              <Link
                href="/about"
                className="shrink-0 inline-flex items-center gap-2 text-[#2BB7C4] hover:text-[#1e9aa6] text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#2BB7C4] rounded group"
              >
                Learn more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-6">
            <ScrollReveal delay={0} className="lg:col-span-2">
              <div className="h-full rounded-2xl p-8 lg:p-10 flex flex-col justify-between" style={{ background: 'linear-gradient(145deg, #0B3450 0%, #0e3d5c 100%)', minHeight: '280px' }}>
                <p className="text-white/70 leading-relaxed mb-8" style={{ fontSize: '0.97rem' }}>
                  AIMS-PAGE is a multidisciplinary research and testing laboratory bridging
                  cutting-edge molecular science and the practical needs of industry, regulators,
                  and the public. Our integrated platform brings together five specialist research
                  units under one roof, enabling cross-disciplinary projects that single-sector
                  laboratories cannot accommodate.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Contract Testing', 'Research Collaboration', 'Capacity Building', 'Regulatory Support'].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border border-white/20 text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="h-full rounded-2xl border border-gray-100 p-7 flex flex-col justify-between card-lift" style={{ minHeight: '280px' }}>
                <div className="space-y-4">
                  {[
                    { label: 'Trust',       color: '#2BB7C4', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                    { label: 'Excellence',  color: '#80B93C', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
                    { label: 'Innovation',  color: '#5E8C3A', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
                  ].map(({ label, color, icon }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${color}18` }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d={icon} />
                        </svg>
                      </div>
                      <span className="font-semibold text-[#0B3450]" style={{ fontFamily: 'var(--font-display)' }}>{label}</span>
                    </div>
                  ))}
                </div>
                <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2BB7C4] hover:text-[#1e9aa6] transition-colors group focus-visible:outline-2 focus-visible:outline-[#2BB7C4] rounded">
                  Our story
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Mission & Values ──────────────────────────────── */}
      <section aria-label="Mission and values preview" className="py-20 lg:py-24 bg-[#F6FAFB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
                <span className="eyebrow text-[#2BB7C4]">Mission, Vision & Values</span>
                <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
              </div>
              <h2 className="section-title text-[#0B3450]" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
                Purpose-driven science
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <SectionCard
              eyebrow="Mission & Vision"
              title="Advancing science that matters"
              description="Our mission is to deliver accurate, timely, and actionable molecular intelligence to the sectors that protect food safety, pharmaceutical integrity, and environmental health."
              href="/mission"
              accentColor="#2BB7C4"
              delay={0}
            />
            <SectionCard
              eyebrow="Core Values"
              title="Seven principles that guide every result"
              description="Scientific Excellence, Integrity, Innovation, Collaboration, Quality Assurance, Sustainability, and Capacity Building — these values underpin every analysis we deliver."
              href="/values"
              accentColor="#80B93C"
              delay={80}
            >
              <div className="flex flex-wrap gap-2">
                {CORE_VALUES.slice(0, 4).map(v => (
                  <Pill key={v.name} color="#80B93C">{v.name}</Pill>
                ))}
              </div>
            </SectionCard>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────── */}
      <section aria-label="Services preview" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
                  <span className="eyebrow text-[#2BB7C4]">Scope of Services</span>
                </div>
                <h2 className="section-title text-[#0B3450]" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
                  Five domains of capability
                </h2>
              </div>
              <Link
                href="/services"
                className="shrink-0 inline-flex items-center gap-2 text-[#2BB7C4] hover:text-[#1e9aa6] text-sm font-semibold transition-colors group focus-visible:outline-2 focus-visible:outline-[#2BB7C4] rounded"
              >
                All services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SERVICES.map((svc, i) => {
              const accent = UNITS_ACCENT[svc.unitId];
              return (
                <ScrollReveal key={svc.domain} delay={i * 60}>
                  <Link
                    href="/services"
                    className="group block h-full rounded-2xl border border-gray-100 overflow-hidden card-lift"
                    aria-label={`${svc.domain} — view all services`}
                  >
                    <div className="h-1" style={{ background: accent.color }} aria-hidden="true" />
                    <div className="p-5">
                      <div
                        className="inline-flex items-center gap-1.5 mb-3 px-2 py-0.5 rounded-md eyebrow"
                        style={{ color: accent.color, background: accent.tint }}
                      >
                        Unit {String(svc.unitId).padStart(2, '0')}
                      </div>
                      <h3
                        className="font-bold text-[#0B3450] mb-3 leading-snug"
                        style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem' }}
                      >
                        {svc.domain}
                      </h3>
                      <ul className="space-y-1.5 mb-4">
                        {svc.bullets.slice(0, 3).map(b => (
                          <li key={b} className="flex gap-2 items-start">
                            <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: accent.color }} aria-hidden="true" />
                            <span className="text-[#6B7A8D] leading-relaxed" style={{ fontSize: '0.76rem' }}>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <span
                        className="inline-flex items-center gap-1 text-xs font-semibold transition-colors group-hover:underline"
                        style={{ color: accent.color }}
                      >
                        View all
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Research Units ────────────────────────────────── */}
      <section aria-label="Research units preview" className="py-20 lg:py-24 bg-[#F6FAFB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
                  <span className="eyebrow text-[#2BB7C4]">Research Units</span>
                </div>
                <h2 className="section-title text-[#0B3450]" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
                  Five specialist units, one integrated platform
                </h2>
              </div>
              <Link
                href="/research-units"
                className="shrink-0 inline-flex items-center gap-2 text-[#2BB7C4] hover:text-[#1e9aa6] text-sm font-semibold transition-colors group focus-visible:outline-2 focus-visible:outline-[#2BB7C4] rounded"
              >
                Explore units
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESEARCH_UNITS.map((unit, i) => {
              const accent = UNITS_ACCENT[unit.id];
              return (
                <ScrollReveal key={unit.id} delay={i * 60}>
                  <Link
                    href="/research-units"
                    className="group block h-full rounded-2xl border border-gray-100 bg-white overflow-hidden card-lift"
                    aria-label={`${unit.name} — view details`}
                  >
                    <div className="h-1" style={{ background: accent.color }} aria-hidden="true" />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-sm"
                          style={{ background: accent.color, fontFamily: 'var(--font-mono)' }}
                        >
                          {String(unit.id).padStart(2, '0')}
                        </div>
                        <span
                          className="eyebrow px-2.5 py-1 rounded-md"
                          style={{ color: accent.color, background: accent.tint }}
                        >
                          {unit.shortName}
                        </span>
                      </div>
                      <h3
                        className="font-bold text-[#0B3450] mb-3 leading-snug"
                        style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem' }}
                      >
                        {unit.name}
                      </h3>
                      <p className="text-[#6B7A8D] leading-relaxed mb-4 line-clamp-3" style={{ fontSize: '0.83rem' }}>
                        {unit.narrative.slice(0, 160)}…
                      </p>
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all duration-150"
                        style={{ color: accent.color }}
                      >
                        Read more
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Training & Instruments ────────────────────────── */}
      <section aria-label="Training and instruments preview" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Training */}
            <div>
              <ScrollReveal>
                <div className="flex items-end justify-between mb-8">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="w-6 h-px bg-[#5E8C3A]" aria-hidden="true" />
                      <span className="eyebrow text-[#5E8C3A]">Training Programmes</span>
                    </div>
                    <h2 className="section-title text-[#0B3450]" style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}>
                      Build expertise, advance careers
                    </h2>
                  </div>
                </div>
              </ScrollReveal>

              <div className="space-y-3 mb-6">
                {TRAINING_COURSES.slice(0, 4).map((course, i) => (
                  <ScrollReveal key={course.code} delay={i * 50}>
                    <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-[#F6FAFB] card-lift">
                      <div
                        className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white text-xs"
                        style={{ background: '#5E8C3A', fontFamily: 'var(--font-mono)' }}
                      >
                        {course.code}
                      </div>
                      <div>
                        <div className="font-semibold text-[#0B3450] text-sm mb-0.5" style={{ fontFamily: 'var(--font-display)' }}>
                          {course.title}
                        </div>
                        <div className="text-[#6B7A8D] text-xs leading-relaxed">{course.description}</div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={240}>
                <Link
                  href="/training"
                  className="inline-flex items-center gap-2 bg-[#5E8C3A] hover:bg-[#4a7030] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#5E8C3A]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  View all {TRAINING_COURSES.length} courses
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z" />
                  </svg>
                </Link>
              </ScrollReveal>
            </div>

            {/* Instruments */}
            <div>
              <ScrollReveal>
                <div className="flex items-end justify-between mb-8">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="w-6 h-px bg-[#2F6FB0]" aria-hidden="true" />
                      <span className="eyebrow text-[#2F6FB0]">Instrumentation</span>
                    </div>
                    <h2 className="section-title text-[#0B3450]" style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}>
                      State-of-the-art equipment
                    </h2>
                  </div>
                </div>
              </ScrollReveal>

              <div className="space-y-3 mb-6">
                {INSTRUMENT_GROUPS.map((group, i) => (
                  <ScrollReveal key={group.group} delay={i * 50}>
                    <div className="p-4 rounded-xl border border-gray-100 bg-[#F6FAFB] card-lift">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#2F6FB0]" aria-hidden="true" />
                        <span className="font-semibold text-[#0B3450] text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                          {group.group}
                        </span>
                      </div>
                      <p className="text-[#6B7A8D] text-xs leading-relaxed pl-4">
                        {group.instruments.slice(0, 2).join(' · ')}
                        {group.instruments.length > 2 && (
                          <span className="text-[#2F6FB0] font-medium"> +{group.instruments.length - 2} more</span>
                        )}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={240}>
                <Link
                  href="/instruments"
                  className="inline-flex items-center gap-2 bg-[#2F6FB0] hover:bg-[#235a8f] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#2F6FB0]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Full equipment list
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z" />
                  </svg>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA banner ────────────────────────────── */}
      <section aria-label="Contact call to action" className="py-20 lg:py-24 bg-[#F6FAFB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div
              className="relative rounded-3xl overflow-hidden px-8 py-16 lg:px-16 lg:py-20 text-center border border-slate-200/80"
              style={{ background: 'linear-gradient(145deg, #F8FAFC 0%, #F1F5F9 60%, #E2E8F0 100%)' }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 opacity-[0.08]" aria-hidden="true">
                <HexLattice color="#2BB7C4" size={400} />
              </div>
              <div className="absolute bottom-0 left-0 opacity-[0.03]" aria-hidden="true">
                <HexLattice color="#0B3450" size={320} />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
                  <span className="eyebrow text-[#2BB7C4]">Start a Conversation</span>
                  <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
                </div>

                <h2
                  className="section-title text-[#0B3450] mb-4"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                >
                  Ready to work with AIMS-PAGE?
                </h2>

                <p className="text-slate-650 mb-10 max-w-xl mx-auto leading-relaxed" style={{ fontSize: '1rem' }}>
                  Whether you need contract testing, research collaboration, or training,
                  our team is ready to help you achieve your scientific and commercial goals.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#2BB7C4] hover:bg-[#1e9aa6] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-white text-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Contact Us
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z" />
                    </svg>
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-[#0B3450] bg-white font-medium px-8 py-3.5 rounded-xl transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#2BB7C4] text-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Browse Services
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
