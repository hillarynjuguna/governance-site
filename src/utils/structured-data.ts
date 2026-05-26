const SITE_URL = 'https://governance-site.vercel.app';
const ORG_ID = `${SITE_URL}/#organization`;

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    'name': 'Oscillatory Fields',
    'url': SITE_URL,
    'description': 'AI governance infrastructure for systems that have consequences.',
    'sameAs': [
      'https://github.com/hillarynjuguna/governance-site'
    ]
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    'name': 'Oscillatory Fields | AI Governance Infrastructure',
    'url': SITE_URL,
    'publisher': { '@id': ORG_ID }
  };
}

export function getSoftwareApplicationSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': name,
    'description': description,
    'applicationCategory': 'BusinessApplication',
    'operatingSystem': 'Web',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'featureList': 'Constitutional validation, Architecture parsing, Vulnerability assessment against governance primitives'
  };
}

export function getTechArticleSchema(title: string, description: string, urlPath: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': title,
    'description': description,
    'url': `${SITE_URL}${urlPath}`,
    'publisher': { '@id': ORG_ID }
  };
}

export function getCourseSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': name,
    'description': description,
    'provider': {
      '@type': 'Organization',
      'name': 'Oscillatory Fields',
      'sameAs': SITE_URL
    }
  };
}

export function getArticleSchema(title: string, description: string, urlPath: string, datePublished: string = '2026-03-24') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': title,
    'description': description,
    'url': `${SITE_URL}${urlPath}`,
    'datePublished': datePublished,
    'author': {
      '@type': 'Person',
      'name': 'Hillary Njuguna',
      'url': 'https://github.com/hillarynjuguna'
    },
    'publisher': { '@id': ORG_ID }
  };
}

export interface BreadcrumbItem {
  name: string;
  urlPath: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${SITE_URL}${item.urlPath.startsWith('/') ? item.urlPath : '/' + item.urlPath}`
    }))
  };
}

export function getDefinedTermSchema(name: string, description: string, urlPath: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    'name': name,
    'description': description,
    'url': `${SITE_URL}${urlPath}`,
    'inDefinedTermSet': {
      '@type': 'DefinedTermSet',
      'name': 'Oscillatory Fields Governance Glossary',
      'url': `${SITE_URL}/glossary`
    }
  };
}
