
/**
 * SEO optimization utility functions
 */

// Function to manage page-specific SEO
export const updatePageSEO = (
  title: string,
  description: string,
  keywords: string[] = [],
  imagePath?: string,
  noindex: boolean = false
): void => {
  // Update title
  document.title = title;
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);
  
  // Update meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', keywords.join(', '));
  
  // Update robots meta
  let metaRobots = document.querySelector('meta[name="robots"]');
  if (!metaRobots) {
    metaRobots = document.createElement('meta');
    metaRobots.setAttribute('name', 'robots');
    document.head.appendChild(metaRobots);
  }
  metaRobots.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');
  
  // Update OG meta tags
  updateOGTags(title, description, imagePath);
  
  // Update Twitter meta tags
  updateTwitterTags(title, description, imagePath);
};

// Update Open Graph tags
const updateOGTags = (title: string, description: string, imagePath?: string): void => {
  const tags = {
    'og:title': title,
    'og:description': description,
    'og:url': window.location.href,
  };
  
  if (imagePath) {
    tags['og:image'] = imagePath.startsWith('http') ? imagePath : `${window.location.origin}${imagePath}`;
  }
  
  // Update each OG tag
  Object.entries(tags).forEach(([property, content]) => {
    let metaTag = document.querySelector(`meta[property="${property}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('property', property);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  });
};

// Update Twitter card tags
const updateTwitterTags = (title: string, description: string, imagePath?: string): void => {
  const tags = {
    'twitter:title': title,
    'twitter:description': description,
  };
  
  if (imagePath) {
    tags['twitter:image'] = imagePath.startsWith('http') ? imagePath : `${window.location.origin}${imagePath}`;
  }
  
  // Update each Twitter tag
  Object.entries(tags).forEach(([name, content]) => {
    let metaTag = document.querySelector(`meta[name="${name}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', name);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  });
};

// Add schema.org structured data
export const addStructuredData = (data: object): void => {
  // Check if the script already exists
  const id = `structured-data-${Object.keys(data).join('-')}`;
  if (document.getElementById(id)) {
    return;
  }
  
  // Create script element
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = id;
  script.innerHTML = JSON.stringify(data);
  document.head.appendChild(script);
};

// Generate breadcrumb data
export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>): void => {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': breadcrumb.name,
      'item': breadcrumb.url.startsWith('http') ? breadcrumb.url : `${window.location.origin}${breadcrumb.url}`
    }))
  };
  
  addStructuredData(breadcrumbData);
};

// Generate FAQ schema
export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>): void => {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
  
  addStructuredData(faqData);
};

// Simple function to clean up URLs
export const cleanUrl = (url: string): string => {
  // Remove trailing slashes
  let clean = url.replace(/\/+$/, '');
  
  // Remove double slashes (except after protocol)
  clean = clean.replace(/(https?:\/\/)|(\/\/+)/g, (match, protocol) => {
    return protocol || '/';
  });
  
  return clean;
};

// Check if a URL is valid
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};
