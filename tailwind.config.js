/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "kode":["Kode Mono"],
      }
    },
    fontSize: {
      base: "1rem",
      inherit: "inherit",
    },
  },
  plugins: [],
}