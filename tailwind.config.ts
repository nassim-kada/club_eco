import type { Config } from "tailwindcss"

const config: Config = {
  // 1. Make sure Tailwind scans all your files for classes
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Your components are in /components
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Your page.tsx and layout.tsx are here
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Also good to include /src
  ],
  theme: {
    extend: {
      // 2. DEFINE YOUR CUSTOM COLORS HERE
      colors: {
        "ezc-green": "#3a5a40",  // I'm guessing this color from your logo placeholder
        "ezc-teal": "#588157",   // You might need to change this value
        "ezc-orange": "#e85d04", // You might need to change this value
        "ezc-orange-dark": "#d05303", // A darker version for hover
      },
      // 3. You are also using a custom font in layout.tsx
      fontFamily: {
        lexend: ["var(--font-lexend)", "sans-serif"],
      },
      // 4. You are using custom animation classes
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-down': 'fade-in-up 0.8s ease-out forwards', // You have fade-in-down in Header.tsx
      },
      keyframes: {
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"), // You are using animate-fade-in-up, etc.
  ],
}
export default config