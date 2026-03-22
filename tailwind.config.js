/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#7c5cff", 2: "#00e6b8" },
      },
      boxShadow: {
        soft: "0 10px 35px rgba(0,0,0,.25)",
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
           "50%": { transform: "translateY(-10px)" },
        },
        drift: {
           "0%,100%": { transform: "translateX(0)" },
           "50%": { transform: "translateX(12px)" },
        },
        pulseGlow: {
           "0%,100%": { opacity: 0.6 },
           "50%": { opacity: 0.12 },
        },
      },
      animation: {
        float: "floaty 8s ease-in-out infinite",
        drift: "drift 10s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
