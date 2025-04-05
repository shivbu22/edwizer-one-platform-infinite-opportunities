
import React from 'react';
import { Helmet } from 'react-helmet-async';

type SchemaType = 
  | 'Article' 
  | 'Product' 
  | 'FAQPage' 
  | 'LocalBusiness' 
  | 'Organization' 
  | 'Event' 
  | 'BreadcrumbList' 
  | 'Course' 
  | 'Service' 
  | 'WebPage'
  | 'EducationalOrganization';

interface StructuredDataProps {
  type: SchemaType;
  data: Record<string, any>;
  id?: string;
}

/**
 * Component to easily add structured data (Schema.org) to pages
 */
const StructuredData: React.FC<StructuredDataProps> = ({ 
  type, 
  data, 
  id = `schema-${type.toLowerCase()}`
}) => {
  // Apply @context and @type automatically
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return (
    <Helmet>
      <script type="application/ld+json" id={id}>
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
