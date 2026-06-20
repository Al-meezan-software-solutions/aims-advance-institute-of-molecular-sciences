import { SERVICES, UNITS_ACCENT } from '@/lib/data';
import ScrollReveal from '@/components/ScrollReveal';
import { MolecularGraph, PetriRings, RibbonDiagram, HexLattice, HelixRibbon } from '@/components/SvgMotifs';

const DOMAIN_MOTIFS = [MolecularGraph, PetriRings, HexLattice, RibbonDiagram, HelixRibbon];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 lg:py-32 bg-[#F6FAFB]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
              <span className="eyebrow text-[#2BB7C4]">Scope of Services</span>
            </div>
            <h2
              id="services-heading"
              className="section-title text-[#0B3450] mb-4"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}
            >
              Five domains of capability
            </h2>
            <p className="text-[#6B7A8D] leading-relaxed" style={{ fontSize: '0.97rem' }}>
              Each domain maps to a dedicated research unit with specialist instrumentation,
              validated methods, and deep domain expertise always aligned with your project.
            </p>
          </div>
        </ScrollReveal>

        {/* Service cards */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Service domains"
        >
          {SERVICES.map((svc, i) => {
            const accent = UNITS_ACCENT[svc.unitId];
            const Motif = DOMAIN_MOTIFS[i % DOMAIN_MOTIFS.length];

            return (
              <ScrollReveal key={svc.domain} delay={i * 65}>
                <article
                  role="listitem"
                  aria-labelledby={`svc-${i}-heading`}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-lift group h-full flex flex-col"
                >
                  {/* Card header */}
                  <div
                    className="relative p-6 overflow-hidden"
                    style={{ background: `${accent.color}0C` }}
                  >
                    {/* Decorative motif */}
                    <div
                      className="absolute -right-4 -top-4 opacity-[0.09] group-hover:opacity-[0.16] transition-opacity duration-500"
                      aria-hidden="true"
                    >
                      <Motif color={accent.color} size={120} />
                    </div>

                    {/* Unit badge */}
                    <div className="relative z-10 flex items-center justify-between mb-3">
                      <span
                        className="eyebrow px-2.5 py-1 rounded-md font-semibold"
                        style={{ color: accent.color, background: `${accent.color}18` }}
                      >
                        Unit {String(svc.unitId).padStart(2, '0')}
                      </span>
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: `${accent.color}18` }}
                        aria-hidden="true"
                      >
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style={{ color: accent.color }}>
                          <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z" />
                        </svg>
                      </div>
                    </div>

                    <h3
                      id={`svc-${i}-heading`}
                      className="relative z-10 font-bold text-[#0B3450]"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
                    >
                      {svc.domain}
                    </h3>
                  </div>

                  {/* Bullet list */}
                  <div className="p-6 flex-1">
                    <ul className="space-y-2.5" aria-label={`${svc.domain} capabilities`}>
                      {svc.bullets.map(bullet => (
                        <li key={bullet} className="flex gap-2.5 items-start">
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: accent.color }}
                            aria-hidden="true"
                          />
                          <span className="text-[#6B7A8D] text-sm leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="h-1 w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                    style={{ background: accent.color }}
                    aria-hidden="true"
                  />
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
