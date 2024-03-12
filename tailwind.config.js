/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
    
        'desktop': '1600px',
        // => @media (min-width: 1600px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
}

