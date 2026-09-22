// MANAGER OUTLINE MODE
// Reduces visible repeated content while preserving the complete original dataset.
export const MANAGER_OUTLINE_MODE = false;

// Backwards-compatible name used by the existing outline-mode rendering logic.
export const MANAGER_DEMO_MODE = MANAGER_OUTLINE_MODE;
export const SITE_NAME = 'RP EXOTIC HOMES';
export const SITE_STUDIO_NAME = 'RP EXOTIC HOMES';
// Configure this per deployment; the domain fallback is set to the official domain.
export const SITE_URL = (
  (typeof process !== 'undefined' && (process.env.NEXT_PUBLIC_SITE_URL || process.env.VITE_SITE_URL)) ||
  'https://www.rpexotichomes.com'
).replace(/\/$/, '');
export const EMAIL_DOMAIN = 'rpexotichomes.com';
export const SALES_EMAIL = 'Sales@Rpexotichomes.com';
export const siteContactEmail = (_mailbox?: string) => SALES_EMAIL;
export const dreamRealtyEmail = siteContactEmail;

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/rpexotichomes/',
  linkedin: 'https://www.linkedin.com/company/rpexotichomes/',
  facebook: 'https://www.facebook.com/share/19NEsP6gNT/',
};

export const INDIA_CONTACT = {
  region: 'Jaipur, India',
  city: 'Jaipur',
  country: 'India',
  name: 'Rishi Pal Singh',
  phone: '+91 98290 50002',
  tel: 'tel:+919829050002',
  whatsapp: 'https://wa.me/919829050002?text=Hello%20Rishi%20Pal%20Singh%2C%20I%20would%20like%20to%20inquire%20about%20RP%20Exotic%20Homes%20modular%20capsule%20architecture.',
  address: 'R55 NRI Colony, Jaipur, Rajasthan, India',
  hours: 'Monday – Saturday • 9:00 AM – 7:00 PM IST',
};

export const CANADA_CONTACT = {
  region: 'Bowmanville, Canada',
  city: 'Bowmanville',
  country: 'Canada',
  name: 'Praveer Singh',
  phone: '+1 (416) 948-2577',
  tel: 'tel:+14169482577',
  whatsapp: 'https://wa.me/14169482577?text=Hello%20Praveer%20Singh%2C%20I%20would%20like%20to%20inquire%20about%20RP%20Exotic%20Homes%20modular%20capsule%20architecture.',
  address: '215 Port Darlington Rd, Bowmanville, ON, Canada',
  hours: 'Monday – Friday • 9:00 AM – 6:00 PM EST',
};

export function demoItems<T>(items: T[], demoSelection: T[]): T[] {
  return MANAGER_DEMO_MODE ? demoSelection : items;
}
