/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        evergreen: "#0E2A25", // deep green background
        mist: "#EAF2EE",      // light text
        coral: "#FF6A3D",     // accent 1
        amber: "#FFB54A",     // accent 2
      },
    },
  },
  plugins: [],
}
