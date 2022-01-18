module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        primary: '#337b89',
        'primary-active': '#262d37',
        secondary: '#f6a444',
        'secondary-active': '#ee534e',
        error: '#cd5c5c',
        success: '#86af80',
        white: '#ddccbb'
      }
    },
  },
  plugins: [],
}
