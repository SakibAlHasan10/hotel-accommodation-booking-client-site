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
        'rooms-bg': "url('https://res.cloudinary.com/wego/w_1400,h_300,c_fill,f_auto,fl_lossy,q_auto:low/v21012019/destinations/cities/DXB.jpg')",
      },
      colors:{
        primaryColor:"#0a5299"
      },
      daisyui: {
        themes: ["light", "dark"],
      },
    },
  },
  plugins: [require("daisyui")],
}

