const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",  flowbite.content(),],
  theme: {
    extend: {
      colors: {
        "color-primary": "#875AFA",
        "color-secondary": "#FA875A",
        "color-body": "#F4F4F4",
        "color-text": "#222222",
        "color-description": "#6B757D",

      },
      fontFamily: {
       opensans: ["Open Sans"]
      }
    },
  },
  plugins: [flowbite.plugin(),],
};