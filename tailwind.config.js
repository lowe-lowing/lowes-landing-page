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
      },
      gridTemplateColumns: {
        "right-auto": "1fr auto",
        "projectPagination": "auto 1fr auto",
      },
    },
  },
  plugins: [],
};
