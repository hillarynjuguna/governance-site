import { useState } from 'react';

interface ArchitectureProfile {
  id: string;
  name: string;
  description: string;
  reversibility: number; // 0 to 100
  boundaries: number;
  invariants: number;
  authority: number;
  strengths: string[];
  vulnerabilities: string[];
}

export default function RadarChart() {
  const profiles: ArchitectureProfile[] = [
    {
      id: 'chatbot',
      name: 'Multi-Agent Support Chatbot',
      description: 'An LLM-driven ensemble communicating with users. Highly reversible, but exhibits loose boundaries and weak invariant rule enforcement under prompt engineering stress.',
      reversibility: 80,
      boundaries: 40,
      invariants: 30,
      authority: 50,
      strengths: [
        'Easily muted/disconnected by human operator',
        'State transitions are simple history buffers'
      ],
      vulnerabilities: [
        'Loose data boundaries between tool endpoints',
        'High susceptibility to context hijacking / injection'
      ]
    },
    {
      id: 'coding-agent',
      name: 'Autonomous Coding Agent',
      description: 'An AI developer executing shell tools and modifying source files. Moderate invariants, but low reversibility due to direct side effects on external filesystems.',
      reversibility: 40,
      boundaries: 60,
      invariants: 65,
      authority: 30,
      strengths: [
        'Sandboxed runtime environment limits direct damage',
        'Strict parsers validate code structure before execution'
      ],
      vulnerabilities: [
        'Difficult to undo complex directory modifications',
        'High execution authority with minimal human check-ins'
      ]
    },
    {
      id: 'clinical-system',
      name: 'Clinical Decision System',
      description: 'A clinical advice assistant matching patient charts to medical guidelines. High score across all primitives due to strict advisory limits and zero autonomous execution authority.',
      reversibility: 95,
      boundaries: 85,
      invariants: 90,
      authority: 95,
      strengths: [
        'No direct physical action can be executed by system',
        'Immutable patient privacy boundaries strictly audited',
        'Deterministic validation ensures clinical rules stay true'
      ],
      vulnerabilities: [
        'Potential clinician over-reliance on advisory outputs',
        'Out-of-distribution cases lack fallback diagnostics'
      ]
    }
  ];

  const [activeProfile, setActiveProfile] = useState<ArchitectureProfile>(profiles[0]);

  // Center coordinate of the radar chart
  const cx = 200;
  const cy = 200;
  const r = 130; // Max radius (100%)

  // Helper to calculate coordinate for an axis value (0 to 100)
  // Axis 0: Reversibility (Up: 0 deg) -> x = cx, y = cy - (val% * r)
  // Axis 1: Boundaries (Right: 90 deg) -> x = cx + (val% * r), y = cy
  // Axis 2: Invariants (Down: 180 deg) -> x = cx, y = cy + (val% * r)
  // Axis 3: Authority (Left: 270 deg) -> x = cx - (val% * r), y = cy

  const getPt = (axis: number, val: number) => {
    const scale = val / 100;
    const len = scale * r;
    if (axis === 0) return { x: cx, y: cy - len };
    if (axis === 1) return { x: cx + len, y: cy };
    if (axis === 2) return { x: cx, y: cy + len };
    return { x: cx - len, y: cy };
  };

  const p0 = getPt(0, activeProfile.reversibility);
  const p1 = getPt(1, activeProfile.boundaries);
  const p2 = getPt(2, activeProfile.invariants);
  const p3 = getPt(3, activeProfile.authority);

  const polyPoints = `${p0.x},${p0.y} ${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}`;

  return (
    <div className="w-full border border-border-subtle bg-surface rounded-xl p-6 shadow-lg">
      <div className="flex flex-col gap-2 mb-6">
        <span className="font-mono text-xs text-amber-600 uppercase tracking-widest block">CIR Diagnostics Simulator</span>
        <h3 className="font-display text-2xl text-text-primary">System Primitive Radar</h3>
        <p className="text-sm text-text-secondary max-w-2xl leading-relaxed">
          Simulate how different system architectures score against the four primary governance primitives. Toggle the architecture profiles below to watch the live geometry update.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Control Column */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Profile Selectors */}
          <div className="flex flex-col gap-2.5">
            {profiles.map((p) => {
              const isActive = activeProfile.id === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveProfile(p)}
                  className={`w-full text-left px-4 py-3 rounded-lg border font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                      : 'bg-ground/40 text-text-secondary border-border-subtle hover:border-border hover:text-text-primary'
                  }`}
                >
                  {p.name}
                </button>
              );
            })}
          </div>

          {/* Profile Details */}
          <div className="p-4 rounded-lg bg-ground/50 border border-border-subtle flex flex-col gap-3">
            <div>
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider block">Context / Description</span>
              <p className="text-xs text-text-secondary leading-relaxed mt-1">{activeProfile.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-border-subtle pt-3">
              <div>
                <span className="font-mono text-[10px] text-emerald-500 uppercase tracking-wider block">Key Strength</span>
                <p className="text-[11px] text-text-secondary leading-normal mt-1">{activeProfile.strengths[0]}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-red-400 uppercase tracking-wider block">Key Vulnerability</span>
                <p className="text-[11px] text-text-secondary leading-normal mt-1">{activeProfile.vulnerabilities[0]}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Radar Chart Display Column */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[400px]">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-auto select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Concentric Grid lines (25%, 50%, 75%, 100%) */}
              {[25, 50, 75, 100].map((v) => {
                const s = v / 100;
                const d0 = getPt(0, v);
                const d1 = getPt(1, v);
                const d2 = getPt(2, v);
                const d3 = getPt(3, v);
                return (
                  <polygon
                    key={v}
                    points={`${d0.x},${d0.y} ${d1.x},${d1.y} ${d2.x},${d2.y} ${d3.x},${d3.y}`}
                    className="stroke-border-subtle fill-none"
                    strokeWidth="1"
                    strokeDasharray="2 3"
                  />
                );
              })}

              {/* Major Axes Lines */}
              <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} className="stroke-border-subtle" strokeWidth="1" />
              <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} className="stroke-border-subtle" strokeWidth="1" />

              {/* Labels for Axis Primitives */}
              <text x={cx} y={cy - r - 12} className="fill-text-primary font-mono text-[9px] uppercase tracking-wider text-center" textAnchor="middle">
                Reversibility & Safeguards
              </text>
              <text x={cx + r + 8} y={cy + 4} className="fill-text-primary font-mono text-[9px] uppercase tracking-wider" textAnchor="start">
                Boundaries
              </text>
              <text x={cx} y={cy + r + 18} className="fill-text-primary font-mono text-[9px] uppercase tracking-wider text-center" textAnchor="middle">
                Invariant Rules
              </text>
              <text x={cx - r - 8} y={cy + 4} className="fill-text-primary font-mono text-[9px] uppercase tracking-wider" textAnchor="end">
                Authority
              </text>

              {/* Score polygon */}
              <polygon
                points={polyPoints}
                className="fill-amber-600/20 stroke-amber-600 transition-all duration-500 ease-out"
                strokeWidth="2.5"
              />

              {/* Score points */}
              {[p0, p1, p2, p3].map((pt, i) => (
                <circle
                  key={i}
                  cx={pt.x}
                  cy={pt.y}
                  r="5"
                  className="fill-amber-600 stroke-ground transition-all duration-500 ease-out"
                  strokeWidth="2"
                />
              ))}

              {/* Values Labels inside radar chart */}
              <text x={p0.x + 8} y={p0.y - 4} className="fill-amber-500 font-mono text-[10px] font-bold transition-all duration-500 ease-out">{activeProfile.reversibility}%</text>
              <text x={p1.x + 8} y={p1.y - 4} className="fill-amber-500 font-mono text-[10px] font-bold transition-all duration-500 ease-out">{activeProfile.boundaries}%</text>
              <text x={p2.x + 8} y={p2.y + 12} className="fill-amber-500 font-mono text-[10px] font-bold transition-all duration-500 ease-out">{activeProfile.invariants}%</text>
              <text x={p3.x - 30} y={p3.y - 4} className="fill-amber-500 font-mono text-[10px] font-bold transition-all duration-500 ease-out">{activeProfile.authority}%</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
