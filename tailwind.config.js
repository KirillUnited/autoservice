/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '767px',
      'md': '1024px',
      'lg': '1140px',
    },
    extend: {
      colors: {
        'primary': '#13AFF0',
        'secondary': '#f2a00a',
      },
    },
  },
  plugins: [],
}
