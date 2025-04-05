
/**
 * Obfuscates an email address to protect from spam harvesters
 * @param email - The email address to obfuscate
 * @returns The obfuscated email address HTML
 */
export const obfuscateEmail = (email: string): string => {
  // Split the email into username and domain
  const [username, domain] = email.split('@');
  
  // Create a scrambled version using HTML entities and CSS
  const obfuscated = `<span class="obfuscated-email" 
    data-username="${username}" 
    data-domain="${domain}"
    aria-label="Email address"
    tabindex="0"
    style="direction: ltr; unicode-bidi: bidi-override;"
  >${username.split('').reverse().join('')}
    <span style="display:none">no-spam</span>@
    ${domain.split('').reverse().join('')}</span>`;
    
  return obfuscated;
};

// Function to deobfuscate emails when needed (for click/tap events)
export const setupEmailDeobfuscation = (): void => {
  document.querySelectorAll('.obfuscated-email').forEach(element => {
    element.addEventListener('click', () => {
      const username = element.getAttribute('data-username');
      const domain = element.getAttribute('data-domain');
      if (username && domain) {
        window.location.href = `mailto:${username}@${domain}`;
      }
    });
    
    element.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const username = element.getAttribute('data-username');
        const domain = element.getAttribute('data-domain');
        if (username && domain) {
          window.location.href = `mailto:${username}@${domain}`;
        }
      }
    });
  });
};
