export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const primaryNav: NavItem[] = [
  { label: 'Governance Stack', href: '/governed-intelligence' },
  { label: 'Bainbridge Warning', href: '/bainbridge-warning' },
  { label: 'Activation Gap', href: '/governance-activation-gap' },
  { label: 'CIR Diagnostic', href: '/cir-diagnostic-engine', badge: 'Live' },
  { label: 'Research', href: '/research' },
  { label: 'Writing', href: '/writing' },
  { label: 'Contact', href: '/contact' },
];

export const footerQuickLinks: NavItem[] = [
  { label: 'Governance Stack', href: '/governed-intelligence' },
  { label: 'Bainbridge Warning', href: '/bainbridge-warning' },
  { label: 'Activation Gap', href: '/governance-activation-gap' },
  { label: 'CIR Diagnostic', href: '/cir-diagnostic-engine' },
  { label: 'Research', href: '/research' },
  { label: 'Writing', href: '/writing' },
  { label: 'Contact', href: '/contact' },
];

export const stackFrameworks = [
  'Bainbridge Warning',
  'CIR Diagnostic Engine',
  'RSPS Architecture',
  'CE-Ledger',
  'delta-instrument',
  'sovereign-types',
];
