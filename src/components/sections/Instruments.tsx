import { INSTRUMENT_GROUPS } from '@/lib/data';
import ScrollReveal from '@/components/ScrollReveal';

const GROUP_COLORS  = ['#2BB7C4', '#5E8C3A', '#2F6FB0', '#C24E72'];
const GROUP_ICONS   = [
  'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
  'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
  'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
];

export default function Instruments() {
  return (
    <section
      id="instruments"
      aria-labelledby="instruments-heading"
      className="py-24 lg:py-32 bg-[#F6FAFB]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
              <span className="eyebrow text-[#2BB7C4]">Laboratory Infrastructure</span>
            </div>
            <h2
              id="instruments-heading"
              className="section-title text-[#0B3450] mb-4"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}
            >
              Laboratory Instruments
            </h2>
            <p className="text-[#6B7A8D] leading-relaxed" style={{ fontSize: '0.97rem' }}>
              A 24-instrument core inventory maintained under calibration schedules and
              operated by trained application specialists — grouped by analytical domain.
            </p>
          </div>
        </ScrollReveal>

        {/* Instrument groups */}
        <div className="grid md:grid-cols-2 gap-6">
          {INSTRUMENT_GROUPS.map((group, gi) => {
            const color    = GROUP_COLORS[gi % GROUP_COLORS.length];
            const iconPath = GROUP_ICONS[gi % GROUP_ICONS.length];

            return (
              <ScrollReveal key={group.group} delay={gi * 80}>
                <article
                  aria-labelledby={`inst-group-${gi}-heading`}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm card-lift"
                >
                  {/* Group header */}
                  <div
                    className="flex items-center gap-4 px-6 py-5 border-b border-gray-100"
                    style={{ background: `${color}08` }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${color}18` }}
                      aria-hidden="true"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d={iconPath} />
                      </svg>
                    </div>
                    <h3
                      id={`inst-group-${gi}-heading`}
                      className="font-semibold text-[#0B3450] flex-1"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem' }}
                    >
                      {group.group}
                    </h3>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: `${color}14`,
                        color: color,
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {group.instruments.length} items
                    </span>
                  </div>

                  {/* Instrument list */}
                  <ol
                    className="divide-y divide-gray-50"
                    aria-label={`${group.group} instruments`}
                  >
                    {group.instruments.map((inst, ii) => (
                      <li
                        key={ii}
                        className="flex gap-4 items-start px-6 py-3.5 hover:bg-gray-50 transition-colors duration-150"
                      >
                        <span
                          className="shrink-0 mt-0.5 w-6 text-right"
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.7rem',
                            color: color,
                            opacity: 0.55,
                            fontWeight: 500,
                          }}
                          aria-hidden="true"
                        >
                          {String(ii + 1).padStart(2, '0')}
                        </span>
                        {/* Dot */}
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: color, opacity: 0.6 }}
                          aria-hidden="true"
                        />
                        <span
                          className="text-[#2D3748] leading-snug instrument-item"
                          style={{ fontSize: '0.82rem' }}
                        >
                          {inst}
                        </span>
                      </li>
                    ))}
                  </ol>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Footnote */}
        <ScrollReveal delay={160}>
          <p
            className="mt-10 text-center text-[#6B7A8D]/60"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.06em' }}
          >
            All instruments maintained under documented calibration schedules.
            Availability subject to booking — contact the laboratory to confirm access.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
