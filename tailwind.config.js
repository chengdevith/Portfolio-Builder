const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        dark: '#0f172a',
        "color-primary": "#875AFA",
        "color-primary-dark": "#643EBE",
        "color-secondary": "#FA875A",
        "color-secondary-dark": "#D56B40",
        "color-body": "#F4F4F4",
        "color-text": "#222222",
        "color-description": "#6B757D",
      },
      fontFamily: {
        opensans: ["Open Sans",'sans-serif'],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
