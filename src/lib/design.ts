/**
 * Shared design tokens — one system for the whole site.
 * Calm, spacious, premium: dark charcoal, off-white, muted sage green.
 */

export const CONTAINER = "mx-auto max-w-7xl px-5 sm:px-6";

/** Section vertical padding — more room between sections */
export const SECTION_PY = "py-20 md:py-28";
/** Final CTA — extra room */
export const CTA_SECTION_PY = "py-24 md:py-32";
export const FOOTER_PY = "py-16 md:py-20";

/** Space between section heading and content */
export const GAP_HEADING = "mt-14 md:mt-16";
/** Space above button groups */
export const GAP_BUTTONS = "mt-14 md:mt-16";

/** Headings */
export const H1_CLASS = "text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl";
export const H1_HERO = "text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl";
export const H2_CLASS = "text-3xl font-bold tracking-tight md:text-4xl";
export const H2_CLASS_LARGE = "text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl";
export const H3_CLASS = "text-xl font-bold md:text-2xl";
export const LEAD_CLASS = "text-xl leading-relaxed md:text-2xl md:leading-relaxed";
export const BODY_CLASS = "text-base leading-relaxed md:text-lg";
export const BODY_MUTED = "text-charcoal/85";

/** Buttons — tall enough to tap, generous padding so text isn’t cramped */
export const BTN_PRIMARY =
  "inline-flex min-h-[60px] items-center justify-center rounded-xl bg-muted-green px-7 py-4 text-base font-bold text-white shadow transition hover:bg-muted-green-light hover:shadow-md md:min-h-[64px] md:px-9";
export const BTN_SECONDARY_DARK =
  "inline-flex min-h-[60px] items-center justify-center rounded-xl border-2 border-offwhite/60 bg-transparent px-7 py-4 text-base font-semibold text-offwhite transition hover:border-offwhite hover:bg-offwhite/10 md:min-h-[64px] md:px-9";
export const BTN_SECONDARY_LIGHT =
  "inline-flex min-h-[60px] items-center justify-center rounded-xl border-2 border-charcoal/20 bg-transparent px-7 py-4 text-base font-semibold text-charcoal transition hover:border-charcoal/40 hover:bg-charcoal/5 md:min-h-[64px] md:px-9";

/** Final CTA phone number */
export const PHONE_DISPLAY = "text-4xl font-bold md:text-5xl lg:text-6xl";

/** Cards */
export const CARD_CLASS =
  "flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg";
export const CARD_IMAGE_H = "h-52 md:h-56";
export const CARD_PADDING = "p-6 md:p-8";

/** Map container */
export const MAP_WRAPPER = "overflow-hidden rounded-xl border border-charcoal/10 bg-charcoal/5 shadow";

export const BORDER_DIVIDER = "border-white/10";
