import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Core blues extracted from the Allied One logo
          navy:    "#0D3A5C", // Darkest – used for footer & headings
          blue:    "#1A5C8A", // Primary brand blue from logo
          mid:     "#2180C0", // Mid interactive blue
          light:   "#EBF4FB", // Lightest tint – backgrounds
          // Supporting palette
          slate:   "#F0F4F8", // Soft page background
          // Accent / CTA — keeps it in-family, no harsh contrast
          gold:    "#D4A843", // Warm gold CTA accent
          goldHov: "#B8923A", // Darker gold on hover
          // Text
          dark:    "#0A2540", // Near-black text
          muted:   "#4A6785", // Secondary text
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl':  '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft':   '0 4px 24px -4px rgba(26, 92, 138, 0.12)',
        'card':   '0 2px 12px -2px rgba(26, 92, 138, 0.08)',
        'glow':   '0 0 40px -8px rgba(26, 92, 138, 0.25)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0D3A5C 0%, #1A5C8A 50%, #2180C0 100%)',
        'card-gradient': 'linear-gradient(135deg, #EBF4FB 0%, #F0F4F8 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
