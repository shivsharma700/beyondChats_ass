
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake","dim","aqua","halloween",'business','dracula'],
  },
  plugins: [
    require('daisyui'),
  ],
}

