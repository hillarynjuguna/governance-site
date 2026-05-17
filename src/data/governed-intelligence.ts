export interface StackComponent {
  id: string;
  name: string;
  classification: string[];
  layer: string;
  layerColor: string;
  marketTranslation: string;
  description: string;
  technical?: string;
  primitives?: string[];
  reinforcement: string;
  repoSlug?: string;
  status: string;
  isAnchor?: boolean;
  badgeColor: string;
}

export interface StackLayer {
  id: string;
  name: string;
  subtitle: string;
  color: string;
  components: StackComponent[];
}

export const GOVERNANCE_STACK_DATA: StackLayer[] = [
  {
    id: 'foundational',
    name: 'Layer 1: Foundational',
    subtitle: 'Theory & Principles',
    color: 'var(--color-layer-foundational)',
    components: [
      {
        id: 'premise',
        name: 'premise',
        classification: ['Foundational', 'Educational'],
        layer: 'Foundational',
        layerColor: 'var(--color-layer-foundational)',
        marketTranslation: 'Core Principles for Responsible AI Design',
        description: 'The foundational set of assumptions, principles, and ethical guidelines governing the ecosystem\'s design. Establishes the values and ethical boundaries that inform every other component; the constitution beneath the constitutional tools.',
        reinforcement: 'Ensures all components maintain alignment with responsible AI principles.',
        status: 'Deployed',
        badgeColor: 'var(--color-premise)',
      },
      {
        id: 'bainbridge',
        name: 'Bainbridge Warning',
        classification: ['Foundational', 'Translational'],
        layer: 'Foundational',
        layerColor: 'var(--color-layer-foundational)',
        marketTranslation: 'AI Governance Risk Framework',
        description: 'Defines critical thresholds and failure modes in complex AI systems. Identifies the gap between high AI capability and inadequate governance infrastructure. Provides four diagnostic primitives for measuring institutional AI risk.',
        reinforcement: 'Informs risk models and diagnostic criteria for CIR. Provides theoretical basis for vulnerability identification.',
        repoSlug: 'bainbridge-warning',
        status: 'Deployed',
        badgeColor: 'var(--color-bainbridge)',
      },
      {
        id: 'sovereign-types',
        name: 'sovereign-types',
        classification: ['Foundational', 'Infrastructural'],
        layer: 'Foundational',
        layerColor: 'var(--color-layer-foundational)',
        marketTranslation: 'Standardized AI Governance Data Contracts',
        description: 'A TypeScript contract layer defining foundational data structures for managing provenance within AI systems. ProvenanceIdSchema and ProvenanceEnvelope establish the shared dependency for any system requiring verifiable intelligence lineage.',
        technical: 'TypeScript',
        reinforcement: 'Standardizes language and data structures across the ecosystem, enabling interoperability between CIR, CE-Ledger, and RSPS Architecture.',
        repoSlug: 'sovereign-types',
        status: 'Active',
        badgeColor: 'var(--color-sovereign)',
      },
    ],
  },
  {
    id: 'infrastructural',
    name: 'Layer 2: Infrastructural',
    subtitle: 'Architecture & Data',
    color: 'var(--color-layer-infra)',
    components: [
      {
        id: 'rsps',
        name: 'RSPS Architecture',
        classification: ['Infrastructural', 'Foundational'],
        layer: 'Infrastructural',
        layerColor: 'var(--color-layer-infra)',
        marketTranslation: 'Multi-Model Orchestration Architecture',
        description: 'Defines the Recursive Sovereign Project Space; a six-node cognitive architecture for human-AI collaboration where intelligence emerges from the relational field between a human sovereign (tau-node) and an ensemble of AI instruments.',
        reinforcement: 'Guides design of systems that CIR evaluates; provides structural principles that CIR assesses against.',
        repoSlug: 'rsps-architecture',
        status: 'Active',
        badgeColor: 'var(--color-rsps)',
      },
      {
        id: 'ce-ledger',
        name: 'CE-Ledger',
        classification: ['Infrastructural', 'Operational'],
        layer: 'Infrastructural',
        layerColor: 'var(--color-layer-infra)',
        marketTranslation: 'AI Decision Provenance & Audit Trail',
        description: 'A provenance and audit trail system for tracking decisions and actions within AI workflows. The term "Ledger" signals immutability, auditability, and traceability; the operational substrate for AI accountability.',
        reinforcement: 'Provides data and audit trails for CIR deep diagnostics; ensures accountability across the deployment lifecycle.',
        status: 'Active',
        badgeColor: 'var(--color-ce-ledger)',
      },
    ],
  },
  {
    id: 'operational',
    name: 'Layer 3: Operational & Evaluative',
    subtitle: 'Runtime',
    color: 'var(--color-layer-operational)',
    components: [
      {
        id: 'cir',
        name: 'CIR Diagnostic Engine',
        classification: ['Operational', 'Evaluative'],
        layer: 'Operational',
        layerColor: 'var(--color-layer-operational)',
        marketTranslation: 'Constitutional AI Audit Tool',
        description: 'A deployed, interactive web application for auditing AI deployment architectures against four constitutional governance primitives. Deterministically scores architectures by extracting a Boolean presence matrix from LLM analysis, separating model interpretation from authoritative governance assessment.',
        technical: 'TypeScript, Next.js, multi-provider LLM (Anthropic, Gemini, Mistral)',
        primitives: ['Reversibility & Safeguards', 'Component Boundaries', 'Rules That Stay True', 'Who Decides What'],
        reinforcement: 'Validates all foundational frameworks by applying them to real-world system descriptions.',
        status: 'Deployed',
        isAnchor: true,
        badgeColor: 'var(--color-cir)',
      },
      {
        id: 'delta-instrument',
        name: 'delta-instrument',
        classification: ['Evaluative', 'Operational'],
        layer: 'Operational',
        layerColor: 'var(--color-layer-operational)',
        marketTranslation: 'AI System Drift & Policy Alignment Monitor',
        description: 'A cross-architecture epistemic interferometer; measures changes, drift, and deviations in system behavior and policy alignment. Provides continuous monitoring and evaluation capabilities complementing CIR\'s point-in-time diagnostics.',
        reinforcement: 'Feeds continuous evaluation data back into the diagnostic process; extends CIR from snapshot audit to ongoing governance.',
        repoSlug: 'delta-instrument',
        status: 'Active',
        badgeColor: 'var(--color-delta)',
      },
    ],
  },
  {
    id: 'translational',
    name: 'Layer 4: Translational & Educational',
    subtitle: 'Education & Adoption',
    color: 'var(--color-layer-translational)',
    components: [
      {
        id: 'martha-course',
        name: 'martha-course',
        classification: ['Educational', 'Translational'],
        layer: 'Translational',
        layerColor: 'var(--color-layer-translational)',
        marketTranslation: 'AI Governance Implementation Training Program',
        description: 'A 12-module practitioner training program for constitutional AI governance. Translates the governance stack; Bainbridge Warning, CIR primitives, RSPS architecture; into practitioner fluency. The Tongue-Tie Diagnostic is the founding frame: the gap between knowing a governance principle and being able to apply it.',
        reinforcement: 'Facilitates adoption and understanding of the entire stack; provides structured learning pathways.',
        repoSlug: 'martha-course',
        status: 'Active',
        badgeColor: 'var(--color-layer-translational)',
      },
    ],
  },
];
