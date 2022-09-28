/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#75f26a",

          "secondary": "#410be2",

          "accent": "#caef37",

          "neutral": "#271D2F",

          "base-100": "#F4F7FA",

          "info": "#9EBDE5",

          "success": "#4EDA99",

          "warning": "#E9A93A",

          "error": "#F50A29",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
