import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      container: {
        // padding: "0.5rem",
        center: true,
      },
      colors: {
        primary: {
          DEFAULT: "#61DAFB",
        },
        secondary: {
          DEFAULT: "#3EA99F",
        },
      },
      backgroundColor: {
        primary: {
          DEFAULT: "#0C0823",
        },
        secondary: {
          DEFAULT: "rgb(71 85 105);",
        },
        card: {
          DEFAULT: "rgb(148 163 184);",
        },
        button: {
          DEFAULT: "#61DAFB",
        },
      },
      gridTemplateColumns: {
        "right-auto": "1fr auto",
        projectPagination: "auto 1fr auto",
      },
      // keyframes: {
      //   "accordion-down": {
      //     from: { height: "0" },
      //     to: { height: "var(--radix-accordion-content-height)" },
      //   },
      //   "accordion-up": {
      //     from: { height: "var(--radix-accordion-content-height)" },
      //     to: { height: "0" },
      //   },
      // },
      // animation: {
      //   "accordion-down": "accordion-down 0.2s ease-out",
      //   "accordion-up": "accordion-up 0.2s ease-out",
      // },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
