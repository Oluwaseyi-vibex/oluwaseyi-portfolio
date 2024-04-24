/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        FiraCode: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
};
