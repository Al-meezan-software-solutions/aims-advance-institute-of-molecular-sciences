// Pure SVG decorative motifs — no photos, no stock imagery.
// Each exports a lightweight React component.

interface MotifProps {
  color: string;
  className?: string;
  size?: number;
}

/** Hexagon lattice — used as section background texture */
export function HexLattice({ color, className = '', size = 320 }: MotifProps) {
  // Single hex tile repeated via pattern
  const r = 18;
  const w = r * 2;
  const h = Math.sqrt(3) * r;
  const hexPoints = (cx: number, cy: number) => {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
    }
    return pts.join(' ');
  };

  return (
    <svg
      aria-hidden="true"
      className={`hex-motif ${className}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={`hex-${color.replace('#', '')}`} x="0" y="0" width={w * 1.5} height={h} patternUnits="userSpaceOnUse">
          <polygon points={hexPoints(w * 0.5, h * 0.5)} fill="none" stroke={color} strokeWidth="1" />
          <polygon points={hexPoints(w * 1.25, 0)} fill="none" stroke={color} strokeWidth="1" />
          <polygon points={hexPoints(w * 1.25, h)} fill="none" stroke={color} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width={size} height={size} fill={`url(#hex-${color.replace('#', '')})`} />
    </svg>
  );
}

/** DNA double-helix ribbon — hero section centrepiece */
export function HelixRibbon({ color, className = '', size = 240 }: MotifProps) {
  const W = 120;
  const H = size;
  const segments = 8;
  const amplitude = 38;

  const buildSpine = (phase: number) => {
    const pts = [];
    for (let i = 0; i <= segments * 12; i++) {
      const t = i / (segments * 12);
      const y = t * H;
      const x = W / 2 + amplitude * Math.sin(t * Math.PI * segments * 2 + phase);
      pts.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
    }
    return pts.join(' ');
  };

  const rungs: { x1: number; y1: number; x2: number; y2: number }[] = [];
  for (let i = 0; i < segments * 2; i++) {
    const t = (i + 0.5) / (segments * 2);
    const y = t * H;
    const x1 = W / 2 + amplitude * Math.sin(t * Math.PI * segments * 2);
    const x2 = W / 2 + amplitude * Math.sin(t * Math.PI * segments * 2 + Math.PI);
    rungs.push({ x1, y1: y, x2, y2: y });
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`hg-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.05" />
          <stop offset="50%" stopColor={color} stopOpacity="0.22" />
          <stop offset="100%" stopColor={color} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {rungs.map((r, i) => (
        <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
          stroke={color} strokeWidth="1.2" strokeOpacity="0.3" />
      ))}
      <path d={buildSpine(0)} fill="none" stroke={color} strokeWidth="2.5" strokeOpacity="0.6" />
      <path d={buildSpine(Math.PI)} fill="none" stroke={color} strokeWidth="2.5" strokeOpacity="0.6" />
      {rungs.map((r, i) => (
        <g key={`dot-${i}`}>
          <circle cx={r.x1} cy={r.y1} r="3.5" fill={color} fillOpacity="0.75" />
          <circle cx={r.x2} cy={r.y2} r="3.5" fill={color} fillOpacity="0.75" />
        </g>
      ))}
    </svg>
  );
}

/** Petri-dish concentric rings */
export function PetriRings({ color, className = '', size = 200 }: MotifProps) {
  const cx = size / 2;
  const cy = size / 2;
  const radii = [size * 0.44, size * 0.33, size * 0.22, size * 0.12];
  return (
    <svg
      aria-hidden="true"
      className={`hex-motif ${className}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {radii.map((r, i) => (
        <circle key={i} cx={cx} cy={cy} r={r}
          fill="none" stroke={color} strokeWidth="1.5"
          strokeDasharray={i % 2 === 0 ? 'none' : '4 4'}
          opacity={0.6 - i * 0.1} />
      ))}
      <circle cx={cx} cy={cy} r="4" fill={color} opacity="0.5" />
    </svg>
  );
}

/** Ribbon-diagram protein abstraction */
export function RibbonDiagram({ color, className = '', size = 180 }: MotifProps) {
  return (
    <svg
      aria-hidden="true"
      className={`hex-motif ${className}`}
      width={size}
      height={size}
      viewBox="0 0 180 180"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Alpha helix ribbon */}
      <path
        d="M 30 150 C 30 120, 80 110, 90 90 C 100 70, 150 60, 150 30"
        fill="none" stroke={color} strokeWidth="7" strokeOpacity="0.35"
        strokeLinecap="round"
      />
      <path
        d="M 20 140 C 20 115, 70 105, 80 85 C 90 65, 140 55, 140 25"
        fill="none" stroke={color} strokeWidth="3" strokeOpacity="0.25"
        strokeLinecap="round"
      />
      {/* Beta sheet arrows */}
      <polyline points="50,155 50,120 62,120 45,100 28,120 40,120 40,155"
        fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.2" strokeOpacity="0.4" strokeLinejoin="round" />
      <polyline points="120,30 120,65 132,65 115,85 98,65 110,65 110,30"
        fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.2" strokeOpacity="0.4" strokeLinejoin="round" />
      {/* Loop coil */}
      <path
        d="M 62 130 Q 95 140 90 90 Q 85 70 118 75"
        fill="none" stroke={color} strokeWidth="2" strokeOpacity="0.4"
        strokeDasharray="4 3" strokeLinecap="round"
      />
    </svg>
  );
}

/** Molecular network graph — nodes + edges */
export function MolecularGraph({ color, className = '', size = 200 }: MotifProps) {
  const nodes = [
    { x: 100, y: 40 }, { x: 160, y: 80 }, { x: 155, y: 145 },
    { x: 90, y: 170 }, { x: 35, y: 135 }, { x: 42, y: 70 },
    { x: 100, y: 105 },
  ];
  const edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
    [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5]];
  return (
    <svg
      aria-hidden="true"
      className={`hex-motif ${className}`}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {edges.map(([a, b], i) => (
        <line key={i}
          x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke={color} strokeWidth="1.5" strokeOpacity="0.3" />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={i === 6 ? 8 : 5}
          fill={color} fillOpacity={i === 6 ? 0.6 : 0.4} />
      ))}
    </svg>
  );
}

/** Single large hexagon outline — unit card header accent */
export function HexOutline({ color, className = '', size = 64 }: MotifProps) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.44;
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(' ');
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points={pts} fill="none" stroke={color} strokeWidth="2" opacity="0.7" />
    </svg>
  );
}
