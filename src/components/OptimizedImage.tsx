
import React, { useState, useEffect, ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  webpSrc?: string;
  avifSrc?: string;
  placeholder?: string;
  width?: number | string;
  height?: number | string;
  lazy?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  webpSrc,
  avifSrc,
  placeholder,
  width,
  height,
  lazy = true,
  className,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Format detector
  useEffect(() => {
    // This will only run in client-side rendering
    if (typeof document !== 'undefined') {
      // Check if browser supports modern formats
      const checkWebP = new Promise((resolve) => {
        const webP = new Image();
        webP.onload = webP.onerror = () => {
          resolve(webP.height === 2);
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      });
      
      const checkAVIF = new Promise((resolve) => {
        const avif = new Image();
        avif.onload = avif.onerror = () => {
          resolve(avif.height === 2);
        };
        avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK';
      });
      
      Promise.all([checkWebP, checkAVIF]).then(([supportsWebP, supportsAVIF]) => {
        console.log(`Browser supports WebP: ${supportsWebP}, AVIF: ${supportsAVIF}`);
      });
    }
  }, []);
  
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
          loading={lazy ? "lazy" : "eager"}
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
