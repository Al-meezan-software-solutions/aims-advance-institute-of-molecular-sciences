'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AimsLogo from '@/components/AimsLogo';

const NAV_LINKS = [
  { href: '/about',          label: 'About'         },
  { href: '/mission',        label: 'Mission'        },
  { href: '/values',         label: 'Values'         },
  { href: '/services',       label: 'Services'       },
  { href: '/research-units', label: 'Research Units' },
  { href: '/training',       label: 'Training'       },
  { href: '/instruments',    label: 'Instruments'    },
  { href: '/contact',        label: 'Contact'        },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* ── Top utility bar ───────────────────────────────────── */}
      <div className="bg-[#F8FAFC] border-b border-slate-200/60 text-slate-600 text-xs py-1.5 hidden lg:block">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <span style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
            Advanced Institute of Molecular Sciences — Pharma · Agri · Environmental
          </span>
          <Link
            href="/contact"
            className="text-[#2BB7C4] hover:text-[#0B3450] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#2BB7C4] rounded"
            style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}
          >
            Contact Us →
          </Link>
        </div>
      </div>

      {/* ── Main nav ──────────────────────────────────────────── */}
      <nav
        id="main-nav"
        role="navigation"
        aria-label="Main navigation"
        className={`sticky top-0 z-40 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-white/96 border-gray-200 shadow-sm'
            : 'bg-white/96 border-gray-100'
        }`}
      >
        <Link
          href="/"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:bg-[#0B3450] focus:text-white focus:px-4 focus:py-2 focus:rounded focus:z-50 focus:text-sm"
        >
          Skip to main content
        </Link>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-[#2BB7C4] rounded"
            aria-label="AIMS-PAGE home"
          >
            <AimsLogo size={38} variant="light" />
            <div className="leading-none">
              <div
                className="font-bold text-[#0B3450] tracking-tight"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                AIMS<span className="text-[#2BB7C4]">-PAGE</span>
              </div>
              <div
                className="text-[#6B7A8D] hidden sm:block"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.1em', marginTop: '2px' }}
              >
                YOUR PARTNER IN GROWTH
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5" role="list">
            {NAV_LINKS.map(link => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[0.82rem] font-medium px-3 py-2 rounded-md transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#2BB7C4] ${
                      isActive
                        ? 'text-[#0B3450] bg-[#F6FAFB] font-semibold'
                        : 'text-[#2D3748] hover:text-[#0B3450] hover:bg-gray-50'
                    }`}
                    style={{ fontFamily: 'var(--font-body)' }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 bg-[#0B3450] hover:bg-[#164e78] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#2BB7C4]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Get in Touch
            </Link>
            <button
              className="lg:hidden text-[#0B3450] p-2 rounded-md hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-[#2BB7C4]"
              aria-expanded={open} aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen(v => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
                {open
                  ? <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L11 9.586l5.293-5.293a1 1 0 111.414 1.414L12.414 11l5.293 5.293a1 1 0 01-1.414 1.414L11 12.414l-5.293 5.293a1 1 0 01-1.414-1.414L9.586 11 4.293 5.707a1 1 0 010-1.414z"/>
                  : <path fillRule="evenodd" clipRule="evenodd" d="M2 5a1 1 0 011-1h16a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H3a1 1 0 01-1-1z"/>
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div id="mobile-menu" className="lg:hidden border-t border-gray-100 bg-white px-6 pb-6 pt-3">
            <ul className="space-y-1" role="list">
              {NAV_LINKS.map(link => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block font-medium text-sm px-3 py-2.5 rounded-md transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#2BB7C4] ${
                        isActive
                          ? 'text-[#0B3450] bg-[#F6FAFB] font-semibold'
                          : 'text-[#2D3748] hover:text-[#0B3450] hover:bg-gray-50'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link
                href="/contact"
                className="block text-center bg-[#0B3450] hover:bg-[#164e78] text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
