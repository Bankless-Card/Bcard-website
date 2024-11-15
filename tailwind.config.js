/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      linearGradientColors: {
        "custom-gradient":
          "linear-gradient(to right, #000000 7%, #8B3E9D 46%, #D9D9D9 77%)",
      },
      opacity: {
        91: "0.91",
      },
    },
  },
  plugins: [],
};
