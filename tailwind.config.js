/** @type {import('tailwindcss').Config} */
import { palettes, grays, rounded, shade, components, animations } from "@tailus/themer"
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tailus/themer/dist/components/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        ...palettes.trust,
        gray: grays.neutral,
      },
    },
  },
  plugins: [animations, components, rounded, shade],
}

