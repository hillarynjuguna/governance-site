import { useState } from 'react';

interface NodeData {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  href: string;
  x: number;
  width: number;
}

interface LayerData {
  id: string;
  num: string;
  name: string;
  subtitle: string;
  y: number;
  height: number;
  nodes: NodeData[];
}

export default function StackDiagram() {
  const [hoveredNode, setHoveredNode] = useState<NodeData | null>(null);

  const layers: LayerData[] = [
    {
      id: 'sovereign',
      num: 'L5',
      name: 'Sovereign',
      subtitle: 'Human Agency',
      y: 20,
      height: 64,
      nodes: [
        {
          id: 'tau-node',
          name: 'Tau-Node (Human Sovereign)',
          subtitle: 'Operational Intent',
          description: 'The human sovereign directing cognitive orchestration, setting constraints, and establishing runtime intent.',
          href: '/rsps-architecture',
          x: 180,
          width: 596
        }
      ]
    },
    {
      id: 'translational',
      num: 'L4',
      name: 'Translational',
      subtitle: 'Practitioner Fluency',
      y: 100,
      height: 64,
      nodes: [
        {
          id: 'martha-course',
          name: 'Martha Course',
          subtitle: 'Constitutional Curriculum',
          description: 'A 12-module practitioner training program bridging the gap between governance principles and system implementation.',
          href: '/martha-course',
          x: 180,
          width: 596
        }
      ]
    },
    {
      id: 'operational',
      num: 'L3',
      name: 'Operational',
      subtitle: 'Evaluation & Drift',
      y: 180,
      height: 64,
      nodes: [
        {
          id: 'cir-diagnostic',
          name: 'CIR Diagnostic Engine',
          subtitle: 'Reversibility Audit',
          description: 'Constitutional AI audit engine that extracts a Boolean presence matrix to score architectures against four core primitives.',
          href: '/cir-diagnostic-engine',
          x: 180,
          width: 290
        },
        {
          id: 'delta-instrument',
          name: 'delta-instrument',
          subtitle: 'Behavioral Drift Monitor',
          description: 'Continuous monitoring framework tracking post-deployment system drift and policy alignment metrics.',
          href: '/delta-instrument',
          x: 486,
          width: 290
        }
      ]
    },
    {
      id: 'infrastructural',
      num: 'L2',
      name: 'Infrastructural',
      subtitle: 'Orchestration & Audit',
      y: 260,
      height: 64,
      nodes: [
        {
          id: 'rsps-architecture',
          name: 'RSPS Architecture',
          subtitle: 'Cognitive Relational Field',
          description: 'Recursive Sovereign Project Space; six-node architecture mapping sovereign-to-ensemble interaction boundaries.',
          href: '/rsps-architecture',
          x: 180,
          width: 290
        },
        {
          id: 'ce-ledger',
          name: 'CE-Ledger',
          subtitle: 'Constitutional Event Ledger',
          description: 'Immutably logs execution states and boundary crossings to generate verifiable audit trails.',
          href: '/ce-ledger',
          x: 486,
          width: 290
        }
      ]
    },
    {
      id: 'foundational',
      num: 'L1',
      name: 'Foundational',
      subtitle: 'Theory & Protocols',
      y: 340,
      height: 64,
      nodes: [
        {
          id: 'sovereign-types',
          name: 'sovereign-types',
          subtitle: 'Data Contracts',
          description: 'TypeScript schema packages defining strict structures for provenance-first metadata envelopes.',
          href: '/sovereign-types',
          x: 180,
          width: 188
        },
        {
          id: 'bainbridge-warning',
          name: 'Bainbridge Warning',
          subtitle: 'Risk Framework',
          description: 'Systematic analysis of behavioral layer exposure and the transparency paradox in complex AI systems.',
          href: '/bainbridge-warning',
          x: 384,
          width: 188
        },
        {
          id: 'premise',
          name: 'Premise',
          subtitle: 'Axiomatic Basis',
          description: 'Foundational values, literature references, and structural axioms that anchor the entire governance stack.',
          href: '/premise',
          x: 588,
          width: 188
        }
      ]
    }
  ];

  return (
    <div className="w-full flex flex-col gap-6 p-6 border border-border-subtle bg-surface rounded-xl shadow-lg">
      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs text-amber-600 uppercase tracking-widest block">Interactive Blueprints</span>
        <h3 className="font-display text-2xl text-text-primary">The Sovereign Governance Stack</h3>
        <p className="text-sm text-text-secondary max-w-2xl leading-relaxed">
          Hover over each node in the diagram to inspect its role and relationship to the governance architecture. Click any node to review its specification and technical documentation.
        </p>
      </div>

      {/* SVG Container */}
      <div className="relative overflow-x-auto">
        <svg
          viewBox="0 0 800 424"
          className="w-full min-w-[700px] h-auto select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Grid / Background Lines */}
          <line x1="150" y1="10" x2="150" y2="414" className="stroke-border-subtle" strokeDasharray="4 4" />

          {layers.map((layer, index) => (
            <g key={layer.id} id={`layer-${layer.id}`}>
              {/* Divider lines between layers */}
              {index < layers.length - 1 && (
                <line
                  x1="24"
                  y1={layer.y + layer.height + 8}
                  x2="776"
                  y2={layer.y + layer.height + 8}
                  className="stroke-border-subtle"
                  strokeDasharray="2 4"
                />
              )}

              {/* Layer Title Block on Left */}
              <text x="24" y={layer.y + 24} className="fill-text-primary font-display text-sm font-semibold">
                {layer.name}
              </text>
              <text x="24" y={layer.y + 40} className="fill-text-muted font-mono text-[9px] uppercase tracking-wider">
                {layer.subtitle}
              </text>
              <text x="130" y={layer.y + 28} className="fill-amber-600 font-mono text-xs font-semibold">
                {layer.num}
              </text>

              {/* Nodes */}
              {layer.nodes.map((node) => {
                const isHovered = hoveredNode?.id === node.id;
                return (
                  <a
                    href={node.href}
                    key={node.id}
                    id={`node-${node.id}`}
                    className="group"
                    onMouseEnter={() => setHoveredNode(node)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    {/* Node Box */}
                    <rect
                      x={node.x}
                      y={layer.y}
                      width={node.width}
                      height={layer.height}
                      rx="6"
                      className={`transition-all duration-300 cursor-pointer ${
                        isHovered
                          ? 'fill-amber-600/10 stroke-amber-600'
                          : 'fill-ground/40 stroke-border-subtle group-hover:stroke-amber-600/50'
                      }`}
                      strokeWidth="1.5"
                    />

                    {/* Node Text Name */}
                    <text
                      x={node.x + 16}
                      y={layer.y + 24}
                      className={`font-body text-xs font-semibold transition-colors duration-300 ${
                        isHovered ? 'fill-amber-500' : 'fill-text-primary'
                      }`}
                    >
                      {node.name}
                    </text>

                    {/* Node Text Subtitle */}
                    <text
                      x={node.x + 16}
                      y={layer.y + 42}
                      className="fill-text-muted font-mono text-[9px] uppercase tracking-wider"
                    >
                      {node.subtitle}
                    </text>

                    {/* Small Right Arrow Indicator */}
                    <path
                      d={`M ${node.x + node.width - 24} ${layer.y + 32} l 4 4 l -4 4`}
                      className={`stroke-2 transition-all duration-300 fill-none ${
                        isHovered ? 'stroke-amber-500 translate-x-1' : 'stroke-text-muted group-hover:stroke-text-secondary'
                      }`}
                    />
                  </a>
                );
              })}
            </g>
          ))}
        </svg>
      </div>

    {/* Live Description Panel */}
    <div className="h-24 px-5 py-4 bg-ground/50 rounded-lg border border-border-subtle flex flex-col justify-center transition-all duration-300">
      {hoveredNode ? (
        <div className="animate-fade-in">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs font-semibold text-amber-600">{hoveredNode.subtitle}</span>
            <span className="text-text-muted text-[10px]">&mdash;</span>
            <span className="font-body text-sm font-semibold text-text-primary">{hoveredNode.name}</span>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed">{hoveredNode.description}</p>
        </div>
      ) : (
        <p className="text-xs text-text-muted italic text-center font-mono">
          Hover over any stack primitive above to decode its alignment and integration vector.
        </p>
      )}
    </div>
  </div>
  );
}
