/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
				proximaNovaThin: "'ProximaNovaThin', serif",
				ProximaNovaLight: "'ProximaNovaLight', serif",
				ProximaNovaRegular: "'ProximaNovaRegular', serif",
				ProximaNovaMedium: "'ProximaNovaMedium', serif",
				ProximaNovaSemiBold: "'ProximaNovaSemiBold', serif",
				ProximaNovaBold: "'ProximaNovaBold', serif",
				ProximaNovaExtraBold: "'ProximaNovaExtraBold', serif",
				ProximaNovaBlack: "'ProximaNovaBlack', serif",
			},
      spacing: {
        529: "529px",
      },
      colors: {
        "yourproject-red": "#ED2025",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};