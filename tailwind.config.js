module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        'custom-white': '#f3f3f3'
      },
      textColor: {
        'custom-black': '#1a1a1a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}