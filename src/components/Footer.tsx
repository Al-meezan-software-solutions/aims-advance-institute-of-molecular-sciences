import Link from 'next/link';
import AimsLogo from '@/components/AimsLogo';

const FOOTER_LINKS = [
  { href: '/about',          label: 'About'          },
  { href: '/mission',        label: 'Mission'        },
  { href: '/values',         label: 'Values'         },
  { href: '/services',       label: 'Services'       },
  { href: '/research-units', label: 'Research Units' },
  { href: '/training',       label: 'Training'       },
  { href: '/instruments',    label: 'Instruments'    },
  { href: '/contact',        label: 'Contact'        },
];

const DOMAINS = [
  'Agri-Biotechnology Testing',
  'Bio-Pharma Testing',
  'Environmental & Toxicology Testing',
  'Cell Culture & Genetic Engineering',
  'Bioinformatics',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Site footer"
      className="border-t border-slate-200/80"
      style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)' }}
    >
      {/* ── Top band ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 focus-visible:outline-2 focus-visible:outline-[#2BB7C4] rounded" aria-label="AIMS-PAGE home">
              <AimsLogo size={42} variant="light" />
              <div>
                <div className="font-bold text-[#0B3450]" style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
                  AIMS<span className="text-[#2BB7C4]">-PAGE</span>
                </div>
                <div className="text-slate-500" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', letterSpacing: '0.12em' }}>
                  YOUR PARTNER IN GROWTH
                </div>
              </div>
            </Link>

            <p className="text-slate-600 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}>
              A multidisciplinary research and testing laboratory delivering authoritative molecular analyses across pharmaceutical, agricultural, and environmental domains.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#2BB7C4] hover:bg-[#1e9aa6] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-white"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z"/>
              </svg>
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-slate-800 font-semibold mb-5 pb-2 border-b border-slate-200"
              style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', letterSpacing: '0.06em' }}
            >
              Navigation
            </h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-[#0B3450] transition-colors duration-150 text-sm focus-visible:outline-2 focus-visible:outline-[#2BB7C4] rounded"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Domains */}
          <div>
            <h3
              className="text-slate-800 font-semibold mb-5 pb-2 border-b border-slate-200"
              style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', letterSpacing: '0.06em' }}
            >
              Service Domains
            </h3>
            <ul className="space-y-2.5" role="list">
              {DOMAINS.map(d => (
                <li key={d} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-[#2BB7C4]" aria-hidden="true" />
                  <span className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div>
            <h3
              className="text-slate-800 font-semibold mb-5 pb-2 border-b border-slate-200"
              style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', letterSpacing: '0.06em' }}
            >
              Contact
            </h3>
            <ul className="space-y-4" role="list">
              {[
                {
                  icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                  label: 'Email',
                  value: 'info@aims-page.com',
                },
                {
                  icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                  label: 'Location',
                  value: 'Lahore, Pakistan',
                },
                {
                  icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                  label: 'Hours',
                  value: 'Mon–Sat, 9 AM – 6 PM',
                },
              ].map(({ icon, label, value }) => (
                <li key={label} className="flex items-start gap-3">
                  <div className="mt-0.5 w-7 h-7 rounded-md bg-[#2BB7C4]/8 flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2BB7C4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={icon} />
                    </svg>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs mb-0.5" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>{label}</div>
                    <div className="text-slate-700 text-sm" style={{ fontFamily: 'var(--font-body)' }}>{value}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-slate-500 text-xs"
            style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}
          >
            © {year} AIMS-PAGE — Advanced Institute of Molecular Sciences. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#80B93C] animate-pulse" aria-hidden="true" />
            <span className="text-slate-500 text-xs" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>
              Pharma · Agri · Environmental
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
