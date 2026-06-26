import ScrollReveal from '@/components/ScrollReveal';

export default function MissionVision() {
  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="py-24 lg:py-32 bg-[#F6FAFB] relative overflow-hidden"
    >
      {/* Diagonal top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
              <span className="eyebrow text-[#2BB7C4]">Direction & Purpose</span>
              <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
            </div>
            <h2
              id="mission-heading"
              className="section-title text-[#0B3450]"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}
            >
              Mission &amp; Vision
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Mission */}
          <ScrollReveal delay={80}>
            <article
              id="mission-card"
              aria-labelledby="mission-card-heading"
              className="scroll-mt-24 bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 h-full relative overflow-hidden card-lift"
            >
              {/* Top colour bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#2BB7C4] rounded-t-2xl" aria-hidden="true" />

              {/* Large numeral */}
              <div
                className="stat-num text-[#EEF1F4] select-none mb-6"
                style={{ fontSize: '6rem', lineHeight: 1 }}
                aria-hidden="true"
              >01</div>

              <h3
                id="mission-card-heading"
                className="text-[#0B3450] mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700 }}
              >
                Our Mission
              </h3>

              <p className="text-[#6B7A8D] leading-relaxed mb-6" style={{ fontSize: '0.95rem' }}>
                To deliver authoritative, reproducible molecular analyses and research services
                that empower our clients to make evidence-based decisions — advancing food
                security, pharmaceutical safety, and environmental stewardship across the region.
              </p>

              <ul className="space-y-3">
                {[
                  'Provide accredited testing services across pharma, agri, and environmental sectors',
                  'Develop and validate molecular methods responsive to emerging scientific challenges',
                  'Build regional scientific capacity through structured training programmes',
                ].map(item => (
                  <li key={item} className="flex gap-3 items-start">
                    <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                      <circle cx="8" cy="8" r="7.5" fill="#2BB7C418" stroke="#2BB7C4" strokeWidth="1" />
                      <path d="M5 8l2 2 4-4" stroke="#2BB7C4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    <span className="text-[#2D3748] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal delay={160}>
            <article
              id="vision-card"
              aria-labelledby="vision-card-heading"
              className="scroll-mt-24 bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 h-full relative overflow-hidden card-lift"
            >
              {/* Top colour bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#80B93C] rounded-t-2xl" aria-hidden="true" />

              {/* Large numeral */}
              <div
                className="stat-num text-[#EEF1F4] select-none mb-6"
                style={{ fontSize: '6rem', lineHeight: 1 }}
                aria-hidden="true"
              >02</div>

              <h3
                id="vision-card-heading"
                className="text-[#0B3450] mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700 }}
              >
                Our Vision
              </h3>

              <p className="text-[#6B7A8D] leading-relaxed mb-6" style={{ fontSize: '0.95rem' }}>
                To be the leading multidisciplinary molecular sciences institute in the region —
                recognised for scientific excellence, ethical integrity, and the measurable
                societal impact of our research and testing services on human health, agricultural
                productivity, and environmental sustainability.
              </p>

              <ul className="space-y-3">
                {[
                  'Establish internationally recognised accreditation benchmarks across all five units',
                  'Become the reference laboratory for environmental and food-safety monitoring',
                  'Create a sustainable pipeline of trained molecular scientists for the region',
                ].map(item => (
                  <li key={item} className="flex gap-3 items-start">
                    <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                      <circle cx="8" cy="8" r="7.5" fill="#80B93C28" stroke="#80B93C" strokeWidth="1" />
                      <path d="M5 8l2 2 4-4" stroke="#80B93C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    <span className="text-[#2D3748] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
