/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6366f1",   // Indigo-500
          light: "#a5b4fc",     // Indigo-300
          dark: "#4f46e5",      // Indigo-600
        },
        background: "#f9fafb",
        foreground: "#111827",
        muted: "#f3f4f6",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
