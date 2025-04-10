
/**
 * Script optimization utilities
 */

/**
 * Interface for script configuration
 */
interface ScriptConfig {
  async?: boolean;
  defer?: boolean;
  id?: string;
  onLoad?: () => void;
  onError?: (error: Error) => void;
  strategy?: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload';
}

/**
 * Track scripts that have been loaded to prevent duplicates
 */
const loadedScripts = new Set<string>();

/**
 * Cache for promises of scripts being loaded
 */
const loadingScripts = new Map<string, Promise<void>>();

/**
 * Optimized script loader with different loading strategies
 */
export const optimizedScriptLoader = (
  src: string,
  config: ScriptConfig = {}
): Promise<void> => {
  const {
    async = true,
    defer = true,
    id = src,
    onLoad,
    onError,
    strategy = 'afterInteractive'
  } = config;
  
  // Don't load the same script twice
  if (loadedScripts.has(src)) {
    return Promise.resolve();
  }
  
  // Return existing promise if the script is currently loading
  if (loadingScripts.has(src)) {
    return loadingScripts.get(src) as Promise<void>;
  }
  
  // Decide when to load the script based on strategy
  const loadScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      try {
        // Check if script already exists in the DOM
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
          loadedScripts.add(src);
          resolve();
          return;
        }
        
        // Create script element
        const script = document.createElement('script');
        script.src = src;
        
        if (id) script.id = id;
        if (async) script.async = true;
        if (defer) script.defer = true;
        
        // Handle script load event
        script.onload = () => {
          loadedScripts.add(src);
          if (onLoad) onLoad();
          resolve();
        };
        
        // Handle script error
        script.onerror = (error) => {
          loadingScripts.delete(src);
          if (onError) onError(new Error(`Failed to load script: ${src}`));
          reject(error);
        };
        
        // Add script to DOM
        document.body.appendChild(script);
      } catch (error) {
        reject(error);
      }
    });
  };

  // Create and store the promise based on the loading strategy
  let scriptPromise: Promise<void>;
  
  switch (strategy) {
    case 'beforeInteractive':
      // Load immediately
      scriptPromise = loadScript();
      break;
      
    case 'afterInteractive':
      // Load after DOMContentLoaded
      scriptPromise = new Promise((resolve, reject) => {
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', () => {
            loadScript().then(resolve).catch(reject);
          });
        } else {
          loadScript().then(resolve).catch(reject);
        }
      });
      break;
      
    case 'lazyOnload':
      // Load after window load event or when idle
      scriptPromise = new Promise((resolve, reject) => {
        if (document.readyState === 'complete') {
          // Use requestIdleCallback if available
          if ('requestIdleCallback' in window) {
            (window as any).requestIdleCallback(() => {
              loadScript().then(resolve).catch(reject);
            });
          } else {
            // Fallback to setTimeout
            setTimeout(() => {
              loadScript().then(resolve).catch(reject);
            }, 1500);
          }
        } else {
          window.addEventListener('load', () => {
            setTimeout(() => {
              loadScript().then(resolve).catch(reject);
            }, 100);
          });
        }
      });
      break;
      
    default:
      scriptPromise = loadScript();
  }
  
  // Store the promise in the cache
  loadingScripts.set(src, scriptPromise);
  
  // Return the promise
  return scriptPromise;
};

/**
 * Prefetch script for future use
 */
export const prefetchScript = (src: string): void => {
  // Don't prefetch if already loaded or prefetched
  if (loadedScripts.has(src) || document.querySelector(`link[rel="prefetch"][href="${src}"]`)) {
    return;
  }
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.as = 'script';
  link.href = src;
  document.head.appendChild(link);
};

/**
 * Defer script execution until user interaction
 */
export const deferScriptUntilInteraction = (src: string, config: ScriptConfig = {}): void => {
  const events = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart', 'wheel'];
  
  const loadOnInteraction = () => {
    optimizedScriptLoader(src, config);
    // Remove all event listeners
    events.forEach(event => {
      document.removeEventListener(event, loadOnInteraction);
    });
  };
  
  // Add event listeners for user interaction
  events.forEach(event => {
    document.addEventListener(event, loadOnInteraction, { once: true, passive: true });
  });
};
