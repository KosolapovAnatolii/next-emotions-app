/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-yellow-100', 'dark:bg-yellow-900',
    'bg-blue-100', 'dark:bg-blue-900',
    'bg-red-100', 'dark:bg-red-900',
    'bg-purple-100', 'dark:bg-purple-900',
    'bg-pink-100', 'dark:bg-pink-900',
    'bg-green-100', 'dark:bg-green-900',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config;

