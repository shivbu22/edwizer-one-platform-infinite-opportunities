
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from './PageLayout';
import { updatePageSEO, generateBreadcrumbSchema } from '../utils/seoHelpers';
import { loadDeferredStylesheet } from '../utils/cssOptimization';
import StructuredData from './StructuredData';

interface SEOPageWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
  breadcrumbs?: Array<{name: string, url: string}>;
  showPageTitle?: boolean;
  subtitle?: string;
  showBanner?: boolean;
  canonicalUrl?: string;
  structuredData?: object;
  schemaType?: string;
  schemaData?: Record<string, any>;
}

const SEOPageWrapper: React.FC<SEOPageWrapperProps> = ({
  children,
  title,
  description,
  keywords = [],
  ogImage,
  noindex = false,
  breadcrumbs,
  showPageTitle = true,
  subtitle,
  showBanner = true,
  canonicalUrl,
  structuredData,
  schemaType,
  schemaData
}) => {
  // Update SEO meta tags when the component mounts or props change
  useEffect(() => {
    // Preload critical CSS
    loadDeferredStylesheet('/assets/critical.css');
    
    updatePageSEO(title, description, keywords, ogImage, noindex);
    
    // Generate breadcrumb schema if breadcrumbs are provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      generateBreadcrumbSchema(breadcrumbs);
    }
  }, [title, description, keywords, ogImage, noindex, breadcrumbs]);
  
  // Ensure title is within Google's recommended length (50-60 chars)
  const optimizedTitle = title.length > 60 ? `${title.substring(0, 57)}...` : title;
  
  // Ensure description is within Google's recommended length (120-160 chars)
  const optimizedDescription = description.length > 160 ? 
    `${description.substring(0, 157)}...` : description;
  
  // Create a proper canonical URL
  const currentCanonicalUrl = canonicalUrl || window.location.href.split('?')[0].split('#')[0];
  
  return (
    <>
      <Helmet>
        <title>{optimizedTitle}</title>
        <meta name="description" content={optimizedDescription} />
        {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
        <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
        <link rel="canonical" href={currentCanonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentCanonicalUrl} />
        <meta property="og:title" content={optimizedTitle} />
        <meta property="og:description" content={optimizedDescription} />
        {ogImage && <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={optimizedTitle} />
        <meta name="twitter:description" content={optimizedDescription} />
        {ogImage && <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`} />}
        
        {/* Preload critical assets - moved preconnect to root head */}
        <link rel="preload" href="/lovable-uploads/35187587-45f7-47c5-9550-7dfde774c29f.png" as="image" />
        
        {/* Add structured data if provided the old way */}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
      </Helmet>
      
      {/* Add structured data with the new component if schemaType and schemaData are provided */}
      {schemaType && schemaData && (
        <StructuredData type={schemaType as any} data={schemaData} />
      )}
      
      <PageLayout 
        title={showPageTitle ? optimizedTitle.split('|')[0].trim() : ''} 
        subtitle={subtitle} 
        showBanner={showBanner}
      >
        {children}
      </PageLayout>
    </>
  );
};

export default SEOPageWrapper;
