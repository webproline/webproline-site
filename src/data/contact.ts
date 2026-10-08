// Contactos oficiais da WebProLine — alterar apenas aqui.
export const COMPANY_EMAIL = 'webproline10@gmail.com';
export const INSTAGRAM_HANDLE = '@web_proline';
export const INSTAGRAM_URL = 'https://www.instagram.com/web_proline/';

export const buildMailto = (subject: string, body?: string): string => {
  const params = [`subject=${encodeURIComponent(subject)}`];
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${COMPANY_EMAIL}?${params.join('&')}`;
};
