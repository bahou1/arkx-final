/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      transitionProperty: {
        'opacity': 'opacity',
        'transform': 'transform',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      animation: {
        'popup': 'popup 0.3s ease-out'
      },
      keyframes: {
        popup: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    }
  },
  variants: {
    extend: {
      opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      transform: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      animation: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}