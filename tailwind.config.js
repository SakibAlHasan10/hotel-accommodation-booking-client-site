/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('https://ik.imagekit.io/w13m3d3rhif/web/homepage/homepage-background.jpg?tr=f-auto,pr-true')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      daisyui: {
        themes: ["light", "dark"],
      },
    },
  },
  plugins: [require("daisyui")],
}

