/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './src/**/*.{html,js,jsx}',
    "/flowbite-react/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [import('flowbite-react/tailwind')],
}


