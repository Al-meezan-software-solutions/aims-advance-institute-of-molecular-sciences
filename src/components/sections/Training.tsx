import { TRAINING_COURSES } from '@/lib/data';
import ScrollReveal from '@/components/ScrollReveal';

export default function Training() {
  return (
    <section
      id="training"
      aria-labelledby="training-heading"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#80B93C]" aria-hidden="true" />
              <span className="eyebrow text-[#80B93C]">Training Programmes</span>
            </div>
            <h2
              id="training-heading"
              className="section-title text-[#0B3450]"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}
            >
              Training Courses Offered
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <p className="text-[#6B7A8D] leading-relaxed" style={{ fontSize: '0.97rem' }}>
              Structured, laboratory-intensive courses for working scientists, postgraduate
              students, and technical staff — delivered at the AIMS-PAGE facility with
              access to our full instrumentation suite.
            </p>
          </ScrollReveal>
        </div>

        {/* Course list — two-column table-style */}
        <div
          className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
          role="list"
          aria-label="Training courses"
        >
          {TRAINING_COURSES.map((course, i) => (
            <ScrollReveal key={course.code} delay={i * 40}>
              <article
                role="listitem"
                aria-labelledby={`course-${i}-heading`}
                className={`flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 px-6 py-5 group hover:bg-[#F6FAFB] transition-colors duration-150 ${
                  i < TRAINING_COURSES.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                {/* Code badge */}
                <div className="shrink-0 sm:w-24 flex sm:justify-center pt-0.5">
                  <span
                    className="eyebrow px-2.5 py-1 rounded-md bg-[#0B3450]/06 text-[#0B3450] group-hover:bg-[#0B3450] group-hover:text-white transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {course.code}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    id={`course-${i}-heading`}
                    className="text-[#0B3450] font-semibold mb-1 group-hover:text-[#164e78] transition-colors duration-150"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '0.97rem' }}
                  >
                    {course.title}
                  </h3>
                  <p className="text-[#6B7A8D] text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Hover arrow */}
                <div className="shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#2BB7C4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3.75 9h10.5M9 3.75L14.25 9 9 14.25" />
                  </svg>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Bespoke CTA banner */}
        <ScrollReveal delay={120}>
          <div
            className="mt-10 rounded-2xl overflow-hidden relative border border-slate-200/80"
            style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)' }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="#0B3450" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>
            </div>

            <div className="relative px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3
                  className="text-[#0B3450] font-bold mb-1.5"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem' }}
                >
                  Need a bespoke training programme?
                </h3>
                <p className="text-slate-600 text-sm">
                  We develop custom in-house training aligned with your laboratory methods
                  and regulatory environment.
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 inline-flex items-center gap-2 bg-[#80B93C] hover:bg-[#6ea030] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm focus-visible:outline-2 focus-visible:outline-[#80B93C]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Enquire Now
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
