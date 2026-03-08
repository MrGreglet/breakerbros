/**
 * Breaker Bros — Editable site configuration.
 * Update contact details and business info here.
 */

export const siteConfig = {
  businessName: "Breaker Bros",
  phone: "07XXX XXXXXX", // Replace with real number for tel: links
  email: "info@breakerbros.co.uk",
  locationText: "Near Pinxton, UK",
  serviceArea: "UK-wide parts shipping",
  openingHours: "Mon–Sat 9am–5pm", // optional
} as const;

export type SiteConfig = typeof siteConfig;
