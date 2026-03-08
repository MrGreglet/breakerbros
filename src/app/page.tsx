import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import {
  CONTAINER,
  H1_HERO,
  H2_CLASS,
  H2_CLASS_LARGE,
  H3_CLASS,
  LEAD_CLASS,
  BODY_CLASS,
  BODY_MUTED,
  BTN_PRIMARY,
  BTN_SECONDARY_DARK,
  BTN_SECONDARY_LIGHT,
  CARD_CLASS,
  CARD_PADDING,
  MAP_WRAPPER,
  BORDER_DIVIDER,
  PHONE_DISPLAY,
} from "@/lib/design";
import { GlassHeader } from "@/components/GlassHeader";

const telHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
const mailHref = `mailto:${siteConfig.email}`;

const TRUST_POINTS = [
  "UK Shipping",
  "Compatibility Checks",
  "Tested Used Parts",
  "Fast Response",
] as const;

const SERVICES = [
  {
    title: "Parts Supply",
    image: "/images/engine.jpg",
    alt: "Land Rover engine and used parts",
    description:
      "Quality used Land Rover parts. We help you find the right part for your vehicle and ship UK-wide.",
  },
  {
    title: "Vehicle Breaking",
    image: "/images/breaking.jpg",
    alt: "Land Rover vehicle breaking yard",
    description:
      "Breaking Land Rovers for parts. Tell us what you need or what you're breaking and we'll help where we can.",
  },
  {
    title: "Repairs & Builds",
    image: "/images/workshop.jpg",
    alt: "Land Rover workshop repairs and builds",
    description:
      "Build, fix, and maintain your Land Rover. Honest advice and practical support.",
  },
] as const;

const STEPS = [
  { title: "Tell us your vehicle & part", description: "Call or email with your model and what you need." },
  { title: "We confirm compatibility", description: "We check stock and confirm fit for your vehicle." },
  { title: "Collect or ship", description: "Pick up near Pinxton or we ship across the UK." },
] as const;

const WHY_CHOOSE = [
  "Land Rover specialists — we know the vehicles",
  "Honest advice — no hard sell",
  "Photos on request so you know what you're getting",
  "Nationwide shipping across the UK",
  "Friendly, straightforward service",
] as const;

export default function Home() {
  return (
    <>
      <GlassHeader />

      <div className="fixed bottom-0 left-0 right-0 z-40 bg-charcoal p-4 md:hidden" aria-label="Call now">
        <a
          href={telHref}
          className="flex w-full min-h-[60px] items-center justify-center rounded-xl bg-muted-green px-7 py-4 text-base font-bold text-white shadow transition hover:bg-muted-green-light md:min-h-[64px]"
        >
          Call Now — {siteConfig.phone}
        </a>
      </div>

      <main className="pb-28 md:pb-0">
        {/* Hero */}
        <section className="relative flex min-h-[72vh] flex-col justify-center overflow-hidden bg-charcoal text-offwhite md:min-h-[75vh]">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src="/images/offroad.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center animate-hero-zoom origin-center will-change-transform"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/60" aria-hidden />
          <div className={`${CONTAINER} relative z-10 flex flex-col items-center text-center pt-20 pb-20 md:pt-24 md:pb-24`}>
            <h1 className={`${H1_HERO} max-w-4xl text-white`}>
              Land Rover Breakers & Used Parts — UK Wide Delivery
            </h1>
            <p className="mt-8 max-w-2xl text-white/95 md:mt-10 md:text-xl md:leading-relaxed lg:text-2xl">
              Specialist Land Rover knowledge. Quality used parts. Fast replies. UK shipping available.
            </p>
            <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center md:mt-14">
              <a href={telHref} className={BTN_PRIMARY}>
                Call Now
              </a>
              <a href={mailHref} className={BTN_SECONDARY_DARK}>
                Email Us
              </a>
            </div>
            <div className={`mt-16 flex flex-wrap justify-center gap-x-12 gap-y-2 ${BODY_CLASS} text-white/90 md:mt-20 md:gap-x-14`}>
              {TRUST_POINTS.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className={`${CONTAINER} py-16 md:py-24`}>
          <h2 className={`${H2_CLASS} text-charcoal mb-10`}>What We Do</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <article key={service.title} className={CARD_CLASS}>
                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-t-2xl md:h-52">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 pt-7 md:p-8 md:pt-8">
                  <h3 className={`${H3_CLASS} text-charcoal`}>{service.title}</h3>
                  <p className={`mt-5 flex-1 ${BODY_CLASS} ${BODY_MUTED}`}>{service.description}</p>
                  <p className="mt-6 text-base font-semibold text-muted-green">Call or email to enquire</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-charcoal-light text-offwhite py-16 md:py-24">
          <div className={CONTAINER}>
            <h2 className={`${H2_CLASS} mb-10`}>How It Works</h2>
            <div className="grid gap-12 md:grid-cols-3 md:gap-10">
              {STEPS.map((step, i) => (
                <div key={step.title} className="text-left">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted-green text-lg font-bold text-white" aria-hidden>
                    {i + 1}
                  </span>
                  <h3 className={`${H3_CLASS} mt-6 text-offwhite`}>{step.title}</h3>
                  <p className={`mt-4 ${BODY_CLASS} text-offwhite/90`}>{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 flex justify-center md:mt-20">
              <a href={telHref} className={BTN_PRIMARY}>
                Call Now — Speak Directly to a Specialist
              </a>
            </div>
          </div>
        </section>

        {/* Visual break */}
        <section className="relative h-[320px] w-full overflow-hidden md:h-[400px] mt-6 mb-6 md:mt-8 md:mb-8">
          <Image src="/images/offroad2.jpg" alt="" fill sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-charcoal/35" aria-hidden />
        </section>

        {/* Why Choose Us */}
        <section className={`${CONTAINER} pt-20 pb-16 md:pt-28 md:pb-24`}>
          <h2 className={`${H2_CLASS} text-charcoal mb-10`}>Why Choose Us</h2>
          <ul className="grid gap-6 md:grid-cols-2 md:gap-x-20 md:gap-y-5">
            {WHY_CHOOSE.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-0.5 shrink-0 text-muted-green" aria-hidden>✓</span>
                <span className={`${BODY_CLASS} ${BODY_MUTED} leading-relaxed`}>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Where We Are */}
        <section className="bg-offwhite pt-20 pb-16 md:pt-28 md:pb-24">
          <div className={CONTAINER}>
            <h2 className={`${H2_CLASS} text-charcoal mb-10`}>Where We Are</h2>
            <p className={`${LEAD_CLASS} mt-6 md:mt-8 text-charcoal/90`}>
              Based near Pinxton, supplying Land Rover parts across the UK.
            </p>
            <div className="mt-10">
              <div className={MAP_WRAPPER}>
                <div className="aspect-video w-full">
                  <iframe
                    title="Breaker Bros location — Pinxton"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2396.88!2d-1.337!3d53.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c2f2c203f01f%3A0x9e0d4c5e5e5e5e5e!2sPinxton%2C%20UK!5e0!3m2!1sen!2suk!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: 280 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block h-full min-h-[280px] w-full"
                  />
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center md:mt-20">
              <a href={telHref} className={BTN_PRIMARY}>
                Call Now
              </a>
              <a href={mailHref} className={BTN_SECONDARY_LIGHT}>
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={`bg-charcoal text-offwhite pt-24 md:pt-32 pb-28 md:pb-36`}>
          <div className={CONTAINER}>
            <h2 className={H2_CLASS_LARGE}>Need a Land Rover Part Today?</h2>
            <p className="mt-10 md:mt-12">
              <a
                href={telHref}
                className={`${PHONE_DISPLAY} text-offwhite underline decoration-muted-green decoration-2 underline-offset-4 hover:no-underline`}
              >
                {siteConfig.phone}
              </a>
            </p>
            <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center md:mt-20">
              <a href={telHref} className={BTN_PRIMARY}>
                Call Now
              </a>
              <a href={mailHref} className={BTN_SECONDARY_DARK}>
                Email Now
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`border-t ${BORDER_DIVIDER} bg-charcoal-light pt-20 pb-16 md:pt-24 md:pb-20`}>
          <div className={CONTAINER}>
            <p className="text-xl font-bold text-offwhite">{siteConfig.businessName}</p>
            <p className="mt-4">
              <a href={telHref} className="text-lg font-semibold text-offwhite underline decoration-offwhite/40 underline-offset-2 hover:no-underline">
                {siteConfig.phone}
              </a>
            </p>
            <p className="mt-3">
              <a href={mailHref} className="text-lg text-offwhite underline decoration-offwhite/40 underline-offset-2 hover:no-underline">
                {siteConfig.email}
              </a>
            </p>
            <p className="mt-3 text-lg text-offwhite/90">{siteConfig.locationText}</p>
            <p className="mt-8 text-base text-offwhite/70">Also available on social</p>
            <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-base">
              <a href="#" className="text-offwhite/85 underline decoration-offwhite/35 underline-offset-2 hover:text-offwhite hover:no-underline">
                Facebook
              </a>
              <a href="#" className="text-offwhite/85 underline decoration-offwhite/35 underline-offset-2 hover:text-offwhite hover:no-underline">
                Instagram
              </a>
            </p>
            <p className="mt-10 text-base text-offwhite/70">
              © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
