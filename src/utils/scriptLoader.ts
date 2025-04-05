
/**
 * Loads scripts efficiently using modern browser features
 * Optimized for HTTP/2 performance
 */
export const loadScript = (
  src: string, 
  { async = true, defer = true, id, onLoad }: { 
    async?: boolean; 
    defer?: boolean; 
    id?: string;
    onLoad?: () => void;
  } = {}
): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if script already exists
    if (id && document.getElementById(id)) {
      resolve();
      return;
    }
    
    const script = document.createElement('script');
    script.src = src;
    if (id) script.id = id;
    script.async = async;
    script.defer = defer;
    
    // Add HTTP/2 optimization hints
    if (navigator.connection && 'saveData' in navigator.connection) {
      // Respect data saver mode
      const connection = navigator.connection as any;
      if (connection.saveData) {
        script.setAttribute('importance', 'low');
      }
    }
    
    // Add support for module scripts
    if (src.endsWith('.mjs')) {
      script.type = 'module';
    }
    
    // Add onload handler
    script.onload = () => {
      if (onLoad) onLoad();
      resolve();
    };
    
    script.onerror = (error) => {
      reject(error);
    };
    
    // Add to document
    document.body.appendChild(script);
  });
};

/**
 * Preloads scripts for faster execution
 */
export const preloadScript = (src: string): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'script';
  link.href = src;
  
  // For module scripts
  if (src.endsWith('.mjs')) {
    link.setAttribute('crossorigin', '');
  }
  
  document.head.appendChild(link);
};

/**
 * Loads scripts in order of priority
 */
export const loadScriptsInOrder = async (scripts: Array<{
  src: string;
  id?: string;
  async?: boolean;
  defer?: boolean;
  priority?: 'high' | 'medium' | 'low';
  onLoad?: () => void;
}>): Promise<void> => {
  // Sort by priority
  const sortedScripts = [...scripts].sort((a, b) => {
    const priorityMap = { high: 0, medium: 1, low: 2 };
    return (priorityMap[a.priority || 'medium'] || 1) - (priorityMap[b.priority || 'medium'] || 1);
  });
  
  // Load high priority scripts first
  const highPriorityScripts = sortedScripts.filter(s => s.priority === 'high');
  await Promise.all(highPriorityScripts.map(s => loadScript(s.src, s)));
  
  // Then load the rest
  const otherScripts = sortedScripts.filter(s => s.priority !== 'high');
  await Promise.all(otherScripts.map(s => loadScript(s.src, s)));
};
