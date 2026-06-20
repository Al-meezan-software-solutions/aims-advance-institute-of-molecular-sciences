import ScrollReveal from '@/components/ScrollReveal';
import { PetriRings } from '@/components/SvgMotifs';

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle background motif */}
      <div className="absolute -top-20 -right-20 opacity-[0.04]" aria-hidden="true">
        <PetriRings color="#0B3450" size={480} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: illustration panel */}
          <ScrollReveal direction="left">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ background: 'linear-gradient(145deg, #F6FAFB 0%, #EEF1F4 100%)', minHeight: '420px' }}
            >
              {/* Layered SVG illustration */}
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <PetriRings color="#2BB7C4" size={320} className="opacity-20" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <PetriRings color="#0B3450" size={200} className="opacity-15" />
              </div>

              {/* Trust badges */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-10">
                {[
                  { label: 'Trust',       icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', color: '#2BB7C4' },
                  { label: 'Excellence',  icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z', color: '#80B93C' },
                  { label: 'Innovation', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', color: '#5E8C3A' },
                ].map(({ label, icon, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-md border border-gray-100 w-full max-w-xs"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${color}18` }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                        aria-hidden="true">
                        <path d={icon} />
                      </svg>
                    </div>
                    <span
                      className="font-semibold text-[#0B3450]"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1rem' }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: text */}
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
                <span className="eyebrow text-[#2BB7C4]">About the Institute</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h2
                id="about-heading"
                className="section-title text-[#0B3450] mb-6"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}
              >
                Where molecular precision meets real-world impact
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <div className="space-y-4 text-[#6B7A8D] leading-relaxed mb-8" style={{ fontSize: '0.97rem' }}>
                <p>
                  AIMS-PAGE — the Advanced Institute of Molecular Sciences (Pharma-Agri &
                  Environmental) — is a multidisciplinary research and testing laboratory
                  bridging cutting-edge molecular science and the practical needs of industry,
                  regulators, and the public.
                </p>
                <p>
                  Our integrated platform brings together five specialist research units under
                  one roof, enabling cross-disciplinary projects that single-sector laboratories
                  cannot accommodate. From verifying genetic integrity of seed stocks to
                  characterising the genomic landscape of environmental pathogens, we apply the
                  same analytical rigour across every domain we serve.
                </p>
                <p>
                  We provide contract testing, research collaboration, and capacity-building
                  services to pharmaceutical companies, agricultural enterprises, environmental
                  agencies, and academic institutions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              {/* Pull-quote */}
              <blockquote
                className="border-l-4 border-[#2BB7C4] pl-5 py-1 mb-8"
              >
                <p
                  className="text-[#0B3450] font-semibold leading-snug"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontStyle: 'italic' }}
                >
                  &ldquo;Trust, Excellence, Innovation — the foundations upon which
                  every result we deliver is built.&rdquo;
                </p>
                <footer className="mt-2 eyebrow text-[#2BB7C4]">AIMS-PAGE Founding Principles</footer>
              </blockquote>

              {/* Capability tags */}
              <div className="flex flex-wrap gap-2">
                {['Contract Testing','Research Collaboration','Capacity Building',
                  'Regulatory Support','Method Development','Data Analytics'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#F6FAFB] border border-gray-200 text-[#0B3450]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
