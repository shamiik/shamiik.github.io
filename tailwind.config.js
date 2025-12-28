/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            sans: ["Inter", "sans-serif"],
            heading: ["Poppins", "sans-serif"],
        },
        colors: {
            primary: "#6366f1",
            secondary: "#0ea5e9",
            dark: "#020617",
            cardDark: "#0f172a",
        },
        animation: {
            "spin-slow": "spin 10s linear infinite",
            "spin-reverse": "spin 15s linear infinite reverse",
        },
      },
    },
    plugins: [],
}
