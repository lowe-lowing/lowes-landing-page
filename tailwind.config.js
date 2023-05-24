/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        "projectPagination": "auto 1fr auto",
      },
      // keyframes: {
      //   "fade-in": {
      //     "0%": {
      //       opacity: 0,
      //     },
      //     "100%": {
      //       opacity: 1,
      //     },
      //   },
      // },
      // animation: {
      //   "fade-in": "fade-in 3s ease-out",
      // },
    },
  },
  plugins: [],
};