/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],  
  theme: {
    extend: {
      colors: {
        "black-rgba": "rgba(239, 239, 239, 0.5)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
