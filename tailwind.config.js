/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '200' : "200%"
      },
      spacing: {
        '5/4': '75%',
        '512' : '512px',

      },
      maxWidth: {
        '512': '512px'
      },
      backgroundImage: {
        'main-img': "url('/images/avatar_me.jpg')",
      },
      aspectRatio: {
        '7/10': '7 / 10',
      },
      screens: {
        'ss': '500px'
      }
    },
  },
  plugins: [],
}
