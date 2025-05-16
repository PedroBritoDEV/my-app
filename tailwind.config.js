/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
   content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        secondary: "#60a5fa",   // Azul escuro
        success: "#10b981",   // Verde
        accent: "#fff9fb",    // Branco rosado claro
      },
    },
  },
  plugins: [],
}
