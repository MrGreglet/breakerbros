"use client";

import { siteConfig } from "@/lib/siteConfig";
import { CONTAINER, BTN_PRIMARY } from "@/lib/design";

const telHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

/** Fixed dark header — sits above the hero, part of the page (Option B). */
export function GlassHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal shadow-sm">
      <div className={`${CONTAINER} flex min-h-[64px] items-center justify-between py-4 md:min-h-[68px]`}>
        <span className="text-xl font-bold tracking-tight text-offwhite md:text-2xl">
          {siteConfig.businessName}
        </span>
        <a href={telHref} className={BTN_PRIMARY}>
          Call Now
        </a>
      </div>
    </header>
  );
}
