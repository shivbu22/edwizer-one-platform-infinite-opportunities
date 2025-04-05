
import React from 'react';
import { useEffect } from 'react';
import { loadScript } from '../utils/scriptLoader';

interface ScriptProps {
  src: string;
  id?: string;
  async?: boolean;
  defer?: boolean;
  priority?: 'high' | 'medium' | 'low';
  onLoad?: () => void;
}

// Helper component to efficiently load scripts
const ScriptPreload: React.FC<ScriptProps> = ({ 
  src, 
  id, 
  async = true, 
  defer = true, 
  priority = 'medium',
  onLoad 
}) => {
  useEffect(() => {
    // Use our optimized script loader
    loadScript(src, {
      async,
      defer,
      id,
      onLoad
    }).catch(error => {
      console.error(`Failed to load script: ${src}`, error);
    });
    
    // No cleanup needed as our loadScript function handles duplicate scripts
  }, [src, id, async, defer, onLoad]);
  
  return null;
};

export default ScriptPreload;
