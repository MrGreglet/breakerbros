import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1a1a1a",
        "charcoal-light": "#2d2d2d",
        offwhite: "#f5f3ef",
        "muted-green": "#4a5d4a",
        "muted-green-light": "#5c735c",
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        display: ["ui-monospace", "monospace"],
      },
      keyframes: {
        heroZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        "hero-zoom": "heroZoom 20s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
export default config;
