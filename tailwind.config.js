/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warmDark: "#0F0D0C",
        warmLight: "#F7F3EE",
        warmSurface: "#171311",
        gold: "#C9A876",
        warmMuted: "#B8B0A8",
        darkText: "#1A1715",
        sage: "#7A8B6F",
        blush: "#E8CFC1",
      },
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}