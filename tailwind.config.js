/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fredoka", "system-ui", "sans-serif"],
        sans: ["Nunito", "system-ui", "sans-serif"],
      },
      colors: {
        // Diambil dari ilustrasi: merah bendera, biru celana, kuning bambu.
        merah: {
          50: "#fef3f2",
          100: "#ffe3e0",
          200: "#ffc9c4",
          400: "#f97066",
          500: "#ef4b40",
          600: "#d92d20",
          700: "#b42318",
        },
        krem: {
          50: "#fffaf2",
          100: "#fdf1e0",
          200: "#f7e3c8",
        },
        bambu: "#f0b429",
        langit: "#2f6fa8",
      },
      borderRadius: {
        blob: "42% 58% 55% 45% / 48% 42% 58% 52%",
      },
      boxShadow: {
        sticker: "0 10px 25px -8px rgba(180, 35, 24, 0.35)",
      },
    },
  },
  plugins: [],
};
