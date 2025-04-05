
// Utility functions to optimize CSS performance

/**
 * Defers non-critical CSS loading
 * @param stylesheetUrl URL of the stylesheet to load
 */
export const loadDeferredStylesheet = (stylesheetUrl: string): void => {
  // Create a link element
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = stylesheetUrl;
  
  // Set attributes for optimization
  link.media = 'print';
  link.onload = () => {
    link.media = 'all';
  };
  
  // Add to document
  document.head.appendChild(link);
};

/**
 * Removes unused CSS classes
 * @param stylesheet DOM stylesheet to optimize
 */
export const optimizeStylesheet = (stylesheet: CSSStyleSheet): void => {
  try {
    const rules = stylesheet.cssRules || stylesheet.rules;
    if (!rules) return;
    
    for (let i = rules.length - 1; i >= 0; i--) {
      const rule = rules[i];
      if (rule instanceof CSSStyleRule) {
        const selector = rule.selectorText;
        // Skip essential selectors
        if (selector.startsWith('html') || 
            selector.startsWith('body') || 
            selector.startsWith('.') || 
            selector.startsWith('#')) {
          continue;
        }
        
        try {
          // Check if any elements match this selector
          if (!document.querySelector(selector)) {
            stylesheet.deleteRule(i);
          }
        } catch (e) {
          console.warn('Invalid selector:', selector);
        }
      }
    }
  } catch (error) {
    console.error('Error optimizing stylesheet:', error);
  }
};

/**
 * Extracts and consolidates inline styles to reduce redundancy
 */
export const consolidateInlineStyles = (): void => {
  const inlineStyles: Record<string, string[]> = {};
  
  // Find elements with inline styles
  document.querySelectorAll('[style]').forEach(el => {
    const style = el.getAttribute('style') || '';
    
    if (!inlineStyles[style]) {
      inlineStyles[style] = [];
    }
    
    inlineStyles[style].push(el as HTMLElement);
  });
  
  // Consolidate styles with multiple occurrences
  Object.entries(inlineStyles).forEach(([style, elements]) => {
    if (elements.length > 1) {
      // Create a class from this inline style
      const className = `auto-style-${Object.keys(inlineStyles).indexOf(style)}`;
      
      // Create style element if not exists
      let styleEl = document.getElementById('consolidated-styles');
      if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'consolidated-styles';
        document.head.appendChild(styleEl);
      }
      
      // Add the style rule
      styleEl.textContent += `.${className} { ${style} }`;
      
      // Replace inline styles with the class
      elements.forEach(el => {
        el.removeAttribute('style');
        el.classList.add(className);
      });
    }
  });
};
