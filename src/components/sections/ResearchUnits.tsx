import { RESEARCH_UNITS, UNITS_ACCENT } from '@/lib/data';
import ScrollReveal from '@/components/ScrollReveal';
import { HelixRibbon, MolecularGraph, PetriRings, RibbonDiagram, HexLattice } from '@/components/SvgMotifs';

const UNIT_MOTIFS = [HelixRibbon, MolecularGraph, PetriRings, RibbonDiagram, HexLattice];

export default function ResearchUnits() {
  return (
    <div id="units" aria-label="Research Units">
      {/* Section intro */}
      <div className="bg-[#F8FAFC] border-b border-slate-200/80 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
              <span className="eyebrow text-[#2BB7C4]">Research Units</span>
            </div>
            <h2
              className="section-title text-[#0B3450] mb-4"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}
            >
              Five specialist units. One integrated platform.
            </h2>
            <p className="text-slate-600 max-w-2xl" style={{ fontSize: '0.97rem', lineHeight: 1.7 }}>
              Each unit operates with dedicated instrumentation and expert staff while sharing
              infrastructure, data systems, and interdisciplinary expertise — enabling project
              scopes no single-domain laboratory can match.
            </p>
          </ScrollReveal>

          {/* Unit nav pills */}
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap gap-3 mt-10" role="list" aria-label="Research unit links">
              {RESEARCH_UNITS.map(unit => {
                const accent = UNITS_ACCENT[unit.id];
                return (
                  <a
                    key={unit.id}
                    href={`#unit-${unit.id}`}
                    role="listitem"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 hover:bg-[#0B3450]/5 focus-visible:outline-2 focus-visible:outline-[#2BB7C4]"
                    style={{
                      borderColor: `${accent.color}40`,
                      color: accent.color,
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    <span
                      className="stat-num text-xs"
                      style={{ color: accent.color, fontSize: '0.7rem' }}
                    >
                      {String(unit.id).padStart(2, '0')}
                    </span>
                    {unit.shortName}
                  </a>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Individual unit sections */}
      {RESEARCH_UNITS.map((unit, idx) => {
        const accent = UNITS_ACCENT[unit.id];
        const Motif  = UNIT_MOTIFS[idx % UNIT_MOTIFS.length];
        const flip   = idx % 2 === 1; // alternate layout

        return (
          <section
            key={unit.id}
            id={`unit-${unit.id}`}
            aria-labelledby={`unit-${unit.id}-heading`}
            className="py-20 lg:py-28 relative overflow-hidden border-b border-gray-100"
            style={{ background: idx % 2 === 0 ? '#ffffff' : '#F6FAFB' }}
          >
            {/* Faint tint strip */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `${accent.color}05` }}
              aria-hidden="true"
            />

            {/* Large background numeral */}
            <div
              className="absolute select-none pointer-events-none"
              style={{
                [flip ? 'left' : 'right']: '-1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(8rem, 18vw, 16rem)',
                fontWeight: 700,
                lineHeight: 1,
                color: `${accent.color}08`,
                letterSpacing: '-0.06em',
              }}
              aria-hidden="true"
            >
              {String(unit.id).padStart(2, '0')}
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${flip ? 'lg:grid-flow-dense' : ''}`}>

                {/* Text column */}
                <div className={flip ? 'lg:col-start-2' : ''}>
                  <ScrollReveal>
                    {/* Eyebrow */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${accent.color}14` }}
                        aria-hidden="true"
                      >
                        <span
                          className="stat-num"
                          style={{ color: accent.color, fontSize: '0.85rem' }}
                        >
                          {String(unit.id).padStart(2, '0')}
                        </span>
                      </div>
                      <div>
                        <div className="eyebrow" style={{ color: accent.color }}>
                          Research Unit {unit.id}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={80}>
                    <h2
                      id={`unit-${unit.id}-heading`}
                      className="section-title text-[#0B3450] mb-5"
                      style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)' }}
                    >
                      {unit.name}
                    </h2>
                  </ScrollReveal>

                  <ScrollReveal delay={130}>
                    {/* Left-rule accent */}
                    <div
                      className="border-l-4 pl-5 mb-6"
                      style={{ borderColor: accent.color }}
                    >
                      <p className="text-[#6B7A8D] leading-relaxed" style={{ fontSize: '0.95rem' }}>
                        {unit.narrative}
                      </p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={170}>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
                      style={{ color: accent.color, fontFamily: 'var(--font-body)' }}
                      aria-label={`Enquire about ${unit.name}`}
                    >
                      Enquire about this unit
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z" />
                      </svg>
                    </a>
                  </ScrollReveal>
                </div>

                {/* Capabilities column */}
                <div className={flip ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <ScrollReveal delay={60} direction={flip ? 'right' : 'left'}>

                    {/* Illustration */}
                    <div
                      className="rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden"
                      style={{
                        background: `${accent.color}0A`,
                        border: `1px solid ${accent.color}20`,
                        height: '160px',
                      }}
                      aria-hidden="true"
                    >
                      <Motif color={accent.color} size={140} className="opacity-40" />
                      <div
                        className="absolute bottom-3 right-4 eyebrow"
                        style={{ color: accent.color, opacity: 0.5 }}
                      >
                        {accent.label}
                      </div>
                    </div>

                    {/* Capabilities card */}
                    <div
                      className="rounded-2xl border overflow-hidden"
                      style={{ borderColor: `${accent.color}20` }}
                    >
                      <div
                        className="px-6 py-4 border-b flex items-center gap-3"
                        style={{ borderColor: `${accent.color}15`, background: `${accent.color}08` }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ background: accent.color }}
                          aria-hidden="true"
                        />
                        <h3
                          className="font-semibold text-[#0B3450] text-sm"
                          style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                        >
                          Key Capabilities
                        </h3>
                      </div>
                      <ul
                        className="divide-y bg-white"
                        style={{ borderColor: `${accent.color}10` }}
                        aria-label={`${unit.name} capabilities`}
                      >
                        {unit.capabilities.map((cap, ci) => (
                          <li
                            key={ci}
                            className="flex gap-3 items-start px-6 py-3.5 hover:bg-gray-50 transition-colors duration-150"
                          >
                            <span
                              className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: accent.color }}
                              aria-hidden="true"
                            />
                            <span className="text-[#2D3748] text-sm leading-relaxed">{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
