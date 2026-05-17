export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const primaryNav: NavItem[] = [
  { label: 'Governance Stack', href: '/governance-stack' },
  { label: 'CIR Diagnostic', href: '/cir', badge: 'Live' },
  { label: 'Research', href: '/research' },
  { label: 'Projects', href: '/projects' },
  { label: 'Writing', href: '/writing' },
  { label: 'Demos', href: '/demos' },
  { label: 'Contact', href: '/contact' },
];

export const footerQuickLinks: NavItem[] = [
  { label: 'Governance Stack', href: '/governance-stack' },
  { label: 'CIR Diagnostic', href: '/cir' },
  { label: 'Research', href: '/research' },
  { label: 'Projects', href: '/projects' },
  { label: 'Writing', href: '/writing' },
  { label: 'Demos', href: '/demos' },
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
