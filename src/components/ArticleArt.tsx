/** Decorative editorial graphics used in place of stock photography. Purely
 * illustrative, the surrounding headings and copy carry the actual meaning. */

const NODES = [
  { x: 40, y: 145, r: 9 },
  { x: 118, y: 85, r: 11 },
  { x: 200, y: 122, r: 9 },
  { x: 282, y: 58, r: 10 },
  { x: 362, y: 104, r: 9 },
  { x: 442, y: 46, r: 15 },
];

export function NodesGraphic({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 190" className={className} aria-hidden focusable="false">
      {NODES.slice(0, -1).map((n, i) => {
        const next = NODES[i + 1];
        return (
          <line
            key={i}
            x1={n.x}
            y1={n.y}
            x2={next.x}
            y2={next.y}
            stroke="var(--color-ink)"
            strokeOpacity="0.14"
            strokeWidth="1.5"
          />
        );
      })}
      {NODES.map((n, i) => {
        const isLast = i === NODES.length - 1;
        const isAccent = i === 3;
        return (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={isLast ? "var(--color-gold)" : isAccent ? "var(--color-magenta)" : "var(--color-paper)"}
            fillOpacity={isLast || isAccent ? 1 : 0.9}
            stroke="var(--color-ink)"
            strokeOpacity={isLast || isAccent ? 0 : 0.25}
            strokeWidth="1.5"
          />
        );
      })}
    </svg>
  );
}

export function MaturityLadder({ className = "" }: { className?: string }) {
  const bars = [
    { x: 50, h: 34 },
    { x: 175, h: 70 },
    { x: 300, h: 108 },
    { x: 425, h: 150 },
  ];
  const base = 178;
  const width = 80;
  return (
    <svg viewBox="0 0 480 200" className={className} aria-hidden focusable="false">
      {bars.map((b, i) => {
        const isLast = i === bars.length - 1;
        return (
          <g key={i}>
            <rect
              x={b.x}
              y={base - b.h}
              width={width}
              height={b.h}
              fill={isLast ? "var(--color-gold)" : "var(--color-ink)"}
              fillOpacity={isLast ? 1 : 0.08}
              stroke="var(--color-ink)"
              strokeOpacity={isLast ? 0 : 0.2}
            />
            <circle
              cx={b.x + width / 2}
              cy={base - b.h - 14}
              r={isLast ? 8 : 5}
              fill={isLast ? "var(--color-gold)" : "var(--color-paper)"}
              stroke="var(--color-ink)"
              strokeOpacity={isLast ? 0 : 0.3}
              strokeWidth="1.5"
            />
          </g>
        );
      })}
      <line x1="50" y1={base} x2="480" y2={base} stroke="var(--color-ink)" strokeOpacity="0.15" />
    </svg>
  );
}

export function CompareColumns({ className = "" }: { className?: string }) {
  const scattered = [
    { x: 70, y: 60 },
    { x: 140, y: 110 },
    { x: 90, y: 150 },
    { x: 170, y: 55 },
    { x: 150, y: 155 },
  ];
  const grid = [
    { x: 300, y: 60 },
    { x: 380, y: 60 },
    { x: 460, y: 60 },
    { x: 300, y: 150 },
    { x: 380, y: 150 },
    { x: 460, y: 150 },
  ];
  const gridLines: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 4],
    [2, 5],
    [3, 4],
    [4, 5],
  ];
  return (
    <svg viewBox="0 0 540 210" className={className} aria-hidden focusable="false">
      <line x1="245" y1="20" x2="245" y2="190" stroke="var(--color-ink)" strokeOpacity="0.12" />

      {scattered.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="7" fill="var(--color-ink)" fillOpacity="0.15" />
      ))}

      {gridLines.map(([a, b], i) => (
        <line
          key={i}
          x1={grid[a].x}
          y1={grid[a].y}
          x2={grid[b].x}
          y2={grid[b].y}
          stroke="var(--color-gold)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
      ))}
      {grid.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="9"
          fill={i === 5 ? "var(--color-gold)" : "var(--color-paper)"}
          stroke="var(--color-ink)"
          strokeOpacity="0.3"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}
