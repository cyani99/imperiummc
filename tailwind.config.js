/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter'],
        'alegreya-sans': ['AlegreyaSans'],
        'alegreya': ['Alegreya']
      },
      colors: {
        'purple-1': '#0C134F',
        'purple-2': '#D4ADFC',
        'purple-3': '#5C469C',
        'gold-1': '#Ffd700',
      }
    },
  },
  plugins: [],
}

