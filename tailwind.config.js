/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./packages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}