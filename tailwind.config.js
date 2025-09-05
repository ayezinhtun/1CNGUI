/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom color
        primary: '#000099', // Example: A shade of blue
        primaryHover: '#3333CC', // Example: A slightly darker shade of blue
        secondary: '#283E80', // Example: A shade of indigo
        secondaryHover: '#2929b3', // Example: A slightly lighter shade of indigo
        accent: '#ffaa04', // Example: A shade of yellow
        accentHover: '#e69500', // Example: A slightly darker shade of yellow
      },

      fontFamily: {
        sans: ['Aptos', 'sans-serif'], // Set Aptos as the default sans font
      },

      animation: {
        "gradient-motion": "gradientMotion 5s ease infinite",
      },
      keyframes: {
        gradientMotion: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
    },
  },
  plugins: [],
}