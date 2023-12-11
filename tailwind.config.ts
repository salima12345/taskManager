/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '14.494': '14.494px',
        '12.682': '12.682px',
      },
      lineHeight: {
        '21.741': '21.741',
        '140': '140%',
      },
      textColor: {
        '1A1919': '#1A1919',
        '252C32': '#252C32',
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};