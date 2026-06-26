'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AimsLogo from '@/components/AimsLogo';

const HOME_ITEMS = [
  { href: '/#highlights', label: 'Highlights', color: '#2BB7C4' },
  { href: '/mission#vision-card', label: 'Vision', color: '#80B93C' },
  { href: '/mission#mission-card', label: 'Mission', color: '#2BB7C4' },
  { href: '/values', label: 'Values', color: '#5E8C3A' },
  { href: '/registrations-certifications', label: 'Registrations & Certifications', color: '#2BB7C4' },
];

const RESEARCH_SERVICES_ITEMS = [
  { href: '/services/agri-biotechnology', label: 'Agri-Biotechnology', color: '#5E8C3A' },
  { href: '/services/bio-pharmaceutical', label: 'Bio-Pharmaceutical', color: '#2F6FB0' },
  { href: '/services/environmental-science', label: 'Environmental Science', color: '#9C7349' },
  { href: '/services/cell-culture-genetics', label: 'Cell Culture & Genetic Engineering', color: '#C24E72' },
  { href: '/services/nano-formulation', label: 'Nano Formulation & Characterisation', color: '#A855F7' },
  { href: '/services/bioinformatics', label: 'Bioinformatics', color: '#6750A4' },
  // { href: '/services/clinical-diagnosis', label: 'Clinical Diagnostics', color: '#0D9488' },
  { href: '/training', label: 'Training Services', color: '#80B93C' },
];

const CLINICAL_DIAGNOSTICS_ITEMS = [
  { href: '/clinical-diagnostics/human', label: 'Human Diagnostics', color: '#0D9488' },
  { href: '/clinical-diagnostics/veterinary', label: 'Veterinary Diagnostics', color: '#5E8C3A' },
];

const TOOLS_TECHNIQUES_ITEMS = [
  { href: '/tools-techniques#images', label: 'Test with images', color: '#2BB7C4' },
];

const NAV_LINKS = [
  {
    label: 'Home',
    href: '/',
    dropdown: HOME_ITEMS,
  },
  {
    label: 'Our Team',
    href: '/team',
  },
  {
    label: 'Research Services',
    href: '/services',
    dropdown: RESEARCH_SERVICES_ITEMS,
  },
  {
    label: 'Clinical Diagnostic Services',
    href: '/clinical-diagnostics',
    dropdown: CLINICAL_DIAGNOSTICS_ITEMS,
  },
  {
    label: 'Tools & Techniques Used',
    href: '/tools-techniques',
    dropdown: TOOLS_TECHNIQUES_ITEMS,
  },
  {
    label: 'Projects & Publications',
    href: '/publications',
  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [expandedMobileLink, setExpandedMobileLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
    setExpandedMobileLink(null);
  }, [pathname]);

  const toggleMobileDropdown = (label: string) => {
    setExpandedMobileLink(prev => (prev === label ? null : label));
  };

  return (
    <>
      {/* ── Top utility bar ───────────────────────────────────── */}
      <div className="bg-[#F8FAFC] border-b border-slate-200/60 text-slate-600 text-xs py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <span className="font-bold" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
            Advanced Institute of Molecular Sciences — Pharma · Agri · Environmental
          </span>
        </div>
      </div>

      {/* ── Main nav ──────────────────────────────────────────── */}
      <nav
        id="main-nav"
        role="navigation"
        aria-label="Main navigation"
        className={`sticky top-0 z-40 transition-all duration-300 border-b ${scrolled
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

        <div className="max-w-[90rem] mx-auto px-4 lg:px-6 flex items-center justify-between h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 focus-visible:outline-2 focus-visible:outline-[#2BB7C4] rounded"
            aria-label="AIMS-PAGE home"
          >
            <AimsLogo size={76} variant="light" />
            <div className="leading-none">
              <div
                className="font-bold text-[#0B3450] tracking-tight"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem' }}
              >
                AIMS<span className="text-[#2BB7C4]">-PAGE</span>
              </div>
              <div
                className="text-[#6B7A8D] hidden sm:block"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.08em', marginTop: '4px' }}
              >
                FOR QUALITY LIFE
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5" role="list">
            {NAV_LINKS.map(link => {
              const hasDropdown = 'dropdown' in link;
              const isHovered = hoveredLink === link.label;
              const isActive = pathname === link.href || (hasDropdown && link.dropdown?.some(item => pathname === item.href.split('#')[0]));

              return (
                <li
                  key={link.label}
                  className="relative py-2"
                  onMouseEnter={() => hasDropdown && setHoveredLink(link.label)}
                  onMouseLeave={() => hasDropdown && setHoveredLink(null)}
                >
                  {hasDropdown ? (
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        className={`text-[0.76rem] font-medium pl-2.5 pr-1 py-1.5 rounded-md flex items-center transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#2BB7C4] ${isActive
                          ? 'text-[#0B3450] font-semibold'
                          : 'text-[#2D3748] hover:text-[#0B3450]'
                          }`}
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {link.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={isHovered}
                        aria-label={`Toggle ${link.label} menu`}
                        className={`p-1 mr-1.5 rounded-md hover:bg-gray-100 transition-colors cursor-pointer text-slate-400 hover:text-[#0B3450] focus-visible:outline-2 focus-visible:outline-[#2BB7C4]`}
                      >
                        <svg
                          className={`w-3 h-3 transition-transform duration-200 ${isHovered ? 'rotate-180 text-[#2BB7C4]' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <Link
                      href={link.href || '#'}
                      className={`text-[0.76rem] font-medium px-2.5 py-1.5 rounded-md transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#2BB7C4] ${pathname === link.href
                        ? 'text-[#0B3450] bg-[#F6FAFB] font-semibold'
                        : 'text-[#2D3748] hover:text-[#0B3450] hover:bg-gray-50'
                        }`}
                      style={{ fontFamily: 'var(--font-body)' }}
                      aria-current={pathname === link.href ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {hasDropdown && link.dropdown && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${link.label === 'Research Services' || link.label === 'Clinical Diagnostic Services' ? 'w-76' : 'w-52'
                        } ${isHovered
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                        }`}
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2.5 z-50">
                        <ul className="space-y-0.5" role="menu">
                          {link.dropdown.map(item => (
                            <li key={item.href} role="none">
                              <Link
                                href={item.href}
                                role="menuitem"
                                className="flex items-center gap-3 px-4 py-2 text-[0.78rem] text-slate-700 hover:text-[#0B3450] hover:bg-gray-50 transition-colors font-medium"
                                style={{ fontFamily: 'var(--font-body)' }}
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full shrink-0"
                                  style={{ backgroundColor: item.color }}
                                />
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
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
              Contact Us
            </Link>
            <button
              className="lg:hidden text-[#0B3450] p-2 rounded-md hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-[#2BB7C4]"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen(v => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
                {open ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L11 9.586l5.293-5.293a1 1 0 111.414 1.414L12.414 11l5.293 5.293a1 1 0 01-1.414 1.414L11 12.414l-5.293 5.293a1 1 0 01-1.414-1.414L9.586 11 4.293 5.707a1 1 0 010-1.414z" />
                ) : (
                  <path fillRule="evenodd" clipRule="evenodd" d="M2 5a1 1 0 011-1h16a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H3a1 1 0 01-1-1z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div id="mobile-menu" className="lg:hidden border-t border-gray-100 bg-white px-6 pb-6 pt-3 max-h-[85vh] overflow-y-auto">
            <ul className="space-y-1" role="list">
              {NAV_LINKS.map(link => {
                const hasDropdown = 'dropdown' in link;
                const isExpanded = expandedMobileLink === link.label;
                const isActive = pathname === link.href;

                return (
                  <li key={link.label} className="border-b border-gray-50 last:border-b-0 py-1">
                    {hasDropdown ? (
                      <div>
                        <button
                          onClick={() => toggleMobileDropdown(link.label)}
                          className="flex items-center justify-between w-full font-medium text-sm px-3 py-2.5 rounded-md text-[#2D3748] hover:text-[#0B3450] hover:bg-gray-50 text-left transition-colors cursor-pointer"
                        >
                          <span>{link.label}</span>
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#2BB7C4]' : 'text-slate-400'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Mobile accordion dropdown items */}
                        <div
                          className={`mt-1 pl-4 space-y-1 transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[500px] opacity-100 py-1.5' : 'max-h-0 opacity-0 pointer-events-none'
                            }`}
                        >
                          {link.dropdown?.map(item => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center gap-3 font-medium text-xs px-3 py-2 rounded-md text-[#4A5568] hover:text-[#0B3450] hover:bg-gray-50 transition-colors"
                            >
                              <span
                                className="w-2.5 h-2.5 rounded-full shrink-0"
                                style={{ backgroundColor: item.color }}
                              />
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href || '#'}
                        className={`block font-medium text-sm px-3 py-2.5 rounded-md transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#2BB7C4] ${isActive
                          ? 'text-[#0B3450] bg-[#F6FAFB] font-semibold'
                          : 'text-[#2D3748] hover:text-[#0B3450] hover:bg-gray-50'
                          }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link
                href="/contact"
                className="block text-center bg-[#0B3450] hover:bg-[#164e78] text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

