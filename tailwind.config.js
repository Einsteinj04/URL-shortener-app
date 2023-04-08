/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Primary colors
      cyan: "hsl(var(--primary-cyan))",
      darkviolet: "hsl(var(--primary-dark-violet))",

      // Secondary colors
      red: "hsl(var(--secondary-red))",

      // Neutral colors
      gray: "hsl(var(--neutral-gray))",
      grayishviolet: "hsl(var(--neutral-grayish-violet))",
      verydarkblue: "hsl(var(--neutral-very-dark-blue))",
      verydarkviolet: "hsl(var(--neutral-very-dark-violet))",
      white: "hsl(var(--neutral-white))",
      black: "hsl(var(--neutral-black))",
      slate: "hsl(var(--slate))",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      //serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};