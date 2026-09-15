// MANAGER OUTLINE MODE
// Reduces visible repeated content while preserving the complete original dataset.
export const MANAGER_OUTLINE_MODE = false;

// Backwards-compatible name used by the existing outline-mode rendering logic.
export const MANAGER_DEMO_MODE = MANAGER_OUTLINE_MODE;
export const SITE_NAME = 'RP EXOTIC HOMES';
export const SITE_STUDIO_NAME = 'RP EXOTIC HOMES';
// Configure this per deployment (VITE_SITE_URL); the domain fallback is set to the official domain.
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.rpexotichomes.com').replace(/\/$/, '');
export const EMAIL_DOMAIN = 'rpexotichomes.com';
export const SALES_EMAIL = `sales@${EMAIL_DOMAIN}`;
export const dreamRealtyEmail = (_mailbox?: string) => SALES_EMAIL;

export function demoItems<T>(items: T[], demoSelection: T[]): T[] {
  return MANAGER_DEMO_MODE ? demoSelection : items;
}
