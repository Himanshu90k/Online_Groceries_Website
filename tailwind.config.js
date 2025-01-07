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
        lightBlack: 'rgba(0, 0, 0, 0.80)',
        extraLightBlack: 'rgba(0, 0, 0, 0.60)',
        lightRed: '#F4C6C6',
        customYellow: '#FED716',
        customRed: '#D31F28',
        customPink: '#FE1658',
      },
      fontSize: {
        'xxs': '10px',
        '3.5xl': '2rem',
        '4.5xl': '2.5rem',
      },
      width: {
        '6px': '6px',
        '7px': '7px',
        2.5: '0.625rem',
        3.5: '14px',
        6.5: '26px',
        15: '3.75rem',
        78: '18.75rem',
        116: '32.25rem',
        120: '37.5rem',
        140: '45rem',
        190: '51.25rem',
        250: '68.625rem',
        270: '74.375rem',
        278: '77rem',
        280: '77.5rem',
        300: '85rem',
      },
      minWidth: {
        71: '17.375rem',
        78: '18.75rem',
      },
      maxWidth: {
        300: '85rem',
        270: '74.375rem',
      },
      height: {
        '5px': '5px',
        '6px': '6px',
        6.5: '26px',
        7: '1.875rem',
        4.5: '18px',
        9.5: '38px',
        15: '3.75rem',
        19: '4.375rem',
        78: '18.75rem',
        96: '22.625rem',
        100: '25rem',
        140: '37.5rem',
        190: '50.875rem',
      },
      borderWidth: {
        3: '3px',
        6: '6px',
        16: '16px',
      },
      strokeWidth: {
        3: '3px',
        4: '4px',
        8: '8px',
      },
      borderRadius: {
        '4-xl': '2rem',
        '5-xl': '2.875rem',
        '8-xl': '5.625rem',
      },
      boxShadow: {
        locationBarShadow: '0px 6px 6px 0px rgba(0, 0, 0, 0.30)',
        locationBoxShadow: '-2px 2px 6px 0px rgba(0, 0, 0, 0.25)',
        searchBoxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
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

