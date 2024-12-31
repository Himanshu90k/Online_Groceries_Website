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
        lightRed: '#F4C6C6',
        customYellow: '#FED716',
        customRed: '#D31F28',
        customPink: '#FE1658',
      },
      fontSize: {
        'xxs': '10px',
      },
      width: {
        2.5: '0.625rem',
        120: '37.5rem',
        140: '45rem',
        250: '68.625rem',
        270: '74.375rem',
        300: '85rem',
      },
      height: {
        78: '18.75rem',
        96: '22.625rem',
        100: '25rem',
      },
      borderWidth: {
        3: '3px',
        16: '16px',
      },
      borderRadius: {
        '4-xl': '2rem',
        '5-xl': '2.875rem',
      },
      boxShadow: {
        cardShadow: '4px 3px 8.1px 0px rgba(0, 0, 0, 0.26)',
      },
      dropShadow: {
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      gap: {
        '6-px': '6px',
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

