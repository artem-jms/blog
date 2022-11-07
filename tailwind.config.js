/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['Titillium Web', 'sans-serif']
      },
      colors: {
        conduit: {
          green: '#5CB85C'
        },
        buttons: {
          default: 'rgba(0, 0, 0, 0.8)',
          hover: 'rgba(0, 0, 0, 0.6)',
          disabled: 'rgba(0, 0, 0, 0.3)',
        }
      },
      spacing: {
        navItem: '0.425rem'
      }
    },
  },
  plugins: [],
}
