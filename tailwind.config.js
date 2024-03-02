/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '10px',
      // => @media (min-width: 640px) { ... }

      'md': '600px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("daisyui")],
}

