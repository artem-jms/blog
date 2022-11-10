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
          green: '#5CB85C',
        },
        sidebar: {
          bg: '#f3f3f3',
          a: '#818a91',
          aHover: '#687077',
        },
        buttons: {
          default: 'rgba(0, 0, 0, 0.8)',
          hover: 'rgba(0, 0, 0, 0.6)',
          disabled: 'rgba(0, 0, 0, 0.3)',
        }
      },
      spacing: {
        p15: '15px',
        navItem: '0.425rem',
        sidebar: '5px 10px 10px 10px'
      },
      boxShadow: {
        banner: 'inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%)'
      },
      dropShadow: {
        logo: '0px 1px 3px rgb(0 0 0 / 30%);'
      },
      fontSize: {
        logo: '3.5rem'
      },
      minWidth: {
        mw75: '75%',
        mw25: '25%',
      },
      flex: {
        f75: '0 0 75%',
        f25: '0 0 25%',
      },
      borderRadius: {
        sidebar: '10rem'
      }
    },
  },
  plugins: [],
}
