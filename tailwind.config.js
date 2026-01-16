/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  darkMode: 'class',
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // tema claro
        primary: '#ff4f2e',
        secondary: '#3782a3',
        text: '#b4a494',
        background: '#f1f5f9', // slate-100
        backgroundSecondary: '#e5e7eb', // gray-200
        backgroundWeb: '#eff6ff', // blue-50
        // tema oscuro
        darkPrimary: '#b76317',
        darkSecondary: '#3782a3',
        darkText: '#b4a494',
        darkBackground: '#191d29',
        darkBackgroundSecondary: '#000',
        darkBackgroundWeb: '#000',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px"
    }
  },
  plugins: [],
};
