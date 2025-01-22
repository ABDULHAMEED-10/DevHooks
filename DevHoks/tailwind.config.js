/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 4s ease 0s infinite normal none running",
        "bounce-right-left-slow":
          "bounce-right-left 4s ease 0s infinite normal none running",
      },
      keyframes: {
        "bounce-right-left": {
          "0%, 100%": {
            transform: "translateX(20%)",
            animationTimingFunction: "ease",
          },
          "50%": {
            transform: "translateX(0)",
            animationTimingFunction: "ease",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-16%)",
            animationTimingFunction: "ease",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "ease",
          },
        },
      },
    },
  },
  plugins: [],
};
