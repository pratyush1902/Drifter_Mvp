/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customBackground: '#F8F9D7',
        primary: "#4F8A8B", // Teal
        secondary: "#FFB400", // Yellow
        background: "#F4F4F4", // Light Gray
        text: "#333333", // Dark Gray
        accent: "#EAEAEA", // Soft Gray
      },
      fontFamily: {
        poppins: "var(--font-poppins), sans-serif",
        roboto: "var(--font-roboto), sans-serif",
          heading: ['Poppins', 'sans-serif'],
  body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin'),
  ],
}