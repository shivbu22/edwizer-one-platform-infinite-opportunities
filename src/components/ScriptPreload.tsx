
import React from 'react';
import { useEffect } from 'react';

interface ScriptProps {
  src: string;
  id?: string;
  async?: boolean;
  defer?: boolean;
  onLoad?: () => void;
}

// Helper component to efficiently load scripts
const ScriptPreload: React.FC<ScriptProps> = ({ src, id, async = true, defer = true, onLoad }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    if (id) script.id = id;
    script.async = async;
    script.defer = defer;
    
    if (onLoad) {
      script.onload = onLoad;
    }
    
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [src, id, async, defer, onLoad]);
  
  return null;
};

export default ScriptPreload;
