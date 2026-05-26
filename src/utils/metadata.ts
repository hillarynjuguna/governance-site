export interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
}

export function generateMetadata(props: PageMetaProps) {
  const baseTitle = 'Oscillatory Fields';
  const siteUrl = 'https://governance-site.vercel.app';
  
  // Format title correctly with the brand suffix
  const fullTitle = `${props.title} | ${baseTitle}`;
  
  // Ensure canonical path is formatted clean (starts with /)
  const canonicalPath = props.canonical || '';
  const canonicalUrl = `${siteUrl}${canonicalPath.startsWith('/') ? canonicalPath : '/' + canonicalPath}`;
  
  const ogImage = props.ogImage || `${siteUrl}/assets/system_infrastructure.png`;

  return {
    title: fullTitle,
    description: props.description,
    canonical: canonicalUrl,
    openGraph: {
      title: fullTitle,
      description: props.description,
      type: props.ogType || 'website',
      url: canonicalUrl,
      image: ogImage,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: props.description,
      image: ogImage,
    }
  };
}
