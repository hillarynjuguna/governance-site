export interface Capability {
  id: string;
  title: string;
  description: string;
  framework: string;
  icon: string;
}

export const capabilities: Capability[] = [
  {
    id: 'constitutional-diagnostics',
    title: 'Constitutional AI Diagnostics',
    description: 'Auditing AI deployment architectures against structural governance principles before incidents occur.',
    framework: 'CIR Diagnostic Engine',
    icon: 'M9 12h6m-3-3v6m-7.5 4h15a2 2 0 002-2V6a2 2 0 00-2-2h-15a2 2 0 00-2 2v13a2 2 0 002 2z',
  },
  {
    id: 'governance-frameworks',
    title: 'Governance Framework Design',
    description: 'Named, branded frameworks (Bainbridge Warning, RSPS Architecture) that translate theoretical risk into architectural action.',
    framework: 'Bainbridge Warning',
    icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z',
  },
  {
    id: 'orchestration-architecture',
    title: 'Orchestration Architecture',
    description: 'Multi-model cognitive architectures where intelligence emerges from the relational field between human sovereign and AI ensemble.',
    framework: 'RSPS Architecture',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  },
  {
    id: 'provenance-infrastructure',
    title: 'Provenance Infrastructure',
    description: 'Data contract and audit trail systems for verifiable intelligence lineage and accountability at execution boundaries.',
    framework: 'sovereign-types',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    id: 'practitioner-training',
    title: 'Practitioner Training',
    description: '12-module constitutional AI governance curriculum (the Martha Course); translating frameworks into organizational practice.',
    framework: 'martha-course',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
];
