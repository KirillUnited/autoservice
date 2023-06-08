/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '10px',
    },
    screens: {
      'sm': '767px',
      'md': '1024px',
      'lg': '1140px',
    },
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'text': 'var(--color-text)',
      },
    },
  },
  preFlight: false,
  plugins: [],
}
