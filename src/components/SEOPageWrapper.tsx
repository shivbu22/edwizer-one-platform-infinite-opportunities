
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from './PageLayout';
import { updatePageSEO, generateBreadcrumbSchema } from '../utils/seoHelpers';

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
  showBanner = true
}) => {
  // Update SEO meta tags when the component mounts or props change
  useEffect(() => {
    updatePageSEO(title, description, keywords, ogImage, noindex);
    
    // Generate breadcrumb schema if breadcrumbs are provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      generateBreadcrumbSchema(breadcrumbs);
    }
  }, [title, description, keywords, ogImage, noindex, breadcrumbs]);
  
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
        <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {ogImage && <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {ogImage && <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`} />}
        
        {/* Preload critical assets */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Helmet>
      
      <PageLayout 
        title={showPageTitle ? title.split('|')[0].trim() : ''} 
        subtitle={subtitle} 
        showBanner={showBanner}
      >
        {children}
      </PageLayout>
    </>
  );
};

export default SEOPageWrapper;
