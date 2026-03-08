import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const title = "Land Rover Breakers in Pinxton | Used Land Rover Parts UK | Breaker Bros";
const description =
  "Land Rover breakers near Pinxton. Quality used parts, vehicle breaking, repairs & builds. UK-wide shipping. Call or email for fast, honest service.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
};

function localBusinessJsonLd() {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: siteConfig.businessName,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pinxton",
        addressCountry: "GB",
      },
      areaServed: "GB",
      openingHours: siteConfig.openingHours ?? undefined,
    }),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={localBusinessJsonLd()}
        />
      </head>
      <body className="antialiased bg-offwhite text-charcoal font-sans">
        {children}
      </body>
    </html>
  );
}
