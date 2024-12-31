/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        customBlack: '#1E1E1E',
      },
      fontSize: {
        'xxs': '10px',
      },
      width: {
        2.5: '0.625rem',
      },
      height: {
        2.5: '0.625rem',
      },
      borderWidth: {
        3: '3px',
      },
      borderRadius: {
        '4-xl': '1.25rem',
      },
      boxShadow: {
        cardShadow: '4px 3px 8.1px 0px rgba(0, 0, 0, 0.26)',
      },
      gap: {
        8.5: '2.125rem',
      },
      margin: {
        0.1: '1px',
      },
      backgroundImage: {
        'custom-blue-gradient': 'linear-gradient(180deg, #9FD3FF 0%, #81BDEF 22.86%, #72B2E7 41.94%, #2B7DC0 100%)',
      },
    },
  },
  plugins: [],
}

