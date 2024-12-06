/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1114px',
        xl: '1280px',
        xxl: '1366px',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Sacramento: ['Sacramento', 'sans-serif'],
      },
      content: {
        greenCircle: 'url("/Images/circle.png")',
      },
    },
  },
  plugins: [],
}
