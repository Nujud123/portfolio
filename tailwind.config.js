/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0f4ff',
          100: '#b3e5ff',
          200: '#81d4ff',
          300: '#4fc3ff',
          400: '#29b6f6',
          500: '#03a9f4',
          600: '#0288d1',
          700: '#0277bd',
          800: '#0265a8',
          900: '#024a85',
        },
        accent: {
          50: '#fff9e6',
          100: '#fff3cc',
          200: '#ffe699',
          300: '#ffda66',
          400: '#ffcd33',
          500: '#ffc400',
          600: '#ffb300',
          700: '#ff9800',
          800: '#ff8800',
          900: '#ff7700',
        },
      },
    },
  },
  plugins: [],
};
