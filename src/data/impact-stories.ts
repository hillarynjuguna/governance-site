export interface ImpactStory {
  id: string;
  layer: string;
  layerColor: string;
  title: string;
  problem: string;
  method: string;
  outcome: string;
}

export const impactStories: ImpactStory[] = [
  {
    id: 'multi-agent-audit',
    layer: 'Operational Layer',
    layerColor: 'var(--color-layer-operational)',
    title: 'Auditing a Multi-Agent Deployment',
    problem: 'An AI workflow lacked clear boundaries between model outputs and downstream system actions, creating invisible failure surfaces.',
    method: 'CIR Diagnostic Engine',
    outcome: 'Four constitutional vulnerabilities identified before deployment; remediation roadmap delivered within the diagnostic session.',
  },
  {
    id: 'institutional-risk',
    layer: 'Governance & Orchestration',
    layerColor: 'var(--color-rsps)',
    title: 'Mapping Institutional AI Risk',
    problem: 'A governance team needed to identify the gap between their AI capability level and their governance infrastructure maturity.',
    method: 'Bainbridge Warning',
    outcome: 'Governance deficit mapped across four dimensions; priority intervention points identified.',
  },
  {
    id: 'practitioner-training',
    layer: 'Applied Intelligence',
    layerColor: 'var(--color-layer-translational)',
    title: 'Training Practitioners in Constitutional Design',
    problem: 'An organization had governance policies but no internal capability to translate them into architectural practice.',
    method: 'martha-course',
    outcome: '12-module practitioner program delivered; internal governance fluency established.',
  },
];
