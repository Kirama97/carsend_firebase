/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        display: 'Oswald, ui-serif',
      },
      colors: {
        body : 'var(--body)',
        primary : 'var(--primary)',
        secondary : 'var(--secondary)',
        textColor : 'var(--text-color)',
        textHover : 'var(--text-hover)',
        pColor : 'var(--p-color )',
      }
    },
  },
  plugins: [],
}