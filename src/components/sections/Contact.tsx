import ScrollReveal from '@/components/ScrollReveal';
import AimsLogo from '@/components/AimsLogo';

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-white"
    >
      {/* ── Top CTA band ─────────────────────────────────────── */}
      <div style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)' }} className="border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="w-6 h-px bg-[#2BB7C4]" aria-hidden="true" />
                  <span className="eyebrow text-[#2BB7C4]">Get in Touch</span>
                </div>
                <h2
                  id="contact-heading"
                  className="section-title text-[#0B3450] mb-4"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}
                >
                  Ready to partner with AIMS-PAGE?
                </h2>
                <p className="text-slate-600 mb-10 leading-relaxed max-w-md" style={{ fontSize: '0.97rem' }}>
                  Whether you need contract testing, a research collaboration, or a bespoke
                  training programme — our team is ready to discuss your project requirements.
                </p>
              </ScrollReveal>

              {/* Contact details */}
              <ScrollReveal delay={80}>
                <address className="not-italic space-y-5 mb-10">
                  {[
                    {
                      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                      label: 'Email',
                      value: 'info@aims-page.org',
                      href: 'mailto:info@aims-page.org',
                    },
                    {
                      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                      label: 'Phone',
                      value: '+1 (000) 000-0000',
                      href: 'tel:+10000000000',
                    },
                    {
                      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
                      label: 'Address',
                      value: 'AIMS-PAGE Research Campus\nMolecular Sciences Building',
                      href: undefined,
                    },
                  ].map(({ icon, label, value, href }) => (
                    <div key={label} className="flex gap-4 items-start">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(43,183,196,0.08)' }}
                        aria-hidden="true"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                          stroke="#2BB7C4" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d={icon} />
                        </svg>
                      </div>
                      <div>
                        <div className="eyebrow text-slate-400 mb-0.5">{label}</div>
                        {href
                          ? <a href={href}
                              className="text-slate-700 hover:text-[#0B3450] text-sm transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#2BB7C4] rounded">
                              {value}
                            </a>
                          : <span className="text-slate-700 text-sm whitespace-pre-line">{value}</span>
                        }
                      </div>
                    </div>
                  ))}
                </address>
              </ScrollReveal>

              {/* Unit quick-links */}
              <ScrollReveal delay={120}>
                <div className="eyebrow text-slate-400 mb-3">Research Units</div>
                <nav aria-label="Research unit links">
                  <ul className="flex flex-wrap gap-2">
                    {[
                      { href: '#unit-1', label: '01 Agri-Biotech',  color: '#5E8C3A' },
                      { href: '#unit-2', label: '02 Bio-Pharma',    color: '#2F6FB0' },
                      { href: '#unit-3', label: '03 Env. & Tox.',   color: '#9C7349' },
                      { href: '#unit-4', label: '04 Cell & Gene',   color: '#C24E72' },
                      { href: '#unit-5', label: '05 Bioinformatics',color: '#6750A4' },
                    ].map(u => (
                      <li key={u.href}>
                        <a href={u.href}
                          className="inline-block text-xs px-3 py-1.5 rounded-lg border transition-all duration-150 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-[#2BB7C4]"
                          style={{
                            borderColor: `${u.color}30`,
                            color: u.color,
                            fontFamily: 'var(--font-mono)',
                            letterSpacing: '0.04em',
                          }}>
                          {u.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </ScrollReveal>
            </div>

            {/* Right: form */}
            <ScrollReveal delay={60} direction="right">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3
                  className="text-[#0B3450] font-bold mb-6"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}
                >
                  Send an Enquiry
                </h3>

                <form action="#" method="POST" noValidate aria-label="Contact enquiry form" className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block eyebrow text-[#6B7A8D] mb-1.5">Name</label>
                      <input
                        id="contact-name" name="name" type="text" required autoComplete="name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[#0B3450] placeholder-gray-300 text-sm focus:outline-none focus:border-[#2BB7C4] focus:ring-1 focus:ring-[#2BB7C4] transition-colors duration-150 bg-white"
                        placeholder="Dr. Jane Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-org" className="block eyebrow text-[#6B7A8D] mb-1.5">Organisation</label>
                      <input
                        id="contact-org" name="organisation" type="text" autoComplete="organization"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[#0B3450] placeholder-gray-300 text-sm focus:outline-none focus:border-[#2BB7C4] focus:ring-1 focus:ring-[#2BB7C4] transition-colors duration-150 bg-white"
                        placeholder="University / Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block eyebrow text-[#6B7A8D] mb-1.5">Email</label>
                    <input
                      id="contact-email" name="email" type="email" required autoComplete="email"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[#0B3450] placeholder-gray-300 text-sm focus:outline-none focus:border-[#2BB7C4] focus:ring-1 focus:ring-[#2BB7C4] transition-colors duration-150 bg-white"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block eyebrow text-[#6B7A8D] mb-1.5">Service Area</label>
                    <div className="relative">
                      <select
                        id="contact-service" name="service"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[#6B7A8D] text-sm focus:outline-none focus:border-[#2BB7C4] focus:ring-1 focus:ring-[#2BB7C4] transition-colors duration-150 bg-white appearance-none pr-10"
                      >
                        <option value="">Select a service area…</option>
                        <option value="agri">Agri-Biotechnology Testing</option>
                        <option value="pharma">Bio-Pharma Testing</option>
                        <option value="env">Environmental &amp; Toxicology</option>
                        <option value="cell">Cell Culture &amp; Genetic Engineering</option>
                        <option value="bio">Bioinformatics</option>
                        <option value="training">Training Programme</option>
                        <option value="other">Other / General Enquiry</option>
                      </select>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                        <path d="M4 6l4 4 4-4" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block eyebrow text-[#6B7A8D] mb-1.5">Message</label>
                    <textarea
                      id="contact-message" name="message" rows={4} required
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[#0B3450] placeholder-gray-300 text-sm focus:outline-none focus:border-[#2BB7C4] focus:ring-1 focus:ring-[#2BB7C4] transition-colors duration-150 resize-none bg-white"
                      placeholder="Briefly describe your project or inquiry…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0B3450] hover:bg-[#164e78] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#2BB7C4] text-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Send Enquiry
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
