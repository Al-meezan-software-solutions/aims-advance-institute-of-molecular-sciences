'use client';

import { useEffect, useRef, useState } from 'react';

const UNIT_COLORS = ['#5E8C3A', '#2F6FB0', '#9C7349', '#C24E72', '#6750A4'];
const UNIT_IDS = ['unit-1', 'unit-2', 'unit-3', 'unit-4', 'unit-5'];

export default function DnaStrand() {
  const [activeColor, setActiveColor] = useState(UNIT_COLORS[0]);
  const colorRef = useRef(activeColor);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is most visible
        let topEntry: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!topEntry || entry.boundingClientRect.top < topEntry.boundingClientRect.top) {
              topEntry = entry;
            }
          }
        }
        if (topEntry) {
          const id = topEntry.target.id;
          const idx = UNIT_IDS.indexOf(id);
          if (idx !== -1) {
            const newColor = UNIT_COLORS[idx];
            if (newColor !== colorRef.current) {
              colorRef.current = newColor;
              setActiveColor(newColor);
            }
          }
        }
      },
      { threshold: 0.2 }
    );

    UNIT_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Build helix path points
  const W = 32;
  const H = 800; // viewBox height — repeats via pattern
  const segments = 12;
  const segH = H / segments;

  // Left spine: sine wave on left side
  // Right spine: sine wave phase-shifted by PI
  const buildPath = (phase: number) => {
    let d = '';
    for (let i = 0; i <= segments * 4; i++) {
      const t = i / (segments * 4);
      const y = t * H;
      const x = W / 2 + (W / 2 - 4) * Math.sin(t * Math.PI * segments * 2 + phase);
      if (i === 0) d += `M ${x} ${y}`;
      else d += ` L ${x} ${y}`;
    }
    return d;
  };

  // Rungs connecting the two helices at regular intervals
  const rungs: { x1: number; y1: number; x2: number; y2: number }[] = [];
  const rungCount = segments * 2;
  for (let i = 0; i < rungCount; i++) {
    const t = (i + 0.5) / rungCount;
    const y = t * H;
    const x1 = W / 2 + (W / 2 - 4) * Math.sin(t * Math.PI * segments * 2);
    const x2 = W / 2 + (W / 2 - 4) * Math.sin(t * Math.PI * segments * 2 + Math.PI);
    rungs.push({ x1, y1: y, x2, y2: y });
  }

  return (
    <aside
      id="dna-strand"
      aria-hidden="true"
      style={{ transition: 'color 0.6s ease' }}
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        style={{
          color: activeColor,
          transition: 'color 0.7s ease',
          overflow: 'visible',
        }}
      >
        <defs>
          <filter id="dna-glow">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Rungs */}
        {rungs.map((r, i) => (
          <line
            key={i}
            x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.35"
          />
        ))}

        {/* Left spine */}
        <path
          d={buildPath(0)}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeOpacity="0.7"
          filter="url(#dna-glow)"
        />

        {/* Right spine */}
        <path
          d={buildPath(Math.PI)}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeOpacity="0.7"
          filter="url(#dna-glow)"
        />

        {/* Node dots */}
        {rungs.map((r, i) => (
          <g key={`node-${i}`}>
            <circle cx={r.x1} cy={r.y1} r="2.2" fill="currentColor" fillOpacity="0.9" />
            <circle cx={r.x2} cy={r.y2} r="2.2" fill="currentColor" fillOpacity="0.9" />
          </g>
        ))}
      </svg>
    </aside>
  );
}
