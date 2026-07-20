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
          blue: "#0A4D7A", // Deep corporate blue derived from the logo
          light: "#F4F7F9", // Soft background for contrast
          accent: "#0066CC", // Brighter blue for interactive elements
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem', // Pill-shaped buttons
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)', // Floating card effect
      }
    },
  },
  plugins: [],
};
export default config;
