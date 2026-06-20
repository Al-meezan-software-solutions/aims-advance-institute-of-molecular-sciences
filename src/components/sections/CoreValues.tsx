import { CORE_VALUES } from '@/lib/data';
import ScrollReveal from '@/components/ScrollReveal';

const VALUE_COLORS = [
  '#2BB7C4', '#0B3450', '#5E8C3A', '#2F6FB0',
  '#9C7349', '#C24E72', '#6750A4',
];

const VALUE_ICONS = [
  'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
  'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  'M13 10V3L4 14h7v7l9-11h-7z',
  'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
  'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
];

export default function CoreValues() {
  return (
    <section
      id="values"
      aria-labelledby="values-heading"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
              <span className="eyebrow text-[#2BB7C4]">Core Values</span>
            </div>
            <h2
              id="values-heading"
              className="section-title text-[#0B3450] mb-4"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}
            >
              The principles behind every result
            </h2>
            <p className="text-[#6B7A8D] leading-relaxed" style={{ fontSize: '0.97rem' }}>
              Seven operational standards encoded into how we design experiments,
              report results, and engage with every client.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          role="list"
          aria-label="Core values"
        >
          {CORE_VALUES.map((val, i) => {
            const color = VALUE_COLORS[i % VALUE_COLORS.length];
            return (
              <ScrollReveal key={val.name} delay={i * 50}>
                <article
                  role="listitem"
                  aria-labelledby={`val-${i}-heading`}
                  className="rounded-xl border border-gray-100 bg-white p-6 card-lift group relative overflow-hidden"
                >
                  {/* Hover background tint */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                    style={{ background: `${color}06` }}
                    aria-hidden="true"
                  />

                  {/* Top accent rule */}
                  <div
                    className="absolute top-0 left-6 right-6 h-0.5 rounded-b-full"
                    style={{ background: color }}
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${color}14` }}
                      aria-hidden="true"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d={VALUE_ICONS[i % VALUE_ICONS.length]} />
                      </svg>
                    </div>

                    <h3
                      id={`val-${i}-heading`}
                      className="text-[#0B3450] font-semibold mb-2"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem' }}
                    >
                      {val.name}
                    </h3>
                    <p className="text-[#6B7A8D] text-sm leading-relaxed">
                      {val.definition}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
