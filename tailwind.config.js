/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: true,
  theme: {
    extend: {
      colors: {
        primary: "#01070d",
        secondary: "#0599A0",
        tertiary: "#197584",
        "blue-100": "#197590",
        "blue-200": "#197588",
        "white-100": "#f3f3f3",
        fourth: "#0075A8",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "350px",
      },
      backgroundImage: {
        "hero-pattern":
          "url('/src/assets/3d-render-grunge-room-interior-with-foggy-atmosphere.jpg')",
        "card": "url('/public/pokeball_-_free/textures/standardSurface2SG_emissive.png')",
        "circular":
          "repeating-radial-gradient(rgba(0,0,0,0.4) 40px,transparent 75px,transparent 230px)",
        "cirsmall":
          "repeating-radial-gradient(rgba(0,0,0,0.4) 40px,transparent 65px,transparent 110px)",
      },
      animation: {
        'pulse-slow': 'pulse 20s linear infinite',
      },
    },
  },
  plugins: [],
};
