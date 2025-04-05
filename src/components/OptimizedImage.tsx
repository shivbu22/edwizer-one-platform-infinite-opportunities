
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
  fetchpriority?: 'high' | 'low' | 'auto';
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
  fetchpriority = 'auto',
  className,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // If image is priority, override loading to eager
  const actualLoading = priority ? 'eager' : loading;
  // If priority, set fetchpriority to high
  const actualFetchPriority = priority ? 'high' : fetchpriority;
  
  useEffect(() => {
    if (priority && src) {
      // Preload high priority images
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, src]);
  
  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
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
        {avifSrc && <source srcSet={avifSrc} type="image/avif" />}
        
        {/* WebP format */}
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        
        {/* Original format as fallback */}
        <img
          src={error && placeholder ? placeholder : src}
          alt={alt}
          width={width}
          height={height}
          loading={actualLoading}
          decoding={decoding}
          fetchpriority={actualFetchPriority}
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
