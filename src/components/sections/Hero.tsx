import Link from 'next/link';
import { STATS } from '@/lib/data';
import { HelixRibbon, HexLattice } from '@/components/SvgMotifs';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-white"
      style={{ minHeight: 'calc(100vh - 104px)' }}
    >
      {/* ── Left panel (light gray-blue gradient) ───────────────────── */}
      <div
        className="absolute inset-y-0 left-0 w-full lg:w-[55%] xl:w-[52%]"
        style={{ background: 'linear-gradient(145deg, #F8FAFC 0%, #F1F5F9 100%)' }}
        aria-hidden="true"
      />

      {/* ── Diagonal divider ──────────────────────────────────── */}
      <div
        className="absolute inset-y-0 hidden lg:block"
        style={{
          left: 'calc(55% - 80px)',
          width: '160px',
          background: 'linear-gradient(145deg, #F8FAFC 0%, #F1F5F9 100%)',
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* ── Right side — white ────────────────────────────────── */}
      <div
        className="absolute inset-y-0 right-0 w-full lg:w-[50%]"
        style={{ background: '#ffffff' }}
        aria-hidden="true"
      />

      {/* ── Decorative elements ───────────────────────────────── */}
      <div className="absolute top-12 left-8 opacity-[0.03]" aria-hidden="true">
        <HexLattice color="#0B3450" size={340} />
      </div>
      <div className="absolute bottom-0 right-8 opacity-[0.08]" aria-hidden="true">
        <HexLattice color="#0B3450" size={280} />
      </div>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-0 min-h-[calc(100vh-104px)]">

        {/* Left: text */}
        <div className="flex flex-col justify-center py-20 lg:py-28 pr-0 lg:pr-16">

          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 mb-8 w-fit">
            <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
            <span className="eyebrow text-[#2BB7C4]">
              Pharma · Agri · Environmental
            </span>
          </div>

          <h1
            id="hero-heading"
            className="text-[#0B3450] mb-6 section-title"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Advanced Institute of<br />
            <span className="text-[#2BB7C4]">Molecular Sciences</span>
          </h1>

          <p
            className="text-slate-800 mb-3"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}
          >
            Your Partner in Growth!
          </p>

          <p className="text-slate-600 mb-10 leading-relaxed max-w-lg"
            style={{ fontSize: '0.97rem' }}>
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
              className="inline-flex items-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-medium px-6 py-3 rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#2BB7C4] text-sm shadow-xs"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right: stat cards */}
        <div className="flex flex-col justify-center py-20 lg:py-28 pl-8 lg:pl-20">

          {/* Helix illustration */}
          <div className="flex justify-center mb-10" aria-hidden="true">
            <HelixRibbon color="#0B3450" size={200} className="opacity-30" />
          </div>

          {/* Stats grid */}
          <div
            className="grid grid-cols-2 gap-4"
            role="list"
            aria-label="Key statistics"
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                role="listitem"
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-lift"
              >
                <div
                  className="stat-num text-[#0B3450] mb-2"
                  style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[#6B7A8D] leading-snug"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500 }}
                >
                  {stat.label}
                </div>
                {/* Accent dot */}
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
  );
}
