import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES, RESEARCH_UNITS, UNITS_ACCENT } from '@/lib/data';
import ScrollReveal from '@/components/ScrollReveal';
import { PetriRings, HelixRibbon, MolecularGraph } from '@/components/SvgMotifs';

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return SERVICES.map(svc => ({
    id: svc.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const svc = SERVICES.find(s => s.id === id);
  if (!svc) {
    return { title: 'Service Not Found — AIMS-PAGE' };
  }
  return {
    title: `${svc.domain} — AIMS-PAGE`,
    description: `Explore the scope of services and molecular methods for ${svc.domain} at AIMS-PAGE.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const svc = SERVICES.find(s => s.id === id);
  if (!svc) {
    notFound();
  }

  // Find the corresponding research unit
  const unit = RESEARCH_UNITS.find(u => u.id === svc.unitId);
  const accent = UNITS_ACCENT[svc.unitId];

  return (
    <>
      {/* ── Hero Banner ────────────────────────────────────────── */}
      <section
        id="service-hero"
        aria-labelledby="hero-title"
        className="relative py-20 lg:py-28 bg-[#0B3450] text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: `radial-gradient(circle at bottom right, ${accent.color}, transparent 60%)`,
          }}
          aria-hidden="true"
        />
        <div className="absolute top-1/2 left-8 -translate-y-1/2 opacity-[0.04] hex-motif" aria-hidden="true">
          <PetriRings color="#ffffff" size={340} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px" style={{ backgroundColor: accent.color }} aria-hidden="true" />
              <span className="eyebrow" style={{ color: accent.color }}>
                {unit ? unit.shortName : 'Research Services'}
              </span>
              <span className="w-6 h-px" style={{ backgroundColor: accent.color }} aria-hidden="true" />
            </div>
            <h1
              id="hero-title"
              className="section-title mb-6 text-white"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}
            >
              {svc.domain}
            </h1>
            {unit && (
              <p
                className="text-xs font-semibold py-1 px-3.5 rounded-full inline-block"
                style={{
                  backgroundColor: `${accent.color}25`,
                  color: accent.color,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.04em',
                }}
              >
                Operated by Research Unit {String(unit.id).padStart(2, '0')}
              </p>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Detailed Narrative ─────────────────────────────────── */}
      {unit && (
        <section aria-labelledby="narrative-heading" className="py-20 lg:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-10 right-10 opacity-[0.03]" aria-hidden="true">
            <HelixRibbon color={accent.color} size={300} />
          </div>

          <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <ScrollReveal>
              <h2
                id="narrative-heading"
                className="section-title text-[#0B3450] mb-6"
                style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)' }}
              >
                Institutional Narrative &amp; Focus
              </h2>
              <div
                className="text-justify sm:text-center text-[#6B7A8D] leading-relaxed text-base border-l-4 pl-6 sm:pl-0 sm:border-l-0"
                style={{ borderColor: accent.color }}
              >
                {unit.narrative}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── Scope of Services Section ──────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#F6FAFB] border-t border-b border-gray-150">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm relative p-8 lg:p-12 pl-10"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1.5"
                style={{ backgroundColor: accent.color }}
                aria-hidden="true"
              />
              
              <div className="mb-8">
                <h3
                  className="text-[#0B3450] font-bold mb-3"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}
                >
                  Scope of Services
                </h3>
                <p className="text-slate-550 text-sm leading-relaxed">
                  Our specific testing configurations, validated chemical assays, and molecular panels:
                </p>
              </div>

              {/* Two-column grid split in the center */}
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4" aria-label="Scope of services list">
                {svc.bullets.map(bullet => (
                  <li key={bullet} className="flex gap-3.5 items-start">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: accent.color }}
                      aria-hidden="true"
                    />
                    <span className="text-slate-700 text-sm leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Enquiry Section ────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 opacity-[0.03]" aria-hidden="true">
          <MolecularGraph color="#0B3450" size={440} />
        </div>

        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
                  <span className="eyebrow text-[#2BB7C4]">Start a Project</span>
                  <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
                </div>
                <h2
                  className="section-title text-[#0B3450] mb-2"
                  style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)' }}
                >
                  Enquire About This Service
                </h2>
                <p className="text-slate-550 text-xs max-w-md mx-auto leading-relaxed">
                  Send details of your testing protocol, sample batch sizes, or collaboration proposal.
                </p>
              </div>

              <form action="#" method="POST" noValidate aria-label="Service enquiry form" className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service-name" className="block eyebrow text-[#6B7A8D] mb-1.5">Name</label>
                    <input
                      id="service-name" name="name" type="text" required autoComplete="name"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[#0B3450] placeholder-gray-350 text-sm focus:outline-none focus:border-[#2BB7C4] focus:ring-1 focus:ring-[#2BB7C4] transition-colors bg-white"
                      placeholder="Dr. Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="service-org" className="block eyebrow text-[#6B7A8D] mb-1.5">Organisation</label>
                    <input
                      id="service-org" name="organisation" type="text" autoComplete="organization"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[#0B3450] placeholder-gray-350 text-sm focus:outline-none focus:border-[#2BB7C4] focus:ring-1 focus:ring-[#2BB7C4] transition-colors bg-white"
                      placeholder="University / Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service-email" className="block eyebrow text-[#6B7A8D] mb-1.5">Email</label>
                  <input
                    id="service-email" name="email" type="email" required autoComplete="email"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[#0B3450] placeholder-gray-350 text-sm focus:outline-none focus:border-[#2BB7C4] focus:ring-1 focus:ring-[#2BB7C4] transition-colors bg-white"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service-select" className="block eyebrow text-[#6B7A8D] mb-1.5">Service Area</label>
                  <div className="relative">
                    <select
                      id="service-select"
                      name="service"
                      defaultValue={svc.id}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[#0B3450] text-sm focus:outline-none focus:border-[#2BB7C4] focus:ring-1 focus:ring-[#2BB7C4] transition-colors bg-white appearance-none pr-10"
                    >
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.id}>
                          {s.domain}
                        </option>
                      ))}
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label htmlFor="service-message" className="block eyebrow text-[#6B7A8D] mb-1.5">Message</label>
                  <textarea
                    id="service-message" name="message" rows={4} required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[#0B3450] placeholder-gray-350 text-sm focus:outline-none focus:border-[#2BB7C4] focus:ring-1 focus:ring-[#2BB7C4] transition-colors resize-none bg-white"
                    placeholder="Describe your testing, analytical, or research goals…"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-sm flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#0B3450', fontFamily: 'var(--font-body)' }}
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
