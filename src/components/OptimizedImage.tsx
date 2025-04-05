
import React, { useState, useEffect, ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  webpSrc?: string;
  avifSrc?: string;
  placeholder?: string;
  width?: number | string;
  height?: number | string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  decoding?: 'async' | 'sync' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  webpSrc,
  avifSrc,
  placeholder,
  width,
  height,
  loading = 'lazy',
  priority = false,
  decoding = 'async',
  fetchPriority = 'auto',
  sizes = '100vw',
  className,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // If image is priority, override loading to eager
  const actualLoading = priority ? 'eager' : loading;
  // If priority, set fetchPriority to high
  const actualFetchPriority = priority ? 'high' : fetchPriority;
  
  useEffect(() => {
    if (priority && src) {
      // Preload high priority images
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      
      // Add sizes and type if available
      if (sizes) {
        link.setAttribute('sizes', sizes);
      }
      
      // Determine image type for preloading
      if (src.endsWith('.webp') || webpSrc) {
        link.setAttribute('type', 'image/webp');
      } else if (src.endsWith('.jpg') || src.endsWith('.jpeg')) {
        link.setAttribute('type', 'image/jpeg');
      } else if (src.endsWith('.png')) {
        link.setAttribute('type', 'image/png');
      } else if (src.endsWith('.avif') || avifSrc) {
        link.setAttribute('type', 'image/avif');
      }
      
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, src, sizes, webpSrc, avifSrc]);
  
  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
  };

  // Generate srcSet if width is provided and it's a number
  const generateSrcSet = (baseSrc: string) => {
    if (!baseSrc) return undefined;
    
    // Check if URL already contains width parameters
    if (baseSrc.includes('?') && (baseSrc.includes('w=') || baseSrc.includes('width='))) {
      return undefined;
    }
    
    const widths = [640, 750, 828, 1080, 1200, 1920, 2048];
    const imageExtension = baseSrc.split('.').pop()?.toLowerCase();
    
    if (!imageExtension) return undefined;
    
    // Skip srcset for SVG as they're scalable
    if (imageExtension === 'svg') return undefined;
    
    // For images hosted on CDNs that support dynamic resizing
    if (baseSrc.includes('lovable-uploads') || baseSrc.includes('cdn.')) {
      return widths
        .map(w => `${baseSrc}?w=${w} ${w}w`)
        .join(', ');
    }
    
    return undefined;
  };

  return (
    <div 
      className={`relative ${className || ''}`}
      style={{ width, height }}
    >
      {!loaded && !error && placeholder && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm"
          aria-hidden="true"
          width={width}
          height={height}
        />
      )}
      
      <picture>
        {/* AVIF format */}
        {avifSrc && <source 
          srcSet={generateSrcSet(avifSrc) || avifSrc} 
          sizes={sizes}
          type="image/avif" 
        />}
        
        {/* WebP format */}
        {webpSrc && <source 
          srcSet={generateSrcSet(webpSrc) || webpSrc} 
          sizes={sizes}
          type="image/webp" 
        />}
        
        {/* Original format as fallback */}
        <img
          src={error && placeholder ? placeholder : src}
          srcSet={generateSrcSet(src)}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={actualLoading}
          decoding={decoding}
          fetchPriority={actualFetchPriority}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover ${!loaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
          {...rest}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
