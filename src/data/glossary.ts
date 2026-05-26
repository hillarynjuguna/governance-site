export interface GlossaryTerm {
  slug: string;
  name: string;
  tagline: string;
  definition: string;
  explanationParagraphs: string[];
  relatedSlugs: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'cir-diagnostic-engine',
    name: 'CIR Diagnostic Engine',
    tagline: 'An audit tool for AI deployment architectures — finds what\'s broken before it breaks in production.',
    definition: 'A constitutional governance audit tool for AI deployment architectures that evaluates system boundaries, invariants, and authority structures.',
    explanationParagraphs: [
      'The CIR (Constitutional Integrity Review) Diagnostic Engine is an operational audit tool that analyzes the structural configuration of AI pipelines. Rather than relying on post-hoc behavior monitoring or statistical sampling, CIR parses system architecture maps, data flow schemas, and boundary specs. It assesses whether the system has hard boundary invariants compiled directly into its codebase, or if it relies entirely on unsafe prompt-level behavioral guidelines.',
      'The engine scores systems across four canonical governance primitives: Reversibility & Safeguards, Component Boundaries, Invariant Rules, and Decision Authority. By separating model-driven interpretation from deterministic logic validation, the CIR Engine produces a definitive, reproducible boolean compliance report. It is the core tool used by technical decision-makers to audit systems prior to production release.',
      'In practice, CIR diagnostics are integrated into CI/CD deployment pipelines, acting as a static analysis step. If a pull request modifies an execution agent to run without a human checkpoint on an irreversible action, the CIR check fails the build. This ensures that the system\'s active governance posture never drifts from its design specification.'
    ],
    relatedSlugs: ['bainbridge-warning', 'rsps-architecture', 'ce-ledger', 'delta-instrument']
  },
  {
    slug: 'bainbridge-warning',
    name: 'Bainbridge Warning',
    tagline: 'A governance gap assessment framework — measures the distance between your AI capabilities and your accountability infrastructure.',
    definition: 'A framework for diagnosing AI governance authenticity by distinguishing between verbal commitments (governance theater) and actual operational constraints (behavioral layer exposure).',
    explanationParagraphs: [
      'The Bainbridge Warning is a theoretical framework and diagnostic methodology developed to identify and mitigate risk asymmetry in AI deployments. It posits that as autonomous capabilities grow, organizations often expand their policy documentation (such as ethical charters and committee reviews) while leaving their actual codebase unchanged. This divergence creates a dangerous gap between expected oversight and operational reality.',
      'The framework focuses on "Behavioral Layer Exposure" (BVL)—the actual runtime code paths, state bounds, and human-in-the-loop gates that constrain AI action. The warning is triggered when an organization\'s administrative governance policies are found to have zero programmatic enforcement mechanisms in the production software stack. This gap represents a severe compliance and security vulnerability.',
      'By applying the Bainbridge Warning framework, organizations evaluate their systems across four critical dimensions: architectural transparency, operational reversibility, verification latency, and constraint persistence. The output is a clear, visual gap assessment that guides engineering teams on where to implement structural controls.'
    ],
    relatedSlugs: ['cir-diagnostic-engine', 'rsps-architecture', 'sovereign-types', 'premise']
  },
  {
    slug: 'rsps-architecture',
    name: 'RSPS Architecture',
    tagline: 'A multi-model orchestration design pattern — governance emerges from the relationships between human decision-makers and AI systems, not from a single control point.',
    definition: 'Recursive Self-Programming System (RSPS) is an architectural model that organizes cognitive agents into partitioned L4 (Execution) and L5 (Oversight) layers.',
    explanationParagraphs: [
      'The Recursive Self-Programming System (RSPS) is a design pattern developed to manage safety and alignment in networks of collaborating AI agents. Standard single-agent loops are highly vulnerable to drift, context corruption, and task evasion. RSPS mitigates this by decoupling execution capability from oversight authority, establishing a multi-model check-and-balance structure.',
      'The architecture formally delineates systems into distinct execution nodes (Layer 4) and validation nodes (Layer 5). Layer 4 nodes are optimized for capability: they write code, execute tasks, and coordinate workflows. However, they lack the authority to apply state changes to production systems. Any state mutation request must be formatted as a structured contract and submitted to the Layer 5 (Overstory) validation node.',
      'The Layer 5 node evaluates the proposed change against static, immutable rules (such as reversibility invariants and boundary contracts) using a separate model and deterministic validators. If validated, the change is committed and logged. This separation ensures that even if an execution node experiences cognitive drift or prompt injection, the system boundaries remain secure.'
    ],
    relatedSlugs: ['sovereign-types', 'ce-ledger', 'cir-diagnostic-engine']
  },
  {
    slug: 'ce-ledger',
    name: 'CE-Ledger',
    tagline: 'An audit trail system for AI decision provenance — who decided what, when, and under what constraints.',
    definition: 'Constitutional Event Ledger (CE-Ledger) is a secure, content-addressed log registry for tracking autonomous decisions, inference parameters, and validation logs.',
    explanationParagraphs: [
      'CE-Ledger (Constitutional Event Ledger) is a specialized storage and audit system designed to establish verifiable lineage for AI-generated decisions. As autonomous models take on increasing authority in organizational workflows, traditional logging (which is mutable and unstructured) fails to meet regulatory and forensic standards. CE-Ledger provides a secure, cryptographically bound history of system actions.',
      'Every event recorded in the CE-Ledger is stored using content-addressed storage (CAS) concepts and local cryptographic hash chains. Each entry contains not only the final action but the complete context under which it was generated: the active prompt template, model name, temperature settings, raw API responses, and the specific validation checklist executed by the Constitutional Validation Layer.',
      'By linking each state transition to its antecedent context, CE-Ledger allows developers and compliance auditors to reconstruct the exact path of any historical action. This provenance-first approach is essential for proving compliance with AI regulatory standards (such as the EU AI Act) and resolving liability in multi-agent environments.'
    ],
    relatedSlugs: ['rsps-architecture', 'delta-instrument', 'sovereign-types']
  },
  {
    slug: 'delta-instrument',
    name: 'Delta Instrument',
    tagline: 'A measurement tool that quantifies governance gaps across your AI deployment surface.',
    definition: 'A continuous monitoring utility that tracks alignment drift and measures real-time compliance deltas at system boundary lines.',
    explanationParagraphs: [
      'The Delta Instrument is an operational monitoring tool that extends point-in-time audits to continuous, runtime telemetry. In active production pipelines, agent behavior is highly dynamic: system prompts change, model updates are rolled out, and input data distributions shift. These factors lead to "governance drift," where a system silently moves outside its designated safety envelope.',
      'The Instrument operates by placing telemetry probes at critical execution seams. It continuously tracks metrics such as boundary breach frequency, rule evasion probability, and verification latency. By comparing these active measurements against the baseline established by the CIR Diagnostic Engine, the Instrument calculates a real-time "Delta" representing the gap between actual operations and design intentions.',
      'If the governance gap exceeds predefined thresholds, the Delta Instrument triggers automated alerts or executes safety fallback routines (such as placing the agent in a hold state). This provides system administrators and risk officers with the real-time visibility required to govern autonomous systems at scale.'
    ],
    relatedSlugs: ['cir-diagnostic-engine', 'ce-ledger', 'bainbridge-warning']
  },
  {
    slug: 'sovereign-types',
    name: 'Sovereign Types',
    tagline: 'Data contract specifications for defining boundaries between human authority and AI action.',
    definition: 'Strict, runtime-enforced type definitions and payload schemas designed to preserve decision provenance and human validation states within runtime code.',
    explanationParagraphs: [
      'Sovereign Types are programming-language primitives and data contract schemas designed to solve the "epistemic handoff" problem. In unstructured AI pipelines, models exchange data in free-form text or loose JSON payloads, making it impossible to guarantee that human authority gates were actually respected at execution time. Sovereign Types formalize these gates at the syntax layer.',
      'Every payload declared under a Sovereign Type is structured to enforce a strict boundary. It requires cryptographic provenance signatures certifying that the data has passed through the required human-in-the-loop checkpoints or compiler-enforced validation layers. If a system attempt is made to trigger an action using a payload lacking a valid provenance signature, compile-time or runtime type-checkers halt the thread.',
      'By compiling governance constraints directly into the type definitions, developers prevent accidental bypasses of safety gates. It moves compliance from external documentation directly into the runtime type-system, making it impossible to execute unverified autonomous actions.'
    ],
    relatedSlugs: ['rsps-architecture', 'ce-ledger', 'premise']
  },
  {
    slug: 'premise',
    name: 'Premise',
    tagline: 'The theoretical foundation — why constitutional AI governance requires infrastructure, not just policies.',
    definition: 'The foundational corpus of research and theoretical papers underpinning the transition from administrative AI guidelines to compiled runtime controls.',
    explanationParagraphs: [
      'The Premise is the conceptual foundation of the Oscillatory Fields ecosystem. It represents our core research thesis: that as AI systems transition from advisory tools to autonomous execution agents, traditional governance frameworks (manual audits, ethical checklists, corporate policies) become entirely ineffective. Because machine speed exceeds human response time, safety controls must exist within the codebase itself.',
      'Our research explores "metaphorical resonance" and structural invariants. We argue that prompt-engineering safety (such as alignment prompts and system guardrails) is fragile and temporary. True safety is an architectural property: systems must be built with structural walls (component boundaries) and physical limits (reversibility gates) that cannot be bypassed, regardless of what the model is commanded to do.',
      'The Premise serves to align developers and governance officers around a single standard: that AI safety is an infrastructure problem. By building verified, deterministic checkpoints and cryptographic provenance chains, organizations can deploy high-agency systems with complete confidence.'
    ],
    relatedSlugs: ['bainbridge-warning', 'sovereign-types', 'martha-course']
  },
  {
    slug: 'martha-course',
    name: 'Martha Course',
    tagline: 'A 12-module practitioner training program — turns governance policies into architectural practice.',
    definition: 'A comprehensive, 12-module curriculum designed to train technical decision-makers and compliance officers in implementing constitutional AI controls in production systems.',
    explanationParagraphs: [
      'The Martha Course is an educational curriculum developed to address the massive skills shortage in technical AI governance. While many courses discuss the philosophy of AI ethics, very few train developers on how to implement these ideas in software. The Martha Course teaches engineers how to compile policies into code using the tools of the Oscillatory Fields stack.',
      'Divided into 12 modules, the course covers topics ranging from mapping the Behavioral Layer (BVL) to configuring event ledgers, designing reversibility gates, and generating custom Sovereign Type declarations. Students work in sandbox environments, auditing mock architectures and integrating diagnostics directly into build pipelines.',
      'By the end of the program, graduates are equipped to lead AI governance efforts in their organizations, shifting their team\'s posture from administrative compliance to verified, compiler-enforced system boundaries.'
    ],
    relatedSlugs: ['premise', 'bainbridge-warning', 'cir-diagnostic-engine']
  },
  {
    slug: 'oscillatory-fields',
    name: 'Oscillatory Fields',
    tagline: 'The organizing metaphor — governance is not a static structure but a dynamic field of relationships between humans, AIs, and the rules that bind them.',
    definition: 'The parent research lab and infrastructure brand developing technical solutions for constitutional AI governance, provenance, and verification.',
    explanationParagraphs: [
      'Oscillatory Fields is a research lab and software development company dedicated to building the infrastructure layer for safe, autonomous systems. We believe that the key to AI safety lies in the structure of the software systems that surround machine models, not just in the weights of the models themselves. We design tools that enforce boundary limits, record decision trails, and measure alignment drift.',
      'Our name reflects our core philosophy: governance is not a static, rigid block, but a dynamic, oscillating field of interactions between humans, autonomous systems, and the rules that constrain them. A healthy governance posture requires continuous calibration, real-time diagnostic checks, and cryptographic verification of authority.',
      'We work with CTOs, VP Engineering leads, and compliance officers at organizations deploying multi-model pipelines, helping them build systems that are safe by design. Our product suite—including the CIR Engine, Bainbridge Warning, and Sovereign Types—provides the foundation for verifiable AI operations.'
    ],
    relatedSlugs: ['premise', 'cir-diagnostic-engine', 'bainbridge-warning']
  },
  {
    slug: 'governance-activation-gap',
    name: 'Governance Activation Gap',
    tagline: 'The gap between governance that exists on paper and governance that fires at the moment a system acts.',
    definition: 'The structural divergence between declared governance mechanisms (policies, committees, documentation) and governance that actually activates, constrains, and alters the behavior of an agentic AI system under operational conditions.',
    explanationParagraphs: [
      'The Governance Activation Gap identifies a failure mode that is distinct from mere non-compliance. An organization may have robust, well-documented governance policies and still exhibit a wide activation gap if those policies cannot reach the runtime moment where an AI agent takes action. The gap is measured by three failure modes: Declaration Without Activation (mechanisms exist but do not fire), Activation Without Consequence (mechanisms fire but do not alter behavior), and Scope Mismatch (mechanisms fire correctly within their designed perimeter but the agent operates beyond it).',
      'Agentic AI systems amplify the activation gap through three structural mechanisms: Sequential Action Accumulation (each action narrows the Reversibility Window for the next), Cross-Boundary Operation (agent chains cross into contexts where originating governance has no reach), and Oversight Saturation (the action chain generates more intervention decisions than human oversight can process with genuine attention). The key diagnostic test is whether Governance Latency (GL) exceeds the Reversibility Window (RW). When GL > RW, any governance intervention becomes operationally symbolic.',
      'The paper proposes a first-generation vocabulary of activation primitives — Activation Event, Activation Integrity, Intervention Efficacy, Reversibility Window, Governance Latency, Boundary Transition Event, and Governance Surface Area — as the foundation for a Runtime Governance Calculus. These primitives allow framework designers and auditors to specify not just what oversight mechanisms exist, but the conditions under which they activate, whether activation produces causal behavioral change, and how oversight must adapt when agent operations cross organizational and infrastructural boundaries.'
    ],
    relatedSlugs: ['bainbridge-warning', 'cir-diagnostic-engine', 'rsps-architecture', 'premise']
  }
];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find(term => term.slug === slug);
}
