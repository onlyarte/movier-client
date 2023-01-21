/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'rgba(var(--foreground-rgb), <alpha-value>)',
        background: 'rgba(var(--background-start-rgb), <alpha-value>)',
      },
    },
  },
  plugins: [],
};
